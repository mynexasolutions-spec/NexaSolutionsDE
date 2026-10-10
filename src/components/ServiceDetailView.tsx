"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Layers,
  Clock,
  Zap,
  Users,
  Coins,
  ShoppingCart,
  GraduationCap,
  Globe,
  Music2,
  Megaphone,
  BarChart3,
  ExternalLink,
  Briefcase,
  BookOpen,
  Brain,
  UtensilsCrossed,
  Settings,
  Cog,
  Bot,
  UserCheck,
  CalendarDays,
  Receipt,
  Package,
  MessageSquare,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage, type Language } from "@/context/LanguageContext";
import type { ServiceItemData } from "@/data/servicesData";
import { allProjects } from "@/data/projectsData";
import { blogPosts } from "@/data/blogData";

interface ServiceDetailViewProps {
  service: ServiceItemData;
  locale: "de" | "en";
}

// Icon mapping for services (all 20 services mapped)
const serviceIconMap: Record<string, React.ElementType> = {
  // First 8 services
  "employee-attendance-tracking": Users,
  "custom-financial-systems": Coins,
  "ecommerce-stores": ShoppingCart,
  "coaching-artist-portfolios": GraduationCap,
  "professional-web-design": Globe,
  "websites-for-musicians": Music2,
  "digital-marketing-campaigns": Megaphone,
  "performance-optimization": BarChart3,
  // Next 12 services
  "llm-integration": Brain,
  "ai-for-businesses": Sparkles,
  "restaurant-systems": UtensilsCrossed,
  "business-mgmt": Settings,
  "automation-business": Cog,
  "ai-auto": Bot,
  "crm-systems": UserCheck,
  "appointment-booking": CalendarDays,
  "invoicing-accounting": Receipt,
  "inventory-warehouse": Package,
  "smart-chatbots": MessageSquare,
  "digital-transformation": Rocket,
};

