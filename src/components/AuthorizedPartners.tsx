"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AuthorizedPartners() {
  const { t } = useLanguage();
  const partners = [
    {
      name: "AWS Partner",
      logo: (
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-800">
          <svg className="w-14 h-7" viewBox="0 0 100 40" fill="none">
            <text x="4" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22" fill="#232F3E">aws</text>
            <path d="M 6 30 C 22 36, 45 36, 58 29" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 54 26 L 61 29 L 55 33 Z" fill="#FF9900" />
            <text x="64" y="22" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="9" fill="#64748B">Partner</text>
          </svg>
        </div>
      ),
    },
    {
      name: "Google Cloud Partner",
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" opacity="0.15" />
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-2.4 0-4.54 1.15-5.9 2.92l2.36 2.36C9.28 8.44 10.55 8 12 8c2.61 0 4.83 1.67 5.65 4.01l1.7-.97z" fill="#EA4335" />
            <path d="M6.1 6.92C4.7 8.28 3.75 10.15 3.55 12.28l3.19.53c.12-1.39.77-2.61 1.72-3.53L6.1 6.92z" fill="#FBBC05" />
            <path d="M3.55 12.28C3.36 12.83 3.25 13.4 3.25 14c0 2.62 1.69 4.84 4.05 5.64l1.1-2.99C7.2 16.24 6.44 15.21 6.44 14c0-.4.07-.79.19-1.15l-3.08-.57z" fill="#4285F4" />
            <path d="M7.3 19.64C8.7 20.48 10.3 21 12 21c3.08 0 5.71-1.74 6.99-4.28l-2.73-1.42C15.5 16.7 13.88 17.75 12 17.75c-1.14 0-2.2-.34-3.08-.94l-1.62 2.83z" fill="#34A853" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-bold text-slate-800">Google Cloud</span>
            <span className="text-[10px] text-slate-500 font-medium">Partner</span>
          </div>
        </div>
      ),
    },
    {
      name: "Microsoft Partner",
      logo: (
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5 shrink-0">
            <div className="bg-[#F25022] rounded-[1px]" />
            <div className="bg-[#7FBA00] rounded-[1px]" />
            <div className="bg-[#00A4EF] rounded-[1px]" />
            <div className="bg-[#FFB900] rounded-[1px]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-bold text-slate-800">Microsoft</span>
            <span className="text-[10px] text-slate-500 font-medium">Partner</span>
          </div>
        </div>
      ),
    },
    {
      name: "n8n Partner",
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none">
            <circle cx="9" cy="16" r="4" fill="#EA4B71" />
            <circle cx="23" cy="9" r="4" fill="#EA4B71" />
            <circle cx="23" cy="23" r="4" fill="#EA4B71" />
            <line x1="9" y1="16" x2="23" y2="9" stroke="#EA4B71" strokeWidth="2.5" />
            <line x1="9" y1="16" x2="23" y2="23" stroke="#EA4B71" strokeWidth="2.5" />
          </svg>
          <div className="flex items-center gap-1.5">
            <span className="text-[15px] font-extrabold tracking-tight text-[#EA4B71]">n8n</span>
            <span className="text-[11px] text-slate-500 font-semibold border-l border-slate-200 pl-1.5">Partner</span>
          </div>
        </div>
      ),
    },
    {
      name: "Meta Business Partner",
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
            <path
              d="M16.68 5C14.73 5 13.06 6.09 12 7.7 10.94 6.09 9.27 5 7.32 5 4.38 5 2 7.42 2 10.41c0 3.73 3.66 7.41 9.47 11.23.32.21.74.21 1.06 0 5.81-3.82 9.47-7.5 9.47-11.23C22 7.42 19.62 5 16.68 5zm-4.68 9.5c-2.48-1.92-4.88-4.14-5.74-5.63-.44-.76-.66-1.56-.66-2.46 0-1.88 1.48-3.41 3.32-3.41 1.47 0 2.76.94 3.08 2.37l.4 1.76.4-1.76c.32-1.43 1.61-2.37 3.08-2.37 1.84 0 3.32 1.53 3.32 3.41 0 .9-.22 1.7-.66 2.46-.86 1.49-3.26 3.71-5.74 5.63z"
              fill="#0668E1"
            />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-bold text-slate-800">Meta</span>
            <span className="text-[10px] text-slate-500 font-medium">Business Partner</span>
          </div>
        </div>
      ),
    },
    {
      name: "Razorpay Partner",
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-6 shrink-0" viewBox="0 0 20 24" fill="none">
            <path
              d="M13.2 0L2 14.5H8.5L5 24L18 8.5H10.8L13.2 0Z"
              fill="#0C2340"
            />
            <path
              d="M11.5 3L4 13H9.5L6.8 20.5L16.2 9H10L11.5 3Z"
              fill="#0284C7"
            />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-bold text-[#0C2340]">Razorpay</span>
            <span className="text-[10px] text-slate-500 font-medium">Partner</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="partners" className="py-16 md:py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Eyebrow, Heading & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold tracking-wider uppercase mb-3.5 shadow-2xs">
              <span className="text-blue-500 font-bold">|&rarr;</span>
              <span>{t("VERTRAUENSWÜRDIGER TECHNOLOGIEPARTNER", "TRUSTED TECHNOLOGY PARTNER")}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0F172A] tracking-tight leading-snug mb-3.5">
              {t("Autorisierter Partner führender Plattformen", "Authorized Partner with Leading Platforms")}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              {t(
                "Wir arbeiten mit den modernsten Technologien und sind autorisierte Partner auf führenden Plattformen, um zuverlässige und zukunftssichere Lösungen zu liefern.",
                "We work with the best technologies and are authorized partners on multiple platforms to deliver reliable and future-ready solutions."
              )}
            </p>
          </div>

          {/* Right Column: 6 Partner Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 flex items-center justify-center min-h-[76px] shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 group cursor-default"
                >
                  <div className="transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    {partner.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
