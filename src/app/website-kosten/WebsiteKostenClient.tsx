"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function WebsiteKostenClient() {
  const { lang, t } = useLanguage();

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
                {t("Website Kosten", "Website Costs")}
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{t("Transparenz & Planungssicherheit", "Transparency & Budget Certainty")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-[1.12] mb-6">
              {t(
                "Was kostet eine professionelle Website in Deutschland?",
                "How Much Does a Professional Website Cost?"
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              {t(
                "Die Preisspanne für Websites reicht im Internet von wenigen hundert Euro für Baukasten-Vorlagen bis hin zu sechsstelligen Budgets für maßgeschneiderte Enterprise-Plattformen. In diesem Leitfaden erfahren Sie ehrlich und transparent, aus welchen Faktoren sich die Entwicklungskosten zusammensetzen, wo typische Kostenfallen lauern und wie ein verlässliches Festpreisangebot entsteht.",
                "Website development costs range widely from template site builders to six-figure enterprise custom platforms. In this guide, we provide an honest, transparent breakdown of core cost factors, typical budget traps, and fixed-price calculations."
              )}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t("Kostenloses Angebot anfordern", "Request Free Proposal")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/web-development"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[5px] bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-semibold text-sm transition-all shadow-xs"
              >
                <span>{t("Zu unseren Web-Services", "Explore Web Services")}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section 1: Die wichtigsten Kostenfaktoren */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl space-y-12">
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t("Die 6 zentralen Kostenfaktoren einer Website", "The 6 Core Website Cost Drivers")}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  {t(
                    "Eine Website ist längst keine digitale Visitenkarte mehr, sondern der primäre Vertriebs- und Repräsentationskanal Ihres Unternehmens. Die Kosten hängen maßgeblich vom gewünschten Grad an Individualisierung und technischer Leistungsfähigkeit ab.",
                    "A modern website is no longer just a digital brochure; it is the primary revenue and branding channel for your enterprise. Costs correlate directly with the degree of customization, integrations, and architectural performance required."
                  )}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("1. Umfang & Seitenstruktur", "1. Scope & Site Architecture")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Ein fokussierter Onepager erfordert naturgemäß weniger Konzeptions- und Programmieraufwand als eine mehrsprachige Corporate Website mit 30 Unterseiten, Leistungsbeschreibungen, Blog und Case Studies.",
                      "A streamlined one-pager naturally requires less discovery and engineering effort than a multilingual corporate platform featuring 30+ service pages, resources, and case studies."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("2. Individuelles UI/UX-Design", "2. Bespoke UI/UX Design")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Fertige Templates sind günstig, sehen aber austauschbar aus und bremsen die Ladezeit aus. Maßgeschneiderte Figma-Designs spiegeln Ihre Corporate Identity 1:1 wider und sind auf maximale Conversion optimiert.",
                      "Off-the-shelf templates appear generic and carry bloated code. Tailored Figma designs reflect your corporate identity uniquely and are engineered specifically for high conversion."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("3. Technologie-Stack", "3. Modern Technology Stack")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Moderne Frameworks wie Next.js und React bieten überlegene Ladezeiten, perfekte Core Web Vitals und höchste Sicherheit vor Hackern – im Gegensatz zu wartungsintensiven WordPress-Installationen mit Dutzenden Plugins.",
                      "Modern frameworks like Next.js and React deliver superior loading speeds, pristine Core Web Vitals, and robust security—unlike legacy WordPress setups bloated with dozens of fragile plugins."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("4. Schnittstellen & Funktionen", "4. Custom Features & Integrations")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Spezifische Erweiterungen wie ein Terminbuchungssystem, ein Kundenportal oder Zahlungsschnittstellen mit Stripe erfordern Backend-Architektur.",
                      "Dedicated custom features like appointment scheduling, client portals, and payment integrations with Stripe require backend engineering and API design."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("5. DSGVO & Barrierefreiheit", "5. GDPR & Accessibility Standards")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Rechtssichere Umsetzung ohne unautorisierte Tracking-Skripte, lokale Schriftarten, Cookie-Consent und Einhaltung des Barrierefreiheitsstärkungsgesetzes (BFSG ab Mitte 2025).",
                      "Full European privacy compliance without unauthorized tracking, self-hosted typography, compliant consent managers, and BFSG / WCAG accessibility readiness."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("6. Hosting & laufende Pflege", "6. Sovereign Hosting & Maintenance")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Hosting auf ISO-27001-zertifizierten deutschen Servern (z. B. Frankfurt am Main), SSL-Zertifikate, tägliche Backups und kontinuierlicher technischer Support nach dem Launch.",
                      "Hosting on ISO 27001-certified European infrastructure in Frankfurt, automated SSL, daily encrypted backups, and proactive technical maintenance post-launch."
                    )}
                  </p>
                </div>
              </div>
            </article>

            {/* Preisspannen-Kategorien (TODO Placeholders for Owner) */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t("Typische Website-Kategorien im Überblick", "Typical Website Categories & Pricing Overview")}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {t(
                  "Um Ihnen eine Orientierung zu bieten, unterscheiden wir drei typische Projektgrößen. Alle Projekte werden bei Nexa Solutions transparent auf Festpreisbasis kalkuliert.",
                  "To provide clear benchmarks, we categorize projects into three typical tiers. All Nexa Solutions projects are calculated transparently on a fixed-price milestone basis."
                )}
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {t("Kompakte Business Website (Onepager / bis 5 Seiten)", "Compact Business Website (Onepager / up to 5 pages)")}
                    </h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80">
                      {t("TODO: Preisspannen vom Inhaber", "TODO: Price ranges by owner")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {t(
                      "Ideal für lokale Dienstleister, Gründer und Berater, die einen professionellen, schnellen Webauftritt mit Kontaktformular und Top-Mobiloptimierung benötigen.",
                      "Ideal for local service providers, startups, and consultants requiring a professional, high-speed web presence with lead intake and mobile optimization."
                    )}
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• {t("Individuelles Responsive Design in Figma", "Bespoke Responsive Design in Figma")}</li>
                    <li>• {t("Next.js Performance & perfekte Core Web Vitals", "Next.js Performance & pristine Core Web Vitals")}</li>
                    <li>• {t("DSGVO-konforme Basiseinrichtung & lokales Font-Hosting", "GDPR compliance & self-hosted local typography")}</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border-2 border-orange-300 bg-orange-50/20">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {t("Umfassende Corporate Website (10 bis 25 Seiten)", "Comprehensive Corporate Website (10 to 25 pages)")}
                    </h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-md border border-orange-300">
                      {t("TODO: Preisspannen vom Inhaber", "TODO: Price ranges by owner")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {t(
                      "Der Standard für etablierte B2B-Unternehmen, Handwerksbetriebe und Agenturen mit mehreren Leistungsbereichen, Karriereportal, Fallstudien und Lead-Generierung.",
                      "The standard for established B2B firms and agencies featuring multi-service architectures, careers section, case studies, and structured lead pipelines."
                    )}
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• {t("Detaillierte Keyword- und Informationsarchitektur", "Strategic information and SEO keyword architecture")}</li>
                    <li>• {t("Headless CMS zur eigenständigen Inhaltspflege", "Headless CMS for seamless content updates")}</li>
                    <li>• {t("Integration von Lead-Pipelines und n8n-Workflows", "Integration of automated lead routing & n8n workflows")}</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {t("Individuelle Web-Applikation / Kundenportal", "Custom Web Application / Client Portal")}
                    </h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80">
                      {t("TODO: Preisspannen vom Inhaber", "TODO: Price ranges by owner")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {t(
                      "Komplexe Softwarelösungen mit Benutzer-Authentifizierung, Kundenbereich, Datenbankanbindung und individueller Geschäftslogik.",
                      "Complex web platforms featuring user authentication, protected client portals, database storage, and custom business logic."
                    )}
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• {t("Eigene Datenbankarchitektur (PostgreSQL / Supabase)", "Dedicated relational database architecture (PostgreSQL / Supabase)")}</li>
                    <li>• {t("Rollen- und Rechtemanagement", "Granular role and permission management")}</li>
                    <li>• {t("Nahtlose ERP- und Zahlungsanbindung", "Seamless ERP and checkout gateways")}</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Projektphasen */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t("Der Ablauf Ihres Projekts bei Nexa Solutions", "Our Project Delivery Process")}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  {t(
                    "Transparenz ist unser oberstes Gebot. Jedes Projekt durchläuft einen klar definierten Prozess, der sicherstellt, dass Zeitplan und Budget strikt eingehalten werden:",
                    "Transparency is our guiding principle. Every engagement follows structured milestones ensuring strict adherence to deadlines and budget limits:"
                  )}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {t("Erstgespräch & Scope-Definition", "Discovery & Scope Definition")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t(
                        "Wir analysieren Ihre Ziele, Zielgruppe und Wettbewerber. Auf dieser Basis erstellen wir ein verbindliches Festpreisangebot ohne versteckte Zusatzkosten.",
                        "We examine your objectives, target audience, and tech requirements to build a binding fixed-price proposal without hidden fees."
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {t("UI/UX-Design & Wireframing", "UI/UX Design & Prototyping")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t(
                        "Wir gestalten interaktive Klick-Dummies in Figma. Sie sehen und testen das Design auf Smartphone und Desktop, bevor die erste Zeile Code geschrieben wird.",
                        "We design interactive prototypes in Figma, allowing you to test the user journey on mobile and desktop before engineering starts."
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {t("Agile Entwicklung & Integration", "Agile Engineering & Integration")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t(
                        "Umsetzung mit modernstem Next.js, React und TypeScript. Sie erhalten regelmäßige Preview-Links zur kontinuierlichen Abstimmung.",
                        "Engineered with state-of-the-art Next.js, React, and TypeScript. You receive live preview builds for continuous review."
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {t("Quality Assurance & Go-Live", "Quality Assurance & Launch")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t(
                        "Ausführliche Tests aller Formulare, Mobilgeräte, Browser und Ladezeiten. Reibungsloser Domain-Umzug und Übergabe an Ihre Redakteure.",
                        "Rigorous testing of forms, responsive screens, cross-browser performance, and domain cutover with full handover documentation."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl text-center mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              {t(
                "Möchten Sie eine genaue Kosteneinschätzung für Ihr Projekt?",
                "Looking for an Exact Cost Estimate for Your Project?"
              )}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
              {t(
                "Teilen Sie uns kurz Ihre Anforderungen mit. Wir erstellen Ihnen innerhalb von 24 Stunden eine individuelle, transparente Kostenschätzung.",
                "Share your requirements with our team. We deliver a transparent feasibility breakdown and fixed-price quote within 24 hours."
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>{t("Jetzt unverbindlich anfragen", "Request Non-Binding Proposal")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/app-entwickeln-lassen-kosten"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                <span>{t("App Entwicklung Kosten", "App Development Costs")}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
