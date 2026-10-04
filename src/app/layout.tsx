import type { Metadata } from "next";
import { headers, cookies } from "next/headers";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider, type Language } from "@/context/LanguageContext";
import FloatingWidgets from "@/components/FloatingWidgets";
import {
  SITE_METADATA,
  detectLanguageFromHeaders,
} from "@/lib/metadata";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  let lang: Language = "de";

  try {
    const cookieStore = await cookies();
    const savedLang = cookieStore.get("site_lang")?.value;
    const headerList = await headers();
    lang = detectLanguageFromHeaders(headerList, savedLang);
  } catch {
    lang = "de";
  }

  const meta = SITE_METADATA[lang];

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL("https://nexa-solutions.de"),
    alternates: {
      canonical: "https://nexa-solutions.de",
      languages: {
        "de-DE": "https://nexa-solutions.de",
        "en-US": "https://nexa-solutions.de",
        "x-default": "https://nexa-solutions.de",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: "https://nexa-solutions.de",
      siteName: "Nexa Solutions",
      locale: meta.locale,
      alternateLocale: [meta.alternateLocale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let lang: Language = "de";

  try {
    const cookieStore = await cookies();
    const savedLang = cookieStore.get("site_lang")?.value;
    const headerList = await headers();
    lang = detectLanguageFromHeaders(headerList, savedLang);
  } catch {
    lang = "de";
  }

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${dmSans.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider initialLang={lang}>
          {children}
          <FloatingWidgets />
        </LanguageProvider>
      </body>
    </html>
  );
}

