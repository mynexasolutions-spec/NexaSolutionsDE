"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustedBy() {
  const { t } = useLanguage();
  const logos = [
    {
      name: "zuhraan",
      element: (
        <span className="font-serif tracking-widest text-lg sm:text-xl font-bold uppercase text-slate-200">
          zuhraan
        </span>
      ),
    },
    {
      name: "HumNikah",
      element: (
        <div className="flex items-center gap-1.5 font-sans font-bold text-lg sm:text-xl tracking-tight text-white">
          <span className="text-orange-400">Hum</span>
          <span>Nikah</span>
        </div>
      ),
    },
    {
      name: "Meagle360",
      element: (
        <div className="flex items-center gap-1 font-sans font-extrabold text-lg sm:text-xl tracking-wide text-slate-200">
          <span>Meagle</span>
          <span className="px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 text-xs font-mono font-bold">
            360
          </span>
        </div>
      ),
    },
    {
      name: "ZAL GLOBAL",
      element: (
        <div className="flex items-center gap-1 font-mono font-black text-base sm:text-lg tracking-widest text-slate-300 uppercase">
          <span className="text-orange-500">ZAL</span>
          <span className="text-xs tracking-normal font-sans font-semibold text-slate-400">
            GLOBAL
          </span>
        </div>
      ),
    },
    {
      name: "and more...",
      element: (
        <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-400 italic">
          {t("und weitere...", "and more...")}
        </span>
      ),
    },
  ];

  return (
    <section className="bg-[#0D111A] py-10 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
            {t("VON UNTERNEHMEN VERSCHIEDENSTER BRANCHEN GESCHÄTZT", "TRUSTED BY BUSINESSES ACROSS INDUSTRIES")}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="opacity-75 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center grayscale hover:grayscale-0 cursor-default"
            >
              {logo.element}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
