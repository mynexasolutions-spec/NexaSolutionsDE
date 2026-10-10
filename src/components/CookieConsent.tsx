"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, ChevronDown, ChevronUp, Check, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieConsent() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedConsent = localStorage.getItem("nexa_cookie_consent");
      if (!savedConsent) {
        // Slight delay for smooth entrance animation after page load
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if localStorage is disabled/restricted
      setIsVisible(true);
    }

    // Allow opening cookie settings anywhere in the app via custom event
    const handleOpen = () => setIsVisible(true);
    window.addEventListener("openCookieConsent", handleOpen);
    return () => window.removeEventListener("openCookieConsent", handleOpen);
  }, []);

  const saveConsent = (choice: "all" | "essential") => {
    try {
      const consentData = {
        choice,
        timestamp: Date.now(),
        necessary: true,
        analytics: choice === "all",
        marketing: choice === "all",
      };
      localStorage.setItem("nexa_cookie_consent", JSON.stringify(consentData));

      // Also set document cookie for 365 days
      const maxAge = 365 * 24 * 60 * 60;
      document.cookie = `nexa_cookie_consent=${choice}; max-age=${maxAge}; path=/; SameSite=Lax`;

      // Dispatch event for other services/analytics to listen
      window.dispatchEvent(
        new CustomEvent("cookieConsentChanged", { detail: consentData })
      );
    } catch (e) {
      console.warn("Could not save cookie preferences", e);
    }
    setIsVisible(false);
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("Cookie-Einstellungen", "Cookie Preferences")}
      className="fixed bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[480px] z-[70] animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <div className="relative overflow-hidden rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] text-white p-4.5 sm:p-5 sm:px-6">
        {/* Subtle decorative gradient glow */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-44 h-44 bg-orange-500/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col gap-3.5">
          {/* Header Row */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0 shadow-inner">
              <Cookie className="w-5 h-5 text-orange-400" />
            </div>

            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight leading-tight">
                  {t("Cookie-Einstellungen", "Cookie Preferences")}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  <ShieldCheck className="w-3 h-3" />
                  DSGVO / GDPR
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {t(
                  "Wir nutzen Cookies, um unsere Website für Sie optimal zu gestalten und fortlaufend zu verbessern. Sie können selbst entscheiden, welche Cookies Sie zulassen möchten.",
                  "We use cookies to optimize and continuously improve our website for you. You can choose which cookies you want to allow."
                )}
              </p>
            </div>
          </div>

          {/* Collapsible Details */}
          {showDetails && (
            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs animate-in fade-in duration-200">
              {/* Essential */}
              <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    {t("Notwendige Cookies", "Essential Cookies")}
                  </div>
                  <p className="text-slate-400 text-[11px] mt-0.5 leading-snug">
                    {t(
                      "Erforderlich für grundlegende Website-Funktionen und Sicherheit. Nicht deaktivierbar.",
                      "Required for basic website functions and security. Cannot be disabled."
                    )}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                  {t("Aktiv", "Active")}
                </span>
              </div>

              {/* Analytics & Performance */}
              <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="font-semibold text-slate-200">
                    {t("Analyse & Performance", "Analytics & Performance")}
                  </div>
                  <p className="text-slate-400 text-[11px] mt-0.5 leading-snug">
                    {t(
                      "Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um die Nutzererfahrung zu verbessern.",
                      "Help us understand how visitors interact with the site to enhance the user experience."
                    )}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 shrink-0">
                  {t("Optional", "Optional")}
                </span>
              </div>
            </div>
          )}

          {/* Toggle details link */}
          <div className="flex items-center justify-between text-xs pt-0.5">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center gap-1 text-[11.5px] cursor-pointer"
            >
              <span>{showDetails ? t("Weniger Details", "Fewer details") : t("Details anzeigen", "Show details")}</span>
              {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1 text-[11.5px]"
            >
              <span>{t("Datenschutz", "Privacy")}</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Modern 2-Button Action Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {/* Button 1: Only Essential / Accept Only */}
            <button
              type="button"
              onClick={() => saveConsent("essential")}
              className="w-full py-2.5 px-3.5 rounded-xl text-xs sm:text-[13px] font-semibold text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 transition-all duration-200 cursor-pointer text-center active:scale-[0.98] shadow-sm flex items-center justify-center"
            >
              {t("Nur essenzielle", "Essential Only")}
            </button>

            {/* Button 2: Accept All */}
            <button
              type="button"
              onClick={() => saveConsent("all")}
              className="w-full py-2.5 px-3.5 rounded-xl text-xs sm:text-[13px] font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 cursor-pointer text-center active:scale-[0.98] flex items-center justify-center border border-orange-400/30"
            >
              {t("Alle akzeptieren", "Accept All")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
