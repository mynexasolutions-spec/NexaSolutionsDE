import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import FloatingWidgets from "@/components/FloatingWidgets";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteTitle = "Nexa Solutions | Digitale Lösungen für ein smarteres Morgen";
const siteDescription =
  "Wir helfen Unternehmen, moderne Websites, mobile Apps und KI-gestützte Automatisierung zu entwickeln, um Zeit zu sparen, Kosten zu senken und schneller zu wachsen.";

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
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: "Nexa Solutions",
    locale: "de_DE",
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
  "@type": "Organization",
  name: "Nexa Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon_logo.png`,
  description: siteDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${dmSans.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          {children}
          <FloatingWidgets />
        </LanguageProvider>
      </body>
    </html>
  );
}
