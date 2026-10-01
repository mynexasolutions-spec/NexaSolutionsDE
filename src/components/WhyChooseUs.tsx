"use client";

import React from "react";
import { ArrowRight, Users, Zap, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface WhyChooseUsProps {
  onOpenContact?: () => void;
}

export default function WhyChooseUs({ onOpenContact }: WhyChooseUsProps) {
  const { t } = useLanguage();

  const features = [
    {
      id: "client-focused",
      icon: Users,
      iconBg: "bg-orange-50 border-orange-100 text-orange-500",
      cornerOrb: "from-white/90 via-orange-100/60 to-orange-200/40 border-white/80 shadow-[inset_0_2px_6px_rgba(255,255,255,0.9),0_6px_16px_rgba(251,146,60,0.15)]",
      waveGradientId: "wave-orange",
      waveStops: (
        <linearGradient id="wave-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#FFEDD5" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFF7ED" stopOpacity="0.0" />
        </linearGradient>
      ),
      arrowBg: "bg-orange-100/90 text-orange-600",
      title: t("Kundenorientierte Lösungen", "Client Focused Solutions"),
      description: t("Ihr Geschäftserfolg steht bei uns an erster Stelle.", "Your success is our priority."),
    },
    {
      id: "modern-tech",
      icon: Zap,
      iconBg: "bg-blue-50 border-blue-100 text-blue-600",
      cornerOrb: "from-white/90 via-blue-100/60 to-blue-200/40 border-white/80 shadow-[inset_0_2px_6px_rgba(255,255,255,0.9),0_6px_16px_rgba(59,130,246,0.15)]",
      waveGradientId: "wave-blue",
      waveStops: (
        <linearGradient id="wave-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#DBEAFE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.0" />
        </linearGradient>
      ),
      arrowBg: "bg-blue-100/90 text-blue-600",
      title: t("Moderne Technologien", "Modern Technologies"),
      description: t(
        "Immer einen Schritt voraus durch zukunftssichere Software.",
        "Always ahead with future-proof, maintainable software."
      ),
    },
    {
      id: "on-time",
      icon: Clock,
      iconBg: "bg-purple-50 border-purple-100 text-purple-600",
      cornerOrb: "from-white/90 via-purple-100/60 to-purple-200/40 border-white/80 shadow-[inset_0_2px_6px_rgba(255,255,255,0.9),0_6px_16px_rgba(168,85,247,0.15)]",
      waveGradientId: "wave-purple",
      waveStops: (
        <linearGradient id="wave-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#F3E8FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FAF5FF" stopOpacity="0.0" />
        </linearGradient>
      ),
      arrowBg: "bg-purple-100/90 text-purple-600",
      title: t("Pünktliche Lieferung", "On-Time Delivery"),
      description: t(
        "Verbindliche Meilensteine und Termintreue ohne Ausreden.",
        "Reliable milestones and on-time delivery with zero excuses."
      ),
    },
    {
      id: "partnership",
      icon: ShieldCheck,
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      cornerOrb: "from-white/90 via-emerald-100/60 to-emerald-200/40 border-white/80 shadow-[inset_0_2px_6px_rgba(255,255,255,0.9),0_6px_16px_rgba(16,185,129,0.15)]",
      waveGradientId: "wave-emerald",
      waveStops: (
        <linearGradient id="wave-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#D1FAE5" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ECFDF5" stopOpacity="0.0" />
        </linearGradient>
      ),
      arrowBg: "bg-emerald-100/90 text-emerald-600",
      title: t("Langfristige Partnerschaft", "Long-Term Partnership"),
      description: t(
        "Nachhaltiger Support und kontinuierliche Skalierung.",
        "Ongoing technical support and continuous business scaling."
      ),
    },
  ];

  return (
    <section id="about" className="py-6 sm:py-10 lg:py-16 bg-gradient-to-b from-[#FCFDFF] via-white to-[#F8FAFC] relative overflow-hidden border-b border-slate-100">
      {/* Top-Left Organic 3D Fluid Ribbon & Ambient Aura */}
      <div className="absolute -top-16 -left-20 w-[480px] sm:w-[560px] lg:w-[620px] h-[600px] pointer-events-none -z-0 overflow-visible opacity-90">
        <svg
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Soft Blue-Purple Radial Aura */}
            <radialGradient
              id="left-glow"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(180 180) rotate(90) scale(260)"
            >
              <stop stopColor="#93C5FD" stopOpacity="0.45" />
              <stop offset="0.5" stopColor="#C4B5FD" stopOpacity="0.25" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Layer 1 Ribbon Gradient */}
            <linearGradient id="left-ribbon-1" x1="40" y1="20" x2="380" y2="460" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#818CF8" stopOpacity="0.3" />
              <stop offset="85%" stopColor="#C084FC" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Layer 2 Ribbon Gradient */}
            <linearGradient id="left-ribbon-2" x1="120" y1="0" x2="420" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0" />
            </linearGradient>

            {/* Sphere Gradient */}
            <linearGradient id="left-orb" x1="60" y1="60" x2="260" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#818CF8" stopOpacity="0.45" />
              <stop offset="80%" stopColor="#C084FC" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="180" cy="180" r="220" fill="url(#left-glow)" />

          {/* Primary 3D Sphere Orb in Top-Left */}
          <circle cx="140" cy="140" r="110" fill="url(#left-orb)" filter="blur(24px)" />

          {/* Flowing Organic Ribbon 1 */}
          <path
            d="M -40 20 C 120 40, 240 140, 280 260 C 320 380, 260 480, 140 560 C 60 610, -20 580, -40 540 Z"
            fill="url(#left-ribbon-1)"
            filter="blur(16px)"
          />

          {/* Flowing Outer Ribbon Curve 2 */}
          <path
            d="M 0 -20 C 160 30, 310 120, 360 280 C 400 400, 310 500, 180 580 C 120 620, 40 590, 0 560 Z"
            fill="url(#left-ribbon-2)"
            filter="blur(26px)"
          />
        </svg>
      </div>

      {/* Right Side Organic 3D Fluid Ribbon & Glow */}
      <div className="absolute -bottom-24 -right-24 sm:-right-20 w-[520px] sm:w-[620px] lg:w-[720px] h-[680px] pointer-events-none -z-0 overflow-visible opacity-90">
        <svg
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Soft Purple-Blue Radial Aura */}
            <radialGradient
              id="right-glow"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(500 420) rotate(-90) scale(300)"
            >
              <stop stopColor="#C084FC" stopOpacity="0.4" />
              <stop offset="0.4" stopColor="#818CF8" stopOpacity="0.25" />
              <stop offset="0.8" stopColor="#93C5FD" stopOpacity="0.15" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Layer 1 Right Ribbon Gradient */}
            <linearGradient id="right-ribbon-1" x1="680" y1="180" x2="220" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#818CF8" stopOpacity="0.3" />
              <stop offset="80%" stopColor="#38BDF8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Layer 2 Warm Peach/Rose Gradient Sweep */}
            <linearGradient id="right-ribbon-2" x1="720" y1="360" x2="320" y2="700" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDBA74" stopOpacity="0.35" />
              <stop offset="45%" stopColor="#F472B6" stopOpacity="0.22" />
              <stop offset="85%" stopColor="#C084FC" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Sphere Orb */}
            <linearGradient id="right-orb" x1="580" y1="320" x2="380" y2="520" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="500" cy="420" r="260" fill="url(#right-glow)" />

          {/* Glowing Orb in Center-Right */}
          <circle cx="520" cy="400" r="140" fill="url(#right-orb)" filter="blur(26px)" />

          {/* Flowing Organic Ribbon 1 */}
          <path
            d="M 720 120 C 560 160, 420 280, 360 420 C 300 560, 380 660, 520 720 C 620 760, 720 740, 750 700 Z"
            fill="url(#right-ribbon-1)"
            filter="blur(18px)"
          />

          {/* Flowing Warm Peach/Rose Ribbon 2 */}
          <path
            d="M 740 320 C 620 380, 480 480, 440 600 C 400 700, 480 770, 600 800 Z"
            fill="url(#right-ribbon-2)"
            filter="blur(22px)"
          />
        </svg>
      </div>

      {/* Bottom-Left Dot Matrix Pattern (Matching Screenshot) */}
      <div className="absolute left-6 sm:left-10 lg:left-14 bottom-8 sm:bottom-12 pointer-events-none hidden sm:block -z-0">
        <div className="grid grid-cols-6 gap-2.5 sm:gap-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-400/40"
            />
          ))}
        </div>
      </div>

      {/* Top-Right Dot Matrix Pattern (Matching Screenshot) */}
      <div className="absolute right-8 sm:right-16 lg:right-24 top-6 sm:top-10 pointer-events-none hidden md:block -z-0">
        <div className="grid grid-cols-8 gap-2.5 sm:gap-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-400/35"
            />
          ))}
        </div>
      </div>

      {/* Section Container with Compact Width */}
      <div className="w-full max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtext, CTA and Stats Counter (Centered on Mobile, Left-aligned on Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>{t("ÜBER NEXA SOLUTIONS", "ABOUT NEXA SOLUTIONS")}</span>
            </div>

            {/* Headline with swoosh underline and spark ticks */}
            <div className="relative mb-5 sm:mb-6">
              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.15]">
                {t("Ihr Wachstum", "Your Growth")} <br />
                <span>{t("Unsere", "Our")} </span>
                <span className="relative inline-block text-blue-600">
                  {t("Priorität", "Priority")}

                  {/* Playful spark marks angled above priority word */}
                  <span className="absolute -top-3.5 -right-5 sm:-right-6 flex gap-1 transform rotate-12 pointer-events-none select-none">
                    <span className="w-1.5 h-3.5 bg-purple-500 rounded-full"></span>
                    <span className="w-1.5 h-4 bg-purple-500 rounded-full translate-y-1"></span>
                  </span>

                  {/* Underline curved swoosh stroke */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-[105%] h-3 text-blue-600/90 pointer-events-none"
                    viewBox="0 0 160 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C40 2, 110 3, 158 8"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-slate-600 text-base sm:text-lg  leading-relaxed mb-7 sm:mb-8 max-w-lg text-center lg:text-left">
              {t(
                "Wir verbinden deutsche Qualitätsstandards, intuitive User Experience und moderne KI-Technologie, um digitale Produkte zu entwickeln, die einen messbaren Unterschied für Ihr Unternehmen machen.",
                "We combine German quality standards, intuitive user experience, and modern AI engineering to build digital products that make a measurable impact on your business."
              )}
            </p>

            {/* CTA Button */}
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer group mb-9 sm:mb-11"
              >
                <span>{t("Erstgespräch anfragen", "Schedule a Consultation")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}

            {/* Stats Counter Row (Bottom of Left Column) */}
            <div className="flex items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-10 pt-5 border-t border-slate-200/80 w-full max-w-md lg:mx-w-2xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-center">100+</div>
                <div className="text-xs text-slate-800 font-medium mt-0.5 text-center">{t("Projekte geliefert", "Projects Delivered")}</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-center">50+</div>
                <div className="text-xs text-slate-800 font-medium mt-0.5 text-center">{t("Zufriedene Kunden", "Happy Clients")}</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-center">4+</div>
                <div className="text-xs text-slate-800 font-medium mt-0.5 text-center">{t("Jahre Erfahrung", "Years Experience")}</div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Bento Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 rounded-[5px] bg-white border border-slate-200/80 shadow-[0_8px_25px_-12px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[120px]"
                  >
                    {/* Top-Right Decorative Frosted 3D Sphere */}
                    <div className={`absolute top-3 right-3 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br border ${item.cornerOrb} pointer-events-none`} />

                    {/* Organic Bottom Wave SVG (Matching Reference Screenshot) */}
                    <svg
                      className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
                      viewBox="0 0 280 100"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <defs>{item.waveStops}</defs>
                      <path
                        d="M0 100 L0 35 C 45 15, 95 65, 150 40 C 205 15, 245 45, 280 20 L280 100 Z"
                        fill={`url(#${item.waveGradientId})`}
                      />
                    </svg>

                    <div className="relative z-10">
                      {/* Top Icon Box */}
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-[5px] border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300 mb-4 ${item.iconBg}`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                      </div>

                      {/* Content */}
                      <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[280px] mb-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action Arrow */}
                    <div className="relative z-10 flex justify-end mt-2 pt-1">
                      <div className={`w-8 h-8 rounded-full ${item.arrowBg} flex items-center justify-center shadow-2xs group-hover:translate-x-1 group-hover:scale-105 transition-all`}>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
