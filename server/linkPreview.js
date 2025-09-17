// Lightweight Open Graph/Twitter card parser without external dependencies.
// Fetches a URL, extracts title/description/image from meta/link tags.

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function isHttpUrl(raw) {
  try {
    const u = new URL(String(raw));
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function attr(tag, name) {
  const re = new RegExp(name + "\\s*=\\s*([\"\'])(.*?)\\1", "i");
  const m = tag.match(re);
  return m ? m[2] : undefined;
}

function resolveUrl(base, maybeRelative) {
  try {
    return new URL(maybeRelative, base).href;
  } catch {
    return undefined;
  }
}

function takeHead(html) {
  const end = html.indexOf("</head>");
  if (end !== -1) return html.slice(0, end + 7);
  return html.slice(0, 40000); // cap to avoid huge scans
}

function parsePreview(html, baseUrl) {
  const head = takeHead(html);

  const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
  const links = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]);

  const titleTag = head.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const fallbackTitle = titleTag ? titleTag[1].trim() : undefined;

  const getMeta = (names) => {
    for (const tag of metas) {
      const prop = attr(tag, "property") || attr(tag, "name");
      const content = attr(tag, "content");
      if (!prop || !content) continue;
      if (names.includes(prop.toLowerCase())) return content.trim();
    }
    return undefined;
  };

  const getLink = (rels) => {
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

  const title =
    getMeta(["og:title", "twitter:title"]) || fallbackTitle || undefined;
  const description =
    getMeta(["og:description", "twitter:description", "description"]) ||
    undefined;
  const rawImg =
    getMeta([
      "og:image:secure_url",
      "og:image:url",
      "og:image",
      "twitter:image",
    ]) || getLink(["image_src"]); // legacy

  const image = rawImg ? resolveUrl(baseUrl, rawImg) : undefined;

  // favicon fallback if no image
  let favicon;
  const iconHref = getLink(["apple-touch-icon", "icon", "shortcut icon"]) || 
    "/favicon.ico";
  if (iconHref) favicon = resolveUrl(baseUrl, iconHref);

  return {
    url: baseUrl,
    title,
    description,
    image: image || null,
    favicon: favicon || null,
  };
}

export async function fetchPreview(targetUrl, { timeoutMs = 8000 } = {}) {
  if (!isHttpUrl(targetUrl)) {
    const err = new Error("Invalid URL");
    err.status = 400;
    throw err;
  }

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(targetUrl, {
      redirect: "follow",
      headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml" },
      signal: controller.signal,
    });

    const ctype = (res.headers.get("content-type") || "").toLowerCase();
    if (/^image\//.test(ctype)) {
      return {
        url: targetUrl,
        title: null,
        description: null,
        image: targetUrl,
        favicon: null,
      };
    }

    const html = await res.text();
    return parsePreview(html, targetUrl);
  } finally {
    clearTimeout(t);
  }
}
