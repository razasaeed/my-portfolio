import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { siteMeta, siteUrl } from "@/data/site";

export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteMeta.title,
      template: `%s | ${profile.name}`,
    },
    description: siteMeta.description,
    keywords: [...siteMeta.keywords],
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    publisher: profile.name,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: siteMeta.shortTitle,
      title: siteMeta.title,
      description: siteMeta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteMeta.title,
      description: siteMeta.description,
    },
    category: "technology",
  };
}
