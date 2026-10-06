"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Smartphone,
  Bot,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenVideo?: () => void;
}

const heroSlides = [
  {
    id: "solutions",
    tagDe: "Digitale Suite",
    tagEn: "Digital Suite",
    titleDe: "All-in-One Digitale Lösungen",
    titleEn: "All-in-One Digital Solutions",
    descriptionDe: "Moderne Websites, mobile Apps und smarte KI-Automatisierung.",
    descriptionEn: "Modern websites, mobile apps, and smart AI automation.",
    altDe: "Website Development Services & Mobile Application Development - Nexa Solutions",
    altEn: "Website Development Services & Custom Mobile Application Development - Nexa Solutions",
    image: "/images/hero-devices.jpg",
    icon: Layers,
  },
  {
    id: "web-dev",
    tagDe: "Webentwicklung",
    tagEn: "Web Development",
    titleDe: "Hochleistungs-Websites",
    titleEn: "High-Performance Websites",
    descriptionDe: "SEO-optimiert, ultraschnell und auf Konversion ausgerichtet.",
    descriptionEn: "SEO-friendly, ultra-fast & conversion-focused web apps.",
    altDe: "Website Development Services - Business Website erstellen lassen mit Next.js",
    altEn: "Custom Website Development Services & Business Websites - Next.js Agency",
    image: "/images/web-dev.png",
    icon: Globe,
  },
  {
    id: "app-dev",
    tagDe: "Mobile Apps",
    tagEn: "Mobile Apps",
    titleDe: "Individuelle mobile Apps",
    titleEn: "Custom Mobile Applications",
    descriptionDe: "Nahtlose plattformübergreifende Apps für iOS und Android.",
    descriptionEn: "Seamless cross-platform apps for iOS and Android.",
    altDe: "Mobile Application Development - Custom iOS & Android App entwickeln lassen",
    altEn: "Mobile Application Development - Custom iOS and Android Apps Development",
    image: "/images/app-dev.png",
    icon: Smartphone,
  },
  {
    id: "ai-auto",
    tagDe: "KI & Automation",
    tagEn: "AI & Automation",
    titleDe: "KI-Workflows & n8n Automation",
    titleEn: "AI Workflows & n8n Automation",
    descriptionDe: "Autonome Agenten und intelligente Prozess-Pipelines.",
    descriptionEn: "Autonomous agents and intelligent process pipelines.",
    altDe: "KI Automatisierung & n8n Workflows für Unternehmen - Prozessautomatisierung",
    altEn: "AI Automation & n8n Workflows for Businesses - Process Automation",
    image: "/images/ai-robot.png",
    icon: Bot,
  },
  {
    id: "workspace",
    tagDe: "Tech-Innovation",
    tagEn: "Tech Innovation",
    titleDe: "Skalierbare Tech-Entwicklung",
    titleEn: "Scalable Tech Engineering",
    descriptionDe: "End-to-End-Entwicklung für nachhaltiges Unternehmenswachstum.",
    descriptionEn: "End-to-end development crafted for business growth.",
    altDe: "Full Service Software & Application Development Deutschland - Nexa Solutions",
    altEn: "Full Service Software & Application Development Agency",
    image: "/images/hero-workspace.jpg",
    icon: Sparkles,
  },
];

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play timer (pauses on user hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  const activeSlide = heroSlides[currentSlide];
  const ActiveIcon = activeSlide.icon;

  return (
    <section id="home" className="relative pt-28 pb-8 sm:pt-36 lg:pt-40 lg:pb-10 overflow-hidden bg-white">
      {/* Modern Background Subtle Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70 pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-gradient-to-bl from-blue-100/50 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4" />
      <div className="absolute -bottom-20 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-orange-100/40 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4" />

      {/* Hero Container with custom max-width 1430px */}
      <div className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Heading, Subtext, CTAs (Modernized & Fully Responsive) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start justify-content-center z-10">
            {/* Modern Eyebrow Pill with Live Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 hover:bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide mb-5 sm:mb-6 shadow-2xs transition-colors backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="uppercase tracking-wider font-bold text-[11px] text-blue-800">
                {t("IHR DIGITALPARTNER", "YOUR TECH PARTNER")}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium hidden sm:inline">
                {t("Web • App • KI-Automation", "Web • App • AI Automation")}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[35px] sm:text-[55px] lg:text-[60px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 text-center lg:text-left">
              {t("Digitale Lösungen", "Digital Solutions")} <br />
              <span className="font-[900] text-slate-800">{t("für ein", "for a")}</span>{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                {t("smarteres", "Smarter")}
              </span> <br />
              {t("Morgen", "Tomorrow")}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7 sm:mb-8 font-normal lg:text-left text-center">
              {t(
                "Wir unterstützen Unternehmen bei modernen Websites, mobilen Apps und intelligenter KI-Automatisierung – für mehr Effizienz, geringere Kosten und schnelles Wachstum.",
                "We help businesses build modern websites, mobile apps and AI-powered automation to save time, reduce costs and grow faster."
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-9 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer group"
              >
                <span>{t("Kostenlose Beratung anfragen", "Get a Free Consultation")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300/80 bg-white/90 backdrop-blur-xs text-slate-800 text-sm sm:text-base font-bold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{t("Unsere Arbeiten", "View Our Work")}</span>
              </Link>
            </div>

            {/* Modern Trust Indicators */}
            <div className="w-full pt-6 border-t border-slate-200/70 flex flex-col gap-6 lg:justify-start justify-center lg:items-start items-center">
              <div className="flex flex-wrap items-center lg:justify-start justify-center gap-4 sm:gap-8 text-[14px] sm:text-[16px] font-medium text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {t("Individuelle Lösungen", "Custom Solutions")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {t("Schnelle Umsetzung", "Fast Turnaround")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {t("Kontinuierlicher Support", "Continuous Support")}
                </span>
              </div>

              {/* German Quality Standard Badge */}
              <div className="inline-flex items-center gap-2 text-[13px] text-slate-500">
                <span className="inline-flex items-center justify-center px-1.5 py-1.5 rounded bg-blue-100/80 text-blue-700 font-bold text-[14px]">
                  DE
                </span>
                <span>
                  <strong className="text-slate-800 font-semibold">{t("Deutscher Qualitätsstandard", "German Quality Standard")}</strong> &bull; {t("100% DSGVO-konform", "100% GDPR Compliant")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Hero Image Showcase (Changeable / Slider) */}
          <div className="lg:col-span-6 relative flex flex-col justify-center items-center">
            {/* Device Mockup Frame with Image Carousel */}
            <div
              className="relative w-full rounded-[10px] overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden select-none">
                {/* Animated Slide Image with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={t(activeSlide.altDe || activeSlide.titleDe, activeSlide.altEn || activeSlide.titleEn)}
                      fill
                      priority={currentSlide === 0}
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Gradient Overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Corner Slide Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                    <ActiveIcon className="w-3.5 h-3.5 text-orange-400" />
                    <span>{t(activeSlide.tagDe, activeSlide.tagEn)}</span>
                  </div>
                </div>

                {/* Bottom Left Slide Title & Caption */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 pointer-events-none max-w-[70%] sm:max-w-[65%]">
                  <h3 className="text-white text-base sm:text-xl font-bold drop-shadow-md leading-tight">
                    {t(activeSlide.titleDe, activeSlide.titleEn)}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm drop-shadow mt-1 line-clamp-1">
                    {t(activeSlide.descriptionDe, activeSlide.descriptionEn)}
                  </p>
                </div>

                {/* Left & Right Arrow Controls */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 hover:bg-white text-slate-800 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/60 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 hover:bg-white text-slate-800 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/60 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Right Slide Indicators */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        currentSlide === idx
                          ? "w-5 sm:w-6 h-2 bg-gradient-to-r from-orange-500 to-amber-500"
                          : "w-2 h-2 bg-white/50 hover:bg-white/90"
                      }`}
                    />
                  ))}
                  <span className="text-[11px] text-white/90 font-mono font-medium ml-1.5 select-none">
                    {currentSlide + 1}/{heroSlides.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Interactive Selector Pills Below Frame */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 w-full">
              {heroSlides.map((slide, index) => {
                const Icon = slide.icon;
                const isActive = currentSlide === index;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-slate-900 text-white shadow-sm ring-2 ring-orange-500/50"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-orange-400" : "text-slate-500"}`} />
                    <span>{t(slide.tagDe, slide.tagEn)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
