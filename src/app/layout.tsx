import { Suspense } from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider, type Language } from "@/context/LanguageContext";
import FloatingWidgets from "@/components/FloatingWidgets";
import CookieConsent from "@/components/CookieConsent";
import PageTransitionLoader from "@/components/PageTransitionLoader";
import AutoContactPopup from "@/components/AutoContactPopup";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const siteTitleEn =
  "Nexa Solutions | Web Development, App Development & AI Automation for Businesses";
export const siteDescriptionEn =
  "Full-service web & app development agency in Germany: Get modern websites built with Next.js, develop iOS & Android apps, create custom business portals, and automate workflows with AI and n8n. Request your free initial consultation today!";

export const siteTitleDe =
  "Nexa Solutions | Webentwicklung, App-Entwicklung & KI-Automatisierung für Unternehmen";
export const siteDescriptionDe =
  "Full-Service Web- & App-Entwicklungsagentur in Deutschland: Moderne Websites mit Next.js erstellen lassen, iOS & Android Apps entwickeln, individuelle Business-Portale und Workflows mit KI & n8n automatisieren. Fordern Sie noch heute Ihre kostenlose Erstberatung an!";

const siteTitle = siteTitleDe;
const siteDescription = siteDescriptionDe;

export const siteKeywords = [
  // Commercial & High-Value terms from keyword research:
  "website development services",
  "service website development",
  "website design and development services",
  "website design & development services",
  "custom website development services",
  "ecommerce website development services",
  "wordpress website development services",
  "webflow website development services",
  "website development services company",
  "affordable website development services",
  "full service website development",
  "custom coded website",
  "custom coding website",
  "custom website coding services",
  "startup business websites",
  "small business website design services",
  "business website design",
  "business websites",
  "website for business",
  // German target keywords:
  "website erstellen lassen",
  "business website erstellen",
  "business website erstellen lassen",
  "webentwicklung agentur",
  "homepage erstellen lassen",
  "online shop erstellen lassen",
  "webentwicklung deutschland",
  "firmenwebsite erstellen lassen",
  "next.js agentur",
  "individuelle website erstellen lassen",
  "was kostet eine website",
  "website kosten",
  // Application Development (user specified):
  "app entwickeln lassen",
  "mobile application development",
  "application development",
  "web app entwickeln lassen",
  "ios und android app entwicklung",
  "react native agentur",
  "custom mobile app development",
  "cross platform app entwicklung",
  "app entwickeln lassen kosten",
  "saas entwickeln lassen",
  "kundenportal entwickeln lassen",
  "mvp entwicklung agentur",
  "enterprise application development",
  // AI & Process Automation:
  "ki automatisierung unternehmen",
  "n8n agentur",
  "ki agenten unternehmen",
  "prozessautomatisierung unternehmen",
  "n8n automatisierung",
  "dsgvo ki unternehmen",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: "%s | Nexa Solutions",
  },
  description: siteDescription,
  keywords: siteKeywords,
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
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mainzer Landstraße 180",
        addressLocality: "Frankfurt am Main",
        postalCode: "60327",
        addressCountry: "DE",
      },
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
                "Custom website development, Business Websites erstellen lassen mit Next.js, Headless CMS und DSGVO-Konformität.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile Application Development",
              description:
                "Cross-platform App Entwicklung für iOS und Android mit React Native, MVP-Entwicklung und Backend-Architektur.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "KI Automatisierung & n8n Workflows",
              description:
                "Prozessautomatisierung für Unternehmen, KI-Agenten, Chatbots und n8n Workflow-Automatisierung.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
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
