"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const partnerLogos = [
  { name: "AWS", image: "/images/logos/aws.png" },
  { name: "Google Cloud", image: "/images/logos/google_cloud.png" },
  { name: "Microsoft", image: "/images/logos/microsoft.png" },
  { name: "n8n", image: "/images/logos/n8n.png" },
  { name: "Meta", image: "/images/logos/meta.png" },
  { name: "Razorpay", image: "/images/logos/razorpay.png" },
];

export default function AuthorizedPartners() {
  const { t } = useLanguage();

  // Repeating array 4 times for seamless infinite scroll on any screen width
  const tickerPartners = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  return (
    <section id="partners" className="py-10 sm:py-12 lg:py-16 bg-white relative border-b border-slate-100 overflow-hidden">
      <div className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header: Eyebrow, Heading, Description */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>{t("VERTRAUENSWÜRDIGER TECHNOLOGIEPARTNER", "TRUSTED TECHNOLOGY PARTNER")}</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-[#0F172A] tracking-tight leading-[1.2] mb-3.5">
            {t("Autorisierter Partner führender Plattformen", "Authorized Partner with Leading Platforms")}
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-[17px] text-slate-600 leading-relaxed max-w-2xl">
            {t(
              "Wir arbeiten mit globalen Technologieführern zusammen, um zuverlässige, sichere und zukunftssichere Lösungen für Ihr Unternehmen zu liefern.",
              "We collaborate with global technology leaders to deliver reliable, secure, and future-ready solutions for your business."
            )}
          </p>
        </div>
      </div>

      {/* Full-width Marquee Track (Edge-to-Edge) */}
      <div className="relative w-full py-2 overflow-hidden">
        {/* Edge Fade Gradients for smooth in-out fade (no rounded corners on outer track) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Infinite Scroll Track */}
        <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-6 py-2">
          {tickerPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-[5px] border border-slate-200/90 shadow-xs px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center min-w-[150px] sm:min-w-[190px] h-[66px] sm:h-[76px] shrink-0 transition-all duration-300 group cursor-default"
            >
              <div className="relative w-[100px] sm:w-[120px] h-[35px] sm:h-[40px] flex items-center justify-center">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 120px, 150px"
                  className="object-contain transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
