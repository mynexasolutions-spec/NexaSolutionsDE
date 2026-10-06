"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Users,
  Star,
  Briefcase,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
  ExternalLink,
  Laptop,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  allProjects,
  projectCategories,
  ProjectItem,
} from "@/data/projectsData";

// Smart Card Image using Next.js Image with high-performance caching & graceful fallback
function ProjectCardMedia({
  project,
  priority = false,
}: {
  project: ProjectItem;
  priority?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  // Extract clean hostname for display in fallback
  const displayHost = useMemo(() => {
    try {
      const url = new URL(project.link);
      return url.hostname.replace(/^www\./, "");
    } catch {
      return "preview.nexa";
    }
  }, [project.link]);

  return (
    <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden flex flex-col justify-end group/media">
      {/* Decorative subtle ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/[0.03] via-transparent to-orange-500/[0.04] pointer-events-none" />

      {/* Actual Website Image with Next.js optimization */}
      {!hasError ? (
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            onError={() => setHasError(true)}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        /* Graceful Fallback Laptop / Browser Mockup Card */
        <div className="relative w-full h-full p-3 sm:p-4 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-700/60">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex-1 max-w-[200px] mx-auto px-2.5 py-0.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-[10px] text-slate-300 truncate font-mono text-center flex items-center justify-center gap-1">
              <Globe className="w-2.5 h-2.5 text-orange-400 shrink-0" />
              <span className="truncate">{displayHost}</span>
            </div>
            <div className="w-8" />
          </div>

          {/* Content Center Graphic */}
          <div className="my-auto py-2 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-2 shadow-inner">
              <Laptop className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white tracking-tight">
              {project.title}
            </h4>
            <span className="text-[11px] text-slate-400 mt-0.5 block font-mono">
              https://{displayHost}
            </span>
          </div>

          {/* Bottom tag line */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
            <span className="text-orange-400 font-semibold">{project.category}</span>
            <span className="flex items-center gap-1 text-slate-300">
              Live Preview <ExternalLink className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>
      )}

      {/* Ambient hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}

export default function ProjectsPage() {
  const { t, lang } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const gridTopRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Toggle search open/close with autofocus
  const handleToggleSearch = () => {
    if (isSearchOpen && !searchQuery.trim()) {
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(true);
      setTimeout(() => {
        searchInputRef.current?.focus();
        mobileSearchInputRef.current?.focus();
      }, 80);
    }
  };

  // Close search on click outside (if empty) or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        if (!searchQuery.trim()) {
          setIsSearchOpen(false);
        }
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (searchQuery.trim()) {
          setSearchQuery("");
        } else {
          setIsSearchOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchQuery]);

  const ITEMS_PER_PAGE = 9;

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;

      const title = p.title.toLowerCase();
      const desc =
        lang === "de"
          ? p.descriptionDe.toLowerCase()
          : p.descriptionEn.toLowerCase();
      const cat = p.category.toLowerCase();
      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        !query ||
        title.includes(query) ||
        desc.includes(query) ||
        cat.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  // Reset to first page whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Total pages
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));

  // Current page items
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  // Handle page change with smooth scroll to top of grid
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* MAIN PROJECTS SECTION (Integrated Hero + Filter + Grid) */}
        <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/30 border-b border-slate-100">
          {/* Subtle Ambient Glowing Orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-200/30 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-purple-100/30 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3" />

          {/* Grid Pattern Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none -z-10" />

          <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation (Exact Blog Style) */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 lg:mb-2">
              <Link
                href="/"
                className="hover:text-orange-600 transition-colors flex items-center gap-1.5 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {t("Startseite", "Home")}
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-orange-600 font-semibold">
                {t("Unsere Projekte", "Our Projects")}
              </span>
            </div>

            {/* Header Content (Exact Blog Header Design & Alignment) */}
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
              {/* Blog Style Eyebrow Badge Pill with Sparkles */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>
                  {t(
                    "Nexa Portfolio • Praxisprojekte 2026",
                    "Nexa Portfolio • Client Showcase 2026"
                  )}
                </span>
              </div>

              {/* H1 Heading (Exact Blog Typography & Size) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-center">
                {t("Echte Projekte. ", "Real Projects. ")}
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                  {t("Echte Wirkung.", "Real Impact.")}
                </span>
              </h1>

              {/* Subtitle (Exact Blog Typography & Size) */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-center max-w-2xl">
                {lang === "de" ? (
                  <>
                    Entdecken Sie eine Auswahl unserer neuesten Referenzen. Von performanter{" "}
                    <Link href="/services/web-development" className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors">
                      Webentwicklung für Unternehmen
                    </Link>{" "}
                    über native{" "}
                    <Link href="/services/mobile-app-development" className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors">
                      iOS &amp; Android App Entwicklung
                    </Link>{" "}
                    bis hin zu automatisierter{" "}
                    <Link href="/services/ai-automation" className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors">
                      KI-Prozessautomatisierung
                    </Link>{" "}
                    schaffen wir digitale Lösungen mit messbarem Mehrwert.
                  </>
                ) : (
                  t(
                    "Entdecken Sie eine Auswahl unserer neuesten Kundenprojekte aus verschiedenen Branchen. Von hochkonvertierenden E-Commerce-Stores bis hin zu modernen Unternehmenswebsites entwickeln wir digitale Lösungen, die Marken wachsen lassen.",
                    "Explore a selection of our recent work across different industries. From e-commerce stores to business websites, we build digital solutions that help brands grow."
                  )
                )}
              </p>
            </div>

            {/* Live Search & Filter Bar (Modern Responsive Filter Bar with Slide-Down Mobile Search) */}
            <div
              ref={gridTopRef}
              className="mt-8 mb-8 pt-6 border-t border-slate-200/80"
            >
              {/* Top Row: Category Pills + Vertical Divider + Search Button */}
              <div className="flex items-center justify-between gap-2.5 sm:gap-3 w-full">
                {/* Scrollable Category Pills (With pr-3 & shrink-0 so text is never cut off) */}
                <div className="flex-1 min-w-0 overflow-x-auto scrollbar-none py-1 pr-3 flex items-center gap-1.5 sm:gap-2">
                  {projectCategories.map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    const label = lang === "de" ? cat.labelDe : cat.labelEn;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                          isActive
                            ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/20"
                            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* Subtle Divider */}
                <div className="w-[1px] h-6 bg-slate-200/90 shrink-0" />

                {/* Search Trigger (Desktop Inline Expansion, Mobile Slide-Down Toggle) */}
                <div ref={searchContainerRef} className="shrink-0 flex items-center">
                  {/* Desktop Expandable Search */}
                  <div className="hidden md:flex items-center">
                    <AnimatePresence initial={false} mode="wait">
                      {isSearchOpen || searchQuery ? (
                        <motion.div
                          key="desktop-expanded-search"
                          initial={{ width: 40, opacity: 0 }}
                          animate={{ width: 280, opacity: 1 }}
                          exit={{ width: 40, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="relative flex items-center"
                        >
                          <Search className="w-4 h-4 text-orange-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            ref={searchInputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={t(
                              "Projekte durchsuchen...",
                              "Search projects..."
                            )}
                            className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm rounded-full bg-white border border-orange-500/60 ring-2 ring-orange-500/15 shadow-sm transition-all outline-none text-slate-800 placeholder-slate-400 font-medium"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (searchQuery) {
                                setSearchQuery("");
                                searchInputRef.current?.focus();
                              } else {
                                setIsSearchOpen(false);
                              }
                            }}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                            aria-label={searchQuery ? "Clear search" : "Close search"}
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </motion.div>
                      ) : (
                        <motion.button
                          key="desktop-collapsed-search-btn"
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          type="button"
                          onClick={handleToggleSearch}
                          className="w-10 h-10 rounded-full bg-white border border-slate-200/90 text-slate-600 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-50/50 shadow-2xs flex items-center justify-center transition-all duration-200 cursor-pointer group"
                          aria-label={t("Projekte durchsuchen", "Search projects")}
                          title={t("Projekte durchsuchen", "Search projects")}
                        >
                          <Search className="w-4 h-4 text-slate-500 group-hover:text-orange-600 transition-colors" />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Search Button (Toggles Slide-Down Input Below) */}
                  <div className="flex md:hidden items-center">
                    <button
                      type="button"
                      onClick={handleToggleSearch}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                        isSearchOpen || searchQuery
                          ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/20"
                          : "bg-white border border-slate-200 text-slate-600 hover:text-orange-600 hover:border-orange-500/40 shadow-2xs"
                      }`}
                      aria-label={isSearchOpen ? t("Suche schließen", "Close search") : t("Projekte durchsuchen", "Search projects")}
                    >
                      {isSearchOpen && !searchQuery ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Search className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Slide-Down Search Field (Slides down smoothly right underneath) */}
              <AnimatePresence>
                {(isSearchOpen || searchQuery) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="md:hidden w-full pt-3 overflow-hidden"
                  >
                    <div className="relative flex items-center w-full">
                      <Search className="w-4 h-4 text-orange-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        ref={mobileSearchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t(
                          "Projekte durchsuchen...",
                          "Search projects..."
                        )}
                        className="w-full pl-10 pr-20 py-2.5 text-xs sm:text-sm rounded-full bg-white border border-orange-500/60 ring-2 ring-orange-500/15 shadow-sm outline-none text-slate-800 placeholder-slate-400 font-medium"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() => {
                              setSearchQuery("");
                              mobileSearchInputRef.current?.focus();
                            }}
                            className="p-1 text-slate-400 hover:text-slate-700 rounded-full cursor-pointer"
                            aria-label="Clear search"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="text-[11px] font-semibold text-orange-600 px-2 py-0.5 rounded-full hover:bg-orange-50 transition-colors cursor-pointer"
                        >
                          {t("Fertig", "Done")}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Search Query Feedback Badge (if user has typed something) */}
              {searchQuery.trim() && (
                <div className="mt-2.5 pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span>
                    {lang === "de"
                      ? `${filteredProjects.length} ${
                          filteredProjects.length === 1 ? "Projekt" : "Projekte"
                        } gefunden für "${searchQuery}"`
                      : `${filteredProjects.length} ${
                          filteredProjects.length === 1 ? "project" : "projects"
                        } found for "${searchQuery}"`}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearchOpen(false);
                    }}
                    className="text-orange-600 hover:text-orange-700 font-semibold cursor-pointer underline"
                  >
                    {t("Filter zurücksetzen", "Reset filter")}
                  </button>
                </div>
              )}
            </div>

            {/* 3-Column Responsive Cards Grid - Starts DIRECTLY below filter bar */}
            {currentProjects.length > 0 ? (
              <div
                className="mt-6 sm:mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 ow-grid"
                id="owGrid"
              >
                {currentProjects.map((project, idx) => {
                  const desc =
                    lang === "de"
                      ? project.descriptionDe
                      : project.descriptionEn;
                  const catLabel =
                    lang === "de" ? project.categoryDe : project.categoryEn;

                  return (
                    <motion.article
                      key={project.id}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className="ow-card group flex flex-col bg-white rounded-[5px] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:shadow-orange-500/8 hover:border-orange-300 transition-all duration-300 overflow-hidden"
                      data-category={project.category}
                    >
                      {/* Card Media (Laptop Screen Presentation with Floating Glassmorphic Category Badge) */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ow-card-media block relative overflow-hidden group/media"
                      >
                        <ProjectCardMedia project={project} priority={idx < 6} />

                        {/* Subtle bottom-gradient overlay for high contrast */}
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/45 via-slate-950/15 to-transparent pointer-events-none" />

                        {/* Modern Floating Category Badge in bottom-left corner of image */}
                        <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10 pointer-events-none">
                          <span
                            className={`ow-badge inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-[5px] text-[11px] sm:text-xs font-bold border backdrop-blur-md shadow-md transition-all duration-300 ${project.badgeClass}`}
                            data-cat={project.category}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                            <span>{catLabel}</span>
                          </span>
                        </div>
                      </a>

                      {/* Card Body */}
                      <div className="ow-card-body p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                        <div>
                          {/* Project Title */}
                          <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight line-clamp-1 mb-2">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {project.title}
                            </a>
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed line-clamp-2 mb-2.5">
                            {desc}
                          </p>
                        </div>

                        {/* Bottom Action Row: 'View Project' and Diagonal Arrow Button */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ow-card-link inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors group/link"
                          >
                            <span>{t("Website besuchen", "View Project")}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                          </a>

                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title}`}
                            className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all duration-200 shadow-2xs hover:scale-105 active:scale-95"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.4]" />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              /* Empty Search / Filter State */
              <div className="py-12 text-center max-w-md mx-auto">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-3">
                  <Laptop className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  {t("Keine Projekte gefunden", "No projects found")}
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  {t(
                    "Für Ihre aktuelle Auswahl konnten keine passenden Projekte gefunden werden. Bitte passen Sie Ihre Filter an.",
                    "No projects matched your current filter criteria. Please try alternative keywords or reset filters."
                  )}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {t("Alle Projekte anzeigen", "Show all projects")}
                </button>
              </div>
            )}

            {/* PAGINATION SECTION (Modern Nexa Brand Pagination with Increased Size & Brand Colors) */}
            {totalPages > 1 && (
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Subtle Page Counter Info */}
                <div className="text-xs sm:text-sm font-medium text-slate-500 order-2 sm:order-1">
                  {lang === "de"
                    ? `Seite ${currentPage} von ${totalPages} (${filteredProjects.length} Projekte)`
                    : `Page ${currentPage} of ${totalPages} (${filteredProjects.length} projects)`}
                </div>

                {/* Main Pagination Controls */}
                <div className="order-1 sm:order-2 flex items-center justify-center gap-2 sm:gap-2.5">
                  {/* Prev Button */}
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                      currentPage === 1
                        ? "text-slate-300 bg-slate-100/70 border border-slate-200/50 cursor-not-allowed opacity-60"
                        : "text-slate-700 bg-white border border-slate-200/90 hover:border-orange-500/50 hover:bg-orange-50/40 hover:text-orange-600 shadow-xs hover:shadow-sm active:scale-95 group"
                    }`}
                    aria-label="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                    <span>{t("Zurück", "Prev")}</span>
                  </button>

                  {/* Page Number Buttons */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => {
                      const pageNum = i + 1;
                      const isActive = currentPage === pageNum;

                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer flex items-center justify-center active:scale-95 ${
                            isActive
                              ? "bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white shadow-md shadow-orange-500/30 ring-2 ring-orange-500/25 scale-105"
                              : "bg-white border border-slate-200/90 text-slate-700 hover:border-orange-500/50 hover:bg-orange-50/40 hover:text-orange-600 shadow-2xs hover:shadow-xs"
                          }`}
                          aria-label={`Go to page ${pageNum}`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() =>
                      handlePageChange(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                      currentPage === totalPages
                        ? "text-slate-300 bg-slate-100/70 border border-slate-200/50 cursor-not-allowed opacity-60"
                        : "text-slate-700 bg-white border border-slate-200/90 hover:border-orange-500/50 hover:bg-orange-50/40 hover:text-orange-600 shadow-xs hover:shadow-sm active:scale-95 group"
                    }`}
                    aria-label="Next Page"
                  >
                    <span>{t("Weiter", "Next")}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* BOTTOM CTA BANNER (Home Page Sizing & Modern Rounded-[5px] Design) */}
        <section className="py-10 sm:py-14 bg-white border-t border-slate-100 relative overflow-hidden">
          {/* Background Ambient Glows */}
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 blur-3xl -z-10"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-30 blur-3xl -z-10"
            style={{
              background: "radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Main Banner Card (rounded-[5px]) */}
            <div className="relative rounded-[5px] p-6 sm:p-10 lg:p-12 bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)] overflow-hidden">
              {/* Subtle Ambient Card Glows */}
              <div
                className="absolute top-0 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-25 blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(234,88,12,0.2) 0%, transparent 70%)",
                }}
              />

              {/* Paper Plane Doodle Graphic in top-right */}
              <div className="hidden sm:block absolute top-4 right-4 sm:top-6 sm:right-8 text-orange-500 opacity-75 pointer-events-none">
                <svg
                  width="74"
                  height="52"
                  viewBox="0 0 80 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 48C18 42 34 38 48 24C58 14 68 8 74 6"
                    stroke="#EA580C"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M74 6L54 22L62 30L74 6Z"
                    stroke="#EA580C"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                    fill="#FFF7ED"
                  />
                  <path
                    d="M54 22L66 18"
                    stroke="#EA580C"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                {/* Left Column: Heading, Subtitle & Get in Touch CTA */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  {/* Eyebrow with home page style accent */}
                  <div className="inline-flex items-center gap-1.5 text-orange-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-3 sm:mb-4">
                    <span className="text-orange-600 font-mono font-bold">|→</span>
                    <span>
                      {t(
                        "GEMEINSAM GROSSES SCHAFFEN",
                        "LET'S BUILD SOMETHING GREAT"
                      )}
                    </span>
                  </div>

                  {/* Headline (Home page matching size: text-2xl sm:text-4xl lg:text-[42px]) */}
                  <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.12] mb-3 sm:mb-4">
                    {t(
                      "Haben Sie ein Projekt ",
                      "Have a project "
                    )}
                    <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      {t("im Kopf?", "in mind?")}
                    </span>
                  </h2>

                  {/* Subtitle (Home page matching font size: text-sm sm:text-base) */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
                    {lang === "de" ? (
                      <>
                        Wir freuen uns darauf, von Ihren Zielen zu hören. Gerne können Sie unverbindlich{" "}
                        <Link href="/contact" className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors">
                          Kontakt aufnehmen
                        </Link>{" "}
                        und gemeinsam maßgeschneiderte, hochkonvertierende digitale Lösungen entwickeln.
                      </>
                    ) : (
                      t(
                        "Wir freuen uns darauf, von Ihren Zielen zu hören und gemeinsam maßgeschneiderte, hochkonvertierende digitale Lösungen zu entwickeln.",
                        "We'd love to hear about your goals and create high-performing, custom digital solutions together."
                      )
                    )}
                  </p>

                  {/* CTA Button (rounded-[5px] matching Home page style) */}
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-[5px] bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
                  >
                    <span>{t("Projekt anfragen", "Get in Touch")}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right Column: 3 Stat Cards in a Responsive Grid with rounded-[5px] */}
                <div className="lg:col-span-5 w-full">
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-200/80">
                    {/* Stat 1 */}
                    <div className="p-3 sm:p-5 rounded-[5px] bg-slate-50/80 border border-slate-200/80 hover:border-orange-300/80 hover:bg-white transition-all flex flex-col items-center text-center shadow-2xs group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[5px] bg-orange-50 text-[#EA580C] flex items-center justify-center mb-2 sm:mb-2.5 group-hover:scale-105 transition-transform">
                        <Briefcase className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xl sm:text-3xl font-[900] text-slate-900 tracking-tight">
                        50+
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1 line-clamp-1">
                        {t("Projekte", "Projects")}
                      </span>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-3 sm:p-5 rounded-[5px] bg-slate-50/80 border border-slate-200/80 hover:border-blue-300/80 hover:bg-white transition-all flex flex-col items-center text-center shadow-2xs group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[5px] bg-blue-50 text-blue-600 flex items-center justify-center mb-2 sm:mb-2.5 group-hover:scale-105 transition-transform">
                        <Users className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xl sm:text-3xl font-[900] text-slate-900 tracking-tight">
                        30+
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1 line-clamp-1">
                        {t("Kunden", "Clients")}
                      </span>
                    </div>

                    {/* Stat 3 */}
                    <div className="p-3 sm:p-5 rounded-[5px] bg-slate-50/80 border border-slate-200/80 hover:border-amber-300/80 hover:bg-white transition-all flex flex-col items-center text-center shadow-2xs group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[5px] bg-amber-50 text-amber-600 flex items-center justify-center mb-2 sm:mb-2.5 group-hover:scale-105 transition-transform">
                        <Star className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xl sm:text-3xl font-[900] text-slate-900 tracking-tight">
                        5+
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1 line-clamp-1">
                        {t("Jahre", "Years")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService="Allgemeine Anfrage / Projekte"
      />
    </div>
  );
}
