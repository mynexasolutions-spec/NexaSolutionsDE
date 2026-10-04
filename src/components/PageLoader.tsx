"use client";

import React from "react";

export interface PageLoaderProps {
  /** Text to display next to the bouncing dots (default: "LOADING") */
  text?: string;
  /** Subtitle / brand slogan below the brand name (default: "BUILD • AUTOMATE • GROW") */
  subtitle?: string;
  /** Custom brand name element or text */
  brandName?: React.ReactNode;
  /** Custom logo source (default: "/Nexa_logo.svg") */
  logoSrc?: string;
  /** Whether the loader renders as an overlay taking full viewport */
  fullScreen?: boolean;
  /** Offset below the fixed header so the header remains visible and unaffected (default: true when fullScreen) */
  headerOffset?: boolean;
  /** Additional custom classes for wrapper */
  className?: string;
}

export default function PageLoader({
  text = "LOADING",
  subtitle = "BUILD • AUTOMATE • GROW",
  brandName,
  logoSrc = "/Nexa_logo.svg",
  fullScreen = false,
  headerOffset = true,
  className = "",
}: PageLoaderProps) {
  const content = (
    <div className="relative flex flex-col items-center justify-center select-none max-w-sm w-full mx-auto px-4">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-orange-500/20 via-orange-400/10 to-transparent blur-2xl pointer-events-none -z-10"
      />

      {/* Orbit Visualization Frame */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center">
        {/* 1. Outer Orbit Ring (Clockwise, 3s) */}
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed border-[#EA580C]/40 animate-spin-orbit pointer-events-none"
          style={{ willChange: "transform" }}
        >
          {/* Orbiting Satellite Dot with neon drop-shadow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-[#EA580C] shadow-[0_0_12px_#EA580C,0_0_24px_#F97316] ring-2 ring-white" />
            </span>
          </div>
        </div>

        {/* 2. Counter-Orbit Ring (Counter-Clockwise, 4.5s) */}
        <div
          className="absolute inset-3.5 sm:inset-4 md:inset-5 rounded-full border-2 border-dotted border-slate-300 animate-spin-reverse pointer-events-none"
          style={{ willChange: "transform" }}
        >
          {/* Secondary counter-orbit satellite dot */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <span className="inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-slate-700 shadow-[0_0_8px_rgba(234,88,12,0.4)]" />
          </div>
        </div>

        {/* 3. Center Pulsing Badge (Clean Pure White Background, 2.2s Heartbeat) */}
        <div
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full bg-white border border-orange-500/25 shadow-[0_12px_32px_rgba(234,88,12,0.18),0_4px_12px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center animate-pulse-brand transition-transform"
          style={{ willChange: "transform, box-shadow" }}
        >
          {/* Center Brand Logo on Pure White */}
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center bg-white rounded-full">
            <img
              src={logoSrc}
              alt="Nexa Solutions"
              className="w-full h-full object-contain filter drop-shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* 4. Center Brand Typography */}
      <div className="mt-5 sm:mt-6 flex flex-col items-center text-center">
        {brandName ? (
          brandName
        ) : (
          <h2 className="text-sm sm:text-base md:text-lg font-black tracking-tight text-[#0F172A] uppercase">
            NEXA <span className="text-[#EA580C]">SOLUTIONS</span>
          </h2>
        )}

        {subtitle && (
          <span className="text-[8px] sm:text-[9.5px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-slate-500 uppercase mt-1">
            {subtitle}
          </span>
        )}
      </div>

      {/* 5. Loading Text & Staggered Bouncing Dots */}
      <div
        role="status"
        aria-live="polite"
        className="mt-3.5 sm:mt-4 inline-flex items-center justify-center gap-1.5 px-3.5 py-1"
      >
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-slate-700 uppercase">
          {text}
        </span>
        <div className="flex items-center gap-1 ml-0.5" aria-hidden="true">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shadow-[0_0_6px_#EA580C] animate-bounce-dot"
            style={{ animationDelay: "-0.3s" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shadow-[0_0_6px_#EA580C] animate-bounce-dot"
            style={{ animationDelay: "-0.15s" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shadow-[0_0_6px_#EA580C] animate-bounce-dot"
            style={{ animationDelay: "0s" }}
          />
        </div>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className={`fixed inset-x-0 bottom-0 ${
          headerOffset
            ? "top-[76px] sm:top-[86px] md:top-[92px]"
            : "top-0"
        } z-40 bg-white/95 backdrop-blur-[8px] flex items-center justify-center overflow-hidden transition-all duration-300 ${className}`}
      >
        {content}
      </div>
    );
  }

  return <div className={`relative w-full ${className}`}>{content}</div>;
}
