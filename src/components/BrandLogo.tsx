"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  isDark?: boolean;
  href?: string;
}

export default function BrandLogo({ className = "", isDark = false, href = "/#home" }: BrandLogoProps) {
  return (
    <Link href={href} className={`inline-flex items-center gap-1.5 group select-none shrink-0 ${className}`}>
      {/* Stylized NX Monogram Icon */}
      <div className="relative w-11 h-11 sm:w-13.5 sm:h-13.5 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        >
          {/* N left stroke (Orange) */}
          <path
            d="M8 34V10L19 26V34H8Z"
            fill="#EA580C"
          />
          {/* N diagonal stroke */}
          <path
            d="M19 10L8 26V10H19Z"
            fill="#F97316"
          />
          <path
            d="M19 10L27 24L23 29L15 17L19 10Z"
            fill="#FB923C"
          />
          {/* X intersecting strokes (Dark Slate / Deep Navy) */}
          <path
            d="M26 10L36 34H30L23 18L26 10Z"
            fill={isDark ? "#FFFFFF" : "#0F172A"}
          />
          <path
            d="M36 10L25 34H19L30 10H36Z"
            fill={isDark ? "#94A3B8" : "#334155"}
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <span
          className={`text-base sm:text-lg font-black tracking-tight leading-tight transition-colors ${
            isDark
              ? "text-white group-hover:text-orange-400"
              : "text-[#0F172A] group-hover:text-orange-600"
          }`}
        >
          Nexa Solutions
        </span>
        <span
          className={`text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.14em] uppercase transition-colors ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          BUILD &bull; AUTOMATE &bull; GROW
        </span>
      </div>
    </Link>
  );
}
