"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Users,
  Receipt,
  Building2,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Database,
  Lock,
  Sparkles,
  Server,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BusinessSystemsProps {
  onOpenContact: (systemName?: string) => void;
}

export default function BusinessSystems({ onOpenContact }: BusinessSystemsProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("hrms");
  const [targetTab, setTargetTab] = useState<string>("hrms");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleTabChange = (newTabId: string) => {
    if (newTabId === activeTab || isLoading) return;
    setTargetTab(newTabId);
    setIsLoading(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveTab(newTabId);
      setIsLoading(false);
    }, 1300);
  };

  const systems = [
    {
      id: "hrms",
      icon: Users,
      navTitle: t("HR & Personal", "HR & Workforce"),
      badge: t("Mitarbeiterverwaltung & HR", "Workforce Management"),
      heading: t(
        "Personalwesen, Zeiterfassung & Schichtplanung",
        "HR Directory, Time Tracking & Shift Planning"
      ),
      description: t(
        "Ersetzen Sie unübersichtliche Tabellen durch eine zentrale Mitarbeiterplattform: Digitale Personalakten, Urlaubsanträge per Klick, biometrische Zeiterfassung und automatische Rollenberechtigungen.",
        "Replace fragmented spreadsheets with a unified employee platform: Digital personnel files, 1-click leave requests, biometric attendance logging, and granular role-based permissions."
      ),
      metrics: [
        { label: t("Verwaltungszeit", "Admin Time"), value: "-60%" },
        { label: t("Mitarbeiter-Adoption", "Staff Adoption"), value: "98%" },
        { label: t("DSGVO-Sicherheit", "Data Security"), value: "100%" },
      ],
      features: [
        t(
          "Digitale Personalakte mit DSGVO-konformer Dokumentenspeicherung",
          "Digital employee records with GDPR-compliant document storage"
        ),
        t(
          "Urlaubs- und Abwesenheitsverwaltung mit automatisiertem Genehmigungs-Workflow",
          "Leave & absence approval workflows with automated notifications"
        ),
        t(
          "Echtzeit-Synchronisation mit Zeiterfassungsterminals und mobilen Apps",
          "Real-time sync with biometric attendance devices and mobile apps"
        ),
        t(
          "Vorbereitende Lohnbuchhaltung und DATEV-kompatibler Export",
          "Pre-payroll export compatible with German tax and payroll standards"
        ),
      ],
    },
    {
      id: "finance",
      icon: Receipt,
      navTitle: t("Finanzen & GoBD", "Invoicing & GoBD"),
      badge: t("Rechnungswesen & Controlling", "Accounting & Billing"),
      heading: t(
        "GoBD-konforme Rechnungen & Finanzübersicht",
        "GoBD-Compliant Invoicing & Cash Flow Control"
      ),
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
        t(
          "Rechtskonforme Rechnungs- und Angebotserstellung nach deutschen GoBD-Standards",
          "Legally compliant invoice and estimate generation matching GoBD rules"
        ),
        t(
          "Automatisierter Zahlungsabgleich mit Bankkonten und Zahlungsdienstleistern",
          "Automated bank feed reconciliation and payment status tracking"
        ),
        t(
          "DATEV- und Buchhaltungs-Export für Ihren Steuerberater auf Knopfdruck",
          "Instant 1-click DATEV and CSV exports for your tax consultant"
        ),
        t(
          "Wiederkehrende Abos, Dauerrechnungen und automatisches Mahnwesen",
          "Recurring subscription billing and automated multi-tier payment reminders"
        ),
      ],
    },
    {
      id: "portal",
      icon: Building2,
      navTitle: t("B2B Kundenportal", "B2B Client Portal"),
      badge: t("Kunden- & Partnerbereich", "Client Experience"),
      heading: t(
        "Sicheres Kundenportal mit Dokumentenaustausch",
        "Secure Client Portal & Project Collaboration"
      ),
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
        t(
          "Individuelles Kunden-Dashboard im Corporate Design Ihres Unternehmens",
          "Custom branded client dashboard matching your exact corporate identity"
        ),
        t(
          "Verschlüsselter Upload & Freigabe sensibler Dokumente und Verträge",
          "Encrypted file sharing and contract signature workflows"
        ),
        t(
          "Projektfortschritt und Meilensteine transparent in Echtzeit einsehbar",
          "Real-time project milestone tracking and transparent sprint updates"
        ),
        t(
          "Integriertes Ticketsystem zur schnellen Bearbeitung von Kundenanfragen",
          "Built-in ticketing and query routing to expedite resolution times"
        ),
      ],
    },
    {
      id: "ordering",
      icon: ShoppingBag,
      navTitle: t("0% Provision Shop", "0% Commission Shop"),
      badge: t("E-Commerce & Bestellsystem", "Order Fulfillment"),
      heading: t(
        "Eigene Bestellplattform ohne Lieferdienst-Provisionen",
        "Custom Ordering Platform with Zero Commission"
      ),
      description: t(
        "Verkaufen Sie direkt an Ihre Kunden ohne 15–30 % Abgaben an Drittanbieter-Plattformen. Perfekt für Gastronomie, Fachhandel, B2B-Großhandel oder regionale Lieferdienste.",
        "Sell directly to your customers without giving away 15–30% to third-party marketplaces. Perfect for gastronomy, regional retailers, and B2B wholesale distributors."
      ),
      metrics: [
        { label: t("Plattformgebühren", "Platform Fees"), value: "0%" },
        { label: t("Gewinnmarge", "Profit Margin"), value: "+25%" },
        { label: t("Kundendaten", "Customer Data"), value: "100% Ihnen" },
      ],
      features: [
        t(
          "Direkte Zahlungsabwicklung über Stripe, PayPal, Apple Pay & Barzahlung",
          "Direct payments via Stripe, PayPal, Apple Pay, SEPA & Cash on delivery"
        ),
        t(
          "Echtzeit-Bestellannahme über Tablet, Bon-Drucker oder Küchen-Display",
          "Instant order alerts to kitchen displays, POS thermal receipt printers & tablets"
        ),
        t(
          "Lieferzonen, Mindestbestellwerte und automatische Zeitfenster-Vergabe",
          "Custom delivery radius, minimum order values, and delivery time-slots"
        ),
        t(
          "Volle Kontrolle über Kundendaten für gezieltes E-Mail- & SMS-Marketing",
          "Complete ownership of client emails and phone numbers for re-marketing"
        ),
      ],
    },
  ];

  const currentSystem = systems.find((s) => s.id === activeTab) || systems[0];
  const targetSystem = systems.find((s) => s.id === targetTab) || currentSystem;

  return (
    <section
      id="systems"
      className="py-10 sm:py-12 lg:py-16  bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Ambient Decorative Backdrops (Light & Modern) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-100/30 via-slate-100/40 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6 sm:mb-8">
          <div className="max-w-4xl flex flex-col items-center text-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50/90 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>{t("MAßGESCHNEIDERTE UNTERNEHMENSSYSTEME", "CUSTOM BUSINESS SYSTEMS")}</span>
            </div>

            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.15] sm:leading-[1.07] mb-3 text-center">
              {t("Ein einziges System,", "One Single System,")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600">
                {t("das Ihr Unternehmen komplett steuert", "Managing Your Entire Business")}
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-4 sm:mb-4 font-normal text-center">
            {t(
              "Statt dutzender teurer SaaS-Abos und verstreuter Excel-Dateien: Wir entwickeln modulare, maßgeschneiderte Systeme, die genau zu Ihren internen Abläufen passen.",
              "Instead of dozens of expensive SaaS subscriptions and scattered Excel spreadsheets: We build modular, custom operating systems tailored precisely to your workflow."
            )}
          </p>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-10">
          {systems.map((s) => {
            const Icon = s.icon;
            const isCurrentActive = activeTab === s.id;
            const isTarget = targetTab === s.id && isLoading;
            const isHighlighted = isTarget || (!isLoading && isCurrentActive);

            return (
              <button
                key={s.id}
                onClick={() => handleTabChange(s.id)}
                disabled={isLoading}
                className={`relative flex items-center gap-2.5 sm:gap-3.5 p-3.5 sm:p-4 rounded-[5px] border text-left transition-all duration-300 cursor-pointer ${
                  isHighlighted
                    ? "bg-white border-orange-500 shadow-lg shadow-orange-500/10 ring-1 ring-orange-500/20"
                    : "bg-white/80 hover:bg-white border-slate-200/90 text-slate-600 hover:border-slate-300 shadow-2xs"
                } ${isLoading && !isHighlighted ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {/* Active Indicator Top Notch */}
                {isHighlighted && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                )}

                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-[5px] flex items-center justify-center shrink-0 transition-all ${
                    isHighlighted
                      ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-sm shadow-orange-500/30"
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>

                <div className="flex flex-col min-w-0">
                  <span
                    className={`text-[14px] sm:text-[16px]  font-bold tracking-tight truncate ${
                      isHighlighted ? "text-[#0B132B]" : "text-slate-700"
                    }`}
                  >
                    {s.navTitle}
                  </span>
                  <span className="text-[11px] sm:text-[13px] text-slate-600 font-medium truncate hidden sm:block">
                    {s.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Showcase Card Area */}
        <div className="relative rounded-[5px] bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 overflow-hidden min-h-[460px] sm:min-h-[440px] flex flex-col justify-center">
          {isLoading ? (
            /* Ultra-Modern 1.3s Centered Loader */
            <div className="w-full py-16 sm:py-24 px-4 flex flex-col items-center justify-center text-center animate-in fade-in duration-200">
              {/* Glowing Pulse Rings & Orbiting Spinner */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping opacity-60" />
                <div className="absolute inset-1 rounded-full bg-orange-500/15 animate-pulse" />
                
                {/* Modern Spinning Ring */}
                <div className="absolute inset-0 rounded-full border-3 border-orange-100 border-t-orange-600 animate-spin" />

                {/* Target Icon in Center */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-md shadow-orange-500/30 z-10">
                  {React.createElement(targetSystem.icon, {
                    className: "w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]",
                  })}
                </div>
              </div>

              {/* Loader Labels */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold mb-2">
                <Cpu className="w-3.5 h-3.5 animate-spin" />
                <span>{targetSystem.navTitle}</span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-[#0B132B] tracking-tight">
                {t("System-Modul wird initialisiert...", "Initializing system module...")}
              </h4>

              <p className="text-slate-400 text-xs mt-1 max-w-xs">
                {t(
                  "Lade Datenbanken, Berechtigungen und UI-Komponenten...",
                  "Loading schemas, security protocols & layout widgets..."
                )}
              </p>

              {/* 1.3s Progress Fill Bar */}
              <div className="w-44 sm:w-56 h-1.5 bg-slate-100 rounded-full overflow-hidden mt-5 relative border border-slate-200/60">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full"
                  style={{
                    animation: "businessSystemLoader 1.3s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                  }}
                />
              </div>
            </div>
          ) : (
            /* Active System Showcase Content */
            <div className="p-6 sm:p-10 lg:p-12 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Details & Features */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
                    <Sparkles className="w-3 h-3 text-orange-500" />
                    <span>{currentSystem.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight leading-snug mb-3.5">
                    {currentSystem.heading}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    {currentSystem.description}
                  </p>

                  {/* Feature Checklist Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8 w-full">
                    {currentSystem.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-2" />
                        <span className="text-[12px] sm:text-[15px] text-slate-700 font-medium leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenContact(currentSystem.navTitle)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer group"
                  >
                    <span>{t("Individuelles System anfragen", "Inquire About This System")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Right Column: Visual Metrics & Engineering Architecture Box */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Metrics Pill Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {currentSystem.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50/70 to-amber-50/30 border border-orange-100 text-center shadow-2xs"
                      >
                        <div className="text-xl sm:text-2xl font-black text-orange-600 tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[12px] sm:text-[15px] text-slate-600 mt-1 font-semibold leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Guarantee Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center gap-2 mb-3.5 text-[15px] sm:text-[17px] font-bold text-[#0B132B] uppercase tracking-wider">
                      <div className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <span>{t("Technologische Grundlage", "Engineering Foundation")}</span>
                    </div>

                    <div className="space-y-2 text-[12px] sm:text-[15px] text-slate-600 leading-relaxed mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span>{t("Next.js & TypeScript UI für flüssige Bedienung", "Next.js & TypeScript UI for instantaneous response times")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span>{t("PostgreSQL Datenbank mit rollenbasierter Zugriffskontrolle", "PostgreSQL database with granular role-based security")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 font-semibold" />
                        <span>{t("Deutsches ISO-27001 Cloud Hosting mit täglichem Backup", "German ISO-27001 hosting with daily encrypted snapshots")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span>{t("REST & GraphQL APIs zur Anbindung bestehender Systeme", "REST & GraphQL APIs to interface with ERP & accounting")}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-slate-200 text-[12px] sm:text-[15px] text-emerald-700 font-bold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{t("100% DSGVO & GoBD-konform implementiert", "100% GDPR & GoBD compliant architecture")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Embedded Keyframe Animation for the 1.3s Loader Progress */}
      <style jsx>{`
        @keyframes businessSystemLoader {
          0% {
            width: 0%;
          }
          40% {
            width: 55%;
          }
          80% {
            width: 85%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
