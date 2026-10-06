"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Layers,
  Cpu,
  ShieldCheck,
  ChevronDown,
  Star,
  Zap,
  BarChart3,
  MessageSquare,
  FileSearch,
  Rocket,
  ArrowLeft,
  Workflow,
  Sparkles,
  Sliders,
  Check,
  Play,
  RotateCcw,
  Database,
  Lock,
  Network,
  PhoneCall,
  Clock,
  Coins,
  Server,
  FileText,
  UserCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

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
        className="text-purple-600 hover:text-purple-700 underline font-semibold transition-colors"
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

const techStack = [
  { name: "n8n", category: "Orchestration", note: "Self-Hosted & Scalable", highlight: true },
  { name: "OpenAI GPT-4o", category: "LLM", note: "Reasoning & Extraction", highlight: true },
  { name: "Anthropic Claude 3.7", category: "LLM", note: "Complex Documents", highlight: true },
  { name: "DeepSeek / Llama 3", category: "Open-Source LLM", note: "100% On-Premise", highlight: true },
  { name: "LangChain / LangGraph", category: "Agent Framework", note: "Multi-Agent Swarms", highlight: false },
  { name: "FastAPI / Python", category: "Backend", note: "Custom Microservices", highlight: false },
  { name: "Pinecone / Weaviate", category: "Vector DB", note: "Semantic RAG Search", highlight: true },
  { name: "Supabase Vector", category: "Database", note: "PostgreSQL pgvector", highlight: false },
  { name: "Docker", category: "DevOps", note: "Containerized Workflows", highlight: false },
  { name: "Zapier / Make", category: "Integrations", note: "Cloud Connector", highlight: false },
  { name: "DATEV / Sevdesk", category: "ERP Sync", note: "Automated Bookkeeping", highlight: false },
  { name: "HubSpot / Salesforce", category: "CRM", note: "Bi-directional Lead Sync", highlight: false },
];

