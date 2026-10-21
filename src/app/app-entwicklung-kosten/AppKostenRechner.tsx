"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Smartphone,
  CheckCircle2,
  Sliders,
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Layers,
  Calculator,
  RotateCcw,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { APP_COST_CONFIG } from "@/data/appKostenData";

export default function AppKostenRechner() {
  const { lang, t } = useLanguage();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("cross");
  const [selectedScope, setSelectedScope] = useState<string>("medium");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "push",
    "admin",
  ]);
  const [selectedDesign, setSelectedDesign] = useState<string>("custom");

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleReset = () => {
    setSelectedPlatform("cross");
    setSelectedScope("medium");
    setSelectedFeatures(["auth", "push", "admin"]);
    setSelectedDesign("custom");
  };

  // Kalkulation der ungefähren Entwicklungsdauer
  const calculatedEstimate = useMemo(() => {
    const platform =
      APP_COST_CONFIG.calculator.platforms.find(
        (p) => p.id === selectedPlatform
      ) || APP_COST_CONFIG.calculator.platforms[0];

    const scope =
      APP_COST_CONFIG.calculator.scopes.find((s) => s.id === selectedScope) ||
      APP_COST_CONFIG.calculator.scopes[1];

    const featureWeeks = selectedFeatures.reduce((acc, featId) => {
      const feat = APP_COST_CONFIG.calculator.features.find(
        (f) => f.id === featId
      );
      return acc + (feat ? feat.weeks : 0);
    }, 0);

    const design =
      APP_COST_CONFIG.calculator.designs.find(
        (d) => d.id === selectedDesign
      ) || APP_COST_CONFIG.calculator.designs[1];

    const totalRawWeeks = Math.round(
      (scope.weeks + featureWeeks + design.weeks) * platform.multiplier
    );

    const minWeeks = Math.max(3, Math.round(totalRawWeeks * 0.85));
    const maxWeeks = Math.round(totalRawWeeks * 1.15);

    return {
      weeksText:
        lang === "de"
          ? `${minWeeks}–${maxWeeks} Wochen`
          : `${minWeeks}–${maxWeeks} Weeks`,
      scopeLabel: lang === "de" ? scope.labelDe : scope.labelEn,
      platformLabel: lang === "de" ? platform.labelDe : platform.labelEn,
      featureCount: selectedFeatures.length,
      designLabel: lang === "de" ? design.labelDe : design.labelEn,
    };
  }, [selectedPlatform, selectedScope, selectedFeatures, selectedDesign, lang]);

  return (
    <div
      id="app-rechner"
      className="rounded-3xl border border-slate-200/90 bg-white shadow-sm overflow-hidden transition-all duration-300"
    >
      {/* Header-Bar - Warm and bright gradient matching homepage & services */}
      <div className="bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#EA580C] px-6 py-7 sm:px-10 sm:py-9 text-white shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold backdrop-blur-md mb-2 shadow-2xs">
              <Calculator className="w-3.5 h-3.5" />
              <span>{t("Interaktiver Kosten-Kalkulator 2026", "Interactive Cost Calculator 2026")}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[900] tracking-tight">
              {t("App-Kostenrechner", "App Cost Calculator")}
            </h3>
            <p className="text-white/95 text-sm sm:text-base lg:text-lg mt-2 max-w-2xl font-normal leading-relaxed">
              {t(
                "Wählen Sie Plattform, Projekttyp und gewünschte Features. Ermitteln Sie in Echtzeit Entwicklungsdauer und Budgetrahmen für Ihr individuelles Vorhaben.",
                "Select platform, project scope, and custom features. Calculate estimated development timeline and budget ranges for your mobile application in real time."
              )}
            </p>
          </div>
          <button
            onClick={handleReset}
            type="button"
            className="self-start sm:self-center inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-xs sm:text-sm font-bold backdrop-blur-md transition-colors cursor-pointer border border-white/20 shrink-0"
            title={t("Kalkulator zurücksetzen", "Reset Calculator")}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t("Zurücksetzen", "Reset")}</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-10 space-y-10 bg-white">
        {/* Schritt 1: Ziel-Plattform */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
            <label className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-[#EA580C] text-xs font-bold">
                1
              </span>
              {t("Ziel-Plattform wählen", "Select Target Platform")}
            </label>
            <span className="text-xs sm:text-sm text-slate-500 font-medium">
              {t("Cross-Platform spart bis zu 40% Kosten", "Cross-platform saves up to 40% in costs")}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {APP_COST_CONFIG.calculator.platforms.map((platform) => {
              const isSelected = selectedPlatform === platform.id;
              const label = lang === "de" ? platform.labelDe : platform.labelEn;
              return (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 relative cursor-pointer ${
                    isSelected
                      ? "border-[#EA580C] bg-orange-50/70 shadow-sm ring-1 ring-orange-500/30"
                      : "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50"
                  }`}
                >
                  {platform.recommended && (
                    <span className="absolute top-3.5 right-3.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 border border-emerald-200/80">
                      {t("Empfohlen", "Recommended")}
                    </span>
                  )}
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "border-[#EA580C] bg-[#EA580C] text-white"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div className="pr-14 sm:pr-0">
                      <div className="font-bold text-base sm:text-lg text-[#0F172A]">
                        {label}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                        {platform.id === "cross"
                          ? t(
                              "1 gemeinsame React Native Codebasis für Apple App Store & Google Play",
                              "1 unified React Native codebase powering Apple App Store & Google Play"
                            )
                          : platform.id === "native_both"
                          ? t(
                              "Getrennte Swift- und Kotlin-Teams für maximale Hardware-Nativität",
                              "Segregated Swift and Kotlin engineering teams for heavy hardware coupling"
                            )
                          : t(
                              "Gezielter Fokus auf ein einzelnes Smartphone-Betriebssystem",
                              "Dedicated single-platform focus on one smartphone OS"
                            )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Schritt 2: Projekt-Umfang / Komplexität */}
        <div>
          <label className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0F172A] flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-[#EA580C] text-xs font-bold">
              2
            </span>
            {t("Projekt-Umfang & App-Typ", "Project Scope & App Type")}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {APP_COST_CONFIG.calculator.scopes.map((scope) => {
              const isSelected = selectedScope === scope.id;
              const label = lang === "de" ? scope.labelDe : scope.labelEn;
              return (
                <button
                  key={scope.id}
                  type="button"
                  onClick={() => setSelectedScope(scope.id)}
                  className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#EA580C] bg-orange-50/70 shadow-sm ring-1 ring-orange-500/30"
                      : "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-[#EA580C] bg-[#EA580C] text-white"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="font-bold text-base sm:text-lg text-[#0F172A]">
                      {label}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#EA580C] font-bold pl-6">
                    {scope.labelPrice}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Schritt 3: Funktionsbausteine */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-[#EA580C] text-xs font-bold">
                3
              </span>
              {t("Gewünschte Funktionen & Module", "Features & Functional Modules")}
            </label>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">
              {selectedFeatures.length} {t("ausgewählt", "selected")}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {APP_COST_CONFIG.calculator.features.map((feature) => {
              const isChecked = selectedFeatures.includes(feature.id);
              const label = lang === "de" ? feature.labelDe : feature.labelEn;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => toggleFeature(feature.id)}
                  className={`text-left px-5 py-4 rounded-xl border flex items-center justify-between transition-all duration-150 cursor-pointer ${
                    isChecked
                      ? "border-orange-400 bg-orange-50/60 shadow-2xs"
                      : "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/40"
                  }`}
                >
                  <span className="text-sm sm:text-base font-medium text-slate-800 pr-3">
                    {label}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? "border-[#EA580C] bg-[#EA580C] text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Schritt 4: UI/UX Design Level */}
        <div>
          <label className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0F172A] flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-[#EA580C] text-xs font-bold">
              4
            </span>
            {t("UI/UX Design-Niveau", "UI/UX Design Tier")}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {APP_COST_CONFIG.calculator.designs.map((design) => {
              const isSelected = selectedDesign === design.id;
              const label = lang === "de" ? design.labelDe : design.labelEn;
              return (
                <button
                  key={design.id}
                  type="button"
                  onClick={() => setSelectedDesign(design.id)}
                  className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#EA580C] bg-orange-50/70 shadow-sm ring-1 ring-orange-500/30"
                      : "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-[#EA580C] bg-[#EA580C] text-white"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="font-bold text-base sm:text-lg text-[#0F172A]">
                      {label}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5 pl-6 leading-relaxed">
                    {design.id === "standard"
                      ? t(
                          "Verwendung optimierter nativer UI-Komponenten für maximale Kosteneffizienz",
                          "Pre-built optimized native UI component kits for rapid, cost-effective launch"
                        )
                      : t(
                          "Maßgeschneiderte User Journey, interaktive Prototypen und Figma Design-System",
                          "Tailored user journey discovery, interactive Figma prototype, and brand token design system"
                        )}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live-Ergebnis Box - Crisp, Clean Light Card (Matching services/web-development) */}
        <div className="rounded-3xl border-2 border-orange-200/90 bg-gradient-to-br from-orange-50/70 via-white to-amber-50/40 p-7 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EA580C]">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>{t("Ihre individuelle Kalkulation", "Your Personalized Estimate")}</span>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-[900] text-[#0F172A] tracking-tight">
                {t("Geschätzte Projektdauer: ", "Estimated Project Timeline: ")}
                <span className="text-[#EA580C]">
                  {calculatedEstimate.weeksText}
                </span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-700">
                {t("Geschätzter Preisrahmen: ", "Estimated Investment Range: ")}
                <span className="inline-block px-3 py-1 rounded-md bg-orange-100 text-orange-900 font-bold text-sm sm:text-base border border-orange-200/80">
                  {t(
                    "[PREIS HIER EINTRAGEN: Individuelles Festpreis-Angebot auf Basis Ihrer Konfiguration]",
                    "[PREIS HIER EINTRAGEN: Bespoke fixed-price proposal tailored to your exact scope]"
                  )}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed pt-1">
                {t("Konfiguration: ", "Scope: ")} {calculatedEstimate.platformLabel} •{" "}
                {calculatedEstimate.scopeLabel} • {calculatedEstimate.featureCount}{" "}
                {t("Module gewählt", "modules")} • {calculatedEstimate.designLabel}.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{t("Kostenlose Beratung anfragen", "Get Free Consultation")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>{t("100% unverbindlich & DSGVO-konform", "100% Non-binding & GDPR Compliant")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
