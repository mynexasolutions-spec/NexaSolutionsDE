"use client";

import React, { useState } from "react";
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
  Star,
  Zap,
  Bell,
  Palette,
  Rocket,
  ArrowLeft,
  Apple,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  "React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)",
  "Firebase", "GraphQL", "Supabase", "Expo",
  "Push Notifications", "Deep Linking", "Crashlytics", "Redux",
];

const deliverables = [
  {
    icon: Apple,
    de: "Native iOS & Android Builds",
    en: "Native iOS & Android builds",
  },
  {
    icon: Palette,
    de: "Pixel-perfektes UI/UX-Design",
    en: "Pixel-perfect UI/UX design",
  },
  {
    icon: Bell,
    de: "Push-Benachrichtigungen & Deep Linking",
    en: "Push notifications & deep linking",
  },
  {
    icon: Play,
    de: "App Store & Play Store Zulassung",
    en: "App Store & Play Store approval",
  },
  {
    icon: ShieldCheck,
    de: "Automatisches Crash-Reporting & Analytics",
    en: "Automated crash reporting & analytics",
  },
  {
    icon: Zap,
    de: "Offline-Unterstützung & Sync",
    en: "Offline support & synchronization",
  },
];

const processSteps = [
  {
    step: "01",
    de: { title: "Produktstrategie", desc: "Wir definieren User Journeys, Features und den MVP-Scope gemeinsam mit Ihnen." },
    en: { title: "Product Strategy", desc: "We define user journeys, features and MVP scope together with you." },
  },
  {
    step: "02",
    de: { title: "UI/UX Design", desc: "Figma-Designs mit echten Interaktionen zum Testen vor der Entwicklung." },
    en: { title: "UI/UX Design", desc: "Figma designs with real interactions to test before development starts." },
  },
  {
    step: "03",
    de: { title: "Entwicklung & Tests", desc: "Cross-platform Code mit umfassenden Unit- und Integrationstests." },
    en: { title: "Development & Testing", desc: "Cross-platform code with comprehensive unit and integration tests." },
  },
  {
    step: "04",
    de: { title: "Store Submission", desc: "App Store / Play Store Review-Prozess — wir garantieren die Zulassung." },
    en: { title: "Store Submission", desc: "App Store / Play Store review process — we guarantee approval." },
  },
];

const faqs = [
  {
    de: {
      q: "Entwickelt ihr für iOS und Android gleichzeitig?",
      a: "Ja! Wir nutzen React Native oder Flutter für cross-platform Entwicklung, sodass Sie eine Codebase für beide Plattformen bekommen.",
    },
    en: {
      q: "Do you develop for iOS and Android simultaneously?",
      a: "Yes! We use React Native or Flutter for cross-platform development, giving you one codebase for both platforms.",
    },
  },
  {
    de: {
      q: "Helft ihr bei der App Store Einreichung?",
      a: "Absolut. Wir übernehmen den gesamten Prozess — Screenshots, Beschreibungen, Metadaten — und garantieren die Zulassung.",
    },
    en: {
      q: "Do you help with App Store submission?",
      a: "Absolutely. We handle the entire process — screenshots, descriptions, metadata — and guarantee approval.",
    },
  },
  {
    de: {
      q: "Wie lange dauert die App-Entwicklung?",
      a: "Ein MVP ist in 4–6 Wochen fertig. Komplexere Apps mit Backend, Echtzeit-Features und komplexem UI dauern 8–12 Wochen.",
    },
    en: {
      q: "How long does app development take?",
      a: "An MVP is ready in 4–6 weeks. More complex apps with backend, real-time features and complex UI take 8–12 weeks.",
    },
  },
  {
    de: {
      q: "Bietet ihr App-Wartung nach dem Launch an?",
      a: "Ja, wir bieten monatliche Wartungspakete an, die OS-Updates, Bugfixes und neue Features umfassen.",
    },
    en: {
      q: "Do you offer post-launch app maintenance?",
      a: "Yes, we offer monthly maintenance packages covering OS updates, bug fixes and new feature additions.",
    },
  },
];

