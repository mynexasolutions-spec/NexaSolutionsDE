"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { GERMAN_COUNTRIES, SITE_METADATA } from "@/lib/metadata";

export type Language = "de" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: <T = string>(de: T, en: T) => T;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
  t: <T,>(de: T, _en: T): T => de,
});

const GERMAN_TIMEZONES = [
  "europe/berlin",
  "europe/busingen",
  "europe/vienna",
  "europe/zurich",
  "europe/vaduz",
  "europe/luxembourg",
];

/**
 * Fast synchronous check using browser timezone and system language.
 * Runs instantly on client mount with zero network delay.
 */
function detectLocalRegionLanguage(): Language {
  try {
    // 1. Check system / browser timezone
    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
    if (GERMAN_TIMEZONES.some((gtz) => tz.includes(gtz))) {
      return "de";
    }

    // 2. Check browser language settings
    const navLangs =
      typeof navigator !== "undefined"
        ? navigator.languages && navigator.languages.length > 0
          ? navigator.languages
          : [navigator.language || ""]
        : [];

    const hasGermanLocale = navLangs.some(
      (l) => typeof l === "string" && l.toLowerCase().startsWith("de")
    );

    if (hasGermanLocale) {
      return "de";
    }

    // For any other region or locale, default to English ("en")
    return "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({
  children,
  initialLang = "de",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);

  useEffect(() => {
    try {
      // 1. If user previously made a manual selection, prioritize and respect it
      const isManual = localStorage.getItem("site:lang_manual") === "true";
      const stored = localStorage.getItem("site:lang") as Language | null;

      if (isManual && (stored === "de" || stored === "en")) {
        setLangState(stored);
        return;
      }

      // 2. Instant client-side region detection (0ms delay)
      const instantDetected = detectLocalRegionLanguage();
      setLangState(instantDetected);

      // 3. Precise IP-based region check in background (validates physical country)
      let isSubscribed = true;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const checkGeoIP = async () => {
        let detectedCountry: string | null = null;

        try {
          // Primary fast lookup
          const res = await fetch("https://api.country.is", {
            signal: controller.signal,
          });
          if (res.ok) {
            const data = await res.json();
            if (data?.country) {
              detectedCountry = String(data.country).trim().toUpperCase();
            }
          }
        } catch {
          // Secondary fallback lookup
          try {
            const res2 = await fetch("https://ipwho.is/", {
              signal: controller.signal,
            });
            if (res2.ok) {
              const data2 = await res2.json();
              if (data2?.country_code) {
                detectedCountry = String(data2.country_code).trim().toUpperCase();
              }
            }
          } catch {}
        } finally {
          clearTimeout(timeoutId);
        }

        if (isSubscribed && detectedCountry) {
          // Only update if user hasn't made a manual choice while the request was in flight
          const userHasManuallyChosen =
            localStorage.getItem("site:lang_manual") === "true";

          if (!userHasManuallyChosen) {
            const regionLang: Language = GERMAN_COUNTRIES.has(detectedCountry)
              ? "de"
              : "en";

            setLangState(regionLang);
            try {
              localStorage.setItem("site:lang", regionLang);
            } catch {}
          }
        }
      };

      checkGeoIP();

      return () => {
        isSubscribed = false;
        controller.abort();
      };
    } catch {}
  }, []);

  // Update HTML lang attribute, document title, and meta description whenever language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;

      const meta = SITE_METADATA[lang];
      document.title = meta.title;

      let descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        descTag.setAttribute("content", meta.description);
      } else {
        descTag = document.createElement("meta");
        descTag.setAttribute("name", "description");
        descTag.setAttribute("content", meta.description);
        document.head.appendChild(descTag);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", meta.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", meta.description);

      // Save cookie so subsequent server-rendered requests immediately know the region/language
      document.cookie = `site_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, [lang]);

  // When user clicks the language toggle/dropdown manually
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("site:lang", newLang);
      localStorage.setItem("site:lang_manual", "true");
      document.cookie = `site_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch (_) {}
  };

  // Helper: returns German or English content depending on active lang
  const t = <T,>(de: T, en: T): T => (lang === "de" ? de : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

