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
 * Fast synchronous check using route path, stored preference and browser settings.
 * Defaults reliably to German ('de') for Nexa Solutions.
 */
function detectLocalRegionLanguage(): Language {
  try {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      if (pathname.startsWith("/en") || pathname.includes("/en/")) {
        return "en";
      }
      if (pathname.startsWith("/de") || pathname.includes("/de/")) {
        return "de";
      }
    }
    return "de";
  } catch {
    return "de";
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
    let isSubscribed = true;

    try {
      // 1. Path-based language always takes highest precedence
      if (typeof window !== "undefined") {
        const p = window.location.pathname;
        if (p.startsWith("/en") || p.includes("/en/")) {
          setLangState("en");
          return;
        }
        if (p.startsWith("/de") || p.includes("/de/")) {
          setLangState("de");
          return;
        }
      }

      // 2. If user previously made a manual selection, prioritize and respect it
      const isManual = localStorage.getItem("site:lang_manual") === "true";
      const stored = localStorage.getItem("site:lang") as Language | null;

      if (isManual && (stored === "de" || stored === "en")) {
        setLangState(stored);
        return;
      }

      // 3. Reliable default for Stuttgart agency
      setLangState("de");
    } catch {}

    return () => {
      isSubscribed = false;
    };
  }, []);

  // Update HTML lang attribute, document title, and meta description whenever language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;

      const meta = SITE_METADATA[lang];
      const isHome =
        window.location.pathname === "/" || window.location.pathname === "";
      if (isHome) {
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
      }

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
    } catch {}
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

