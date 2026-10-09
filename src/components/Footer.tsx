"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Monitor,
  Smartphone,
  Zap,
  Database,
  BarChart2,
  Headphones,
  ShieldCheck,
  Globe,
  Users,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 2000);
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#FAFBFF] text-slate-700 pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Ambient Colored Glowing Blobs Container (z-0 sits above background and behind relative z-10 content) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* 1. Top-Left Fluid Orb */}
        <div className="absolute -top-12 -left-12 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#A78BFA]/50 via-[#C4B5FD]/45 to-transparent blur-2xl" />
        <div className="absolute -top-4 -left-4 w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-[#C4B5FD]/60 blur-xl" />

        {/* 2. Prominent Mid-Left Protruding Bubble */}
        <div className="absolute top-[22%] -left-20 sm:-left-24 w-80 h-80 sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/45 via-[#A78BFA]/50 to-[#DDD6FE]/30 blur-2xl" />
        <div className="absolute top-[26%] -left-10 sm:-left-12 w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-[#A78BFA]/55 blur-xl" />

        {/* 3. Bottom-Left Crescent Orb */}
        <div className="absolute -bottom-16 -left-16 w-96 h-96 sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#6366F1]/40 via-[#A5B4FC]/45 to-transparent blur-3xl" />

        {/* 4. Top-Right Orb */}
        <div className="absolute -top-12 -right-12 w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-gradient-to-bl from-[#C084FC]/50 via-[#E9D5FF]/45 to-transparent blur-2xl" />
        <div className="absolute -top-4 -right-4 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#DDD6FE]/60 blur-xl" />

        {/* 5. Mid-Right Sky-Blue & Indigo Orb */}
        <div className="absolute top-[24%] -right-20 sm:-right-24 w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-l from-[#38BDF8]/40 via-[#818CF8]/35 to-transparent blur-3xl" />
        <div className="absolute top-[28%] -right-10 sm:-right-12 w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#BAE6FD]/50 blur-xl" />

        {/* 6. Smooth SVG Radial Glow Canvas */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="footerLeftGlow" cx="0%" cy="32%" r="40%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#DDD6FE" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FAFBFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="footerRightGlow" cx="100%" cy="36%" r="35%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#C7D2FE" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FAFBFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="footerTopRightGlow" cx="95%" cy="0%" r="30%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#FAFBFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerLeftGlow)" />
          <rect width="100%" height="100%" fill="url(#footerRightGlow)" />
          <rect width="100%" height="100%" fill="url(#footerTopRightGlow)" />
        </svg>
      </div>


      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-14">
          {/* Column 1: Brand, Mission, Socials (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <BrandLogo className="mb-4" />

            <p className="text-slate-600 text-[13.5px] xl:text-[14px] font-mediumm leading-relaxed mb-6 max-w-sm">
              {t(
                "Wir entwickeln digitale Produkte, mobile Apps und KI-Automatisierungslösungen, um Unternehmen schneller wachsen zu lassen.",
                "We build digital products, mobile apps and AI automation solutions to help businesses grow faster and work smarter."
              )}
            </p>

            {/* 4 Social Icons */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://in.linkedin.com/company/mynexasolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm flex items-center justify-center text-[#0A66C2] hover:bg-blue-50 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm flex items-center justify-center text-[#E1306C] hover:bg-pink-50 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a> */}

              {/* X / Twitter */}
              {/* <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm flex items-center justify-center text-black hover:bg-slate-50 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a> */}

              {/* YouTube */}
              {/* <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm flex items-center justify-center text-[#FF0000] hover:bg-red-50 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <div className="relative inline-block mb-4 sm:mb-5">
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 tracking-wider uppercase">
                {t("SCHNELLLINKS", "QUICK LINKS")}
              </h3>
              <div className="w-6 h-0.5 bg-blue-600 rounded-full mt-1.5" />
            </div>

            <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-600 font-medium">
              {[
                { label: t("Startseite", "Home"), href: "/" },
                { label: t("Über uns", "About Us"), href: "/#process" },
                { label: t("Leistungen", "Services"), href: "/#services" },
                { label: t("Unsere Arbeit", "Our Work"), href: "/projects" },
                { label: t("Partner", "Partners"), href: "/#partners" },
                { label: "Blog", href: "/blog" },
                { label: t("Kontakt", "Contact"), href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    prefetch={link.href.startsWith("/") && !link.href.includes("#") ? true : undefined}
                    className="group inline-flex items-center gap-1.5 hover:text-orange-600 transition-colors"
                  >
                    <span className="truncate group-hover:text-orange-500 font-bold text-[13.5px] xl:text-[14px] transition-colors">
                      &gt;
                    </span>
                    <span className="truncate text-[13.5px] xl:text-[14px] font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services with Colored Badges (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="relative inline-block mb-4 sm:mb-5">
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 tracking-wider uppercase">
                {t("UNSERE LEISTUNGEN", "OUR SERVICES")}
              </h3>
              <div className="w-6 h-0.5 bg-blue-600 rounded-full mt-1.5" />
            </div>

            <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-medium">
              {[
                {
                  title: t("Webentwicklung", "Website Development"),
                  href: "/services/web-development",
                  icon: Monitor,
                  badgeBg: "bg-purple-100 text-purple-600",
                },
                {
                  title: t("Mobile App-Entwicklung", "Mobile App Development"),
                  href: "/services/mobile-app-development",
                  icon: Smartphone,
                  badgeBg: "bg-sky-100 text-sky-600",
                },
                {
                  title: t("KI-Automatisierung & n8n", "AI Automation & n8n"),
                  href: "/services/ai-automation",
                  icon: Zap,
                  badgeBg: "bg-amber-100 text-amber-600",
                },
                {
                  title: t("Datenanalyse", "Data Analysis"),
                  href: "/services/ai-automation",
                  icon: Database,
                  badgeBg: "bg-emerald-100 text-emerald-600",
                },
                {
                  title: t("MVP-Entwicklung", "MVP Development"),
                  href: "/services/web-development",
                  icon: BarChart2,
                  badgeBg: "bg-pink-100 text-pink-600",
                },
                {
                  title: t("Wartung & Support", "Maintenance & Support"),
                  href: "/services/web-development",
                  icon: Headphones,
                  badgeBg: "bg-indigo-100 text-indigo-600",
                },
              ].map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <li key={idx}>
                    <Link
                      href={svc.href}
                      prefetch={svc.href.startsWith("/") && !svc.href.includes("#") ? true : undefined}
                      className="group flex items-center gap-3 hover:text-orange-600 transition-colors"
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${svc.badgeBg}`}
                      >
                        <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                      </div>
                      <span className="truncate text-[13.5px] xl:text-[14px] font-medium">{svc.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Get In Touch (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col relative">
            {/* Header */}
            <div className="relative inline-block mb-4 sm:mb-5">
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 tracking-wider uppercase">
                {t("KONTAKT", "GET IN TOUCH")}
              </h3>
              <div className="w-6 h-0.5 bg-blue-600 rounded-full mt-1.5" />
            </div>

            {/* 3 Contact Pills */}
            <div className="space-y-2.5">
              {/* Email Pill */}
              <a
                href="mailto:contact@nexa-solutions.de"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-blue-300 transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
                <span className="text-[13.5px] xl:text-[14px] font-medium text-slate-800 group-hover:text-blue-600 truncate transition-colors">
                  contact@nexa-solutions.de
                </span>
              </a>

              {/* Phone Pill */}
              <a
                href="tel:+918077313241"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-sky-300 transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
                <span className="text-[13.5px] xl:text-[14px] font-medium text-slate-800 group-hover:text-sky-600 truncate transition-colors">
                  +91 8077 313 241
                </span>
              </a>

              {/* Location Pill */}
              <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
                <span className="text-[13.5px] xl:text-[14px] font-medium text-slate-800 truncate">
                  Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH MODERN NEWSLETTER BANNER (Before Sub-Footer) */}
        <div className="w-full rounded-[5px]  p-4 sm:p-4 bg-gradient-to-r from-[#EDE9FE]/80 via-[#F5F3FF]/70 to-[#E0E7FF]/60 border border-[#DDD6FE] shadow-xl shadow-purple-500/5 backdrop-blur-md relative overflow-hidden mb-6 sm:mb-8">
          {/* Subtle Ambient Decorative Sparkles inside Banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-300/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
            {/* Left Header info */}
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/25">
                <Mail className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-3 h-3 text-purple-600" />
                  <span>{t("NEWSLETTER", "NEWSLETTER")}</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {t("Newsletter abonnieren", "Subscribe to Our Newsletter")}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md">
                  {t(
                    "Erhalten Sie die neuesten Updates, Insights und exklusive Tech-Tipps direkt in Ihr Postfach.",
                    "Get the latest updates, insights and tech tips directly in your inbox."
                  )}
                </p>
              </div>
            </div>

            {/* Right Form & Input */}
            <div className="w-full lg:w-[500px] shrink-0">
              <form
                onSubmit={handleNewsletterSubmit}
                className="relative flex items-center bg-white border border-slate-200/90 rounded-[5px] py-2 px-4 !pr-1.5 shadow-sm focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mr-2.5" />
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t("Ihre E-Mail-Adresse", "Enter your email address")}
                  className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none pr-3"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-5 py-2 rounded-[5px] bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0 shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span className="hidden sm:inline">{t("Abonnieren", "Subscribe")}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {newsletterSubscribed && (
                <p className="text-xs text-emerald-600 font-bold mt-2 pl-2 animate-in fade-in">
                  ✓ {t("Erfolgreich abonniert! Vielen Dank.", "Thank you for subscribing!")}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Sub-Footer Bottom Bar */}
        <div className="pt-4 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          {/* Copyright */}
          <div>
            &copy; 2026 <strong className="text-slate-700 font-bold">Nexa Solutions.</strong>{" "}
            {t("Alle Rechte vorbehalten.", "All Rights Reserved.")}
          </div>

          {/* 3 Trust Badges with Dividers */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{t("Sicher & Vertraulich", "Secure & Confidential")}</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>{t("Weltweite Kunden", "Global Clients")}</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-600" />
              <span>{t("Zuverlässiger Partner", "Trusted Partner")}</span>
            </div>
          </div>

          {/* Right: Legal & Back To Top */}
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href="/impressum" className="hover:text-slate-800 transition-colors">
              Impressum
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/datenschutz" className="hover:text-slate-800 transition-colors">
              {t("Datenschutz", "Privacy Policy")}
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/agb" className="hover:text-slate-800 transition-colors">
              {t("AGB", "Terms & Conditions")}
            </Link>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("openCookieConsent"));
                }
              }}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              {t("Cookies", "Cookies")}
            </button>

            {/* Back to top circular button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-full bg-blue-50/90 hover:bg-blue-100 border border-blue-200/80 text-blue-600 flex flex-col items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95 group ml-1 sm:ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
