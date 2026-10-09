import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import WebsiteKostenClient from "./WebsiteKostenClient";

export const metadata: Metadata = pageMetadata({
  title: "Website Kosten 2026: Leitfaden | Nexa Solutions",
  description:
    "Was kostet eine moderne Website? Alle Kostenfaktoren, Phasen, Festpreis-Kalkulation und Einsparpotenziale im transparenten Überblick. Jetzt informieren!",
  path: "/website-kosten",
});

export default function WebsiteKostenPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Website Kosten 2026: Was kostet eine Website?",
    description:
      "Transparenter Leitfaden zu Kostenfaktoren, Projektphasen und Festpreis-Kalkulationen für professionelle Unternehmens-Websites.",
    url: `${SITE_URL}/website-kosten`,
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
        name: "Website Kosten",
        item: `${SITE_URL}/website-kosten`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[pageJsonLd, breadcrumbJsonLd]} />
      <WebsiteKostenClient />
    </>
  );
}
