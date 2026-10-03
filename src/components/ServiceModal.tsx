"use client";

import React from "react";
import Image from "next/image";
import { X, CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceModalProps {
  serviceId: string | null;
  onClose: () => void;
  onGetQuote: (serviceName: string) => void;
}

export default function ServiceModal({ serviceId, onClose, onGetQuote }: ServiceModalProps) {
  const { t } = useLanguage();

  if (!serviceId) return null;

  const detailsMap: Record<
    string,
    {
      titleDe: string;
      titleEn: string;
      taglineDe: string;
      taglineEn: string;
      image: string;
      descriptionDe: string;
      descriptionEn: string;
      techStack: string[];
      deliverablesDe: string[];
      deliverablesEn: string[];
      timelineDe: string;
      timelineEn: string;
    }
  > = {
    // 1. Employee & Attendance Tracking
    "employee-tracking": {
      titleDe: "Mitarbeiter- & Zeiterfassung",
      titleEn: "Employee & Attendance Tracking",
      taglineDe: "Intelligente HR- & Zeiterfassungslösungen",
      taglineEn: "Smart HR & Attendance Tracking Solutions",
      image: "/images/hero-workspace.jpg",
      descriptionDe:
        "Vollständige HR-, Anwesenheits-, Urlaubs- und Leistungsüberwachungslösungen, maßgeschneidert auf Ihr Team. Behalten Sie Arbeitszeiten, Schichten, Abwesenheiten und Mitarbeiterberichte in Echtzeit im Blick.",
      descriptionEn:
        "Complete HR, attendance, leave management, and performance tracking solutions tailored to your team. Monitor work hours, shift schedules, absences, and employee reports in real time.",
      techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Role-Based Access", "Biometric / RFID Integration"],
      deliverablesDe: [
        "Mitarbeiter- & Schichtverwaltungs-Dashboard",
        "Digitale Urlaubs- und Abwesenheitsanträge",
        "Gehaltsexport (DATEV- & Lexware-kompatibel)",
        "Mobile Check-in / Check-out App",
        "Detaillierte Produktivitäts- & Anwesenheitsberichte",
      ],
      deliverablesEn: [
        "Employee & shift management dashboard",
        "Digital leave and absence approval workflows",
        "Payroll data export (DATEV / CSV compatible)",
        "Mobile check-in / check-out companion app",
        "Detailed productivity & attendance reporting",
      ],
      timelineDe: "3 bis 6 Wochen je nach Teamgröße",
      timelineEn: "3 to 6 weeks depending on team size",
    },

    // 2. Custom Financial Systems
    "custom-financial": {
      titleDe: "Individuelle Finanzsysteme",
      titleEn: "Custom Financial Systems",
      taglineDe: "Maßgeschneiderte Buchhaltungs- & Finanzlösungen",
      taglineEn: "Tailored Accounting & Financial Solutions",
      image: "/images/meagle-laptop.jpg",
      descriptionDe:
        "Buchhaltungs-, Abrechnungs-, Gehalts- und Unternehmensverwaltungslösungen für Ihre spezifischen Anforderungen. Optimieren Sie Ihren Cashflow und automatisieren Sie Finanzberichte.",
      descriptionEn:
        "Accounting, invoicing, payroll, and business management solutions tailored to your needs. Streamline cash flow tracking and automate financial reporting.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe / SEPA APIs", "Audit Logging", "Encryption"],
      deliverablesDe: [
        "Maßgeschneidertes Finanz- & Buchhaltungsportal",
        "Automatischer Bankabgleich & SEPA-Schnittstelle",
        "Rechnungsgenerierung & Mahnwesen-Automatisierung",
        "Echtzeit-Gewinn- und Verlust-Dashboards",
        "DSGVO- & GoBD-konforme Datenarchivierung",
      ],
      deliverablesEn: [
        "Custom financial & accounting portal",
        "Automatic bank reconciliation & SEPA integration",
        "Automated recurring invoicing & reminders",
        "Real-time P&L and cashflow dashboards",
        "Compliant data archiving and audit trails",
      ],
      timelineDe: "4 bis 8 Wochen je nach Umfang",
      timelineEn: "4 to 8 weeks depending on scope",
    },

    // 3. E-commerce Stores
    "ecommerce-stores": {
      titleDe: "E-Commerce-Shops",
      titleEn: "E-commerce Stores",
      taglineDe: "Hochkonvertierende digitale Verkaufsplattformen",
      taglineEn: "High-Converting Digital Sales Platforms",
      image: "/images/aura-masale.jpg",
      descriptionDe:
        "Erstellen Sie moderne Onlineshops mit sicheren Zahlungen, intuitiver Produktverwaltung und einem blitzschnellen, nahtlosen Einkaufserlebnis für maximale Conversion.",
      descriptionEn:
        "Create online stores with secure payments, intuitive product management, and a smooth, lightning-fast shopping experience engineered for maximum conversion.",
      techStack: ["Shopify", "Next.js Commerce", "WooCommerce", "Stripe", "PayPal", "Tailwind CSS"],
      deliverablesDe: [
        "Vollständig responsiver Marken-Webshop",
        "Multi-Währungs- und Zahlungs-Gateway-Setup",
        "Warenwirtschafts- und Bestandsanbindung",
        "Mobile-optimierter One-Click-Checkout",
        "Conversion-optimierte Produkt- und Kategorieseiten",
      ],
      deliverablesEn: [
        "Fully responsive branded online store",
        "Multi-currency & localized payment gateway setup",
        "Inventory and ERP sync integration",
        "Mobile-optimized one-click checkout flow",
        "High-converting product and collection pages",
      ],
      timelineDe: "3 bis 6 Wochen",
      timelineEn: "3 to 6 weeks",
    },

    // 4. Coaching & Artist Portfolios
    "coaching-portfolio": {
      titleDe: "Coaching- & Künstler-Portfolios",
      titleEn: "Coaching & Artist Portfolios",
      taglineDe: "Eindrucksvolle Online-Präsenzen für Experten & Kreative",
      taglineEn: "Impressive Online Presence for Experts & Creators",
      image: "/images/easyway-germany.jpg",
      descriptionDe:
        "Portfolio-Websites für Coaches, Trainer, Künstler und Content Creator, um Arbeiten, Zertifizierungen, Events und Kundenfeedbacks wirkungsvoll zu präsentieren.",
      descriptionEn:
        "Portfolio websites for coaches, trainers, artists, and creators to showcase their work, certifications, events, and client feedback with high aesthetic impact.",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "CMS Integration", "Calendly API"],
      deliverablesDe: [
        "Interaktive Portfolio- & Showreel-Galerie",
        "Integrierte Beratungsterminbuchung",
        "Kundenreferenzen- & Video-Testimonial-Bereich",
        "Blog & Ressourcen-Download-Center",
        "Suchmaschinenoptimierung für Personenmarken",
      ],
      deliverablesEn: [
        "Interactive portfolio & media showcase gallery",
        "Integrated consultation booking scheduler",
        "Social proof & video testimonial section",
        "Blog & downloadable resource hub",
        "Personal brand SEO & Google Business optimization",
      ],
      timelineDe: "2 bis 4 Wochen",
      timelineEn: "2 to 4 weeks",
    },

    // 5. Professional Web Design
    "web-dev": {
      titleDe: "Professionelles Webdesign",
      titleEn: "Professional Web Design",
      taglineDe: "Skalierbare, hochperformante digitale Plattformen",
      taglineEn: "Scalable, High-Performance Digital Platforms",
      image: "/images/web-dev.png",
      descriptionDe:
        "Moderne, responsive und SEO-freundliche Websites für Unternehmen, Marken und Experten. Blitzschnelle Ladezeiten, erstklassiges UI/UX-Design und maximale Benutzerfreundlichkeit.",
      descriptionEn:
        "Modern, responsive, and SEO-friendly websites for businesses, brands, and professionals. Blazing fast loading speeds, world-class UI/UX design, and maximum user engagement.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS / Vercel"],
      deliverablesDe: [
        "Maßgeschneiderte responsive Webanwendung",
        "CMS- und Admin-Dashboard-Integration",
        "Blitzschneller Lighthouse 95+ Score",
        "API-Integrationen & Kontaktformulare",
        "Unternehmensgerechte Sicherheit & SSL",
      ],
      deliverablesEn: [
        "Custom responsive web application",
        "CMS and admin dashboard integration",
        "Lightning fast Lighthouse 95+ score",
        "API integrations & contact funnels",
        "Enterprise-grade security & SSL",
      ],
      timelineDe: "2 bis 6 Wochen je nach Umfang",
      timelineEn: "2 to 6 weeks based on scope",
    },

    // 6. Websites for Musicians
    "musician-websites": {
      titleDe: "Websites für Musiker",
      titleEn: "Websites for Musicians",
      taglineDe: "Fan-Engagement, Ticketverkauf & Release-Plattformen",
      taglineEn: "Fan Engagement, Ticketing & Release Platforms",
      image: "/images/hero-devices.jpg",
      descriptionDe:
        "Websites für Musiker, Bands, DJs und Plattenlabels. Interaktive Audioplayer, Eventkalender mit Ticketlinks, Merch-Shop und exklusive Fan-Community-Funktionen.",
      descriptionEn:
        "Websites for musicians, bands, DJs, and record labels. Interactive audio streaming players, tour event calendars with ticket links, merch stores, and fan engagement.",
      techStack: ["Next.js", "Spotify / Apple Music API", "Shopify / Stripe", "Bandsintown API", "Tailwind CSS"],
      deliverablesDe: [
        "Musik-Streaming & Vorhöroptionen",
        "Tourdaten & Ticket-Verkaufsanbindung",
        "Integrierter Band-Merchandise-Shop",
        "Newsletter- & Vorverkaufsanmeldung",
        "Pressemappe (EPK) für Veranstalter & Medien",
      ],
      deliverablesEn: [
        "Interactive audio player & streaming links",
        "Tour dates and ticket booking integration",
        "Integrated band merchandise store",
        "Fan club newsletter & pre-sale signup",
        "Electronic Press Kit (EPK) for booking agents",
      ],
      timelineDe: "2 bis 4 Wochen",
      timelineEn: "2 to 4 weeks",
    },

    // 7. Marketing Campaigns
    "marketing-campaigns": {
      titleDe: "Marketing-Kampagnen",
      titleEn: "Marketing Campaigns",
      taglineDe: "Datengetriebenes Wachstum & Reichweite",
      taglineEn: "Data-Driven Growth & High-Impact Reach",
      image: "/images/meagle-laptop.jpg",
      descriptionDe:
        "Kreative digitale Marketingkampagnen, um die richtige Zielgruppe zu erreichen, Leads zu gewinnen und den Return on Investment (ROI) spürbar zu steigern.",
      descriptionEn:
        "Creative digital marketing campaigns to help you reach the right audience, generate qualified leads, and sustainably scale your customer acquisition.",
      techStack: ["Meta Ads", "Google Ads", "HubSpot", "Google Analytics 4", "Conversion Tracking", "Figma"],
      deliverablesDe: [
        "Zielgruppenanalyse & Funnel-Strategie",
        "Hochkonvertierende Werbeanzeigen & Creative Assets",
        "Landingpage-Design & A/B-Testing",
        "Automatisierte Lead-Nurturing-E-Mails",
        "Monatliches Performance- & ROI-Reporting",
      ],
      deliverablesEn: [
        "Target audience segmentation & funnel blueprint",
        "High-converting ad copy & visual creatives",
        "Custom landing page design & A/B testing",
        "Automated lead nurturing email sequences",
        "Comprehensive monthly performance reporting",
      ],
      timelineDe: "Fortlaufend / 2 bis 4 Wochen Kampagnenstart",
      timelineEn: "Ongoing / 2 to 4 weeks campaign launch",
    },

    // 8. Performance Optimization
    "performance-optimization": {
      titleDe: "Performance-Optimierung",
      titleEn: "Performance Optimization",
      taglineDe: "Maximale Geschwindigkeit & perfekte Core Web Vitals",
      taglineEn: "Peak Speed & Perfect Core Web Vitals",
      image: "/images/hero-workspace.jpg",
      descriptionDe:
        "Optimieren Sie Website- und Anwendungsgeschwindigkeit für spürbar schnellere Ladezeiten, bessere Google-Rankings (Core Web Vitals) und deutlich höhere Conversion-Raten.",
      descriptionEn:
        "Optimize website and application performance for better loading speeds, superior Google rankings (Core Web Vitals), and higher conversion rates.",
      techStack: ["Next.js SSG / SSR", "CDN Edge Caching", "Image WebP / AVIF", "Database Indexing", "Code Splitting"],
      deliverablesDe: [
        "Umfassender Lighthouse- & PageSpeed-Audit",
        "Core Web Vitals Optimierung (LCP, FID/INP, CLS)",
        "Asset-Kompression & moderne Bildformate",
        "Server- & Datenbankabfrage-Tuning",
        "CDN- & Caching-Infrastruktur-Setup",
      ],
      deliverablesEn: [
        "Comprehensive Lighthouse & PageSpeed audit",
        "Core Web Vitals optimization (LCP, INP, CLS)",
        "Asset minification & modern image format pipelines",
        "Server-side caching & database query tuning",
        "Global CDN distribution & caching setup",
      ],
      timelineDe: "1 bis 3 Wochen",
      timelineEn: "1 to 3 weeks",
    },

    // 9. LLM Integration
    "llm-integration": {
      titleDe: "LLM-Integration",
      titleEn: "LLM Integration",
      taglineDe: "Modernste Sprachmodelle für Ihre Geschäftsprozesse",
      taglineEn: "State-of-the-Art Language Models for Business",
      image: "/images/ai-robot.png",
      descriptionDe:
        "Integrieren Sie moderne Large Language Models wie OpenAI GPT-4, Anthropic Claude, Google Gemini und private Open-Source-LLMs mit RAG-Systemen in Ihre Unternehmensanwendungen.",
      descriptionEn:
        "Integrate advanced AI models like ChatGPT, Claude, Gemini, RAG (Retrieval-Augmented Generation), and private models directly into your business applications.",
      techStack: ["OpenAI API", "Anthropic Claude", "Pinecone / Qdrant", "LangChain / LlamaIndex", "Python", "TypeScript"],
      deliverablesDe: [
        "Unternehmensspezifisches RAG-System auf Ihrer Wissensbasis",
        "Sichere API-Schnittstellen mit Role-based Access",
        "Automatisierte Text- & Datenextraktionspipelines",
        "Kostenoptimiertes Token-Management",
        "100% DSGVO-konforme Datenverarbeitung",
      ],
      deliverablesEn: [
        "Company-specific RAG knowledge base retrieval",
        "Secure API integrations with role-based guardrails",
        "Automated document parsing & data extraction pipeline",
        "Token usage optimization & caching layer",
        "Enterprise privacy & GDPR-compliant deployment",
      ],
      timelineDe: "2 bis 5 Wochen",
      timelineEn: "2 to 5 weeks",
    },

    // 10. AI for Businesses
    "ai-for-businesses": {
      titleDe: "KI für Unternehmen",
      titleEn: "AI for Businesses",
      taglineDe: "Intelligente KI-Lösungen zur Produktivitätssteigerung",
      taglineEn: "Custom AI Solutions for Business Productivity",
      image: "/images/ai-robot.png",
      descriptionDe:
        "Maßgeschneiderte KI-Lösungen zur Automatisierung von Routineaufgaben, Steigerung der Teameffizienz und Erschließung neuer datenbasierter Umsatzpotenziale.",
      descriptionEn:
        "Custom AI solutions to automate tasks, improve employee productivity, reduce manual friction, and unlock new opportunities for scalable growth.",
      techStack: ["Python", "FastAPI", "Next.js", "LangGraph", "Vector Databases", "AWS Bedrock"],
      deliverablesDe: [
        "KI-Potentialanalyse für bestehende Workflows",
        "Entwicklung maßgeschneiderter interner KI-Werkzeuge",
        "Automatisierte Dokumenten- & E-Mail-Klassifizierung",
        "Mitarbeiterschulung & Integrationsbegleitung",
        "Regelmäßige Modell-Updates & Wartung",
      ],
      deliverablesEn: [
        "AI opportunity audit of existing workflows",
        "Custom internal AI copilot tool development",
        "Automated document and email classification",
        "Staff onboarding & integration training",
        "Ongoing model fine-tuning & maintenance",
      ],
      timelineDe: "3 bis 6 Wochen",
      timelineEn: "3 to 6 weeks",
    },

    // 11. Restaurant Systems
    "restaurant-systems": {
      titleDe: "Restaurant-Systeme",
      titleEn: "Restaurant Systems",
      taglineDe: "Digitale Gastronomie- & Kassensysteme",
      taglineEn: "Complete Restaurant Management Systems",
      image: "/images/taibeena.jpg",
      descriptionDe:
        "Komplette Restaurantverwaltungssysteme mit digitaler Tischbestellung, Abrechnung, kontaktlosen QR-Menüs, Küchenmonitor (KDS) und Bestandsführung.",
      descriptionEn:
        "Complete restaurant management systems with table ordering, billing, QR code menus, Kitchen Display Systems (KDS), and inventory tracking.",
      techStack: ["Next.js", "WebSockets", "Thermal Printer API", "Stripe Terminal", "PostgreSQL", "PWA"],
      deliverablesDe: [
        "Interaktive digitale Speisekarte per QR-Code",
        "Tischbestell- & Kellner-POS-Applikation",
        "Küchen-Monitor (Kitchen Display System - KDS)",
        "Tischreservierungssystem mit SMS-Bestätigung",
        "Tagesabschluss- & TSE-Finanzamt-Konformität",
      ],
      deliverablesEn: [
        "Interactive digital QR menu with live updates",
        "Table ordering & server POS companion app",
        "Kitchen Display System (KDS) for cooks",
        "Table reservation system with SMS reminders",
        "Daily fiscal reports & receipt printer setup",
      ],
      timelineDe: "3 bis 6 Wochen",
      timelineEn: "3 to 6 weeks",
    },

    // 12. Business Management Systems
    "business-mgmt": {
      titleDe: "Business-Management-Systeme",
      titleEn: "Business Management Systems",
      taglineDe: "Integrierte Unternehmenssteuerung & Workflows",
      taglineEn: "Client, Project & Operations Management Systems",
      image: "/images/hero-workspace.jpg",
      descriptionDe:
        "Kunden-, Projekt-, Aufgaben- und Workflow-Verwaltungssysteme zur nahtlosen Optimierung Ihrer täglichen Betriebsabläufe auf einer zentralen Plattform.",
      descriptionEn:
        "Client, project, task, and workflow management systems to streamline your operations and centralize your company data.",
      techStack: ["Next.js", "Prisma / PostgreSQL", "Tailwind CSS", "Redis", "REST & GraphQL APIs"],
      deliverablesDe: [
        "Zentrales Firmen-Dashboard mit Rollenrechten",
        "Projekt- & Meilenstein-Tracking (Kanban / Gantt)",
        "Aufgabenverwaltung mit Fälligkeitserinnerungen",
        "Kollaboratives Dokumenten- & Dateimanagement",
        "Audit-Log & Aktivitäts-Historie",
      ],
      deliverablesEn: [
        "Central operations dashboard with role permissions",
        "Project & milestone tracking (Kanban / Gantt)",
        "Task management with automated alerts",
        "Collaborative document & media storage",
        "Audit trail & user activity timeline",
      ],
      timelineDe: "4 bis 8 Wochen",
      timelineEn: "4 to 8 weeks",
    },

    // 13. Automation for Businesses
    "automation-business": {
      titleDe: "Automatisierung für Unternehmen",
      titleEn: "Automation for Businesses",
      taglineDe: "End-to-End Workflow- & Prozessautomatisierung",
      taglineEn: "Automate Repetitive Workflows & Business Processes",
      image: "/images/ai-robot.png",
      descriptionDe:
        "Automatisieren Sie wiederkehrende Aufgaben, manuelle Workflows und Datenübertragungen zwischen verschiedenen Tools, um hunderte Arbeitsstunden einzusparen.",
      descriptionEn:
        "Automate repetitive tasks, workflows, and cross-platform data processes to save time, eliminate human errors, and scale your operations.",
      techStack: ["n8n", "Make.com", "Zapier", "Python Webhooks", "REST APIs", "PostgreSQL"],
      deliverablesDe: [
        "Workflow-Architektur & Prozess-Mapping",
        "Multi-App-Integrationen (CRM, E-Mail, ERP, Cloud)",
        "Automatisierte Datenabgleiche ohne manuelle Eingabe",
        "Fehlererkennung & automatische Benachrichtigung",
        "Vollständige Dokumentation & Wartungs-Support",
      ],
      deliverablesEn: [
        "Workflow architecture & visual process mapping",
        "Multi-app integrations (CRM, Email, ERP, Cloud)",
        "Automated cross-system data synchronization",
        "Error handling & automated failure alerts",
        "Comprehensive documentation & ongoing maintenance",
      ],
      timelineDe: "2 bis 4 Wochen",
      timelineEn: "2 to 4 weeks",
    },

    // 14. AI Automation
    "ai-auto": {
      titleDe: "KI-Automatisierung",
      titleEn: "AI Automation",
      taglineDe: "Intelligente Workflows & Agenten-Systeme",
      taglineEn: "Intelligent Workflows & Agentic Systems",
      image: "/images/ai-robot.png",
      descriptionDe:
        "Erstellen Sie intelligente KI-Agenten und Workflows zur automatisierten Bearbeitung von Kundenanfragen, Dokumentenanalysen und komplexen Unternehmensprozessen.",
      descriptionEn:
        "Build AI agents and intelligent workflows that handle customer queries, generate reports, automate outreach, and orchestrate complex business flows.",
      techStack: ["n8n", "OpenAI / Claude APIs", "LangChain", "Vector DBs", "Python", "Webhooks"],
      deliverablesDe: [
        "Autonome KI-Agenten für E-Mail & Support",
        "Intelligente Dokumentenverarbeitung & Zusammenfassung",
        "Integration mit bestehenden Datenbanken & APIs",
        "Echtzeit-Monitoring & Qualitätskontrolle",
        "Datenschutz- & Sicherheitsaudit",
      ],
      deliverablesEn: [
        "Autonomous AI agents for emails and inquiries",
        "Intelligent document parsing and summarization",
        "Custom integration with company databases & tools",
        "Real-time monitoring and agent accuracy metrics",
        "Data privacy compliance and security audit",
      ],
      timelineDe: "2 bis 5 Wochen",
      timelineEn: "2 to 5 weeks",
    },

    // 15. CRM Systems
    "crm-systems": {
      titleDe: "CRM-Systeme",
      titleEn: "CRM Systems",
      taglineDe: "Kundenbeziehungen profitabel verwalten",
      taglineEn: "Manage Leads, Customers & Sales Pipelines",
      image: "/images/meagle-laptop.jpg",
      descriptionDe:
        "Verwalten Sie Leads, Kunden und die gesamte Kommunikation mit einem leistungsstarken, maßgeschneiderten und benutzerfreundlichen CRM-System.",
      descriptionEn:
        "Manage leads, customers, communications, and sales pipelines with a powerful, intuitive, and bespoke CRM system.",
      techStack: ["Next.js", "PostgreSQL", "WhatsApp API", "SendGrid", "Tailwind CSS", "OAuth2"],
      deliverablesDe: [
        "Visuelle Vertriebs-Pipeline (Deals & Stages)",
        "360-Grad-Kundenakte mit Historie & Notizen",
        "Automatisierte Follow-up E-Mails & WhatsApp-Nachrichten",
        "Lead-Scoring & automatische Zuweisung",
        "Export- & Schnittstellen-Setup zu Buchhaltung",
      ],
      deliverablesEn: [
        "Visual deal pipeline with customizable stages",
        "360-degree customer profiles with contact history",
        "Automated follow-up emails & WhatsApp reminders",
        "Intelligent lead scoring & auto-assignment",
        "Export & direct integration with invoicing tools",
      ],
      timelineDe: "3 bis 6 Wochen",
      timelineEn: "3 to 6 weeks",
    },

    // 16. Appointment Booking Systems
    "appointment-booking": {
      titleDe: "Terminbuchungssysteme",
      titleEn: "Appointment Booking Systems",
      taglineDe: "Automatisierte Buchungen & Kalendersynchronisation",
      taglineEn: "Online Booking Systems with Automated Reminders",
      image: "/images/easyway-germany.jpg",
      descriptionDe:
        "Online-Buchungssysteme für Beratungsgespräche, Dienstleistungen und Events. Nahtlose Google/Outlook-Kalendersynchronisation und automatische Erinnerungen.",
      descriptionEn:
        "Online booking systems for consultations, services, and corporate events with calendar sync and automated SMS/email reminders.",
      techStack: ["Next.js", "Google Calendar API", "Outlook API", "Twilio / WhatsApp", "Stripe Payments"],
      deliverablesDe: [
        "Mobilfreundliche Online-Buchungsmaske",
        "Zwei-Wege-Kalendersynchronisation (Google & Outlook)",
        "Automatische E-Mail- & SMS-Terminerinnerungen",
        "Vorauszahlungs- & Anzahlungsoptionen via Stripe",
        "Verwaltung von Mitarbeiterverfügbarkeiten & Pufferzeiten",
      ],
      deliverablesEn: [
        "Mobile-first customer booking interface",
        "Two-way Google & Outlook calendar synchronization",
        "Automated SMS & email appointment confirmations",
        "Pre-payment & deposit handling via Stripe",
        "Multi-staff availability & buffer time management",
      ],
      timelineDe: "2 bis 4 Wochen",
      timelineEn: "2 to 4 weeks",
    },

    // 17. Invoicing & Accounting
    "invoicing-accounting": {
      titleDe: "Rechnungswesen & Buchhaltung",
      titleEn: "Invoicing & Accounting",
      taglineDe: "Präzise Abrechnungen & automatisierte Finanzen",
      taglineEn: "Manage Invoices, Expenses & Financial Reports",
      image: "/images/meagle-laptop.jpg",
      descriptionDe:
        "Verwalten Sie Rechnungen, Betriebsausgaben, Zahlungseingänge und Finanzberichte mit Leichtigkeit. Vermeiden Sie Zahlungsverzug durch automatisiertes Mahnwesen.",
      descriptionEn:
        "Manage invoices, expenses, incoming payments, and financial reports with ease. Eliminate late payments with automated payment reminders.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "PDF Generation", "DATEV Export", "SEPA QR"],
      deliverablesDe: [
        "1-Klick-PDF-Rechnungserstellung mit eigenem Branding",
        "Wiederkehrende Rechnungen & Abo-Abrechnung",
        "Automatisierte Zahlungserinnerungen & Mahnstufen",
        "Ausgaben- & Beleg-Upload mit OCR-Texterkennung",
        "Steuerberater-Export nach gängigen Standards",
      ],
      deliverablesEn: [
        "One-click branded PDF invoice generation",
        "Recurring invoicing & subscription billing",
        "Automated overdue payment reminder sequences",
        "Expense receipt capture with OCR extraction",
        "Tax accountant export files (DATEV / CSV)",
      ],
      timelineDe: "3 bis 5 Wochen",
      timelineEn: "3 to 5 weeks",
    },

    // 18. Inventory & Warehouse Management
    "inventory-warehouse": {
      titleDe: "Warenwirtschaft & Lagerverwaltung",
      titleEn: "Inventory & Warehouse Management",
      taglineDe: "Echtzeit-Bestandskontrolle & Logistik",
      taglineEn: "Track Stock, Manage Warehouses & Real-Time Logistics",
      image: "/images/hero-workspace.jpg",
      descriptionDe:
        "Bestände in Echtzeit verfolgen, mehrere Lagerstandorte mühelos verwalten und Bestellprozesse sowie Nachbestellungen vollautomatisch steuern.",
      descriptionEn:
        "Track stock, manage multiple warehouse locations, and automate inventory replenishments and dispatch in real time.",
      techStack: ["Next.js", "Barcode / QR Scanner API", "PostgreSQL", "WebSockets", "ERP Connectors"],
      deliverablesDe: [
        "Echtzeit-Lagerbestandsübersicht über alle Standorte",
        "Barcode- & QR-Code-Scannen via Smartphone",
        "Automatische Nachbestellwarnungen bei Mindestbestand",
        "Lieferanten- & Einkaufsbestellungsverwaltung",
        "Umfassende Inventur- & Warenbewegungsberichte",
      ],
      deliverablesEn: [
        "Real-time multi-location inventory dashboard",
        "Barcode & QR scanning via mobile devices",
        "Automated low-stock threshold reorder alerts",
        "Supplier & purchase order workflow module",
        "Stock valuation & inventory movement analytics",
      ],
      timelineDe: "4 bis 7 Wochen",
      timelineEn: "4 to 7 weeks",
    },

    // 19. Smart Chatbots
    "smart-chatbots": {
      titleDe: "Smarte Chatbots",
      titleEn: "Smart Chatbots",
      taglineDe: "24/7 KI-Kundensupport & Lead-Qualifizierung",
      taglineEn: "AI-Powered Customer Support & Lead Booking Chatbots",
      image: "/images/ai-robot.png",
      descriptionDe:
        "KI-gestützte Chatbots zur Kundenbetreuung rund um die Uhr. Beantworten Sie komplexe Fragen sofort, qualifizieren Sie Leads und vereinbaren Sie Termine vollautomatisch.",
      descriptionEn:
        "AI-powered chatbots to assist your customers 24/7, answer questions based on your company knowledge base, and book qualified meetings.",
      techStack: ["Next.js", "OpenAI / Claude API", "Vector Embeddings", "WhatsApp Business API", "Webhooks"],
      deliverablesDe: [
        "Individueller Webchat mit Firmen-Wissensdatenbank",
        "WhatsApp Business & Instagram DM Chatbot-Integration",
        "Automatische Lead-Erfassung & CRM-Übergabe",
        "Menschliche Übergabe (Human Handoff) bei komplexen Fällen",
        "Konversations-Analytics & Antwort-Optimierung",
      ],
      deliverablesEn: [
        "Custom website chat widget trained on your documentation",
        "WhatsApp Business & social channels integration",
        "Automated lead capture & CRM contact syncing",
        "Smooth human handoff for high-priority inquiries",
        "Conversation analytics & continuous accuracy fine-tuning",
      ],
      timelineDe: "2 bis 4 Wochen",
      timelineEn: "2 to 4 weeks",
    },

    // 20. Digitalization & Transformation
    "digital-transformation": {
      titleDe: "Digitalisierung & Transformation",
      titleEn: "Digitalization & Transformation",
      taglineDe: "Ganzheitliche Modernisierung für die Zukunft",
      taglineEn: "End-to-End Digital Solutions to Scale Your Future",
      image: "/images/boardroom-crop.png",
      descriptionDe:
        "Ganzheitliche digitale Lösungen zur Modernisierung Ihres Unternehmens. Wir transformieren analoge und veraltete Prozesse in agile, zukunftssichere digitale Systeme.",
      descriptionEn:
        "End-to-end digital solutions to modernize your legacy infrastructure, streamline company operations, and position your brand for scalable digital growth.",
      techStack: ["Cloud Architecture", "Modern Web Platforms", "AI Workflows", "API Integrations", "Security Audits"],
      deliverablesDe: [
        "Digitale Bestandsaufnahme & Transformations-Roadmap",
        "Ablösung veralteter Insellösungen durch moderne Cloud-Systeme",
        "Mitarbeiter-Workshops & Change-Management",
        "Prozessautomatisierung für maximale Skalierbarkeit",
        "Langfristige strategische Technologiebegleitung",
      ],
      deliverablesEn: [
        "Comprehensive digital maturity audit & roadmap",
        "Legacy system migration to modern cloud architecture",
        "Team training workshops & change management",
        "Process automation for high operational throughput",
        "Strategic ongoing technology partnership",
      ],
      timelineDe: "4 bis 12 Wochen",
      timelineEn: "4 to 12 weeks",
    },

    // Backward compatibility for mobile app development
    "app-dev": {
      titleDe: "Mobile App-Entwicklung",
      titleEn: "Mobile App Development",
      taglineDe: "Native & plattformübergreifende mobile Anwendungen",
      taglineEn: "Native & Cross-Platform Mobile Applications",
      image: "/images/app-dev.png",
      descriptionDe:
        "Von der Idee bis zum Launch im Google Play Store und Apple App Store entwickeln wir begeisternde mobile Erlebnisse mit flüssigem UI, Offline-Unterstützung und robuster Backend-Infrastruktur.",
      descriptionEn:
        "From concept to Google Play Store and Apple App Store launch, we craft engaging mobile experiences with buttery-smooth UI, offline support, and rock-solid backend infrastructure.",
      techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Supabase"],
      deliverablesDe: [
        "Native iOS & Android Builds",
        "Pixelgenaues UI/UX-Design nach Apple Human Interface Guidelines",
        "Push-Benachrichtigungs- und Deep-Linking-System",
        "App Store & Play Store Zulassungsgarantie",
        "Automatisiertes Crash-Reporting & Analytics",
      ],
      deliverablesEn: [
        "Native iOS & Android builds",
        "Pixel-perfect UI/UX design matching Apple Human Interface Guidelines",
        "Push notification & deep linking system",
        "App Store & Play Store approval guarantee",
        "Automated crash reporting & analytics",
      ],
      timelineDe: "4 bis 10 Wochen je nach Umfang",
      timelineEn: "4 to 10 weeks based on scope",
    },
  };

  const current = detailsMap[serviceId] || detailsMap["web-dev"];
  const title = t(current.titleDe, current.titleEn);
  const tagline = t(current.taglineDe, current.taglineEn);
  const description = t(current.descriptionDe, current.descriptionEn);
  const deliverables = t(current.deliverablesDe, current.deliverablesEn) as unknown as string[];
  const timeline = t(current.timelineDe, current.timelineEn);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative aspect-[21/9] w-full bg-slate-900 shrink-0">
          <Image
            src={current.image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div>
            <div className="text-xs font-semibold text-orange-600 tracking-wider uppercase mb-1">
              {t("UNSERE SPEZIALISIERUNG", "OUR SPECIALIZATION")}
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              {title}
            </h3>
            <p className="text-sm font-medium text-slate-500 mt-0.5">
              {tagline}
            </p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            {description}
          </p>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-orange-500" />
              <span>{t("Was Sie erhalten", "What You Receive")}</span>
            </h4>
            <div className="space-y-2">
              {(Array.isArray(deliverables) ? deliverables : current.deliverablesDe).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-orange-500" />
              <span>{t("Technologien & Tools", "Technologies & Tools")}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {current.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline & Guarantee */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">{t("Typische Dauer:", "Typical Timeline:")}</span>
              <span>{timeline}</span>
            </div>
            <div className="hidden sm:block text-slate-300">•</div>
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{t("100% Zufriedenheitsgarantie", "100% Satisfaction Guarantee")}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            {t("Kostenlose Erstberatung innerhalb von 24 Stunden.", "Free initial consultation within 24 hours.")}
          </p>
          <button
            onClick={() => onGetQuote(title)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-md shadow-orange-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{t("Angebot anfordern", "Get a Free Quote")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
