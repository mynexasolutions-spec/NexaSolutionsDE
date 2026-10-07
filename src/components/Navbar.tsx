"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  X,
  Menu,
  Code2,
  Smartphone,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

// Crisp SVG Flag components (guaranteed to render on all OS including Windows)
function GermanyFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0 rounded-[2px] shadow-xs overflow-hidden`}
      viewBox="0 0 5 3"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="5" height="1" y="0" fill="#111827" />
      <rect width="5" height="1" y="1" fill="#DC2626" />
      <rect width="5" height="1" y="2" fill="#FACC15" />
    </svg>
  );
}

function UKFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0 rounded-[2px] shadow-xs overflow-hidden`}
      viewBox="0 0 60 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30 0 v30 M0 15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30 0 v30 M0 15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection for header elevation & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname.startsWith("/blog")) {
        setActiveNav("blog");
        return;
      }

      if (pathname.startsWith("/projects") || pathname.startsWith("/our-work")) {
        setActiveNav("work");
        return;
      }

      if (pathname.startsWith("/contact")) {
        setActiveNav("");
        return;
      }

      if (!isHomePage) return;

      const sections = ["home", "services", "work", "about"];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, pathname]);

  // Click outside to close language dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut for Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdown(false);
        setLangDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle smooth scroll when navigating to hash from another page (e.g. /projects -> /#about)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Navigation Links definition (only Home, Services, Projects, Blog, About)
  const navLinks = [
    {
      id: "home",
      name: t("Startseite", "Home"),
      href: isHomePage ? "/" : "/",
    },
    {
      id: "services",
      name: t("Dienstleistungen", "Services"),
      href: isHomePage ? "#services" : "/#services",
      hasDropdown: true,
    },
    {
      id: "work",
      name: t("Projekte", "Projects"),
      href: "/projects",
    },
    {
      id: "blog",
      name: "Blog",
      href: "/blog",
    },
    {
      id: "about",
      name: t("Über uns", "About"),
      href: isHomePage ? "#about" : "/#about",
    },
  ];

  // Rich services list
  const serviceCards = [
    {
      title: t("Website-Entwicklung", "Website Development"),
      desc: t(
        "Hochleistungs-Websites mit Next.js, SEO & Konversion",
        "High-performance websites with Next.js, SEO & speed",
      ),
      href: "/services/web-development",
      icon: Code2,
      badge: t("Beliebt", "Popular"),
      accent: "bg-blue-50 text-blue-600",
    },
    {
      title: t("Mobile-App-Entwicklung", "Mobile App Development"),
      desc: t(
        "iOS & Android Apps mit React Native & Flutter",
        "iOS & Android cross-platform mobile apps",
      ),
      href: "/services/mobile-app-development",
      icon: Smartphone,
      badge: t("Neu", "New"),
      accent: "bg-purple-50 text-purple-600",
    },
    {
      title: t("KI-Automatisierung & n8n", "AI Automation & n8n"),
      desc: t(
        "Autonome KI-Agenten, Chatbots & automatisierte Workflows",
        "Autonomous AI agents, chatbots & smart workflows",
      ),
      href: "/services/ai-automation",
      icon: Cpu,
      badge: t("Top ROI", "Top ROI"),
      accent: "bg-orange-50 text-orange-600",
    },
  ];

  const languages = [
    {
      code: "en" as const,
      label: "English",
      display: "EN",
      Flag: UKFlag,
    },
    {
      code: "de" as const,
      label: "Deutsch",
      display: "DE",
      Flag: GermanyFlag,
    },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];
  const CurrentFlag = currentLangObj.Flag;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    href: string
  ) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdown(false);

    if (isHomePage && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none w-full">
      {/* Full-width navbar-bg: blur from top down to below the header */}
      <div className="navbar-bg absolute top-0 inset-x-0 w-full h-[76px] sm:h-[86px] md:h-[92px] bg-white/80 backdrop-blur-md shadow-xs transition-all duration-300 -z-10" />

      {/* Centered container for max-w-[1460px] floating pill */}
      <div className="w-full px-2.5 sm:px-5 lg:px-6 xl:px-8 pt-2.5 sm:pt-3.5 md:pt-4 flex justify-center items-center">
        <div
          className={`pointer-events-auto mx-auto w-full max-w-[1460px] rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white shadow-[0_14px_40px_-8px_rgba(15,23,42,0.14),0_4px_12px_-2px_rgba(15,23,42,0.06)] border border-slate-200/95 py-2 sm:py-2.5 px-3.5 sm:px-5 lg:px-6"
              : "bg-white/98 backdrop-blur-xl shadow-[0_10px_35px_-4px_rgba(15,23,42,0.10),0_2px_8px_rgba(0,0,0,0.04)] border border-slate-200/90 py-2 sm:py-2.5 px-3.5 sm:px-5 lg:px-6"
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-3 xl:gap-4">
            {/* Left: Brand Logo */}
            <div className="shrink-0 flex items-center">
              <BrandLogo href={isHomePage ? "/" : "/"} />
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeNav === link.id;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.id}
                      ref={servicesDropdownRef}
                      className="relative"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <button
                        onClick={() => setServicesDropdown((prev) => !prev)}
                        className={`group relative inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[14px] xl:text-[15px] font-semibold tracking-[-0.01em] transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "text-[#EA580C] font-bold bg-orange-50/95 ring-0.5 ring-orange-500/20"
                            : "text-slate-800 hover:text-[#EA580C] hover:bg-orange-50/60"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activeNavBackground"
                            className="absolute inset-0 rounded-full bg-orange-50/95 ring-1 ring-orange-500/20 -z-10"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 xl:w-4 xl:h-4 text-slate-500 group-hover:text-[#EA580C] transition-all duration-200 stroke-[2.2] ${
                            servicesDropdown ? "rotate-180 text-[#EA580C]" : ""
                          }`}
                        />
                        {/* Dot underneath active pill */}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavDot"
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#EA580C] shadow-[0_0_8px_rgba(234,88,12,0.8)]"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </button>

                      {/* Services Dropdown Panel */}
                      <AnimatePresence>
                        {servicesDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 rounded-2xl bg-white border border-slate-200 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.2)] p-2.5 z-50 backdrop-blur-xl"
                          >
                            <div className="text-[11px] font-bold text-slate-500 tracking-wider uppercase px-3 py-1.5">
                              {t(
                                "Unsere Kernkompetenzen",
                                "Our Core Services",
                              )}
                            </div>
                            <div className="space-y-1">
                              {serviceCards.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    prefetch={true}
                                    onClick={() => setServicesDropdown(false)}
                                    className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-orange-50/50 transition-all duration-200"
                                  >
                                    <div
                                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${service.accent} transition-transform duration-200 group-hover:scale-105`}
                                    >
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2">
                                        <span className="text-[14px] font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                          {service.title}
                                        </span>
                                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-orange-100 text-orange-700">
                                          {service.badge}
                                        </span>
                                      </div>
                                      <p className="text-xs text-slate-600 line-clamp-1 mt-0.5 font-medium">
                                        {service.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between px-3 py-1 text-xs">
                              <span className="text-slate-500 font-semibold">
                                {t(
                                  "Brauchen Sie eine Beratung?",
                                  "Need custom advice?",
                                )}
                              </span>
                              <Link
                                href="/contact"
                                prefetch={true}
                                onClick={() => setServicesDropdown(false)}
                                className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center gap-1 cursor-pointer"
                              >
                                {t("Kontakt aufnehmen", "Get in touch")}{" "}
                                &rarr;
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    prefetch={link.href.startsWith("/") && !link.href.includes("#") ? true : undefined}
                    onClick={(e) => handleLinkClick(e, link.id, link.href)}
                    className={`relative inline-flex items-center px-3 xl:px-4 py-1.5 rounded-full text-[14px] xl:text-[15px] font-semibold tracking-[-0.01em] transition-all duration-200 ${
                      isActive
                        ? "text-[#EA580C] font-bold bg-orange-50/95 ring-1 ring-orange-500/20"
                        : "text-slate-800 hover:text-[#EA580C] hover:bg-orange-50/60"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 rounded-full bg-orange-50/95 ring-1 ring-orange-500/20 -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span>{link.name}</span>
                    {/* Dot underneath active pill */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#EA580C] shadow-[0_0_8px_rgba(234,88,12,0.8)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Language Switcher & Consultation CTA Button */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              {/* Language Switcher with Always Visible SVG Flag */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangDropdownOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-full hover:bg-slate-100 text-slate-800 text-xs xl:text-[13px] font-bold transition-all duration-200 cursor-pointer select-none border border-slate-200 bg-slate-50/90 shadow-2xs"
                  aria-label="Select language"
                >
                  <CurrentFlag className="w-5 h-3.5" />
                  <span className="font-extrabold text-slate-900 tracking-tight">
                    {currentLangObj.display}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-40 rounded-2xl bg-white border border-slate-200 shadow-xl p-1.5 z-50 backdrop-blur-xl"
                    >
                      {languages.map((item) => {
                        const ItemFlag = item.Flag;
                        return (
                          <button
                            key={item.code}
                            onClick={() => {
                              setLang(item.code);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                              lang === item.code
                                ? "bg-orange-50 text-orange-600 font-extrabold"
                                : "text-slate-800 hover:bg-slate-100"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <ItemFlag className="w-5 h-3.5" />
                              <span>{item.label}</span>
                            </div>
                            <span className="text-[11px] font-mono text-slate-500 font-semibold">
                              {item.display}
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Consultation Button with Right Circle Arrow */}
              <Link
                href="/contact"
                prefetch={true}
                className="group relative inline-flex items-center pl-4 pr-1.5 xl:pl-5 xl:pr-1.5 py-1.5 xl:py-2 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white shadow-[0_4px_16px_rgba(234,88,12,0.32)] hover:shadow-[0_6px_22px_rgba(234,88,12,0.45)] transition-all duration-300 cursor-pointer select-none"
              >
                <span className="text-[12.5px] xl:text-[14px] font-bold tracking-tight whitespace-nowrap">
                  {t("Kostenlose Beratung", "Get a Free Consultation")}
                </span>
                {/* White Circle Disc with Orange Arrow */}
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-white text-[#EA580C] flex items-center justify-center ml-2 xl:ml-2.5 shrink-0 shadow-xs group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="w-3 xl:w-3.5 h-3 xl:h-3.5 stroke-[2.5]" />
                </div>
              </Link>
            </div>

            {/* Mobile Actions: Language & Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              {/* Quick Lang Toggle with SVG Flag */}
              <button
                onClick={() => setLang(lang === "de" ? "en" : "de")}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer border border-slate-200/60"
                aria-label="Toggle language"
              >
                <CurrentFlag className="w-4.5 h-3" />
                <span>{lang === "de" ? "DE" : "EN"}</span>
              </button>

              {/* Modern Animated Hamburger / Close Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer border ${
                  mobileMenuOpen
                    ? "bg-[#EA580C] text-white border-[#EA580C] shadow-[0_4px_14px_rgba(234,88,12,0.35)]"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200/80 shadow-2xs"
                }`}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0, scale: 0.75 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.75 }}
                      transition={{ duration: 0.18 }}
                      className="flex items-center justify-center text-white"
                    >
                      <X className="w-5 h-5 stroke-[2.5]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0, scale: 0.75 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.75 }}
                      transition={{ duration: 0.18 }}
                      className="flex items-center justify-center text-slate-800"
                    >
                      <Menu className="w-5 h-5 stroke-[2.2]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="w-full px-2.5 sm:px-5">
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto mx-auto w-full max-w-[1460px] mt-2 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.22)] p-4 sm:p-6 z-50 overflow-hidden"
            >
              {/* Mobile Drawer Top Bar with Title & Close Button */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t("Menü", "Menu")}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeNav === link.id;

                  if (link.hasDropdown) {
                    return (
                      <div key={link.id} className="rounded-xl overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((prev) => !prev)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                            isActive
                              ? "bg-orange-50 text-orange-600"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span>{link.name}</span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                            )}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180 text-orange-600" : ""
                            }`}
                          />
                        </button>

                        {/* Accordion dropdown for Services */}
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22, ease: "easeInOut" }}
                              className="overflow-hidden pl-3 pr-1 py-1.5 space-y-1.5 border-l-2 border-orange-200 ml-4 my-1"
                            >
                              {serviceCards.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    prefetch={true}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50/80 transition-colors group"
                                  >
                                    <div
                                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${service.accent}`}
                                    >
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                                          {service.title}
                                        </span>
                                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-100 text-orange-700">
                                          {service.badge}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-slate-500 line-clamp-1">
                                        {service.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      prefetch={link.href.startsWith("/") && !link.href.includes("#") ? true : undefined}
                      onClick={(e) => {
                        setMobileServicesOpen(false);
                        handleLinkClick(e, link.id, link.href);
                      }}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-orange-50 text-orange-600"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Language selection inside drawer */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  {t("Sprache wählen", "Select Language")}
                </span>
                <div className="flex items-center gap-1.5">
                  {languages.map((l) => {
                    const DrawerFlag = l.Flag;
                    return (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          lang === l.code
                            ? "bg-orange-600 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <DrawerFlag className="w-4 h-3" />
                        <span>{l.display}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile CTA Consultation Button */}
              <Link
                href="/contact"
                prefetch={true}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
                className="w-full mt-4 flex items-center justify-center gap-2 pl-6 pr-2 py-3 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>
                  {t(
                    "Kostenlose Beratung anfordern",
                    "Get a Free Consultation",
                  )}
                </span>
                <div className="w-7 h-7 rounded-full bg-white text-[#EA580C] flex items-center justify-center shrink-0 shadow-xs">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
