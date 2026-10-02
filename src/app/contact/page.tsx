"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Navigation,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Website-Entwicklung",
    message: "",
    gdprConsent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const germanyLocation = {
    title: t(
      "Europäische Zentrale & Kundenberatung",
      "European HQ & Client Strategy",
    ),
    city: "Frankfurt am Main, Deutschland",
    address: "Mainzer Landstraße 180, 60327 Frankfurt am Main",
    country: "Deutschland",
    postal: "60327",
    transit: t(
      "5 Min. vom Hauptbahnhof Frankfurt | 15 Min. vom Flughafen (FRA)",
      "5 min from Frankfurt Central Station | 15 min from Airport (FRA)",
    ),
    hours: "Mo - Fr: 08:30 – 19:00 Uhr (MEZ)",
    phone: "+49 69 9451 8920",
    mapQuery: "Mainzer+Landstraße+180,+60327+Frankfurt+am+Main,+Germany",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.749742618956!2d8.653429377045142!3d50.10972411166304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0bdeb02da0ab%3A0x63eb371cf707f152!2sMainzer%20Landstra%C3%9Fe%20180%2C%2060327%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sde!4v1709472000000!5m2!1sen!2sde",
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@nexa-solutions.io");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(germanyLocation.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1100);
  };

  const faqs = [
    {
      q: t(
        "Wie schnell erhalte ich eine Rückmeldung?",
        "How quickly will I receive a reply?",
      ),
      a: t(
        "Innerhalb von 24 Stunden meldet sich ein leitender Projektmanager oder Softwarearchitekt bei Ihnen mit einer ersten Einschätzung und Terminoptionen.",
        "Within 24 hours, a senior project manager or tech architect will reach out with an initial assessment and meeting slots.",
      ),
    },
    {
      q: t(
        "Ist das erste Erstgespräch wirklich kostenlos?",
        "Is the initial strategy call completely free?",
      ),
      a: t(
        "Ja, zu 100%. Im 30-minütigen Video-Call besprechen wir Ihre technischen Anforderungen, Machbarkeit, Tech-Stack und geben eine unverbindliche Budgetschätzung.",
        "Yes, 100%. In our 30-minute discovery call we discuss technical feasibility, tech stack, architecture, and provide a ballpark estimate without any obligation.",
      ),
    },
    {
      q: t(
        "Können wir vorab ein NDA (Geheimhaltungsvereinbarung) unterzeichnen?",
        "Can we sign an NDA before sharing project details?",
      ),
      a: t(
        "Selbstverständlich. Wir legen höchsten Wert auf geistiges Eigentum und Datenschutz. Auf Wunsch senden wir Ihnen vor dem Gespräch unser Standard-NDA oder unterzeichnen Ihres.",
        "Absolutely. Intellectual property and data security are our top priorities. We can execute our standard bilateral NDA or review your custom agreement beforehand.",
      ),
    },
    {
      q: t(
        "Wie flexibel sind die Zusammenarbeitsmodelle?",
        "What engagement models do you offer?",
      ),
      a: t(
        "Wir bieten transparente Festpreisprojekte (Fixed Price) mit Meilensteingarantie, dedizierte Entwickler-Teams (Time & Material) sowie monatliche Wartungs- & Weiterentwicklungspakete.",
        "We offer transparent fixed-price milestones with delivery guarantees, dedicated agile engineering pods, and ongoing monthly maintenance & AI scaling retainers.",
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      <main className="pt-28 sm:pt-36 lg:pt-40 pb-20 relative overflow-hidden">
        {/* Ambient Gradient Background Glows */}
        <div className="absolute top-0 inset-x-0 h-[640px] pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-orange-100/60 via-amber-50/40 to-transparent blur-3xl opacity-80" />
          <div className="absolute top-20 right-[5%] w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute top-48 left-[5%] w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-500 mb-6 sm:mb-8">
            <Link
              href="/"
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              {t("Startseite", "Home")}
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-orange-600 font-bold">
              {t("Kontakt & Beratung", "Contact & Consultation")}
            </span>
          </div>

          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/80 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="font-mono text-orange-500 font-semibold">[&rarr;</span>
              <span>
                {t(
                  "KAPAZITÄTEN VERFÜGBAR • ANTWORT IN < 24H",
                  "AVAILABLE FOR NEW PROJECTS • REPLY < 24H",
                )}
              </span>
            </div>

            {/* Heading matching HomePage H2 / Section Title */}
            <h1
              className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 text-center max-w-3xl mx-auto"
              style={{ lineHeight: "1.09" }}
            >
              {t(
                "Lassen Sie uns Ihre Vision in ",
                "Let's Build Your Vision into ",
              )}
              <span className="bg-gradient-to-r from-[#EA580C] via-orange-600 to-[#F97316] bg-clip-text text-transparent">
                {t(
                  "digitale Realität verwandeln",
                  "High-Performance Reality",
                )}
              </span>
            </h1>

            {/* Paragraph matching HomePage */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-7 sm:mb-8 font-normal text-center">
              {t(
                "Egal ob Sie eine moderne Website, skalierbare Mobile App oder autonome KI-Automatisierung benötigen – wir analysieren Ihr Vorhaben unverbindlich und liefern einen konkreten technischen Fahrplan.",
                "Whether you need a high-converting web platform, cross-platform mobile app, or smart AI automation – get a free 30-min strategy session and custom roadmap.",
              )}
            </p>

            {/* Modern Trust Indicators matching HomePage */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[14px] sm:text-[16px] font-medium text-slate-600 mt-6 sm:mt-8">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                {t("Antwort in < 24h", "Reply in < 24h")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                {t("100% DSGVO & NDA", "100% GDPR & NDA")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                {t("Deutsche Qualitätsstandards", "German Quality Standards")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                {t("Verbindlicher Festpreis", "Transparent Fixed Price")}
              </span>
            </div>
          </div>

          {/* Main 2-Column Content: Form (Left) & Direct Info / Trust (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-20">
            {/* Left Column: Interactive Consultation Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[5px] sm:rounded-[10px] border border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 p-6 sm:p-9 relative overflow-hidden">
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
                  <div>
                    <h2 className="text-[19px] sm:text-[22px] font-bold text-slate-900 leading-snug">
                      {t("Projektanfrage stellen", "Request Free Consultation")}
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      {t(
                        "Füllen Sie die Details aus – wir melden uns innerhalb eines Werktags.",
                        "Fill in the details – we'll get back to you within 1 business day.",
                      )}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{t("Unverbindlich", "100% Free")}</span>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-4 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 shadow-inner">
                      <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                    </div>
                    <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2 leading-snug">
                      {t(
                        "Anfrage erfolgreich übermittelt!",
                        "Inquiry Successfully Sent!",
                      )}
                    </h3>
                    <p className="text-base text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                      {t(
                        "Vielen Dank! Unser Team prüft Ihre Projektdaten und bereitet konkrete Vorschläge vor. Wir melden uns innerhalb von 24 Stunden unter ",
                        "Thank you! Our technical lead will review your requirements and follow up with a tailored strategy within 24 hours at ",
                      )}
                      <strong className="text-slate-900 font-semibold">
                        {formData.email || "Ihrer E-Mail"}
                      </strong>
                      .
                    </p>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-[5px] p-5 text-left max-w-md w-full mb-6 text-sm space-y-2 text-slate-600">
                      <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                        {t("Nächste Schritte:", "What happens next:")}
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-orange-600">1.</span>
                        <span>
                          {t(
                            "Anforderungsanalyse & Vorprüfung des Tech-Stacks",
                            "Architecture & tech stack preliminary review",
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-orange-600">2.</span>
                        <span>
                          {t(
                            "Einladung zum 30-minütigen Video-Call (Google Meet / Teams)",
                            "Invitation to 30-min discovery call (Meet / Teams)",
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-orange-600">3.</span>
                        <span>
                          {t(
                            "Konkreter Projektfahrplan inklusive verbindlichem Festpreis",
                            "Actionable project roadmap with fixed-price estimate",
                          )}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "Website-Entwicklung",
                          message: "",
                          gdprConsent: true,
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold transition-colors cursor-pointer"
                    >
                      {t("Weitere Anfrage senden", "Send another inquiry")}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {t("Vollständiger Name *", "Full Name *")}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder={t("z.B. Max Mustermann", "e.g. John Doe")}
                          className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50/70 border border-slate-200 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {t(
                            "Geschäftliche E-Mail-Adresse *",
                            "Business Email Address *",
                          )}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50/70 border border-slate-200 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {t("Telefonnummer (optional)", "Phone Number (optional)")}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+49 170 1234567"
                          className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50/70 border border-slate-200 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {t(
                            "Unternehmen / Organisation (optional)",
                            "Company / Organisation (optional)",
                          )}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          placeholder={t(
                            "z.B. Nexa GmbH",
                            "e.g. Acme Corp",
                          )}
                          className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50/70 border border-slate-200 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Selection Dropdown */}
                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {t("Gewünschte Leistung", "Service Needed")}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50/70 border border-slate-200 text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer"
                      >
                        <option value="Website-Entwicklung">
                          {t("Website- & Web-App-Entwicklung", "Website & Web App Development")}
                        </option>
                        <option value="Mobile-App-Entwicklung">
                          {t("Mobile-App-Entwicklung (iOS & Android)", "Mobile App Development (iOS & Android)")}
                        </option>
                        <option value="KI-Automatisierung & n8n">
                          {t("KI-Automatisierung & n8n Workflows", "AI Automation & n8n Workflows")}
                        </option>
                        <option value="Individuelle Softwarelösung">
                          {t("Individuelle Software- & Cloud-Lösung", "Custom Software & Cloud Solution")}
                        </option>
                        <option value="Allgemeine Beratung">
                          {t("Allgemeine Beratung & Strategie", "General Tech Strategy & Consulting")}
                        </option>
                      </select>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {t(
                          "Ihre Nachricht & Projektbeschreibung *",
                          "Your Message & Project Goals *",
                        )}
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={t(
                          "Beschreiben Sie kurz Ihr Projekt: Welche Probleme möchten Sie lösen? Gibt es bestehende Designs oder Systeme, die integriert werden sollen?",
                          "Tell us about your project: What are the main objectives, timeline, or existing systems to integrate?",
                        )}
                        className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50/70 border border-slate-200 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-y min-h-[120px]"
                      />
                    </div>

                    {/* GDPR Consent */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="gdprConsent"
                        required
                        checked={formData.gdprConsent}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            gdprConsent: e.target.checked,
                          })
                        }
                        className="mt-1 w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500 cursor-pointer"
                      />
                      <label
                        htmlFor="gdprConsent"
                        className="text-xs sm:text-[13px] text-slate-600 leading-relaxed cursor-pointer select-none"
                      >
                        {t(
                          "Ich willige ein, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen gespeichert und verarbeitet werden. (DSGVO-konform, keine Werbemails)",
                          "I agree that my contact details will be processed to respond to this inquiry in accordance with GDPR guidelines. No spam, ever.",
                        )}
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>
                            {t("Wird übermittelt...", "Submitting...")}
                          </span>
                        </>
                      ) : (
                        <>
                          <span>
                            {t(
                              "Kostenlose Beratung anfordern",
                              "Submit Free Inquiry & Get Strategy",
                            )}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-white text-[#EA580C] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Direct Contact Cards & Company Credentials (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Direct Channels Card */}
              <div className="bg-white rounded-[5px] sm:rounded-[10px] border border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 p-6 sm:p-7">
                <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-1 leading-snug">
                  {t("Direkter Kontakt", "Direct Channels")}
                </h3>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                  {t(
                    "Sie möchten nicht warten? Erreichen Sie uns direkt per E-Mail, Telefon oder WhatsApp.",
                    "Prefer an immediate conversation? Reach us directly via email, phone, or WhatsApp.",
                  )}
                </p>

                <div className="space-y-3">
                  {/* Email Box with Copy Button */}
                  <div className="flex items-center justify-between p-3.5 rounded-[5px] bg-slate-50 border border-slate-200/80 hover:border-orange-200 transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-[5px] bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          E-Mail
                        </div>
                        <a
                          href="mailto:info@nexa-solutions.io"
                          className="text-[13.5px] xl:text-[14px] font-medium text-slate-900 hover:text-orange-600 transition-colors truncate block"
                        >
                          info@nexa-solutions.io
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded hover:bg-white text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0 ml-2"
                      title={t("E-Mail kopieren", "Copy email")}
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <a
                    href="tel:+919910543210"
                    className="flex items-center justify-between p-3.5 rounded-[5px] bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/40 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-[5px] bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          {t("Zentrale Hotline", "Direct Line")}
                        </div>
                        <div className="text-[13.5px] xl:text-[14px] font-medium text-slate-900 group-hover:text-sky-600 transition-colors truncate">
                          +91 99105 43210
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-600 shrink-0 mr-1" />
                  </a>

                  {/* WhatsApp Quick Chat */}
                  <a
                    href="https://wa.me/919910543210?text=Hello%20Nexa%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-[5px] bg-emerald-50/70 border border-emerald-200/80 hover:border-emerald-300 hover:bg-emerald-50 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-[5px] bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <MessageCircle className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                          WhatsApp Quick Chat
                        </div>
                        <div className="text-[13.5px] xl:text-[14px] font-medium text-emerald-950 truncate">
                          {t("Chat direkt starten", "Start chat right now")}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform shrink-0 mr-1" />
                  </a>
                </div>

                {/* Office Hours */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">
                      {t("Geschäftszeiten:", "Office Hours:")}
                    </span>{" "}
                    Mo – Fr: 08:30 – 19:00 Uhr (MEZ / CET)
                  </div>
                </div>
              </div>

              {/* Senior Tech Consultation Guarantee Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-[5px] sm:rounded-[10px] p-6 sm:p-7 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-[5px] bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    {t(
                      "DEUTSCHE INGENIEURSSTANDARDS",
                      "GERMAN QUALITY PROMISE",
                    )}
                  </span>
                </div>

                <h4 className="text-[19px] sm:text-[22px] font-bold text-white mb-2 leading-snug">
                  {t(
                    "Sprechen Sie direkt mit Architekten",
                    "Direct Senior Engineering Access",
                  )}
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                  {t(
                    "Bei Nexa Solutions sprechen Sie im Erstgespräch nicht mit reinen Vertrieblern, sondern direkt mit erfahrenen Senior-Entwicklern und Systemarchitekten.",
                    "At Nexa Solutions, your discovery session is hosted by senior engineers and solution architects who understand code, scalability, and security.",
                  )}
                </p>

                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs sm:text-sm text-slate-400">
                  <span>
                    {t("Vertragspartner in Deutschland", "German Entity & Legal")}
                  </span>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Modern Map Section ("modern map add karo please") */}
          <div className="mb-20">
            <div className="bg-white rounded-[5px] sm:rounded-[10px] border border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 p-6 sm:p-9 overflow-hidden">
              {/* Map Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/80 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
                    <span className="font-mono text-orange-500 font-semibold">[&rarr;</span>
                    <span>{t("STANDORT & ZENTRALE", "HEADQUARTERS & OFFICE")}</span>
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 leading-snug">
                    {germanyLocation.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {germanyLocation.city}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[5px] bg-slate-100/90 border border-slate-200 text-xs sm:text-[13px] font-bold text-slate-800 self-start md:self-auto">
                  <span>🇩🇪</span>
                  <span>Frankfurt am Main, Deutschland</span>
                </div>
              </div>

              {/* Map Embed Container with Floating Interactive Glass Card */}
              <div className="relative rounded-[5px] overflow-hidden border border-slate-200/80 shadow-inner h-[380px] sm:h-[440px] md:h-[480px]">
                {/* Modern Styled Google Map Iframe */}
                <iframe
                  title="Nexa Solutions Office Map"
                  src={germanyLocation.mapSrc}
                  className="w-full h-full border-0 grayscale-[25%] contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Glassmorphism Information Overlay */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-auto sm:inset-x-auto sm:top-5 sm:left-5 max-w-sm w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-[5px] p-4 sm:p-5 shadow-[0_15px_35px_-5px_rgba(15,23,42,0.18)] z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-100/80 text-emerald-800 text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      {t("Büro geöffnet", "Office Open")}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-500">
                      {germanyLocation.hours}
                    </span>
                  </div>

                  <div className="text-[15px] sm:text-[16px] font-bold text-slate-900 mb-1">
                    Nexa Solutions GmbH & Co.
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {germanyLocation.address}
                  </p>

                  <div className="text-xs sm:text-sm text-slate-500 mb-3.5 flex items-center gap-1.5 bg-slate-50 p-2.5 rounded-[5px] border border-slate-100">
                    <Navigation className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>{germanyLocation.transit}</span>
                  </div>

                  {/* Actions inside Map Card */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${germanyLocation.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all"
                    >
                      <span>{t("In Google Maps öffnen", "Open Google Maps")}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={handleCopyAddress}
                      className="px-3 py-2 rounded-[5px] bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      title={t("Adresse kopieren", "Copy address")}
                    >
                      {copiedAddress ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Step Process Flow: "Was passiert nach Ihrer Anfrage?" */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/80 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <span className="font-mono text-orange-500 font-semibold">[&rarr;</span>
                <span>{t("PROZESS & ABLAUF", "PROCESS & ROADMAP")}</span>
              </div>

              <h2
                className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 text-center max-w-2xl mx-auto"
                style={{ lineHeight: "1.09" }}
              >
                {t(
                  "Transparenter Ablauf nach Ihrer Kontaktaufnahme",
                  "What Happens After You Reach Out?",
                )}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-7 sm:mb-8 font-normal text-center">
                {t(
                  "Keine langen Wartezeiten, kein bürokratischer Leerlauf – so schnell starten wir gemeinsam.",
                  "No bureaucracy, no endless delays – our streamlined onboarding roadmap.",
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  titleDe: "Anforderungsprüfung in < 24h",
                  titleEn: "Technical Review < 24h",
                  descDe:
                    "Unser Senior Architekt prüft Ihre Angaben, analysiert den empfohlenen Tech-Stack und bereitet konkrete Fragen vor.",
                  descEn:
                    "A senior architect inspects your requirements, validates technical feasibility, and prepares relevant insights.",
                },
                {
                  step: "02",
                  titleDe: "30 Min. Strategie-Call (Kostenlos)",
                  titleEn: "Free 30-min Strategy Call",
                  descDe:
                    "Im gemeinsamen Video-Gespräch schärfen wir Meilensteine, klären Schnittstellen und besprechen realistische Zeitpläne.",
                  descEn:
                    "In a 30-minute virtual session we align on product milestones, tech architecture, and key performance indicators.",
                },
                {
                  step: "03",
                  titleDe: "Festpreis-Fahrplan & Kick-off",
                  titleEn: "Fixed-Price Proposal & Kick-off",
                  descDe:
                    "Sie erhalten ein transparentes Angebot mit verbindlichen Sprint-Zyklen und können direkt im Anschluss starten.",
                  descEn:
                    "You receive a transparent quote with fixed-price milestone delivery and can kick off sprint development immediately.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[5px] sm:rounded-[10px] border border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 p-6 sm:p-7 relative overflow-hidden group"
                >
                  <div className="text-3xl sm:text-4xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2.5 leading-snug">
                    {t(item.titleDe, item.titleEn)}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    {t(item.descDe, item.descEn)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact FAQ Accordion (Exact HomePage FaqSection styling & typography) */}
          <div className="max-w-[1050px] mx-auto mb-16">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>
                  {t(
                    "HÄUFIG GESTELLTE FRAGEN",
                    "FREQUENTLY ASKED QUESTIONS",
                  )}
                </span>
              </div>

              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3 text-center">
                {t(
                  "Antworten auf Ihre wichtigsten Fragen",
                  "Clear Answers to Your Key Questions",
                )}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-7 sm:mb-8 font-normal text-center">
                {t(
                  "Alles, was Sie über unsere Zusammenarbeit, Kosten, Datenschutz und technische Umsetzung wissen möchten.",
                  "Everything you need to know regarding our workflow, fixed pricing, data privacy, and engineering process.",
                )}
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-[5px] border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-slate-50/80 border-orange-300/80 shadow-xs"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
                    >
                      <span className="text-[16px] sm:text-[17px] font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-orange-600" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-base sm:text-lg text-slate-600 leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
