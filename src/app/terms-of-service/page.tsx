import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import TermsOfServiceClient from "./TermsOfServiceClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service | Nexa Solutions",
  description:
    "Read the Nexa Solutions Terms of Service. Understand terms governing website development, software services, PhonePe payments, deliverables, intellectual property, and governing law.",
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
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
    title: "Terms of Service | Nexa Solutions",
    description:
      "Terms of Service governing access to nexasolutions.de and nexa-solutions.in, digital services, deliverables, intellectual property, and third-party payment gateways including PhonePe.",
    url: `${SITE_URL}/terms-of-service`,
    siteName: "Nexa Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Nexa Solutions",
    description:
      "Official Terms of Service of Nexa Solutions for website development, software services, and PhonePe payment transactions.",
  },
};

export default function TermsOfServicePage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service | Nexa Solutions",
    url: `${SITE_URL}/terms-of-service`,
    description:
      "Official Terms of Service of Nexa Solutions governing digital services, deliverables, intellectual property, and payment terms.",
    inLanguage: ["en", "de"],
    isPartOf: {
      "@type": "WebSite",
      name: "Nexa Solutions",
      url: SITE_URL,
    },
    breadcrumb: {
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
          name: "Terms of Service",
          item: `${SITE_URL}/terms-of-service`,
        },
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: SITE_URL,
      email: "contact@nexa-solutions.in",
      telephone: "+91 8077313241",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <TermsOfServiceClient />
    </>
  );
}
