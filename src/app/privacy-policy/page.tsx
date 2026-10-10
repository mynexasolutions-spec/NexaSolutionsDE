import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import PrivacyPolicyClient from "./PrivacyPolicyClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexa Solutions",
  description:
    "Read the Nexa Solutions Privacy Policy. Understand how we collect, use, disclose, and safeguard your data, including secure payment processing via PhonePe for nexasolutions.de and nexa-solutions.in.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
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
    title: "Privacy Policy | Nexa Solutions",
    description:
      "Privacy Policy of Nexa Solutions governing nexasolutions.de and nexa-solutions.in. Information collection, data security, PhonePe payment processing, and user rights.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: "Nexa Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Nexa Solutions",
    description:
      "Official Privacy Policy of Nexa Solutions for website development, software services, and secure PhonePe payments.",
  },
};

export default function PrivacyPolicyPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Nexa Solutions",
    url: `${SITE_URL}/privacy-policy`,
    description:
      "Official Privacy Policy of Nexa Solutions explaining data collection, protection, and PhonePe payment processing.",
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
          name: "Privacy Policy",
          item: `${SITE_URL}/privacy-policy`,
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
      <PrivacyPolicyClient />
    </>
  );
}
