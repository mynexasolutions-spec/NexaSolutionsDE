"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Layers,
  Clock,
  Users,
  Calendar,
  MessageSquare,
  Cpu,
  UtensilsCrossed,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import type { SolutionPageData } from "@/data/solutions";

const iconsMap: Record<string, any> = {
  "zeiterfassung-software": Clock,
  "crm-system-entwickeln-lassen": Users,
  "terminbuchungssystem-entwickeln-lassen": Calendar,
  "ki-chatbot-fuer-unternehmen": MessageSquare,
  "n8n-agentur-deutschland": Cpu,
  "restaurant-software-qr-menue": UtensilsCrossed,
};

interface Props {
  solutions: SolutionPageData[];
}

export default function SolutionsHubClient({ solutions }: Props) {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Navigation Bar */}
        <div className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
            <ol className="flex items-center gap-1.5 sm:gap-2">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li className="text-slate-900 font-medium">
                {t("Lösungen", "Solutions")}
              </li>
            </ol>
          </nav>
        </div>

        {/* Header Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{t("Praxiserprobte Systemlösungen", "Battle-Tested Enterprise Solutions")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-[1.1] mb-5">
              {t(
                "Maßgeschneiderte digitale Lösungen für Ihr Unternehmen",
                "Tailored Digital Solutions & Enterprise Software"
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              {t(
                "Von DSGVO-konformer Zeiterfassung über individuelle CRM-Systeme bis hin zu autonomen KI-Agenten: Wir entwickeln skalierbare Software, die exakt zu Ihren operativen Prozessen passt.",
                "From GDPR-compliant workforce tracking and custom CRMs to autonomous AI agents: We engineer scalable software tailored specifically to your operational workflows."
              )}
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {solutions.map((sol) => {
              const IconComponent = iconsMap[sol.slug] || Layers;
              const h1 = isEn && sol.h1En ? sol.h1En : sol.h1;
              const desc = isEn && sol.descriptionEn ? sol.descriptionEn : sol.description;
              const badge = isEn && sol.badgeEn ? sol.badgeEn : sol.badge;

              return (
                <div
                  key={sol.slug}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-orange-200/90 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 border border-orange-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                        {badge}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {h1}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/loesungen/${sol.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <span>{t("Lösung entdecken", "Explore Solution")}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              {t("Sie benötigen eine spezifische Sonderlösung?", "Need a Bespoke Solution?")}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
              {t(
                "Wir konzipieren und entwickeln auch hochspezialisierte Fachanwendungen, Schnittstellen und SaaS-Portale. Sprechen Sie mit unseren Architekten.",
                "We design and build specialized business portals, custom APIs, and scalable SaaS solutions. Talk directly with our software architects."
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>{t("Projekt anfragen", "Request Project")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all"
              >
                <span>{t("Alle Services", "All Services")}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
