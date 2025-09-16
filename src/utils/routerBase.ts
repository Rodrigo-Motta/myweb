export const getRouterBasename = () => {
  const envBase = import.meta.env.BASE_URL;

  if (envBase && envBase !== './') {
    const sanitized = envBase.endsWith('/') ? envBase.slice(0, -1) : envBase;
    return sanitized || '/';
  }

  if (typeof window !== 'undefined') {
    const segments = window.location.pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      return `/${segments[0]}`;
    }
  }

  return '/';
};
