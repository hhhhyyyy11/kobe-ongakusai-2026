export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://kobe-ongakusai.com";

export const siteRoutes = [
  {
    path: "",
    priority: 1,
  },
  {
    path: "/about",
    priority: 0.8,
  },
  {
    path: "/artists",
    priority: 0.7,
  },
  {
    path: "/timetable",
    priority: 0.7,
  },
  {
    path: "/booths",
    priority: 0.7,
  },
  {
    path: "/archive",
    priority: 0.5,
  },
] as const;

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}
