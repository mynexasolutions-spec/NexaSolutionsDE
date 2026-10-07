import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { solutionsData } from "@/data/solutions";
import SolutionsHubClient from "./SolutionsHubClient";

export const metadata: Metadata = pageMetadata({
  title: "Digitale Lösungen & Individualsoftware | Nexa Solutions",
  description:
    "Maßgeschneiderte Softwarelösungen für Unternehmen: Zeiterfassung, CRM, Terminbuchung, KI-Chatbots, n8n-Workflows und Gastro-Systeme. Jetzt entdecken!",
  path: "/loesungen",
});

export default function SolutionsIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Digitale Lösungen & Individualsoftware",
    description:
      "Übersicht unserer maßgeschneiderten Unternehmenslösungen für Web, Apps und KI-Automatisierung.",
    url: `${SITE_URL}/loesungen`,
    provider: {
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
        name: "Lösungen",
        item: `${SITE_URL}/loesungen`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[collectionJsonLd, breadcrumbJsonLd]} />
      <SolutionsHubClient solutions={solutionsData} />
    </>
  );
}
