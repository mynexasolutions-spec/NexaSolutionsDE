"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Cpu,
  ShieldCheck,
  ChevronDown,
  Star,
  Zap,
  Code2,
  BarChart3,
  Lock,
  Rocket,
  ArrowLeft,
  Server,
  Smartphone,
  Check,
  X as XIcon,
  Sparkles,
  ExternalLink,
  Clock,
  Gauge,
  Database,
  Layout,
  ShoppingCart,
  Sliders,
  PhoneCall,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

// Tech stack with categories
const techCategories = [
  {
    id: "all",
    labelDe: "Alle Technologien",
    labelEn: "All Technologies",
  },
  {
    id: "frontend",
    labelDe: "Frontend & UI",
    labelEn: "Frontend & UI",
  },
  {
    id: "backend",
    labelDe: "Backend & Database",
    labelEn: "Backend & Database",
  },
  {
    id: "cloud",
    labelDe: "Cloud & DevOps",
    labelEn: "Cloud & DevOps",
  },
];

const technologies = [
  { name: "Next.js 15", category: "frontend", tag: "App Router / SSR", highlight: true },
  { name: "React 19", category: "frontend", tag: "Concurrent Mode", highlight: true },
  { name: "TypeScript", category: "frontend", tag: "Type-Safe", highlight: false },
  { name: "Tailwind CSS", category: "frontend", tag: "Modern Styling", highlight: false },
  { name: "Framer Motion", category: "frontend", tag: "Micro-Interactions", highlight: false },
  { name: "Node.js", category: "backend", tag: "High Throughput", highlight: false },
  { name: "PostgreSQL", category: "backend", tag: "Relational DB", highlight: true },
  { name: "Supabase", category: "backend", tag: "Auth & Realtime", highlight: true },
  { name: "Prisma ORM", category: "backend", tag: "Schema Migrations", highlight: false },
  { name: "Redis", category: "backend", tag: "In-Memory Cache", highlight: false },
  { name: "AWS", category: "cloud", tag: "Scalable Infrastructure", highlight: true },
  { name: "Vercel Edge", category: "cloud", tag: "Global CDN", highlight: true },
  { name: "Cloudflare", category: "cloud", tag: "DDoS Protection & SSL", highlight: false },
  { name: "Stripe", category: "backend", tag: "Secure Payments", highlight: true },
  { name: "Sanity CMS", category: "frontend", tag: "Headless Content", highlight: false },
];

const coreServices = [
  {
    icon: Globe,
    titleDe: "Corporate Websites & Markenportale",
    titleEn: "Corporate Websites & Brand Portals",
    descDe:
      "Modernste Unternehmens-Websites mit interaktiver Marken-Story, unwiderstehlichem UX-Design und klarem Conversion-Fokus. Entwickelt für messbar mehr qualifizierte Kundenanfragen.",
    descEn:
      "State-of-the-art enterprise websites with interactive brand storytelling, irresistible UX design, and sharp conversion focus. Built to drive measurably more qualified client inquiries.",
    featuresDe: ["Sub-Sekunden Ladezeit (<0.5s)", "Figma UI/UX Design System", "SEO & Meta-Tags ab Werk", "Mehrsprachig (i18n)"],
    featuresEn: ["Sub-second load times (<0.5s)", "Figma UI/UX Design System", "Turnkey SEO & OpenGraph", "Multilingual ready (i18n)"],
  },
  {
    icon: Layout,
    titleDe: "Individuelle SaaS & Web-Applikationen",
    titleEn: "Custom SaaS & Web Applications",
    descDe:
      "Skalierbare Cloud-Softwarelösungen und Portale. Von Multi-Tenant Kundenbereichen über Buchungssysteme bis hin zu komplexen Workflow-Dashboards mit Rollen- und Rechtemanagement.",
    descEn:
      "Scalable cloud software solutions and client portals. From multi-tenant SaaS dashboards to booking systems and complex role-based workflow suites.",
    featuresDe: ["Multi-Tenant Architektur", "Sichere User-Authentifizierung", "Stripe / PayPal Billing Integration", "Echtzeit-WebSockets & APIs"],
    featuresEn: ["Multi-tenant architecture", "Secure user authentication", "Stripe / PayPal subscription billing", "Real-time WebSockets & APIs"],
  },
  {
    icon: ShoppingCart,
    titleDe: "Headless E-Commerce & Shopsysteme",
    titleEn: "Headless E-Commerce & Online Stores",
    descDe:
      "High-Conversion Onlineshops ohne die Trägheit gewöhnlicher Templates. Ultraschnelle Produktkataloge, One-Click Checkout und nahtlose Anbindung an Ihr ERP- und Warenwirtschaftssystem.",
    descEn:
      "High-conversion online stores without template bloat. Blazing-fast product catalogs, one-click checkout, and seamless sync with your ERP and inventory systems.",
    featuresDe: ["Sub-Sekunden Checkout", "Shopify / MedusaJS / Stripe", "Automatisierte Rechnungsstellung", "DSGVO-konforme Cookie-Lösung"],
    featuresEn: ["Sub-second frictionless checkout", "Shopify / MedusaJS / Stripe", "Automated invoicing & tax handling", "100% GDPR-compliant checkout"],
  },
  {
    icon: Database,
    titleDe: "Headless CMS & Admin Dashboards",
    titleEn: "Headless CMS & Admin Dashboards",
    descDe:
      "Geben Sie Ihrem Marketing- und Content-Team die volle Freiheit. Maßgeschneiderte Editoren ohne Programmieraufwand – bei maximaler Code-Sicherheit und Ladezeit.",
    descEn:
      "Give your marketing and content team total editorial freedom. Custom drag-and-drop editors without coding hassles — maintaining rock-solid code security and speed.",
    featuresDe: ["Sanity, Strapi oder Contentful", "Echtzeit-Vorschau aller Inhalte", "Granulares Rollen-Management", "Keine fehleranfälligen Plugins"],
    featuresEn: ["Sanity, Strapi, or Contentful", "Live real-time preview", "Granular role management", "Zero vulnerability-prone plugins"],
  },
];

