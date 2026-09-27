"use client";

import React, { useState } from "react";
import {
  Users,
  Receipt,
  Building2,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Database,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BusinessSystemsProps {
  onOpenContact: (systemName?: string) => void;
}

export default function BusinessSystems({ onOpenContact }: BusinessSystemsProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("hrms");

  const systems = [
    {
      id: "hrms",
      icon: Users,
      navTitle: t("HR & Personal", "HR & Workforce"),
      badge: t("Mitarbeiterverwaltung", "Workforce Management"),
      heading: t("Personalwesen, Zeiterfassung & Schichtplanung", "HR Directory, Time Tracking & Shift Planning"),
      description: t(
        "Ersetzen Sie unübersichtliche Tabellen durch eine zentrale Mitarbeiterplattform: Digitale Personalakten, Urlaubsanträge per Klick, biometrische Zeiterfassung und automatische Rollenberechtigungen.",
        "Replace fragmented spreadsheets with a unified employee platform: Digital personnel files, 1-click leave requests, biometric attendance logging, and granular role-based permissions."
      ),
      metrics: [
        { label: t("Verwaltungszeit", "Admin Time"), value: "-60%" },
        { label: t("Mitarbeiter-Zufriedenheit", "Staff Adoption"), value: "98%" },
        { label: t("DSGVO-Sicherheit", "Data Security"), value: "100%" },
      ],
      features: [
        t("Digitale Personalakte mit DSGVO-konformer Dokumentenspeicherung", "Digital employee records with GDPR-compliant document storage"),
        t("Urlaubs- und Abwesenheitsverwaltung mit Genehmigungs-Workflow", "Leave & absence approval workflows with automated notifications"),
        t("Echtzeit-Synchronisation mit Zeiterfassungsterminals und mobilen Apps", "Real-time sync with biometric attendance devices and mobile apps"),
        t("Vorbereitende Lohnbuchhaltung und Export für Steuerberater", "Pre-payroll export compatible with German tax and payroll standards"),
      ],
    },
    {
      id: "finance",
      icon: Receipt,
      navTitle: t("Finanzen & GoBD", "Invoicing & GoBD"),
      badge: t("Rechnungswesen", "Accounting & Billing"),
      heading: t("GoBD-konforme Rechnungen & Finanzübersicht", "GoBD-Compliant Invoicing & Cash Flow Control"),
      description: t(
        "Professionelle Rechnungsstellung, Ausgabenkontrolle und DATEV-Schnittstellen. Reduzieren Sie Zahlungsverzüge durch automatisierte Zahlungserinnerungen und Stripe-/SEPA-Integration.",
        "Professional invoicing, expense tracking, and DATEV exports. Reduce payment delays with automated reminder sequences and instant Stripe / SEPA payment links."
      ),
      metrics: [
        { label: t("Rechnungserstellung", "Invoice Generation"), value: "10 Sek." },
        { label: t("Zahlungseingang", "DSO Reduction"), value: "3x schneller" },
        { label: t("DATEV-kompatibel", "DATEV Ready"), value: "Ja / Yes" },
      ],
      features: [
        t("Rechtskonforme Rechnungs- und Angebotserstellung nach deutschen GoBD-Standards", "Legally compliant invoice and estimate generation matching GoBD rules"),
        t("Automatisierter Zahlungsabgleich mit Bankkonten und Zahlungsdienstleistern", "Automated bank feed reconciliation and payment status tracking"),
        t("DATEV- und Buchhaltungs-Export für Ihren Steuerberater auf Knopfdruck", "Instant 1-click DATEV and CSV exports for your tax consultant"),
        t("Wiederkehrende Abos, Dauerrechnungen und automatisches Mahnwesen", "Recurring subscription billing and automated multi-tier payment reminders"),
      ],
    },
    {
      id: "portal",
      icon: Building2,
      navTitle: t("B2B Kundenportal", "B2B Client Portal"),
      badge: t("Kunden- & Partnerbereich", "Client Experience"),
      heading: t("Sicheres Kundenportal mit Dokumentenaustausch", "Secure Client Portal & Project Collaboration"),
      description: t(
        "Bieten Sie Ihren Geschäftskunden einen professionellen Login-Bereich: Projektstatus in Echtzeit, Rechnungsarchiv, Dokumentenfreigaben und direkter Ticketsupport.",
        "Provide your business clients with a branded portal: Real-time project tracking, invoice archives, encrypted document exchanges, and integrated support ticketing."
      ),
      metrics: [
        { label: t("Rückfragen per E-Mail", "Support Inquiries"), value: "-45%" },
        { label: t("Kundenbindung", "Client Retention"), value: "+80%" },
        { label: t("Dokumentensicherheit", "Encryption"), value: "End-to-End" },
      ],
      features: [
        t("Individuelles Kunden-Dashboard im Corporate Design Ihres Unternehmens", "Custom branded client dashboard matching your exact corporate identity"),
        t("Verschlüsselter Upload & Freigabe sensibler Dokumente und Verträge", "Encrypted file sharing and contract signature workflows"),
        t("Projektfortschritt und Meilensteine transparent in Echtzeit einsehbar", "Real-time project milestone tracking and transparent sprint updates"),
        t("Integriertes Ticketsystem zur schnellen Bearbeitung von Kundenanfragen", "Built-in ticketing and query routing to expedite resolution times"),
      ],
    },
    {
      id: "ordering",
      icon: ShoppingBag,
      navTitle: t("0% Provision Shop", "0% Commission Shop"),
      badge: t("E-Commerce & Bestellsystem", "Order Fulfillment"),
      heading: t("Eigene Bestellplattform ohne Lieferdienst-Provisionen", "Custom Ordering Platform with Zero Commission"),
      description: t(
        "Verkaufen Sie direkt an Ihre Kunden ohne 15–30 % Abgaben an Drittanbieter-Plattformen. Perfekt für Gastronomie, Fachhandel, B2B-Großhandel oder regionale Lieferdienste.",
        "Sell directly to your customers without giving away 15–30% to third-party marketplaces. Perfect for gastronomy, regional retailers, and B2B wholesale distributors."
      ),
      metrics: [
        { label: t("Plattformgebühren", "Platform Fees"), value: "0%" },
        { label: t("Gewinnmarge", "Profit Margin"), value: "+25%" },
        { label: t("Kundenkontakte", "Customer Data"), value: "100% Ihnen" },
      ],
      features: [
        t("Direkte Zahlungsabwicklung über Stripe, PayPal, Apple Pay & Barzahlung", "Direct payments via Stripe, PayPal, Apple Pay, SEPA & Cash on delivery"),
        t("Echtzeit-Bestellannahme über Tablet, Bon-Drucker oder Küchen-Display", "Instant order alerts to kitchen displays, POS thermal receipt printers & tablets"),
        t("Lieferzonen, Mindestbestellwerte und automatische Zeitfenster-Vergabe", "Custom delivery radius, minimum order values, and delivery time-slots"),
        t("Volle Kontrolle über Kundendaten für gezieltes E-Mail- & SMS-Marketing", "Complete ownership of client emails and phone numbers for re-marketing"),
      ],
    },
  ];

  const currentSystem = systems.find((s) => s.id === activeTab) || systems[0];

  return (
    <section id="systems" className="py-20 md:py-24 bg-[#090D16] text-white relative overflow-hidden border-b border-white/5">
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("MAßGESCHNEIDERTE UNTERNEHMENSSYSTEME", "CUSTOM BUSINESS SYSTEMS")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight">
              {t("Ein einziges System,", "One Single System,")} <br />
              <span className="text-gradient-orange">
                {t("das Ihr Unternehmen komplett steuert", "Managing Your Entire Business")}
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
            {t(
              "Statt dutzender teurer SaaS-Abos und verstreuter Excel-Dateien: Wir entwickeln modulare, maßgeschneiderte Systeme, die genau zu Ihren internen Abläufen passen.",
              "Instead of dozens of expensive SaaS subscriptions and scattered Excel spreadsheets: We build modular, custom operating systems tailored precisely to your workflow."
            )}
          </p>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-10">
          {systems.map((s) => {
            const Icon = s.icon;
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white/10 border-orange-500/60 shadow-lg text-white"
                    : "bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? "bg-orange-500 text-white" : "bg-white/5 text-slate-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight">
                  {s.navTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active System Showcase Card */}
        <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-7 sm:p-10 lg:p-12 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Details & Features */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-bold text-orange-400 tracking-wider uppercase mb-2">
                {currentSystem.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                {currentSystem.heading}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {currentSystem.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3.5 mb-8 w-full">
                {currentSystem.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenContact(currentSystem.navTitle)}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-orange-500/25 cursor-pointer group"
              >
                <span>{t("Individuelles System anfragen", "Inquire About This System")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column: Visual Metrics & Tech Architecture Box */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Metrics Pill Grid */}
              <div className="grid grid-cols-3 gap-3">
                {currentSystem.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-center"
                  >
                    <div className="text-xl sm:text-2xl font-black text-orange-400">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-medium leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Architecture Guarantee Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold text-white uppercase tracking-wider">
                  <Database className="w-4 h-4 text-orange-400" />
                  <span>{t("Technologische Grundlage", "Engineering Foundation")}</span>
                </div>

                <div className="space-y-2 text-xs text-slate-400 leading-relaxed mb-4">
                  <p>• {t("Next.js & TypeScript Frontend für flüssige Bedienung", "Next.js & TypeScript UI for instantaneous response times")}</p>
                  <p>• {t("PostgreSQL Datenbank mit rollenbasierter Zugriffskontrolle", "PostgreSQL database with granular role-based security")}</p>
                  <p>• {t("Deutsches ISO-27001 Cloud Hosting mit täglichem Backup", "German ISO-27001 hosting with daily encrypted snapshots")}</p>
                  <p>• {t("REST / GraphQL APIs zur Anbindung bestehender Systeme", "REST & GraphQL APIs to interface with ERP & accounting")}</p>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-white/10 text-[11px] text-emerald-400 font-semibold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>{t("100% DSGVO & GoBD-konform implementiert", "100% GDPR & GoBD compliant architecture")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
