"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Layers,
  Cpu,
  ShieldCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Zap,
  Bell,
  Palette,
  Rocket,
  ArrowLeft,
  Apple,
  Play,
  Check,
  X as XIcon,
  Sparkles,
  WifiOff,
  CreditCard,
  Fingerprint,
  Sliders,
  PhoneCall,
  Clock,
  Gauge,
  Compass,
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

const techStack = [
  { name: "React Native", category: "Cross-Platform", note: "Meta Ecosystem", highlight: true },
  { name: "Flutter", category: "Cross-Platform", note: "Google Dart Engine", highlight: true },
  { name: "Swift / SwiftUI", category: "Native iOS", note: "Apple Silicon Optimized", highlight: false },
  { name: "Kotlin / Jetpack", category: "Native Android", note: "Modern Android Core", highlight: false },
  { name: "Expo SDK", category: "Tooling", note: "Rapid OTA Updates", highlight: true },
  { name: "Firebase", category: "Backend", note: "Auth & Cloud Messaging", highlight: true },
  { name: "Supabase Mobile", category: "Backend", note: "PostgreSQL & Realtime", highlight: false },
  { name: "RevenueCat", category: "Monetization", note: "In-App Subscriptions", highlight: true },
  { name: "WatermelonDB", category: "Database", note: "Offline-First Sync", highlight: false },
  { name: "GraphQL / REST", category: "APIs", note: "High-Speed Endpoints", highlight: false },
  { name: "TestFlight", category: "QA", note: "Apple Beta Testing", highlight: false },
  { name: "Google Play Console", category: "Release", note: "Android Store Review", highlight: false },
];

const mobileCapabilities = [
  {
    icon: Smartphone,
    titleDe: "Cross-Platform mit React Native & Flutter",
    titleEn: "Cross-Platform React Native & Flutter",
    descDe:
      "Eine gemeinsame Codebasis für iOS und Android bei nativer 60 FPS Performance. Lesen Sie unsere Analyse zu [React Native App Entwicklung](/blog/react-native-cross-platform-apps) oder sparen Sie bis zu 50% der Entwicklungs- und Wartungskosten ohne Kompromisse bei der User Experience.",
    descEn:
      "A unified codebase powering iOS and Android at buttery-smooth 60 FPS. Save up to 50% in development and ongoing maintenance without sacrificing native fidelity.",
    tagsDe: ["50% geringere Kosten", "Schnellere Time-to-Market", "Gemeinsame UI-Komponenten"],
    tagsEn: ["50% reduced costs", "Accelerated time-to-market", "Shared UI component library"],
  },
  {
    icon: Fingerprint,
    titleDe: "Hardware-Integration & Biometrie",
    titleEn: "Native Hardware & Biometrics",
    descDe:
      "Vollständige Nutzung von FaceID, TouchID, Kamera, GPS-Geofencing, Bluetooth BLE, Beschleunigungssensoren und haptischem Feedback für ein erstklassiges App-Gefühl.",
    descEn:
      "Direct integration of FaceID, TouchID, high-res camera pipelines, GPS geofencing, Bluetooth BLE, gyroscopes, and haptic feedback for a flagship app feel.",
    tagsDe: ["FaceID / TouchID", "Echtzeit GPS-Tracking", "Bluetooth Low Energy"],
    tagsEn: ["FaceID / TouchID", "Real-time GPS tracking", "Bluetooth Low Energy"],
  },
  {
    icon: WifiOff,
    titleDe: "Offline-First Architektur & Daten-Sync",
    titleEn: "Offline-First Architecture & Sync",
    descDe:
      "Ihre App funktioniert zuverlässig ohne Internetverbindung im Flugzeug oder im Funkloch. Sobald eine Verbindung besteht, synchronisieren sich Daten im Hintergrund.",
    descEn:
      "Your app performs flawlessly with zero cell service or in airplane mode. Changes queue locally and sync conflict-free the moment connection restores.",
    tagsDe: ["Lokale SQLite Speicherung", "Hintergrund-Synchronisation", "Konfliktfreie Replikation"],
    tagsEn: ["Local SQLite caching", "Background workers", "Conflict-free replication"],
  },
  {
    icon: Bell,
    titleDe: "Push-Benachrichtigungen & Smart Deep Linking",
    titleEn: "Push Notifications & Deep Linking",
    descDe:
      "Gezielte, personalisierte Push-Benachrichtigungen via Firebase & OneSignal. Nutzer werden direkt auf den relevanten App-Screen geleitet, um die Bindung zu maximieren.",
    descEn:
      "Targeted, personalized push notifications powered by Firebase and OneSignal. Route users directly into contextual in-app screens to drive retention.",
    tagsDe: ["FCM & APNs Integration", "Segmentierte Kampagnen", "Universelle Web-Links"],
    tagsEn: ["FCM & APNs integration", "Segmented user campaigns", "Universal web deep links"],
  },
  {
    icon: CreditCard,
    titleDe: "In-App Purchases, Apple Pay & Google Pay",
    titleEn: "In-App Purchases, Apple Pay & Google Pay",
    descDe:
      "Reibungslose Monetarisierung mit Apple In-App Purchases, Google Play Billing, Stripe und RevenueCat für Einmalkäufe oder monatliche Abonnements.",
    descEn:
      "Frictionless monetization via Apple In-App Purchases, Google Play Billing, Stripe, and RevenueCat for single purchases or recurring subscriptions.",
    tagsDe: ["RevenueCat Subscriptions", "One-Touch Apple/Google Pay", "Rechtssichere Steuerlogik"],
    tagsEn: ["RevenueCat subscriptions", "One-touch Apple & Google Pay", "Automated VAT & tax handling"],
  },
  {
    icon: ShieldCheck,
    titleDe: "100% App Store & Play Store Garantie",
    titleEn: "100% App Store & Play Store Guarantee",
    descDe:
      "Wir übernehmen den gesamten Zulassungsprozess: Screenshots, rechtliche Anforderungen, Datenschutz-Metadaten und den Dialog mit den Review-Teams von Apple und Google.",
    descEn:
      "We orchestrate the entire store approval gauntlet: localized screenshot assets, privacy compliance manifests, review submissions, and direct review resolution.",
    tagsDe: ["Null Ablehnungs-Garantie", "DSGVO Privacy Manifest", "Automatisierte CI/CD Builds"],
    tagsEn: ["Zero rejection guarantee", "Apple Privacy Manifests", "Automated CI/CD build delivery"],
  },
];