const comparisonData = [
  {
    featureDe: "Ladezeit & Core Web Vitals",
    featureEn: "Load Time & Core Web Vitals",
    nexaDe: "0.3 – 0.7 Sekunden (Lighthouse 98-100)",
    nexaEn: "0.3 – 0.7 seconds (Lighthouse 98-100)",
    othersDe: "2.8 – 5.5 Sekunden (Lighthouse 45-70)",
    othersEn: "2.8 – 5.5 seconds (Lighthouse 45-70)",
  },
  {
    featureDe: "Technologie & Code-Basis",
    featureEn: "Technology & Codebase",
    nexaDe: "Next.js 15, React 19, TypeScript (Server Components)",
    nexaEn: "Next.js 15, React 19, TypeScript (Server Components)",
    othersDe: "Veraltetes WordPress / generische Theme-Builder",
    othersEn: "Outdated WordPress / heavy theme builders",
  },
  {
    featureDe: "Sicherheit & Wartungsaufwand",
    featureEn: "Security & Maintenance Overhead",
    nexaDe: "Statische Edge-Auslieferung, keine Plugin-Sicherheitslücken",
    nexaEn: "Static edge delivery, zero third-party plugin vulnerabilities",
    othersDe: "Ständige Plugin-Updates, hohe Angriffsfläche für Hacks",
    othersEn: "Frequent plugin breaks, high surface for exploits",
  },
  {
    featureDe: "Suchmaschinen-Optimierung (SEO)",
    featureEn: "Search Engine Optimization (SEO)",
    nexaDe: "Server-Side Rendering (SSR), automatische Schema-Daten",
    nexaEn: "Server-side rendering (SSR), automated schema markup",
    othersDe: "Verzögertes Client-Rendering, langsame Indexierung",
    othersEn: "Bloated DOM, sluggish crawler indexing",
  },
  {
    featureDe: "Skalierbarkeit & Traffic-Spitzen",
    featureEn: "Scalability & Traffic Spikes",
    nexaDe: "Serverless Edge Cloud — verträgt Millionen Requests mühelos",
    nexaEn: "Serverless edge cloud — handles millions of hits effortlessly",
    othersDe: "Server überlastet und stürzt bei Kampagnen ab",
    othersEn: "Server crashes during high-traffic ad campaigns",
  },
];

