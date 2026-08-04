/// <reference types="vite/client" />

declare module 'virtual:og-images' {
  const ogImages: Record<string, string | null>;
  export default ogImages;
}
