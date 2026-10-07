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

export const siteTitleEn =
  "Web Development, Mobile Apps & AI Automation | Nexa Solutions";
export const siteDescriptionEn =
  "Full-service agency in Germany: Next.js websites, iOS & Android apps, and custom n8n AI workflow automation. Request a free consultation!";

export const siteTitleDe =
  "Webentwicklung, Apps & KI-Automatisierung | Nexa Solutions";
export const siteDescriptionDe =
  "Agentur für Next.js Websites, iOS & Android Apps und n8n KI-Automatisierung. Skalierbare Software aus Deutschland. Jetzt anfragen!";

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
  alternates: { canonical: "/" },
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
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Nexa Solutions",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon_logo.png`,
      description: siteDescription,
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
