import { LanguageProvider } from "@/context/LanguageContext";

/**
 * All /en/* routes render English on the server.
 * Without this, the root layout's German default made Navbar/Footer/UI text
 * German in the server HTML of English pages, so Google saw mixed-language pages
 * (and showed /en/services/llm-integration for German queries).
 */
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LanguageProvider initialLang="en">{children}</LanguageProvider>;
}