const automationSolutions = [
  {
    icon: MessageSquare,
    titleDe: "24/7 Autonome KI-Kundensupport-Agenten",
    titleEn: "24/7 Autonomous AI Customer Support",
    descDe:
      "Intelligente Support-Bots, die auf Basis Ihrer echten Wissensdatenbank präzise antworten. Löst über 75% aller Standard-Tickets sofort – nahtlos integrierbar in Ihre [Webentwicklung für Unternehmen](/services/web-development) oder [mobile Apps](/services/mobile-app-development).",
    descEn:
      "Intelligent support agents answering inquiries using your proprietary knowledge base, FAQs, and manuals. Resolves over 75% of incoming tickets instantly with seamless human escalation.",
    featuresDe: [
      "Vektor-Suche (RAG) auf Unternehmensdaten",
      "Mehrsprachig (über 50 Sprachen fließend)",
      "Zendesk, Intercom, WhatsApp & E-Mail",
      "Stimmungsanalyse & Eskalationslogik",
    ],
    featuresEn: [
      "Vector search (RAG) over company documents",
      "Fluent in 50+ languages natively",
      "Zendesk, Intercom, WhatsApp & email sync",
      "Sentiment analysis & smart human escalation",
    ],
  },
  {
    icon: FileSearch,
    titleDe: "Intelligente Dokumenten- & Rechnungsverarbeitung",
    titleEn: "Document & Invoice Extraction Engine",
    descDe:
      "Automatisches Auslesen, Validieren und Verarbeiten von Rechnungen, Lieferscheinen, Verträgen und Formularen. Daten werden fehlerfrei extrahiert und direkt an Ihre Buchhaltung (DATEV, Sevdesk, Lexoffice) übertragen.",
    descEn:
      "Automated extraction, validation, and posting of PDF invoices, delivery notes, and contracts. Structured data is verified and exported directly into DATEV, Sevdesk, or your ERP.",
    featuresDe: [
      "OCR + LLM-gestützte Extraktion",
      "Automatischer Abgleich mit Bestellungen",
      "DATEV, Sevdesk & SAP Schnittstellen",
      "Prüfung von IBAN, USt-IdNr. & Beträgen",
    ],
    featuresEn: [
      "OCR + LLM-powered table extraction",
      "Automatic line-item PO matching",
      "DATEV, Sevdesk & SAP export formats",
      "Verification of VAT IDs, IBANs, and totals",
    ],
  },
  {
    icon: UserCheck,
    titleDe: "Lead-Qualifizierung & CRM-Automatisierung",
    titleEn: "Lead Qualification & Automated CRM Routing",
    descDe:
      "Sobald ein Interessent anfragt, reichert die KI den Kontakt mit Unternehmensdaten an und berechnet einen Lead-Score. Erfahren Sie mehr über [CRM Lead-Automatisierung mit n8n](/blog/crm-lead-automation-n8n) für automatisierte Erstgespräche.",
    descEn:
      "When a prospect submits an inquiry, AI enriches the contact with firmographic data, calculates a qualification score, and routes them to the ideal calendar slot.",
    featuresDe: [
      "Automatisches LinkedIn- & Web-Enrichment",
      "Priorisierung nach Kaufwahrscheinlichkeit",
      "HubSpot, Pipedrive & Salesforce Sync",
      "Personalisierte E-Mail Erstansprache",
    ],
    featuresEn: [
      "Automated company & LinkedIn enrichment",
      "Prioritization by conversion probability",
      "HubSpot, Pipedrive & Salesforce sync",
      "Personalized follow-up drafts in seconds",
    ],
  },
  {
    icon: Workflow,
    titleDe: "End-to-End Workflow-Orchestrierung mit n8n",
    titleEn: "End-to-End Workflow Orchestration (n8n)",
    descDe:
      "Verbinden Sie Insellösungen zu stabilen Prozessen ohne Task-Gebühren. Mehr dazu in unserem Guide zu [KI-Automatisierung für Unternehmen](/blog/ki-automatisierung-unternehmen-2026).",
    descEn:
      "Connect isolated SaaS tools (email, Google Workspace, ERP, Slack, CRM) into self-healing workflows. Self-hosted on your cloud to eliminate bloated SaaS task fees.",
    featuresDe: [
      "Self-hosted auf deutschem Server",
      "Keine Limitierung bei monatlichen Ausführungen",
      "Fehlertolerante Retry-Logik & Alerts",
      "Visuelle Workflow-Oberfläche für Ihr Team",
    ],
    featuresEn: [
      "Self-hosted on secure German servers",
      "No artificial monthly execution caps",
      "Fault-tolerant auto-retry and alerts",
      "Visual workflow canvas accessible to team",
    ],
  },
  {
    icon: Database,
    titleDe: "Interner Unternehmens-Copilot (Private AI)",
    titleEn: "Private Internal Knowledge Copilot",
    descDe:
      "Ein privates ChatGPT für Ihre Mitarbeiter, das auf interne Dokumente, SOPs, Richtlinien und Projektarchive zugreift. Neue Mitarbeiter werden in Minuten eingearbeitet, Wissensverlust wird verhindert.",
    descEn:
      "A private internal ChatGPT trained exclusively on your SOPs, employee handbooks, and client records. Onboards new hires in minutes and preserves institutional knowledge.",
    featuresDe: [
      "100% DSGVO-konform ohne OpenAI-Training",
      "Rollenbasierte Berechtigungen (Admin/Team)",
      "Verbindung zu Notion, Sharepoint & Google Drive",
      "Quellenangabe mit Seitenzahl für jede Antwort",
    ],
    featuresEn: [
      "100% GDPR compliant with zero model training",
      "Role-based document access controls",
      "Live sync with Notion, Sharepoint & Drive",
      "Citations with exact document page numbers",
    ],
  },
  {
    icon: BarChart3,
    titleDe: "Automatisierte Dashboards & BI-Reporting",
    titleEn: "Automated Executive Reporting & BI",
    descDe:
      "Schluss mit manuellem Excel-Copy-Paste. Unsere Workflows ziehen Kennzahlen aus Marketing, Vertrieb und Finanzen zusammen und generieren wöchentliche Management-Summaries per E-Mail oder Slack.",
    descEn:
      "Eliminate repetitive spreadsheet copying. Our pipelines aggregate metrics across sales, marketing, and operations to deliver executive summaries via Slack or PDF.",
    featuresDe: [
      "Automatischer Datenabzug aus Ads, Stripe & ERP",
      "KI-generierte Handlungsempfehlungen",
      "Geplante Reports jeden Montag um 08:00 Uhr",
      "Anomalie-Erkennung bei Budget-Abweichungen",
    ],
    featuresEn: [
      "Automated extraction from Ads, Stripe & ERP",
      "AI-synthesized key takeaways & advice",
      "Scheduled executive briefs every Monday",
      "Anomaly detection on unexpected KPI dips",
    ],
  },
];

const privacyGuarantees = [
  {
    titleDe: "Zero-Data-Retention Garantie",
    titleEn: "Zero-Data-Retention Guarantee",
    descDe: "Ihre Unternehmens- und Kundendaten werden niemals zum Trainieren öffentlicher KI-Modelle verwendet.",
    descEn: "Your enterprise and client data is never utilized to train public AI models.",
  },
  {
    titleDe: "Hosting in Deutschland & der EU",
    titleEn: "Hosted in Germany & EU",
    descDe: "n8n-Server, Datenbanken und Vektorspeicher laufen auf ISO-zertifizierten Rechenzentren in Frankfurt.",
    descEn: "n8n servers, databases, and vector stores run on ISO-certified data centers in Frankfurt.",
  },
  {
    titleDe: "Open-Source & On-Premise Option",
    titleEn: "Open-Source & On-Premise Option",
    descDe: "Für hochsensible Branchen betreiben wir vollständig lokale Modelle (Llama 3, DeepSeek) auf Ihrer Hardware.",
    descEn: "For strictly regulated sectors, we deploy fully air-gapped models (Llama 3, DeepSeek) on your servers.",
  },
  {
    titleDe: "Rechtssichere AV-Verträge (DSGVO)",
    titleEn: "Legally Binding GDPR DPA",
    descDe: "Sie erhalten vollständige Auftragsverarbeitungsverträge und Datenschutz-Dokumentationen für Ihre Compliance.",
    descEn: "Full data processing agreements (DPAs) and compliance documentation provided for your legal department.",
  },
];

