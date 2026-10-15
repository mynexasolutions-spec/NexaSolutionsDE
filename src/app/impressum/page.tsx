import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import ImpressumClient from "./ImpressumClient";

export const metadata: Metadata = {
  title: {
    absolute: "Impressum | Nexa Solutions",
  },
  description:
    "Impressum und rechtliche Anbieterkennzeichnung der Nexa Solutions gemäß § 5 DDG. Kontaktdaten, Verantwortliche & Unternehmensangaben im Überblick.",
  alternates: {
    canonical: `${SITE_URL}/impressum`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Impressum | Nexa Solutions",
    description:
      "Impressum und rechtliche Anbieterkennzeichnung der Nexa Solutions gemäß § 5 DDG.",
    url: `${SITE_URL}/impressum`,
    siteName: "Nexa Solutions",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function ImpressumPage() {
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
        name: "Impressum",
        item: `${SITE_URL}/impressum`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <ImpressumClient />
    </>
  );
}
