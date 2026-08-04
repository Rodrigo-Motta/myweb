import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { blogUrls } from "./src/lib/blogUrls";

// Fetch OG images for blog URLs at build time (no server needed in prod).
async function fetchOgImageAtBuild(url: string): Promise<string | null> {
  const UA =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
  const attr = (tag: string, name: string) => {
    const re = new RegExp(name + "\\s*=\\s*([\"\'])(.*?)\\1", "i");
    const m = tag.match(re);
    return m ? m[2] : undefined;
  };
  try {
    const r = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml" },
      signal: AbortSignal.timeout(10000),
    });
    const ctype = (r.headers.get("content-type") || "").toLowerCase();
    if (/^image\//.test(ctype)) return url;
    const html = await r.text();
    const end = html.indexOf("</head>");
    const head = end !== -1 ? html.slice(0, end + 7) : html.slice(0, 40000);
    const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
    const links = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]);
    const getMeta = (names: string[]) => {
      for (const tag of metas) {
        const prop = attr(tag, "property") || attr(tag, "name");
        const content = attr(tag, "content");
        if (!prop || !content) continue;
        if (names.includes(prop.toLowerCase())) return content.trim();
      }
      return undefined;
    };
    const getLink = (rels: string[]) => {
      for (const tag of links) {
        const rel = (attr(tag, "rel") || "").toLowerCase();
        if (!rel) continue;
        for (const r of rels) {
          if (rel.split(/\s+/).includes(r)) {
            const href = attr(tag, "href");
            if (href) return href.trim();
          }
        }
      }
      return undefined;
    };
    const rawImg =
      getMeta(["og:image:secure_url", "og:image:url", "og:image", "twitter:image"]) ||
      getLink(["image_src"]);
    if (rawImg) {
      try { return new URL(rawImg, url).href; } catch { /* ignore */ }
    }
  } catch {
    // fall through to microlink
  }
  // Microlink fallback (handles JS-rendered og:image)
  try {
    const mr = await fetch(
      `https://api.microlink.io?url=${encodeURIComponent(url)}&fields=image.url`,
      { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(10000) },
    );
    if (mr.ok) {
      const md = await mr.json();
      const img = md?.data?.image?.url;
      if (typeof img === "string" && img) return img;
    }
  } catch {
    // ignore
  }
  return null;
}

// Virtual module that exposes pre-fetched OG images to the client bundle.
function ogImagesPlugin() {
  const virtualId = "virtual:og-images";
  const resolvedId = `\0${virtualId}`;
  let cache: Record<string, string | null> | null = null;
  return {
    name: "og-images-virtual",
    resolveId(id: string) {
      if (id === virtualId) return resolvedId;
      return null;
    },
    async load(id: string) {
      if (id !== resolvedId) return null;
      if (!cache) {
        console.log(`[og-images] Pre-fetching ${blogUrls.length} OG images...`);
        cache = {};
        // Fetch sequentially with a small delay to avoid rate limits.
        for (const url of blogUrls) {
          const img = await fetchOgImageAtBuild(url);
          cache[url] = img;
          console.log(`[og-images] ${img ? "ok" : "miss"} <- ${url.slice(0, 60)}`);
          await new Promise((r) => setTimeout(r, 250));
        }
      }
      return `export default ${JSON.stringify(cache)};`;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  const fallbackBase = isDev ? '/' : './';

  // Lightweight handler for /api/link-preview during Vite dev
  function linkPreviewPlugin() {
    const UA =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

    const takeHead = (html: string) => {
      const end = html.indexOf("</head>");
      if (end !== -1) return html.slice(0, end + 7);
      return html.slice(0, 40000);
    };

    const attr = (tag: string, name: string) => {
      const re = new RegExp(name + "\\s*=\\s*([\"\'])(.*?)\\1", "i");
      const m = tag.match(re);
      return m ? m[2] : undefined;
    };

    const parsePreview = (html: string, baseUrl: string) => {
      const head = takeHead(html);
      const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
      const links = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]);
      const titleTag = head.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
      const fallbackTitle = titleTag ? titleTag[1].trim() : undefined;

      const getMeta = (names: string[]) => {
        for (const tag of metas) {
          const prop = attr(tag, "property") || attr(tag, "name");
          const content = attr(tag, "content");
          if (!prop || !content) continue;
          if (names.includes(prop.toLowerCase())) return content.trim();
        }
        return undefined;
      };

      const getLink = (rels: string[]) => {
        for (const tag of links) {
          const rel = (attr(tag, "rel") || "").toLowerCase();
          if (!rel) continue;
          for (const r of rels) {
            if (rel.split(/\s+/).includes(r)) {
              const href = attr(tag, "href");
              if (href) return href.trim();
            }
          }
        }
        return undefined;
      };

      const title = getMeta(["og:title", "twitter:title"]) || fallbackTitle || undefined;
      const description = getMeta(["og:description", "twitter:description", "description"]) || undefined;
      const rawImg = getMeta(["og:image:secure_url", "og:image:url", "og:image", "twitter:image"]) || getLink(["image_src"]);
      const resolveUrl = (maybeRelative: string | undefined) => {
        if (!maybeRelative) return undefined;
        try { return new URL(maybeRelative, baseUrl).href; } catch { return undefined; }
      };
      const image = resolveUrl(rawImg) || null;
      const iconHref = getLink(["apple-touch-icon", "icon", "shortcut icon"]) || "/favicon.ico";
      const favicon = resolveUrl(iconHref) || null;
      return { url: baseUrl, title, description, image, favicon };
    };

    return {
      name: "link-preview-api",
      configureServer(server: any) {
        server.middlewares.use("/api/link-preview", async (req: any, res: any) => {
          try {
            const reqUrl = new URL(req.url, "http://local");
            const target = reqUrl.searchParams.get("url");
            if (!target) {
              res.statusCode = 400;
              res.setHeader("content-type", "application/json");
              res.end(JSON.stringify({ error: "Missing url param" }));
              return;
            }
            const controller = new AbortController();
            const to = setTimeout(() => controller.abort(), 8000);
            const r = await fetch(target, {
              redirect: "follow",
              headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml" },
              signal: controller.signal,
            });
            clearTimeout(to);
            const ctype = (r.headers.get("content-type") || "").toLowerCase();
            let body;
            if (/^image\//.test(ctype)) {
              body = { url: target, title: null, description: null, image: target, favicon: null };
            } else {
              const html = await r.text();
              body = parsePreview(html, target);
            }
            // Server-side fallback to Microlink when no OG image was found
            // (e.g. pages that render og:image via JS). This avoids relying
            // on browser-side CORS/rate-limited calls for the client.
            if (!body.image) {
              try {
                const mResp = await fetch(
                  `https://api.microlink.io?url=${encodeURIComponent(target)}&fields=image.url`,
                  { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(8000) },
                );
                if (mResp.ok) {
                  const mData = await mResp.json();
                  const mImg = mData?.data?.image?.url;
                  if (typeof mImg === "string" && mImg) body.image = mImg;
                }
              } catch {
                // ignore microlink failure, keep body as-is
              }
            }
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify(body));
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify({ error: err?.message || "Failed to fetch preview" }));
          }
        });
      },
    };
  }

  return {
    base: process.env.VITE_BASE || fallbackBase,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      ogImagesPlugin(),
      // Exposes /api/link-preview in dev only
      ...(isDev ? [linkPreviewPlugin()] : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
