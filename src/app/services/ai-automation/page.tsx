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
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  "Python", "OpenAI / Claude / Gemini", "LangChain", "LangGraph",
  "n8n", "Zapier", "Pinecone", "Weaviate",
  "FastAPI", "Docker", "PostgreSQL", "Redis",
];

const deliverables = [
  {
    icon: MessageSquare,
    de: "KI-Kundensupport-Chatbots mit Wissensbasis",
    en: "AI customer support chatbots with knowledge base",
  },
  {
    icon: Workflow,
    de: "End-to-End Robotic Process Automation (RPA)",
    en: "End-to-end robotic process automation (RPA)",
  },
  {
    icon: FileSearch,
    de: "Dokument-Parsing & Datenextraktions-Pipeline",
    en: "Document parsing & data extraction pipeline",
  },
  {
    icon: BarChart3,
    de: "Prädiktive Analyse & Intelligence Dashboard",
    en: "Predictive analytics & intelligence dashboard",
  },
  {
    icon: ShieldCheck,
    de: "Enterprise Datenschutz & sichere API-Keys",
    en: "Enterprise data privacy & secure API keys",
  },
  {
    icon: Zap,
    de: "n8n / Zapier Workflow-Automatisierung",
    en: "n8n / Zapier workflow automation",
  },
];

const useCases = [
  {
    de: { title: "Lead-Qualifizierung", desc: "Automatische Bewertung und Weiterleitung von Leads basierend auf Ihren Kriterien." },
    en: { title: "Lead Qualification", desc: "Automatically score and route leads based on your criteria." },
  },
  {
    de: { title: "Kundensupport-Bot", desc: "24/7 AI-Agent beantwortet Kundenfragen aus Ihrer Wissensdatenbank." },
    en: { title: "Customer Support Bot", desc: "24/7 AI agent answers customer questions from your knowledge base." },
  },
  {
    de: { title: "Rechnungsverarbeitung", desc: "Automatisches Erfassen, Validieren und Buchen von Eingangsrechnungen." },
    en: { title: "Invoice Processing", desc: "Automatically capture, validate and book incoming invoices." },
  },
  {
    de: { title: "Social Media Automation", desc: "Content-Erstellung, Planung und Analytics — vollautomatisch." },
    en: { title: "Social Media Automation", desc: "Content creation, scheduling and analytics — fully automated." },
  },
  {
    de: { title: "Reporting & Dashboards", desc: "Tägliche/wöchentliche Reports automatisch zusammengestellt und versendet." },
    en: { title: "Reporting & Dashboards", desc: "Daily/weekly reports automatically compiled and sent." },
  },
  {
    de: { title: "E-Mail Klassifizierung", desc: "Eingehende E-Mails intelligent sortieren, priorisieren und beantworten." },
    en: { title: "Email Classification", desc: "Intelligently sort, prioritize and respond to incoming emails." },
  },
];

const processSteps = [
  {
    step: "01",
    de: { title: "Prozessanalyse", desc: "Wir identifizieren die repetitiven Aufgaben, die am meisten Zeit kosten." },
    en: { title: "Process Analysis", desc: "We identify the repetitive tasks that cost the most time." },
  },
  {
    step: "02",
    de: { title: "Automation Design", desc: "Wir entwerfen den optimalen Workflow mit den passenden KI-Modellen." },
    en: { title: "Automation Design", desc: "We design the optimal workflow with the right AI models." },
  },
  {
    step: "03",
    de: { title: "Entwicklung & Test", desc: "Aufbau, Testen und Feintuning des Automatisierungssystems." },
    en: { title: "Development & Testing", desc: "Building, testing and fine-tuning the automation system." },
  },
  {
    step: "04",
    de: { title: "Deployment & Support", desc: "Live-Schaltung und laufendes Monitoring des Systems." },
    en: { title: "Deployment & Support", desc: "Going live and ongoing monitoring of the system." },
  },
];

const faqs = [
  {
    de: {
      q: "Brauche ich technisches Wissen um n8n zu nutzen?",
      a: "Nein! Wir entwickeln und warten alle Workflows für Sie. Sie sehen nur das Ergebnis — automatisierte Prozesse.",
    },
    en: {
      q: "Do I need technical knowledge to use n8n?",
      a: "No! We develop and maintain all workflows for you. You only see the result — automated processes.",
    },
  },
  {
    de: {
      q: "Welche KI-Modelle nutzt ihr?",
      a: "Je nach Anforderung nutzen wir OpenAI GPT-4, Anthropic Claude, Google Gemini oder spezialisierte Open-Source-Modelle.",
    },
    en: {
      q: "Which AI models do you use?",
      a: "Depending on requirements, we use OpenAI GPT-4, Anthropic Claude, Google Gemini or specialized open-source models.",
    },
  },
  {
    de: {
      q: "Wie sicher sind meine Unternehmensdaten?",
      a: "Wir implementieren Enterprise-Datenschutz — Ihre Daten verlassen niemals unkontrolliert Ihre Infrastruktur. Auf Wunsch auch on-premise.",
    },
    en: {
      q: "How secure is my business data?",
      a: "We implement enterprise data privacy — your data never leaves your infrastructure uncontrolled. On-premise also available.",
    },
  },
  {
    de: {
      q: "Kann ich die Automatisierungen selbst erweitern?",
      a: "Ja! n8n ist visuell und benutzerfreundlich. Wir schulen Sie und Ihr Team im Umgang mit den Workflows.",
    },
    en: {
      q: "Can I extend the automations myself?",
      a: "Yes! n8n is visual and user-friendly. We train you and your team on how to work with the workflows.",
    },
  },
];

