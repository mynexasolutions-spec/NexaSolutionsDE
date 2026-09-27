"use client";

import React from "react";
import { Laptop, PenTool, ClipboardCheck, Rocket, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Laptop,
      title: t("Entdecken", "Discover"),
      description: t("Ihre Ziele und Anforderungen verstehen", "Understand your goals and requirements"),
      boxBg: "bg-blue-50 border-blue-200/80 text-blue-600",
    },
    {
      number: "02",
      icon: PenTool,
      title: t("Planen", "Plan"),
      description: t("Strategie und Roadmap entwickeln", "Create a strategy and roadmap"),
      boxBg: "bg-orange-50 border-orange-200/80 text-orange-600",
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: t("Entwickeln", "Build"),
      description: t("Lösung entwerfen, entwickeln und testen", "Design, develop and test the solution"),
      boxBg: "bg-blue-50 border-blue-200/80 text-blue-600",
    },
    {
      number: "04",
      icon: Rocket,
      title: t("Launchen", "Launch"),
      description: t("Deployment und laufender Support", "Deploy and provide ongoing support"),
      boxBg: "bg-orange-50 border-orange-200/80 text-orange-600",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
              <span className="text-orange-500">⚡</span>
              <span>{t("UNSER PROZESS", "OUR PROCESS")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
              {t("Ein einfacher Prozess", "A Simple Process")} <br className="hidden sm:inline" />
              {t("für erfolgreiche Projekte", "for Successful Projects")}
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md lg:text-right">
            {t(
              "Wir folgen einem klaren und kollaborativen Prozess, um hochwertige Ergebnisse pünktlich und im Budget zu liefern.",
              "We follow a clear and collaborative process to ensure high-quality results, on time and within budget."
            )}
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-start relative group">
                  <div className="flex items-center w-full justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300 ${step.boxBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {idx < steps.length - 1 && (
                      <div className="hidden lg:flex items-center flex-1 px-4">
                        <div className="w-full border-t-2 border-dashed border-slate-200" />
                        <ChevronRight className="w-4 h-4 text-slate-300 -ml-1 shrink-0" />
                      </div>
                    )}
                  </div>

                  <div className="text-xs font-bold text-slate-400 mb-1">{step.number}</div>
                  <h3 className="text-lg font-black text-[#0F172A] mb-1.5 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
