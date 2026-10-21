import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import AppKostenClient from "./AppKostenClient";
import { APP_COST_CONFIG } from "@/data/appKostenData";

export const metadata: Metadata = pageMetadata({
  title: "App Entwicklung Kosten 2026: Preise & Rechner | Nexa",
  description:
    "Was kostet eine App-Entwicklung? Preisbeispiele, Kostenfaktoren und Rechner für iOS & Android. Jetzt kostenlose Beratung aus Stuttgart anfragen!",
  path: "/app-entwicklung-kosten",
  languages: {
    "de-DE": `${SITE_URL}/app-entwicklung-kosten`,
    "en-US": `${SITE_URL}/app-entwicklung-kosten`,
  },
});

export default function AppKostenPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "App Entwicklung Kosten & Kalkulation",
    serviceType: "Mobile App Development",
    description:
      "Transparente Kostenübersicht, Festpreis-Kalkulationen und interaktiver Kostenrechner für professionelle iOS- und Android-App-Entwicklung.",
    provider: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: SITE_URL,
      areaServed: [
        {
          "@type": "City",
          name: "Stuttgart",
        },
        {
          "@type": "Country",
          name: "Deutschland",
        },
      ],
    },
    url: `${SITE_URL}/app-entwicklung-kosten`,
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
        name: "App Entwicklung Kosten",
        item: `${SITE_URL}/app-entwicklung-kosten`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: APP_COST_CONFIG.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.questionDe,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answerDe,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <AppKostenClient />
    </>
  );
}