const processSteps = [
  {
    step: "01",
    phase: "Week 1",
    titleDe: "Discovery & Architektur-Blueprint",
    titleEn: "Discovery & Architecture Blueprint",
    descDe:
      "Wir analysieren Ihre Geschäftsziele, Zielgruppen und Wettbewerber. Danach erstellen wir die Informationsarchitektur, das Wireframe-Konzept und die technische Spezifikation.",
    descEn:
      "We analyze your business goals, target audience, and competition. We establish the information architecture, UX wireframes, and technical specifications.",
  },
  {
    step: "02",
    phase: "Week 2–3",
    titleDe: "High-End UI/UX Design & Klick-Prototyp",
    titleEn: "High-End UI/UX Design & Prototype",
    descDe:
      "Individuelles Design in Figma mit modernen Mikro-Interaktionen und Responsive-Layouts. Sie testen den interaktiven Klick-Prototyp, bevor eine einzige Zeile Code geschrieben wird.",
    descEn:
      "Custom Figma design system with slick micro-animations and responsive layouts. You test and approve an interactive clickable prototype before coding begins.",
  },
  {
    step: "03",
    phase: "Week 3–5",
    titleDe: "Agile Entwicklung & API-Integration",
    titleEn: "Agile Development & API Integration",
    descDe:
      "Sauberer, modularer Code in Next.js und TypeScript. Anbindung von CMS, CRM, Stripe-Zahlungen und Drittanbieter-Tools mit wöchentlichen Live-Staging-Updates.",
    descEn:
      "Clean, modular code built with Next.js and TypeScript. Integration of CMS, CRM, payment systems, and third-party APIs with weekly live staging demos.",
  },
  {
    step: "04",
    phase: "Week 5–6",
    titleDe: "QA-Testing, Launch & 24/7 SLA-Support",
    titleEn: "QA Testing, Launch & 24/7 SLA Support",
    descDe:
      "End-to-End-Testing auf allen Geräten, Lighthouse 95+ Audit, DNS-Umschaltung ohne Downtime und anschließender SLA-Support mit proaktivem Monitoring.",
    descEn:
      "End-to-end device testing, Lighthouse 95+ performance validation, zero-downtime DNS deployment, and ongoing post-launch SLA monitoring.",
  },
];

