function attr(tag: string, name: string) {
  const re = new RegExp(name + "\\s*=\\s*([\"\'])(.*?)\\1", "i");
  const m = tag.match(re);
  return m ? m[2] : undefined;
}

function parseOgFromHtml(html: string, baseUrl: string): string | null {
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
    getMeta([
      "og:image:secure_url",
      "og:image:url",
      "og:image",
      "twitter:image",
    ]) || getLink(["image_src"]);
  try {
    return rawImg ? new URL(rawImg, baseUrl).href : null;
  } catch {
    return rawImg || null;
  }
}

export async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const rawBase = (import.meta as any)?.env?.VITE_PREVIEW_API_BASE as string | undefined;
    const apiBase = rawBase ? rawBase.replace(/\/$/, '') : '';

    if (apiBase) {
      const r = await fetch(`${apiBase}/api/link-preview?url=${encodeURIComponent(url)}`);
      if (r.ok) {
        const data = await r.json();
        if (data && typeof data.image === 'string') return data.image as string;
      }
    }

    // Fallback to Microlink service if no server is configured or request fails
    const mr = await fetch(
      `https://api.microlink.io?url=${encodeURIComponent(url)}&fields=image.url`,
      { headers: { 'Accept': 'application/json' } }
    );
    if (!mr.ok) return null;
    const mdata = await mr.json();
    const img = mdata?.data?.image?.url as string | undefined;
    if (img) return img;

    // Last-resort fallback: fetch raw HTML via Jina reader proxy and parse tags client-side
    const jr = await fetch(`https://r.jina.ai/http/${url}`);
    if (!jr.ok) return null;
    const html = await jr.text();
    return parseOgFromHtml(html, url);
  } catch {
    return null;
  }
}
