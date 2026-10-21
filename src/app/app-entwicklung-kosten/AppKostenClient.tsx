"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Shield,
  ShieldCheck,
  Clock,
  Layers,
  HelpCircle,
  ChevronDown,
  Code2,
  Cpu,
  Coins,
  Settings,
  Scale,
  UtensilsCrossed,
  Check,
  PhoneCall,
  Sliders,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppKostenRechner from "./AppKostenRechner";
import { APP_COST_CONFIG } from "@/data/appKostenData";
import { useLanguage } from "@/context/LanguageContext";

export default function AppKostenClient() {
  const { lang, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      <Navbar />

      <main role="main" className="flex-1">
        {/* Hero Section - Matching services/web-development style, orbs, and grid */}
        <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-12 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
          {/* Subtle decorative glowing background orbs */}
          <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-orange-200/35 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />

          <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
              <Link
                href="/"
                className="hover:text-orange-600 transition-colors flex items-center gap-1.5 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {t("Startseite", "Home")}
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{t("Services", "Services")}</span>
              <span className="text-slate-300">/</span>
              <span className="text-orange-600 font-semibold">
                {t("App Entwicklung Kosten", "App Development Cost")}
              </span>
            </div>

            {/* Hero Main Content */}
            <div className="text-center max-w-4xl mx-auto">
              {/* Eyebrow Badge with Ping Animation */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span>
                  {t(
                    "TRANSPARENTER KOSTEN-LEITFADEN 2026 • GERMAN ENGINEERING",
                    "TRANSPARENT 2026 PRICING GUIDE • GERMAN ENGINEERING"
                  )}
                </span>
              </div>

              {/* H1 Headline - Exact typography of services/web-development */}
              <h1 className="text-[35px] sm:text-[52px] lg:text-[58px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 sm:mb-6 text-center">
                {t("App Entwicklung Kosten: ", "App Development Cost: ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                  {t("Preise & Rechner 2026", "Pricing & Calculator 2026")}
                </span>
              </h1>

              {/* Subheading / Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 sm:mb-8 max-w-3xl font-normal text-center mx-auto">
                {t(
                  "Was kostet es, eine professionelle App programmieren zu lassen? In diesem umfassenden Leitfaden erfahren Gründer, KMU und Konzerne alle Kostenfaktoren, Preisbeispiele für iOS & Android sowie Einsparpotenziale durch moderne Cross-Platform-Entwicklung mit React Native zum verbindlichen Festpreis.",
                  "What does it cost to engineer a production-ready mobile application? In this comprehensive pricing guide, discover cost drivers, price benchmarks for iOS & Android, and efficiency savings with modern cross-platform engineering."
                )}
              </p>

              {/* Call-to-actions */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
                <a
                  href="#app-rechner"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                >
                  <Sliders className="w-4 h-4" />
                  <span>{t("Zum Online-Rechner", "Try Online Calculator")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-slate-300/80 bg-white/90 backdrop-blur-xs text-slate-800 text-sm sm:text-base font-bold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-orange-600" />
                  <span>{t("Kostenlose Beratung anfragen", "Request Free Consultation")}</span>
                </Link>
              </div>
            </div>

            {/* Quick Summary Box direkt unter H1 - Styled like services/web-development comparison & cards */}
            <div className="mt-6 rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-bold tracking-wider uppercase mb-2">
                    <Coins className="w-3.5 h-3.5 text-orange-500" />
                    <span>{t("RICHTWERTE 2026", "2026 BENCHMARKS")}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-[900] text-[#0F172A] tracking-tight">
                    {lang === "de"
                      ? APP_COST_CONFIG.summaryBox.titleDe
                      : APP_COST_CONFIG.summaryBox.titleEn}
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-2 max-w-3xl">
                    {lang === "de"
                      ? APP_COST_CONFIG.summaryBox.noteDe
                      : APP_COST_CONFIG.summaryBox.noteEn}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {APP_COST_CONFIG.summaryBox.ranges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-orange-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {lang === "de" ? item.labelDe : item.labelEn}
                      </div>
                      <div className="text-xl sm:text-2xl font-[900] text-orange-600 mt-2">
                        {item.range}
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-700 font-semibold mt-1">
                        <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>
                          {t("Dauer:", "Timeline:")}{" "}
                          {lang === "de" ? item.durationDe : item.durationEn}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                        {lang === "de" ? item.descriptionDe : item.descriptionEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interaktiver Kostenrechner Component */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-b border-slate-100">
          <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            <AppKostenRechner />
          </div>
        </section>

        {/* Content-Bereich: Die 8 vertiefenden Fachkapitel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">

          {/* Sektion 1: Was kostet eine App? */}
          <section className="scroll-mt-28" id="was-kostet-eine-app">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Smartphone className="w-3.5 h-3.5" />
              <span>{t("KOSTENÜBERSICHT", "COST BREAKDOWN")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-6">
              {t("Was kostet eine App?", "What Does an App Cost?")}
            </h2>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-5">
              {lang === "de" ? (
                <>
                  <p>
                    Die Frage <strong>„Was kostet eine App?“</strong> lässt sich am besten mit dem Bau
                    eines Hauses vergleichen: Die Gesamtkosten hängen nicht von der bloßen Existenz
                    des Gebäudes ab, sondern maßgeblich von Grundriss, Ausstattung, Etagenzahl und
                    Fundament. Wer eine Smartphone-Anwendung plant, möchte wissen, wie sich die{" "}
                    <strong>App Programmieren Kosten</strong> konkret zusammensetzen und was es kostet,{" "}
                    <strong>eine App entwickeln</strong> zu lassen. Wenn Sie in Deutschland eine
                    professionelle <strong>App erstellen lassen</strong>, bewegen sich die
                    durchschnittlichen <strong>App Entwicklungskosten</strong> in der Praxis
                    zwischen <em>[PREIS HIER EINTRAGEN: ca. 12.000 € für ein fokussiertes MVP]</em> und{" "}
                    <em>[PREIS HIER EINTRAGEN: weit über 60.000 € für komplexe Unternehmensanwendungen]</em>.
                  </p>
                  <p>
                    Der finale Preis setzt sich aus vier Kernphasen zusammen: der strategischen
                    Konzeptionsphase (Discovery & User Research), dem maßgeschneiderten UI/UX-Design in
                    Figma, der softwaretechnischen Frontend- und Backend-Entwicklung sowie dem intensiven
                    Quality Assurance Testing inklusive Store-Freigabe bei Apple und Google. Wer an der
                    Planung spart, riskiert spätere Nachbesserungen, die ein Vielfaches kosten. Bei Nexa
                    Solutions in Stuttgart definieren wir vor Projektbeginn klare Meilensteine, um die{" "}
                    <strong>Kosten einer App Entwicklung</strong> von Tag eins an transparent und planbar
                    zu halten.
                  </p>
                  <p>
                    Ein wesentlicher Hebel zur Kostenoptimierung liegt in der Wahl der zugrundeliegenden
                    Architektur. Durch den Einsatz moderner Cross-Platform-Technologien wie React Native
                    lässt sich der Programmieraufwand im Vergleich zu doppelter nativer Entwicklung um bis
                    zu 40 % senken, ohne Einbußen bei Benutzererlebnis oder Ausführungsgeschwindigkeit.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The question <strong>“What does an app cost?”</strong> is best compared to building
                    a custom house: total project expenses depend not just on the building itself, but on
                    architectural blueprints, finish quality, floor count, and foundation engineering.
                    Anyone planning a mobile product wants to know how <strong>app development costs</strong>{" "}
                    are structured and what it takes to bring a high-performance application to market.
                    In Germany and across Europe, average engineering costs range from{" "}
                    <em>[PREIS HIER EINTRAGEN: approx. €12,000 for a focused MVP]</em> to{" "}
                    <em>[PREIS HIER EINTRAGEN: upwards of €60,000 for enterprise software]</em>.
                  </p>
                  <p>
                    The final budget consists of four critical phases: strategic discovery and UX research,
                    bespoke Figma user interface design, full-stack mobile and cloud engineering, and
                    rigorous automated QA testing leading to Apple App Store and Google Play publication.
                    At Nexa Solutions in Stuttgart, we establish verifiable milestone deliverables from
                    day one to guarantee total financial certainty.
                  </p>
                  <p>
                    The greatest lever for cost efficiency is modern cross-platform engineering. By deploying
                    React Native, organizations share up to 85–90% of their codebase between iOS and Android,
                    cutting upfront engineering expenses by up to 40% without compromising native 60 FPS fluidity.
                  </p>
                </>
              )}
            </div>
          </section>

          {/* Sektion 2: App erstellen: Kosten nach App-Typ */}
          <section className="scroll-mt-28" id="kosten-nach-app-typ">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Layers className="w-3.5 h-3.5" />
              <span>{t("APP-KATEGORIEN", "PROJECT TIERS")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-6">
              {t(
                "App erstellen: Kosten nach App-Typ",
                "App Development: Costs by App Tier"
              )}
            </h2>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-5 mb-10">
              {lang === "de" ? (
                <>
                  <p>
                    Wer eine <strong>App erstellen lassen</strong> möchte, stellt schnell fest: Die
                    Anforderungen variieren dramatisch zwischen einem ersten schnellen Markttest und
                    einer unternehmensweiten Kernsoftware. Wenn Sie die <strong>Kosten einer App Entwicklung</strong>{" "}
                    präzise kalkulieren wollen, ist die Einordnung in den passenden Projekttyp der erste
                    und wichtigste Schritt. Ein einfaches Minimum Viable Product (MVP) zielt darauf ab,
                    eine innovative Geschäftsidee mit echten Endnutzern zu verifizieren, ohne unnötiges
                    Kapital zu binden. Hier liegen die typischen <strong>App Erstellen Kosten</strong> bei{" "}
                    <em>[PREIS HIER EINTRAGEN: ca. 12.000 € bis 25.000 €]</em>.
                  </p>
                  <p>
                    Etablierte mittelständische Unternehmen benötigen dagegen meist eine maßgeschneiderte
                    Business-App. Typische Anwendungsfälle sind mobile Kundenportale, Außendienst-Lösungen
                    oder interne Logistik-Apps. Da hier Schnittstellen zu vorhandenen ERP- und CRM-Systemen,
                    ausgereifte Rollen- und Rechtekonzepte sowie höchste Ausfallsicherheit erforderlich
                    sind, bewegen sich die <strong>Kosten für eine App Entwicklung</strong> in dieser Kategorie
                    üblicherweise zwischen <em>[PREIS HIER EINTRAGEN: 25.000 € und 60.000 €]</em>.
                  </p>
                  <p>
                    Für hochkomplexe Multiplattform-Systeme, FinTech-Anwendungen oder soziale Netzwerke
                    mit Millionen gleichzeitiger Zugriffe steigen die <strong>App Entwicklungskosten</strong>{" "}
                    durch Microservice-Cloud-Infrastrukturen und strengste Sicherheitsaudits auf{" "}
                    <em>[PREIS HIER EINTRAGEN: ab 60.000 € aufwärts]</em>. In der folgenden Gegenüberstellung
                    sehen Sie die drei Ausbaustufen im direkten Vergleich:
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Organizations planning to commission a mobile application quickly discover that requirements
                    differ substantially between a focused market test and an enterprise-wide operational portal.
                    Accurately budgeting your application begins with selecting the appropriate tier. A lean
                    Minimum Viable Product (MVP) validates product-market fit with real users while preserving
                    capital, with benchmarks ranging around{" "}
                    <em>[PREIS HIER EINTRAGEN: approx. €12,000 to €25,000]</em>.
                  </p>
                  <p>
                    Established SMEs and scaling brands typically commission a tailored Business App.
                    Common use cases include customer portals, field service apps, or inventory logistics.
                    With secure ERP/CRM integrations and robust role-based access controls, budgets
                    typically range from <em>[PREIS HIER EINTRAGEN: €25,000 to €60,000]</em>.
                  </p>
                  <p>
                    For complex ecosystems, FinTech platforms, or high-concurrency mobile networks, engineering
                    costs expand to <em>[PREIS HIER EINTRAGEN: from €60,000 upwards]</em> due to distributed
                    microservices and comprehensive compliance audits. Below is a direct comparison of the three tiers:
                  </p>
                </>
              )}
            </div>

            {/* Pricing Tiers Cards - Styled exactly like packages in services/web-development */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {APP_COST_CONFIG.pricingTiers.map((tier) => {
                const isPopular = tier.popular;
                return (
                  <div
                    key={tier.id}
                    className={`rounded-[5px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                      isPopular
                        ? "bg-white border-2 border-orange-500 shadow-xl shadow-orange-500/10 scale-[1.02] md:-translate-y-2"
                        : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-black tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md">
                        {lang === "de" ? tier.badgeDe : tier.badgeEn}
                      </div>
                    )}

                    <div>
                      {/* Badge if not popular */}
                      {!isPopular && (lang === "de" ? tier.badgeDe : tier.badgeEn) && (
                        <div className="mb-4">
                          <span className="text-xs font-semibold bg-orange-50 border border-orange-200 text-orange-700 px-3 py-1 rounded-full">
                            {lang === "de" ? tier.badgeDe : tier.badgeEn}
                          </span>
                        </div>
                      )}

                      <h3 className="text-[20px] sm:text-[24px] font-bold text-slate-900 mb-1">
                        {lang === "de" ? tier.nameDe : tier.nameEn}
                      </h3>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium">
                        {lang === "de" ? tier.subtitleDe : tier.subtitleEn}
                      </div>

                      <div className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-orange-600 tracking-tight mt-4 mb-2">
                        {tier.priceRange}
                      </div>

                      <div className="text-xs sm:text-sm text-slate-700 font-semibold flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span>
                          {lang === "de" ? tier.durationDe : tier.durationEn}
                        </span>
                      </div>

                      <p className="text-base sm:text-lg text-slate-600 mt-4 mb-6 leading-relaxed">
                        {lang === "de"
                          ? tier.descriptionDe
                          : tier.descriptionEn}
                      </p>

                      <div className="space-y-3 mb-8 pt-5 border-t border-slate-100">
                        {(lang === "de" ? tier.featuresDe : tier.featuresEn).map(
                          (feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-slate-700"
                            >
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full py-3.5 px-6 rounded-full text-sm sm:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                        isPopular
                          ? "bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white shadow-md shadow-orange-500/20"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      <span>{t("Angebot anfragen", "Request a Quote")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Sektion 3: iOS vs. Android Kosten */}
          <section className="scroll-mt-28" id="ios-vs-android-kosten">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Scale className="w-3.5 h-3.5" />
              <span>{t("PLATTFORM-VERGLEICH", "PLATFORM COMPARISON")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-6">
              {t(
                "iOS vs. Android Kosten: Nativ oder Cross-Platform?",
                "iOS vs. Android Costs: Native vs. Cross-Platform"
              )}
            </h2>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-5">
              {lang === "de" ? (
                <>
                  <p>
                    Historisch stellte sich für jedes Unternehmen die Frage: Entwickeln wir zuerst für
                    Apples iPhone (iOS) oder für Google Android? Wer beide Stores bedienen wollte,
                    musste zwei separate Entwicklungsteams engagieren – eines für Swift bzw. Objective-C
                    unter iOS und ein weiteres für Kotlin bzw. Java unter Android. Dadurch verdoppelten
                    sich die <strong>Kosten für App Entwicklung</strong> nahezu vollständig, da jede
                    Benutzeroberfläche und Geschäftslogik doppelt programmiert und gewartet werden musste.
                  </p>
                  <p>
                    Mit modernen Cross-Platform-Frameworks wie <strong>React Native</strong> (entwickelt
                    von Meta und genutzt von Microsoft, Shopify und Discord) hat sich das Paradigma grundlegend
                    geändert. Anstatt getrennter Codebasen schreiben unsere Entwickler eine hochgradig
                    wiederverwendbare Codebasis in TypeScript, die direkt in native Betriebssystem-Komponenten
                    kompiliert wird. Das Ergebnis: butterweiche 60-FPS-Animationen, native Gesten und direkter
                    Zugriff auf Kamera, GPS, Bluetooth und Secure Storage – bei bis zu 40 % geringeren
                    Entwicklungskosten.
                  </p>
                  <p>
                    Nur bei hochspezialisierten Anwendungen – wie extrem hardwarenahen 3D-AR-Spielen oder
                    spezifischen Low-Level-Bluetooth-Treibern – ist eine separate native Swift/Kotlin-Programmierung
                    nach wie vor zwingend erforderlich. Für über 95 % aller Business- und Verbraucher-Apps
                    ist React Native heute die wirtschaftlich und technisch überlegene Wahl.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Historically, businesses faced a dilemma: develop first for Apple iOS or Google Android?
                    Serving both platforms meant hiring two segregated engineering teams — Swift for iOS and
                    Kotlin for Android. This nearly doubled development costs, as every screen and backend
                    integration had to be coded, debugged, and maintained twice.
                  </p>
                  <p>
                    With modern cross-platform frameworks like <strong>React Native</strong> (created by Meta
                    and powering apps at Microsoft, Shopify, and Discord), the economics have changed fundamentally.
                    Rather than building two siloed codebases, our engineering team crafts a single, robust TypeScript
                    architecture that compiles directly into native OS primitives. The result: buttery 60 FPS
                    responsiveness, native gestures, and camera/GPS integration at up to 40% lower cost.
                  </p>
                  <p>
                    Except for specialized low-level hardware or intense 3D gaming, React Native delivers the
                    fastest time-to-market, cleanest maintainability, and optimal ROI for over 95% of commercial applications.
                  </p>
                </>
              )}
            </div>
          </section>

          {/* Sektion 4: Kosten pro Funktion */}
          <section className="scroll-mt-28" id="kosten-pro-funktion">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Code2 className="w-3.5 h-3.5" />
              <span>{t("FEATURE-TREIBER", "FEATURE COMPLEXITY")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-6">
              {t(
                "Kosten pro Funktion: Was treibt den Preis in die Höhe?",
                "Cost Drivers: Features & Complexity"
              )}
            </h2>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {lang === "de" ? (
                <p>
                  Der größte Hebel für die <strong>Kosten App Entwicklung</strong> ist nicht
                  die reine Anzahl der Bildschirme, sondern die technische Tiefe der einzelnen Features. Eine
                  statische Informationsanzeige ist in wenigen Stunden umgesetzt; eine bidirektionale
                  Echtzeit-Kommunikation mit Offline-Pufferung und Zahlungsabwicklung erfordert hingegen
                  fundierte Softwarearchitektur. Die tatsächlichen <strong>Kosten für App Entwicklung</strong>{" "}
                  hängen somit primär davon ab, welche Module nativ angebunden und abgesichert werden müssen:
                </p>
              ) : (
                <p>
                  The primary driver of <strong>app development pricing</strong> is rarely screen count alone,
                  but rather the architectural depth of individual feature sets. Displaying static text is quick,
                  while real-time bi-directional synchronization, offline queuing, and certified payments require
                  senior full-stack engineering:
                </p>
              )}
            </div>

            {/* 6 Feature Boxes - Styled like core services cards in services/web-development */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:border-orange-300 hover:shadow-md transition-all duration-300">
                <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-1">
                  {t(
                    "Authentifizierung & Nutzerverwaltung",
                    "Authentication & User Management"
                  )}
                </h3>
                <div className="text-xs sm:text-sm text-orange-600 font-bold mb-3">
                  {t("Aufwand: ca. 1 bis 2 Wochen", "Timeline: approx. 1 to 2 weeks")}
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {t(
                    "Sicheres Login via E-Mail/Passwort, 2-Faktor-Authentifizierung (2FA), Social Login (Sign in with Apple, Google Sign-In) und rollenbasierte Zugriffsrechte.",
                    "Secure login with email/password, two-factor authentication (2FA), Social Login (Apple, Google), and granular role-based permissions."
                  )}
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:border-orange-300 hover:shadow-md transition-all duration-300">
                <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-1">
                  {t("Push-Notifications & Messaging", "Push Notifications & Messaging")}
                </h3>
                <div className="text-xs sm:text-sm text-orange-600 font-bold mb-3">
                  {t("Aufwand: ca. 1 Woche", "Timeline: approx. 1 week")}
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {t(
                    "Integration von Apple APNs und Google FCM, Segmentierung von Empfängergruppen, automatische Erinnerungen und In-App-Nachrichtencenter.",
                    "Direct integration with Apple APNs and Google FCM, targeted audience segmentation, transactional alerts, and in-app message feeds."
                  )}
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:border-orange-300 hover:shadow-md transition-all duration-300">
                <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-1">
                  {t(
                    "Zahlungsabwicklung & In-App-Purchases",
                    "Payment Processing & In-App Purchases"
                  )}
                </h3>
                <div className="text-xs sm:text-sm text-orange-600 font-bold mb-3">
                  {t("Aufwand: ca. 2 bis 3 Wochen", "Timeline: approx. 2 to 3 weeks")}
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {t(
                    "Anbindung von Stripe, PayPal oder Apple/Google In-App-Abonnements unter Beachtung der strengen Richtlinien für digitale Güter und Mehrwertsteuer-Compliance.",
                    "Integration of Stripe, PayPal, or Apple/Google subscriptions under strict digital goods guidelines and automated tax compliance."
                  )}
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:border-orange-300 hover:shadow-md transition-all duration-300">
                <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-1">
                  {t(
                    "Echtzeit-Chat & WebSocket-Synchronisation",
                    "Real-Time Chat & WebSockets"
                  )}
                </h3>
                <div className="text-xs sm:text-sm text-orange-600 font-bold mb-3">
                  {t("Aufwand: ca. 2 bis 3 Wochen", "Timeline: approx. 2 to 3 weeks")}
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {t(
                    "Live-Nachrichtenübertragung, Online-Statusanzeige, Lesebestätigungen, Bildübertragung und DSGVO-konforme Verschlüsselung ruhender und übertragener Daten.",
                    "Live messaging, online presence indicators, read receipts, media transfer, and end-to-end GDPR-compliant encryption."
                  )}
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:border-orange-300 hover:shadow-md transition-all duration-300">
                <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-1">
                  {t(
                    "Webbasiertes Admin-Panel & Backend-APIs",
                    "Web Admin Dashboard & APIs"
                  )}
                </h3>
                <div className="text-xs sm:text-sm text-orange-600 font-bold mb-3">
                  {t("Aufwand: ca. 2 bis 4 Wochen", "Timeline: approx. 2 to 4 weeks")}
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {t(
                    "Zentrales Dashboard zur Verwaltung von Kunden, Bestellungen, Texten und Benachrichtigungen inklusive Exportfunktionen und REST/GraphQL-Schnittstellen.",
                    "Central dashboard for managing customers, orders, content, and alerts with CSV exports and high-speed REST/GraphQL APIs."
                  )}
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:border-orange-300 hover:shadow-md transition-all duration-300">
                <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-1">
                  {t(
                    "Offline-Modus & Lokale SQLite-Datenbank",
                    "Offline Mode & SQLite Database"
                  )}
                </h3>
                <div className="text-xs sm:text-sm text-orange-600 font-bold mb-3">
                  {t("Aufwand: ca. 1,5 bis 2,5 Wochen", "Timeline: approx. 1.5 to 2.5 weeks")}
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {t(
                    "Reibungslose Nutzung auch in Funklöchern oder Lagerhallen mit automatischer Konfliktlösung bei Wiederherstellung der Internetverbindung.",
                    "Seamless operation in warehouses or transit zones with local caching and automated cloud sync upon network restoration."
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Sektion 5: Laufende Kosten und Wartung */}
          <section className="scroll-mt-28" id="laufende-kosten-wartung">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Settings className="w-3.5 h-3.5" />
              <span>{t("BETRIEBSKOSTEN", "OPERATIONAL EXPENSES")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-6">
              {t(
                "Laufende Kosten und Wartung nach dem Launch",
                "Operating Costs & Maintenance Post-Launch"
              )}
            </h2>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-5">
              {lang === "de" ? (
                <>
                  <p>
                    Mit dem erfolgreichen Release im Apple App Store und Google Play Store ist die
                    Investition nicht abgeschlossen. Wer eine <strong>App programmieren lassen</strong>{" "}
                    möchte, sollte von Beginn an ein realistisches Budget für den laufenden Betrieb
                    einplanen. Mobilbetriebssysteme entwickeln sich rasant weiter: Jedes Jahr im Herbst
                    erscheinen neue Hauptversionen von iOS und Android, die neue Sicherheitsrichtlinien,
                    geänderte Berechtigungsmodelle und veränderte Bildschirmformate mit sich bringen.
                  </p>
                  <p>
                    Die laufenden Kosten gliedern sich in drei wesentliche Posten:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg text-slate-700">
                    <li>
                      <strong>App Store Gebühren:</strong> Apple erhebt für das Developer Program eine
                      Jahresgebühr von <strong>99 USD</strong>. Der Google Play Account erfordert eine
                      einmalige Registrierungsgebühr von <strong>25 USD</strong>.
                    </li>
                    <li>
                      <strong>Cloud-Hosting & Datenbank-Server:</strong> Je nach Nutzeranzahl und
                      Datenvolumen (z. B. auf AWS, Google Cloud oder Supabase) fallen monatliche Kosten
                      von <em>{APP_COST_CONFIG.maintenanceCosts.hostingEstimateDe}</em> an.
                    </li>
                    <li>
                      <strong>Technische Wartung & Support (SLA):</strong> Als verlässliche Faustformel
                      in der Softwarebranche gelten jährlich{" "}
                      <strong>{APP_COST_CONFIG.maintenanceCosts.yearlyRateDe}</strong>. Dieser Posten stellt
                      sicher, dass Bibliotheken aktuell bleiben, Sicherheitslücken sofort geschlossen werden
                      und die App auf neuen Endgeräten reibungslos performt.
                    </li>
                  </ul>
                  <p>
                    Wird die Wartung vernachlässigt, droht die Entfernung der App aus den App Stores
                    durch Apples und Googles automatisierte Qualitätsprüfungen. Nexa Solutions bietet
                    strukturierte Service-Level-Agreements (SLA), die Ausfallsicherheit und kontinuierliche
                    Aktualisierungen garantieren.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Publishing successfully to the Apple App Store and Google Play Store is just the beginning.
                    Operating a live mobile product requires an ongoing maintenance budget. Both Apple and Google
                    ship annual major OS revisions each autumn, introducing revised security policies, altered
                    permissions, and new screen resolutions.
                  </p>
                  <p>
                    Ongoing operational costs encompass three core components:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg text-slate-700">
                    <li>
                      <strong>Developer Store Accounts:</strong> Apple Developer Program costs <strong>$99/year</strong>.
                      Google Play Console requires a <strong>$25 one-time registration</strong>.
                    </li>
                    <li>
                      <strong>Cloud Hosting & Databases:</strong> Dependent on active traffic (AWS, Supabase, Google Cloud),
                      budget approximately <em>{APP_COST_CONFIG.maintenanceCosts.hostingEstimateEn}</em>.
                    </li>
                    <li>
                      <strong>Technical Maintenance & SLA:</strong> The standard industry benchmark is{" "}
                      <strong>{APP_COST_CONFIG.maintenanceCosts.yearlyRateEn}</strong>. This ensures third-party
                      SDKs remain compliant, patches vulnerabilities, and maintains compatibility with new handsets.
                    </li>
                  </ul>
                  <p>
                    Nexa Solutions provides structured Service Level Agreements (SLAs) ensuring uptime,
                    proactive monitoring, and seamless continuous updates.
                  </p>
                </>
              )}
            </div>
          </section>

          {/* Sektion 6: Festpreis oder Stundensatz */}
          <section className="scroll-mt-28" id="festpreis-oder-stundensatz">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Coins className="w-3.5 h-3.5" />
              <span>{t("ABRECHNUNGSMODELLE", "ENGAGEMENT MODELS")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-6">
              {t(
                "Festpreis oder Stundensatz: Was ist wirtschaftlicher?",
                "Fixed Price vs. Hourly Sprints: Which Is Better?"
              )}
            </h2>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-5">
              {lang === "de" ? (
                <>
                  <p>
                    Bei der Beauftragung einer Softwareagentur treffen Auftraggeber meist auf zwei Modelle:
                    das Festpreismodell (Fixed Price) oder die Abrechnung nach Aufwand auf Basis von
                    Stundensätzen (Time & Material). Welcher Ansatz die wirtschaftlichere Wahl darstellt,
                    hängt primär von der Schärfe des Anforderungsprofils ab.
                  </p>
                  <p>
                    <strong>Das Festpreismodell</strong> eignet sich perfekt für klar umrissene Projekte wie
                    ein Minimum Viable Product (MVP) oder definierte Relaunches. Auf Basis eines detaillierten
                    Figma-Klick-Dummys und eines verbindlichen Pflichtenhefts vereinbaren wir ein Pauschalhonorar.
                    Das Risiko von unerwarteten Mehraufwänden liegt vollständig bei uns als Agentur. Für
                    Geschäftsführer und Startup-Gründer bietet dieser Weg absolute finanzielle Planungssicherheit.
                  </p>
                  <p>
                    <strong>Das agile Stundensatzmodell</strong> empfiehlt sich hingegen für komplexe,
                    sich schnell verändernde Plattformen. Hier rechnen wir in 2-Wochen-Sprints zu einem
                    transparenten Agenturstundensatz von{" "}
                    <em>{APP_COST_CONFIG.summaryBox.ranges[3].range}</em> ab. Vor jedem Sprint wird der
                    Backlog priorisiert und geschätzt. Sie behalten zu jedem Zeitpunkt 100 % Budgetkontrolle
                    und können flexibel auf Kundenfeedback oder Marktveränderungen reagieren.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    When commissioning a software agency, clients typically choose between two engagement models:
                    a guaranteed Fixed Price or Time & Materials sprint billing. Choosing the optimal model depends
                    on scope definition.
                  </p>
                  <p>
                    <strong>The Fixed Price Model</strong> is ideal for well-defined deliverables like an MVP or
                    structured business application. Based on click-through Figma prototypes and explicit specifications,
                    we guarantee a turnkey fee. The risk of scope overruns is borne entirely by our agency, offering
                    founders total financial certainty.
                  </p>
                  <p>
                    <strong>Agile Sprint Billing</strong> is ideal for evolving digital platforms and dynamic product
                    features. We deliver in iterative 2-week sprints at our transparent senior engineering rate of{" "}
                    <em>{APP_COST_CONFIG.summaryBox.ranges[3].range}</em>. Backlogs are estimated and agreed upon prior
                    to each cycle, giving you absolute budget authority.
                  </p>
                </>
              )}
            </div>
          </section>

          {/* Sektion 7: Wie lange dauert die Entwicklung? */}
          <section className="scroll-mt-28" id="wie-lange-dauert-die-entwicklung">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Clock className="w-3.5 h-3.5" />
              <span>{t("ENTWICKLUNGSDAUER", "DELIVERY TIMELINE")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-6">
              {t(
                "Wie lange dauert die Entwicklung einer App?",
                "Development Timeline & Phases"
              )}
            </h2>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                {t(
                  "Eine professionelle App Entwicklung ist ein iterativer Prozess aus Design, Programmierung und Qualitätskontrolle. Typischerweise durchläuft jedes Projekt bei Nexa Solutions vier strukturierte Phasen:",
                  "Professional app development is an iterative discipline of discovery, Figma design, engineering, and quality control. At Nexa Solutions, projects navigate four structured phases:"
                )}
              </p>
            </div>

            {/* 4 Phases - Styled like processSteps in services/web-development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-orange-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-orange-500/20">
                      01
                    </span>
                    <span className="text-xs font-bold text-orange-600 bg-orange-100/70 px-2.5 py-1 rounded-full">
                      {t("Woche 1–3", "Weeks 1–3")}
                    </span>
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2.5">
                    {t(
                      "Konzeption & Figma Prototyping",
                      "Discovery & Figma Prototyping"
                    )}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t(
                      "User Journeys, Klick-Dummy in Figma, Validierung der Benutzerführung und Architekturdefinition. Sie können die App bereits auf dem Smartphone testen, bevor eine einzige Zeile Code geschrieben wird.",
                      "User journeys, interactive Figma prototypes, UX validation, and cloud schema definition. Test and interact with your app before writing a single line of production code."
                    )}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-orange-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-orange-500/20">
                      02
                    </span>
                    <span className="text-xs font-bold text-orange-600 bg-orange-100/70 px-2.5 py-1 rounded-full">
                      {t("Woche 3–8 bzw. 16", "Weeks 3–8 or 16")}
                    </span>
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2.5">
                    {t(
                      "Sprint-Entwicklung in 2-Wochen-Zyklen",
                      "Agile Engineering Sprints"
                    )}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t(
                      "Frontend-Entwicklung in React Native, Backend-APIs, Datenbank-Modellierung und kontinuierliche Test-Builds über Apple TestFlight und Google Internal Sharing.",
                      "React Native mobile frontends, cloud APIs, database pipelines, and continuous beta builds delivered directly to your device via Apple TestFlight."
                    )}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-orange-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-orange-500/20">
                      03
                    </span>
                    <span className="text-xs font-bold text-orange-600 bg-orange-100/70 px-2.5 py-1 rounded-full">
                      {t("1–2 Wochen", "1–2 Weeks")}
                    </span>
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2.5">
                    {t(
                      "QA Testing, Security Audit & DSGVO",
                      "QA Testing & Security Audit"
                    )}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t(
                      "Automatisierte E2E-Tests, Penetration-Checks, Überprüfung der Verschlüsselung und Einhaltung der europäischen Datenschutzgrundverordnung.",
                      "Automated end-to-end testing suites, penetration testing, database encryption audits, and strict European GDPR compliance verification."
                    )}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-orange-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-orange-500/20">
                      04
                    </span>
                    <span className="text-xs font-bold text-orange-600 bg-orange-100/70 px-2.5 py-1 rounded-full">
                      {t("1–2 Wochen", "1–2 Weeks")}
                    </span>
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2.5">
                    {t(
                      "App Store Submission & Freigabe",
                      "App Store Submission & Launch"
                    )}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t(
                      "Erstellung der Store-Screenshots, Metadaten-Optimierung (ASO), Begleitung des App-Review-Prozesses durch Apple und Google bis zum erfolgreichen Livegang.",
                      "App Store screenshot creative generation, App Store Optimization (ASO), and dedicated review management until full Apple and Google publication."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sektion 8: App für Restaurant/Gastronomie: Kosten */}
          <section className="scroll-mt-28" id="restaurant-gastronomie-app-kosten">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>{t("GASTRONOMIE-LÖSUNGEN", "HOSPITALITY SOLUTIONS")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-6">
              {t(
                "App für Restaurant & Gastronomie: Kosten und Funktionen",
                "Restaurant & Hospitality App Costs"
              )}
            </h2>
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-5 mb-8">
              {lang === "de" ? (
                <>
                  <p>
                    Gastronomen, Barbetreiber und Systemgastronomen stehen vor besonderen Herausforderungen:
                    Steigende Personalkosten und Fachkräftemangel verlangen nach effizienteren Abläufen
                    im Service. Eine maßgeschneiderte Gastronomie-Lösung – von der{" "}
                    <strong>digitalen QR-Code Speisekarte</strong> über die kontaktlose Tischbestellung
                    bis hin zum eigenen Lieferdienst – amortisiert sich meist innerhalb weniger Monate.
                  </p>
                  <p>
                    Die Einstiegskosten für ein voll funktionsfähiges QR-Code Bestellsystem beginnen bei
                    Nexa Solutions bereits ab{" "}
                    <em>{APP_COST_CONFIG.restaurantCosts.startingPriceDe}</em>. Gäste scannen den Tisch-Code
                    mit ihrer Smartphone-Kamera und können ohne störenden App-Store-Download direkt im
                    Browser Speisen wählen, Sonderwünsche angeben und per Apple Pay, Google Pay oder PayPal
                    bezahlen.
                  </p>
                  <p>
                    Für expandierende Franchise-Marken entwickeln wir ergänzend native Kundenbindungs-Apps
                    mit Treuepunkten, Push-Aktionen und Vorbestellfunktionen. Durch die direkte Integration
                    mit Kassensystemen (TSE-konform) entlasten Sie Ihr Servicepersonal spürbar und
                    steigern den durchschnittlichen Bon-Wert um 15 bis 25 %.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Hospitality brands, restaurant owners, and franchise operators face distinct challenges:
                    labor shortages and rising costs demand frictionless table operations. A custom hospitality
                    solution — from <strong>digital QR-code menu ordering</strong> to contactless payments —
                    typically achieves full ROI within months.
                  </p>
                  <p>
                    Starting pricing for a turn-key QR-ordering web application begins at Nexa Solutions from{" "}
                    <em>{APP_COST_CONFIG.restaurantCosts.startingPriceEn}</em>. Guests scan table codes without
                    download barriers to order meals, specify modifications, and pay instantly via Apple Pay or PayPal.
                  </p>
                  <p>
                    For scaling franchise groups, we develop branded native loyalty apps featuring points and automated
                    re-engagement offers. With direct POS integration and certified German fiscal TSE compliance,
                    table turnover accelerates while average spend increases by 15% to 25%.
                  </p>
                </>
              )}
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm">
              <h3 className="text-[20px] sm:text-[24px] font-bold text-slate-900 mb-4">
                {t(
                  "Wichtigste Features moderner Gastronomie-Software:",
                  "Key Features of Modern Restaurant Software:"
                )}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(lang === "de"
                  ? APP_COST_CONFIG.restaurantCosts.featuresDe
                  : APP_COST_CONFIG.restaurantCosts.featuresEn
                ).map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-slate-700"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href="/loesungen/restaurant-software-qr-menue"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span>
                    {t(
                      "Mehr über unsere Restaurant QR-Code Software erfahren",
                      "Learn more about our Restaurant QR Code Software"
                    )}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Accordion Section - Exactly styled like services/web-development */}
          <section className="scroll-mt-28" id="faq">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
                <span>{t("HÄUFIG GESTELLTE FRAGEN", "FAQ")}</span>
              </div>
              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
                {t(
                  "Häufig gestellte Fragen zur App-Entwicklung",
                  "Frequently Asked Questions (FAQ)"
                )}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
                {t(
                  "Transparente Antworten auf die wichtigsten Fragen rund um die Kostenkalkulation und Projektabwicklung.",
                  "Transparent answers to the most frequent questions regarding app budgeting and project milestones."
                )}
              </p>
            </div>

            <div className="space-y-4">
              {APP_COST_CONFIG.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                const question = lang === "de" ? faq.questionDe : faq.questionEn;
                const answer = lang === "de" ? faq.answerDe : faq.answerEn;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer gap-4"
                    >
                      <span className="text-[16px] sm:text-[18px] font-bold text-slate-900">
                        {question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-orange-500" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-[14px] sm:text-[16px] text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        <p>{answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* "Das könnte Sie auch interessieren" Block - Styled like Core Capabilities */}
          <section className="pt-10 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-[26px] sm:text-[34px] font-[900] text-[#0F172A] tracking-tight mb-3">
                {t(
                  "Das könnte Sie auch interessieren",
                  "You Might Also Be Interested In"
                )}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {t(
                  "Ergänzende digitale Lösungen für Unternehmen und Gründer.",
                  "Complementary engineering services for modern companies."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/mobile-app-development"
                className="group rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 text-orange-600 inline-flex items-center justify-center mb-6 shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                    <Smartphone className="w-6 h-6 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {t("Mobile App Entwicklung", "Mobile App Development")}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {t(
                      "Erfahren Sie mehr über unsere Entwicklungsdienstleistungen für iOS & Android aus Stuttgart.",
                      "Discover our high-performance iOS and Android development services based in Stuttgart."
                    )}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  <span>{t("Leistungen entdecken", "Explore Services")}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/loesungen/restaurant-software-qr-menue"
                className="group rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 text-orange-600 inline-flex items-center justify-center mb-6 shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                    <UtensilsCrossed className="w-6 h-6 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {t("Restaurant QR-Code Software", "Restaurant QR-Code Software")}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {t(
                      "Digitale Speisekarten, kontaktlose Tischbestellung und TSE-Kassenanbindung für die Gastronomie.",
                      "Digital menus, contactless table ordering, and POS compliance for modern dining."
                    )}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  <span>{t("Lösung ansehen", "View Solution")}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/loesungen/ki-chatbot-fuer-unternehmen"
                className="group rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 text-orange-600 inline-flex items-center justify-center mb-6 shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                    <Cpu className="w-6 h-6 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {t("KI Chatbot für Unternehmen", "AI Chatbot for Enterprise")}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {t(
                      "Integrieren Sie smarte Kundenservice-Bots und KI-Assistenten DSGVO-konform in Ihre App.",
                      "Integrate intelligent customer support agents and AI automation GDPR-compliantly."
                    )}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  <span>{t("KI-Features prüfen", "Review AI Features")}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </section>

          {/* Große Bottom-CTA Box - Light & Fresh (No black background, exact typography of services/web-development CTA) */}
          <section className="rounded-3xl bg-gradient-to-br from-orange-50/70 via-white to-amber-50/50 border border-slate-200/90 p-8 sm:p-14 shadow-sm relative overflow-hidden text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                {t(
                  "BEREIT FÜR DEN NÄCHSTEN SCHRITT?",
                  "READY TO ELEVATE YOUR APP PROJECT?"
                )}
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-5 text-center">
              {t(
                "Planen Sie eine App? Lassen Sie uns Ihr Vorhaben kalkulieren.",
                "Planning an App? Let Us Calculate Your Project Scope."
              )}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal text-center">
              {t(
                "Egal ob erstes MVP oder umfassender Unternehmens-Relaunch: Wir analysieren Ihre Anforderungen und erstellen Ihnen ein transparentes, verbindliches Festpreis-Angebot mit verlässlicher Timeline.",
                "Whether a lean MVP or comprehensive enterprise platform: we analyze your technical specifications and provide a transparent, guaranteed fixed-price quote."
              )}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>
                  {t(
                    "Jetzt unverbindlich anfragen",
                    "Request Free Consultation"
                  )}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/918077313241"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat mit Nexa Solutions"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-sm sm:text-base font-bold transition-all duration-200 border border-slate-200 shadow-2xs cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Guarantee pill */}
            <div className="mt-8 flex items-center justify-center gap-4 text-xs sm:text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {t("100% unverbindlich & kostenlos", "100% Free & No-Obligation")}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-500" />
                {t("Antwort in unter 24 Std.", "Response Within 24h")}
              </span>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
