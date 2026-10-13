import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import MvpDevelopmentClient from "./MvpDevelopmentClient";

export const metadata: Metadata = {
  title: {
    absolute: "MVP Entwicklung Agentur - 4-6 Wochen | Nexa Solutions",
  },
  description:
    "Skalierbares MVP entwickeln lassen in 4-6 Wochen: Next.js, React Native & Festpreise für Startups und Unternehmen. Jetzt Erstberatung anfragen!",
  alternates: {
    canonical: `${SITE_URL}/services/mvp-development`,
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
    title: "MVP Entwicklung Agentur - 4-6 Wochen | Nexa Solutions",
    description:
      "Skalierbares MVP entwickeln lassen in 4-6 Wochen: Next.js, React Native & Festpreise für Startups und Unternehmen. Jetzt Erstberatung anfragen!",
    url: `${SITE_URL}/services/mvp-development`,
    siteName: "Nexa Solutions",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MVP Entwicklung Agentur - Nexa Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Entwicklung Agentur - 4-6 Wochen | Nexa Solutions",
    description:
      "Skalierbares MVP entwickeln lassen in 4-6 Wochen mit Next.js & React Native zum Festpreis.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function MvpDevelopmentPage() {
  const canonicalUrl = `${SITE_URL}/services/mvp-development`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MVP Entwicklung Agentur - Rapid Prototyping zum Festpreis",
    serviceType: "MVP Development & Startup Prototyping",
    provider: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: SITE_URL,
    },
    areaServed: ["DE", "AT", "CH"],
    description:
      "Skalierbare MVP-Entwicklung für Startups und Unternehmen in 4-6 Wochen: Next.js, React Native, Supabase und transparente Festpreise.",
    url: canonicalUrl,
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
        name: "Services",
        item: `${SITE_URL}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "MVP-Entwicklung",
        item: canonicalUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie schnell können wir unser MVP launchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In der Regel innerhalb von 4 bis 6 Wochen. Durch unseren standardisierten Sprint-Prozess, modulare Komponenten und fokussierten Scope-Workshop vergeuden wir keine Zeit mit unnötigen Schleifen.",
        },
      },
      {
        "@type": "Question",
        name: "Kann der Code nach einer Finanzierungsrunde weitergenutzt werden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolut ja. Wir bauen keine anfälligen No-Code-Basteleien, sondern saubere, typisierte Next.js- und PostgreSQL-Architekturen. Sie können die Codebase nahtlos an Ihr Inhouse-Entwicklerteam übergeben.",
        },
      },
      {
        "@type": "Question",
        name: "Wem gehören die Rechte an Design und Quellcode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ihnen zu 100%. Sie erhalten die uneingeschränkten Nutzungsrechte an allen Repositories, Datenbank-Schemata und Figma-Dateien. Es gibt keinen Vendor Lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "Wie verhindern Sie Kostenexplosionen und Scope Creep?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir arbeiten ausschließlich mit verbindlichen Festpreis-Paketen. Alle Features werden in Woche 1 klar definiert und neue Wünsche transparent im Backlog priorisiert.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <MvpDevelopmentClient />
    </>
  );
}
