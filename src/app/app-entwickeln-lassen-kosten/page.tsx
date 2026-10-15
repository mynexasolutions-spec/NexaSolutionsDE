import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import AppKostenClient from "./AppKostenClient";

export const metadata: Metadata = pageMetadata({
  title: "App Entwicklung Kosten 2026: Was kostet eine App? | Nexa Solutions",
  description:
    "Was kostet eine App Entwicklung für iOS & Android? Kostenfaktoren, Native vs. Cross-Platform & Festpreis-Kalkulation im transparenten Kostenleitfaden.",
  path: "/app-entwickeln-lassen-kosten",
});

export default function AppKostenPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "App Entwicklung Kosten 2026: Was kostet es, eine App entwickeln zu lassen?",
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
        name: "App Entwicklung Kosten",
        item: `${SITE_URL}/app-entwickeln-lassen-kosten`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet es, eine App entwickeln zu lassen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Kosten einer App-Entwicklung hängen stark vom Funktionsumfang, Design und der Plattformstrategie ab. Ein Basis-MVP startet typischerweise bei einem schlanken Festpreis, während mittelgroße Business-Apps oder komplexe Enterprise-Plattformen mit Schnittstellenanbindung umfangreichere Budgets erfordern. Nexa Solutions bietet verbindliche Festpreise nach einer detaillierten Erstanalyse.",
        },
      },
      {
        "@type": "Question",
        name: "Warum spart Cross-Platform mit React Native gegenüber nativer Entwicklung Kosten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bei nativer Entwicklung müssen zwei separate Codebases in Swift (iOS) und Kotlin (Android) programmiert und doppelt gewartet werden. Mit React Native nutzen wir eine einheitliche Codebase für beide Plattformen. Das spart bis zu 50% der Entwicklungs- und Folgekosten bei 100% nativer Benutzeroberfläche und Performance.",
        },
      },
      {
        "@type": "Question",
        name: "Welche laufenden Kosten entstehen nach dem App-Launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zu den laufenden Kosten gehören die Entwickler-Accounts (Apple Developer Program für 99 USD/Jahr, Google Play Console einmalig 25 USD), Backend- und Cloud-Hosting (z. B. Supabase/PostgreSQL) sowie Wartungsverträge für Sicherheitsupdates und OS-Kompatibilität bei neuen iOS- und Android-Versionen.",
        },
      },
      {
        "@type": "Question",
        name: "Wie lange dauert eine App-Entwicklung von der Idee bis zum Store-Release?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ein fokussiertes MVP kann innerhalb von 4 bis 6 Wochen umgesetzt und in TestFlight sowie Google Play Internal Testing bereitgestellt werden. Vollwertige Unternehmens-Apps benötigen im Schnitt 2 bis 3 Monate agiler Entwicklungszeit in zweiwöchigen Sprints.",
        },
      },
      {
        "@type": "Question",
        name: "Bietet Nexa Solutions Festpreise für die App-Programmierung an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Nach einem initialen Konzeptionsgespräch und Scope-Definition erstellen wir ein verbindliches Festpreisangebot ohne versteckte Nachforderungen oder Budgetrisiken.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={[pageJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <AppKostenClient />
    </>
  );
}