export default function MobileAppPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-orange-500 selection:text-white">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-blue-100/50 via-orange-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-600 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("Startseite", "Home")}
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">{t("Mobile-App-Entwicklung", "Mobile App Development")}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-5">
                <Smartphone className="w-3.5 h-3.5" />
                <span>{t("Mobile Apps", "Mobile Apps")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#0F172A] tracking-tight leading-[1.1] mb-6">
                {t("Apps, die Nutzer ", "Apps that users ")}
                <span className="text-blue-600">{t("lieben & nutzen", "love & use")}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                {t(
                  "Von der Idee bis zum App-Store-Launch entwickeln wir mitreißende mobile Erlebnisse mit butterweichem UI, Offline-Unterstützung, Echtzeit-Push-Benachrichtigungen und robuster Backend-Infrastruktur.",
                  "From concept to App Store launch, we craft engaging mobile experiences with buttery-smooth UI, offline support, real-time push notifications and rock-solid backend infrastructure."
                )}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Apple, label: "iOS & Android" },
                  { icon: ShieldCheck, label: t("Store Garantie", "Store Guarantee") },
                  { icon: Rocket, label: t("4–10 Wochen", "4–10 Weeks") },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-blue-500" />
                    {label}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 group cursor-pointer"
                >
                  <span>{t("Kostenloses Angebot anfragen", "Get a Free Quote")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#process"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 text-slate-800 text-sm font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
                >
                  {t("Prozess ansehen", "View Our Process")}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 aspect-[4/3]">
                <Image
                  src="/images/app-dev.jpg"
                  alt={t("Mobile-App-Entwicklung", "Mobile App Development")}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-2xl font-black text-blue-500">iOS</div>
                    <div className="text-xs text-slate-600 font-medium">& Android</div>
                  </div>
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-2xl font-black text-blue-500">100%</div>
                    <div className="text-xs text-slate-600 font-medium">{t("Store Erfolg", "Store Success")}</div>
                  </div>
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="flex text-yellow-400 mb-0.5">
                      {Array(5).fill(null).map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <div className="text-xs text-slate-600 font-medium">{t("Bewertung", "Rating")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold tracking-wider uppercase mb-3">
              <Layers className="w-4 h-4" />
              <span>{t("WAS SIE ERHALTEN", "WHAT YOU RECEIVE")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              {t("Vollständige Lieferungen", "Complete Deliverables")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 pt-1.5">{t(item.de, item.en)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Cpu className="w-4 h-4" />
            <span>{t("TECHNOLOGIEN", "TECHNOLOGIES")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t("Cross-Platform. Nativ. Performant.", "Cross-Platform. Native. Performant.")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mb-12">
            {t(
              "Wir setzen auf bewährte Frameworks für erstklassige Performance auf iOS und Android.",
              "We use proven frameworks for top-tier performance on iOS and Android."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 text-white text-sm font-medium transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
              <Rocket className="w-4 h-4" />
              <span>{t("UNSER PROZESS", "OUR PROCESS")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              {t("Von der Idee zum App Store", "From Idea to App Store")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-blue-200 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-black text-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {t(step.de.title, step.en.title)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(step.de.desc, step.en.desc)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              {t("Häufig gestellte Fragen", "Frequently Asked Questions")}
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold text-slate-900">
                    {t(faq.de.q, faq.en.q)}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-slate-600 leading-relaxed">{t(faq.de.a, faq.en.a)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-blue-200 text-xs font-bold tracking-wider uppercase mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("LOSLEGEN", "GET STARTED")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t("Bereit für Ihre App-Idee?", "Ready to bring your app idea to life?")}
          </h2>
          <p className="text-blue-100 text-base mb-8">
            {t(
              "Lassen Sie uns kostenlos über Ihre App sprechen.",
              "Let's have a free conversation about your app."
            )}
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-blue-700 text-sm font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
          >
            <span>{t("Kostenloses Gespräch buchen", "Book a Free Consultation")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={t("Mobile-App-Entwicklung", "Mobile App Development")}
      />
    </div>
  );
}
