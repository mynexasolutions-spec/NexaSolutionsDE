import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import AppKostenClient from "./AppKostenClient";
import { APP_COST_CONFIG } from "@/data/appKostenData";

export const metadata: Metadata = pageMetadata({
  title: "App Entwicklung Kosten Rechner 2026",
  description:
    "App Entwicklung Kosten berechnen: Kostenrechner für iOS & Android, alle Kostenfaktoren vom MVP bis zur Enterprise-App. Jetzt kostenloses Festpreis-Angebot anfragen!",
  path: "/app-entwicklung-kosten",
  // German-only URL (English is a client-side toggle) → no en-* alternate
  languages: {
    "de-DE": `${SITE_URL}/app-entwicklung-kosten`,
    "x-default": `${SITE_URL}/app-entwicklung-kosten`,
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
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
      ],
    },
    url: `${SITE_URL}/app-entwicklung-kosten`,
  };

  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "App Entwicklung Kosten Rechner",
    url: `${SITE_URL}/app-entwicklung-kosten#app-rechner`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "de-DE",
    description:
      "Kostenloser Online-Rechner: Schätzen Sie die Entwicklungsdauer Ihrer iOS- oder Android-App nach Plattform, Projektumfang, Funktionen und Design.",
    isAccessibleForFree: true,
    provider: { "@type": "Organization", name: "Nexa Solutions", url: SITE_URL },
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
      <JsonLd data={[serviceJsonLd, calculatorJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <AppKostenClient />
    </>
  );
}