const processSteps = [
  {
    step: "01",
    phase: "Tag 1–5",
    titleDe: "Prozess-Audit & ROI-Analyse",
    titleEn: "Process Audit & ROI Assessment",
    descDe:
      "Wir analysieren Ihre wiederkehrenden Arbeitsabläufe, quantifizieren den Zeitaufwand in Stunden und identifizieren die Prozesse mit dem schnellsten Return on Investment.",
    descEn:
      "We inspect your repetitive operational workflows, quantify team hours spent, and pinpoint high-impact processes yielding the fastest return on investment.",
  },
  {
    step: "02",
    phase: "Woche 2",
    titleDe: "Proof-of-Concept & Architektur",
    titleEn: "Proof-of-Concept & Flow Architecture",
    descDe:
      "Wir erstellen einen funktionierenden Prototyp des Workflows. Sie sehen live, wie Daten verarbeitet und Entscheidungen von der KI getroffen werden, bevor der Rollout erfolgt.",
    descEn:
      "We assemble a working proof-of-concept. You watch live how data moves, extracts, and resolves through the AI nodes before company-wide rollout.",
  },
  {
    step: "03",
    phase: "Woche 3–4",
    titleDe: "Production Rollout & Schulung",
    titleEn: "Production Rollout & Staff Enablement",
    descDe:
      "Einbettung in Ihre Produktivsysteme, Einrichtung von Fehler-Alerts und praxisnahe Schulung Ihres Teams für den reibungslosen Alltagseinsatz.",
    descEn:
      "Live integration into production tools, automated alerting pipelines, and hands-on staff onboarding for confident day-to-day operation.",
  },
  {
    step: "04",
    phase: "Laufend",
    titleDe: "Monitoring, Optimierung & Support",
    titleEn: "Active Monitoring & Ongoing Tuning",
    descDe:
      "Wir überwachen die Ausführungsraten, optimieren Token-Kosten und passen die Workflows an neue Modellgenerationen (GPT-5, Claude Updates) an.",
    descEn:
      "We track execution logs, optimize token overhead, and proactively upgrade prompts when newer model versions become available.",
  },
];

