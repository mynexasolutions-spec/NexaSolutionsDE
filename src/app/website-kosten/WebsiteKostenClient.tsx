"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Check,
  Globe,
  Layers,
  Palette,
  Code2,
  Workflow,
  ShieldCheck,
  Server,
  Laptop,
  PenTool,
  ClipboardCheck,
  Rocket,
  Shield,
  Clock,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function WebsiteKostenClient() {
  const { lang, t } = useLanguage();

  const costFactors = [
    {
      num: "01",
      icon: Layers,
      title: t("1. Umfang & Seitenstruktur", "1. Scope & Site Architecture"),
      text: t(
        "Ein fokussierter Onepager erfordert naturgemäß weniger Konzeptions- und Programmieraufwand als eine mehrsprachige Corporate Website mit 30 Unterseiten, Leistungsbeschreibungen, Blog und Case Studies.",
        "A streamlined one-pager naturally requires less discovery and engineering effort than a multilingual corporate platform featuring 30+ service pages, resources, and case studies."
      ),
    },
    {
      num: "02",
      icon: Palette,
      title: t("2. Individuelles UI/UX-Design", "2. Bespoke UI/UX Design"),
      text: t(
        "Fertige Templates sind günstig, sehen aber austauschbar aus und bremsen die Ladezeit aus. Maßgeschneiderte Figma-Designs spiegeln Ihre Corporate Identity 1:1 wider und sind auf maximale Conversion optimiert.",
        "Off-the-shelf templates appear generic and carry bloated code. Tailored Figma designs reflect your corporate identity uniquely and are engineered specifically for high conversion."
      ),
    },
    {
      num: "03",
      icon: Code2,
      title: t("3. Technologie-Stack", "3. Modern Technology Stack"),
      text: t(
        "Moderne Frameworks wie Next.js und React bieten überlegene Ladezeiten, perfekte Core Web Vitals und höchste Sicherheit vor Hackern – im Gegensatz zu wartungsintensiven WordPress-Installationen mit Dutzenden Plugins.",
        "Modern frameworks like Next.js and React deliver superior loading speeds, pristine Core Web Vitals, and robust security—unlike legacy WordPress setups bloated with dozens of fragile plugins."
      ),
    },
    {
      num: "04",
      icon: Workflow,
      title: t("4. Schnittstellen & Funktionen", "4. Custom Features & Integrations"),
      text: t(
        "Spezifische Erweiterungen wie ein Terminbuchungssystem, ein Kundenportal oder Zahlungsschnittstellen mit Stripe erfordern Backend-Architektur.",
        "Dedicated custom features like appointment scheduling, client portals, and payment integrations with Stripe require backend engineering and API design."
      ),
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: t("5. DSGVO & Barrierefreiheit", "5. GDPR & Accessibility Standards"),
      text: t(
        "Rechtssichere Umsetzung ohne unautorisierte Tracking-Skripte, lokale Schriftarten, Cookie-Consent und Einhaltung des Barrierefreiheitsstärkungsgesetzes (BFSG ab Mitte 2025).",
        "Full European privacy compliance without unauthorized tracking, self-hosted typography, compliant consent managers, and BFSG / WCAG accessibility readiness."
      ),
    },
    {
      num: "06",
      icon: Server,
      title: t("6. Hosting & laufende Pflege", "6. Sovereign Hosting & Maintenance"),
      text: t(
        "Hosting auf ISO-27001-zertifizierten deutschen Servern (z. B. Frankfurt am Main), SSL-Zertifikate, tägliche Backups und kontinuierlicher technischer Support nach dem Launch.",
        "Hosting on ISO 27001-certified European infrastructure in Frankfurt, automated SSL, daily encrypted backups, and proactive technical maintenance post-launch."
      ),
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: Laptop,
      title: t("Erstgespräch & Scope-Definition", "Discovery & Scope Definition"),
      desc: t(
        "Wir analysieren Ihre Ziele, Zielgruppe und Wettbewerber. Auf dieser Basis erstellen wir ein verbindliches Festpreisangebot ohne versteckte Zusatzkosten.",
        "We examine your objectives, target audience, and tech requirements to build a binding fixed-price proposal without hidden fees."
      ),
    },
    {
      step: "02",
      icon: PenTool,
      title: t("UI/UX-Design & Wireframing", "UI/UX Design & Prototyping"),
      desc: t(
        "Wir gestalten interaktive Klick-Dummies in Figma. Sie sehen und testen das Design auf Smartphone und Desktop, bevor die erste Zeile Code geschrieben wird.",
        "We design interactive prototypes in Figma, allowing you to test the user journey on mobile and desktop before engineering starts."
      ),
    },
    {
      step: "03",
      icon: ClipboardCheck,
      title: t("Agile Entwicklung & Integration", "Agile Engineering & Integration"),
      desc: t(
        "Umsetzung mit modernstem Next.js, React und TypeScript. Sie erhalten regelmäßige Preview-Links zur kontinuierlichen Abstimmung.",
        "Engineered with state-of-the-art Next.js, React, and TypeScript. You receive live preview builds for continuous review."
      ),
    },
    {
      step: "04",
      icon: Rocket,
      title: t("Quality Assurance & Go-Live", "Quality Assurance & Launch"),
      desc: t(
        "Ausführliche Tests aller Formulare, Mobilgeräte, Browser und Ladezeiten. Reibungsloser Domain-Umzug und Übergabe an Ihre Redakteure.",
        "Rigorous testing of forms, responsive screens, cross-browser performance, and domain cutover with full handover documentation."
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-24">
        {/* ========================================================================= */}
        {/* 1. BREADCRUMB BAR                                                         */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mb-6 sm:mb-8">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 font-medium">
            <ol className="flex items-center gap-1.5 sm:gap-2">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="text-slate-900 font-semibold">
                {t("Website Kosten", "Website Costs")}
              </li>
            </ol>
          </nav>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO SECTION (MATCHING HOMEPAGE HERO TYPOGRAPHY & COLORS)              */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white mb-14 sm:mb-20">
          {/* Background Ambient Glows & Grid Pattern matching Homepage */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70 pointer-events-none -z-10" />
          <div className="absolute -top-24 right-0 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-gradient-to-bl from-blue-100/50 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4" />
          <div className="absolute -bottom-20 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-orange-100/40 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4" />

          <div className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
              {/* Eyebrow Pill with Live Indicator */}
              <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/80 text-orange-700 text-xs font-semibold tracking-wide mb-5 sm:mb-6 shadow-2xs backdrop-blur-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600" />
                </span>
                <span className="uppercase tracking-wider font-bold text-[11px] text-orange-800">
                  {t("TRANSPARENZ & PLANUNGSSICHERHEIT", "TRANSPARENCY & BUDGET CERTAINTY")}
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-medium hidden sm:inline">
                  {t("Leitfaden 2026", "2026 Cost Guide")}
                </span>
              </div>

              {/* Main Headline - Homepage Sizing & Colors */}
              <h1 className="text-[32px] sm:text-[48px] lg:text-[54px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 sm:mb-6 text-center">
                {t(
                  "Was kostet eine professionelle Website",
                  "How Much Does a Professional Website Cost"
                )}{" "}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  {t("in 2026?", "in 2026?")}
                </span>
              </h1>

              {/* Lead Paragraph - Homepage Sizing */}
              <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed font-normal mb-8 sm:mb-9 max-w-3xl text-center mx-auto">
                {t(
                  "Die Preisspanne für Websites reicht im Internet von wenigen hundert Euro für Baukasten-Vorlagen bis hin zu sechsstelligen Budgets für maßgeschneiderte Enterprise-Plattformen. In diesem Leitfaden erfahren Sie ehrlich und transparent, aus welchen Faktoren sich die Entwicklungskosten zusammensetzen, wo typische Kostenfallen lauern und wie ein verlässliches Festpreisangebot entsteht.",
                  "Website development costs range widely from template site builders to six-figure enterprise custom platforms. In this guide, we provide an honest, transparent breakdown of core cost factors, typical budget traps, and fixed-price calculations."
                )}
              </p>

              {/* CTA Buttons - Matching Homepage Pill Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                >
                  <span>{t("Kostenloses Angebot anfordern", "Request Free Proposal")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services/web-development"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300/80 bg-white/90 backdrop-blur-xs text-slate-800 text-sm sm:text-base font-bold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>{t("Zu unseren Web-Services", "Explore Web Services")}</span>
                </Link>
              </div>

              {/* Modern Trust Indicators - Homepage Style */}
              <div className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[14px] sm:text-[16px] font-medium text-slate-600 w-full">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {t("Festpreis-Garantie", "Fixed Price Guarantee")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {t("100% DSGVO-konform", "100% GDPR Compliant")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {t("Keine versteckten Kosten", "Zero Hidden Surcharges")}
                </span>
                <div className="inline-flex items-center gap-2 text-[13px] text-slate-500">
                  <span className="inline-flex items-center justify-center px-1.5 py-1.5 rounded bg-blue-100/80 text-blue-700 font-bold text-[14px]">
                    DE
                  </span>
                  <span>
                    <strong className="text-slate-800 font-semibold">
                      {t("Deutscher Qualitätsstandard", "German Quality Standard")}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SECTION 1: DIE 6 ZENTRALEN KOSTENFAKTOREN (RESPONSIVE 3-COL GRID)       */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mb-16 sm:mb-24">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-14">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50/90 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>{t("KOSTENFAKTOREN", "COST DRIVERS")}</span>
            </div>

            {/* Heading */}
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-4 text-center">
              {t("Die 6 zentralen Kostenfaktoren", "The 6 Core Website Cost Drivers")} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t("einer modernen Website", "for Modern Businesses")}
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed font-normal text-center max-w-3xl mx-auto">
              {t(
                "Eine Website ist längst keine digitale Visitenkarte mehr, sondern der primäre Vertriebs- und Repräsentationskanal Ihres Unternehmens. Die Kosten hängen maßgeblich vom gewünschten Grad an Individualisierung und technischer Leistungsfähigkeit ab.",
                "A modern website is no longer just a digital brochure; it is the primary revenue and branding channel for your enterprise. Costs correlate directly with the degree of customization, integrations, and architectural performance required."
              )}
            </p>
          </div>

          {/* 6 Responsive Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {costFactors.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Icon Container matching Homepage & Mobile App */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 text-blue-600 inline-flex items-center justify-center mb-6 shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                    </div>

                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                      {t(`Faktor ${item.num}`, `Driver ${item.num}`)}
                    </div>

                    <h3 className="text-[20px] sm:text-[22px] font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SECTION 2: TYPISCHE WEBSITE-KATEGORIEN & PREISE (RESPONSIVE 3-COL)     */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mb-16 sm:mb-24">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-14">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50/90 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>{t("PREISMODELLE & ORIENTIERUNG", "PRICING TIERS & OVERVIEW")}</span>
            </div>

            {/* Heading */}
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-4 text-center">
              {t("Typische Website-Kategorien", "Typical Website Categories")} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                {t("im transparenten Überblick", "& Pricing Overview")}
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed font-normal text-center max-w-3xl mx-auto">
              {t(
                "Um Ihnen eine Orientierung zu bieten, unterscheiden wir drei typische Projektgrößen. Alle Projekte werden bei Nexa Solutions transparent auf Festpreisbasis kalkuliert.",
                "To provide clear benchmarks, we categorize projects into three typical tiers. All Nexa Solutions projects are calculated transparently on a fixed-price milestone basis."
              )}
            </p>
          </div>

          {/* Pricing Tiers 3-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Tier 1 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t("Paket 01", "Tier 01")}
                  </span>
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
                    {t("TODO: Preisspannen vom Inhaber", "TODO: Price ranges by owner")}
                  </span>
                </div>

                <h3 className="text-[20px] sm:text-[24px] font-bold text-slate-900 mb-3">
                  {t(
                    "Kompakte Business Website (Onepager / bis 5 Seiten)",
                    "Compact Business Website (Onepager / up to 5 pages)"
                  )}
                </h3>

                <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed mb-6 font-normal">
                  {t(
                    "Ideal für lokale Dienstleister, Gründer und Berater, die einen professionellen, schnellen Webauftritt mit Kontaktformular und Top-Mobiloptimierung benötigen.",
                    "Ideal for local service providers, startups, and consultants requiring a professional, high-speed web presence with lead intake and mobile optimization."
                  )}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-2.5 text-base sm:text-lg lg:text-[19px] text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Individuelles Responsive Design in Figma", "Bespoke Responsive Design in Figma")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Next.js Performance & perfekte Core Web Vitals", "Next.js Performance & pristine Core Web Vitals")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("DSGVO-konforme Basiseinrichtung & lokales Font-Hosting", "GDPR compliance & self-hosted local typography")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-800 hover:text-white hover:bg-slate-900 font-bold text-sm transition-all shadow-2xs"
                >
                  <span>{t("Angebot für Onepager", "Get Onepager Quote")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tier 2 - Featured Most Popular */}
            <div className="rounded-2xl border-2 border-orange-400 bg-gradient-to-b from-orange-50/40 via-white to-white p-7 sm:p-8 flex flex-col justify-between shadow-xl shadow-orange-500/10 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                {t("BELIEBTER STANDARD", "MOST POPULAR")}
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 mt-1">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {t("Paket 02", "Tier 02")}
                  </span>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full border border-orange-300">
                    {t("TODO: Preisspannen vom Inhaber", "TODO: Price ranges by owner")}
                  </span>
                </div>

                <h3 className="text-[20px] sm:text-[24px] font-bold text-slate-900 mb-3">
                  {t(
                    "Umfassende Corporate Website (10 bis 25 Seiten)",
                    "Comprehensive Corporate Website (10 to 25 pages)"
                  )}
                </h3>

                <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed mb-6 font-normal">
                  {t(
                    "Der Standard für etablierte B2B-Unternehmen, Handwerksbetriebe und Agenturen mit mehreren Leistungsbereichen, Karriereportal, Fallstudien und Lead-Generierung.",
                    "The standard for established B2B firms and agencies featuring multi-service architectures, careers section, case studies, and structured lead pipelines."
                  )}
                </p>

                <div className="pt-4 border-t border-orange-100">
                  <ul className="space-y-2.5 text-base sm:text-lg lg:text-[19px] text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Detaillierte Keyword- und Informationsarchitektur", "Strategic information and SEO keyword architecture")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Headless CMS zur eigenständigen Inhaltspflege", "Headless CMS for seamless content updates")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Integration von Lead-Pipelines und n8n-Workflows", "Integration of automated lead routing & n8n workflows")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-orange-100">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>{t("Angebot für Corporate", "Get Corporate Quote")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t("Paket 03", "Tier 03")}
                  </span>
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
                    {t("TODO: Preisspannen vom Inhaber", "TODO: Price ranges by owner")}
                  </span>
                </div>

                <h3 className="text-[20px] sm:text-[24px] font-bold text-slate-900 mb-3">
                  {t(
                    "Individuelle Web-Applikation / Kundenportal",
                    "Custom Web Application / Client Portal"
                  )}
                </h3>

                <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed mb-6 font-normal">
                  {t(
                    "Komplexe Softwarelösungen mit Benutzer-Authentifizierung, Kundenbereich, Datenbankanbindung und individueller Geschäftslogik.",
                    "Complex web platforms featuring user authentication, protected client portals, database storage, and custom business logic."
                  )}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-2.5 text-base sm:text-lg lg:text-[19px] text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Eigene Datenbankarchitektur (PostgreSQL / Supabase)", "Dedicated relational database architecture (PostgreSQL / Supabase)")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Rollen- und Rechtemanagement", "Granular role and permission management")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t("Nahtlose ERP- und Zahlungsanbindung", "Seamless ERP and checkout gateways")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-800 hover:text-white hover:bg-slate-900 font-bold text-sm transition-all shadow-2xs"
                >
                  <span>{t("Angebot für Web-App", "Get Web-App Quote")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SECTION 3: DER ABLAUF BEI NEXA SOLUTIONS (RESPONSIVE 4-COL GRID)       */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mb-16 sm:mb-24">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-14">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50/90 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>{t("TRANSPARENTER PROZESS", "STRUCTURED PROCESS")}</span>
            </div>

            {/* Heading */}
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-4 text-center">
              {t("Der Ablauf Ihres Projekts", "Our Project Delivery Process")} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t("bei Nexa Solutions", "at Nexa Solutions")}
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed font-normal text-center max-w-3xl mx-auto">
              {t(
                "Transparenz ist unser oberstes Gebot. Jedes Projekt durchläuft einen klar definierten 4-Stufen-Prozess, der sicherstellt, dass Zeitplan und Budget strikt eingehalten werden:",
                "Transparency is our guiding principle. Every engagement follows structured milestones ensuring strict adherence to deadlines and budget limits:"
              )}
            </p>
          </div>

          {/* 4 Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, sIdx) => {
              const Icon = step.icon;
              return (
                <div
                  key={sIdx}
                  className="rounded-[5px] border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="w-12 h-12 rounded-[5px] bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-200/80 text-orange-600 font-extrabold flex items-center justify-center text-lg shadow-sm mb-5 group-hover:scale-105 group-hover:bg-orange-600  transition-all">
                      {step.step}
                    </div>

                    <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. CALL TO ACTION BANNER (MATCHING HOMEPAGE CTABANNER STYLE & COLORS)     */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="relative rounded-[5px] sm:rounded-[5px] bg-white border border-slate-200/90 px-6 py-10 sm:px-12 sm:py-14 overflow-hidden shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)]">
            {/* Subtle Ambient Card Highlights */}
            <div
              className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
              }}
            />

            <div className="flex flex-col items-center text-center relative z-10 max-w-3xl mx-auto">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-1.5 text-orange-500 text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-5">
                <span className="text-orange-500 font-mono font-bold">|→</span>
                <span>{t("LASS UNS ZUSAMMEN BAUEN", "LET'S BUILD TOGETHER")}</span>
              </div>

              {/* Headline */}
              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-4 text-center">
                {t(
                  "Möchten Sie eine genaue",
                  "Looking for an Exact"
                )}{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {t("Kosteneinschätzung?", "Cost Estimate?")}
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-7 font-normal text-center mx-auto">
                {t(
                  "Teilen Sie uns kurz Ihre Anforderungen mit. Wir erstellen Ihnen innerhalb von 24 Stunden eine individuelle, transparente Kostenschätzung mit Festpreisgarantie.",
                  "Share your requirements with our team. We deliver a transparent feasibility breakdown and fixed-price quote within 24 hours."
                )}
              </p>

              {/* 3 Benefit Checkmarks */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-md bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {t("Kostenlose Erstberatung", "Free Consultation")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-md bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {t("Verbindliches Festpreisangebot", "Fixed Price Proposal")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-md bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {t("100 % DSGVO-konform", "100% GDPR Compliant")}
                  </span>
                </div>
              </div>

              {/* Buttons matching Homepage CTA Banner */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                >
                  <span>{t("Jetzt unverbindlich anfragen", "Request Non-Binding Proposal")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services/mobile-app-development"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300/80 bg-white/90 backdrop-blur-xs text-slate-800 text-sm sm:text-base font-bold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>{t("Mobile App Entwicklung", "Mobile App Development")}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
