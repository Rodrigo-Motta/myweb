import React from "react";
import { useLinkPreview } from "@/hooks/useLinkPreview";

type Props = { url: string };

export function LinkPreview({ url }: Props) {
  const { loading, error, data } = useLinkPreview(url);

  if (!url) return null;
  if (loading) return <div className="text-sm text-gray-500">Loading preview…</div>;
  if (error) return <div className="text-sm text-red-600">Preview error: {error}</div>;
  if (!data) return null;

  return (
    <a href={data.url} target="_blank" rel="noreferrer" className="group block border rounded-lg overflow-hidden hover:shadow-md transition">
      <div className="flex">
        {data.image ? (
          <img src={data.image} alt={data.title || "Preview image"} className="w-32 h-32 object-cover flex-shrink-0 bg-gray-100"/>
        ) : (
          <div className="w-32 h-32 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">No image</div>
        )}
        <div className="p-3 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {data.favicon ? <img src={data.favicon} className="w-4 h-4" alt=""/> : null}
            <span className="text-xs text-gray-500 truncate">{new URL(data.url).hostname}</span>
          </div>
          {data.title ? <div className="font-medium text-gray-900 truncate">{data.title}</div> : null}
          {data.description ? (
            <div className="text-sm text-gray-600 line-clamp-2">{data.description}</div>
          ) : null}
        </div>
      </div>
    </a>
  );
}

export default LinkPreview;