const packages = [
  {
    id: "essential",
    nameDe: "Starter Web Presence",
    nameEn: "Starter Web Presence",
    badgeDe: "Schneller Markteintritt",
    badgeEn: "Fast Market Entry",
    priceDe: "ab 1.490 €",
    priceEn: "from €1,490",
    descDe: "Ideal für Startups & Dienstleister, die eine erstklassige, konvertierende Online-Präsenz benötigen.",
    descEn: "Perfect for startups & professional services needing a high-converting, premium online presence.",
    featuresDe: [
      "Individuelles Responsive Design (bis 5 Unterseiten)",
      "Next.js 15 & Tailwind CSS",
      "Lighthouse 95+ Performance-Garantie",
      "Kontaktformular & Kalender-Integration",
      "DSGVO-konformes Cookie-Banner",
      "Basis-SEO & Google Analytics Setup",
      "Lieferzeit: 2–3 Wochen",
    ],
    featuresEn: [
      "Custom responsive design (up to 5 pages)",
      "Next.js 15 & Tailwind CSS",
      "Lighthouse 95+ performance guarantee",
      "Lead contact form & calendar booking sync",
      "100% GDPR-compliant cookie management",
      "Core SEO metadata & Google Search Console",
      "Delivery: 2–3 weeks",
    ],
    popular: false,
  },
  {
    id: "business",
    nameDe: "Growth Business Platform",
    nameEn: "Growth Business Platform",
    badgeDe: "Am beliebtesten",
    badgeEn: "Most Popular",
    priceDe: "ab 2.990 €",
    priceEn: "from €2,990",
    descDe: "Für wachsende Unternehmen, die maximale Flexibilität mit Headless CMS und Lead-Automatisierung fordern.",
    descEn: "For scaling businesses requiring total editorial flexibility with headless CMS and automated lead pipelines.",
    featuresDe: [
      "Bis zu 12 maßgeschneiderte Unterseiten & Templates",
      "Headless CMS (Sanity / Contentful) zur Selbstverwaltung",
      "Blog- / Magazin- & Ressourcen-System",
      "CRM & Newsletter-Integration (HubSpot / Brevo / Zapier)",
      "Mehrsprachigkeit (Deutsch / Englisch integriert)",
      "Erweitertes SEO & Schema Structured Data",
      "30 Tage kostenloser Post-Launch Support",
      "Lieferzeit: 3–5 Wochen",
    ],
    featuresEn: [
      "Up to 12 custom pages & content templates",
      "Headless CMS (Sanity / Contentful) for easy editing",
      "Full blog, case study & resource center",
      "Automated CRM & email lead sync (HubSpot / Brevo)",
      "Multilingual readiness (German / English i18n)",
      "Advanced SEO & rich snippet schema architecture",
      "30 days dedicated post-launch SLA support",
      "Delivery: 3–5 weeks",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    nameDe: "Custom Enterprise Web-App",
    nameEn: "Custom Enterprise Web App",
    badgeDe: "Maximale Skalierung",
    badgeEn: "Enterprise Scale",
    priceDe: "Individuelles Angebot",
    priceEn: "Custom Quote",
    descDe: "Vollwertige Web-Plattformen, SaaS-Lösungen, Kundenportale oder E-Commerce mit komplexen Backend-Workflows.",
    descEn: "Full-scale web applications, SaaS dashboards, customer portals, or headless e-commerce platforms.",
    featuresDe: [
      "Maßgeschneiderte Web-Applikation & SaaS Dashboard",
      "PostgreSQL / Supabase Datenbank-Architektur",
      "User-Authentifizierung (OAuth, Magic Link, RBAC)",
      "Stripe Abo-Abrechnung & Invoicing-Engine",
      "Maßgeschneiderte REST / GraphQL API-Endpoints",
      "Dedicated CI/CD Pipeline & Staging-Umgebung",
      "Enterprise SLA mit festen Reaktionszeiten",
      "Projekt-Roadmap nach Absprache",
    ],
    featuresEn: [
      "Custom web application & multi-tenant SaaS portal",
      "PostgreSQL / Supabase production database setup",
      "User authentication & granular role permissions",
      "Stripe recurring subscription & invoicing engine",
      "Custom REST / GraphQL API microservices",
      "Automated CI/CD staging & production pipelines",
      "Dedicated enterprise SLA & priority engineer access",
      "Milestone-based agile roadmap",
    ],
    popular: false,
  },
];

const faqs = [
  {
    qDe: "Warum setzt Nexa Solutions auf Next.js statt herkömmlichem WordPress?",
    qEn: "Why does Nexa Solutions use Next.js instead of legacy WordPress?",
    aDe: "Next.js bietet überlegene Ladezeiten (oft unter 0.5 Sekunden), unschlagbare Sicherheit (keine fehleranfälligen PHP-Plugins) und makellose Google-Rankings durch Server-Side-Rendering. Ihre Website bleibt wartungsarm, zukunftssicher und stürzt auch bei hohen Besucherzahlen niemals ab.",
    aEn: "Next.js delivers unmatched loading speeds (often sub-0.5s), impenetrable security (no vulnerable PHP plugins), and flawless Google search indexing via server-side rendering. Your website stays low-maintenance, bulletproof, and handles massive traffic surges without breaking a sweat.",
  },
  {
    qDe: "Kann ich Texte und Bilder nach dem Launch selbstständig bearbeiten?",
    qEn: "Can I edit content and images myself after the launch?",
    aDe: "Ja, absolut. Wir integrieren ein intuitives, visuelles Headless-CMS (wie Sanity oder Contentful). Damit können Sie Texte, Bilder, Blogbeiträge und Preise in Sekunden ändern – ganz ohne Programmierkenntnisse und ohne Gefahr zu laufen, das Design zu zerstören.",
    aEn: "Yes, 100%. We integrate an intuitive, visual headless CMS (such as Sanity or Contentful). You and your team can update copy, images, case studies, and pricing in seconds — with zero coding knowledge and zero risk of breaking the layout.",
  },
  {
    qDe: "Wie lange dauert ein typisches Web-Projekt von Beginn bis zum Go-Live?",
    qEn: "How long does a typical web project take from kickoff to go-live?",
    aDe: "Eine fokussierte Unternehmens-Website ist in der Regel in 2 bis 4 Wochen schlüsselfertig fertiggestellt. Größere Web-Applikationen oder E-Commerce-Systeme benötigen je nach Funktionsumfang etwa 4 bis 8 Wochen. Wir arbeiten in festen Sprints mit transparenten Meilensteinen.",
    aEn: "A focused corporate website is typically delivered turnkey within 2 to 4 weeks. Larger web applications or e-commerce suites take approximately 4 to 8 weeks depending on scope. We work in disciplined, transparent sprints with live staging access.",
  },
  {
    qDe: "Ist die Website zu 100% DSGVO-konform für den deutschen/europäischen Markt?",
    qEn: "Is the website 100% GDPR-compliant for the German and EU markets?",
    aDe: "Ja, ausnahmslos. Wir implementieren datenschutzkonforme Lösungen: Lokales Font-Hosting (keine unautorisierten Google-Fonts-Verbindungen), rechtssichere Cookie-Consent-Banner, Server-Hosting in der EU (Frankfurt) und verschlüsselte SSL-Übertragung nach deutschem Standard.",
    aEn: "Yes, without exception. We implement strict EU privacy standards: self-hosted fonts (zero unauthorized third-party tracking calls), legally sound cookie consent management, EU server hosting (Frankfurt nodes), and enterprise SSL encryption.",
  },
  {
    qDe: "Bieten Sie auch laufende Wartung, Updates und technischen Support an?",
    qEn: "Do you provide ongoing maintenance, updates, and technical SLA support?",
    aDe: "Selbstverständlich. Neben der initialen Übergabe und Teamschulung bieten wir flexible monatliche Betreuungspakete an. Diese umfassen Sicherheits-Monitoring, Performance-Checks, Backups sowie reservierte Entwickler-Stunden für neue Features.",
    aEn: "Of course. In addition to thorough team onboarding and documentation, we offer flexible monthly SLA maintenance packages. These cover continuous security monitoring, speed audits, backups, and reserved developer hours for feature additions.",
  },
  {
    qDe: "Wie läuft die Zusammenarbeit ab, wenn wir starten möchten?",
    qEn: "What is the process to get started on our web project?",
    aDe: "Sehr unkompliziert: Klicken Sie auf 'Kostenloses Angebot anfragen' oder schreiben Sie uns. In einem 20-minütigen unverbindlichen Erstgespräch klären wir Ihre Anforderungen und Sie erhalten innerhalb von 24 Stunden einen verbindlichen Festpreis-Kostenvoranschlag und Zeitplan.",
    aEn: "Extremely straightforward: Click 'Get a Free Quote' or reach out to us. In an informal 20-minute strategy call, we clarify your requirements and deliver a transparent fixed-price estimate and roadmap within 24 hours.",
  },
];

export default function WebDevelopmentPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("Website-Entwicklung");
  const [selectedTechCategory, setSelectedTechCategory] = useState("all");
  const [heroTab, setHeroTab] = useState<"preview" | "architecture" | "performance">("preview");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { t, lang } = useLanguage();

  const filteredTech = selectedTechCategory === "all"
    ? technologies
    : technologies.filter((t) => t.category === selectedTechCategory);

  const handleOpenContactWithPackage = (packageName: string) => {
    setSelectedPackage(`Web-Entwicklung: ${packageName}`);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => { setSelectedPackage("Website-Entwicklung"); setContactOpen(true); }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
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
            <span className="text-slate-500">{t("Services", "Services")}</span>
            <span className="text-slate-300">/</span>
            <span className="text-orange-600 font-semibold">{t("Website-Entwicklung", "Web Development")}</span>
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
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span>{t("Next-Gen Web Architecture • German Engineering", "Next-Gen Web Architecture • German Engineering")}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0F172A] tracking-tight leading-[1.12] mb-6">
                {t("Websites & Web-Apps, die ", "High-Performance Websites & ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                  {t("Besucher in Kunden", "Apps That Convert")}
                </span>{" "}
                {t("verwandeln.", "Visitors.")}
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                {t(
                  "Wir entwickeln maßgeschneiderte, ultra-schnelle Web-Plattformen mit Next.js 15, React und TypeScript. Perfekte Core Web Vitals, überragende SEO-Sichtbarkeit und modernste UX für maximales Unternehmenswachstum.",
                  "We engineer custom, ultra-fast web platforms with Next.js 15, React, and TypeScript. Flawless Core Web Vitals, unmatched Google rankings, and intuitive UX built for measurable business growth."
                )}
              </p>

              {/* Key Trust Signals Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-9">
                {[
                  { icon: Zap, label: t("0.4s Ladezeit", "0.4s Fast Load"), sub: "Lighthouse 98+" },
                  { icon: ShieldCheck, label: t("100% DSGVO", "100% GDPR"), sub: t("Server in Frankfurt", "EU Hosted") },
                  { icon: BarChart3, label: t("2-4x Conversion", "2-4x Conversion"), sub: t("Messbarer ROI", "Measurable ROI") },
                  { icon: Clock, label: t("2–4 Wochen", "2–4 Weeks"), sub: t("Bis zum Launch", "Turnkey Launch") },
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

              {/* Call-to-actions */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => { setSelectedPackage("Website-Entwicklung Beratung"); setContactOpen(true); }}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{t("Kostenloses Angebot anfragen", "Request a Free Quote")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-slate-300/90 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all duration-200 shadow-sm"
                >
                  <Sliders className="w-4 h-4 text-slate-500" />
                  <span>{t("Pakete & Preise ansehen", "View Packages & Pricing")}</span>
                </Link>
              </div>
            </motion.div>

            {/* Hero Right Visual: Interactive Interactive Browser / Tech Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
                  <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full text-[11px] font-mono text-slate-300">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>nexasolutions.de/live-app</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                    98+ Score
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
                    {t("Live Web Preview", "Live Preview")}
                  </button>
                  <button
                    onClick={() => setHeroTab("performance")}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      heroTab === "performance"
                        ? "bg-orange-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {t("Lighthouse Audit", "Performance")}
                  </button>
                  <button
                    onClick={() => setHeroTab("architecture")}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      heroTab === "architecture"
                        ? "bg-orange-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {t("Stack Architektur", "Architecture")}
                  </button>
                </div>

                {/* Tab 1: Live Web Preview */}
                {heroTab === "preview" && (
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[4/3] flex flex-col justify-between p-5 text-white">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                          Next.js 15 App Router
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 100% Validated
                        </span>
                      </div>
                      <h4 className="text-lg font-bold leading-snug">
                        {t("Enterprise B2B Web-Portal mit Echtzeit-Dashboard", "Enterprise B2B Web Portal with Real-Time Dashboard")}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t(
                          "Auslieferung über globale Edge-Server in unter 0.4s mit automatischem SEO Structured Data.",
                          "Delivered via global edge nodes under 0.4s with automatic rich snippet SEO data."
                        )}
                      </p>
                    </div>

                    {/* Interactive metric highlight */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/80">
                      <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/50">
                        <div className="text-lg font-black text-orange-400">0.38s</div>
                        <div className="text-[10px] text-slate-400">First Contentful Paint</div>
                      </div>
                      <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/50">
                        <div className="text-lg font-black text-emerald-400">100/100</div>
                        <div className="text-[10px] text-slate-400">SEO & Core Vitals</div>
                      </div>
                      <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/50">
                        <div className="text-lg font-black text-sky-400">+280%</div>
                        <div className="text-[10px] text-slate-400">Conversion Uplift</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Lighthouse Audit */}
                {heroTab === "performance" && (
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 aspect-[4/3] flex flex-col justify-center p-6 text-white">
                    <div className="text-center mb-5">
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                        Google Lighthouse 10.0 Verification
                      </span>
                      <h4 className="text-base font-bold text-white mt-1">
                        {t("Offizielle Performance-Bewertung", "Official Performance Benchmark")}
                      </h4>
                    </div>

                    <div className="grid grid-cols-4 gap-3 text-center">
                      {[
                        { score: "100%", label: "Performance", color: "text-emerald-400", border: "border-emerald-500/30" },
                        { score: "100%", label: "Accessibility", color: "text-emerald-400", border: "border-emerald-500/30" },
                        { score: "100%", label: "Best Practices", color: "text-emerald-400", border: "border-emerald-500/30" },
                        { score: "100%", label: "SEO", color: "text-emerald-400", border: "border-emerald-500/30" },
                      ].map((item) => (
                        <div key={item.label} className={`p-3 rounded-2xl bg-slate-800/60 border ${item.border}`}>
                          <div className={`text-2xl font-black ${item.color}`}>{item.score}</div>
                          <div className="text-[10px] text-slate-300 font-medium mt-1 leading-tight">{item.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between text-xs text-slate-400 bg-slate-800/40 p-3 rounded-xl border border-slate-700/40">
                      <span>Server-Side Rendered (SSR)</span>
                      <span className="text-emerald-400 font-mono">0 Cumulative Layout Shift</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Stack Architecture */}
                {heroTab === "architecture" && (
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 aspect-[4/3] flex flex-col justify-between p-5 text-white">
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                      {t("Enterprise Full-Stack Pipeline", "Enterprise Full-Stack Pipeline")}
                    </span>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="font-semibold text-slate-200">1. Edge Layer</span>
                        <span className="text-orange-400 font-mono">Vercel Global CDN + SSL</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="font-semibold text-slate-200">2. App Framework</span>
                        <span className="text-sky-400 font-mono">Next.js 15 React Server Comps</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="font-semibold text-slate-200">3. Data & Auth</span>
                        <span className="text-emerald-400 font-mono">PostgreSQL / Supabase / Prisma</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="font-semibold text-slate-200">4. Headless CMS</span>
                        <span className="text-purple-400 font-mono">Sanity / Contentful i18n</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400">
                      {t(
                        "Skalierbar von 100 bis 10.000.000 monatlichen Seitenaufrufen ohne Serverabsturz.",
                        "Scales from 100 to 10,000,000 monthly hits without server degradation."
                      )}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-10 sm:py-12 lg:py-16  bg-white border-t border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>{t("LEISTUNGEN IM DETAIL", "OUR CORE CAPABILITIES")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight mb-4">
              {t("Maßgeschneiderte Web-Lösungen für jedes Wachstumsziel", "Tailored Web Solutions for Every Business Stage")}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t(
                "Kein generisches Baukastensystem. Jede Zeile Code wird exakt auf Ihre geschäftlichen Workflows und Conversion-Ziele abgestimmt.",
                "Zero generic templates. Every line of code is tailored to your exact business workflows and conversion metrics."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl border border-slate-200/90 bg-slate-50/40 p-8 sm:p-10 hover:border-orange-300 hover:bg-orange-50/20 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 text-orange-600 inline-flex items-center justify-center mb-6 shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      {t(service.titleDe, service.titleEn)}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {t(service.descDe, service.descEn)}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/70">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(lang === "de" ? service.featuresDe : service.featuresEn).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison: Nexa Solutions vs. Legacy Agencies */}
      <section className="py-10 sm:py-12 lg:py-16  bg-slate-50/70">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
              <Gauge className="w-3.5 h-3.5 text-orange-500" />
              <span>{t("DER UNTERSCHIED", "THE NEXA ADVANTAGE")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight mb-4">
              {t("Warum moderne Marktführer Next.js wählen", "Why Industry Leaders Choose Next.js Over Legacy Tech")}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t(
                "Ein direkter Vergleich zwischen zukunftssicherer Full-Stack-Entwicklung und veralteten WordPress-Themes.",
                "A direct comparison between modern edge engineering and slow, vulnerable traditional web templates."
              )}
            </p>
          </div>

          {/* Responsive Comparison Table */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60">
                    <th className="py-4 px-6 text-sm font-bold text-slate-700 w-1/3">
                      {t("Kriterium", "Feature Benchmark")}
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-orange-600 bg-orange-50/50 w-1/3">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        Nexa Solutions (Next.js 15)
                      </span>
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-slate-500 w-1/3">
                      {t("Klassische Agenturen (WordPress)", "Legacy Agencies (WordPress / CMS)")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-slate-900">
                        {t(row.featureDe, row.featureEn)}
                      </td>
                      <td className="py-5 px-6 text-slate-800 bg-orange-50/20 font-medium">
                        <span className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{t(row.nexaDe, row.nexaEn)}</span>
                        </span>
                      </td>
                      <td className="py-5 px-6 text-slate-500">
                        <span className="flex items-start gap-2">
                          <XIcon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{t(row.othersDe, row.othersEn)}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Interactive Grid */}
      <section className="py-10 sm:py-12 lg:py-16  bg-[#0F172A] text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t("DER TECH STACK", "CUTTING-EDGE TECH STACK")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              {t("Ausgewählt für maximale Geschwindigkeit & Zuverlässigkeit", "Engineered for Extreme Speed & Limitless Scale")}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t(
                "Kein unnötiger Ballast. Wir nutzen die führenden Industriestandards für moderne Softwareentwicklung.",
                "Zero bloated code. We leverage modern industry frameworks favored by high-growth unicorns."
              )}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedTechCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedTechCategory === cat.id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {t(cat.labelDe, cat.labelEn)}
              </button>
            ))}
          </div>

          {/* Tech Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`p-4 rounded-2xl border transition-all duration-200 ${
                  tech.highlight
                    ? "bg-slate-900/90 border-orange-500/40 hover:border-orange-500 shadow-sm"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-sm text-white">{tech.name}</span>
                  {tech.highlight && (
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                  )}
                </div>
                <span className="text-[11px] font-mono text-slate-400 block">{tech.tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section id="process" className="py-10 sm:py-12 lg:py-16  bg-white border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
              <Rocket className="w-3.5 h-3.5" />
              <span>{t("UNSER ABLAUF", "OUR AGILE PROCESS")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight mb-4">
              {t("Vom Kickoff bis zum Live-Gang in 4 klaren Schritten", "From Kickoff to Go-Live in 4 Structured Steps")}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t(
                "Kein Rätselraten, keine Verzögerungen. Sie erhalten jede Woche einen klaren Zwischenstand und Staging-Zugang.",
                "Zero guesswork, zero unexpected delays. Transparent weekly sprints with direct staging links."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl p-7 bg-slate-50/60 border border-slate-200/90 hover:border-orange-300 hover:bg-orange-50/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-orange-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-orange-500/20">
                      {step.step}
                    </span>
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-100/70 px-2.5 py-1 rounded-full">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {t(step.titleDe, step.titleEn)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(step.descDe, step.descEn)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("REFERENZEN", "FEATURED WORK")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                {t("Erfolgreich gelaunchte Web-Projekte", "Proven Real-World Case Studies")}
              </h2>
            </div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
            >
              <span>{t("Alle Projekte ansehen", "View All Projects")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Aura Masale",
                category: t("E-Commerce & Brand Platform", "E-Commerce & Brand Platform"),
                metric: "+320% Online-Umsatz",
                descDe: "Headless E-Commerce Plattform mit Sub-Sekunden Produktkatalog und dynamischem Warenkorb.",
                descEn: "Headless e-commerce platform with sub-second browsing and lightning-fast checkout.",
                image: "/images/aura-masale.jpg",
                tags: ["Next.js", "Stripe", "Tailwind"],
              },
              {
                title: "Meagle B2B Portal",
                category: t("SaaS & Kundenportal", "SaaS & Client Portal"),
                metric: "0.4s Ladezeit",
                descDe: "Cloud-Portal für B2B-Kunden mit Rollenverwaltung und automatisierter PDF-Rechnungserstellung.",
                descEn: "Cloud client dashboard with role permissions and automated invoicing pipeline.",
                image: "/images/meagle-laptop.jpg",
                tags: ["React", "PostgreSQL", "Supabase"],
              },
              {
                title: "EasyWay Germany",
                category: t("Corporate Service Portal", "Corporate Service Portal"),
                metric: "99+ Lighthouse Score",
                descDe: "Mehrsprachiges Serviceportal für internationale Fachkräfte mit Dokumenten-Upload.",
                descEn: "Multilingual service portal for skilled professionals with automated document routing.",
                image: "/images/easyway-germany.jpg",
                tags: ["Next.js", "i18n", "Framer Motion"],
              },
            ].map((proj, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-slate-700/60">
                    {proj.metric}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide block mb-1">
                      {proj.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{proj.title}</h3>
                    <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                      {t(proj.descDe, proj.descEn)}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages Section */}
      <section id="pricing" className="py-10 sm:py-12 lg:py-16  bg-white border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>{t("TRANSPARENTE PAKETE", "TRANSPARENT INVESTMENT")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight mb-4">
              {t("Feste Preise, kalkulierbare Meilensteine", "Predictable Milestones, Turnkey Packages")}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t(
                "Wählen Sie das passende Modell für Ihr Vorhaben. Alle Pakete beinhalten persönliche Beratung und Code-Übergabe.",
                "Choose the right plan for your scope. All packages include dedicated engineering and full IP ownership."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? "bg-slate-900 text-white shadow-2xl border-2 border-orange-500 scale-[1.02] lg:-translate-y-2"
                    : "bg-slate-50/70 text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-black tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md">
                    {t(pkg.badgeDe, pkg.badgeEn)}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        pkg.popular ? "text-orange-400" : "text-orange-600"
                      }`}
                    >
                      {t(pkg.nameDe, pkg.nameEn)}
                    </span>
                    {!pkg.popular && (
                      <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full">
                        {t(pkg.badgeDe, pkg.badgeEn)}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">
                      {t(pkg.priceDe, pkg.priceEn)}
                    </span>
                  </div>

                  <p
                    className={`text-sm mb-8 leading-relaxed ${
                      pkg.popular ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {t(pkg.descDe, pkg.descEn)}
                  </p>

                  <div className="space-y-3 mb-8">
                    {(lang === "de" ? pkg.featuresDe : pkg.featuresEn).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-medium">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.popular ? "text-orange-400" : "text-emerald-600"
                          }`}
                        />
                        <span className={pkg.popular ? "text-slate-200" : "text-slate-700"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenContactWithPackage(lang === "de" ? pkg.nameDe : pkg.nameEn)}
                  className={`w-full py-3.5 px-6 rounded-full text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? "bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>{t("Dieses Paket anfragen", "Select This Package")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-12 lg:py-16  bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
              <span>{t("HÄUFIG GESTELLTE FRAGEN", "FAQ")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
              {t("Alles, was Sie vor dem Projektstart wissen müssen", "Everything You Need to Know Before Starting")}
            </h2>
            <p className="text-slate-600 text-base">
              {t(
                "Transparente Antworten auf die wichtigsten technischen und organisatorischen Fragen.",
                "Transparent answers to key technical, delivery, and contractual inquiries."
              )}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer gap-4"
                >
                  <span className="text-base font-bold text-slate-900">
                    {t(faq.qDe, faq.qEn)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {t(faq.aDe, faq.aEn)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-10 sm:py-12 lg:py-16  bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
        {/* Glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-wider uppercase mb-5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t("BEREIT FÜR DEN NÄCHSTEN SCHRITT?", "READY TO ELEVATE YOUR WEB PRESENCE?")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            {t("Lassen Sie uns Ihre neue Website planen.", "Let's build something extraordinary together.")}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-9 max-w-2xl mx-auto">
            {t(
              "Buchen Sie ein unverbindliches 20-minütiges Strategiegespräch. Wir analysieren Ihre aktuelle Website und zeigen konkrete Hebel für mehr Ladezeit und Conversions auf.",
              "Schedule an informal 20-minute strategy call. We'll audit your current web presence and outline actionable steps for superior speed and conversion growth."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => { setSelectedPackage("Website-Entwicklung Beratung"); setContactOpen(true); }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold transition-all duration-300 shadow-xl shadow-orange-600/30 hover:scale-105 cursor-pointer"
            >
              <span>{t("Kostenlose Beratung anfragen", "Book a Free Consultation")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/4915213233841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-all duration-200 border border-white/15"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Guarantee pill */}
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {t("Kostenlos & unverbindlich", "100% Free & No-Obligation")}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-400" />
              {t("Angebot in unter 24 Std.", "Fixed Proposal Within 24h")}
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={selectedPackage}
      />
    </div>
  );
}
