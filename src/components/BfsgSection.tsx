"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Eye, Sparkles, Scale, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BfsgSectionProps {
  onOpenContact?: () => void;
}

export default function BfsgSection({ onOpenContact }: BfsgSectionProps) {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Scale,
      badge: t("GESETZLICH VERPFLICHTEND", "LEGALLY MANDATED IN EU"),
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/90",
      iconBg: "bg-blue-50 border-blue-100 text-blue-600",
      bottomGradient: "from-blue-50/80 via-blue-50/30 to-transparent",
      title: t("BFSG-Pflicht ab Juni 2025", "BFSG Mandate June 2025"),
      description: t(
        "Vermeiden Sie rechtliche Risiken und Abmahnungen: Jetzt eine barrierefreie Website erstellen lassen und alle Anforderungen des Barrierefreiheitsstärkungsgesetzes rechtssicher erfüllen.",
        "Ensure full regulatory compliance with the European Accessibility Act: Safeguard your digital presence with certified accessibility."
      ),
    },
    {
      icon: ShieldCheck,
      badge: t("WCAG 2.1 AA STANDARD", "WCAG 2.1 AA STANDARD"),
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/90",
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      bottomGradient: "from-emerald-50/80 via-emerald-50/30 to-transparent",
      title: t("Zertifizierte Zugänglichkeit", "Certified Accessibility"),
      description: t(
        "Sauberes semantisches HTML, barrierefreie ARIA-Attribute, kontraststarke Typografie und lückenlose Bedienbarkeit per Tastatur und Screenreader.",
        "Semantic HTML5 structure, accessible ARIA roles, verified contrast ratios, and seamless full keyboard navigation for assistive tech."
      ),
    },
    {
      icon: Eye,
      badge: t("INCLUSIVE UX & SEO", "INCLUSIVE UX & SEO"),
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/90",
      iconBg: "bg-amber-50 border-amber-100 text-amber-600",
      bottomGradient: "from-amber-50/80 via-amber-50/30 to-transparent",
      title: t("Mehr Kunden & besseres SEO", "Wider Reach & Better SEO"),
      description: t(
        "Barrierefreiheit verbessert die Nutzererfahrung für alle Besucher und gilt als messbarer Rankingfaktor für Spitzenpositionen bei Google.",
        "Accessible interfaces boost usability for every user and directly improve search engine crawlability and Core Web Vitals rankings."
      ),
    },
    {
      icon: Sparkles,
      badge: t("BFSG EXPERTEN", "BFSG EXPERTS"),
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200/90",
      iconBg: "bg-purple-50 border-purple-100 text-purple-600",
      bottomGradient: "from-purple-50/80 via-purple-50/30 to-transparent",
      title: t("Ihre BFSG Website Agentur", "Your Accessibility Agency"),
      description: t(
        "Als erfahrene BFSG Website Agentur führen wir Barrierefreiheits-Audits durch und entwickeln schlüsselfertige, barrierefreie Websites zum Festpreis.",
        "As an experienced accessibility agency, we conduct audits and engineer turnkey, WCAG-compliant web applications on fixed pricing."
      ),
    },
  ];

  return (
    <section id="bfsg" className="py-12 sm:py-16 lg:py-20 bg-slate-50/60 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>{t("BARRIEREFREIHEIT NACH BFSG 2025", "ACCESSIBILITY & BFSG COMPLIANCE")}</span>
          </div>

          <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-4 text-center">
            {t("Barrierefreie Websites nach BFSG", "Accessible Websites Compliant with BFSG")}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal text-center">
            {t(
              "Ab Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz (BFSG): Jetzt Ihre barrierefreie Website erstellen lassen bei Ihrer spezialisierten BFSG Website Agentur für rechtssichere digitale Zugänglichkeit nach WCAG 2.1 AA.",
              "Starting June 2025, the European Accessibility Act is legally binding. Build accessible, WCAG 2.1 AA compliant web platforms with our dedicated engineering team."
            )}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[5px] bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  className={`absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t ${item.bottomGradient} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-[5px] flex items-center justify-center border ${item.iconBg} shadow-2xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span
                      className={`text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-full border ${item.badgeColor} tracking-wider uppercase`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/contact"
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <span>{t("Barrierefreiheit für Website prüfen lassen", "Request Accessibility Audit")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
