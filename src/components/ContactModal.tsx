"use client";

import React, { useState } from "react";
import {
  X,
  Send,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  defaultService,
}: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: defaultService || "Web Development",
    budget: "$2k - $5k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/forms/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });
    } catch (err) {
      console.error("Failed to submit project request:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const services = [
    { de: "Webentwicklung", en: "Web Development" },
    { de: "App-Entwicklung", en: "App Development" },
    { de: "KI & Automatisierung", en: "AI & Automation" },
    { de: "Komplettlösung", en: "Complete Solution" },
  ];

  const budgets = ["<$2k", "$2k - $5k", "$5k - $10k", "$10k+"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >

      {/* Modal Card Container: Modern & Reduced Width */}
      <div
        className="relative w-full max-w-[480px] bg-white rounded-[10px] shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sleek Close Button Inside Modal Card */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all z-20 cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
          aria-label="Close"
        >
          <X className="w-4 h-4 stroke-[2.2]" />
        </button>
        

        {submitted ? (
          <div className="p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              {t("Nachricht gesendet!", "Message Sent!")}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs mb-6">
              {t(
                "Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird Ihre Anfrage prüfen und sich innerhalb von 24 Stunden bei Ihnen melden.",
                "Thank you for reaching out to Nexa Solutions. Our team will review your project requirements and get back to you within 24 hours."
              )}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#0F172A] hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-md"
            >
              {t("Fenster schließen", "Close Window")}
            </button>
          </div>
        ) : (
          <div className="p-5 sm:p-7 max-h-[85vh] sm:max-h-[88vh] overflow-y-auto custom-modal-scrollbar pr-4">
            {/* Modal Header */}
            <div className="mb-5 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-[11px] font-bold tracking-wider uppercase mb-2">
                <Sparkles className="w-3 h-3 text-orange-500" />
                <span>{t("PROJEKT STARTEN", "START YOUR PROJECT")}</span>
              </div>
              <h3 className="text-[17px] sm:text-[22px] font-black text-[#0B132B] tracking-tight leading-snug">
                {t("Lassen Sie uns etwas Großartiges bauen", "Let's Build Something Extraordinary")}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                {t(
                  "Erzählen Sie uns von Ihrer Idee für ein unverbindliches Erstgespräch.",
                  "Tell us about your idea and we'll schedule a discovery call with our tech leads."
                )}
              </p>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name Input */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("Ihr Name", "Your Name")}
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder={t("z.B. Max Mustermann", "e.g. John Doe")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 text-xs sm:text-sm bg-slate-50/60 focus:bg-white transition-all text-slate-800"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("Geschäftliche E-Mail", "Work Email")}
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 text-xs sm:text-sm bg-slate-50/60 focus:bg-white transition-all text-slate-800"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("Gewünschte Leistung", "Service Needed")}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((svc) => {
                    const isSelected =
                      formData.service === svc.en ||
                      formData.service === svc.de ||
                      (defaultService && defaultService.toLowerCase().includes(svc.en.toLowerCase().split(" ")[0]));
                    return (
                      <button
                        type="button"
                        key={svc.en}
                        onClick={() => setFormData({ ...formData, service: t(svc.de, svc.en) })}
                        className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? "border-orange-500 bg-orange-50/90 text-orange-700 font-bold shadow-2xs ring-1 ring-orange-500/20"
                            : "border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/50 text-slate-600 bg-white"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            isSelected ? "bg-orange-500" : "bg-slate-300"
                          }`}
                        />
                        <span className="truncate">{t(svc.de, svc.en)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Selection */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("Geschätztes Budget", "Estimated Budget")}
                </label>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-2 py-1.5 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                        formData.budget === b
                          ? "border-orange-500 bg-orange-50/90 text-orange-700 font-bold shadow-2xs ring-1 ring-orange-500/20"
                          : "border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/50 text-slate-600 bg-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("Projektdetails", "Project Details")}
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    required
                    placeholder={t(
                      "Beschreiben Sie kurz Ihr Projekt, Anforderungen oder den Zeitplan...",
                      "Briefly describe what you would like to build, timeline, or requirements..."
                    )}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/90 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 text-xs sm:text-sm bg-slate-50/60 focus:bg-white resize-none transition-all text-slate-800"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-1 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-[#F97316] hover:from-orange-600 hover:to-orange-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 active:scale-[0.99]"
              >
                {loading ? (
                  <span>{t("Wird gesendet...", "Sending request...")}</span>
                ) : (
                  <>
                    <span>{t("Projektanfrage absenden", "Submit Project Inquiry")}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Contact Footer Info */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-orange-500" />
                <span>Frankfurt am Main</span>
              </div>
              <a href="mailto:contact@nexa-solutions.de" className="flex items-center gap-1.5 hover:text-orange-600 transition-colors">
                <Mail className="w-3 h-3 text-orange-500" />
                <span>contact@nexa-solutions.de</span>
              </a>
              <a href="tel:+918077313241" className="flex items-center gap-1.5 hover:text-orange-600 transition-colors">
                <Phone className="w-3 h-3 text-orange-500" />
                <span>+91 8077 313 241</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
