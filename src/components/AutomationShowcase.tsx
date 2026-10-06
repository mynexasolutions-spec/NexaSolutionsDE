"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Clock,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ChevronRight,
  Settings,
  BarChart3,
  Bot,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AutomationShowcaseProps {
  onExploreAutomation?: () => void;
}

export default function AutomationShowcase({ onExploreAutomation }: AutomationShowcaseProps) {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const tools = [
    {
      id: "gmail",
      name: "Gmail",
      subtext: t("E-Mails senden & empfangen", "Send & receive emails"),
      dotColor: "#8B5CF6",
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z" fill="#ea4435" />
          <path d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" fill="#00ac47" transform="translate(53.0001 32.0007) rotate(180)" />
          <path d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z" fill="#ffba00" />
          <path d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z" fill="#4285f4" />
          <path d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z" fill="#c52528" />
        </svg>
      ),
    },
    {
      id: "sheets",
      name: "Google Sheets",
      subtext: t("Daten verwalten", "Manage your data"),
      dotColor: "#10B981",
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37 44H11C9.34315 44 8 42.6569 8 41V7C8 5.34315 9.34315 4 11 4H29L40 15V41C40 42.6569 38.6569 44 37 44Z" fill="#0F9D58" />
          <path d="M29 4L40 15H31C29.8954 15 29 14.1046 29 13V4Z" fill="#87CEAC" />
          <rect x="15" y="21" width="18" height="16" rx="1.5" fill="white" />
          <rect x="17" y="23" width="6" height="3" fill="#0F9D58" />
          <rect x="25" y="23" width="6" height="3" fill="#0F9D58" />
          <rect x="17" y="27.5" width="6" height="3" fill="#0F9D58" />
          <rect x="25" y="27.5" width="6" height="3" fill="#0F9D58" />
          <rect x="17" y="32" width="6" height="3" fill="#0F9D58" />
          <rect x="25" y="32" width="6" height="3" fill="#0F9D58" />
        </svg>
      ),
    },
    {
      id: "slack",
      name: "Slack",
      subtext: t("Echtzeit-Alerts erhalten", "Get real-time alerts"),
      dotColor: "#F97316",
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#E01E5A" d="M5.04765714 15.1238095C5.04765714 16.5142857 3.92384762 17.6380952 2.53337143 17.6380952 1.14289524 17.6380952.0190857143 16.5142857.0190857143 15.1238095.0190857143 13.7333333 1.14289524 12.6095238 2.53337143 12.6095238L5.04765714 12.6095238 5.04765714 15.1238095zM6.30472381 15.1238095C6.30472381 13.7333333 7.42853333 12.6095238 8.81900952 12.6095238 10.2094857 12.6095238 11.3332952 13.7333333 11.3332952 15.1238095L11.3332952 21.4095238C11.3332952 22.8 10.2094857 23.9238095 8.81900952 23.9238095 7.42853333 23.9238095 6.30472381 22.8 6.30472381 21.4095238L6.30472381 15.1238095z" />
            <path fill="#36C5F0" d="M8.81904762 5.02857143C7.42857143 5.02857143 6.3047619 3.9047619 6.3047619 2.51428571 6.3047619 1.12380952 7.42857143 0 8.81904762 0 10.2095238 0 11.3333333 1.12380952 11.3333333 2.51428571L11.3333333 5.02857143 8.81904762 5.02857143zM8.81904762 6.3048C10.2095238 6.3048 11.3333333 7.42860952 11.3333333 8.81908571 11.3333333 10.2095619 10.2095238 11.3333714 8.81904762 11.3333714L2.51428571 11.3333714C1.12380952 11.3333714 0 10.2095619 0 8.81908571 0 7.42860952 1.12380952 6.3048 2.51428571 6.3048L8.81904762 6.3048z" />
            <path fill="#2EB67D" d="M18.895219 8.81902857C18.895219 7.42855238 20.0190286 6.30474286 21.4095048 6.30474286 22.799981 6.30474286 23.9237905 7.42855238 23.9237905 8.81902857 23.9237905 10.2095048 22.799981 11.3333143 21.4095048 11.3333143L18.895219 11.3333143 18.895219 8.81902857zM17.6380571 8.81902857C17.6380571 10.2095048 16.5142476 11.3333143 15.1237714 11.3333143 13.7332952 11.3333143 12.6094857 10.2095048 12.6094857 8.81902857L12.6094857 2.51426667C12.6094857 1.12379048 13.7332952-.0000190476191 15.1237714-.0000190476191 16.5142476-.0000190476191 17.6380571 1.12379048 17.6380571 2.51426667L17.6380571 8.81902857z" />
            <path fill="#ECB22E" d="M15.1238286 18.8952C16.5143048 18.8952 17.6381143 20.0190095 17.6381143 21.4094857 17.6381143 22.7999619 16.5143048 23.9237714 15.1238286 23.9237714 13.7333524 23.9237714 12.6095429 22.7999619 12.6095429 21.4094857L12.6095429 18.8952 15.1238286 18.8952zM15.1238286 17.6381333C13.7333524 17.6381333 12.6095429 16.5143238 12.6095429 15.1238476 12.6095429 13.7333714 13.7333524 12.6095619 15.1238286 12.6095619L21.4285905 12.6095619C22.8190667 12.6095619 23.9428762 13.7333714 23.9428762 15.1238476 23.9428762 16.5143238 22.8190667 17.6381333 21.4285905 17.6381333L15.1238286 17.6381333z" />
          </g>
        </svg>
      ),
    },
    {
      id: "notion",
      name: "Notion",
      subtext: t("Aufgaben & Wissen bündeln", "Organize your work"),
      dotColor: "#06B6D4",
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z"
            fill="#000000"
          />
        </svg>
      ),
    },
  ];

  const outcomes = [
    {
      id: "tasks",
      title: t("Aufgaben automatisieren", "Automate Tasks"),
      subtext: t("Manuelle Arbeit eliminieren", "Eliminate manual work"),
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFBEB] border border-amber-200/70 flex items-center justify-center shrink-0 shadow-2xs">
          <Zap className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#F59E0B] fill-[#F59E0B]/20 stroke-[2.2]" />
        </div>
      ),
      dotColor: "#F59E0B",
    },
    {
      id: "time",
      title: t("Zeit sparen", "Save Time"),
      subtext: t("Fokus auf das Wesentliche", "Focus on what matters"),
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFF6FF] border border-blue-200/70 flex items-center justify-center shrink-0 shadow-2xs">
          <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#3B82F6] stroke-[2.2]" />
        </div>
      ),
      dotColor: "#3B82F6",
    },
    {
      id: "costs",
      title: t("Kosten reduzieren", "Reduce Costs"),
      subtext: t("Effizienter wirtschaften", "Do more with less"),
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5F3FF] border border-purple-200/70 flex items-center justify-center shrink-0 shadow-2xs">
          <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#8B5CF6] stroke-[2.2]" />
        </div>
      ),
      dotColor: "#8B5CF6",
    },
    {
      id: "productivity",
      title: t("Produktivität steigern", "Increase Productivity"),
      subtext: t("Wachstum beschleunigen", "Grow your business"),
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF1F2] border border-rose-200/70 flex items-center justify-center shrink-0 shadow-2xs">
          <TrendingUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#F43F5E] stroke-[2.2]" />
        </div>
      ),
      dotColor: "#F43F5E",
    },
  ];

  return (
    <section
      id="automation"
      className="py-14 sm:py-18 lg:py-24 bg-[#F8FAFC]/60 relative overflow-hidden border-b border-slate-100"
    >
      {/* Organic Background Pastel Gradient Waves */}
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.12) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(234,75,113,0.15) 0%, rgba(139,92,246,0.12) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Left Column: Heading, Subtext, CTA and Micro-Badges */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-purple-200/90 bg-purple-50/90 text-purple-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="text-purple-600">⚡</span>
              <span>{t("KI-AUTOMATISIERUNG", "AI AUTOMATION")}</span>
            </div>

            {/* Main Headline with Highlight Gradient and Playful Swoosh */}
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15] mb-5 text-center lg:text-left">
              {t("Manuelle Arbeit in", "Turn Manual Work")}
              <span> {t("", "Into ")} </span>
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                {t("smarte Automatisierung", "Smart Automation")}

                {/* Curved underline swoosh stroke */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-[105%] h-3 text-purple-500/80 pointer-events-none"
                  viewBox="0 0 200 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10C50 3, 140 2, 197 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mt-4 sm:mb-6 font-normal lg:text-left text-center">
              {t(
                "Wir entwickeln KI-Agenten und n8n-Workflows, die Ihre Tools verbinden, repetitive Aufgaben automatisieren und Ihnen helfen, sich auf das Wesentliche zu konzentrieren — das Wachstum Ihres Unternehmens.",
                "We build AI agents and n8n workflows that connect your tools, automate repetitive tasks and help you focus on what really matters — growing your business."
              )}
            </p>

            {/* CTA Button */}
            <div className="mb-8 mt-8 lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer group"
              >
                <span>{t("KI-Automatisierung entdecken", "Explore AI Automation")}</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            {/* 3 Bottom Feature Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 pt-5 border-t border-slate-200/80 w-full max-w-[490px] mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600 shrink-0">
                  <Settings className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-700 leading-tight">
                  {t("Workflows automatisieren", "Automate Workflows")}
                </span>
              </div>

              <div className="h-6 w-px bg-slate-200" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-700 leading-tight">
                  {t("Stunden sparen", "Save Hours")}
                </span>
              </div>

              <div className="h-6 w-px bg-slate-200" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600 shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-700 leading-tight">
                  {t("Unternehmen skalieren", "Scale Your Business")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Automation Workflow Canvas */}
          <div className="lg:col-span-7 relative lg:ml-6">
            
            {/* 3D Floating Decorative Cubes / Icons (Matching Reference Image) */}
            {/* 1. Top AI Bot 3D Badge */}
            <div
              className="hidden lg:flex absolute -top-8 left-[48%] -translate-x-1/2 w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md border border-blue-200/80 shadow-[0_10px_25px_rgba(59,130,246,0.22)] items-center justify-center text-blue-600 z-20 animate-bot-drift"
              style={{
                transform: "rotate(-6deg)",
              }}
            >
              <Bot className="w-6 h-6 stroke-[2.2]" />
            </div>

            {/* 2. Bottom-Left Chart Glass Cube */}
            <div
              className="hidden lg:flex absolute -bottom-7 left-[36%] w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md border border-indigo-200/80 shadow-[0_10px_25px_rgba(99,102,241,0.2)] items-center justify-center text-indigo-600 z-20 animate-chart-drift"
              style={{
                transform: "rotate(10deg)",
              }}
            >
              <BarChart3 className="w-5 h-5 stroke-[2.2]" />
            </div>

            {/* 3. Bottom-Right Purple Gear Glass Cube */}
            <div
              className="hidden lg:flex absolute -bottom-6 right-[24%] w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md border border-purple-200/80 shadow-[0_10px_25px_rgba(168,85,247,0.2)] items-center justify-center text-purple-600 z-20 animate-gear-drift"
              style={{
                transform: "rotate(-12deg)",
              }}
            >
              <Settings className="w-5 h-5 stroke-[2.2]" />
            </div>

            {/* Visual Canvas Container */}
            <div className="relative rounded-[5px] bg-white/80 backdrop-blur-xl border border-slate-100 p-4 sm:p-6 lg:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
              
              {/* Desktop 3-Column Layout with Center n8n Hub */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-2 items-center relative z-10">
                
                {/* 1. Left Tools Stack (4 items) */}
                <div className="md:col-span-4 flex flex-col gap-2.5 sm:gap-3">
                  {tools.map((tool, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <div
                        key={tool.id}
                        className={`bg-white rounded-[5px] border px-3.5 py-2.5 sm:py-3 shadow-[0_4px_16px_rgba(15,23,42,0.03)] flex items-center justify-between transition-all duration-300 relative group ${
                          isActive
                            ? "border-purple-300 shadow-md ring-1 ring-purple-400/20 scale-[1.02]"
                            : "border-slate-100/90 hover:border-slate-200 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center justify-center shrink-0">
                            {tool.logo}
                          </div>
                          <div>
                            <div className="text-[12.5px] sm:text-[15px] font-bold text-slate-800 tracking-tight">
                              {tool.name}
                            </div>
                            <div className="text-[11.5px] sm:text-[13.5px] text-slate-400 font-normal">
                              {tool.subtext}
                            </div>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors shrink-0" />

                        {/* Anchor Dot on Right Edge */}
                        <div
                          className={`hidden md:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs transition-transform duration-300 ${
                            isActive ? "scale-125" : ""
                          }`}
                          style={{ backgroundColor: tool.dotColor }}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* 2. Central n8n Hub & AI Logic Badge */}
                <div className="md:col-span-3 flex flex-col items-center justify-center py-2 sm:py-0 relative">
                  
                  {/* SVG Connecting Flow Lines (Desktop Only) */}
                  <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none -z-0 overflow-visible">
                    <svg
                      className="w-full h-full overflow-visible"
                      viewBox="0 0 200 240"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Left tool connection paths into n8n */}
                      <path
                        d="M -20,30 C 40,30 50,110 80,110"
                        stroke="#8B5CF6"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        strokeOpacity="0.6"
                      />
                      <path
                        d="M -20,85 C 40,85 50,115 80,115"
                        stroke="#10B981"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        strokeOpacity="0.6"
                      />
                      <path
                        d="M -20,145 C 40,145 50,125 80,125"
                        stroke="#F97316"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        strokeOpacity="0.6"
                      />
                      <path
                        d="M -20,205 C 40,205 50,130 80,130"
                        stroke="#06B6D4"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        strokeOpacity="0.6"
                      />

                      {/* Right n8n connection paths into outcomes */}
                      <path
                        d="M 120,110 C 150,110 160,30 220,30"
                        stroke="#F59E0B"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        strokeOpacity="0.6"
                      />
                      <path
                        d="M 120,115 C 150,115 160,85 220,85"
                        stroke="#3B82F6"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        strokeOpacity="0.6"
                      />
                      <path
                        d="M 120,125 C 150,125 160,145 220,145"
                        stroke="#8B5CF6"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        strokeOpacity="0.6"
                      />
                      <path
                        d="M 120,130 C 150,130 160,205 220,205"
                        stroke="#F43F5E"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        strokeOpacity="0.6"
                      />
                    </svg>
                  </div>

                  {/* Central n8n Node Card */}
                  <div className="relative z-10 w-30 h-30 sm:w-28 sm:h-28 rounded-[5px] bg-white border border-rose-100/90 shadow-[0_20px_45px_rgba(234,75,113,0.18)] flex flex-col items-center justify-center p-3 text-center transition-all duration-300 hover:scale-105">
                    {/* Pink/Rose Ambient Glow */}
                    <div className="absolute inset-0 rounded-[5px] bg-gradient-to-br from-rose-50/60 to-pink-50/20 -z-0 pointer-events-none" />

                    {/* Official n8n 3-Node Connected Network Icon */}
                    <div className="relative z-10">
                      <svg
                        className="w-12 h-12 sm:w-14 sm:h-14 mb-0.5"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Connecting Arms */}
                        <line x1="20" y1="32" x2="44" y2="18" stroke="#EA4B71" strokeWidth="5.5" strokeLinecap="round" />
                        <line x1="20" y1="32" x2="44" y2="46" stroke="#EA4B71" strokeWidth="5.5" strokeLinecap="round" />

                        {/* Nodes */}
                        <circle cx="20" cy="32" r="7.5" fill="#EA4B71" />
                        <circle cx="44" cy="18" r="7.5" fill="#EA4B71" />
                        <circle cx="44" cy="46" r="7.5" fill="#EA4B71" />
                      </svg>
                    </div>

                    <span className="text-sm font-black tracking-tight text-[#EA4B71] relative z-10 leading-none">
                      n8n
                    </span>
                  </div>

                  {/* AI Logic Pill Badge below n8n */}
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/90 text-purple-700 text-xs font-bold shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>{t("KI-Logik", "AI Logic")}</span>
                  </div>
                </div>

                {/* 3. Right Outcomes Stack (4 items) */}
                <div className="md:col-span-5 flex flex-col gap-2.5 sm:gap-3">
                  {outcomes.map((outcome, idx) => {
                    const Icon = outcome.icon;
                    const isActive = activeStep === idx;
                    return (
                      <div
                        key={outcome.id}
                        className={`bg-white rounded-[5px] border px-3.5 py-2.5 sm:py-3 shadow-[0_4px_16px_rgba(15,23,42,0.03)] flex items-center justify-between transition-all duration-300 relative group ${
                          isActive
                            ? "border-blue-300 shadow-md ring-1 ring-blue-400/20 scale-[1.02]"
                            : "border-slate-100/90 hover:border-slate-200 hover:shadow-sm"
                        }`}
                      >
                        {/* Anchor Dot on Left Edge */}
                        <div
                          className={`hidden md:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs transition-transform duration-300 ${
                            isActive ? "scale-125" : ""
                          }`}
                          style={{ backgroundColor: outcome.dotColor }}
                        />

                        <div className="flex items-center gap-3">
                          {outcome.icon}
                          <div>
                            <div className="text-[12.5px] sm:text-[15px] font-bold text-slate-800 tracking-tight">
                              {outcome.title}
                            </div>
                            <div className="text-[11.5px] sm:text-[13.5px] text-slate-400 font-normal">
                              {outcome.subtext}
                            </div>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS for 3D float animations */}
      <style jsx global>{`
        @keyframes botDrift {
          0%,
          100% {
            transform: translate(-50%, 0px) rotate(-6deg);
          }
          50% {
            transform: translate(-50%, -8px) rotate(-4deg);
          }
        }

        @keyframes chartDrift {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(10deg);
          }
          50% {
            transform: translate(4px, -6px) rotate(12deg);
          }
        }

        @keyframes gearDrift {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(-12deg);
          }
          50% {
            transform: translate(-4px, -6px) rotate(-8deg);
          }
        }

        .animate-bot-drift {
          animation: botDrift 5s ease-in-out infinite;
        }

        .animate-chart-drift {
          animation: chartDrift 6s ease-in-out infinite 1s;
        }

        .animate-gear-drift {
          animation: gearDrift 5.5s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
}
