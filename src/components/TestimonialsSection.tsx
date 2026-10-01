"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const testimonials = [
    {
      id: "ahmed",
      quote: t(
        "Nexa Solutions hat genau das geliefert, was wir brauchten. Die Website sieht großartig aus und hat uns geholfen, mehr Kunden zu gewinnen.",
        "Nexa Solutions delivered exactly what we needed. The website looks great and has helped us get more customers."
      ),
      name: "Ahmed Khan",
      role: "Aura Masale",
      avatar: "/images/avatar-crop.png",
      initials: "AK",
      accentGlow: "from-orange-100/40 via-amber-50/20 to-transparent",
      rating: 5,
    },
    {
      id: "priya",
      quote: t(
        "Das Team hat unsere HRMS-Plattform mit großer Liebe zum Detail entwickelt. Die Kommunikation war während des gesamten Projekts reibungslos.",
        "The team built our HRMS platform with great attention to detail. Communication was smooth throughout the project."
      ),
      name: "Priya Sharma",
      role: "Meagle360",
      avatar: null,
      initials: "PS",
      initialsBg: "bg-blue-100 text-blue-800 border-blue-200",
      accentGlow: "from-blue-100/40 via-sky-50/20 to-transparent",
      rating: 5,
    },
    {
      id: "rohit",
      quote: t(
        "Professionell, pünktlich und sehr unterstützend. Sie haben unsere Anforderungen verstanden und eine hochwertige Lösung geliefert.",
        "Professional, timely and very supportive. They understood our requirements and delivered a high quality solution."
      ),
      name: "Rohit Verma",
      role: "Taibeena",
      avatar: null,
      initials: "RV",
      initialsBg: "bg-orange-100 text-orange-800 border-orange-200",
      accentGlow: "from-amber-100/40 via-orange-50/20 to-transparent",
      rating: 5,
    },
    {
      id: "markus",
      quote: t(
        "Die automatisierte Bildungsplattform hat unsere Beratungsprozesse revolutioniert. Schneller, intuitiver und absolut zuverlässig.",
        "The automated education consultancy platform revolutionized our processes. Faster, more intuitive, and completely reliable."
      ),
      name: "Dr. Markus Weber",
      role: "EasywayGermany",
      avatar: null,
      initials: "MW",
      initialsBg: "bg-indigo-100 text-indigo-800 border-indigo-200",
      accentGlow: "from-indigo-100/40 via-blue-50/20 to-transparent",
      rating: 5,
    },
    {
      id: "sarah",
      quote: t(
        "Hervorragende Zusammenarbeit bei unseren n8n KI-Workflows. Wir sparen wöchentlich über 20 Stunden manueller Arbeit ein.",
        "Outstanding collaboration on our n8n AI workflows. We save over 20 hours of manual work every single week."
      ),
      name: "Sarah Jenkins",
      role: "CloudFlow AI",
      avatar: null,
      initials: "SJ",
      initialsBg: "bg-purple-100 text-purple-800 border-purple-200",
      accentGlow: "from-purple-100/40 via-violet-50/20 to-transparent",
      rating: 5,
    },
    {
      id: "lukas",
      quote: t(
        "Modernes Design, blitzschnelle Performance und deutscher Qualitätsanspruch. Genau der Technologiepartner, den wir gesucht haben.",
        "Modern design, lightning-fast performance, and German quality standards. Exactly the tech partner we were looking for."
      ),
      name: "Lukas Becker",
      role: "Nexa Logistics",
      avatar: null,
      initials: "LB",
      initialsBg: "bg-rose-100 text-rose-800 border-rose-200",
      accentGlow: "from-rose-100/40 via-pink-50/20 to-transparent",
      rating: 5,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-10 sm:py-12 lg:py-16 bg-[#FCFCFD] relative overflow-hidden border-b border-slate-100"
    >
      {/* Background Organic Ambient Gradient Waves (Matching Screenshot) */}
      <div
        className="absolute -top-28 -left-28 w-[480px] h-[480px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.16) 0%, rgba(254,215,170,0.1) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-28 -right-28 w-[520px] h-[520px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(191,219,254,0.1) 50%, transparent 70%)",
        }}
      />

      {/* Decorative Dot Matrix on Left & Right Edges */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-4 gap-2.5 opacity-30 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-4 gap-2.5 opacity-30 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      <div className="w-full max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Small Orange Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 text-orange-500 text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-2 sm:mb-2.5">
              <span className="text-orange-500 font-mono">|→</span>
              <span>{t("KUNDENSTIMMEN", "CLIENT TESTIMONIALS")}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0B132B] tracking-tight leading-[1.15] flex items-center">
              <span className="text-orange-500 mr-0.5 select-none">&apos;</span>
              <span>{t("Was unsere Kunden sagen", "What Our Clients Say")}</span>
            </h2>

            {/* Subtext Below Headline */}
            <p className="text-slate-500 text-sm sm:text-base font-normal mt-2 leading-relaxed">
              {t(
                "Echte Geschichten von echten Kunden, die uns vertraut und großartige Ergebnisse erzielt haben.",
                "Real stories from real clients who trusted us and achieved great results."
              )}
            </p>
          </div>

          {/* Top-Right Happy Clients Pill with 3 Avatars & Spark Ticks */}
          <div className="relative self-center sm:self-auto shrink-0">
            {/* Playful Orange Spark Ticks on Top-Right */}
            <span className="absolute -top-3 -right-2 flex gap-1 transform rotate-12 pointer-events-none select-none">
              <span className="w-1 h-3 bg-orange-500 rounded-full" />
              <span className="w-1 h-3.5 bg-orange-500 rounded-full translate-y-0.5" />
            </span>

            <div className="bg-white/95 backdrop-blur-md rounded-[5px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] px-3.5 py-2 inline-flex items-center gap-3">
              {/* 3 Overlapping Avatars */}
              <div className="flex items-center -space-x-2">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700 shadow-2xs">
                  PS
                </div>
                <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-700 shadow-2xs">
                  RV
                </div>
              </div>

              {/* 500+ Happy Clients text */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-black text-[#0B132B] leading-none">500+</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-none mt-1">
                  {t("Zufriedene Kunden", "Happy Clients")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel View Container */}
        <div className="relative overflow-hidden">
          {/* Slider Row */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-3 sm:p-3.5"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-[5px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between min-h-[250px] relative overflow-hidden group">
                  {/* Subtle top-right ambient background wave inside card */}
                  <div
                    className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.accentGlow} pointer-events-none blur-xl`}
                  />

                  {/* Top Quote Icon & Text */}
                  <div className="relative z-10">
                    {/* Stylized Double Quote Marks */}
                    <div className="text-orange-500 font-serif text-3xl sm:text-4xl font-black leading-none mb-3.5 select-none">
                      &ldquo;&ldquo;
                    </div>

                    <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed mb-6 font-normal">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Author Row & 5 Stars */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 relative z-10">
                    <div className="flex items-center gap-3">
                      {item.avatar ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0 shadow-2xs">
                          <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-full ${item.initialsBg} font-bold flex items-center justify-center text-xs shrink-0 border shadow-2xs`}
                        >
                          {item.initials}
                        </div>
                      )}
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0B132B] leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-normal">{item.role}</p>
                      </div>
                    </div>

                    {/* 5 Solid Golden Stars */}
                    <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls (Bottom Center) */}
        <div className="flex items-center justify-center gap-3.5 mt-8 sm:mt-10">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-9 h-9 rounded-full bg-blue-50/80 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? "w-6 bg-orange-500" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-9 h-9 rounded-full bg-blue-50/80 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
