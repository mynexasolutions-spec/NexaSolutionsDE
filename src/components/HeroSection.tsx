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
    image: "/images/web-dev.jpg",
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
    image: "/images/app-dev.jpg",
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
    image: "/images/ai-robot.jpg",
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
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 via-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-orange-100/30 via-amber-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Heading, Subtext, CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6 shadow-2xs">
              <span className="text-blue-500 font-bold">|&rarr;</span>
              <span>{t("IHR DIGITALPARTNER", "YOUR TECH PARTNER")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0F172A] tracking-tight leading-[1.12] mb-5">
              {t("Digitale Lösungen", "Digital Solutions")} <br />
              {t("für ein", "for a")}{" "}
              <span className="text-blue-600">{t("smarteres", "Smarter")}</span> <br />
              {t("Morgen", "Tomorrow")}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-xl mb-8">
              {t(
                "Wir unterstützen Unternehmen bei modernen Websites, mobilen Apps und intelligenter KI-Automatisierung – für mehr Effizienz, geringere Kosten und schnelles Wachstum.",
                "We help businesses build modern websites, mobile apps and AI-powered automation to save time, reduce costs and grow faster."
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 group cursor-pointer"
              >
                <span>{t("Kostenlose Beratung anfragen", "Get a Free Consultation")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 bg-white text-slate-800 text-sm font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs cursor-pointer"
              >
                <span>{t("Unsere Arbeiten", "View Our Work")}</span>
              </Link>
            </div>

            {/* Subtle Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-[13px] font-medium text-slate-500 pt-2">
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
          </div>

          {/* Right Column: Interactive Hero Image Showcase (Changeable / Slider) */}
          <div className="lg:col-span-6 relative flex flex-col justify-center items-center">
            {/* Device Mockup Frame with Image Carousel */}
            <div
              className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group"
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
                      alt={t(activeSlide.titleDe, activeSlide.titleEn)}
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
