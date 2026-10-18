"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Sparkles,
  HelpCircle,
  Layers,
  Check,
  ShieldCheck,
  UtensilsCrossed,
  Smartphone,
  Gauge,
  Clock,
  Star,
  Sliders,
  Receipt,
  QrCode,
  CreditCard,
  Bell,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
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
        className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
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

  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeScreenTab, setActiveScreenTab] = useState<"menu" | "order" | "tse">("menu");

  const h1 = isEn && solution.h1En ? solution.h1En : solution.h1;
  const intro = isEn && solution.introEn ? solution.introEn : solution.intro;
  const badge = isEn && solution.badgeEn ? solution.badgeEn : solution.badge;
  const faqHeading = isEn
    ? (solution.faqTitleEn || `FAQ on ${h1}`)
    : (solution.faqTitle || `FAQ zu ${h1}`);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main className="flex-1">
        {/* Hero Section matching Mobile App Development Page */}
        <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-100">
          {/* Decorative glowing background orbs */}
          <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-blue-200/35 via-indigo-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-orange-100/40 via-amber-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />

          <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation Bar */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {t("Startseite", "Home")}
              </Link>
              <span className="text-slate-300">/</span>
              <Link
                href="/loesungen"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                {t("Lösungen", "Solutions")}
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-blue-600 font-semibold truncate max-w-xs sm:max-w-md">
                {badge}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Headline, Highlights & Actions */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7"
              >
                {/* Eyebrow Badge with pulsing blue dot */}
                <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/90 text-blue-700 text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-2xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    <span>{badge}</span>
                  </div>
                </div>

                {/* Main Headline with Mobile App Development typography & gradient */}
                <h1 className="text-[34px] sm:text-[48px] lg:text-[56px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 sm:mb-6 text-center lg:text-left">
                  {h1}
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 sm:mb-8 font-normal text-center lg:text-left mx-auto lg:mx-0 max-w-2xl">
                  {intro}
                </p>

                {/* 4 Key Highlight Cards matching Mobile App Development */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-9">
                  {[
                    { icon: QrCode, label: t("QR-Bestellung", "QR Ordering"), sub: t("Ohne App-Download", "No App Download") },
                    { icon: Gauge, label: t("Echtzeit-Küche", "Kitchen Display"), sub: t("Sofort am Display", "Live Sync") },
                    { icon: ShieldCheck, label: t("TSE-Zertifiziert", "Fiscal Certified"), sub: t("100% KassenSichV", "Full Compliance") },
                    { icon: Zap, label: t("0% Provision", "0% Commission"), sub: t("Voller Gewinn", "Keep 100% Margin") },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div
                      key={label}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold text-slate-900">{label}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">{sub}</span>
                    </div>
                  ))}
                </div>

                {/* Rounded-full Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                  <button
                    type="button"
                    onClick={() => setContactOpen(true)}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                  >
                    <span>{t("Gastro-Lösung unverbindlich anfragen", "Request Restaurant Solution")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link
                    href="/website-kosten"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300/80 bg-white/90 backdrop-blur-xs text-slate-800 text-sm sm:text-base font-bold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Sliders className="w-4 h-4 text-slate-500" />
                    <span>{t("Preise & Kosten ansehen", "View Pricing & Details")}</span>
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: Signature Interactive Smartphone Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="w-full max-w-[340px] sm:max-w-[380px] relative">
                  {/* Phone Exterior Frame */}
                  <div className="relative rounded-[44px] bg-slate-950 p-3 sm:p-3.5 shadow-2xl border-[4px] border-slate-800">
                    {/* Dynamic Island Speaker */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-between px-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                      <div className="w-2 h-2 rounded-full bg-blue-500/60 animate-pulse" />
                    </div>

                    {/* Phone Screen Container */}
                    <div className="relative rounded-[36px] bg-slate-900 text-white overflow-hidden aspect-[9/16] flex flex-col justify-between pt-10 pb-4 px-4 border border-slate-800/80">
                      {/* Interactive Screen Tabs */}
                      <div className="flex gap-1 bg-slate-800/90 p-1 rounded-xl mb-3 text-[11px] font-semibold">
                        <button
                          type="button"
                          onClick={() => setActiveScreenTab("menu")}
                          className={`flex-1 py-1 rounded-lg transition-all ${
                            activeScreenTab === "menu"
                              ? "bg-blue-600 text-white shadow-sm"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          Speisekarte
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveScreenTab("order")}
                          className={`flex-1 py-1 rounded-lg transition-all ${
                            activeScreenTab === "order"
                              ? "bg-blue-600 text-white shadow-sm"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          Tisch #14
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveScreenTab("tse")}
                          className={`flex-1 py-1 rounded-lg transition-all ${
                            activeScreenTab === "tse"
                              ? "bg-blue-600 text-white shadow-sm"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          TSE Kasse
                        </button>
                      </div>

                      {/* Tab 1: Live Menu Screen */}
                      {activeScreenTab === "menu" && (
                        <div className="flex-1 flex flex-col justify-between space-y-2.5 text-left">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                                Tisch #14 • QR Menü
                              </span>
                              <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 px-2 py-0.5 rounded-full font-bold">
                                Live geöffnet
                              </span>
                            </div>

                            {/* Dish 1 */}
                            <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700/80 flex items-center justify-between mb-2 shadow-sm">
                              <div>
                                <div className="text-[12px] font-bold text-white">Trüffel Tagliolini</div>
                                <div className="text-[10px] text-slate-400">Frischer schwarzer Trüffel, Parmesan</div>
                                <div className="text-[11px] font-extrabold text-orange-400 mt-0.5">18,50 €</div>
                              </div>
                              <button
                                type="button"
                                className="w-7 h-7 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-xs shadow-xs"
                              >
                                +
                              </button>
                            </div>

                            {/* Dish 2 */}
                            <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700/80 flex items-center justify-between shadow-sm">
                              <div>
                                <div className="text-[12px] font-bold text-white">Hausgemachter Eistee</div>
                                <div className="text-[10px] text-slate-400">Pfirsich & Minze • 0,4l</div>
                                <div className="text-[11px] font-extrabold text-orange-400 mt-0.5">4,80 €</div>
                              </div>
                              <button
                                type="button"
                                className="w-7 h-7 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-xs shadow-xs"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="p-2.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl text-center text-[11px] font-bold text-white shadow-md">
                            2 Artikel im Warenkorb (23,30 €)
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Live Table Order Screen */}
                      {activeScreenTab === "order" && (
                        <div className="flex-1 flex flex-col justify-between space-y-3 text-left">
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white">Bestellung an Küche gesendet</span>
                              <span className="text-[10px] text-emerald-400 font-bold">In Zubereitung</span>
                            </div>

                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3.5 rounded-2xl shadow-sm">
                              <span className="text-[10px] text-blue-200 uppercase font-semibold">Geschätzte Dauer</span>
                              <div className="text-2xl font-black text-white mt-0.5">12 Minuten</div>
                              <span className="text-[10px] text-emerald-300 font-medium">Küchendisplay synchronisiert</span>
                            </div>

                            <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 flex items-start gap-2.5 shadow-lg">
                              <Bell className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                              <div className="text-left">
                                <div className="text-[11px] font-bold text-white">Kellner-Ruf aktiv</div>
                                <div className="text-[10px] text-slate-300">Servicekraft ist auf dem Weg zu Tisch 14</div>
                              </div>
                            </div>
                          </div>

                          <div className="p-2 bg-slate-800/50 rounded-xl text-center text-[10px] text-slate-400">
                            Direkt am Tisch via Apple Pay / EC bezahlbar
                          </div>
                        </div>
                      )}

                      {/* Tab 3: TSE Fiscal Screen */}
                      {activeScreenTab === "tse" && (
                        <div className="flex-1 flex flex-col justify-between space-y-3 text-left">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white">KassenSichV TSE Beleg</span>
                              <span className="text-[10px] text-emerald-400 font-bold">100% Konform</span>
                            </div>

                            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1.5 text-[11px]">
                              <div className="flex justify-between">
                                <span className="text-slate-400">TSE Signatur:</span>
                                <span className="text-white font-mono text-[9px]">b64#a8f921...c9</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Kassen-ID:</span>
                                <span className="text-white font-semibold">TSE-POS-01</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400">Lieferdienst-Provision:</span>
                                <span className="text-emerald-400 font-bold">0,00 € (Gespart)</span>
                              </div>
                            </div>

                            <div className="p-2.5 bg-blue-950/40 border border-blue-800/50 rounded-2xl text-[10px] text-blue-200">
                              Digitaler Beleg per QR-Code direkt auf das Smartphone des Gastes ohne Papierverschwendung.
                            </div>
                          </div>

                          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>DATEV & Finanzamt zertifiziert</span>
                          </div>
                        </div>
                      )}

                      {/* Bottom Phone Home Indicator */}
                      <div className="w-28 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
                    </div>
                  </div>

                  {/* Floating Rating Pill matching Mobile App Development */}
                  <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-slate-200/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xs">
                      4.9
                    </div>
                    <div>
                      <div className="flex text-amber-400 text-xs">
                        {Array(5).fill(null).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-600 font-semibold">
                        {t("Höhere Kundenzufriedenheit", "Customer Satisfaction Score")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Capabilities / Modules Grid matching Mobile App Development */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <Layers className="w-3.5 h-3.5" />
                <span>{t("SYSTEM-MODULE", "CORE MODULES")}</span>
              </div>
              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-4 text-center">
                {t("Alles, was moderne Gastronomie benötigt", "Everything Modern Restaurants Need")}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
                {t(
                  "Von der digitalen Tischbestellung über TSE-Kassenschnittstellen bis hin zum Küchen-Display und automatischer DATEV-Exportierung.",
                  "From digital table ordering to certified POS interfaces, kitchen display routing, and automated accounting workflows."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solution.sections.map((sec, idx) => {
                const secH2 = isEn && sec.h2En ? sec.h2En : sec.h2;
                const secBody = isEn && sec.bodyEn ? sec.bodyEn : sec.body;
                const secBullets = isEn && sec.bulletsEn ? sec.bulletsEn : sec.bullets;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-7 sm:p-8 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
                  >
                    <div>
                      {/* Icon container matching Mobile App Development */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 text-blue-600 inline-flex items-center justify-center mb-6 shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                        <UtensilsCrossed className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1.5">
                        {t(`Modul 0${idx + 1}`, `Module 0${idx + 1}`)}
                      </div>

                      <h3 className="text-[20px] sm:text-[24px] font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {secH2}
                      </h3>

                      <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {secBody.map((para, pIdx) => (
                          <p key={pIdx}>{renderWithLinks(para)}</p>
                        ))}
                      </div>
                    </div>

                    {secBullets && secBullets.length > 0 && (
                      <div className="pt-4 border-t border-slate-200/80">
                        <ul className="space-y-2">
                          {secBullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive FAQ Accordion matching Mobile App Development */}
        <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-white text-blue-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>{t("HÄUFIG GESTELLTE FRAGEN", "FAQ")}</span>
              </div>
              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-4 text-center">
                {faqHeading}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
                {t(
                  "Transparente Antworten auf die wichtigsten Fragen zu Einführung, Integration und TSE-Konformität.",
                  "Clear answers regarding deployment, integration, and fiscal compliance."
                )}
              </p>
            </div>

            <div className="space-y-4">
              {solution.faq.map((item, fIdx) => {
                const q = isEn && item.qEn ? item.qEn : item.q;
                const a = isEn && item.aEn ? item.aEn : item.a;
                const isOpen = openFaq === fIdx;

                return (
                  <div
                    key={fIdx}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer gap-4"
                    >
                      <span className="text-[16px] sm:text-[18px] font-bold text-slate-900">
                        {q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-[14px] sm:text-[16px] text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {renderWithLinks(a)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner matching Mobile App Development */}
        <section className="py-14 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t("BEREIT FÜR DEN NÄCHSTEN SCHRITT?", "READY TO ELEVATE YOUR SERVICE?")}</span>
            </div>

            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-white tracking-tight leading-[1.10] sm:leading-[1.09] mb-5 text-center">
              {t("Bereit für Ihre maßgeschneiderte Gastro-App?", "Ready for Your Custom Restaurant Platform?")}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              {t(
                "Wir beraten Sie persönlich zu Software-Architektur, TSE-Kassenanbindung und Zeitplan. Erhalten Sie eine transparente Einschätzung innerhalb von 24 Stunden.",
                "We personally consult you on software architecture, fiscal POS integration, and roadmap. Receive a transparent feasibility assessment within 24 hours."
              )}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>{t("Erstberatung starten", "Start Consultation")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/services/mobile-app-development"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-sm sm:text-base font-bold transition-all shadow-xs"
              >
                <span>{t("Mobile App Services", "Mobile App Services")}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* More Tailored Solutions Section */}
        {relatedSolutions.length > 0 && (
          <section className="py-14 sm:py-20 bg-[#FDFDFE]">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t("WEITERE SYSTEME", "MORE SOLUTIONS")}</span>
                  </div>
                  <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-2">
                    {t("Weitere maßgeschneiderte Lösungen", "More Tailored Solutions")}
                  </h2>
                </div>
                <Link
                  href="/loesungen"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
                >
                  <span>{t("Alle Lösungen ansehen", "View All Solutions")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedSolutions.map((rel) => {
                  if (!rel) return null;
                  const relH1 = isEn && rel.h1En ? rel.h1En : rel.h1;
                  const relDesc = isEn && rel.descriptionEn ? rel.descriptionEn : rel.description;
                  const relBadge = isEn && rel.badgeEn ? rel.badgeEn : rel.badge;

                  return (
                    <Link
                      key={rel.slug}
                      href={`/loesungen/${rel.slug}`}
                      className="group bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide block mb-2">
                          {relBadge}
                        </span>
                        <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                          {relH1}
                        </h3>
                        <p className="text-base sm:text-lg text-slate-600 line-clamp-3 leading-relaxed font-normal mb-5">
                          {relDesc}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-blue-600 group-hover:translate-x-1.5 transition-transform">
                        <span>{t("Details ansehen", "View Details")}</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={h1}
      />
    </div>
  );
}
