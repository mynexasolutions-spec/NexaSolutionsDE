"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("de");

  // Restore from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("site:lang") as Language | null;
      if (stored === "de" || stored === "en") {
        setLangState(stored);
      }
    } catch (_) {}
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("site:lang", newLang);
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
