import { getRouterBasename } from './routerBase';

const normalizeSegment = (segment: string) =>
  segment.startsWith('/') ? segment.slice(1) : segment;

const ensureTrailingSlash = (value: string) =>
  value.endsWith('/') ? value : `${value}/`;

export const withBasePath = (assetPath: string) => {
  const envBase = import.meta.env.BASE_URL;
  const normalizedAsset = normalizeSegment(assetPath);

  if (envBase && envBase !== './') {
    const normalizedBase = ensureTrailingSlash(envBase);
    return `${normalizedBase}${normalizedAsset}`;
  }

  if (typeof window !== 'undefined') {
    const runtimeBase = ensureTrailingSlash(getRouterBasename());
    return `${runtimeBase}${normalizedAsset}`;
  }

  return `/${normalizedAsset}`;
};
