"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, Clock, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AutomationShowcaseProps {
  onExploreAutomation?: () => void;
}

export default function AutomationShowcase({ onExploreAutomation }: AutomationShowcaseProps) {
  const { t } = useLanguage();
  const [activeTool, setActiveTool] = useState<string>("gmail");
  const [syncedCount, setSyncedCount] = useState<number>(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTool((prev) => {
        if (prev === "gmail") return "sheets";
        if (prev === "sheets") return "slack";
        if (prev === "slack") return "notion";
        return "gmail";
      });
      setSyncedCount((c) => c + 1);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const tools = [
    {
      id: "gmail",
      name: "Gmail",
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" fill="#EA4335" opacity="0.1" />
          <path d="M20 4H4C2.9 4 2 4.9 2 6V7.5L12 13.5L22 7.5V6C22 4.9 21.1 4 20 4Z" fill="#EA4335" />
          <path d="M2 7.5V18C2 19.1 2.9 20 4 20H5V9.5L2 7.5Z" fill="#C5221F" />
          <path d="M22 7.5V18C22 19.1 21.1 20 20 20H19V9.5L22 7.5Z" fill="#C5221F" />
          <path d="M5 20H19V10L12 14.5L5 10V20Z" fill="#FBBC04" />
        </svg>
      ),
    },
    {
      id: "sheets",
      name: "Google Sheets",
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="#0F9D58" />
          <path d="M8 8H16V10H8V8Z" fill="white" />
          <path d="M8 12H16V14H8V12Z" fill="white" />
          <path d="M8 16H13V18H8V16Z" fill="white" />
        </svg>
      ),
    },
    {
      id: "slack",
      name: "Slack",
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M6 15a2 2 0 0 1-2-2 2 2 0 0 1 2-2h2v2a2 2 0 0 1-2 2z" fill="#E01E5A" />
          <path d="M7 15a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-5z" fill="#E01E5A" />
          <path d="M9 6a2 2 0 0 1-2-2 2 2 0 0 1 2-2v2a2 2 0 0 1 0 2z" fill="#36C5F0" />
          <path d="M9 7a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5z" fill="#36C5F0" />
          <path d="M18 9a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2v-2a2 2 0 0 1 2-2z" fill="#2EB67D" />
          <path d="M17 9a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5z" fill="#2EB67D" />
          <path d="M15 18a2 2 0 0 1 2 2 2 2 0 0 1-2 2v-2a2 2 0 0 1 0-2z" fill="#ECB22E" />
          <path d="M15 17a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-5z" fill="#ECB22E" />
        </svg>
      ),
    },
    {
      id: "notion",
      name: "Notion",
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M4 4.5C4 3.67 4.67 3 5.5 3H18.5C19.33 3 20 3.67 20 4.5V19.5C20 20.33 19.33 21 18.5 21H5.5C4.67 21 4 20.33 4 19.5V4.5Z" fill="#111827" />
          <path d="M8 7.5L14 16.5H16V7.5H14.5V13.8L9.5 6.5H8V7.5Z" fill="white" />
        </svg>
      ),
    },
  ];

  const outcomes = [
    { title: t("Aufgaben automatisieren", "Automate Tasks"), icon: Zap, color: "text-amber-500 bg-amber-50 border-amber-200/80" },
    { title: t("Zeit sparen", "Save Time"), icon: Clock, color: "text-blue-500 bg-blue-50 border-blue-200/80" },
    { title: t("Kosten reduzieren", "Reduce Costs"), icon: ShieldCheck, color: "text-indigo-500 bg-indigo-50 border-indigo-200/80" },
    { title: t("Produktivität steigern", "Increase Productivity"), icon: TrendingUp, color: "text-rose-500 bg-rose-50 border-rose-200/80" },
  ];

  return (
    <section id="automation" className="py-20 md:py-24 bg-[#F8FAFC]/50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-1.5 h-16 sm:h-20 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full shrink-0 mt-1" />
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0F172A] tracking-tight leading-[1.18]">
                {t("Manuelle Arbeit in", "Turn Manual Work")} <br />
                {t("smarte Automatisierung", "Into Smart Automation")}
              </h2>
            </div>

            <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed mb-8 pl-5.5">
              {t(
                "Wir entwickeln KI-Agenten und n8n-Workflows, die Ihre Tools verbinden, repetitive Aufgaben automatisieren und Ihnen helfen, sich auf das Wesentliche zu konzentrieren — das Wachstum Ihres Unternehmens.",
                "We build AI agents and n8n workflows that connect your tools, automate repetitive tasks and help you focus on what really matters — growing your business."
              )}
            </p>

            <div className="pl-5.5">
              <button
                onClick={onExploreAutomation}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer group"
              >
                <span>{t("KI-Automatisierung entdecken", "Explore AI Automation")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Automation Canvas */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 md:p-9 shadow-sm">
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center relative z-10">
                {/* 4 Tool Cards */}
                <div className="col-span-4 sm:col-span-3 flex flex-col gap-3">
                  {tools.map((tool) => {
                    const isActive = activeTool === tool.id;
                    return (
                      <button
                        key={tool.id}
                        onClick={() => setActiveTool(tool.id)}
                        className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-orange-50/70 border-orange-300 shadow-xs"
                            : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-50"
                        }`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white shadow-2xs border border-slate-100 flex items-center justify-center shrink-0">
                          {tool.logo}
                        </div>
                        <span className={`text-xs font-bold hidden sm:inline ${isActive ? "text-orange-950" : "text-slate-700"}`}>
                          {tool.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Central n8n Hub */}
                <div className="col-span-4 sm:col-span-4 flex flex-col items-center justify-center relative py-4">
                  <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border-2 border-[#EA4B71]/40 shadow-lg flex flex-col items-center justify-center p-3 text-center">
                    <svg className="w-9 h-9 sm:w-10 sm:h-10 mb-1" viewBox="0 0 32 32" fill="none">
                      <circle cx="8" cy="16" r="4.5" fill="#EA4B71" />
                      <circle cx="24" cy="8" r="4.5" fill="#EA4B71" />
                      <circle cx="24" cy="24" r="4.5" fill="#EA4B71" />
                      <line x1="8" y1="16" x2="24" y2="8" stroke="#EA4B71" strokeWidth="3" />
                      <line x1="8" y1="16" x2="24" y2="24" stroke="#EA4B71" strokeWidth="3" />
                    </svg>
                    <span className="text-xs font-black tracking-tight text-[#EA4B71]">n8n</span>
                    <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">Partner</span>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-600">
                    <Sparkles className="w-3 h-3 text-orange-500" />
                    <span>{t("KI-Logik", "AI Logic")}</span>
                  </div>
                </div>

                {/* 4 Outcome Pills */}
                <div className="col-span-4 sm:col-span-5 flex flex-col gap-2.5">
                  {outcomes.map((outcome, idx) => {
                    const Icon = outcome.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl border border-slate-200/90 px-3.5 py-2.5 sm:py-3 shadow-2xs flex items-center gap-2.5 hover:border-slate-300 transition-all duration-300"
                      >
                        <div className={`w-7 h-7 rounded-xl border flex items-center justify-center shrink-0 ${outcome.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                          {outcome.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
