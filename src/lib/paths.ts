export const withBase = (path: string) => {
  if (!path || path.startsWith("http") || path.startsWith("#") || path.startsWith("mailto:")) {
    return path;
  }

  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${base}${cleanPath}`;
};

export const withoutBase = (path: string) => {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

  if (base === "/" || !path.startsWith(base)) {
    return path;
  }

  const stripped = path.slice(base.length - 1);
  return stripped || "/";
};
