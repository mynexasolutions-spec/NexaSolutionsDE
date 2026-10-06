export type SupportedLanguage = "de" | "en";

// German-speaking countries (DACH region + neighboring German speaking territories)
export const GERMAN_COUNTRIES = new Set(["DE", "AT", "CH", "LI", "LU"]);

export const SITE_METADATA = {
  de: {
    title:
      "Nexa Solutions | Webentwicklung, App-Entwicklung & KI-Automatisierung für Unternehmen",
    description:
      "Full-Service Web- & App-Entwicklungsagentur in Deutschland: Moderne Websites mit Next.js erstellen lassen, iOS & Android Apps entwickeln, individuelle Business-Portale und Workflows mit KI & n8n automatisieren. Fordern Sie noch heute Ihre kostenlose Erstberatung an!",
    locale: "de_DE",
    alternateLocale: "en_US",
  },
  en: {
    title:
      "Nexa Solutions | Web Development, App Development & AI Automation for Businesses",
    description:
      "Full-service web & app development agency in Germany: Get modern websites built with Next.js, develop iOS & Android apps, create custom business portals, and automate workflows with AI and n8n. Request your free initial consultation today!",
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
