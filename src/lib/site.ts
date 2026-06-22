const defaultSiteUrl = "https://kobe-ongakusai.com";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl =
  configuredSiteUrl && /^https?:\/\//i.test(configuredSiteUrl)
    ? configuredSiteUrl.replace(/\/+$/, "")
    : defaultSiteUrl;

export const siteHost = new URL(siteUrl).host;

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
    path: "/access",
    priority: 0.8,
  },
  {
    path: "/archive",
    priority: 0.5,
  },
] as const;

export function absoluteUrl(path = "") {
  if (!path) {
    return siteUrl;
  }

  return new URL(path, `${siteUrl}/`).toString();
}
