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
  "Webentwicklung & Webdesign Agentur Deutschland | Nexa Solutions";
export const siteDescriptionDe =
  "Webentwicklung & Webdesign Agentur für Deutschland, Österreich und die Schweiz: Next.js Websites, Apps & n8n Automatisierung zum Festpreis. Jetzt beraten lassen!";

// German is the primary market and the default (server-rendered) language,
// so the default <title>/description must be German too.
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
        alt: "Nexa Solutions – Webentwicklung, Apps & n8n Automatisierung für Deutschland",
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
      "@type": ["Organization", "ProfessionalService"],
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
      // Must match the Impressum (legal address). No street address published there.
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
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
    // The homepage FAQPage lives in src/lib/homeFaqJsonLd.ts and is rendered only on "/".
    // Rendering it here put a second FAQPage on every page that has its own FAQ schema.
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang: Language = "de";

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
