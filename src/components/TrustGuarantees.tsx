"use client";

import React from "react";
import { ShieldCheck, Lock, KeyRound, Headphones, Scale, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TrustGuaranteesProps {
  onOpenContact?: () => void;
}

export default function TrustGuarantees({ onOpenContact }: TrustGuaranteesProps) {
  const { t } = useLanguage();

  const guarantees = [
    {
      icon: ShieldCheck,
      badge: t("100% PLANUNGSSICHERHEIT", "100% BUDGET PREDICTABILITY"),
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/90",
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      bottomGradient: "from-emerald-50/80 via-emerald-50/30 to-transparent",
      arrowBg: "bg-emerald-100/80",
      arrowColor: "text-emerald-600",
      title: t("Festpreis-Garantie", "Fixed Price Guarantee"),
      description: t(
        "Verbindliches Angebot mit definiertem Leistungsumfang vor Projektbeginn. Sie zahlen exakt den vereinbarten Festpreis – garantiert ohne unvorhergesehene Zusatzkosten.",
        "Clear written scope with a binding fixed price before project start. You pay exactly what was agreed — guaranteed no surprise hidden costs."
      ),
    },
    {
      icon: Lock,
      badge: t("DSGVO & ISO 27001", "GDPR & ISO 27001"),
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/90",
      iconBg: "bg-blue-50 border-blue-100 text-blue-600",
      bottomGradient: "from-blue-50/80 via-blue-50/30 to-transparent",
      arrowBg: "bg-blue-100/80",
      arrowColor: "text-blue-600",
      title: t("Deutsches Hosting & DSGVO-Konform", "German Hosting & GDPR Compliant"),
      description: t(
        "Ihre Daten und Kundensysteme liegen sicher in ISO-27001 zertifizierten Rechenzentren in Deutschland (Frankfurt). Konform mit DSGVO, GoBD und täglichen verschlüsselten Backups.",
        "Your data and systems reside securely in ISO-27001 certified data centers in Germany. Fully compliant with GDPR, GoBD, and automated encrypted daily backups."
      ),
    },
    {
      icon: KeyRound,
      badge: t("0% PROVISION · VOLLES EIGENTUM", "0% COMMISSION · FULL OWNERSHIP"),
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/90",
      iconBg: "bg-amber-50 border-amber-100 text-amber-600",
      bottomGradient: "from-amber-50/80 via-amber-50/30 to-transparent",
      arrowBg: "bg-amber-100/80",
      arrowColor: "text-amber-600",
      title: t("100% Quellcode-Eigentum", "100% Code Ownership"),
      description: t(
        "Sie besitzen 100% Ihres Codes, Ihrer Daten und Ihrer Marke. Kein Vendor-Lock-in, keine wiederkehrenden Umsatzprovisionen pro Bestellung oder Buchung.",
        "You own 100% of your source code, data, and intellectual property. No vendor lock-in, no revenue share, and no per-transaction platform royalties."
      ),
    },
    {
      icon: Headphones,
      badge: t("DIREKTER KONTAKT", "DIRECT CONTACT"),
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200/90",
      iconBg: "bg-purple-50 border-purple-100 text-purple-600",
      bottomGradient: "from-purple-50/80 via-purple-50/30 to-transparent",
      arrowBg: "bg-purple-100/80",
      arrowColor: "text-purple-600",
      title: t("Direkter technischer Lead", "Direct Senior Tech Lead"),
      description: t(
        "Keine bürokratischen Zwischenhändler oder Callcenter. Sie kommunizieren direkt mit erfahrenen Senior-Entwicklern, die Ihr Projekt tatsächlich umsetzen.",
        "No bureaucratic intermediaries or call centers. You communicate directly with senior software engineers who actively build and architect your solution."
      ),
    },
  ];

  return (
    <section id="guarantees" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Subtle Tech Ambient Gradients & Rings */}
      <div className="absolute top-8 left-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 right-1/4 w-80 h-80 bg-purple-100/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-16 left-12 w-28 h-28 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-25 pointer-events-none -z-10 hidden sm:block" />
      <div className="absolute top-24 left-8 w-5 h-5 rounded-full border-2 border-blue-200/60 pointer-events-none hidden sm:block" />
      <div className="absolute top-36 right-12 w-6 h-6 rounded-full border-2 border-purple-200/50 pointer-events-none hidden sm:block" />

      <div className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <span className="font-mono text-blue-500 font-semibold">[&rarr;</span>
            <span>{t("DEUTSCHE QUALITÄTSSTANDARDS", "GERMAN QUALITY STANDARDS")}</span>
          </div>

          {/* Heading with Modern Gradient Accent */}
          <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 text-center max-w-2xl mx-auto" style={{ lineHeight: "1.09" }}>
            {t("Transparenz, Sicherheit & Verlässlichkeit in", "Transparency, Security & Reliability in")}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t("jedem Projekt", "Every Project")}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-7 sm:mb-8 font-normal  text-center">
            {t(
              "Wir arbeiten nach höchsten Qualitätskriterien für verlässliche, rechtssichere und zukunftsfähige Softwarelösungen.",
              "We adhere to the highest engineering standards to deliver reliable, legally compliant, and future-proof software."
            )}
          </p>
        </div>

        {/* 4 Pillars Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 sm:mb-12">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[5px] p-6 sm:p-7 border border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle Bottom Ambient Gradient Wash */}
                <div className={`absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t ${item.bottomGradient} pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className={`w-12 h-12 rounded-[5px] border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300 ${item.iconBg}`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor} whitespace-nowrap`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row Action Arrow */}
                <div className="relative z-10 flex justify-end mt-6 pt-2">
                  <div className={`w-8 h-8 rounded-full ${item.arrowBg} ${item.arrowColor} flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110 shadow-2xs`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BFSG & Accessibility Compliance Banner with Shield Watermark */}
        <div className="rounded-[5px] bg-gradient-to-r from-blue-50/90 via-sky-50/50 to-blue-50/40 border border-blue-100/90 p-5 sm:p-6 shadow-xs relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Background Watermark Shield (Responsive on Right) */}
          <div className="hidden lg:block absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-80 sm:opacity-80 text-blue-600">
            <ShieldCheck className="w-16 sm:w-20 h-16 sm:h-20 stroke-[1.2]" />
          </div>

          <div className="flex items-start flex-col sm:flex-col md:flex-row sm:items-center gap-3.5 sm:gap-4 relative z-10">
            <div className="w-12 h-12 rounded-[5px] bg-blue-100/90 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
              <Scale className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[19px] sm:text-[22px] font-bold text-slate-900">
                  {t("Barrierefreiheit nach BFSG & WCAG 2.1 AA", "Accessibility Standard BFSG & WCAG 2.1 AA")}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[13px] font-bold shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {t("EU-Konform 2025+", "EU Compliant 2025+")}
                </span>
              </div>
              <p className="text-base sm:text-lg text-slate-600 mt-1 max-w-2xl leading-relaxed">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-blue-700 text-xs font-bold border border-blue-200/80 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all whitespace-nowrap cursor-pointer shrink-0 relative z-10 self-end sm:self-center"
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
