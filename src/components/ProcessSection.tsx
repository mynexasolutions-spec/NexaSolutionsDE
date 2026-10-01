"use client";

import React from "react";
import { Laptop, PenTool, ClipboardCheck, Rocket, ChevronRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Laptop,
      title: t("Entdecken", "Discover"),
      description: t("Ihre Ziele und Anforderungen verstehen", "Understand your goals and requirements"),
      color: "blue",
      tiltClass: "rotate-0 lg:-rotate-2 lg:hover:rotate-0",
      floatAnimation: "float-step-1",
      pedestalGlow: "rgba(59, 130, 246, 0.45)",
      iconBg: "bg-blue-50/90 border-blue-100/80 text-blue-600 shadow-sm shadow-blue-500/10",
      badgeStyle: "bg-blue-50/90 text-blue-600 border-blue-100",
      cardBorder: "hover:border-blue-300/80 hover:shadow-[0_24px_50px_rgba(59,130,246,0.14)]",
    },
    {
      number: "02",
      icon: PenTool,
      title: t("Planen", "Plan"),
      description: t("Strategie und Roadmap entwickeln", "Create a strategy and roadmap"),
      color: "orange",
      tiltClass: "rotate-0 lg:rotate-1.5 lg:hover:rotate-0",
      floatAnimation: "float-step-2",
      pedestalGlow: "rgba(249, 115, 22, 0.45)",
      iconBg: "bg-orange-50/90 border-orange-100/80 text-orange-600 shadow-sm shadow-orange-500/10",
      badgeStyle: "bg-orange-50/90 text-orange-600 border-orange-100",
      cardBorder: "hover:border-orange-300/80 hover:shadow-[0_24px_50px_rgba(249,115,22,0.14)]",
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: t("Entwickeln", "Build"),
      description: t("Lösung entwerfen, entwickeln und testen", "Design, develop and test the solution"),
      color: "blue",
      tiltClass: "rotate-0 lg:-rotate-1.5 lg:hover:rotate-0",
      floatAnimation: "float-step-3",
      pedestalGlow: "rgba(59, 130, 246, 0.45)",
      iconBg: "bg-blue-50/90 border-blue-100/80 text-blue-600 shadow-sm shadow-blue-500/10",
      badgeStyle: "bg-blue-50/90 text-blue-600 border-blue-100",
      cardBorder: "hover:border-blue-300/80 hover:shadow-[0_24px_50px_rgba(59,130,246,0.14)]",
    },
    {
      number: "04",
      icon: Rocket,
      title: t("Launchen", "Launch"),
      description: t("Deployment und laufender Support", "Deploy and provide ongoing support"),
      color: "orange",
      tiltClass: "rotate-0 lg:rotate-2 lg:hover:rotate-0",
      floatAnimation: "float-step-4",
      pedestalGlow: "rgba(249, 115, 22, 0.45)",
      iconBg: "bg-orange-50/90 border-orange-100/80 text-orange-600 shadow-sm shadow-orange-500/10",
      badgeStyle: "bg-orange-50/90 text-orange-600 border-orange-100",
      cardBorder: "hover:border-orange-300/80 hover:shadow-[0_24px_50px_rgba(249,115,22,0.14)]",
    },
  ];

  return (
    <section id="process" className="py-10 sm:py-14 lg:py-16 bg-[#FCFCFD] relative overflow-hidden border-b border-slate-100/80">
      {/* Atmospheric Background Ambient Radial Glows */}
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)" }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0) 70%)" }}
      />

      {/* Decorative Dot Matrix on Left & Right Edges (Desktop only) */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-4 gap-2.5 opacity-30 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        ))}
      </div>
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-4 gap-2.5 opacity-30 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        ))}
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center justify-center gap-4 sm:gap-2 max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="flex flex-col items-center text-center">
            {/* Small Orange Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50/90 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="text-orange-500">⚡</span>
              <span>{t("UNSER PROZESS", "OUR PROCESS")}</span>
            </div>
            {/* Main Headline */}
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3 text-center">
              {t("Ein einfacher Prozess", "A Simple Process")} <br className="hidden sm:inline" />
              {t("für erfolgreiche Projekte", "for Successful Projects")}
            </h2>
          </div>

          {/* Supporting Paragraph */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl text-center font-normal">
            {t(
              "Wir folgen einem klaren und kollaborativen Prozess, um hochwertige Ergebnisse pünktlich und im Budget zu liefern.",
              "We follow a clear and collaborative process to ensure high-quality results, on time and within budget."
            )}
          </p>
        </div>

        {/* 3D Floating Anti-Gravity Section */}
        <div className="relative pt-1 sm:pt-6 pb-2 sm:pb-6">
          {/* Connecting Curved Wave Ribbon (Desktop only) */}
          <div className="hidden lg:block absolute top-[100px] left-0 right-0 w-full h-32 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="processWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
                  <stop offset="28%" stopColor="#93C5FD" stopOpacity="0.55" />
                  <stop offset="42%" stopColor="#FDBA74" stopOpacity="0.6" />
                  <stop offset="65%" stopColor="#93C5FD" stopOpacity="0.55" />
                  <stop offset="78%" stopColor="#FDBA74" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FB923C" stopOpacity="0.45" />
                </linearGradient>
                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Glowing Wave Path */}
              <path
                d="M 120,60 C 220,10 320,110 420,60 C 520,10 620,110 720,60 C 820,10 920,110 1080,60"
                stroke="url(#processWaveGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#softGlow)"
              />
            </svg>
          </div>

          {/* 3D Floating Decorative Spheres (Desktop only) */}
          {/* Sphere 1: Far Left Small Blue Orb */}
          <div
            className="hidden lg:block absolute -top-6 left-[1%] w-7 h-7 rounded-full pointer-events-none z-0 animate-orb-drift"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #93c5fd 30%, #3b82f6 70%, #1e40af 100%)",
              boxShadow: "0 8px 18px rgba(59, 130, 246, 0.35), inset 0 1px 2px rgba(255,255,255,0.8)",
            }}
          />

          {/* Sphere 2: Mid-Left Soft Blue Sphere */}
          <div
            className="hidden lg:block absolute top-[130px] -left-[1%] w-11 h-11 rounded-full pointer-events-none z-0 animate-orb-drift-slow"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #bfdbfe 35%, #60a5fa 75%, #2563eb 100%)",
              boxShadow: "0 12px 24px rgba(37, 99, 235, 0.28), inset 0 2px 4px rgba(255,255,255,0.9)",
            }}
          />

          {/* Sphere 3: Warm Peach Sphere between 1 & 2 */}
          <div
            className="hidden lg:block absolute -top-3 left-[47%] w-8 h-8 rounded-full pointer-events-none z-0 animate-orb-drift"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #ffedd5 30%, #fb923c 70%, #c2410c 100%)",
              boxShadow: "0 8px 18px rgba(249, 115, 22, 0.3), inset 0 1px 2px rgba(255,255,255,0.8)",
            }}
          />

          {/* Sphere 4: Blue Sphere between 2 & 3 */}
          <div
            className="hidden lg:block absolute top-[165px] left-[50%] w-9 h-9 rounded-full pointer-events-none z-0 animate-orb-drift-slow"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #dbeafe 30%, #60a5fa 70%, #1d4ed8 100%)",
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3), inset 0 2px 3px rgba(255,255,255,0.8)",
            }}
          />

          {/* Sphere 5: Small Peach Sphere near 4th card */}
          <div
            className="hidden lg:block absolute top-[140px] right-[21%] w-6 h-6 rounded-full pointer-events-none z-0 animate-orb-drift"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #fed7aa 30%, #f97316 70%, #9a3412 100%)",
              boxShadow: "0 6px 14px rgba(249, 115, 22, 0.25), inset 0 1px 2px rgba(255,255,255,0.8)",
            }}
          />

          {/* Sphere 6: Saturn Orb with Orbital Glowing Ring on the Far Right */}
          <div className="hidden lg:block absolute -top-6 -right-6 w-44 h-44 pointer-events-none z-0">
            {/* Translucent Soft Glowing Sphere Body */}
            <div
              className="absolute inset-4 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 40% 35%, rgba(255, 237, 213, 0.9) 0%, rgba(251, 146, 60, 0.45) 50%, rgba(234, 88, 12, 0.15) 80%, transparent 100%)",
                filter: "blur(1px)",
              }}
            />
            {/* Orbital Ring */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-20 rounded-[50%] border-[2px] border-orange-300/40 pointer-events-none"
              style={{
                transform: "translate(-50%, -50%) rotate(-18deg)",
                boxShadow: "0 0 20px rgba(251, 146, 60, 0.25), inset 0 0 12px rgba(251, 146, 60, 0.2)",
              }}
            />
          </div>

          {/* Process Steps Grid: Responsive on Mobile & Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 relative z-10 max-w-[300px] sm:max-w-none mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isBlue = step.color === "blue";

              return (
                <div key={step.number} className="relative flex flex-col items-center w-full">
                  {/* Floating Animation Wrapper */}
                  <div className={`w-full ${step.floatAnimation}`}>
                    {/* Tilt & 3D Interactive Card */}
                    <div
                      className={`w-full group relative transition-all duration-500 ease-out transform ${step.tiltClass} hover:-translate-y-2.5 cursor-default`}
                    >
                      {/* Card Container: Compact height & width on mobile, full on desktop */}
                      <div
                        className={`relative bg-white/95 backdrop-blur-md rounded-[10px] p-4 sm:p-6 lg:p-7 border border-slate-100/90 shadow-[0_12px_30px_rgba(15,23,42,0.05),0_4px_12px_rgba(15,23,42,0.02)] ${step.cardBorder} transition-all duration-300 flex flex-col min-h-[150px] sm:min-h-[220px]`}
                      >
                        {/* Top Row: Icon Container + Step Number */}
                        <div className="flex items-center justify-between w-full mb-3 sm:mb-6">
                          {/* 3D Icon Container */}
                          <div
                            className={`w-10 h-10 sm:w-14 sm:h-14 rounded-[5px] sm:rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${step.iconBg}`}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                          </div>

                          {/* Step Number Badge */}
                          <span
                            className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-tight border ${step.badgeStyle}`}
                          >
                            {step.number}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-base sm:text-xl font-bold text-[#0B132B] mb-1 sm:mb-2 tracking-tight transition-colors duration-200 group-hover:text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-[12px] sm:text-[15px] text-slate-500 font-normal leading-snug sm:leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Step Arrow Node Between Cards */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 top-[95px] z-20 items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-slate-600 transition-colors">
                        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  )}

                  {/* 3D Glowing Anti-Gravity Pedestal Platform Underneath */}
                  <div className="w-full flex flex-col items-center mt-1 sm:mt-3 pointer-events-none">
                    <div className="w-[85%] sm:w-[100%] lg:w-[112%] max-w-[220px] sm:max-w-[290px] h-8 sm:h-14 md:h-16 relative flex items-center justify-center">
                      {/* Atmospheric Floor Glow */}
                      <div
                        className="absolute -bottom-1 sm:-bottom-2 w-[110%] h-5 sm:h-8 rounded-full blur-md sm:blur-xl opacity-80 transition-opacity duration-300"
                        style={{
                          backgroundColor: isBlue ? "rgba(59, 130, 246, 0.6)" : "rgba(249, 115, 22, 0.6)",
                        }}
                      />
                      <div
                        className="absolute bottom-0 w-[80%] h-2.5 sm:h-4 rounded-full blur-xs sm:blur-md opacity-90"
                        style={{
                          backgroundColor: isBlue ? "rgba(96, 165, 250, 0.8)" : "rgba(251, 146, 60, 0.8)",
                        }}
                      />

                      {/* 3D Disc Platform SVG */}
                      <svg
                        className="w-full h-full overflow-visible drop-shadow-md"
                        viewBox="0 0 220 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          {/* Top Disc Surface Gradient */}
                          <radialGradient
                            id={`pedestalTop-${idx}`}
                            cx="50%"
                            cy="35%"
                            r="50%"
                            fx="50%"
                            fy="35%"
                          >
                            {isBlue ? (
                              <>
                                <stop offset="0%" stopColor="#FFFFFF" />
                                <stop offset="35%" stopColor="#DBEAFE" />
                                <stop offset="75%" stopColor="#93C5FD" />
                                <stop offset="100%" stopColor="#3B82F6" />
                              </>
                            ) : (
                              <>
                                <stop offset="0%" stopColor="#FFFFFF" />
                                <stop offset="35%" stopColor="#FFEDD5" />
                                <stop offset="75%" stopColor="#FDBA74" />
                                <stop offset="100%" stopColor="#F97316" />
                              </>
                            )}
                          </radialGradient>

                          {/* 3D Cylinder Body Gradient */}
                          <linearGradient
                            id={`pedestalBody-${idx}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            {isBlue ? (
                              <>
                                <stop offset="0%" stopColor="#2563EB" />
                                <stop offset="25%" stopColor="#60A5FA" />
                                <stop offset="50%" stopColor="#93C5FD" />
                                <stop offset="75%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#1D4ED8" />
                              </>
                            ) : (
                              <>
                                <stop offset="0%" stopColor="#EA580C" />
                                <stop offset="25%" stopColor="#FB923C" />
                                <stop offset="50%" stopColor="#FDBA74" />
                                <stop offset="75%" stopColor="#F97316" />
                                <stop offset="100%" stopColor="#C2410C" />
                              </>
                            )}
                          </linearGradient>

                          {/* Base Shadow Gradient */}
                          <linearGradient
                            id={`pedestalBase-${idx}`}
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor={isBlue ? "#1E40AF" : "#9A3412"} stopOpacity="0.4" />
                            <stop offset="100%" stopColor={isBlue ? "#172554" : "#431407"} stopOpacity="0.8" />
                          </linearGradient>
                        </defs>

                        {/* Cylinder Depth / 3D Base */}
                        <path
                          d="M 12,18 C 12,30 56,40 110,40 C 164,40 208,30 208,18 L 208,28 C 208,40 164,50 110,50 C 56,50 12,40 12,28 Z"
                          fill={`url(#pedestalBody-${idx})`}
                        />

                        {/* Cylinder Bottom Shadow Rim */}
                        <path
                          d="M 12,28 C 12,40 56,50 110,50 C 164,50 208,40 208,28 L 208,31 C 208,43 164,53 110,53 C 56,53 12,43 12,31 Z"
                          fill={`url(#pedestalBase-${idx})`}
                          opacity="0.6"
                        />

                        {/* Top Ellipse Platform Cap */}
                        <ellipse
                          cx="110"
                          cy="18"
                          rx="98"
                          ry="14"
                          fill={`url(#pedestalTop-${idx})`}
                          stroke={isBlue ? "#BFDBFE" : "#FED7AA"}
                          strokeWidth="1.2"
                        />

                        {/* Inner Glowing Highlight Ring */}
                        <ellipse
                          cx="110"
                          cy="17"
                          rx="92"
                          ry="11"
                          fill="none"
                          stroke="white"
                          strokeWidth="1.2"
                          opacity="0.8"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Mobile Connecting Arrow Between Steps (Positioned below the pedestal) */}
                  {idx < steps.length - 1 && (
                    <div className="flex sm:hidden items-center justify-center my-2 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center">
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Embedded CSS for smooth Anti-Gravity float animations */}
      <style jsx global>{`
        @keyframes floatStep1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes floatStep2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes floatStep3 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }
        @keyframes floatStep4 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        .float-step-1 {
          animation: floatStep1 6s ease-in-out infinite;
        }
        .float-step-2 {
          animation: floatStep2 6.5s ease-in-out infinite 1s;
        }
        .float-step-3 {
          animation: floatStep3 6.2s ease-in-out infinite 2s;
        }
        .float-step-4 {
          animation: floatStep4 6.8s ease-in-out infinite 1.5s;
        }

        @keyframes orbDrift {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(3px, -8px);
          }
        }

        @keyframes orbDriftSlow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-4px, 6px);
          }
        }

        .animate-orb-drift {
          animation: orbDrift 5s ease-in-out infinite;
        }

        .animate-orb-drift-slow {
          animation: orbDriftSlow 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