const comparisonData = [
  {
    criterionDe: "Time-to-Market & Entwicklungszeit",
    criterionEn: "Time-to-Market & Delivery",
    crossDe: "4–8 Wochen (1 Team baut für iOS & Android zeitgleich)",
    crossEn: "4–8 weeks (1 team delivers iOS & Android simultaneously)",
    nativeDe: "10–18 Wochen (2 separate Teams nötig)",
    nativeEn: "10–18 weeks (Requires two distinct engineering teams)",
  },
  {
    criterionDe: "Budget & Gesamtkosten",
    criterionEn: "Budget & Initial Investment",
    crossDe: "Bis zu 50% günstiger durch gemeinsame Codebasis",
    crossEn: "Up to 50% more affordable through unified code",
    nativeDe: "Doppelte Kosten (Swift für iOS + Kotlin für Android)",
    nativeEn: "Double the cost (Separate Swift & Kotlin developers)",
  },
  {
    criterionDe: "Performance & Flüssigkeit",
    criterionEn: "Performance & Rendering",
    crossDe: "Butterweiche 60 FPS (99% identisch zu reinem Native)",
    crossEn: "Buttery-smooth 60 FPS (99% identical to pure native)",
    nativeDe: "100% nativer Hardware-Zugriff (ideal für High-End Games)",
    nativeEn: "100% native hardware direct access (ideal for 3D games)",
  },
  {
    criterionDe: "Wartung & Feature-Updates",
    criterionEn: "Maintenance & Feature Iterations",
    crossDe: "Ein Update aktualisiert sofort beide Plattformen",
    crossEn: "One code update rolls out to both platforms at once",
    nativeDe: "Alle Features müssen doppelt programmiert werden",
    nativeEn: "Every single feature must be programmed and tested twice",
  },
];

const processSteps = [
  {
    step: "01",
    phase: "Sprint 1",
    titleDe: "User Journey & Klickbarer Prototyp",
    titleEn: "User Journey & Clickable Prototype",
    descDe:
      "Wir entwickeln das UI/UX-Design in Figma nach Human Interface Guidelines (Apple) und Material Design (Google). Sie testen die App direkt auf Ihrem Smartphone.",
    descEn:
      "We engineer the UI/UX design in Figma strictly adhering to Apple Human Interface Guidelines and Google Material Design. You test an interactive prototype on your device.",
  },
  {
    step: "02",
    phase: "Sprint 2–3",
    titleDe: "Cross-Platform Entwicklung & APIs",
    titleEn: "Cross-Platform Core & API Integration",
    descDe:
      "Aufbau des App-Kerns in React Native oder Flutter. Anbindung von Authentifizierung, Datenbank, Push-Benachrichtigungen und Drittanbieter-Schnittstellen.",
    descEn:
      "Engineering the mobile engine in React Native or Flutter. Integrating user authentication, backend databases, push workers, and third-party APIs.",
  },
  {
    step: "03",
    phase: "Sprint 4",
    titleDe: "TestFlight & Reale Gerätetests",
    titleEn: "TestFlight & Real Device QA",
    descDe:
      "Umfassende QA auf echten iPhones und Android-Geräten über Apple TestFlight und Google Internal Testing. Feinabstimmung von Ladezeiten und Animationen.",
    descEn:
      "Rigorous quality assurance across physical iPhones and Android devices via Apple TestFlight and Google Internal Testing. Tuning performance and animations.",
  },
  {
    step: "04",
    phase: "Sprint 5+",
    titleDe: "Store Launch & Fortlaufende Updates",
    titleEn: "Store Launch & Ongoing Updates",
    descDe:
      "Offizielle Einreichung bei Apple und Google mit garantierter Freigabe. Nach dem Launch begleiten wir Sie bei iOS/Android-Systemupdates und Feature-Erweiterungen.",
    descEn:
      "Official submission to Apple App Store and Google Play Store with guaranteed approval. Post-launch SLA support covering annual OS upgrades and features.",
  },
];

