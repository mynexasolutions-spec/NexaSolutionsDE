"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  const pageTitle = t(
    "404 – Seite nicht gefunden | Nexa Solutions",
    "404 – Page Not Found | Nexa Solutions"
  );

  // Keep the tab title in sync with the active language
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <meta name="robots" content="noindex, follow" />

      <Navbar />

      <main
        id="not-found-main"
        className="relative isolate flex flex-1 items-center justify-center overflow-hidden bg-white px-5 pb-20 pt-32 sm:pt-36 min-h-[100svh]"
      >
        <style>{`
          @keyframes nf-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
          @keyframes nf-tilt { 0%,100% { transform: translate(-50%,-50%) rotate(-14deg) } 50% { transform: translate(-50%,-56%) rotate(-8deg) } }
          @keyframes nf-fade { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
          @media (prefers-reduced-motion: reduce) { .nf-anim { animation: none !important } }
        `}</style>

        {/* Background decor – orange top-right */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-bl from-[#FFEDD5] via-[#FFF7ED] to-transparent sm:-right-32 sm:-top-56 sm:h-[620px] sm:w-[620px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[300px] w-[300px] rounded-full border border-[#FED7AA] sm:-right-10 sm:-top-40 sm:h-[480px] sm:w-[480px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-32 -z-10 h-[360px] w-[360px] rounded-full bg-[#FFF7ED] blur-3xl" />

        {/* Background decor – blue bottom-left */}
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-56 -left-56 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-[#DBEAFE] via-[#EFF6FF] to-transparent sm:-bottom-72 sm:-left-60 sm:h-[720px] sm:w-[720px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[340px] w-[340px] rounded-full border border-[#BFDBFE]/70 sm:-bottom-56 sm:-left-44 sm:h-[560px] sm:w-[560px]" />

        <section
          aria-labelledby="not-found-title"
          className="relative mx-auto flex w-full max-w-2xl flex-col items-center text-center"
        >
          {/* 404 illustration */}
          <div
            aria-hidden="true"
            className="nf-anim relative select-none animate-[nf-float_5s_ease-in-out_infinite]"
          >
            <div className="flex items-center justify-center font-black leading-none tracking-[-0.06em] text-[112px] sm:text-[170px] md:text-[220px]">
              <span className="bg-gradient-to-b from-[#FED7AA] to-[#FB923C]/70 bg-clip-text text-transparent opacity-80">
                4
              </span>

              <span className="relative mx-[0.02em] inline-block">
                <span className="bg-gradient-to-br from-[#FB923C] via-[#F97316] to-[#EA580C] bg-clip-text text-transparent drop-shadow-[0_18px_30px_rgba(234,88,12,0.28)]">
                  0
                </span>

                {/* Accent sparks */}
                <span className="absolute -top-[0.06em] right-[0.02em] h-[0.16em] w-[0.035em] rotate-[25deg] rounded-full bg-[#F97316]" />
                <span className="absolute top-[0.08em] -right-[0.14em] h-[0.035em] w-[0.14em] -rotate-[30deg] rounded-full bg-[#EA580C]" />

                {/* Floating document card */}
                <span className="nf-anim absolute left-1/2 top-[55%] flex aspect-[4/5] w-[0.36em] flex-col justify-center gap-[0.035em] rounded-[0.05em] bg-white/95 px-[0.06em] shadow-[0_14px_30px_-6px_rgba(234,88,12,0.35)] ring-1 ring-[#FFEDD5] animate-[nf-tilt_5s_ease-in-out_infinite]">
                  <span className="absolute right-0 top-0 h-[0.08em] w-[0.08em] rounded-bl-[0.03em] bg-[#FFEDD5]" />
                  <span className="h-[0.025em] w-[70%] rounded-full bg-[#FB923C]" />
                  <span className="h-[0.025em] w-full rounded-full bg-[#FB923C]/80" />
                  <span className="h-[0.025em] w-[85%] rounded-full bg-[#FB923C]/70" />
                </span>
              </span>

              <span className="bg-gradient-to-b from-[#FED7AA] to-[#FB923C]/70 bg-clip-text text-transparent opacity-80">
                4
              </span>
            </div>

            {/* Ground shadow */}
            <div className="mx-auto -mt-2 h-4 w-3/4 rounded-[50%] bg-[#FB923C]/20 blur-xl sm:h-6" />
          </div>

          {/* Content */}
          <div className="nf-anim mt-6 animate-[nf-fade_0.7s_ease-out_both] sm:mt-8">
            <p className="sr-only">{t("Fehler 404", "Error 404")}</p>
            <h1
              id="not-found-title"
              className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl"
            >
              {t("Seite nicht gefunden", "Page Not Found")}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#64748B] sm:text-lg">
              {t(
                "Die gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.",
                "The page you are looking for doesn't exist or may have been moved."
              )}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                id="not-found-home-btn"
                href="/"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#EA580C] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_25px_-8px_rgba(234,88,12,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C2410C] hover:shadow-[0_16px_30px_-8px_rgba(234,88,12,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FED7AA] sm:w-auto"
              >
                {t("Zur Startseite", "Go Back Home")}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                id="not-found-contact-btn"
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border border-[#E2E8F0] bg-white/80 px-7 py-3.5 text-[15px] font-semibold text-[#334155] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FED7AA] hover:text-[#EA580C] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FED7AA] sm:w-auto"
              >
                {t("Kontakt aufnehmen", "Contact Us")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
