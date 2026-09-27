"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, KeyRound, Headphones, Scale, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TrustGuaranteesProps {
  onOpenContact?: () => void;
}

export default function TrustGuarantees({ onOpenContact }: TrustGuaranteesProps) {
  const { t } = useLanguage();

  const guarantees = [
    {
      icon: CheckCircle2,
      badge: t("100% Planungssicherheit", "100% Budget Predictability"),
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      title: t("Festpreis-Garantie", "Fixed Price Guarantee"),
      description: t(
        "Verbindliches Angebot mit definiertem Leistungsumfang vor Projektbeginn. Sie zahlen exakt den vereinbarten Festpreis – garantiert ohne unvorhergesehene Zusatzkosten.",
        "Clear written scope with a binding fixed price before project start. You pay exactly what was agreed — guaranteed no surprise hidden costs."
      ),
    },
    {
      icon: ShieldCheck,
      badge: t("DSGVO & ISO 27001", "GDPR & ISO 27001"),
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
      title: t("Deutsches Hosting & DSGVO-Konform", "German Hosting & GDPR Compliant"),
      description: t(
        "Ihre Daten und Kundensysteme liegen sicher in ISO-27001 zertifizierten Rechenzentren in Deutschland (Frankfurt). Konform mit DSGVO, GoBD und täglichen verschlüsselten Backups.",
        "Your data and systems reside securely in ISO-27001 certified data centers in Germany. Fully compliant with GDPR, GoBD, and automated encrypted daily backups."
      ),
    },
    {
      icon: KeyRound,
      badge: t("0% Provision · Volles Eigentum", "0% Commission · Full Ownership"),
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      iconColor: "text-orange-600 bg-orange-50 border-orange-200",
      title: t("100% Quellcode-Eigentum", "100% Code Ownership"),
      description: t(
        "Sie besitzen 100% Ihres Codes, Ihrer Daten und Ihrer Marke. Kein Vendor-Lock-in, keine wiederkehrenden Umsatzprovisionen pro Bestellung oder Buchung.",
        "You own 100% of your source code, data, and intellectual property. No vendor lock-in, no revenue share, and no per-transaction platform royalties."
      ),
    },
    {
      icon: Headphones,
      badge: t("Direkter Kontakt", "Direct Contact"),
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
      title: t("Direkter technischer Lead", "Direct Senior Tech Lead"),
      description: t(
        "Keine bürokratischen Zwischenhändler oder Callcenter. Sie kommunizieren direkt mit erfahrenen Senior-Entwicklern, die Ihr Projekt tatsächlich umsetzen.",
        "No bureaucratic intermediaries or call centers. You communicate directly with senior software engineers who actively build and architect your solution."
      ),
    },
  ];

  return (
    <section id="guarantees" className="py-20 md:py-24 bg-slate-50/70 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <span className="text-blue-500 font-bold">|&rarr;</span>
            <span>{t("DEUTSCHE QUALITÄTSSTANDARDS", "GERMAN QUALITY STANDARDS")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0F172A] tracking-tight leading-tight mb-4">
            {t(
              "Transparenz, Sicherheit & Verlässlichkeit in jedem Projekt",
              "Transparency, Security & Reliability in Every Project"
            )}
          </h2>

          <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t(
              "Wir arbeiten nach höchsten Qualitätskriterien für verlässliche, rechtssichere und zukunftsfähige Softwarelösungen.",
              "We adhere to the highest engineering standards to deliver reliable, legally compliant, and future-proof software."
            )}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300 ${item.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BFSG & Accessibility European Legal Compliance Highlight Banner */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900">
                  {t("Barrierefreiheit nach BFSG & WCAG 2.1 AA", "Accessibility Standard BFSG & WCAG 2.1 AA")}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  {t("EU-Konform 2025+", "EU Compliant 2025+")}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {t(
                  "Unsere Webanwendungen erfüllen die Richtlinien des Barrierefreiheitsstärkungsgesetzes (European Accessibility Act).",
                  "All web applications built by Nexa comply with the European Accessibility Act (BFSG) and WCAG 2.1 AA guidelines."
                )}
              </p>
            </div>
          </div>

          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              <span>{t("Compliance-Check anfragen", "Request Compliance Check")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
