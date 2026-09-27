"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Lightbulb, Palette, Code, Rocket, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CtaBannerProps {
  onOpenContact: () => void;
}

export default function CtaBanner({ onOpenContact }: CtaBannerProps) {
  const { t } = useLanguage();

  return (
    <section id="contact-banner" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-50/70 via-indigo-50/30 to-orange-50/50 border border-slate-200/90 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xs">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold tracking-wider uppercase mb-3.5">
                <span>|&rarr;</span>
                <span>{t("LASS UNS ZUSAMMEN BAUEN", "LET'S BUILD TOGETHER")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-tight mb-4">
                {t("Haben Sie ein Projekt im Sinn?", "Have a Project in Mind?")}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                {t(
                  "Ob Sie eine Website, eine mobile App oder KI-Automatisierung benötigen — wir helfen Ihnen. Holen Sie sich eine kostenlose Beratung und lassen Sie uns Ihre Ideen besprechen.",
                  "Whether you need a website, a mobile app or AI automation — we're here to help. Get a free consultation and let's discuss your ideas."
                )}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/25 group cursor-pointer"
                >
                  <span>{t("Kostenlose Beratung", "Get a Free Consultation")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-2xs cursor-pointer"
                >
                  <span>{t("Kontakt aufnehmen", "Contact Us")}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px] sm:min-h-[340px]">
              <div className="absolute top-2 right-4 sm:right-8 z-20 transform rotate-12 text-blue-500 animate-bounce duration-1000">
                <Send className="w-6 h-6" />
              </div>

              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-blue-100 to-indigo-100 shrink-0">
                <Image
                  src="/images/cta-developer.jpg"
                  alt="Nexa Solutions Developer"
                  fill
                  className="object-cover object-top scale-110"
                />
              </div>

              {/* Floating Step Badges */}
              <div className="absolute top-2 left-6 sm:left-10 bg-white/95 backdrop-blur-xs border border-blue-200/90 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-bold text-slate-800 animate-in fade-in">
                <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Lightbulb className="w-3 h-3" />
                </div>
                <span>{t("Idee", "Idea")}</span>
              </div>

              <div className="absolute top-12 right-2 sm:right-6 bg-white/95 backdrop-blur-xs border border-orange-200/90 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-bold text-slate-800 animate-in fade-in">
                <div className="w-5 h-5 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Palette className="w-3 h-3" />
                </div>
                <span>{t("Design", "Design")}</span>
              </div>

              <div className="absolute bottom-16 right-0 sm:right-2 bg-white/95 backdrop-blur-xs border border-indigo-200/90 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-bold text-slate-800 animate-in fade-in">
                <div className="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Code className="w-3 h-3" />
                </div>
                <span>{t("Entwickeln", "Develop")}</span>
              </div>

              <div className="absolute bottom-4 right-10 sm:right-16 bg-white/95 backdrop-blur-xs border border-emerald-200/90 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-bold text-slate-800 animate-in fade-in">
                <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Rocket className="w-3 h-3" />
                </div>
                <span>{t("Launchen", "Launch")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
