"use client";

import React from "react";
import { ArrowRight, UserCheck, Zap, Clock, Diamond, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface WhyChooseUsProps {
  onOpenContact?: () => void;
}

export default function WhyChooseUs({ onOpenContact }: WhyChooseUsProps) {
  const { t } = useLanguage();

  const features = [
    {
      icon: UserCheck,
      title: t("Kundenorientierte Lösungen", "Client Focused Solutions"),
      description: t("Ihr Geschäftserfolg steht bei uns an erster Stelle.", "Your success is our priority."),
    },
    {
      icon: Zap,
      title: t("Moderne Technologien", "Modern Technologies"),
      description: t("Immer einen Schritt voraus durch zukunftssichere Software.", "Always ahead with future-proof, maintainable software."),
    },
    {
      icon: Clock,
      title: t("Pünktliche Lieferung", "On-Time Delivery"),
      description: t("Verbindliche Meilensteine und Termintreue ohne Ausreden.", "Reliable milestones and on-time delivery with zero excuses."),
    },
    {
      icon: Diamond,
      title: t("Langfristige Partnerschaft", "Long-Term Partnership"),
      description: t("Nachhaltiger Support und kontinuierliche Skalierung.", "Ongoing technical support and continuous business scaling."),
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#090D16] text-white relative overflow-hidden border-b border-white/5">
      {/* Background Subtle Orange Glow */}
      <div className="absolute top-1/2 -left-20 w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and About CTA */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs font-semibold tracking-wider uppercase mb-6">
              <span>{t("ÜBER NEXA SOLUTIONS", "ABOUT NEXA SOLUTIONS")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              {t("Ihr", "Your")}{" "}
              <span className="text-gradient-orange">{t("Wachstum", "Growth")}</span> <br />
              {t("Unsere Priorität", "Our Priority")}
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
              {t(
                "Wir verbinden deutsche Qualitätsstandards, intuitive User Experience und moderne KI-Technologie, um digitale Produkte zu entwickeln, die einen messbaren Unterschied für Ihr Unternehmen machen.",
                "We combine German quality standards, intuitive user experience, and modern AI engineering to build digital products that make a measurable impact on your business."
              )}
            </p>

            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md cursor-pointer group"
              >
                <span>{t("Erstgespräch anfragen", "Schedule a Consultation")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Right Column: 2x2 Bento Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
