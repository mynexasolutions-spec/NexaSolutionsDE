export type SupportedLanguage = "de" | "en";

// German-speaking countries (DACH region + neighboring German speaking territories)
export const GERMAN_COUNTRIES = new Set(["DE", "AT", "CH", "LI", "LU"]);

export const SITE_METADATA = {
  de: {
    title: "Nexa Solutions | Digitale Lösungen für ein smarteres Morgen",
    description:
      "Wir helfen Unternehmen, moderne Websites, mobile Apps und KI-gestützte Automatisierung zu entwickeln, um Zeit zu sparen, Kosten zu senken und schneller zu wachsen.",
    locale: "de_DE",
    alternateLocale: "en_US",
  },
  en: {
    title: "Nexa Solutions | Digital Solutions for a Smarter Tomorrow",
    description:
      "We help businesses build modern websites, mobile apps, and AI-powered automation to save time, reduce costs, and scale faster.",
    locale: "en_US",
    alternateLocale: "de_DE",
  },
} as const;

/**
 * Fast synchronous language detector for incoming HTTP request headers & cookies.
 * Operates in memory with 0ms latency.
 */
export function detectLanguageFromHeaders(
  headersList: { get: (name: string) => string | null },
  cookieLang?: string | null
): SupportedLanguage {
  // 1. Explicit user cookie preference takes highest priority
  if (cookieLang === "en" || cookieLang === "de") {
    return cookieLang;
  }

  // 2. Fast CDN / Cloudflare / Vercel geo country headers
  const country = (
    headersList.get("x-vercel-ip-country") ||
    headersList.get("cf-ipcountry") ||
    headersList.get("x-country-code") ||
    headersList.get("geo-country") ||
    headersList.get("x-real-ip-country") ||
    headersList.get("x-forwarded-for-country") ||
    ""
  ).toUpperCase();

  if (country) {
    return GERMAN_COUNTRIES.has(country) ? "de" : "en";
  }

  // 3. Fast Accept-Language header inspection
  const acceptLang = (headersList.get("accept-language") || "").toLowerCase();
  if (acceptLang) {
    const hasGerman = acceptLang.includes("de");
    const hasEnglish = acceptLang.includes("en");
    if (hasGerman && (!hasEnglish || acceptLang.indexOf("de") < acceptLang.indexOf("en"))) {
      return "de";
    }
    if (hasEnglish) {
      return "en";
    }
  }

  // Default to German for nexa-solutions.de
  return "de";
}
