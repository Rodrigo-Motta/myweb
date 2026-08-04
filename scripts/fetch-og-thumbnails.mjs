// Pre-build step: fetch OG image URLs for each blog post, download the
// actual image bytes, save them under public/og/, and write a manifest
// (url -> local path) that the Vite virtual module serves to the client.
// Serving thumbnails locally (same origin / GitHub Pages CDN) avoids
// slow cross-origin handshakes to cdn.website-files.com / miro.medium.com.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'og');
const MANIFEST = path.join(ROOT, 'src', 'lib', 'og-thumbnails-manifest.json');

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// Extract blog URLs from the TS source (avoids needing a TS loader here).
function readBlogUrls() {
  const src = fs.readFileSync(path.join(ROOT, 'src/lib/blogUrls.ts'), 'utf8');
  const matches = [...src.matchAll(/'([^']+)'/g)].map((m) => m[1]);
  return matches.filter((u) => /^https?:\/\//.test(u));
}

const attr = (tag, name) => {
  const re = new RegExp(name + '\\s*=\\s*(["\'])(.*?)\\1', 'i');
  const m = tag.match(re);
  return m ? m[2] : undefined;
};

async function fetchOgImageUrl(url) {
  try {
    const r = await fetch(url, {
      redirect: 'follow',
      headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml' },
      signal: AbortSignal.timeout(12000),
    });
    const ctype = (r.headers.get('content-type') || '').toLowerCase();
    if (/^image\//.test(ctype)) return url;
    const html = await r.text();
    const end = html.indexOf('</head>');
    const head = end !== -1 ? html.slice(0, end + 7) : html.slice(0, 40000);
    const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
    const getMeta = (names) => {
      for (const tag of metas) {
        const prop = attr(tag, 'property') || attr(tag, 'name');
        const content = attr(tag, 'content');
        if (!prop || !content) continue;
        if (names.includes(prop.toLowerCase())) return content.trim();
      }
      return undefined;
    };
    const raw = getMeta(['og:image:secure_url', 'og:image:url', 'og:image', 'twitter:image']);
    if (raw) {
      try { return new URL(raw, url).href; } catch { /* ignore */ }
    }
  } catch { /* fall through */ }
  // Microlink fallback for JS-rendered og:image
  try {
    const mr = await fetch(
      `https://api.microlink.io?url=${encodeURIComponent(url)}&fields=image.url`,
      { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(12000) },
    );
    if (mr.ok) {
      const md = await mr.json();
      const img = md?.data?.image?.url;
      if (typeof img === 'string' && img) return img;
    }
  } catch { /* ignore */ }
  return null;
}

function extFromType(type) {
  const t = (type || '').toLowerCase();
  if (t.includes('webp')) return '.webp';
  if (t.includes('png')) return '.png';
  if (t.includes('jpeg') || t.includes('jpg')) return '.jpg';
  if (t.includes('gif')) return '.gif';
  return '';
}

async function downloadImage(imgUrl) {
  const r = await fetch(imgUrl, {
    redirect: 'follow',
    headers: { 'User-Agent': UA },
    signal: AbortSignal.timeout(15000),
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  const ext = extFromType(r.headers.get('content-type')) || path.extname(new URL(imgUrl).pathname).slice(0, 5) || '.img';
  const hash = crypto.createHash('sha1').update(imgUrl).digest('hex').slice(0, 16);
  const name = `${hash}${ext}`;
  fs.writeFileSync(path.join(OUT_DIR, name), buf);
  return `og/${name}`;
}

async function withPool(items, limit, worker) {
  const results = new Array(items.length);
  let i = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  // Clear stale thumbnails
  for (const f of fs.readdirSync(OUT_DIR)) fs.unlinkSync(path.join(OUT_DIR, f));

  const urls = readBlogUrls();
  console.log(`[og-thumbnails] Processing ${urls.length} posts (concurrency 6)...`);

  const manifest = {};
  await withPool(urls, 6, async (postUrl) => {
    try {
      const imgUrl = await fetchOgImageUrl(postUrl);
      if (!imgUrl) {
        console.log(`[og-thumbnails] MISS og-url  <- ${postUrl.slice(0, 70)}`);
        return;
      }
      try {
        const local = await downloadImage(imgUrl);
        manifest[postUrl] = local;
        console.log(`[og-thumbnails] downloaded  <- ${postUrl.slice(0, 70)}`);
      } catch (e) {
        // Keep remote URL as a fallback so the client can still render it.
        manifest[postUrl] = imgUrl;
        console.log(`[og-thumbnails] remote-fb  <- ${postUrl.slice(0, 70)} (${e.message})`);
      }
    } catch (e) {
      console.log(`[og-thumbnails] FAIL        <- ${postUrl.slice(0, 70)} (${e.message})`);
    }
  });

  fs.mkdirSync(path.dirname(MANIFEST), { recursive: true });
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
  const ok = Object.keys(manifest).length;
  console.log(`[og-thumbnails] Done. ${ok}/${urls.length} entries written to manifest.`);
}

main().catch((e) => {
  console.error('[og-thumbnails] Fatal:', e);
  process.exit(1);
});
