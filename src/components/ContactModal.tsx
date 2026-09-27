"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: defaultService || "Web Development",
    budget: "$2,000 - $5,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const services = [
    { de: "Webentwicklung", en: "Web Development" },
    { de: "App-Entwicklung", en: "App Development" },
    { de: "KI & Automatisierung", en: "AI & Automation" },
    { de: "Komplettlösung", en: "Complete Solution" },
  ];

  const budgets = ["<$2k", "$2k - $5k", "$5k - $10k", "$10k+"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors z-10 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {t("Nachricht gesendet!", "Message Sent!")}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-6">
              {t(
                "Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird Ihre Projektanforderungen prüfen und sich innerhalb von 24 Stunden bei Ihnen melden.",
                "Thank you for reaching out to Nexa Solutions. Our team will review your project requirements and get back to you within 24 hours."
              )}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#111827] text-white text-sm font-semibold hover:bg-orange-600 transition-colors cursor-pointer"
            >
              {t("Fenster schließen", "Close Window")}
            </button>
          </div>
        ) : (
          <div className="p-8 sm:p-10 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-semibold tracking-wider uppercase mb-2">
                <Sparkles className="w-3 h-3 text-orange-500" />
                <span>{t("PROJEKT STARTEN", "START YOUR PROJECT")}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {t("Lassen Sie uns etwas Großartiges bauen", "Let's Build Something Extraordinary")}
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                {t(
                  "Erzählen Sie uns von Ihrer Idee und wir vereinbaren ein unverbindliches Erstgespräch.",
                  "Tell us about your idea and we'll schedule a discovery call with our tech leads."
                )}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t("Ihr Name", "Your Name")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("z.B. Max Mustermann", "e.g. John Doe")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t("Geschäftliche E-Mail", "Work Email")}
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
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
                        className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-orange-500 bg-orange-50/80 text-orange-700 font-semibold"
                            : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                        }`}
                      >
                        {t(svc.de, svc.en)}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t("Geschätztes Budget", "Estimated Budget")}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-2 py-1.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        formData.budget === b
                          ? "border-orange-500 bg-orange-50 text-orange-700 font-bold"
                          : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t("Projektdetails", "Project Details")}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={t(
                    "Beschreiben Sie kurz Ihr Projekt, Anforderungen oder den Zeitplan...",
                    "Briefly describe what you would like to build, timeline, or requirements..."
                  )}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm bg-slate-50/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3.5 rounded-full bg-[#111827] text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {loading ? (
                  <span>{t("Wird gesendet...", "Sending request...")}</span>
                ) : (
                  <>
                    <span>{t("Projektanfrage absenden", "Submit Project Inquiry")}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick contact direct info */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>Frankfurt am Main, Deutschland</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-orange-500" />
                <span>contact@nexa-solutions.de</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>+49 176 12345678</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