export default function ServiceDetailView({ service, locale }: ServiceDetailViewProps) {
  const { lang, setLang } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Synchronize locale state with client LanguageContext on mount
  useEffect(() => {
    if (lang !== locale) {
      setLang(locale as Language);
    }
  }, [locale, lang, setLang]);

  const isDe = locale === "de";

  const title = isDe ? service.titleDe : service.titleEn;
  const h1 = isDe ? service.h1De : service.h1En;
  const badge = isDe ? service.badgeDe : service.badgeEn;
  const intro = isDe ? service.introDe : service.introEn;
  const challenges = isDe ? service.challengesDe : service.challengesEn;
  const solution = isDe ? service.solutionDe : service.solutionEn;
  const features = isDe ? service.featuresDe : service.featuresEn;
  const benefits = isDe ? service.benefitsDe : service.benefitsEn;
  const workflow = isDe ? service.workflowDe : service.workflowEn;
  const useCases = isDe ? service.useCasesDe : service.useCasesEn;
  const faqs = isDe ? service.faqDe : service.faqEn;

  // Real projects matching IDs
  const matchingProjects = allProjects.filter((p) =>
    service.relatedProjectIds.includes(p.id)
  );

  // Real blog posts matching slugs
  const matchingBlogs = blogPosts.filter((b) =>
    service.relatedBlogSlugs.includes(b.slug)
  );

  const ServiceIcon = serviceIconMap[service.id] || Globe;
  const contactHref = `/contact?service=${encodeURIComponent(title)}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        {/* ========================================================================= */}
        {/* 1. BREADCRUMB NAVIGATION                                                  */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 font-medium">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-600 transition-colors font-medium text-slate-600"
                >
                  {isDe ? "Startseite" : "Home"}
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-orange-600 transition-colors font-medium text-slate-600"
                >
                  {isDe ? "Leistungen" : "Services"}
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li
                className="text-slate-900 font-bold truncate max-w-xs sm:max-w-md"
                aria-current="page"
              >
                {title}
              </li>
            </ol>
          </nav>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO SECTION (Matching Homepage Hero Headline & Body Typography)      */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-xs font-bold tracking-wider uppercase mb-5 shadow-2xs">
                <ServiceIcon className="w-3.5 h-3.5 text-orange-600" />
                <span>{badge}</span>
              </div>

              {/* Unique H1 with Target Keyword (Homepage Hero Headline Size: 35px -> 55px -> 60px) */}
              <h1 className="text-[35px] sm:text-[55px] lg:text-[60px] font-[900] text-[#0F172A] tracking-tight leading-[1.08] sm:leading-[1.09] mb-5 sm:mb-6">
                {h1}
              </h1>

              {/* Introductory Copy (Homepage Subtext Size: 17px -> 19px) */}
              <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                {intro}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-9 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>{isDe ? "Kostenlose Beratung anfragen" : "Get a Free Consultation"}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-slate-300/80 bg-white/90 backdrop-blur-xs text-slate-800 text-sm sm:text-base font-bold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-slate-500" />
                  <span>{isDe ? "Unsere Arbeiten" : "View Our Work"}</span>
                </Link>
              </div>

              {/* Modern Trust Indicators (Homepage Trust Indicator Size: 14px -> 16px) */}
              <div className="w-full pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-4 sm:gap-8 text-[14px] sm:text-[16px] font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{isDe ? "Individuelle Lösungen" : "Custom Architecture"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{isDe ? "100% DSGVO-konform" : "100% GDPR Compliant"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{isDe ? "Transparente Festpreise" : "Transparent Pricing"}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100">
                <Image
                  src={service.heroImage}
                  alt={`${title} - Nexa Solutions`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-slate-200 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <ServiceIcon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="text-[14px] sm:text-[15px] font-bold text-slate-900">{title}</div>
                      <div className="text-[12px] sm:text-[13px] text-slate-500">
                        {isDe ? "Full-Stack Umsetzung durch Nexa Solutions" : "Engineered by Nexa Solutions"}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    {isDe ? "Aktiv" : "Active"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. BUSINESS CHALLENGES (Homepage Section Heading: 30px -> 45px -> 50px)   */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="max-w-4xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-200/80 bg-red-50 text-red-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>{isDe ? "HERAUSFORDERUNGEN IN DER PRAXIS" : "OPERATIONAL CHALLENGES"}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3">
              {isDe
                ? `Typische Hürden, die wir mit ${title} lösen`
                : `Key Challenges Resolved by ${title}`}
            </h2>
            <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed font-normal">
              {isDe
                ? "Ohne maßgeschneiderte Lösungen stoßen Standard-Tools und manuelle Prozesse schnell an ihre Grenzen."
                : "Without tailored digital architectures, manual processes and generic tools quickly create critical bottlenecks."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {challenges.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[5px] border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xs font-black mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-slate-900 mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. OUR SOLUTION                                                           */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white rounded-2xl p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-wider uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>{isDe ? "UNSER LÖSUNGSANSATZ" : "OUR SOLUTION"}</span>
              </div>

              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] tracking-tight leading-[1.10] sm:leading-[1.09] mb-4 text-white">
                {solution.title}
              </h2>

              <p className="text-[17px] sm:text-[19px] text-slate-300 leading-relaxed mb-8 font-normal max-w-3xl">
                {solution.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {solution.points.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. KEY FEATURES (Homepage 20 Specialized Grid Card Typography)            */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="max-w-4xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Layers className="w-3.5 h-3.5" />
              <span>{isDe ? "FUNKTIONSÜBERSICHT" : "FEATURE HIGHLIGHTS"}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3">
              {isDe
                ? `Leistungsmerkmale & Module im Detail`
                : `Key Capabilities & Architectural Modules`}
            </h2>
            <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed font-normal">
              {isDe
                ? "Jede Komponente wird passgenau auf Ihre Geschäftsanforderungen abgestimmt und kontinuierlich gepflegt."
                : "Every module is engineered to your operational scale and maintained with performance-first code."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="bg-white rounded-[5px] border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{fIdx + 1}
                    </span>
                    {feat.scopeBadge && (
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          feat.scopeBadge.includes("Projekt") ||
                          feat.scopeBadge.includes("Project")
                            ? "bg-amber-50 text-amber-700 border border-amber-200/80"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
                        }`}
                      >
                        {feat.scopeBadge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-slate-900 mb-2.5 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. BENEFITS FOR BUSINESSES                                                */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10 lg:p-12">
            <div className="max-w-4xl mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <Zap className="w-3.5 h-3.5" />
                <span>{isDe ? "GESCHÄFTLICHER MEHRWERT" : "BUSINESS BENEFITS"}</span>
              </div>
              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3">
                {isDe
                  ? `Wie Ihr Unternehmen messbar profitiert`
                  : `Tangible Advantages for Your Organization`}
              </h2>
              <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed font-normal">
                {isDe
                  ? "Klare Resultate: Mehr Effizienz, geringere Betriebskosten und zufriedenere Kunden."
                  : "Clear outcomes: Boosted operational speed, diminished overhead, and heightened customer trust."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {benefits.map((b, bIdx) => (
                <div
                  key={bIdx}
                  className="bg-white rounded-[5px] border border-slate-200/80 p-6 sm:p-7 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h3 className="text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-slate-900 mb-2.5 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. PROCESS / WORKFLOW                                                     */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="max-w-4xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50 text-orange-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Clock className="w-3.5 h-3.5" />
              <span>{isDe ? "STRUKTURIERTER ABLAUF" : "IMPLEMENTATION WORKFLOW"}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3">
              {isDe
                ? `Vom Erstgespräch bis zum Produktivstart`
                : `From Discovery to Production Launch`}
            </h2>
            <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed font-normal">
              {isDe
                ? "Unser 5-Phasen-Modell garantiert transparente Meilensteine, pünktliche Umsetzung und verlässliche Budgets."
                : "Our 5-phase execution model ensures predictable roadmaps, punctual milestones, and fixed budgets."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {workflow.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[5px] border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-xs">
                    {step.step}
                  </div>
                  <h3 className="text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5 font-normal">
                    {step.description}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-orange-600 uppercase block tracking-wider mb-0.5">
                    {isDe ? "Ergebnis:" : "Deliverable:"}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-slate-800">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. USE CASES                                                              */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="max-w-4xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/80 bg-purple-50 text-purple-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Users className="w-3.5 h-3.5" />
              <span>{isDe ? "TYPISCHE ANWENDUNGSFÄLLE" : "TARGET USE CASES"}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3">
              {isDe
                ? `Für welche Branchen sich dieser Service besonders lohnt`
                : `Industries & Teams That Genuinely Benefit`}
            </h2>
            <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed font-normal">
              {isDe
                ? "Maßgeschneidert auf reale Einsatzszenarien für maximale Wirkung."
                : "Engineered around specific real-world operational challenges for maximal market impact."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, uIdx) => (
              <div
                key={uIdx}
                className="bg-white rounded-[5px] border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-purple-700 bg-purple-50 px-3 py-1 rounded-md inline-block mb-3.5">
                    {uc.audience}
                  </span>
                  <h3 className="text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-slate-900 mb-2.5 leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    {uc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. REAL PROJECTS / CASE STUDIES (Only genuine data from allProjects)      */}
        {/* ========================================================================= */}
        {matchingProjects.length > 0 && (
          <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50 text-orange-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{isDe ? "ECHTE REFERENZEN" : "REAL CASE STUDIES"}</span>
                </div>
                <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09]">
                  {isDe
                    ? `Realisierte Kundenprojekte`
                    : `Verified Client Projects Delivered`}
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-orange-600 hover:text-orange-700"
              >
                <span>{isDe ? "Alle Referenzen ansehen" : "View all projects"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {matchingProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="group bg-white rounded-[5px] border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[19px] sm:text-[21px] font-bold text-slate-900">
                          {proj.title}
                        </span>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200/70">
                          {isDe ? proj.categoryDe : proj.categoryEn}
                        </span>
                      </div>
                      <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-5">
                        {isDe ? proj.descriptionDe : proj.descriptionEn}
                      </p>
                    </div>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-orange-600 hover:text-orange-700 pt-3.5 border-t border-slate-100"
                      >
                        <span>{isDe ? "Projekt ansehen" : "Visit Website"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 10. CONTEXTUAL INTERNAL LINKS: BLOG GUIDES                                */}
        {/* ========================================================================= */}
        {matchingBlogs.length > 0 && (
          <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
            <div className="max-w-4xl mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isDe ? "FACHWISSEN & RATGEBER" : "INSIGHTS & GUIDES"}</span>
              </div>
              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09]">
                {isDe ? "Weiterführende Artikel zu diesem Thema" : "Related Technical Guides"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {matchingBlogs.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-[5px] border border-slate-200/90 p-6 shadow-2xs hover:border-orange-400 hover:shadow-lg transition-all group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug mb-1.5">
                      {isDe ? post.titleDe : post.titleEn}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 line-clamp-2 leading-relaxed font-normal">
                      {isDe ? post.excerptDe : post.excerptEn}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 11. FAQ ACCORDION (Matching Homepage FaqSection Typography: 17px/16px)    */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="max-w-4xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>{isDe ? "HÄUFIG GESTELLTE FRAGEN" : "FREQUENTLY ASKED QUESTIONS"}</span>
            </div>
            <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3">
              {isDe ? `Fragen & Antworten zu ${title}` : `FAQ on ${title}`}
            </h2>
            <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed font-normal">
              {isDe
                ? "Hier finden Sie transparente Antworten auf die wichtigsten Fragen rund um Ablauf, Technik und Budget."
                : "Transparent answers to the most critical technical and operational questions regarding your project."}
            </p>
          </div>

          <div className="max-w-4xl space-y-4 mb-12">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className={`rounded-[5px] border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-slate-50/80 border-orange-300/80 shadow-xs"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] sm:text-[17px] font-bold text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-orange-500 text-white rotate-180"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[13px] sm:text-[16px] text-slate-600 leading-relaxed border-t border-slate-100/60 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. FINAL CONSULTATION CTA BANNER (Matching Homepage CtaBanner Typography)*/}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[5px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Subtle background ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <span className="text-xs font-bold tracking-wider uppercase text-orange-400 block mb-3.5">
                {isDe ? "PROJEKT UNVERBINDLICH ANFRAGEN" : "DISCUSS YOUR REQUIREMENTS"}
              </span>

              <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-white tracking-tight leading-[1.10] sm:leading-[1.09] mb-4">
                {isDe
                  ? `Bereit für Ihr Projekt im Bereich ${title}?`
                  : `Ready to Launch Your ${title} Project?`}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
                {isDe
                  ? "Sprechen Sie direkt mit unseren Entwicklern und Lösungsarchitekten. Wir analysieren Ihre Anforderungen und erstellen innerhalb von 24 Stunden einen verbindlichen Festpreis-Kostenvoranschlag und Zeitplan."
                  : "Consult directly with our software architects. We analyze your requirements and deliver a transparent fixed-price roadmap and timeline estimate within 24 hours."}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#C2410C] hover:to-[#EA580C] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>{isDe ? "Kostenlose Beratung anfragen" : "Get a Free Consultation"}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-slate-600 bg-white/10 hover:bg-white/15 text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>{isDe ? "Kontakt aufnehmen" : "Contact Us"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Consultation Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={title}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