const packages = [
  {
    id: "quickwin",
    nameDe: "Quick-Win Automation",
    nameEn: "Quick-Win Automation",
    badgeDe: "Schnellster Start",
    badgeEn: "Fastest ROI",
    priceDe: "ab 1.890 €",
    priceEn: "from €1,890",
    descDe: "Ideal zur Automatisierung eines zentralen Engpasses (z.B. Rechnungs-Parsing oder Lead-Verteilung).",
    descEn: "Designed to eliminate one major repetitive bottleneck (e.g., invoice processing or lead routing).",
    featuresDe: [
      "1 vollautomatisierter n8n End-to-End Workflow",
      "Anbindung von bis zu 3 Tools (z.B. Mail + Excel + Slack)",
      "KI-Extraktion mit GPT-4o oder Claude 3.5",
      "Fehler-Benachrichtigungen via Slack / Teams",
      "DSGVO-konforme Dokumentation",
      "Lieferzeit: 1–2 Wochen",
    ],
    featuresEn: [
      "1 fully automated n8n end-to-end workflow",
      "Integration of up to 3 business tools (e.g. Email + Sheets + Slack)",
      "AI data extraction with GPT-4o or Claude 3.5",
      "Instant error alerts via Slack or Microsoft Teams",
      "GDPR compliance documentation",
      "Delivery: 1–2 weeks",
    ],
    popular: false,
  },
  {
    id: "department",
    nameDe: "Department AI Suite",
    nameEn: "Department AI Suite",
    badgeDe: "Meistgebucht",
    badgeEn: "Most Popular",
    priceDe: "ab 3.890 €",
    priceEn: "from €3,890",
    descDe: "Ganzheitliche Automatisierung einer Abteilung (Vertrieb, Kundensupport oder Finanzwesen).",
    descEn: "Holistic automation of an entire business division (Sales, Customer Support, or Operations).",
    featuresDe: [
      "Bis zu 4 vernetzte n8n-Workflows",
      "KI-Kundensupport Bot oder Interner Dokumenten-Assistent",
      "Vektordatenbank (Pinecone / Supabase) für RAG-Wissen",
      "CRM-Integration (HubSpot / Pipedrive / Salesforce)",
      "DATEV / ERP-Export für Rechnungsstellung",
      "Team-Schulung & Video-Dokumentation",
      "30 Tage Priority Monitoring inklusive",
      "Lieferzeit: 3–4 Wochen",
    ],
    featuresEn: [
      "Up to 4 interconnected n8n workflows",
      "AI customer support agent or internal doc assistant",
      "Vector database (Pinecone / Supabase) for RAG",
      "Bi-directional CRM sync (HubSpot / Salesforce)",
      "Automated DATEV / ERP invoice processing",
      "Dedicated team training & video documentation",
      "30 days priority monitoring & maintenance",
      "Delivery: 3–4 weeks",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    nameDe: "Enterprise Agent Platform",
    nameEn: "Enterprise Agent Platform",
    badgeDe: "Autonome Infrastruktur",
    badgeEn: "Enterprise Infrastructure",
    priceDe: "Individuelles Angebot",
    priceEn: "Custom Quote",
    descDe: "Maßgeschneiderte autonome Multi-Agent-Systeme, On-Premise LLM-Cluster und Enterprise SLA.",
    descEn: "Custom multi-agent swarms, air-gapped on-premise LLM clusters, and contractual enterprise SLAs.",
    featuresDe: [
      "Unbegrenzte Workflow-Architektur & Agenten",
      "Option auf 100% On-Premise LLMs (Llama 3 / DeepSeek)",
      "Multi-Agent LangGraph Swarms mit Entscheidungslogik",
      "Custom Python / FastAPI Microservices",
      "Dedicated Server-Infrastruktur in Frankfurt",
      "Enterprise SLA mit festen Reaktionszeiten",
      "Quartalsweise Strategie-Reviews & Upgrades",
    ],
    featuresEn: [
      "Unlimited custom workflow architecture & agents",
      "Option for 100% on-premise LLM execution",
      "Autonomous LangGraph multi-agent decision systems",
      "Custom Python / FastAPI backend microservices",
      "Dedicated isolated cloud infrastructure in Frankfurt",
      "Enterprise SLA with contractual response times",
      "Quarterly strategy audits & performance upgrades",
    ],
    popular: false,
  },
];

const faqs = [
  {
    qDe: "Wie sicher sind unsere vertraulichen Kundendaten bei KI-Automatisierungen?",
    qEn: "How secure is our proprietary business data when using AI automations?",
    aDe: "Sicherheit steht bei uns an erster Stelle. Wir nutzen ausschließlich Schnittstellen mit verbindlicher Zero-Data-Retention und hosten auf ISO-zertifizierten deutschen Servern. Lesen Sie dazu unseren Leitfaden für [DSGVO-konforme KI-Infrastruktur](/blog/dsgvo-konforme-ki-infrastruktur).",
    aEn: "Security is non-negotiable. We exclusively employ enterprise commercial API endpoints with legally binding Zero Data Retention commitments: your inputs are never stored or used to train public models. Furthermore, we host n8n engines on German ISO-certified data centers and offer on-premise air-gapped LLMs.",
  },
  {
    qDe: "Warum n8n statt Zapier oder Make.com?",
    qEn: "Why do you recommend n8n over Zapier or Make.com?",
    aDe: "Zapier und Make werden bei tausenden Ausführungen extrem teuer, da pro Task abgerechnet wird. n8n ist Open-Source und kann auf eigenen Servern betrieben werden: Das bedeutet unbegrenzte Workflows und Ausführungen ohne steigende Monatsgebühren, volle Datenkontrolle in Deutschland und deutlich höhere Ausführungsgeschwindigkeiten.",
    aEn: "Zapier and Make become prohibitively expensive at scale due to per-task billing models. n8n is open-source and deployable on private infrastructure: this enables unlimited executions without ballooning SaaS bills, full GDPR data sovereignty in Frankfurt, and vastly faster processing times.",
  },
  {
    qDe: "Braucht unser Team technisches Vorwissen, um die Automatisierungen zu nutzen?",
    qEn: "Does our internal team need programming skills to manage the automations?",
    aDe: "Nein. Wir bauen die Automatisierungen so auf, dass sie nahtlos im Hintergrund Ihrer gewohnten Programme (E-Mail, WhatsApp, Slack, CRM) laufen. Für notwendige Anpassungen erhalten Sie eine intuitive visuelle Übersicht und eine ausführliche Videoschulung.",
    aEn: "No. We architect all workflows to execute silently behind your team's familiar tools (Email, WhatsApp, Slack, CRM). For any necessary adjustments, you receive an intuitive visual interface and comprehensive recorded video onboarding.",
  },
  {
    qDe: "Wie schnell amortisiert sich die Investition in KI-Workflows (ROI)?",
    qEn: "How fast do companies achieve a positive return on investment (ROI)?",
    aDe: "In den meisten mittelständischen Unternehmen amortisiert sich ein Quick-Win-Workflow in unter 30 Tagen. Wenn ein Mitarbeiter beispielsweise 10 Stunden pro Woche an manueller Datenübertragung spart, entspricht dies einer monatlichen Ersparnis von über 1.500 € – dauerhaft.",
    aEn: "Most mid-sized businesses reach full payback within 30 to 45 days. Saving just one employee 10 hours per week in manual copy-pasting translates directly into recurring savings exceeding €1,500 every single month.",
  },
  {
    qDe: "Können bestehende Systeme wie DATEV, SAP oder eigene SQL-Datenbanken angebunden werden?",
    qEn: "Can our existing legacy systems like DATEV, SAP, or on-premise SQL databases connect?",
    aDe: "Ja. n8n unterstützt über 400 native Integrationen und universelle Webhooks/REST-APIs. Sie können in [unseren Projekten](/projects) sehen, wie wir Systeme vernetzen, oder direkt mit uns [Kontakt aufnehmen](/contact).",
    aEn: "Yes. n8n provides over 400 native connectors alongside universal Webhooks and REST/GraphQL capabilities. We easily bridge legacy ERPs via SFTP, CSV exports, direct SQL queries, and sync them effortlessly into modern AI pipelines.",
  },
];

export default function AIAutomationPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("KI-Automatisierung");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Workflow Simulation State
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<"support" | "invoice" | "leads">("support");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  // Interactive ROI Calculator State
  const [calcEmployees, setCalcEmployees] = useState(5);
  const [calcHoursPerWeek, setCalcHoursPerWeek] = useState(12);
  const [calcHourlyRate, setCalcHourlyRate] = useState(45);

  const { t, lang } = useLanguage();

  // ROI math
  const monthlyHoursSaved = Math.round(calcEmployees * calcHoursPerWeek * 4.33 * 0.75);
  const monthlyCostSaved = Math.round(monthlyHoursSaved * calcHourlyRate);
  const yearlyCostSaved = monthlyCostSaved * 12;

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(1);

    setTimeout(() => setSimulationStep(2), 700);
    setTimeout(() => setSimulationStep(3), 1400);
    setTimeout(() => {
      setSimulationStep(4);
      setIsSimulating(false);
    }, 2100);
  };

  const handleOpenContactWithPackage = (pkgName: string) => {
    setSelectedPackage(`KI-Automatisierung: ${pkgName}`);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-[#0F172A] selection:bg-purple-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => { setSelectedPackage("KI-Automatisierung"); setContactOpen(true); }} />

      {/* Hero Section - Clean Light Palette */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-slate-50/40">
        {/* Soft glowing ambient lights */}
        <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-purple-200/40 via-violet-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-orange-100/30 via-pink-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

        {/* Clean subtle dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />

        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link
              href="/"
              className="hover:text-purple-600 transition-colors flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("Startseite", "Home")}
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{t("Services", "Services")}</span>
            <span className="text-slate-300">/</span>
            <span className="text-purple-600 font-semibold">{t("KI & Automatisierung", "AI & Automation")}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              {/* Eyebrow Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                  </span>
                  <span>{t("Autonomous Agents • n8n Workflows • 100% DSGVO", "Autonomous Agents • n8n Workflows • 100% GDPR")}</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-[35px] sm:text-[55px] lg:text-[60px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 sm:mb-6 text-center lg:text-left">
                {t("Verwandeln Sie manuelle Arbeit in ", "Turn Repetitive Operations Into ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                  {t("KI-Autopilot-Systeme", "Autonomous AI Workflows")}
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 sm:mb-8 max-w-2xl font-normal text-center lg:text-left mx-auto lg:mx-0">
                {t(
                  "Wir automatisieren bis zu 80% Ihrer repetitiven Geschäftsprozesse mit maßgeschneiderten KI-Agenten, n8n-Workflows und intelligenter Dokumenten-Extraktion. Sicher, DSGVO-konform und mit messbarem ROI in unter 30 Tagen.",
                  "We automate up to 80% of your repetitive business processes with custom AI agents, n8n workflow engines, and intelligent document parsing. Secure, GDPR-compliant, and delivering proven ROI in under 30 days."
                )}
              </p>

              {/* Key Trust Signals */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-9">
                {[
                  { icon: Zap, label: t("80% Weniger Aufwand", "80% Time Saved"), sub: t("Repetitive Tasks", "Repetitive Tasks") },
                  { icon: ShieldCheck, label: t("100% DSGVO", "100% GDPR"), sub: t("Kein OpenAI Training", "Zero Data Training") },
                  { icon: Bot, label: t("24/7 Autopilot", "24/7 Autopilot"), sub: t("Autonome Agenten", "Self-Healing Flows") },
                  { icon: Clock, label: t("< 30 Tage ROI", "< 30 Days ROI"), sub: t("Messbare Einsparung", "Fast Payback") },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 text-purple-600 mb-1">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-900">{label}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">{sub}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                >
                  <span>{t("Automatisierungs-Potenzial prüfen", "Evaluate Automation Potential")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300/80 bg-white/90 backdrop-blur-xs text-slate-800 text-sm sm:text-base font-bold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Coins className="w-4 h-4 text-orange-500" />
                  <span>{t("ROI Rechner starten", "Calculate ROI")}</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Hero Visual: Interactive Live n8n / AI Workflow Simulator (Light Modern Card) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl bg-white p-4 sm:p-6 shadow-2xl border border-purple-200/90">
                {/* Simulator Header */}
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs sm:text-sm md:text-base font-bold text-slate-800">
                      n8n AI Engine v2.4 • Active Node Canvas
                    </span>
                  </div>
                  <button
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer disabled:opacity-60 shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isSimulating ? t("Läuft...", "Running...") : t("Test Run", "Test Run")}</span>
                  </button>
                </div>

                {/* Flow Tabs */}
                <div className="flex gap-1.5 mb-4 bg-slate-100/90 p-1 rounded-xl text-xs sm:text-sm font-semibold">
                  <button
                    onClick={() => { setActiveWorkflowTab("support"); setSimulationStep(0); }}
                    className={`flex-1 py-1.5 sm:py-2 rounded-lg transition-all ${
                      activeWorkflowTab === "support" ? "bg-purple-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Support Bot
                  </button>
                  <button
                    onClick={() => { setActiveWorkflowTab("invoice"); setSimulationStep(0); }}
                    className={`flex-1 py-1.5 sm:py-2 rounded-lg transition-all ${
                      activeWorkflowTab === "invoice" ? "bg-purple-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Rechnungen
                  </button>
                  <button
                    onClick={() => { setActiveWorkflowTab("leads"); setSimulationStep(0); }}
                    className={`flex-1 py-1.5 sm:py-2 rounded-lg transition-all ${
                      activeWorkflowTab === "leads" ? "bg-purple-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Lead Gen
                  </button>
                </div>

                {/* Workflow Simulation Pipeline Nodes */}
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Step 1: Input Trigger */}
                  <div
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                      simulationStep >= 1
                        ? "bg-purple-50 border-purple-400 shadow-sm shadow-purple-500/10"
                        : "bg-slate-50/80 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                        1
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 block leading-snug">
                          {activeWorkflowTab === "support" && "Webhook: Neue Kunden-E-Mail empfangen"}
                          {activeWorkflowTab === "invoice" && "Gmail / Drive: Neue PDF-Rechnung eingegangen"}
                          {activeWorkflowTab === "leads" && "Typeform: Neuer Website-Lead eingereicht"}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-500 font-medium block mt-0.5">Trigger: Instant Webhook</span>
                      </div>
                    </div>
                    {simulationStep >= 1 && <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />}
                  </div>

                  {/* Step 2: AI Processing & Vector Search */}
                  <div
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                      simulationStep >= 2
                        ? "bg-purple-50 border-purple-400 shadow-sm shadow-purple-500/10"
                        : "bg-slate-50/80 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                        2
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 block leading-snug">
                          {activeWorkflowTab === "support" && "Pinecone Vektorsuche & Claude 3.7 RAG Antwort"}
                          {activeWorkflowTab === "invoice" && "OCR Text-Extraktion & GPT-4o Tabellen-Parsing"}
                          {activeWorkflowTab === "leads" && "LinkedIn Company Enrichment & Scoring Engine"}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-500 font-medium block mt-0.5">AI Model: Claude 3.7 / GPT-4o</span>
                      </div>
                    </div>
                    {simulationStep >= 2 && <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />}
                  </div>

                  {/* Step 3: Decision & Target Output */}
                  <div
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                      simulationStep >= 3
                        ? "bg-purple-50 border-purple-400 shadow-sm shadow-purple-500/10"
                        : "bg-slate-50/80 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                        3
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 block leading-snug">
                          {activeWorkflowTab === "support" && "Antwort versendet & Zendesk Ticket geschlossen"}
                          {activeWorkflowTab === "invoice" && "IBAN validiert & DATEV / Sevdesk Buchung gebucht"}
                          {activeWorkflowTab === "leads" && "Lead in HubSpot angelegt & Slack Alert an Vertrieb"}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-500 font-medium block mt-0.5">Action: Auto-Execute & Alert</span>
                      </div>
                    </div>
                    {simulationStep >= 3 && <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />}
                  </div>
                </div>

                {/* Output log */}
                <div className="mt-4 p-3 sm:p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-600 flex items-center justify-between gap-2">
                  <span>
                    Status:{" "}
                    <span className={simulationStep === 4 ? "text-emerald-600 font-bold" : "text-purple-600 font-bold"}>
                      {simulationStep === 0 && "Bereit. Klicken Sie auf 'Test Run' zur Ausführung."}
                      {simulationStep === 1 && "Webhook wird ausgelöst..."}
                      {simulationStep === 2 && "Vektor-Suche & KI-Extraktion läuft..."}
                      {simulationStep === 3 && "Datenbank & Benachrichtigung wird aktualisiert..."}
                      {simulationStep === 4 && "Erfolgreich abgeschlossen in 412ms."}
                    </span>
                  </span>
                  <span className="text-slate-400 font-bold shrink-0">Node: OK</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator Section (Light Modern Styling) */}
      <section id="calculator" className="py-10 sm:py-12 lg:py-16  bg-slate-50/70 border-t border-b border-slate-200/80">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Coins className="w-3.5 h-3.5 text-orange-600" />
              <span>{t("ROI RECHNER", "ROI CALCULATOR")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Wie viel Geld sparen Sie durch Automatisierung?", "Calculate Your Annual Business Savings")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Passen Sie die Schieberegler an Ihre aktuelle Teamgröße an und sehen Sie die konkrete Zeit- und Kostenersparnis.",
                "Adjust the sliders to match your team and see exact hours and cost reductions immediately."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-7">
              {/* Slider 1: Employees */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {t("Mitarbeiter mit wiederkehrenden Aufgaben:", "Team members with manual tasks:")}
                  </span>
                  <span className="text-sm sm:text-base font-black text-purple-700 bg-purple-50 px-3 py-1 rounded-lg border border-purple-200">
                    {calcEmployees} {t("Personen", "People")}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={calcEmployees}
                  onChange={(e) => setCalcEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
              </div>

              {/* Slider 2: Hours per Week */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {t("Manuelle Stunden pro Person / Woche:", "Repetitive hours per person / week:")}
                  </span>
                  <span className="text-sm sm:text-base font-black text-pink-700 bg-pink-50 px-3 py-1 rounded-lg border border-pink-200">
                    {calcHoursPerWeek} Std. / Woche
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={calcHoursPerWeek}
                  onChange={(e) => setCalcHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
                />
              </div>

              {/* Slider 3: Hourly Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {t("Durchschnittlicher Stundensatz (inkl. Nebenkosten):", "Average hourly employee cost:")}
                  </span>
                  <span className="text-sm sm:text-base font-black text-orange-700 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
                    {calcHourlyRate} € / Std.
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="120"
                  step="5"
                  value={calcHourlyRate}
                  onChange={(e) => setCalcHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-purple-50 via-white to-orange-50/40 p-6 sm:p-8 rounded-3xl border-2 border-purple-200 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-purple-700 block mb-2">
                  {t("Ihre geschätzte Ersparnis", "Your Projected Savings")}
                </span>

                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl lg:text-[42px] font-[900] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-700 to-orange-600">
                    {yearlyCostSaved.toLocaleString("de-DE")} €
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 block mt-1">
                    {t("Ersparnis pro Jahr (bei ~75% Automatisierungsgrad)", "Annual savings at ~75% automation")}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-xl sm:text-2xl font-black text-slate-900">{monthlyHoursSaved} Std.</div>
                    <div className="text-xs text-slate-500 font-medium">{t("Freigesetzt / Monat", "Freed Up / Month")}</div>
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-xl sm:text-2xl font-black text-emerald-600">{monthlyCostSaved.toLocaleString("de-DE")} €</div>
                    <div className="text-xs text-slate-500 font-medium">{t("Monatliche Ersparnis", "Monthly Value")}</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => { setSelectedPackage("KI-Automatisierung ROI Analyse"); setContactOpen(true); }}
                className="w-full py-3.5 px-6 sm:px-7 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t("Dieses Potenzial realisieren", "Claim These Savings")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-10 sm:py-12 lg:py-16  bg-white border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Layers className="w-3.5 h-3.5" />
              <span>{t("ANWENDUNGSBEREICHE", "AUTOMATION CAPABILITIES")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Was wir für Ihr Unternehmen automatisieren", "What We Automate for Scaling Companies")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Verbinden Sie Ihre isolierten SaaS-Tools mit modernsten LLMs zu intelligenten, autonomen Ketten.",
                "Bridge isolated SaaS silos with LLM intelligence into resilient autonomous pipelines."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationSolutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-[5px] border border-slate-200/90 bg-slate-50/50 p-8 hover:border-purple-300 hover:bg-purple-50/20 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[5px] bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200 text-purple-600 inline-flex items-center justify-center mb-6 shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-[19px] sm:text-[24px] font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {t(sol.titleDe, sol.titleEn)}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                      {renderWithLinks(t(sol.descDe, sol.descEn))}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 space-y-2">
                    {(lang === "de" ? sol.featuresDe : sol.featuresEn).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Privacy & GDPR Section */}
      <section className="py-10 sm:py-12 lg:py-16  bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t("DATENSCHUTZ & COMPLIANCE", "ENTERPRISE PRIVACY")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("100% DSGVO-konforme KI-Infrastruktur", "100% GDPR-Compliant AI Architecture")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Kein Sicherheitsrisiko für Ihr Unternehmen. Ihre vertraulichen Daten bleiben in Europa und werden nicht zum Training genutzt.",
                "Zero risk for your business. Your confidential company intelligence stays in Europe with strict Zero-Retention guarantees."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyGuarantees.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[5px] bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-[5px] bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-[17px] sm:text-[19px] font-bold text-slate-900 mb-2">
                  {t(item.titleDe, item.titleEn)}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t(item.descDe, item.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-10 sm:py-12 lg:py-16  bg-white border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t("KI TECH STACK", "MODERN AI STACK")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Die besten LLMs, Vektor-DBs & Workflow Engines", "Leading LLMs, Vector Databases & Workflow Engines")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Wir wählen flexibel das beste Modell für Ihre spezifische Aufgabe aus.",
                "We dynamically orchestrate the optimal model for each operational subtask."
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`p-3 sm:p-4 rounded-[5px] border transition-all duration-200 flex flex-col justify-between ${
                  tech.highlight
                    ? "bg-purple-50/70 border-purple-200/90 shadow-sm"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-start justify-between gap-1.5 mb-2 sm:mb-1.5">
                  <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">{tech.name}</span>
                  {tech.highlight && (
                    <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0 mt-1" />
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-1 text-xs sm:text-sm">
                  <span className="text-purple-700 font-semibold">{tech.category}</span>
                  <span className="text-slate-500 font-medium">{tech.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section id="process" className="py-10 sm:py-12 lg:py-16  bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Rocket className="w-3.5 h-3.5" />
              <span>{t("DER ABLAUF", "IMPLEMENTATION ROADMAP")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Vom Prozess-Audit zum Live-Autopiloten", "From Process Audit to Live AI Autopilot")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Strukturierte Implementierung ohne Unterbrechung Ihres laufenden Geschäftsbetriebs.",
                "Disciplined deployment with zero disruption to your daily operations."
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
                className="relative rounded-[5px] p-7 bg-white border border-slate-200/90 hover:border-purple-300 hover:bg-purple-50/20 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-[5px] bg-gradient-to-br from-purple-600 to-orange-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-purple-600/20">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2.5">
                    {t(step.titleDe, step.titleEn)}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    {t(step.descDe, step.descEn)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section id="pricing" className="py-10 sm:py-12 lg:py-16  bg-white border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sliders className="w-3.5 h-3.5" />
              <span>{t("TRANSPARENTE PAKETE", "AUTOMATION PACKAGES")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Kalkulierbare Pakete für jedes Automatisierungs-Level", "Turnkey Packages for Every Stage")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Keine versteckten Gebühren. Jedes Paket beinhaltet n8n Setup, Prompt Engineering und Teamschulung.",
                "Zero hidden fees. All packages cover architecture design, prompt engineering, and team enablement."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-[5px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? "bg-purple-50/90 text-slate-900 shadow-xl border-2 border-purple-500 scale-[1.02] lg:-translate-y-2"
                    : "bg-slate-50/70 text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-orange-600 text-white text-xs font-black tracking-wider uppercase px-4 py-1.5 rounded-[5px] shadow-md">
                    {t(pkg.badgeDe, pkg.badgeEn)}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        pkg.popular ? "text-purple-700" : "text-slate-500"
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
                    <span className="text-3xl sm:text-4xl lg:text-[42px] font-[900] tracking-tight text-slate-900">
                      {t(pkg.priceDe, pkg.priceEn)}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg mb-8 leading-relaxed text-slate-600">
                    {t(pkg.descDe, pkg.descEn)}
                  </p>

                  <div className="space-y-3 mb-8">
                    {(lang === "de" ? pkg.featuresDe : pkg.featuresEn).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-medium">
                        <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenContactWithPackage(lang === "de" ? pkg.nameDe : pkg.nameEn)}
                  className={`w-full py-3.5 px-6 sm:px-7 rounded-full text-sm sm:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white shadow-purple-600/30"
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

      {/* FAQ Accordion */}
      <section className="py-10 sm:py-12 lg:py-16  bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>{t("HÄUFIG GESTELLTE FRAGEN", "FAQ")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Häufig gestellte Fragen zu KI & n8n", "Frequently Asked Questions About AI & n8n")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Antworten zu Datenschutz, API-Kosten, Wartung und Systemkompatibilität.",
                "Answers regarding data security, token costs, maintenance, and ERP compatibility."
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
                  <span className="text-[16px] sm:text-[18px] font-bold text-slate-900">
                    {t(faq.qDe, faq.qEn)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-purple-600" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-[14px] sm:text-[16px] text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {renderWithLinks(t(faq.aDe, faq.aEn))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner - Energetic Vibrant Violet & Orange */}
      <section className="py-10 sm:py-12 lg:py-16  bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-orange-500/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-300/40 bg-purple-500/20 text-purple-200 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-300" />
            <span>{t("BEREIT ZU AUTOMATISIEREN?", "READY TO AUTOMATE?")}</span>
          </div>

          <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-white tracking-tight leading-[1.10] sm:leading-[1.09] mb-5 text-center">
            {t("Lassen Sie KI die Routinearbeit übernehmen.", "Let AI Handle the Repetitive Work.")}
          </h2>

          <p className="text-base sm:text-lg text-purple-100 mb-8 max-w-2xl mx-auto font-normal text-center leading-relaxed">
            {t(
              "Buchen Sie ein kostenloses 20-minütiges Gespräch. Wir analysieren Ihre Workflows und zeigen Ihnen live, welche Prozesse Sie sofort automatisieren können.",
              "Book a free 20-minute strategy call. We will audit your current workflows and identify exactly which processes to automate first."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white text-purple-900 hover:bg-purple-50 text-sm sm:text-base font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{t("Kostenloses Gespräch buchen", "Book a Free Consultation")}</span>
              <ArrowRight className="w-4 h-4 text-purple-900" />
            </Link>
            <a
              href="https://wa.me/918077313241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm sm:text-base font-bold transition-all duration-200 border border-white/20"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-purple-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              {t("Kostenlos & unverbindlich", "100% Free & No-Obligation")}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-300" />
              {t("Konkrete Roadmap in 24 Std.", "Workflow Audit Within 24h")}
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
