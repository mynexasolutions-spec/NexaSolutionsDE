"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronUp, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWidgets() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  // Monitor scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl =
    "https://wa.me/918077313241?text=Hello%20Nexa%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none select-none">
      {/* Scroll to Top Button (Icon only) */}
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll to top"
        title="Scroll to top"
        className={`pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-orange-500 text-slate-700 hover:text-white border border-slate-200/90 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform cursor-pointer group active:scale-95 ${
          showScrollTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>

      {/* Floating WhatsApp Widget */}
      <div className="pointer-events-auto relative flex items-center">
        {/* Soft mint green circular aura glow & continuous pulse waves behind avatar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 pointer-events-none flex items-center justify-center">
          {/* Continuous smooth breathing glow */}
          <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-emerald-400/25 sm:bg-emerald-400/30 blur-xl animate-pulse-glow pointer-events-none" />

          {/* Continuous expanding radar ring 1 */}
          <span className="absolute w-full h-full rounded-full border-2 border-emerald-400/40 bg-emerald-400/10 animate-pulse-ring pointer-events-none" />

          {/* Continuous expanding radar ring 2 (delayed) */}
          <span className="absolute w-full h-full rounded-full border-2 border-emerald-400/30 bg-emerald-400/10 animate-pulse-ring-delayed pointer-events-none" />
        </div>

        {/* Speech Bubble / Message Popup */}
        {showPopup && (
          <div className="hidden sm:block relative mr-3 sm:mr-3.5 bg-white/98 rounded-[5px] border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.12)] px-4 py-3 sm:px-5 sm:py-3.5 max-w-[230px] sm:max-w-[270px] animate-in fade-in slide-in-from-right-3 duration-300 bg-white">
            {/* Close (X) button on top corner of bubble */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPopup(false);
              }}
              type="button"
              aria-label="Close tooltip"
              className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-600 hover:text-slate-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <X className="w-3 h-3 stroke-[2.5]" />
            </button>

            {/* Bubble Clickable Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="text-slate-900 font-extrabold text-[14px] sm:text-[15px] leading-tight mb-1 group-hover:text-emerald-700 transition-colors">
                Nexa Solutions
              </div>
              <div className="flex items-center gap-1.5 text-[12px] sm:text-[12.5px] text-slate-500 font-normal leading-tight">
                <span>
                  {t(
                    "Ready to reply on WhatsApp now",
                    "Ready to reply on WhatsApp now"
                  )}
                </span>
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)]"></span>
                </span>
              </div>
            </a>
          </div>
        )}

        {/* Circular Avatar Button with exact requested SVG and WhatsApp badge */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Nexa Solutions"
          title="WhatsApp Chat - Nexa Solutions"
          onClick={() => setShowPopup(false)}
          className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-2 sm:p-2.5 border-2 border-primary shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
        >
          {/* Nexa Solutions Logo */}
          <img
            src="/Nexa_logo.svg"
            alt="Nexa Solutions"
            className="w-full h-full object-contain p-0.5 transform group-hover:scale-110 transition-transform duration-300"
          />

          {/* Green WhatsApp Badge at bottom right of the circle */}
          <div className="absolute -bottom-0.5 -right-0.5 sm:bottom-0 sm:right-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md border-2 border-white transition-transform group-hover:scale-110">
            {/* WhatsApp Icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.954.562 3.864 1.624 5.513L2.001 22l4.636-1.602a9.98 9.98 0 005.394 1.554h.004c5.534 0 10.03-4.494 10.03-10.029A10.02 10.02 0 0012.031 2zm5.836 14.204c-.244.685-1.42 1.34-1.959 1.424-.51.08-1.173.114-3.79-1.004-3.344-1.428-5.497-4.887-5.666-5.11-.165-.224-1.354-1.802-1.354-3.438 0-1.636.858-2.441 1.164-2.774.306-.334.667-.417.89-.417.222 0 .445.002.64.012.207.01.483-.078.756.577.28.673.957 2.33.104 2.502.086.172.143.373.028.599-.115.226-.172.368-.344.568-.172.2-.365.447-.521.6-.173.169-.353.353-.152.697.202.344.896 1.48 1.926 2.398 1.325 1.18 2.443 1.547 2.788 1.719.345.172.548.143.751-.086.204-.23.87-1.014 1.103-1.36.233-.347.467-.288.788-.172.321.115 2.032.958 2.383 1.134.351.175.586.262.672.411.086.15.086.865-.158 1.55z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
