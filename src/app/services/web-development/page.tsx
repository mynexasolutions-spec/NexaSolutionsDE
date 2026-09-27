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
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  "Next.js 14", "React 19", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Prisma ORM", "AWS / Vercel",
  "Stripe", "Cloudflare", "Supabase", "Redis",
];

const deliverables = [
  {
    icon: Globe,
    de: "Maßgeschneiderte, responsive Web-App",
    en: "Custom responsive web application",
  },
  {
    icon: Layers,
    de: "CMS & Admin-Dashboard-Integration",
    en: "CMS and admin dashboard integration",
  },
  {
    icon: Zap,
    de: "Blitzschnell — Lighthouse 95+ Score",
    en: "Lightning fast Lighthouse 95+ score",
  },
  {
    icon: Code2,
    de: "API-Integrationen & Zahlungs-Gateways",
    en: "API integrations & payment gateways",
  },
  {
    icon: Lock,
    de: "Enterprise-Sicherheit & SSL",
    en: "Enterprise-grade security & SSL",
  },
  {
    icon: BarChart3,
    de: "SEO-Optimierung & Performance",
    en: "SEO optimization & performance tuning",
  },
];

const processSteps = [
  {
    step: "01",
    de: { title: "Entdeckung", desc: "Wir verstehen Ihre Geschäftsziele, Zielgruppe und technischen Anforderungen." },
    en: { title: "Discovery", desc: "We understand your business goals, audience and technical requirements." },
  },
  {
    step: "02",
    de: { title: "Design & Prototyp", desc: "UI/UX-Wireframes und klickbare Prototypen für Ihr Feedback." },
    en: { title: "Design & Prototype", desc: "UI/UX wireframes and clickable prototypes for your feedback." },
  },
  {
    step: "03",
    de: { title: "Entwicklung", desc: "Sauberer, skalierbarer Code mit modernen Best Practices." },
    en: { title: "Development", desc: "Clean, scalable code using modern best practices." },
  },
  {
    step: "04",
    de: { title: "Launch & Support", desc: "Deployment, Tests und laufender Support nach dem Launch." },
    en: { title: "Launch & Support", desc: "Deployment, QA testing and ongoing post-launch support." },
  },
];

const faqs = [
  {
    de: {
      q: "Wie lange dauert die Entwicklung einer Website?",
      a: "Je nach Umfang dauert es in der Regel 2–6 Wochen. Einfache Firmenwebsites sind schneller, komplexe Web-Apps dauern länger.",
    },
    en: {
      q: "How long does website development take?",
      a: "Depending on scope, it typically takes 2–6 weeks. Simple business sites are faster, complex web apps take longer.",
    },
  },
  {
    de: {
      q: "Bietet ihr auch Wartung nach dem Launch an?",
      a: "Ja! Wir bieten monatliche Wartungspakete an — Updates, Sicherheits-Patches und Performance-Monitoring inklusive.",
    },
    en: {
      q: "Do you offer post-launch maintenance?",
      a: "Yes! We offer monthly maintenance packages including updates, security patches and performance monitoring.",
    },
  },
  {
    de: {
      q: "Kann ich Inhalte selbst bearbeiten?",
      a: "Absolut. Wir integrieren ein CMS (z.B. Sanity oder Contentful), damit Sie Inhalte ohne Programmierkenntnisse verwalten können.",
    },
    en: {
      q: "Can I edit content myself?",
      a: "Absolutely. We integrate a CMS (e.g. Sanity or Contentful) so you can manage content without any coding knowledge.",
    },
  },
  {
    de: {
      q: "Ist die Website für Mobilgeräte optimiert?",
      a: "Immer. Alle unsere Websites sind vollständig responsiv und für alle Bildschirmgrößen optimiert.",
    },
    en: {
      q: "Will the site be mobile-friendly?",
      a: "Always. All our websites are fully responsive and optimized for all screen sizes.",
    },
  },
];

export default function WebDevelopmentPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-orange-500 selection:text-white">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-orange-100/50 via-blue-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-orange-600 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("Startseite", "Home")}
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">{t("Website-Entwicklung", "Web Development")}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-5">
                <Globe className="w-3.5 h-3.5" />
                <span>{t("Web-Entwicklung", "Web Development")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#0F172A] tracking-tight leading-[1.1] mb-6">
                {t(
                  "Hochleistungs-Websites die ",
                  "High-Performance Websites "
                )}
                <span className="text-orange-500">{t("Kunden gewinnen", "that convert")}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                {t(
                  "Wir entwickeln blitzschnelle, SEO-optimierte und enterprise-taugliche Web-Apps, die genau auf Ihren Geschäftsprozess zugeschnitten sind — von modernen Marketingportalen bis zu komplexen SaaS-Dashboards.",
                  "We build blazing-fast, SEO-optimized, and enterprise-grade web apps tailored to your exact business workflow — from modern marketing portals to complex multi-tenant SaaS dashboards."
                )}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Zap, label: t("Lighthouse 95+", "Lighthouse 95+") },
                  { icon: ShieldCheck, label: t("SSL & Sicherheit", "SSL & Security") },
                  { icon: Rocket, label: t("2–6 Wochen", "2–6 Weeks") },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-orange-500" />
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
                  src="/images/web-dev.jpg"
                  alt={t("Website-Entwicklung", "Web Development")}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Floating stats card */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-2xl font-black text-orange-500">95+</div>
                    <div className="text-xs text-slate-600 font-medium">Lighthouse Score</div>
                  </div>
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-2xl font-black text-orange-500">2-6x</div>
                    <div className="text-xs text-slate-600 font-medium">{t("Mehr Conversions", "More Conversions")}</div>
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
            <div className="inline-flex items-center gap-1.5 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
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
                  className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t(item.de, item.en)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Cpu className="w-4 h-4" />
            <span>{t("TECHNOLOGIEN", "TECHNOLOGIES")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t("Modern. Schnell. Skalierbar.", "Modern. Fast. Scalable.")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mb-12">
            {t(
              "Wir nutzen den modernsten Tech-Stack der Industrie für maximale Performance und Zuverlässigkeit.",
              "We use the industry's most modern tech stack for maximum performance and reliability."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40 text-white text-sm font-medium transition-all duration-200 cursor-default"
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
              {t("Von der Idee zum Live-Produkt", "From Idea to Live Product")}
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
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-orange-200 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
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
      <section className="py-20 bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-orange-100 text-xs font-bold tracking-wider uppercase mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("LOSLEGEN", "GET STARTED")}  </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t("Bereit für Ihre neue Website?", "Ready for your new website?")}
          </h2>
          <p className="text-orange-100 text-base mb-8">
            {t(
              "Lassen Sie uns kostenlos über Ihr Projekt sprechen.",
              "Let's have a free conversation about your project."
            )}
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-orange-600 text-sm font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
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
        defaultService={t("Website-Entwicklung", "Website Development")}
      />
    </div>
  );
}
