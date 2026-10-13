"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Mail, Phone, MapPin, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpressumClient() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFF] text-slate-800 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Ambient Glows matching Homepage & Legal pages */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#A78BFA]/30 via-[#C4B5FD]/20 to-transparent blur-3xl" />
          <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-l from-[#38BDF8]/20 via-[#818CF8]/15 to-transparent blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EA580C]/10 via-[#FED7AA]/20 to-transparent blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 text-xs sm:text-[13px] text-slate-500 font-medium">
            <ol className="flex items-center gap-1.5 sm:gap-2">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  {t("Startseite", "Home")}
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="text-slate-900 font-bold" aria-current="page">
                {t("Impressum", "Legal Notice / Impressum")}
              </li>
            </ol>
          </nav>

          {/* Header Hero Section */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-[13px] font-bold tracking-wide uppercase mb-3">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{t("Rechtliche Anbieterkennzeichnung", "Legal Provider Identification")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-slate-900 tracking-tight leading-tight mb-4">
              {t("Impressum", "Legal Notice (Impressum)")}
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t(
                "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG, ehemals TMG) und § 18 Abs. 2 Medienstaatsvertrag (MStV).",
                "Information pursuant to Section 5 of the German Digital Services Act (DDG / TMG) and Section 18 Paragraph 2 of the State Media Treaty (MStV)."
              )}
            </p>
          </div>

          {/* Legal Content Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-10 space-y-8">
            {/* 1. Anbieter & Anschrift */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>{t("1. Angaben zum Diensteanbieter", "1. Service Provider Details")}</span>
              </h2>
              <div className="text-sm sm:text-base text-slate-700 space-y-1.5 leading-relaxed">
                <p className="font-semibold text-slate-900">Nexa Solutions</p>
                <p>{t("Agentur für Softwareentwicklung, Web-Applikationen & KI-Automatisierung", "Agency for Software Engineering, Web Applications & AI Automation")}</p>
                <p>New Delhi, Delhi, Indien</p>
                <p className="text-xs text-slate-500">
                  {t(
                    "Dienstleistungen für Kunden in Deutschland, Österreich, der Schweiz und international.",
                    "Digital services provided to clients across Germany, Austria, Switzerland, and globally."
                  )}
                </p>
              </div>
            </section>

            {/* 2. Kontaktmöglichkeiten */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {t("2. Kontaktmöglichkeiten", "2. Contact Information")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* E-Mail */}
                <a
                  href="mailto:contact@nexa-solutions.de"
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-orange-50/40 hover:border-orange-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">E-Mail</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 truncate block transition-colors">
                      contact@nexa-solutions.de
                    </span>
                  </div>
                </a>

                {/* Telefon */}
                <a
                  href="tel:+918077313241"
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-orange-50/40 hover:border-orange-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Telefon</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 truncate block transition-colors">
                      +91 8077 313 241
                    </span>
                  </div>
                </a>

                {/* Website */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Web</span>
                    <span className="text-sm font-semibold text-slate-900 truncate block">
                      www.nexa-solutions.de
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Verantwortlich für journalistisch-redaktionelle Inhalte */}
            <section className="space-y-3 pt-6 border-t border-slate-100">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {t("3. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV", "3. Responsible for Content pursuant to § 18 Para. 2 MStV")}
              </h2>
              <div className="text-sm sm:text-base text-slate-700 space-y-1 leading-relaxed">
                <p className="font-semibold text-slate-900">Nexa Solutions Redaktion & Management</p>
                <p>New Delhi, Delhi, Indien</p>
                <p>E-Mail: contact@nexa-solutions.de</p>
              </div>
            </section>

            {/* 4. Streitschlichtung & Verbraucherstreitbeilegung */}
            <section className="space-y-3 pt-6 border-t border-slate-100">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {t("4. EU-Streitschlichtung & Verbraucherbeilegung", "4. Online Dispute Resolution")}
              </h2>
              <div className="text-sm sm:text-base text-slate-700 space-y-3 leading-relaxed">
                <p>
                  {t(
                    "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden: ",
                    "The European Commission provides a platform for online dispute resolution (ODR), accessible at: "
                  )}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 underline font-semibold"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .
                </p>
                <p>
                  {t(
                    "Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
                    "Our email address is listed above. We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board."
                  )}
                </p>
              </div>
            </section>

            {/* 5. Haftungsausschluss (Disclaimer) */}
            <section className="space-y-3 pt-6 border-t border-slate-100">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {t("5. Haftung für Inhalte & Links", "5. Liability for Content & Links")}
              </h2>
              <div className="text-sm sm:text-base text-slate-700 space-y-3 leading-relaxed">
                <p>
                  {t(
                    "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG / § 7 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
                    "As a service provider, we are responsible for our own content on these pages under general law. However, we are not obligated to monitor transmitted or stored external information or investigate circumstances indicating illegal activity."
                  )}
                </p>
                <p>
                  {t(
                    "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
                    "Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content."
                  )}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
