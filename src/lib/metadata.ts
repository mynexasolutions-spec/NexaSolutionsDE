export type SupportedLanguage = "de" | "en";

// German-speaking countries (DACH region + neighboring German speaking territories)
export const GERMAN_COUNTRIES = new Set(["DE", "AT", "CH", "LI", "LU"]);

export const SITE_METADATA = {
  de: {
    title:
      "Webentwicklung, Apps & n8n Automatisierung | Nexa Solutions",
    description:
      "Maßgeschneiderte Webentwicklung, mobile Apps & n8n-Workflow-Automatisierung für Unternehmen in Deutschland, Österreich und der Schweiz. Jetzt beraten lassen!",
    locale: "de_DE",
    alternateLocale: "en_US",
  },
  en: {
    title:
      "Web Development, Mobile Apps & AI Automation | Nexa Solutions",
    description:
      "Full-service agency in Germany: Next.js websites, iOS & Android apps, and custom n8n AI workflow automation. Request a free consultation!",
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
