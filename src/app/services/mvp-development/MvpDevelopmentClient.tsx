"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Rocket,
  Zap,
  CheckCircle2,
  Clock,
  Layers,
  ChevronDown,
  ShieldCheck,
  Code2,
  Database,
  BarChart3,
  TrendingUp,
  Cpu,
  Smartphone,
  Check,
  X,
  CreditCard,
  MessageSquare,
  Lock,
  Globe,
  Sliders,
  Sparkles,
  Server,
  Target,
  FileCode,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

export default function MvpDevelopmentClient() {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const [heroTab, setHeroTab] = useState<"preview" | "architecture" | "performance">("preview");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedTechCategory, setSelectedTechCategory] = useState("all");

  const techStack = [
    { name: "Next.js 15", category: "frontend", tag: "App Router & SSR", highlight: true },
    { name: "React 19", category: "frontend", tag: "Server Components", highlight: true },
    { name: "TypeScript", category: "core", tag: "Strict Type Safety", highlight: true },
    { name: "Tailwind CSS", category: "frontend", tag: "Design System", highlight: false },
    { name: "Supabase", category: "backend", tag: "PostgreSQL & Auth", highlight: true },
    { name: "Prisma ORM", category: "backend", tag: "Data Migrations", highlight: false },
    { name: "n8n", category: "ai", tag: "Workflow Automation", highlight: true },
    { name: "OpenAI / Claude", category: "ai", tag: "LLM Orchestration", highlight: true },
    { name: "PhonePe & Stripe", category: "backend", tag: "Verified Payments", highlight: true },
    { name: "Vercel Edge", category: "cloud", tag: "Global CDN", highlight: true },
    { name: "Docker", category: "cloud", tag: "Containerization", highlight: false },
    { name: "Redis", category: "backend", tag: "Caching & Queues", highlight: false },
  ];

  const filteredTech =
    selectedTechCategory === "all"
      ? techStack
      : techStack.filter((item) => item.category === selectedTechCategory);

  const phases = [
    {
      step: "01",
      weekDe: "Woche 1",
      weekEn: "Week 1",
      titleDe: "Discovery, Scoping & Klickbarer Figma-Prototyp",
      titleEn: "Discovery, Scoping & Clickable Figma Prototype",
      descDe:
        "Gemeinsame Festlegung des MVP-Kernflows. Wir eliminieren unnötigen Feature-Ballast und erstellen ein interaktives Figma UI/UX-Design für sofortiges Nutzerfeedback.",
      descEn:
        "Collaborative scoping workshop defining your North Star metric. We strip away bloat and deliver a high-fidelity, clickable Figma prototype for immediate validation.",
      deliverableDe: "Klickbarer Figma Prototyp + Technisches MVP-Lastenheft",
      deliverableEn: "Clickable Figma Prototype + Technical MVP Specification",
      icon: Target,
    },
    {
      step: "02",
      weekDe: "Woche 2-3",
      weekEn: "Weeks 2-3",
      titleDe: "Full-Stack Core Engine & Datenbank-Entwicklung",
      titleEn: "Full-Stack Core Engine & Database Engineering",
      descDe:
        "Aufbau der Next.js 15 App mit TypeScript, Supabase PostgreSQL Datenbank, rollenbasiertem Auth-System und reaktionsschnellem Frontend.",
      descEn:
        "Engineering your scalable Next.js 15 app with TypeScript, Supabase PostgreSQL, role-based auth, and mobile-responsive modern interfaces.",
      deliverableDe: "Funktionale Web-Applikation mit Auth & Datenbank",
      deliverableEn: "Functional Web Application with Auth & Database",
      icon: Code2,
    },
    {
      step: "03",
      weekDe: "Woche 4",
      weekEn: "Week 4",
      titleDe: "Payment-Gateways, APIs & KI-Automatisierung",
      titleEn: "Payment Gateways, APIs & AI Automation",
      descDe:
        "Integration von PhonePe / Stripe für Online-Zahlungen, automatisierte E-Mail-Workflows, Webhooks und optionale n8n KI-Workflows.",
      descEn:
        "Seamless integration of PhonePe / Stripe payment checkouts, transactional notification flows, third-party APIs, and smart n8n automation pipelines.",
      deliverableDe: "Live Payment Checkout + Webhook & API-Anbindungen",
      deliverableEn: "Live Payment Checkout + Webhook & API Integrations",
      icon: CreditCard,
    },
    {
      step: "04",
      weekDe: "Woche 5-6",
      weekEn: "Weeks 5-6",
      titleDe: "QA-Testing, Security Audit & Cloud Live-Launch",
      titleEn: "QA Testing, Security Audit & Cloud Live Launch",
      descDe:
        "End-to-End Testing auf allen Geräten, DSGVO-Sicherheitsprüfung, Speed-Optimierung und Deployment auf High-Performance Edge Servern.",
      descEn:
        "End-to-end stress testing across devices, GDPR security audit, speed optimization, and production deployment on global Edge infrastructure.",
      deliverableDe: "Produktionsreifes Live-MVP + Vollständiger Quellcode",
      deliverableEn: "Production Live MVP + 100% Source Code Ownership",
      icon: Rocket,
    },
  ];

  const faqs = [
    {
      qDe: "Wie schnell kann mein MVP tatsächlich live gehen?",
      qEn: "How quickly can my MVP actually go live in market?",
      aDe: "In der Regel innerhalb von 4 bis 6 Wochen. Durch unseren standardisierten Sprint-Prozess, vorgefertigte Komponenten und fokussierten Scope-Workshop vergeuden wir keine Zeit mit unnötigen Schleifen.",
      aEn: "Typically within 4 to 6 weeks. Our battle-tested sprint methodology, modular battle-hardened components, and laser-focused scoping ensure zero developer downtime.",
    },
    {
      qDe: "Kann der Code nach einer Seed- oder Series-A-Finanzierung weitergenutzt werden?",
      qEn: "Can the codebase scale after our Seed or Series A funding round?",
      aDe: "Absolut ja. Wir bauen keine anfälligen No-Code-Basteleien, sondern saubere, typisierte Next.js- und PostgreSQL-Architekturen. Sie können die Codebase nahtlos an Ihr Inhouse-Entwicklerteam übergeben.",
      aEn: "Absolutely yes. We never build throwaway no-code hacks. We engineer clean, typed Next.js and PostgreSQL architectures ready to scale to hundreds of thousands of active users.",
    },
    {
      qDe: "Wem gehören die Rechte an Design und Quellcode?",
      qEn: "Who owns the intellectual property (IP) and source code?",
      aDe: "Ihnen zu 100%. Sie erhalten die uneingeschränkten Nutzungsrechte an allen Repositories, Datenbank-Schemata und Figma-Dateien. Es gibt keinen Vendor Lock-in.",
      aEn: "You retain 100% full ownership. All GitHub repositories, database schemas, and Figma files are transferred directly to you upon milestone completion with zero lock-in.",
    },
    {
      qDe: "Wie verhindern Sie Kostenexplosionen und Scope Creep?",
      qEn: "How do you prevent cost explosions and scope creep?",
      aDe: "Wir arbeiten ausschließlich mit verbindlichen Festpreis-Paketen. Alle Features werden in Woche 1 klar definiert. Neue Wünsche priorisieren wir transparent in einem Phase-2-Backlog.",
      aEn: "We work on transparent, fixed-price sprint commitments. Core deliverables are locked in during Week 1, and any subsequent feature requests are prioritized in an Phase 2 backlog.",
    },
    {
      qDe: "Welche Zahlungsmethoden können integriert werden?",
      qEn: "Which payment gateways can be integrated into the MVP?",
      aDe: "Wir integrieren lizenzierte Payment-Provider wie PhonePe (UPI, Netbanking, Cards) für Indien/Asien sowie Stripe und PayPal für Europa und die USA – vollkommen sicher und PCI-DSS-konform.",
      aEn: "We integrate licensed gateways including PhonePe (UPI, Netbanking, cards) as well as Stripe and PayPal for European and US markets—fully encrypted and PCI-DSS compliant.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenContact={() => {
          setContactOpen(true);
        }}
      />

      {/* Hero Section matching Web Development */}
      <section className="relative pt-28 pb-15 lg:pt-32 lg:pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
        {/* Subtle decorative glowing background orbs */}
        <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-orange-200/35 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />

        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link
              href="/"
              className="hover:text-orange-600 transition-colors flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("Startseite", "Home")}
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/#services" className="hover:text-orange-600 transition-colors">
              {t("Services", "Services")}
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-orange-600 font-semibold">
              {t("MVP-Entwicklung", "MVP Development")}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              {/* Modern Eyebrow Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <span>
                    {t(
                      "Rapid MVP Sprint • 4-6 Wochen zum Markteintritt",
                      "Rapid MVP Sprint • 4-6 Weeks to Market"
                    )}
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-[35px] sm:text-[55px] lg:text-[60px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 sm:mb-6 text-center lg:text-left">
                {t("MVP Entwicklung: ", "MVP Development: ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                  {t("Von der Idee zum Produkt", "From Idea to Market")}
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 sm:mb-8 max-w-2xl font-normal text-center lg:text-left mx-auto lg:mx-0">
                {t(
                  "Bauen Sie Ihr digitales Produkt ohne monatelange Verzögerungen und ohne Technical Debt. Wir entwickeln skalierbare Web- und Mobile-MVPs mit Next.js 15, Supabase und modernen Bezahl-Gateways zum Festpreis.",
                  "Launch production-grade Minimum Viable Products in weeks, not months. We engineer high-performance web & mobile MVPs with Next.js 15, PostgreSQL, and verified payment gateways with zero tech debt."
                )}
              </p>

              {/* Key Trust Signals Chips matching Web Development */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-9">
                {[
                  {
                    icon: Clock,
                    label: t("4–6 Wochen", "4–6 Weeks"),
                    sub: t("Bis zum Live-Launch", "Turnkey Launch"),
                  },
                  {
                    icon: ShieldCheck,
                    label: t("100% IP-Rechte", "100% IP Rights"),
                    sub: t("Voller Quellcode", "Full Ownership"),
                  },
                  {
                    icon: Zap,
                    label: t("Next.js 15", "Next.js 15"),
                    sub: t("Skalierbare Cloud", "Scalable Stack"),
                  },
                  {
                    icon: CreditCard,
                    label: t("Zahlungsbereit", "Payment Ready"),
                    sub: t("PhonePe & Stripe", "PCI-DSS Verified"),
                  },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 text-orange-600 mb-1">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-900">{label}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">{sub}</span>
                  </div>
                ))}
              </div>

              {/* Call-to-actions matching Web-Development */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                >
                  <span>{t("Kostenloses MVP-Erstgespräch", "Request Free Discovery Call")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300/80 bg-white/90 backdrop-blur-xs text-slate-800 text-sm sm:text-base font-bold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Sliders className="w-4 h-4 text-slate-500" />
                  <span>{t("Erfolgreiche MVPs ansehen", "View Case Studies")}</span>
                </Link>
              </div>
            </motion.div>

            {/* Hero Right Visual: Interactive Browser / Architecture Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl bg-slate-950 p-2 sm:p-3 shadow-2xl border border-slate-800/80">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 rounded-2xl mb-2 border border-slate-800/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full text-[11px] font-medium text-slate-300">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>nexasolutions.de/mvp-live</span>
                  </div>
                  <span className="text-[10px] font-semibold text-orange-400 bg-orange-950/70 border border-orange-800/50 px-2 py-0.5 rounded-full">
                    Week 4 Live
                  </span>
                </div>

                {/* Interactive View Selector Tabs */}
                <div className="flex gap-1.5 mb-2.5 bg-slate-900/60 p-1 rounded-xl">
                  <button
                    onClick={() => setHeroTab("preview")}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      heroTab === "preview"
                        ? "bg-orange-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {t("MVP Preview", "MVP Preview")}
                  </button>
                  <button
                    onClick={() => setHeroTab("performance")}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      heroTab === "performance"
                        ? "bg-orange-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {t("Metriken", "Metrics")}
                  </button>
                  <button
                    onClick={() => setHeroTab("architecture")}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      heroTab === "architecture"
                        ? "bg-orange-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {t("Architektur", "Architecture")}
                  </button>
                </div>

                {/* Tab 1: Live Interactive MVP App Preview */}
                {heroTab === "preview" && (
                  <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-4 sm:p-5 text-white border border-slate-800 min-h-[300px] sm:aspect-[4/3] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Rocket className="w-3.5 h-3.5" />
                          <span>MVP SaaS Application</span>
                        </span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Active &amp; Ready
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-100 mb-2">
                        Dashboard &amp; Customer Checkout
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        Integriertes Onboarding, Subscription Billing via PhonePe / Stripe und
                        Echtzeit-Statistiken für sofortigen Product-Market-Fit.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center text-xs">
                      <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/50">
                        <div className="text-lg font-black text-emerald-400">4 Wochen</div>
                        <div className="text-[10px] text-slate-400">Launch Timeline</div>
                      </div>
                      <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/50">
                        <div className="text-lg font-black text-sky-400">100%</div>
                        <div className="text-[10px] text-slate-400">Code Eigentum</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Performance & Audit */}
                {heroTab === "performance" && (
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 min-h-[300px] sm:aspect-[4/3] flex flex-col justify-between p-4 sm:p-6 text-white">
                    <div className="text-center mb-3 sm:mb-5">
                      <span className="text-[11px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-widest block">
                        Enterprise Quality &amp; Security
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-1">
                        Investor-Ready Benchmarks
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
                      {[
                        { score: "<0.4s", label: "Page Speed", color: "text-emerald-400" },
                        { score: "100%", label: "TypeScript", color: "text-emerald-400" },
                        { score: "DSGVO", label: "Compliant", color: "text-emerald-400" },
                        { score: "Zero", label: "Tech Debt", color: "text-orange-400" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="p-2.5 sm:p-3 rounded-xl bg-slate-800/60 border border-slate-700/60"
                        >
                          <div className={`text-xl sm:text-2xl font-black ${item.color}`}>
                            {item.score}
                          </div>
                          <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-1 leading-tight">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400 bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/40">
                      <span>Full Security Audit</span>
                      <span className="text-emerald-400 font-medium">PCI-DSS Ready</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Tech Stack Architecture */}
                {heroTab === "architecture" && (
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 min-h-[300px] sm:aspect-[4/3] flex flex-col justify-between p-4 sm:p-5 text-white">
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                      Moderne Scalable MVP Pipeline
                    </span>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="font-semibold text-slate-200">1. UI &amp; State</span>
                        <span className="text-orange-400 font-medium">Next.js 15 &amp; React 19</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="font-semibold text-slate-200">2. Database &amp; Auth</span>
                        <span className="text-sky-400 font-medium">Supabase / PostgreSQL</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="font-semibold text-slate-200">3. Payments</span>
                        <span className="text-emerald-400 font-medium">PhonePe &amp; Stripe Gateways</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="font-semibold text-slate-200">4. Hosting</span>
                        <span className="text-purple-400 font-medium">Vercel Edge Global CDN</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400">
                      Skalierbar von Tag 1 an bis zu hunderttausenden zahlenden Nutzern.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4-Phase Sprint Process Section */}
      <section className="py-12 lg:py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-widest mb-2 sm:mb-3 block">
              {t("Strukturierter Sprint-Ablauf", "Structured Sprint Framework")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-tight mb-4">
              {t("Der 4-Phasen MVP-Sprint", "The 4-Phase MVP Sprint Framework")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              {t(
                "Kein monatelanges Warten. Wir strukturieren die gesamte Entwicklung in vier transparente Etappen mit wöchentlichen Live-Demos.",
                "No endless development cycles. We structure the sprint into four distinct milestone weeks with transparent live demos."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[5px] p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200/60">
                        {t(phase.weekDe, phase.weekEn)}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 group-hover:bg-orange-50 text-slate-700 group-hover:text-orange-600 flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                      {t(phase.titleDe, phase.titleEn)}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                      {t(phase.descDe, phase.descEn)}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xl font-bold  mb-3 leading-snug text-slate-400 block mb-1">
                      {t("Deliverable", "Deliverable")}
                    </span>
                    <span className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {t(phase.deliverableDe, phase.deliverableEn)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison: Traditional Agency vs Nexa Solutions Sprint */}
      <section className="py-12 lg:py-16  bg-[#FDFDFE]">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-12 shadow-xs">
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-widest mb-2 block">
                {t("Transparenter Vergleich", "Honest Comparison")}
              </span>
              <h2 className="text-2xl sm:text-4xl font-[900] text-slate-900 tracking-tight mb-3">
                {t("Klassische Agenturen vs. Nexa MVP Sprint", "Traditional Agencies vs. Nexa MVP Sprint")}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                {t(
                  "Warum moderne Gründer und KMUs auf unseren agilen Ansatz statt veraltete Wasserfall-Modelle setzen.",
                  "Why ambitious founders choose our streamlined rapid development model."
                )}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase text-xs tracking-wider">
                    <th className="pb-4 font-bold">{t("Kriterium", "Criterion")}</th>
                    <th className="pb-4 font-bold text-slate-400">{t("Klassische Agentur", "Traditional Agency")}</th>
                    <th className="pb-4 font-bold text-orange-600">{t("Nexa Solutions MVP", "Nexa Solutions MVP")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr>
                    <td className="py-4 font-bold text-slate-900">{t("Time to Market", "Time to Market")}</td>
                    <td className="py-4 text-slate-500">{t("6 bis 12 Monate", "6 to 12 months")}</td>
                    <td className="py-4 text-emerald-600 font-bold flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>4 bis 6 Wochen</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-slate-900">{t("Preis & Abrechnung", "Pricing Model")}</td>
                    <td className="py-4 text-slate-500">{t("Stundensätze & unvorhersehbare Mehrkosten", "Hourly billing with runaway budgets")}</td>
                    <td className="py-4 text-emerald-600 font-bold flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{t("Verbindlicher Festpreis ohne Überraschung", "Guaranteed fixed scope & price")}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-slate-900">{t("Technologie", "Tech Stack")}</td>
                    <td className="py-4 text-slate-500">{t("Veraltetes PHP / WordPress oder instabiles No-Code", "Bloated legacy CMS or fragile no-code")}</td>
                    <td className="py-4 text-emerald-600 font-bold flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Next.js 15, TypeScript &amp; Supabase</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-slate-900">{t("Skalierbarkeit & Investoren", "Post-Funding Scaling")}</td>
                    <td className="py-4 text-slate-500">{t("Codebase muss oft komplett neu gebaut werden", "Spaghetti code often thrown away")}</td>
                    <td className="py-4 text-emerald-600 font-bold flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{t("100% skalierbar & investoren-geprüft", "100% modular & investor-ready")}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid matching Web-Development */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-widest mb-2 block">
              {t("Technologie-Stack", "Technology Stack")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-tight mb-4">
              {t("Moderne Tools für maximale Geschwindigkeit", "Battle-Tested Modern Tech Stack")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              {t(
                "Kein veralteter Ballast. Wir nutzen dieselben High-Performance-Tools wie führende Tech-Startups.",
                "Zero vendor lock-in. Powered by modern engineering standards."
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:shadow-sm hover:border-orange-300 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full inline-block mb-2 uppercase tracking-wider">
                    {tech.category}
                  </span>
                  <div className="font-bold text-slate-900 text-base sm:text-lg">{tech.name}</div>
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium">{tech.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 lg:py-16 bg-[#FDFDFE]">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-widest mb-2 block">
              {t("Häufige Fragen", "FAQ")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-tight mb-4">
              {t("Häufig gestellte Fragen (FAQ)", "Frequently Asked Questions")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              {t(
                "Wichtige Antworten zu Ablauf, Rechten, Zahlungen und Code-Eigentum.",
                "Key answers regarding timeline, code rights, payment integrations, and scaling."
              )}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    <span>{t(faq.qDe, faq.qEn)}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-orange-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {t(faq.aDe, faq.aEn)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action Banner matching Web-Development */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-xl shadow-slate-950/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-orange-400 text-xs font-bold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("JETZT DURCHSTARTEN", "START YOUR SPRINT TODAY")}</span>
              </span>

              <h2 className="text-3xl sm:text-5xl font-[900] tracking-tight mb-4 text-white">
                {t(
                  "Bereit, Ihr MVP in den nächsten 4 Wochen zu launchen?",
                  "Ready to Launch Your MVP in the Next 4 to 6 Weeks?"
                )}
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {t(
                  "Lassen Sie uns in einem unverbindlichen 20-Minuten-Gespräch Ihre Produktidee analysieren und eine realistische Festpreis-Roadmap aufstellen.",
                  "Schedule a free 20-minute strategy call. We'll analyze your requirements, validate technical feasibility, and give you a transparent fixed-price roadmap."
                )}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-base font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t("Kostenloses Erstgespräch buchen", "Book Free Discovery Call")}</span>
                </button>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all flex items-center justify-center"
                >
                  {t("Projektanfrage senden", "Send Project Brief")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Global Contact Modal */}
      {contactOpen && (
        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
          defaultService="MVP-Entwicklung"
        />
      )}
    </div>
  );
}
