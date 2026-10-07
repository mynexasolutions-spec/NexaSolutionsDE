"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Eye,
  Filter,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";
import { blogPosts, blogCategories, BlogPost } from "@/data/blogData";

export default function BlogListingPage() {
  const { t, lang } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allPosts, setAllPosts] = useState<BlogPost[]>(blogPosts);

  // Fetch blogs from DB/API
  React.useEffect(() => {
    async function loadDbBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          if (data.blogs && data.blogs.length > 0) {
            const mapped: BlogPost[] = data.blogs.map((b: any) => ({
              slug: b.slug,
              titleDe: b.title_de || b.titleDe,
              titleEn: b.title_en || b.titleEn,
              excerptDe: b.excerpt_de || b.excerptDe,
              excerptEn: b.excerpt_en || b.excerptEn,
              category: b.category,
              categoryLabelDe: b.category_label_de || b.categoryLabelDe || "KI & Automatisierung",
              categoryLabelEn: b.category_label_en || b.categoryLabelEn || "AI & Automation",
              categoryBadgeClass: b.category_badge_class || b.categoryBadgeClass || "bg-amber-50 text-amber-700 border-amber-200/80",
              date: b.date,
              readTimeDe: b.read_time_de || b.readTimeDe,
              readTimeEn: b.read_time_en || b.readTimeEn,
              coverImage: b.cover_image || b.coverImage,
              featured: !!b.featured,
              views: b.views || "1.0k",
              author: b.author || {
                name: "Nexa Solutions Team",
                roleDe: "Software-Architektur & KI-Entwicklung",
                roleEn: "Software Architecture & AI Engineering",
                avatar: "/favicon.ico",
              },
              keyTakeawaysDe: b.key_takeaways_de || b.keyTakeawaysDe || [],
              keyTakeawaysEn: b.key_takeaways_en || b.keyTakeawaysEn || [],
              sections: b.sections || [],
              tags: b.tags || [],
              relatedSlugs: b.related_slugs || b.relatedSlugs || [],
            }));
            setAllPosts(mapped);
          }
        }
      } catch (err) {
        console.warn("Using local blog list fallback:", err);
      }
    }
    loadDbBlogs();
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const title = lang === "de" ? post.titleDe : post.titleEn;
      const excerpt = lang === "de" ? post.excerptDe : post.excerptEn;
      const tags = post.tags.join(" ");

      const matchesSearch =
        !searchQuery.trim() ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tags.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [allPosts, selectedCategory, searchQuery, lang]);

  // Main featured article (default or first in list)
  const featuredPost = useMemo(() => {
    return allPosts.find((p) => p.featured) || allPosts[0];
  }, [allPosts]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/40 border-b border-slate-100">
          {/* Subtle Ambient Glowing Orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-200/30 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-purple-100/30 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3 translate-y-1/3" />

          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />

          <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 lg:mb-2">
              <Link
                href="/"
                className="hover:text-orange-600 transition-colors flex items-center gap-1.5 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {t("Startseite", "Home")}
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-orange-600 font-semibold">{t("Blog & Einblicke", "Blog & Insights")}</span>
            </div>

            {/* Header Content */}
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>{t("Nexa Tech Insights • Praxiswissen 2026", "Nexa Tech Insights • Practical Knowledge 2026")}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-center">
                {t(
                  "Digitale Innovation, KI & Web-Architektur",
                  "Digital Innovation, AI & Web Architecture"
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-center max-w-2xl">
                {t(
                  "Expertenwissen für Geschäftsführer, CTOs und Produktverantwortliche. Praxiserprobte Strategien für High-Performance Next.js-Websites, native Apps und intelligente KI-Automatisierung mit n8n.",
                  "Actionable insights for founders, CTOs and product leads. Proven strategies covering high-performance Next.js websites, cross-platform mobile apps, and autonomous enterprise AI workflows."
                )}
              </p>
            </div>

            {/* Live Search & Filter Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none">
                {blogCategories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  const label = lang === "de" ? cat.labelDe : cat.labelEn;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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

              {/* Search Field */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("Artikel durchsuchen...", "Search articles...")}
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-full bg-white border border-slate-200/90 shadow-2xs focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none text-slate-800 placeholder-slate-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blog Post Spotlight (only when all categories selected and no search) */}
        {selectedCategory === "all" && !searchQuery.trim() && featuredPost && (
          <section className="py-8 sm:py-12 bg-white">
            <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>{t("Hervorgehobener Leitartikel", "Featured Lead Article")}</span>
              </div>

              <div className="group relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                {/* Background glow orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 relative z-10">
                  {/* Left Text */}
                  <div className="lg:col-span-7 flex flex-col items-start">
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                        {lang === "de"
                          ? featuredPost.categoryLabelDe
                          : featuredPost.categoryLabelEn}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-orange-400" />
                        {lang === "de"
                          ? featuredPost.readTimeDe
                          : featuredPost.readTimeEn}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {featuredPost.date}
                      </span>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-orange-400 transition-colors mb-4">
                        {lang === "de"
                          ? featuredPost.titleDe
                          : featuredPost.titleEn}
                      </h2>
                    </Link>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                      {lang === "de"
                        ? featuredPost.excerptDe
                        : featuredPost.excerptEn}
                    </p>

                    {/* Author & CTA Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 w-full pt-4 border-t border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs border border-orange-400/30">
                          NX
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white">
                            {featuredPost.author.name}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {lang === "de"
                              ? featuredPost.author.roleDe
                              : featuredPost.author.roleEn}
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-sm sm:text-base font-bold shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>{t("Artikel lesen", "Read Article")}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-5 relative">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="block relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group/img"
                    >
                      <Image
                        src={featuredPost.coverImage}
                        alt={featuredPost.titleDe}
                        fill
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Post Grid Section */}
        <section className="py-8 sm:py-14 bg-[#FDFDFE]">
          <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {searchQuery.trim()
                    ? t("Suchergebnisse", "Search Results")
                    : t("Alle Fachartikel", "All Articles")}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {t(
                    `${filteredPosts.length} Beiträge gefunden`,
                    `Showing ${filteredPosts.length} published articles`
                  )}
                </p>
              </div>

              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 underline"
                >
                  {t("Filter zurücksetzen", "Clear Filter")}
                </button>
              )}
            </div>

            {/* Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredPosts.map((post, idx) => {
                  const title = lang === "de" ? post.titleDe : post.titleEn;
                  const excerpt =
                    lang === "de" ? post.excerptDe : post.excerptEn;
                  const readTime =
                    lang === "de" ? post.readTimeDe : post.readTimeEn;
                  const categoryLabel =
                    lang === "de"
                      ? post.categoryLabelDe
                      : post.categoryLabelEn;

                  return (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-200/80 transition-all duration-300 overflow-hidden"
                    >
                      {/* Post Thumbnail Image */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
                      >
                        <Image
                          src={post.coverImage}
                          alt={title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Category Tag Overlay */}
                        <div className="absolute top-3.5 left-3.5">
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-xs ${post.categoryBadgeClass}`}
                          >
                            {categoryLabel}
                          </span>
                        </div>
                      </Link>

                      {/* Content Area */}
                      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                          {/* Metadata row */}
                          <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              {post.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {readTime}
                            </span>
                          </div>

                          {/* Post Title */}
                          <Link href={`/blog/${post.slug}`}>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug mb-2.5">
                              {title}
                            </h4>
                          </Link>

                          {/* Excerpt */}
                          <p className="text-sm sm:text-base text-slate-600 line-clamp-3 leading-relaxed mb-4">
                            {excerpt}
                          </p>
                        </div>

                        {/* Bottom Author & Read Link */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                              NX
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-slate-700">
                              {post.author.name}
                            </span>
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-orange-600 hover:text-orange-700 group/link"
                          >
                            <span>{t("Mehr lesen", "Read More")}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              /* Empty Search State */
              <div className="py-16 text-center max-w-md mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {t("Keine Artikel gefunden", "No articles found")}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  {t(
                    "Leider konnten wir für Ihre Suchanfrage keine passenden Artikel finden. Probieren Sie andere Suchbegriffe.",
                    "We could not find any articles matching your search query. Try alternative keywords or clear filters."
                  )}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {t("Alle Artikel anzeigen", "Show all articles")}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Consultation CTA Banner */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Background ambient pattern */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-10 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t("Unverbindliche Beratung", "Free Strategy Call")}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                  {t(
                    "Möchten Sie Ihr Projekt mit Nexa Solutions umsetzen?",
                    "Ready to modernise your digital products?"
                  )}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  {t(
                    "In einem 30-minütigen Gespräch analysieren wir Ihre aktuellen Prozesse und zeigen konkrete Hebel für Websites, Apps und KI-Automatisierung auf.",
                    "In a 30-minute discovery call, we evaluate your digital systems and reveal clear opportunities for high-speed web apps and AI automation."
                  )}
                </p>
              </div>

              <div className="relative z-10 shrink-0">
                <button
                  onClick={() => setContactOpen(true)}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-orange-600 text-sm font-bold shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>{t("Jetzt Erstgespräch buchen", "Book Discovery Call")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService="Allgemeine Anfrage / Blog"
      />
    </div>
  );
}
