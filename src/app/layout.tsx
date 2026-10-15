import { Suspense } from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider, type Language } from "@/context/LanguageContext";
import FloatingWidgets from "@/components/FloatingWidgets";
import CookieConsent from "@/components/CookieConsent";
import PageTransitionLoader from "@/components/PageTransitionLoader";
import AutoContactPopup from "@/components/AutoContactPopup";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

import { SOCIAL_PROFILES_SAMEAS } from "@/lib/config/socials";

export const siteTitleEn =
  "Web Development Agency Germany | Nexa Solutions";
export const siteDescriptionEn =
  "Leading web development agency in Germany: Next.js websites, mobile apps & AI workflow automation. Compliant & fixed price. Request a consultation!";

export const siteTitleDe =
  "Webentwicklung Agentur Stuttgart | Apps & n8n | Nexa";
export const siteDescriptionDe =
  "Webentwicklung Agentur Stuttgart: Maßgeschneiderte Websites, Apps & n8n Automatisierung zum Festpreis. Jetzt kostenlose Beratung anfragen!";

const siteTitle = siteTitleDe;
const siteDescription = siteDescriptionDe;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: "%s | Nexa Solutions",
  },
  description: siteDescription,
  applicationName: "Nexa Solutions",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "de-DE": SITE_URL,
      en: `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
  icons: { icon: "/favicon_logo.png", apple: "/favicon_logo.png" },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
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
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: "Nexa Solutions",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Nexa Solutions – Webentwicklung, Apps & n8n Automatisierung Stuttgart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Nexa Solutions",
      description: siteDescription,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: ["de-DE", "en-US"],
    },
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Nexa Solutions",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon_logo.png`,
      description: siteDescription,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91 8077 313 241",
          contactType: "customer service",
          email: "contact@nexa-solutions.de",
          availableLanguage: ["German", "English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stuttgart",
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE",
      },
      sameAs: SOCIAL_PROFILES_SAMEAS,
      areaServed: [
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "Austria" },
        { "@type": "Country", name: "Switzerland" },
      ],
      priceRange: "€€€",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software & Digital Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development Services",
              description:
                "Custom Website Development, Business Websites mit Next.js, Headless CMS und DSGVO-Konformität.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile Application Development",
              description:
                "Cross-Platform App Entwicklung für iOS und Android mit React Native, MVP-Entwicklung und Backend-Architektur.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "KI Automatisierung & n8n Workflows",
              description:
                "Prozessautomatisierung für Unternehmen, KI-Agenten und n8n Workflow-Automatisierung.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Applications & SaaS Development",
              description:
                "Individuelle Cloud-Software, Kundenportale, Buchungssysteme und Web-Applikationen.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Wie setzen sich die Kosten und Projektlaufzeiten zusammen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wir arbeiten nach transparenten Festpreisen auf Basis eines vorab definierten Anforderungskatalogs – ohne unerwartete Nachforderungen. Kleinere Webauftritte dauern typischerweise 2 bis 4 Wochen, mobile Apps 4 bis 8 Wochen und umfangreiche Unternehmenssysteme 6 bis 10 Wochen.",
          },
        },
        {
          "@type": "Question",
          name: "Sind die entwickelten Websites und Apps barrierefrei nach dem BFSG-Gesetz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Ab Juni 2025 gilt in Deutschland und der EU das Barrierefreiheitsstärkungsgesetz (BFSG). Als erfahrene BFSG Website Agentur bauen wir Anwendungen nach den internationalen WCAG 2.1 AA Standards mit semantischer Struktur, Screenreader-Unterstützung und optimalen Kontrasten.",
          },
        },
        {
          "@type": "Question",
          name: "Bietet Ihre Webentwicklung Agentur Stuttgart auch überregionalen Service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Als Webentwicklung Agentur Stuttgart und bundesweit tätige Webdesign Agentur Deutschland betreuen wir Kunden in ganz Deutschland, Österreich und der Schweiz sowie international als Web Development Agency Germany.",
          },
        },
        {
          "@type": "Question",
          name: "Wie stellen Sie DSGVO-Konformität und Datensicherheit sicher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alle von uns gehosteten Systeme liegen in ISO-27001-zertifizierten Rechenzentren in Deutschland (Frankfurt am Main). Wir implementieren standardmäßig SSL-Verschlüsselung, Auftragsverarbeitungsverträge (AVV), Cookie-freie Analytics und GoBD-konforme Archivierung.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang: Language = "en";

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${dmSans.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={organizationJsonLd} />
        <LanguageProvider initialLang={lang}>
          <Suspense fallback={null}>
            <PageTransitionLoader />
          </Suspense>
          {children}
          <FloatingWidgets />
          <CookieConsent />
          <AutoContactPopup />
        </LanguageProvider>
      </body>
    </html>
  );
}
