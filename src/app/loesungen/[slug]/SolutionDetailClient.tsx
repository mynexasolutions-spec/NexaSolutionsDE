"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import type { SolutionPageData } from "@/data/solutions";

function renderWithLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  if (!linkRegex.test(text)) return text;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  linkRegex.lastIndex = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    parts.push(
      <Link
        key={match.index}
        href={url}
        className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
}

interface Props {
  solution: SolutionPageData;
  relatedSolutions: SolutionPageData[];
}

export default function SolutionDetailClient({
  solution,
  relatedSolutions,
}: Props) {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  const h1 = isEn && solution.h1En ? solution.h1En : solution.h1;
  const intro = isEn && solution.introEn ? solution.introEn : solution.intro;
  const badge = isEn && solution.badgeEn ? solution.badgeEn : solution.badge;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Navigation Bar */}
        <div className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li>
                <Link href="/loesungen" className="hover:text-orange-600 transition-colors">
                  {t("Lösungen", "Solutions")}
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li className="text-slate-900 font-medium truncate max-w-xs sm:max-w-md">
                {h1}
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-[1.12] mb-6">
              {h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              {intro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t("Kostenlose Erstberatung vereinbaren", "Schedule Free Consultation")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/website-kosten"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[5px] bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-semibold text-sm transition-all shadow-xs"
              >
                <span>{t("Software & Website Kosten", "Software & Website Costs")}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl space-y-12">
            {solution.sections.map((sec, idx) => {
              const secH2 = isEn && sec.h2En ? sec.h2En : sec.h2;
              const secBody = isEn && sec.bodyEn ? sec.bodyEn : sec.body;
              const secBullets = isEn && sec.bulletsEn ? sec.bulletsEn : sec.bullets;

              return (
                <article
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs"
                >
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    {secH2}
                  </h2>

                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    {secBody.map((para, pIdx) => (
                      <p key={pIdx}>{renderWithLinks(para)}</p>
                    ))}
                  </div>

                  {secBullets && secBullets.length > 0 && (
                    <ul className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
                      {secBullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/90 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{t("Häufig gestellte Fragen", "Frequently Asked Questions")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              {t(`FAQ zu ${h1}`, `FAQ on ${h1}`)}
            </h2>

            <div className="space-y-4">
              {solution.faq.map((item, fIdx) => {
                const q = isEn && item.qEn ? item.qEn : item.q;
                const a = isEn && item.aEn ? item.aEn : item.a;

                return (
                  <details
                    key={fIdx}
                    className="group bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs open:border-orange-300 transition-colors"
                  >
                    <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between gap-4 text-base sm:text-lg select-none list-none">
                      <span>{q}</span>
                      <span className="text-orange-500 font-bold text-xl group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-100">
                      {a}
                    </p>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-wider uppercase text-orange-400 block mb-2">
                {t("Jetzt unverbindlich anfragen", "Inquire Today Without Obligation")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                {t("Bereit für eine maßgeschneiderte Lösung?", "Ready for a Tailored Solution?")}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-6">
                {t(
                  "Wir beraten Sie persönlich zu Architektur, Zeitplan und Budget. Erhalten Sie eine transparente Einschätzung innerhalb von 24 Stunden.",
                  "We personally consult you on software architecture, roadmap, and budget. Receive a transparent feasibility assessment within 24 hours."
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md transition-all"
                >
                  <span>{t("Erstberatung starten", "Start Consultation")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
                >
                  <span>{t("Unsere Web-Services", "Our Web Services")}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Weitere Lösungen Internal Linking */}
        {relatedSolutions.length > 0 && (
          <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-600" />
                <span>{t("Weitere maßgeschneiderte Lösungen", "More Tailored Solutions")}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedSolutions.map((rel) => {
                  if (!rel) return null;
                  const relH1 = isEn && rel.h1En ? rel.h1En : rel.h1;
                  const relDesc = isEn && rel.descriptionEn ? rel.descriptionEn : rel.description;
                  const relBadge = isEn && rel.badgeEn ? rel.badgeEn : rel.badge;

                  return (
                    <Link
                      key={rel.slug}
                      href={`/loesungen/${rel.slug}`}
                      className="group bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md hover:border-orange-200 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block mb-1">
                          {relBadge}
                        </span>
                        <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors text-base mb-2">
                          {relH1}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                          {relDesc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                        <span>{t("Details ansehen", "View Details")}</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
