"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  isDark?: boolean;
  href?: string;
}

export default function BrandLogo({
  className = "",
  isDark = false,
  href = "/",
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      prefetch={true}
      className={`inline-flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 group select-none shrink-0 ${className}`}
    >
      {/* Official Nexa Logo SVG */}
      <div className="relative h-[22px] sm:h-[24px] md:h-[26px] w-auto shrink-0 flex items-center justify-center self-center translate-y-[1.5px] sm:translate-y-[2px]">
        <img
          src="/Nexa_logo.svg"
          alt="Nexa Solutions Logo"
          className="h-full w-auto object-contain transform transition-transform duration-300"
        />
      </div>

      {/* Brand Text (Fully Responsive for Header & Footer) */}
      <div className="flex flex-col text-left justify-center">
        <span
          className={`text-[14px] sm:text-base md:text-lg font-black tracking-tight leading-none mb-0.5 sm:mb-1 transition-colors ${
            isDark
              ? "text-white group-hover:text-orange-400"
              : "text-[#0F172A] group-hover:text-orange-600"
          }`}
        >
          Nexa Solutions
        </span>
        <span
          className={`text-[7px] sm:text-[8.5px] md:text-[9.5px] font-bold tracking-[0.10em] sm:tracking-[0.14em] uppercase transition-colors leading-none whitespace-nowrap ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          BUILD &bull; AUTOMATE &bull; GROW
        </span>
      </div>
    </Link>
  );
}
