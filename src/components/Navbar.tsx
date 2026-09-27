"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X, Globe } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ["home", "partners", "services", "systems", "automation", "process", "work", "guarantees", "about", "booking", "faq", "testimonials", "contact"];
      const scrollPos = window.scrollY + 120;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang dropdown when clicking outside
  useEffect(() => {
    if (!langDropdownOpen) return;
    const handler = () => setLangDropdownOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [langDropdownOpen]);

  const navLinks = [
    { name: t("Startseite", "Home"), href: "#home", id: "home" },
    {
      name: t("Dienstleistungen", "Services"),
      href: "#services",
      id: "services",
      hasDropdown: true,
    },
    { name: t("Systeme", "Systems"), href: "#systems", id: "systems" },
    { name: t("Garantien", "Guarantees"), href: "#guarantees", id: "guarantees" },
    { name: t("Projekte", "Projects"), href: "#work", id: "work" },
    { name: t("Über uns", "About"), href: "#about", id: "about" },
    { name: t("FAQ", "FAQ"), href: "#faq", id: "faq" },
    { name: t("Termin buchen", "Book Call"), href: "#booking", id: "booking" },
  ];

  const serviceLinks = [
    { label: t("Website-Entwicklung", "Website Development"), href: "/services/web-development" },
    { label: t("Mobile-App-Entwicklung", "Mobile App Development"), href: "/services/mobile-app-development" },
    { label: t("KI-Automatisierung & n8n", "AI Automation & n8n Workflows"), href: "/services/ai-automation" },
  ];

  const languages = [
    { code: "de" as const, label: "Deutsch", flag: "🇩🇪" },
    { code: "en" as const, label: "English", flag: "🇬🇧" },
  ];

  const activeLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
          : "bg-white/80 backdrop-blur-xs py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with NX Monogram */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-[14px] font-medium transition-colors py-1 ${
                        isActive
                          ? "text-[#0F172A] font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform" />
                    </Link>

                    {/* Services Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 animate-in fade-in zoom-in-95 duration-150">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-3 py-2 text-xs font-semibold text-slate-800 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveNav(link.id)}
                  className={`text-[14px] font-medium transition-colors py-1 relative ${
                    isActive
                      ? "text-[#0F172A] font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Language Switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher — DE primary, EN secondary */}
            <div
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
                setLangDropdownOpen((prev) => !prev);
              }}
            >
              <button
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all duration-200 cursor-pointer select-none"
                aria-label="Switch language"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{activeLang.flag}</span>
                <span>{activeLang.code.toUpperCase()}</span>
                <ChevronDown
                  className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-1.5 w-40 rounded-2xl bg-white border border-slate-200 shadow-xl p-1.5 animate-in fade-in zoom-in-95 duration-150 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        lang === l.code
                          ? "bg-orange-50 text-orange-600"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                      {lang === l.code && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-[13px] font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/25 group cursor-pointer"
            >
              <span>{t("Kostenlose Beratung", "Get a Free Consultation")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Toggle (compact) */}
            <button
              onClick={() => setLang(lang === "de" ? "en" : "de")}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer transition-colors hover:bg-slate-100"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>{lang === "de" ? "🇩🇪 DE" : "🇬🇧 EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-5 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeNav === link.id
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile service sub-links */}
            <div className="ml-3 pl-3 border-l-2 border-slate-100 space-y-1">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-semibold transition-colors shadow-md"
            >
              <span>{t("Kostenlose Beratung", "Get a Free Consultation")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
