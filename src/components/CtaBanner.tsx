"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Send,
  Check,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CtaBannerProps {
  onOpenContact: () => void;
}

export default function CtaBanner({ onOpenContact }: CtaBannerProps) {
  const { t } = useLanguage();

  const benefits = [
    t("Kostenlose Beratung", "Free Consultation"),
    t("Expertenberatung", "Expert Advice"),
    t("Individuelle Lösungen", "Custom Solutions"),
  ];

  return (
    <section id="contact-banner" className="py-10 sm:py-12 lg:py-16 bg-[#FCFCFD] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Banner Card */}
        <div className="relative rounded-[5px] sm:rounded-[5px] bg-white border border-slate-200/90 px-4 py-6 sm:px-10 sm:py-10 lg:px-12 lg:py-8 overflow-hidden shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)]">
          
          {/* Subtle Ambient Card Highlights */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            
            {/* Left Column: Heading, Subtext, Benefits, Buttons, Clients Counter */}
            <div className="lg:col-span-6 flex flex-col items-center sm:items-start text-center sm:text-left">
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-1.5 text-orange-500 text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-6">
                <span className="text-orange-500 font-mono font-bold">|→</span>
                <span>{t("LASS UNS ZUSAMMEN BAUEN", "LET'S BUILD TOGETHER")}</span>
              </div>

              {/* Main Headline with Blue 'Mind?' & Playful Spark Ticks */}
              <div className="relative mb-6">
                {/* Orange spark ticks above 'Mind?' */}
                <span className="absolute -top-3.5 right-6 sm:right-16 lg:right-24 flex gap-1 transform rotate-12 pointer-events-none select-none">
                  <span className="w-1 h-3.5 bg-orange-500 rounded-full" />
                  <span className="w-1 h-4 bg-orange-500 rounded-full translate-y-1" />
                </span>

                <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-2 text-center">
                  {t("Haben Sie ein Projekt", "Have a Project")}{" "}
                  <span>{t("im Sinn?", "in ")}</span>
                  <span className="text-blue-600">{t("", "Mind?")}</span>
                </h2>
              </div>

              {/* Description Paragraph */}
              <p className="text-slate-500 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-lg mb-8 font-normal">
                {t(
                  "Ob Sie eine Website, eine mobile App oder KI-Automatisierung benötigen — wir helfen Ihnen. Holen Sie sich eine kostenlose Beratung und lassen Sie uns Ihre Ideen besprechen.",
                  "Whether you need a website, a mobile app or AI automation — we're here to help. Get a free consultation and let's discuss your ideas."
                )}
              </p>

              {/* 3 Benefit Checkmarks Row */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5 mb-7">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-md bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-3.5 mb-8 w-full sm:w-auto">
                {/* 1. Get Free Consultation Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer group"
                >
                  <span>{t("Kostenlose Beratung anfragen", "Get a Free Consultation")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* 2. Contact Us Button */}
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-sm sm:text-base font-bold transition-all duration-300 shadow-2xs hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <span>{t("Kontakt aufnehmen", "Contact Us")}</span>
                  <Send className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* 500+ Happy Clients Social Proof */}
              <div className="flex items-center justify-center sm:justify-start gap-3.5 pt-2">
                {/* 3 Overlapping Avatars + 500+ pill */}
                <div className="flex items-center -space-x-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700 shadow-2xs">
                    PS
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-700 shadow-2xs">
                    RV
                  </div>
                  <div className="relative px-2 h-7 rounded-full bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[10px] font-bold text-orange-700 shadow-2xs">
                    500+
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#0B132B] leading-none">
                    {t("500+ Zufriedene Kunden", "500+ Happy Clients")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-none mt-1">
                    {t("Von Unternehmen weltweit geschätzt", "Trusted by businesses worldwide")}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Illustration & 4 Floating Process Cards */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
              
              {/* Paper Plane with Curved Dashed Flight Path (Top-Right) */}
              <div className="hidden sm:block absolute top-2 right-4 sm:right-8 z-20 pointer-events-none">
                <svg className="w-32 h-20 overflow-visible" viewBox="0 0 120 80" fill="none">
                  <path
                    d="M 10,70 C 40,20 70,60 105,15"
                    stroke="#F97316"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeOpacity="0.7"
                  />
                </svg>
                <div className="absolute top-1 right-1 text-orange-500 transform rotate-12 animate-pulse">
                  <Send className="w-5 h-5 fill-orange-500/20" />
                </div>
              </div>

              {/* Decorative Dot Matrix on Left of Character Desk */}
              <div className="absolute bottom-6 left-2 sm:left-6 grid grid-cols-4 gap-2 opacity-35 pointer-events-none -z-0">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                ))}
              </div>

              {/* Circular Warm Stage Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(249,115,22,0.18)] bg-gradient-to-b from-orange-100/90 via-amber-50/70 to-orange-100/50 shrink-0">
                <Image
                  src="/images/cta-developer.jpg"
                  alt="Nexa Solutions 3D Developer"
                  fill
                  className="object-cover object-center scale-105"
                  priority
                />
              </div>

              {/* 4 Floating Step Process Cards Around the Character */}

              {/* Card 1: Idea (Top Left) */}
              <div className="absolute top-4 sm:top-6 left-0 sm:left-4 z-20 bg-white/95 backdrop-blur-md border border-slate-100/90 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] flex items-center gap-3 transition-transform duration-300 hover:scale-105 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#0B132B] leading-none">
                    {t("Idee", "Idea")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-normal leading-none mt-1">
                    {t("Vision teilen", "Share Your Vision")}
                  </div>
                </div>
              </div>

              {/* Card 2: Design (Top Right) */}
              <div className="absolute top-8 sm:top-10 right-0 sm:right-2 z-20 bg-white/95 backdrop-blur-md border border-slate-100/90 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] flex items-center gap-3 transition-transform duration-300 hover:scale-105 animate-float-delayed">
                <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100/80 text-orange-600 flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#0B132B] leading-none">
                    {t("Design", "Design")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-normal leading-none mt-1">
                    {t("Zum Leben erwecken", "Bring It to Life")}
                  </div>
                </div>
              </div>

              {/* Card 3: Develop (Mid Right) */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] sm:right-0 z-20 bg-white/95 backdrop-blur-md border border-slate-100/90 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] flex items-center gap-3 transition-transform duration-300 hover:scale-105 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#0B132B] leading-none">
                    {t("Entwickeln", "Develop")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-normal leading-none mt-1">
                    {t("Bauen & Wachsen", "Build & Grow")}
                  </div>
                </div>
              </div>

              {/* Card 4: Launch (Bottom Right) */}
              <div className="absolute bottom-4 sm:bottom-6 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md border border-slate-100/90 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] flex items-center gap-3 transition-transform duration-300 hover:scale-105 animate-float-delayed">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
                  <Rocket className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#0B132B] leading-none">
                    {t("Launchen", "Launch")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-normal leading-none mt-1">
                    {t("Erfolgreich live gehen", "Go Live Successfully")}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Embedded CSS for smooth float animations */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes floatDelayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 5.5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
}
