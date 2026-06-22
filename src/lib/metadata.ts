import type { Metadata } from "next";
import { absoluteUrl, siteUrl } from "@/lib/site";

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: PageMetadata): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "神戸音学祭",
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: absoluteUrl("/images/logos/logo_main_2026.jpg"),
          width: 1200,
          height: 630,
          alt: "神戸音学祭 2026",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@K0beOngakusai",
      creator: "@K0beOngakusai",
      images: [absoluteUrl("/images/logos/logo_main_2026.jpg")],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "神戸音学祭実行委員会",
  url: siteUrl,
  logo: absoluteUrl("/images/logos/logo_main_2026.jpg"),
  sameAs: [
    "https://www.instagram.com/kobe_ongakusai/",
    "https://x.com/K0beOngakusai",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "神戸音学祭",
  alternateName: ["神戸音学祭2026", "Kobe Ongakusai"],
  url: siteUrl,
};
