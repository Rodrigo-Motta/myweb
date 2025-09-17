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
    return img || null;
  } catch {
    return null;
  }
}