export default function AIAutomationPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-orange-500 selection:text-white">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("Startseite", "Home")}
            </Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">{t("KI-Automatisierung", "AI Automation")}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-wider uppercase mb-5">
                <Bot className="w-3.5 h-3.5" />
                <span>{t("KI & Automatisierung", "AI & Automation")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.1] mb-6">
                {t("Lassen Sie ", "Let ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                  {t("KI für Sie arbeiten", "AI work for you")}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
                {t(
                  "Nutzen Sie modernste LLMs, KI-Agenten und intelligente Workflows, um repetitive Aufgaben zu eliminieren, den Kundensupport zu beschleunigen und wertvolle Geschäftserkenntnisse zu gewinnen.",
                  "Leverage state-of-the-art LLMs, custom AI agents and intelligent workflows to eliminate repetitive tasks, accelerate customer support and extract valuable business insights."
                )}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Zap, label: t("80% weniger Aufwand", "80% Less Manual Work") },
                  { icon: ShieldCheck, label: t("Datenschutz", "Privacy First") },
                  { icon: Rocket, label: t("2–5 Wochen", "2–5 Weeks") },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-slate-200"
                  >
                    <Icon className="w-3.5 h-3.5 text-orange-400" />
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
                  href="#use-cases"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-slate-200 text-sm font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  {t("Anwendungsfälle", "Use Cases")}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                <Image
                  src="/images/ai-robot.jpg"
                  alt={t("KI-Automatisierung", "AI Automation")}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                    <div className="text-2xl font-black text-orange-400">80%</div>
                    <div className="text-xs text-white/80 font-medium">{t("Zeitersparnis", "Time Saved")}</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                    <div className="text-2xl font-black text-purple-400">24/7</div>
                    <div className="text-xs text-white/80 font-medium">{t("Verfügbarkeit", "Availability")}</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                    <div className="flex text-yellow-400 mb-0.5">
                      {Array(5).fill(null).map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <div className="text-xs text-white/80 font-medium">{t("Bewertung", "Rating")}</div>
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
            <div className="inline-flex items-center gap-1.5 text-purple-600 text-xs font-bold tracking-wider uppercase mb-3">
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
                  className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-purple-200 hover:bg-purple-50/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 pt-1.5">{t(item.de, item.en)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
              <Zap className="w-4 h-4" />
              <span>{t("ANWENDUNGSFÄLLE", "USE CASES")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              {t("Was wir automatisieren", "What We Automate")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <h3 className="text-sm font-bold text-slate-900">{t(uc.de.title, uc.en.title)}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{t(uc.de.desc, uc.en.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-purple-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Cpu className="w-4 h-4" />
            <span>{t("TECHNOLOGIEN", "TECHNOLOGIES")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t("Modernste KI-Infrastruktur", "State-of-the-art AI Infrastructure")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mb-12">
            {t(
              "Wir kombinieren die besten LLMs, Vektordatenbanken und Workflow-Engines für maximale Effizienz.",
              "We combine the best LLMs, vector databases and workflow engines for maximum efficiency."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-white text-sm font-medium transition-all duration-200 cursor-default"
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
              {t("Von manuell zu automatisiert", "From Manual to Automated")}
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
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-purple-200 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 text-white font-black text-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
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
      <section className="py-20 bg-gradient-to-br from-purple-700 via-purple-800 to-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-purple-300 text-xs font-bold tracking-wider uppercase mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("LOSLEGEN", "GET STARTED")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t("Bereit zu automatisieren?", "Ready to automate your business?")}
          </h2>
          <p className="text-purple-200 text-base mb-8">
            {t(
              "Buchen Sie ein kostenloses Gespräch — wir zeigen, welche Prozesse wir für Sie automatisieren können.",
              "Book a free call — we'll show exactly which processes we can automate for you."
            )}
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-purple-700 text-sm font-bold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
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
        defaultService={t("KI-Automatisierung & n8n Workflows", "AI Automation & n8n Workflows")}
      />
    </div>
  );
}
