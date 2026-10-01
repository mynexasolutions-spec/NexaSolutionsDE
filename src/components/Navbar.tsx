"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Search,
  X,
  Menu,
  Code2,
  Smartphone,
  Cpu,
  Calendar,
  ShieldCheck,
  FolderGit2,
  HelpCircle,
  Users2,
  Sparkles,
  Command,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenContact: () => void;
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
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { lang, setLang, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Scroll detection for header elevation & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname.startsWith("/blog")) {
        setActiveNav("blog");
        return;
      }

      if (!isHomePage) return;

      const sections = [
        "home",
        "services",
        "systems",
        "guarantees",
        "work",
        "about",
        "faq",
        "booking",
      ];
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

  const openSearch = () => {
    setSearchQuery("");
    setSearchModalOpen(true);
  };

  const closeSearch = () => {
    setSearchModalOpen(false);
    setSearchQuery("");
  };

  // Keyboard shortcut (Cmd/Ctrl + K) for search modal & Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchModalOpen((prev) => {
          if (!prev) setSearchQuery("");
          return !prev;
        });
      } else if (e.key === "Escape") {
        closeSearch();
        setMobileMenuOpen(false);
        setServicesDropdown(false);
        setLangDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (searchModalOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [searchModalOpen]);

  // Navigation Links definition
  const navLinks = [
    {
      id: "home",
      name: t("Startseite", "Home"),
      href: isHomePage ? "#home" : "/#home",
    },
    {
      id: "services",
      name: t("Dienstleistungen", "Services"),
      href: isHomePage ? "#services" : "/#services",
      hasDropdown: true,
    },
    {
      id: "systems",
      name: t("Systeme", "Systems"),
      href: isHomePage ? "#systems" : "/#systems",
    },
    {
      id: "guarantees",
      name: t("Garantien", "Guarantees"),
      href: isHomePage ? "#guarantees" : "/#guarantees",
    },
    {
      id: "work",
      name: t("Projekte", "Projects"),
      href: isHomePage ? "#work" : "/#work",
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
    {
      id: "faq",
      name: t("FAQ", "FAQ"),
      href: isHomePage ? "#faq" : "/#faq",
    },
    {
      id: "booking",
      name: t("Termin buchen", "Book Call"),
      href: isHomePage ? "#booking" : "/#booking",
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

  // Quick search items dataset
  const searchItems = [
    {
      category: t("Dienstleistungen", "Services"),
      title: t("Website-Entwicklung", "Website Development"),
      subtitle: t("Next.js, UI/UX, SEO-Optimierung", "Next.js, UI/UX, SEO"),
      href: "/services/web-development",
      icon: Code2,
    },
    {
      category: t("Dienstleistungen", "Services"),
      title: t("Mobile-App-Entwicklung", "Mobile App Development"),
      subtitle: t("iOS & Android native Leistung", "iOS & Android native apps"),
      href: "/services/mobile-app-development",
      icon: Smartphone,
    },
    {
      category: t("Dienstleistungen", "Services"),
      title: t("KI-Automatisierung & n8n", "AI Automation & Workflows"),
      subtitle: t(
        "Intelligente Agenten & Prozesse",
        "Smart agents & pipelines",
      ),
      href: "/services/ai-automation",
      icon: Cpu,
    },
    {
      category: t("Navigation", "Navigation"),
      title: t("Systeme & Architektur", "Business Systems"),
      subtitle: t(
        "Skalierbare Tech-Infrastruktur",
        "Scalable business infrastructure",
      ),
      href: isHomePage ? "#systems" : "/#systems",
      icon: Sparkles,
    },
    {
      category: t("Navigation", "Navigation"),
      title: t("Deutsche Qualitätsgarantien", "German Guarantees"),
      subtitle: t(
        "Transparenz, DSGVO & Festpreise",
        "GDPR compliance & fixed pricing",
      ),
      href: isHomePage ? "#guarantees" : "/#guarantees",
      icon: ShieldCheck,
    },
    {
      category: t("Navigation", "Navigation"),
      title: t("Erfolgreiche Projekte", "Featured Projects"),
      subtitle: t("Case Studies & Referenzen", "Case studies & client results"),
      href: isHomePage ? "#work" : "/#work",
      icon: FolderGit2,
    },
    {
      category: t("Navigation", "Navigation"),
      title: t("Häufig gestellte Fragen (FAQ)", "FAQ"),
      subtitle: t(
        "Ablauf, Kosten & Technologien",
        "Process, timelines & pricing",
      ),
      href: isHomePage ? "#faq" : "/#faq",
      icon: HelpCircle,
    },
    {
      category: t("Navigation", "Navigation"),
      title: t("Über Nexa Solutions", "About Us"),
      subtitle: t("Team & Philosophie", "Our team & mission"),
      href: isHomePage ? "#about" : "/#about",
      icon: Users2,
    },
    {
      category: t("Ressourcen", "Resources"),
      title: t("Blog & Fachartikel", "Blog & Tech Insights"),
      subtitle: t(
        "KI-Automatisierung, Next.js & App-Entwicklung",
        "AI automation, Next.js & cross-platform apps",
      ),
      href: "/blog",
      icon: BookOpen,
    },
    {
      category: t("Aktion", "Action"),
      title: t("Termin vereinbaren", "Book a Strategy Call"),
      subtitle: t("30 Min. kostenlose Beratung", "30-min free consulting call"),
      href: isHomePage ? "#booking" : "/#booking",
      icon: Calendar,
    },
  ];

  const filteredSearchItems = searchQuery.trim()
    ? searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : searchItems;

  const languages = [
    { code: "en" as const, label: "English", display: "GB EN", flag: "🇬🇧" },
    { code: "de" as const, label: "Deutsch", display: "DE", flag: "🇩🇪" },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  const handleLinkClick = (id: string, href: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdown(false);

    if (isHomePage && href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Floating Pill Sticky Container with Increased Width */}
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 pointer-events-none w-full"
      >
        {/* Full-width navbar-bg: blur from top down to below the header */}
        <div className="navbar-bg absolute top-0 inset-x-0 w-full h-[76px] sm:h-[86px] md:h-[92px] bg-white/75 backdrop-blur-md shadow-xs transition-all duration-300 -z-10" />

        {/* Centered container for max-w-[1460px] floating pill */}
        <div className="w-full px-2.5 sm:px-5 lg:px-7 pt-2.5 sm:pt-3.5 md:pt-4 flex justify-center items-center">
          <div
            className={`pointer-events-auto mx-auto w-full max-w-[1460px] rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-white shadow-[0_14px_40px_-8px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(15,23,42,0.06)] border border-slate-200/90 py-2 sm:py-2.5 px-4 sm:px-6"
                : "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06),0_1px_3px_rgb(0,0,0,0.04)] border border-slate-200/80 py-2.5 sm:py-3.5 px-4 sm:px-6 lg:px-7"
            }`}
          >
            <div className="flex items-center justify-between gap-2 sm:gap-2">
              {/* Left: Brand Logo */}
              <div className="shrink-0 flex items-center">
                <BrandLogo href={isHomePage ? "#home" : "/#home"} />
              </div>

              {/* Center: Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
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
                          className={`group relative inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[13.5px] xl:text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "text-[#EA580C] font-semibold bg-orange-50/90"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="activeNavBackground"
                              className="absolute inset-0 rounded-full bg-orange-50/90 -z-10"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            />
                          )}
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform duration-200 ${
                              servicesDropdown ? "rotate-180" : ""
                            }`}
                          />
                          {/* Dot underneath active pill */}
                          {isActive && (
                            <motion.span
                              layoutId="activeNavDot"
                              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#EA580C] shadow-[0_0_6px_rgba(234,88,12,0.6)]"
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
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.18)] p-2.5 z-50 backdrop-blur-xl"
                            >
                              <div className="text-[11px] font-bold text-slate-400 tracking-wider uppercase px-3 py-1.5">
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
                                      onClick={() => setServicesDropdown(false)}
                                      className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200"
                                    >
                                      <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${service.accent} transition-transform duration-200 group-hover:scale-105`}
                                      >
                                        <Icon className="w-5 h-5" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="text-[13.5px] font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                                            {service.title}
                                          </span>
                                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-orange-100/70 text-orange-700">
                                            {service.badge}
                                          </span>
                                        </div>
                                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                          {service.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>

                              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between px-3 py-1 text-xs">
                                <span className="text-slate-400 font-medium">
                                  {t(
                                    "Brauchen Sie eine Beratung?",
                                    "Need custom advice?",
                                  )}
                                </span>
                                <button
                                  onClick={() => {
                                    setServicesDropdown(false);
                                    onOpenContact();
                                  }}
                                  className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center gap-1 cursor-pointer"
                                >
                                  {t("Kontakt aufnehmen", "Get in touch")}{" "}
                                  &rarr;
                                </button>
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
                      onClick={() => handleLinkClick(link.id, link.href)}
                      className={`relative inline-flex items-center px-3.5 py-1.5 rounded-full text-[13.5px] xl:text-[14px] font-medium transition-all duration-200 ${
                        isActive
                          ? "text-[#EA580C] font-semibold bg-orange-50/90"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNavBackground"
                          className="absolute inset-0 rounded-full bg-orange-50/90 -z-10"
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
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#EA580C] shadow-[0_0_6px_rgba(234,88,12,0.6)]"
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

              {/* Right: Language Switcher, Search Icon, Consultation CTA Button */}
              <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
                {/* Language Switcher */}
                <div ref={langRef} className="relative">
                  <button
                    onClick={() => setLangDropdownOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-slate-100/80 text-slate-700 text-xs font-semibold transition-colors cursor-pointer select-none"
                    aria-label="Select language"
                  >
                    <Globe className="w-4 h-4 text-slate-500" />
                    <span className="font-bold text-slate-800 tracking-tight">
                      {currentLangObj.display}
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
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
                        className="absolute top-full right-0 mt-2 w-44 rounded-2xl bg-white border border-slate-200/90 shadow-xl p-1.5 z-50 backdrop-blur-xl"
                      >
                        {languages.map((item) => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setLang(item.code);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                              lang === item.code
                                ? "bg-orange-50 text-orange-600 font-bold"
                                : "text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="text-base">{item.flag}</span>
                              <span>{item.label}</span>
                            </div>
                            <span className="text-[11px] font-mono text-slate-400">
                              {item.display}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Search Button (Circle with Magnifying Glass) */}
                <button
                  onClick={openSearch}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200/90 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs cursor-pointer"
                  title={`${t("Suchen", "Search")} (Cmd+K)`}
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 stroke-[2.2]" />
                </button>

                {/* CTA Consultation Button with Right Circle Arrow */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenContact}
                  className="group relative inline-flex items-center pl-5 pr-1.5 py-1.5 sm:py-1.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white shadow-[0_4px_16px_rgba(234,88,12,0.32)] hover:shadow-[0_6px_22px_rgba(234,88,12,0.45)] transition-all duration-300 cursor-pointer select-none"
                >
                  <span className="text-[13px] xl:text-[13.5px] font-bold tracking-tight">
                    {t("Kostenlose Beratung", "Get a Free Consultation")}
                  </span>
                  {/* White Circle Disc with Orange Arrow */}
                  <div className="w-7 h-7 rounded-full bg-white text-[#EA580C] flex items-center justify-center ml-2.5 shrink-0 shadow-xs group-hover:translate-x-0.5 transition-transform duration-200">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </motion.button>
              </div>

              {/* Mobile Actions: Search, Language & Hamburger Toggle */}
              <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
                {/* Quick Search Button */}
                <button
                  onClick={openSearch}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Open search"
                >
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                </button>

                {/* Quick Lang Toggle */}
                <button
                  onClick={() => setLang(lang === "de" ? "en" : "de")}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                  aria-label="Toggle language"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
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
                {/* Search Bar in Mobile Menu */}
                <div
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileServicesOpen(false);
                    openSearch();
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-500 text-xs font-medium cursor-pointer mb-4 transition-colors"
                >
                  <Search className="w-4 h-4 text-slate-400" />
                  <span>
                    {t(
                      "Suchen nach Services, Projekten...",
                      "Search services, projects...",
                    )}
                  </span>
                  <span className="ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-400">
                    Cmd+K
                  </span>
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
                        onClick={() => {
                          setMobileServicesOpen(false);
                          handleLinkClick(link.id, link.href);
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
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          lang === l.code
                            ? "bg-orange-600 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {l.flag} {l.display}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA Consultation Button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileServicesOpen(false);
                    onOpenContact();
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
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Interactive Quick Search Modal */}
      <AnimatePresence>
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 sm:px-6">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSearch}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-white rounded-[5px] border border-slate-200 shadow-2xl overflow-hidden z-10"
            >
              {/* Search Header Input */}
              <div className="flex items-center px-4 sm:px-6 py-4 border-b border-slate-100 gap-3">
                <Search className="w-5 h-5 text-[#EA580C] shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t(
                    "Suchen nach Seiten, Services, Workflows...",
                    "Search pages, services, case studies, FAQ...",
                  )}
                  className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-800 placeholder-slate-400 outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="p-1 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={closeSearch}
                  className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-mono font-bold text-slate-500 transition-colors cursor-pointer"
                >
                  ESC
                </button>
              </div>

              {/* Search Results List */}
              <div className="max-h-80 overflow-y-auto p-3 space-y-1">
                {filteredSearchItems.length > 0 ? (
                  filteredSearchItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => {
                          closeSearch();
                          if (item.href.startsWith("#") && isHomePage) {
                            const elem = document.getElementById(
                              item.href.replace("#", ""),
                            );
                            if (elem)
                              elem.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="group flex items-center justify-between p-3 rounded-2xl hover:bg-orange-50/70 transition-all duration-150"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#EA580C] text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[13.5px] font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-500">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded-md bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-orange-600 transition-colors">
                          {item.category}
                        </span>
                      </Link>
                    );
                  })
                ) : (
                  <div className="py-10 text-center text-slate-400 text-sm">
                    {t("Keine Ergebnisse gefunden für", "No results found for")}{" "}
                    &ldquo;
                    <span className="text-slate-700 font-semibold">
                      {searchQuery}
                    </span>
                    &rdquo;
                  </div>
                )}
              </div>

              {/* Search Footer Tips */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Command className="w-3.5 h-3.5 text-slate-400" />
                  <span>
                    {t("Drücken Sie Esc zum Schließen", "Press Esc to close")}
                  </span>
                </div>
                <button
                  onClick={() => {
                    closeSearch();
                    onOpenContact();
                  }}
                  className="font-bold text-orange-600 hover:text-orange-700 cursor-pointer"
                >
                  {t(
                    "Oder direkt Beratung buchen &rarr;",
                    "Or book free call directly &rarr;",
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