const packages = [
  {
    id: "mvp",
    nameDe: "MVP Starter App",
    nameEn: "MVP Starter App",
    badgeDe: "Schneller Markttest",
    badgeEn: "Fast Market Validation",
    priceDe: "ab 3.490 €",
    priceEn: "from €3,490",
    descDe: "Ideal für Startups, die eine schlanke, verifizierte mobile App für iOS und Android auf den Markt bringen möchten.",
    descEn: "Tailored for startups seeking a sleek, validated mobile application across iOS & Android stores.",
    featuresDe: [
      "iOS & Android mit einer React Native / Flutter Codebase",
      "Figma UI/UX Design (bis zu 7 Kern-Screens)",
      "Benutzerregistrierung & Social Login",
      "Push-Benachrichtigungen Grundausstattung",
      "TestFlight & Google Play Beta-Verteilung",
      "Garantierte App Store & Play Store Freigabe",
      "Lieferzeit: 4–6 Wochen",
    ],
    featuresEn: [
      "iOS & Android unified React Native or Flutter codebase",
      "Custom Figma UI/UX design (up to 7 key screens)",
      "User authentication & social logins (Apple/Google)",
      "Essential push notification infrastructure",
      "TestFlight & Google Play beta rollout",
      "Guaranteed App Store & Play Store approval",
      "Delivery: 4–6 weeks",
    ],
    popular: false,
  },
  {
    id: "business",
    nameDe: "Full-Scale Business App",
    nameEn: "Full-Scale Business App",
    badgeDe: "Bestseller",
    badgeEn: "Most Popular",
    priceDe: "ab 5.990 €",
    priceEn: "from €5,990",
    descDe: "Für etablierte Unternehmen, die eine hochmoderne Kunden- oder Mitarbeiter-App mit Backend-Infrastruktur fordern.",
    descEn: "For established businesses needing a cutting-edge client or operational app with cloud infrastructure.",
    featuresDe: [
      "Umfangreiche App (bis zu 16 Bildschirme)",
      "Offline-First SQLite Datensynchronisation",
      "In-App Purchases (Abo-System mit RevenueCat)",
      "Hardware-Anbindung (Kamera, Biometrie, GPS)",
      "Custom REST / Supabase Backend mit Admin-Panel",
      "Erweitertes Crashlytics & Analytics Dashboard",
      "60 Tage kostenloser Priority-Support nach Launch",
      "Lieferzeit: 6–8 Wochen",
    ],
    featuresEn: [
      "Comprehensive mobile application (up to 16 screens)",
      "Offline-first local SQLite sync architecture",
      "In-app purchases & recurring subscription engine",
      "Hardware access (biometrics, camera, geofencing)",
      "Custom Supabase/REST cloud backend & admin portal",
      "Automated Crashlytics & user retention analytics",
      "60 days dedicated priority post-launch support",
      "Delivery: 6–8 weeks",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    nameDe: "Custom Enterprise Mobile Platform",
    nameEn: "Custom Enterprise Mobile Platform",
    badgeDe: "Enterprise Komplettlösung",
    badgeEn: "Enterprise Solution",
    priceDe: "Individuelles Angebot",
    priceEn: "Custom Quote",
    descDe: "Skalierbare Plattformen mit komplexen Backend-Workflows, BLE-Hardware-Kopplung oder Echtzeit-Marktplätzen.",
    descEn: "High-concurrency mobile platforms, real-time dispatch systems, or IoT/Bluetooth connected ecosystems.",
    featuresDe: [
      "Maßgeschneiderte Architektur ohne Screen-Limit",
      "Echtzeit-WebSockets & Live-Standortübertragung",
      "Bluetooth BLE / IoT Hardware-Kopplung",
      "Multi-Tenant Berechtigungen & Audit-Logs",
      "Dedicated CI/CD Release-Automation Pipeline",
      "Enterprise SLA mit festem Reaktionszeit-Versprechen",
      "Roadmap & Sprint-Planung nach Maß",
    ],
    featuresEn: [
      "Custom mobile architecture with limitless scope",
      "Real-time WebSockets & live geotracking engines",
      "Bluetooth BLE / IoT device pairing protocols",
      "Multi-tenant permissions & compliance audit logging",
      "Automated CI/CD build deployment pipeline",
      "Enterprise SLA with contractual response times",
      "Milestone-based dedicated engineering team",
    ],
    popular: false,
  },
];

const faqs = [
  {
    qDe: "Lohnt sich Cross-Platform (React Native / Flutter) wirklich gegenüber nativer Entwicklung?",
    qEn: "Is cross-platform development (React Native / Flutter) truly comparable to native?",
    aDe: "Ja, absolut. Über 80% aller Top-Apps (wie Instagram, Airbnb, Discord oder Shopify) setzen auf Cross-Platform. Sie erhalten eine einzige Codebasis für iOS und Android, halbieren die Entwicklungskosten und haben trotzdem vollen Zugriff auf alle Smartphone-Sensoren und flüssige 60 FPS Animationen.",
    aEn: "Yes, without question. Over 80% of top consumer apps (including Instagram, Discord, and Shopify) leverage cross-platform frameworks. You maintain a single codebase for iOS and Android, cut upfront costs in half, and still enjoy 60 FPS performance and native sensor integration.",
  },
  {
    qDe: "Was passiert, wenn Apple oder Google die App im Store ablehnen?",
    qEn: "What happens if Apple or Google rejects our app during review?",
    aDe: "Wir geben Ihnen eine 100%ige Zulassungsgarantie. Sollte das Review-Team von Apple oder Google Rückfragen oder Beanstandungen haben, beheben wir diese sofort auf unsere Kosten. Sie können jederzeit unverbindlich [Kontakt aufnehmen](/contact), um Ihr App-Projekt vorab durchzusprechen.",
    aEn: "We back our work with a 100% App Store approval guarantee. If Apple or Google reviewers request modifications, our team resolves them immediately at no additional cost until your app is live.",
  },
  {
    qDe: "Wer besitzt den Quellcode und die Urheberrechte nach Fertigstellung?",
    qEn: "Who owns the source code and IP rights upon completion?",
    aDe: "Sie besitzen zu 100% alle Rechte am Quellcode, an den Designs und an den Store-Accounts. Wir übergeben Ihnen nach Projektabschluss das vollständige Git-Repository und richten die Apps direkt in Ihren Apple- und Google-Entwicklerkonten ein.",
    aEn: "You own 100% of the intellectual property, source code, and design assets. Upon project completion, we hand over the full Git repository and publish the apps directly under your organization's Apple and Google developer accounts.",
  },
  {
    qDe: "Können wir die App mit unserer bestehenden Website oder unserem CRM verbinden?",
    qEn: "Can the app connect with our existing website or internal CRM?",
    aDe: "Ja. Wir bauen standardisierte REST- oder GraphQL-APIs, über die Ihre mobile App in Echtzeit mit Ihrer [individuellen Webentwicklung](/services/web-development), Ihrem Onlineshop oder mit [KI-Automatisierung für Unternehmen](/services/ai-automation) (z.B. n8n-Workflows) kommuniziert.",
    aEn: "Yes. We engineer robust REST or GraphQL APIs enabling your mobile app to synchronize in real time with your website, e-commerce catalog, or CRM infrastructure (such as HubSpot, Salesforce, or custom n8n pipelines).",
  },
  {
    qDe: "Was geschieht bei neuen iOS- und Android-Versionen im Herbst?",
    qEn: "How are annual iOS and Android OS updates handled?",
    aDe: "Apple und Google veröffentlichen jährlich große System-Updates. In unseren monatlichen Wartungspaketen prüfen und aktualisieren wir Ihre App vorab in den Beta-Phasen, damit Ihre Nutzer am Release-Tag keine Abstürze oder Inkompatibilitäten erleben.",
    aEn: "Apple and Google roll out major OS upgrades annually. Under our proactive maintenance agreements, we audit and update your app across developer beta releases, guaranteeing zero crashes on public launch day.",
  },
];

export default function MobileAppPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("Mobile-App-Entwicklung");
  const [activeScreenTab, setActiveScreenTab] = useState<"ecommerce" | "dashboard" | "offline">("ecommerce");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tableScrollRef = useRef<HTMLDivElement>(null);
  const [tableScrollPercent, setTableScrollPercent] = useState(0);

  const handleTableScroll = () => {
    if (tableScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tableScrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setTableScrollPercent(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
      }
    }
  };

  const scrollTable = (direction: "left" | "right") => {
    if (tableScrollRef.current) {
      const scrollAmount = 260;
      tableScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const percent = Number(e.target.value);
    setTableScrollPercent(percent);
    if (tableScrollRef.current) {
      const { scrollWidth, clientWidth } = tableScrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      tableScrollRef.current.scrollLeft = (percent / 100) * maxScroll;
    }
  };

  const { t, lang } = useLanguage();

  const handleOpenContactWithPackage = (pkgName: string) => {
    setSelectedPackage(`Mobile App: ${pkgName}`);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-[#0F172A] selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => { setSelectedPackage("Mobile-App-Entwicklung"); setContactOpen(true); }} />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40">
        {/* Ambient glows */}
        <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-blue-200/40 via-indigo-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-orange-100/30 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />

        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("Startseite", "Home")}
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{t("Services", "Services")}</span>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 font-semibold">{t("Mobile-App-Entwicklung", "Mobile App Development")}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              {/* Eyebrow Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/90 text-blue-700 text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  <span>{t("Cross-Platform & Native iOS/Android • 100% Store Approval", "Cross-Platform & Native iOS/Android • 100% Store Approval")}</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-[35px] sm:text-[55px] lg:text-[60px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 sm:mb-6 text-center lg:text-left">
                {t("App entwickeln lassen: ", "Mobile Apps Designed to ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-400">
                  {t("Nativ für iOS & Android", "Captivate Users & Dominate")}
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 sm:mb-8 max-w-2xl font-normal text-center lg:text-left mx-auto lg:mx-0">
                {t(
                  "Von der ersten Figma-Skizze bis zum weltweiten Rollout im Apple App Store & Google Play Store: Wir entwickeln butterweiche, native & cross-platform Apps mit React Native und Flutter – für maximale Reichweite und geringere Entwicklungskosten.",
                  "From initial Figma wireframes to worldwide Apple App Store & Google Play distribution: We build buttery-smooth, native & cross-platform mobile apps with React Native and Flutter — maximizing reach while slashing engineering costs."
                )}
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-9">
                {[
                  { icon: Apple, label: "iOS & Android", sub: t("1 Codebasis", "Single Codebase") },
                  { icon: Gauge, label: "60 FPS Native", sub: t("Butterweich", "Zero Lag") },
                  { icon: ShieldCheck, label: t("100% Freigabe", "100% Approval"), sub: t("Apple & Google", "Store Guaranteed") },
                  { icon: Clock, label: t("4–8 Wochen", "4–8 Weeks"), sub: t("Bis zum MVP", "MVP Delivery") },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-900">{label}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">{sub}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                >
                  <span>{t("App-Projekt unverbindlich anfragen", "Request App Consultation")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300/80 bg-white/90 backdrop-blur-xs text-slate-800 text-sm sm:text-base font-bold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Sliders className="w-4 h-4 text-slate-500" />
                  <span>{t("Pakete & Preise ansehen", "View Packages & Pricing")}</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Interactive Smartphone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-[340px] sm:max-w-[380px] relative">
                {/* Phone Exterior Frame */}
                <div className="relative rounded-[44px] bg-slate-950 p-3 sm:p-3.5 shadow-2xl border-[4px] border-slate-800">
                  {/* Dynamic Island / Speaker */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-between px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                    <div className="w-2 h-2 rounded-full bg-blue-500/60 animate-pulse" />
                  </div>

                  {/* Phone Screen Container */}
                  <div className="relative rounded-[36px] bg-slate-900 text-white overflow-hidden aspect-[9/16] flex flex-col justify-between pt-10 pb-4 px-4 border border-slate-800/80">
                    {/* Screen Navigation Tabs */}
                    <div className="flex gap-1 bg-slate-800/90 p-1 rounded-xl mb-3 text-[11px] font-semibold">
                      <button
                        onClick={() => setActiveScreenTab("ecommerce")}
                        className={`flex-1 py-1 rounded-lg transition-all ${
                          activeScreenTab === "ecommerce"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Shop / Pay
                      </button>
                      <button
                        onClick={() => setActiveScreenTab("dashboard")}
                        className={`flex-1 py-1 rounded-lg transition-all ${
                          activeScreenTab === "dashboard"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Dashboard
                      </button>
                      <button
                        onClick={() => setActiveScreenTab("offline")}
                        className={`flex-1 py-1 rounded-lg transition-all ${
                          activeScreenTab === "offline"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Offline Sync
                      </button>
                    </div>

                    {/* Tab 1: E-Commerce Screen */}
                    {activeScreenTab === "ecommerce" && (
                      <div className="flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-medium text-blue-400">Order #8492</span>
                            <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 px-2 py-0.5 rounded-full font-bold">
                              Delivered
                            </span>
                          </div>

                          <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/60">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                                🛍️
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xs font-bold text-white">Nexa Premium Box</h4>
                                <span className="text-[11px] text-slate-400">1x Express Courier</span>
                              </div>
                              <span className="text-xs font-black text-white">€89.00</span>
                            </div>
                          </div>

                          {/* Live Tracking Card */}
                          <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/40">
                            <div className="flex items-center justify-between text-[11px] mb-2">
                              <span className="text-slate-300 font-medium">Live GPS Tracking</span>
                              <span className="text-sky-400 font-bold">4 min entfernt</span>
                            </div>
                            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full w-[85%] rounded-full" />
                            </div>
                          </div>
                        </div>

                        {/* Apple Pay Button */}
                        <div className="space-y-2">
                          <button className="w-full py-3 bg-white text-black rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md">
                            <Apple className="w-4 h-4 fill-current" />
                            <span>Pay with Apple Pay</span>
                          </button>
                          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                            <span>End-to-End SSL Encrypted</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Dashboard Screen */}
                    {activeScreenTab === "dashboard" && (
                      <div className="flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">Analytics Overview</span>
                            <span className="text-[10px] text-slate-400">Real-Time</span>
                          </div>

                          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3.5 rounded-2xl">
                            <span className="text-[10px] text-blue-200 uppercase font-semibold">Active Users</span>
                            <div className="text-2xl font-black text-white mt-0.5">24,892</div>
                            <span className="text-[10px] text-emerald-300 font-medium">+18.4% this week</span>
                          </div>

                          {/* Simulated push notification */}
                          <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 flex items-start gap-2.5 shadow-lg">
                            <Bell className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                            <div className="text-left">
                              <div className="text-[11px] font-bold text-white">Neue Bestellung erhalten</div>
                              <div className="text-[10px] text-slate-300">Kunde hat 149€ via Stripe bezahlt</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 bg-slate-800/50 rounded-xl text-center text-[10px] text-slate-400">
                          Cross-Platform Push Notifications via Firebase FCM
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Offline Sync */}
                    {activeScreenTab === "offline" && (
                      <div className="flex-1 flex flex-col justify-between space-y-3 text-left">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">SQLite Local Store</span>
                            <span className="text-[10px] text-emerald-400 font-medium">Status: Offline-Ready</span>
                          </div>

                          <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1.5 text-[11px]">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Gecachte Datensätze:</span>
                              <span className="text-white font-semibold">1,420 Items</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Lokale DB:</span>
                              <span className="text-white font-semibold">WatermelonDB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Sync-Konflikte:</span>
                              <span className="text-emerald-400 font-semibold">0 (Auto-Merge)</span>
                            </div>
                          </div>

                          <div className="p-3 bg-blue-950/40 border border-blue-800/50 rounded-2xl text-[11px] text-blue-200">
                            Kein Internet nötig. Änderungen werden sofort lokal gespeichert und bei Reconnect übertragen.
                          </div>
                        </div>

                        <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>100% DSGVO & Local Data Privacy</span>
                        </div>
                      </div>
                    )}

                    {/* Bottom Home Indicator Bar */}
                    <div className="w-28 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
                  </div>
                </div>

                {/* Floating Rating Pill */}
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
                      {t("Durchschnittliche Store-Bewertung", "Average Store Rating")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-10 sm:py-12 lg:py-16  bg-white border-t border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Layers className="w-3.5 h-3.5" />
              <span>{t("APP-LEISTUNGEN", "MOBILE CAPABILITIES")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Alles, was eine erfolgreiche App benötigt", "Everything Your App Needs to Scale")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Keine halben Sachen. Von butterweichem UI-Design bis hin zu robuster Cloud-Architektur und Push-Marketing.",
                "Zero compromises. From bespoke UI micro-interactions to cloud backend orchestration and retention funnels."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-[5px] border border-slate-200/90 bg-slate-50/50 p-8 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 text-blue-600 inline-flex items-center justify-center mb-6 shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-blue-600  group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-[19px] sm:text-[24px] font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {t(cap.titleDe, cap.titleEn)}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                      {renderWithLinks(t(cap.descDe, cap.descEn))}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 space-y-1.5">
                    {(lang === "de" ? cap.tagsDe : cap.tagsEn).map((tag, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Platform vs. Pure Native Comparison */}
      <section className="py-10 sm:py-12 lg:py-16  bg-slate-50/70">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>{t("ARCHITEKTUR-VERGLEICH", "ARCHITECTURE COMPARISON")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Cross-Platform vs. Reines Native", "Cross-Platform vs. Traditional Native")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Warum 85% unserer Kunden auf React Native oder Flutter setzen – und wann reine Native Entwicklung sinnvoll ist.",
                "Why 85% of our clients choose unified cross-platform stacks — and when pure native development makes sense."
              )}
            </p>
          </div>

          <div className="bg-white rounded-[5px] border border-slate-200/90 shadow-md overflow-hidden">
            <div
              ref={tableScrollRef}
              onScroll={handleTableScroll}
              className="overflow-x-auto table-horizontal-scrollbar pb-1 sm:pb-0"
            >
              <table className="w-full text-left border-collapse min-w-[680px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60">
                    <th className="py-4 px-6 text-sm sm:text-base font-bold text-slate-700 w-1/3">
                      {t("Kriterium", "Evaluation Metric")}
                    </th>
                    <th className="py-4 px-6 text-sm sm:text-base font-bold text-blue-600 bg-blue-50/50 w-1/3">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        React Native / Flutter (Nexa Standard)
                      </span>
                    </th>
                    <th className="py-4 px-6 text-sm sm:text-base font-bold text-slate-500 w-1/3">
                      {t("Zwei separate Native Apps (Swift + Kotlin)", "Two Separate Native Apps (Swift + Kotlin)")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm sm:text-base">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-slate-900">
                        {t(row.criterionDe, row.criterionEn)}
                      </td>
                      <td className="py-5 px-6 text-slate-800 bg-blue-50/20 font-medium">
                        <span className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{t(row.crossDe, row.crossEn)}</span>
                        </span>
                      </td>
                      <td className="py-5 px-6 text-slate-500">
                        <span className="flex items-start gap-2">
                          <span className="text-slate-400 font-medium">•</span>
                          <span>{t(row.nativeDe, row.nativeEn)}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Bottom Scroll Bar & Controller */}
            <div className="flex sm:hidden flex-col gap-2.5 px-4 py-3 bg-slate-50 border-t border-slate-200/80">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  {t("Tabelle horizontal scrollen", "Swipe or scroll table")}
                </span>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded-full">
                  {tableScrollPercent < 30
                    ? t("Kriterium", "Evaluation Metric")
                    : tableScrollPercent > 70
                    ? t("Native Swift/Kotlin", "Native Swift/Kotlin")
                    : "Cross-Platform (Nexa)"}
                </span>
              </div>

              {/* Interactive Scroll Bar Track with Left/Right Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollTable("left")}
                  aria-label="Scroll left"
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 active:scale-95 active:bg-blue-50 active:text-blue-600 transition-all cursor-pointer shrink-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="relative flex-1 h-3 bg-slate-200 rounded-full overflow-hidden p-0.5 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={tableScrollPercent}
                    onChange={handleSliderChange}
                    aria-label="Table horizontal scroll position"
                    className="w-full h-full opacity-0 absolute inset-0 cursor-ew-resize z-10"
                  />
                  {/* Visual blue thumb */}
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-[width,transform] duration-75 pointer-events-none"
                    style={{
                      width: "42%",
                      transform: `translateX(${(tableScrollPercent / 100) * 138}%)`,
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => scrollTable("right")}
                  aria-label="Scroll right"
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 active:scale-95 active:bg-blue-50 active:text-blue-600 transition-all cursor-pointer shrink-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-10 sm:py-12 lg:py-16  bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t("MOBILE TECH STACK", "MOBILE TECHNOLOGIES")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-white tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Ausgewählt für Top-Performance auf iOS & Android", "Proven Frameworks for iOS & Android Dominance")}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Modernste mobile Bibliotheken und APIs für schnelle Entwicklungszyklen und null Ausfallzeiten.",
                "Modern mobile SDKs and pipelines guaranteeing fast release velocity and rock-solid uptime."
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  tech.highlight
                    ? "bg-slate-900/90 border-blue-500/40 hover:border-blue-400 shadow-sm"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-start justify-between gap-1.5 mb-2 sm:mb-1.5">
                  <span className="font-bold text-sm text-white leading-snug">{tech.name}</span>
                  {tech.highlight && (
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-1" />
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-1 text-[11px]">
                  <span className="text-blue-400/90 font-medium">{tech.category}</span>
                  <span className="text-slate-400 font-medium">{tech.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step App Delivery Process */}
      <section id="process" className="py-10 sm:py-12 lg:py-16  bg-white border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Rocket className="w-3.5 h-3.5" />
              <span>{t("DER ABLAUF", "APP LIFECYCLE")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Von der Idee zum Store-Launch in 4 Meilensteinen", "From Idea to Store Launch in 4 Milestones")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Kein Blindflug. Sie halten bereits nach den ersten 14 Tagen den ersten interaktiven Prototyp in der Hand.",
                "Zero guesswork. You'll test an interactive prototype on your device within the first 14 days."
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
                className="relative rounded-3xl p-7 bg-slate-50/60 border border-slate-200/90 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-blue-500/20">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-full">
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

      {/* Featured Mobile Case Studies */}
      <section className="py-10 sm:py-12 lg:py-16  bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("PROJEKTE", "FEATURED APPS")}</span>
              </div>
              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-2">
                {t("Erfolgreich veröffentlichte Apps", "Apps We've Engineered & Shipped")}
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>{t("Alle Projekte ansehen", "View All Projects")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Taibeena Lifestyle App",
                category: t("Community & E-Commerce", "Community & E-Commerce"),
                metric: "4.9 Store Rating",
                descDe: "Cross-Platform Mobile App mit personalisiertem Feed, Audio-Player und In-App Käufen.",
                descEn: "Cross-platform mobile experience with personalized feed, audio player, and in-app checkout.",
                image: "/images/taibeena.jpg",
                tags: ["React Native", "Audio Streaming", "Stripe"],
              },
              {
                title: "HumNikah Matchmaking",
                category: t("Social & Realtime Chat", "Social & Realtime Chat"),
                metric: "50k+ Active Matches",
                descDe: "Sichere Matching-Plattform mit Echtzeit-WebSockets, Bild-Verifizierung und Push-Alerts.",
                descEn: "Verified matchmaking platform featuring real-time WebSockets, selfie validation, and push notifications.",
                image: "/images/project-humnikahs-img.png",
                tags: ["Flutter", "WebSockets", "Firebase"],
              },
              {
                title: "Meagle Field Ops",
                category: t("Enterprise Operations", "Enterprise Operations"),
                metric: "Offline-Ready",
                descDe: "Interne Außendienst-App mit Offline-Erfassung, GPS-Routen und PDF-Protokollerstellung.",
                descEn: "Field ops mobile tool with offline form sync, GPS route logging, and automated PDF reports.",
                image: "/images/app-dev.png",
                tags: ["React Native", "SQLite", "Supabase"],
              },
            ].map((app, i) => (
              <div
                key={i}
                className="group rounded-[5px] bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={app.image}
                    alt={`${app.title} – Mobile App Entwicklungsbeispiel Nexa Solutions`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-sky-400 text-xs font-bold px-3 py-1 rounded-full border border-slate-700/60">
                    {app.metric}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide block mb-1">
                      {app.category}
                    </span>
                    <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2">{app.title}</h3>
                    <p className="text-base sm:text-lg text-slate-600 mb-5 leading-relaxed">
                      {t(app.descDe, app.descEn)}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {app.tags.map((tag) => (
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

      {/* Pricing / Packages */}
      <section id="pricing" className="py-10 sm:py-12 lg:py-16  bg-white border-b border-slate-100">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sliders className="w-3.5 h-3.5" />
              <span>{t("TRANSPARENTE PAKETE", "APP PACKAGES")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Kalkulierbare App-Pakete für jedes Budget", "Predictable App Packages Tailored to Your Stage")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Keine versteckten Gebühren. Jedes Paket beinhaltet den Store-Zulassungsprozess und vollständigen Code-Besitz.",
                "Zero hidden surprises. Every package includes store submission management and 100% IP ownership."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-[5px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? "bg-slate-900 text-white shadow-2xl border-2 border-blue-500 scale-[1.02] lg:-translate-y-2"
                    : "bg-slate-50/70 text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black tracking-wider uppercase px-4 py-1.5 rounded-[5px] shadow-md">
                    {t(pkg.badgeDe, pkg.badgeEn)}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        pkg.popular ? "text-blue-400" : "text-blue-600"
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
                    <span className="text-3xl sm:text-4xl lg:text-[42px] font-[900] tracking-tight">
                      {t(pkg.priceDe, pkg.priceEn)}
                    </span>
                  </div>

                  <p
                    className={`text-base sm:text-lg mb-8 leading-relaxed ${
                      pkg.popular ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {t(pkg.descDe, pkg.descEn)}
                  </p>

                  <div className="space-y-3 mb-8">
                    {(lang === "de" ? pkg.featuresDe : pkg.featuresEn).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-medium">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.popular ? "text-blue-400" : "text-blue-600"
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
                  className={`w-full py-3.5 px-6 rounded-[5px] text-sm sm:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
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
          <div className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>{t("HÄUFIG GESTELLTE FRAGEN", "FAQ")}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center">
              {t("Antworten rund um Ihre mobile App", "Everything About Your Mobile Project")}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-center">
              {t(
                "Klare Details zu Stores, Rechten, Kosten und Betreuung nach dem Launch.",
                "Transparent details concerning stores, code ownership, costs, and ongoing updates."
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
                      openFaq === idx ? "rotate-180 text-blue-600" : ""
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

      {/* Bottom CTA Banner */}
      <section className="py-10 sm:py-12 lg:py-16  bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t("BEREIT FÜR DEN APP STORE?", "READY TO LAUNCH YOUR APP?")}</span>
          </div>

          <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-white tracking-tight leading-[1.10] sm:leading-[1.09] mb-5 text-center">
            {t("Lassen Sie uns Ihre App-Idee verwirklichen.", "Let's bring your mobile vision to life.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal text-center">
            {t(
              "Sichern Sie sich ein kostenloses 20-minütiges Beratungsgespräch. Wir klären Machbarkeit, Store-Anforderungen und erstellen Ihnen eine unverbindliche Roadmap.",
              "Book a no-obligation 20-minute strategy call. We'll assess technical feasibility, evaluate store guidelines, and draft a timeline estimate."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <span>{t("Kostenloses Gespräch buchen", "Book a Free Consultation")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/918077313241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm sm:text-base font-bold transition-all duration-200 border border-white/15 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {t("Kostenlos & unverbindlich", "100% Free & No-Obligation")}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              {t("Konkrete Roadmap in 24 Std.", "Clear Proposal Within 24h")}
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
