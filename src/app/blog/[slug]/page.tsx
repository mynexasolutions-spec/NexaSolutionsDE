"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Copy,
  Check,
  Sparkles,
  CheckCircle2,
  Bookmark,
  ArrowRight,
  Eye,
  MessageSquare,
  ChevronRight,
  Code2,
  ShieldCheck,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  BlogPost,
} from "@/data/blogData";

function renderWithLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  if (!linkRegex.test(text)) return text;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  linkRegex.lastIndex = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    parts.push(
      <Link
        key={match.index}
        href={url}
        className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
}

export default function SingleBlogPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const { t, lang } = useLanguage();

  const [contactOpen, setContactOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);

  const initialPost = getBlogPostBySlug(slug);
  const [post, setPost] = useState<BlogPost | null>(initialPost || null);
  const [isFetchingDb, setIsFetchingDb] = useState(!initialPost);

  React.useEffect(() => {
    if (!post) {
      async function loadDbBlog() {
        try {
          const res = await fetch("/api/blogs");
          if (res.ok) {
            const data = await res.json();
            const found = data.blogs?.find((b: any) => b.slug === slug);
            if (found) {
              const mapped: BlogPost = {
                slug: found.slug,
                titleDe: found.title_de || found.titleDe || "Blog",
                seoTitleDe: found.seo_title_de || found.title_de || found.titleDe || "Blog",
                titleEn: found.title_en || found.titleEn || "Blog",
                excerptDe: found.excerpt_de || found.excerptDe || "",
                excerptEn: found.excerpt_en || found.excerptEn || "",
                category: found.category || "ai-automation",
                categoryLabelDe: found.category_label_de || found.categoryLabelDe || "KI & Automatisierung",
                categoryLabelEn: found.category_label_en || found.categoryLabelEn || "AI & Automation",
                categoryBadgeClass: found.category_badge_class || found.categoryBadgeClass || "bg-amber-50 text-amber-700 border-amber-200/80",
                date: found.date || "2026-03-15",
                readTimeDe: found.read_time_de || found.readTimeDe || "5 Min.",
                readTimeEn: found.read_time_en || found.readTimeEn || "5 min read",
                coverImage: found.cover_image || found.coverImage || "/blog/default.jpg",
                featured: !!found.featured,
                views: found.views || "1.0k",
                author: found.author || {
                  name: "Nexa Solutions Team",
                  roleDe: "Software-Architektur & KI-Entwicklung",
                  roleEn: "Software Architecture & AI Engineering",
                  avatar: "/favicon.ico",
                },
                keyTakeawaysDe: found.key_takeaways_de || found.keyTakeawaysDe || [],
                keyTakeawaysEn: found.key_takeaways_en || found.keyTakeawaysEn || [],
                sections: found.sections || [],
                tags: found.tags || [],
                relatedSlugs: found.related_slugs || found.relatedSlugs || [],
              };
              setPost(mapped);
            }
          }
        } catch (err) {
          console.warn("Could not load dynamic blog from API:", err);
        } finally {
          setIsFetchingDb(false);
        }
      }
      loadDbBlog();
    }
  }, [slug, post]);

  const relatedPosts = post ? getRelatedPosts(slug, 2) : [];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  const handleCopyCode = (code: string, idx: number) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(code);
      setCopiedCodeIdx(idx);
      setTimeout(() => setCopiedCodeIdx(null), 2000);
    }
  };

  // If blog post not found and finished checking
  if (!post && !isFetchingDb) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A]">
        <Navbar onOpenContact={() => setContactOpen(true)} />
        <main className="flex-1 flex items-center justify-center py-24 px-4 text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
              {t("Artikel nicht gefunden", "Article Not Found")}
            </h1>
            <p className="text-sm text-slate-600 mb-6">
              {t(
                "Der gesuchte Blogbeitrag existiert leider nicht oder wurde verschoben.",
                "The requested blog article does not exist or may have been moved."
              )}
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("Zurück zum Blog", "Back to Blog")}</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const title = lang === "de" ? post.titleDe : post.titleEn;
  const excerpt = lang === "de" ? post.excerptDe : post.excerptEn;
  const categoryLabel =
    lang === "de" ? post.categoryLabelDe : post.categoryLabelEn;
  const readTime = lang === "de" ? post.readTimeDe : post.readTimeEn;
  const keyTakeaways =
    lang === "de" ? post.keyTakeawaysDe : post.keyTakeawaysEn;

  // Real data BlogPosting Schema.org JSON-LD
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: post.coverImage?.startsWith("http")
      ? post.coverImage
      : `https://nexa-solutions.de${post.coverImage?.startsWith("/") ? post.coverImage : `/${post.coverImage}`}`,
    author: {
      "@type": "Person",
      name: post.author?.name || "Nexa Solutions Team",
      jobTitle: lang === "de" ? post.author?.roleDe : post.author?.roleEn,
      url: "https://nexa-solutions.de",
    },
    publisher: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: "https://nexa-solutions.de",
      logo: {
        "@type": "ImageObject",
        url: "https://nexa-solutions.de/favicon.ico",
      },
    },
    datePublished:
      post.date && !isNaN(Date.parse(post.date))
        ? new Date(post.date).toISOString()
        : "2026-03-15T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nexa-solutions.de/blog/${post.slug}`,
    },
    inLanguage: lang === "de" ? "de-DE" : "en-US",
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      {/* BlogPosting Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Top Navbar */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Main Single Article Wrapper: "kam space me ok" - compact, focused, elegant */}
      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        {/* Compact Breadcrumb & Back Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Back Button */}
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>{t("Alle Artikel", "All Articles")}</span>
            </Link>

            {/* Breadcrumb Path */}
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Link href="/" className="hover:text-slate-600 transition-colors">
                {t("Home", "Home")}
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <Link
                href="/blog"
                className="hover:text-slate-600 transition-colors"
              >
                Blog
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className="text-slate-700 font-medium truncate max-w-[200px]">
                {categoryLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Compact Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
          {/* Metadata Row: Category badge, Date, Read Time, Views */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs mb-4">
            <span
              className={`px-3 py-0.5 rounded-full font-bold border ${post.categoryBadgeClass}`}
            >
              {categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.date}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {readTime}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-500">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              {post.views} {t("Aufrufe", "reads")}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-snug mb-4">
            {title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
            {excerpt}
          </p>

          {/* Compact Author & Share Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-slate-200/80">
            {/* Author details */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs border border-orange-400/30">
                NX
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>{post.author.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Verified Author" />
                </div>
                <div className="text-[11px] text-slate-500">
                  {lang === "de"
                    ? post.author.roleDe
                    : post.author.roleEn}
                </div>
              </div>
            </div>

            {/* Quick Share Buttons */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-slate-400 mr-1 hidden sm:inline">
                {t("Teilen:", "Share:")}
              </span>

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                title="Copy Link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">
                      {t("Kopiert!", "Copied!")}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t("Link", "Link")}</span>
                  </>
                )}
              </button>

              {/* LinkedIn Share */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${
                  typeof window !== "undefined"
                    ? encodeURIComponent(window.location.href)
                    : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter Share */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  title
                )}&url=${
                  typeof window !== "undefined"
                    ? encodeURIComponent(window.location.href)
                    : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="Share on X"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* Compact Featured Hero Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
          <div className="relative w-full h-56 sm:h-72 md:h-84 lg:h-96 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-100">
            <Image
              src={post.coverImage}
              alt={title}
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Article Body Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Key Takeaways Box (Compact, high conversion) */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-white border border-orange-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-800 uppercase tracking-wider mb-2.5">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>{t("Wichtigste Erkenntnisse auf einen Blick", "Key Takeaways at a Glance")}</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{renderWithLinks(point)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections Content */}
          <article className="space-y-8 text-slate-800">
            {post.sections.map((section, idx) => {
              const heading =
                lang === "de" ? section.headingDe : section.headingEn;
              const paragraphs =
                lang === "de" ? section.paragraphsDe : section.paragraphsEn;
              const bullets =
                lang === "de" ? section.bulletsDe : section.bulletsEn;
              const quote = lang === "de" ? section.quoteDe : section.quoteEn;

              return (
                <div key={idx} className="border-b border-slate-100 pb-8 last:border-b-0">
                  {/* Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                    {heading}
                  </h2>

                  {/* Paragraphs */}
                  <div className="space-y-3.5 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-700">
                    {paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{renderWithLinks(p)}</p>
                    ))}
                  </div>

                  {/* Highlighted Quote Callout if present */}
                  {quote && (
                    <blockquote className="my-5 p-4 rounded-xl bg-slate-50 border-l-4 border-orange-500 text-slate-800 italic text-xs sm:text-sm">
                      <p className="font-medium text-slate-900 mb-1">
                        &ldquo;{quote.text}&rdquo;
                      </p>
                      <cite className="not-italic text-[11px] text-slate-500 font-semibold block">
                        — {quote.author}
                      </cite>
                    </blockquote>
                  )}

                  {/* Bullet points if present */}
                  {bullets && bullets.length > 0 && (
                    <div className="my-4 p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                            <span>{renderWithLinks(b)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Code Snippet Box if present */}
                  {section.codeSnippet && (
                    <div className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-200">
                      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900 border-b border-slate-800 text-[11px] font-mono">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Code2 className="w-3.5 h-3.5 text-orange-400" />
                          {section.codeSnippet.title}
                        </span>
                        <button
                          onClick={() =>
                            handleCopyCode(section.codeSnippet!.code, idx)
                          }
                          className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedCodeIdx === idx ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400 font-bold">
                                {t("Kopiert", "Copied")}
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>{t("Kopieren", "Copy")}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-3.5 text-xs font-mono overflow-x-auto text-emerald-300">
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              );
            })}
          </article>

          {/* Tags Row */}
          <div className="mt-8 pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-1">
              {t("Themen:", "Tags:")}
            </span>
            {post.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Compact Author Bio Card */}
          <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-sm border border-orange-400/30">
              NX
            </div>
            <div className="text-center sm:text-left flex-1">
              <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-1.5">
                <span>{post.author.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Verified Author" />
              </div>
              <div className="text-xs text-orange-600 font-semibold mb-2">
                {lang === "de" ? post.author.roleDe : post.author.roleEn}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t(
                  "Spezialisiert auf zukunftssichere Web-Architekturen, Cross-Platform Mobile Apps und automatisierte Unternehmens-Pipelines mit n8n & KI-Agenten.",
                  "Specializing in modern Jamstack web architecture, native mobile applications, and enterprise workflow automation with n8n and autonomous AI agents."
                )}
              </p>
            </div>
          </div>

          {/* Compact Consultation Callout Box */}
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>{t("NEXA SOLUTIONS BERATUNG", "NEXA CONSULTING")}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1.5">
                  {t(
                    "Möchten Sie diese Lösung in Ihrem Unternehmen nutzen?",
                    "Ready to implement this solution in your company?"
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                  {t(
                    "Buchen Sie ein kostenloses 20-minütiges Fachgespräch mit unseren Ingenieuren oder nutzen Sie unsere ",
                    "Schedule a free 20-minute strategy session with our senior engineering team or reach out via our "
                  )}
                  <Link href="/contact" className="text-orange-400 hover:text-orange-300 underline font-semibold transition-colors">
                    {t("Kontaktseite", "contact page")}
                  </Link>
                  .
                </p>
              </div>

              <button
                onClick={() => setContactOpen(true)}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-600/20 transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer flex items-center gap-2"
              >
                <span>{t("Erstgespräch anfragen", "Book Discovery Call")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Related Articles Section (Compact 2-col) */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200/80">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {t("Ähnliche Fachartikel", "Related Articles")}
                </h3>
                <Link
                  href="/blog"
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                >
                  <span>{t("Alle ansehen", "View all")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedPosts.map((rel) => {
                  const relTitle =
                    lang === "de" ? rel.titleDe : rel.titleEn;
                  const relReadTime =
                    lang === "de" ? rel.readTimeDe : rel.readTimeEn;
                  const relCat =
                    lang === "de"
                      ? rel.categoryLabelDe
                      : rel.categoryLabelEn;

                  return (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-orange-200 transition-all"
                    >
                      <div className="relative w-24 h-20 sm:w-28 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                        <Image
                          src={rel.coverImage}
                          alt={relTitle}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                            <span className="font-bold text-orange-600">
                              {relCat}
                            </span>
                            <span>•</span>
                            <span>{relReadTime}</span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                            {relTitle}
                          </h4>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-600 mt-2">
                          <span>{t("Lesen", "Read article")}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={`Blog Beratung: ${title}`}
      />
    </div>
  );
}
