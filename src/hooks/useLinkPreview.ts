import { useEffect, useMemo, useState } from "react";

export type LinkPreview = {
  url: string;
  title: string | null | undefined;
  description: string | null | undefined;
  image: string | null;
  favicon?: string | null;
};

type State = {
  loading: boolean;
  error: string | null;
  data: LinkPreview | null;
};

export function useLinkPreview(rawUrl: string | null | undefined) {
  const url = useMemo(() => (rawUrl || "").trim(), [rawUrl]);
  const [state, setState] = useState<State>({ loading: false, error: null, data: null });

  useEffect(() => {
    let cancelled = false;
    if (!url) {
      setState({ loading: false, error: null, data: null });
      return;
    }
    const controller = new AbortController();
    setState((s) => ({ ...s, loading: true, error: null }));
    const rawBase = (import.meta as any)?.env?.VITE_PREVIEW_API_BASE as string | undefined;
    const apiBase = rawBase ? rawBase.replace(/\/$/, "") : "";
    const endpoint = `${apiBase}/api/link-preview?url=${encodeURIComponent(url)}`;
    fetch(endpoint, { signal: controller.signal })
      .then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: LinkPreview) => {
        if (!cancelled) setState({ loading: false, error: null, data });
      })
      .catch((err: any) => {
        if (!cancelled) setState({ loading: false, error: err?.message || "Failed to load", data: null });
      });
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [url]);

  return state;
}
