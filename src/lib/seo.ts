import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export { SITE_URL };
export const DEFAULT_OG_IMAGE = "/opengraph-image";

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string | { absolute: string };
  description: string;
  path: string;
  keywords?: string[] | string;
  image?: string;
}): Metadata {
  const plainTitle = typeof title === "string" ? title : title.absolute;
  const metadataTitle =
    typeof title === "string" && title.includes("Nexa Solutions")
      ? { absolute: title }
      : title;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const absoluteUrl = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;

  return {
    title: metadataTitle,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: plainTitle,
      description,
      url: absoluteUrl,
      siteName: "Nexa Solutions",
      locale: "de_DE",
      alternateLocale: ["en_US"],
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: plainTitle,
      description,
      images: [image],
    },
  };
}
