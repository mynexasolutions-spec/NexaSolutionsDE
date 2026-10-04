import type { Metadata } from "next";
import { headers, cookies } from "next/headers";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider, type Language } from "@/context/LanguageContext";
import FloatingWidgets from "@/components/FloatingWidgets";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexa Solutions | Digitale Lösungen für ein smarteres Morgen",
  description:
    "Wir helfen Unternehmen, moderne Websites, mobile Apps und KI-gestützte Automatisierung zu entwickeln, um Zeit zu sparen, Kosten zu senken und schneller zu wachsen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${dmSans.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          {children}
          <FloatingWidgets />
        </LanguageProvider>
      </body>
    </html>
  );
}

