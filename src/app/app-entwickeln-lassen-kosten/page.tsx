import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import AppKostenClient from "./AppKostenClient";

export const metadata: Metadata = pageMetadata({
  title: "App entwickeln lassen Kosten 2026: Was kostet eine App? | Nexa Solutions",
  description:
    "Was kostet eine mobile App für iOS & Android? Alle Kostenfaktoren, Native vs. Cross-Platform, Phasen und Festpreis-Kalkulation im Überblick. Informieren!",
  path: "/app-entwickeln-lassen-kosten",
});

export default function AppKostenPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "App entwickeln lassen Kosten 2026: Was kostet eine App?",
    description:
      "Transparenter Kostenleitfaden für mobile App-Entwicklung in Deutschland: Native vs. Cross-Platform, Projektphasen und Festpreise.",
    url: `${SITE_URL}/app-entwickeln-lassen-kosten`,
    publisher: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "App Kosten",
        item: `${SITE_URL}/app-entwickeln-lassen-kosten`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[pageJsonLd, breadcrumbJsonLd]} />
      <AppKostenClient />
    </>
  );
}
