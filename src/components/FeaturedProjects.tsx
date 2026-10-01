"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShoppingCart, BarChart3, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturedProjectsProps {
  onSelectProject: (projectKey: string) => void;
  onViewAllProjects: () => void;
}

export default function FeaturedProjects({
  onSelectProject,
  onViewAllProjects,
}: FeaturedProjectsProps) {
  const { t } = useLanguage();

  const projects = [
    {
      id: "aura-masale",
      title: "Aura Masale",
      categoryDe: "E-Commerce Website",
      categoryEn: "Ecommerce Website",
      badgeIcon: ShoppingCart,
      badgeText: t("E-Commerce", "Ecommerce"),
      image: "/images/aura-masale.jpg",
      highlightBorder: "border-orange-200/90 hover:border-orange-400 shadow-[0_12px_30px_rgba(249,115,22,0.06)]",
      tags: [
        { de: "Webdesign", en: "Web Design", color: "bg-orange-50/90 text-orange-700 border-orange-100/80" },
        { de: "Entwicklung", en: "Development", color: "bg-orange-50/90 text-orange-700 border-orange-100/80" },
        { de: "E-Commerce", en: "Ecommerce", color: "bg-orange-50/90 text-orange-700 border-orange-100/80" },
      ],
    },
    {
      id: "meagle360",
      title: "Meagle360 HRMS",
      categoryDe: "SaaS-Plattform",
      categoryEn: "SaaS Platform",
      badgeIcon: BarChart3,
      badgeText: "SaaS",
      image: "/images/meagle-laptop.jpg",
      highlightBorder: "border-slate-200/90 hover:border-blue-300 shadow-[0_12px_30px_rgba(15,23,42,0.04)]",
      tags: [
        { de: "UI/UX", en: "UI/UX", color: "bg-blue-50/90 text-blue-700 border-blue-100/80" },
        { de: "Web App", en: "Web App", color: "bg-blue-50/90 text-blue-700 border-blue-100/80" },
        { de: "Dashboard", en: "Dashboard", color: "bg-blue-50/90 text-blue-700 border-blue-100/80" },
      ],
    },
    {
      id: "taibeena",
      title: "Taibeena",
      categoryDe: "E-Commerce Website",
      categoryEn: "Ecommerce Website",
      badgeIcon: ShoppingCart,
      badgeText: t("E-Commerce", "Ecommerce"),
      image: "/images/taibeena.jpg",
      highlightBorder: "border-slate-200/90 hover:border-orange-300 shadow-[0_12px_30px_rgba(15,23,42,0.04)]",
      tags: [
        { de: "UI/UX", en: "UI/UX", color: "bg-orange-50/90 text-orange-700 border-orange-100/80" },
        { de: "Entwicklung", en: "Development", color: "bg-orange-50/90 text-orange-700 border-orange-100/80" },
        { de: "E-Commerce", en: "Ecommerce", color: "bg-orange-50/90 text-orange-700 border-orange-100/80" },
      ],
    },
    {
      id: "easyway-germany",
      title: "EasywayGermany",
      categoryDe: "Bildungsberatung",
      categoryEn: "Education Consultancy",
      badgeIcon: GraduationCap,
      badgeText: t("Bildung", "Education"),
      image: "/images/easyway-germany.jpg",
      highlightBorder: "border-slate-200/90 hover:border-blue-300 shadow-[0_12px_30px_rgba(15,23,42,0.04)]",
      tags: [
        { de: "Webdesign", en: "Web Design", color: "bg-blue-50/90 text-blue-700 border-blue-100/80" },
        { de: "Entwicklung", en: "Development", color: "bg-blue-50/90 text-blue-700 border-blue-100/80" },
        { de: "Beratung", en: "Consultancy", color: "bg-blue-50/90 text-blue-700 border-blue-100/80" },
      ],
    },
  ];

  return (
    <section
      id="work"
      className="py-10 sm:py-12 lg:py-16 bg-[#FCFCFD] relative overflow-hidden border-b border-slate-100"
    >
      {/* Background Organic Ambient Gradient Waves (Matching Reference Image) */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.16) 0%, rgba(254,215,170,0.1) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full pointer-events-none opacity-45 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(191,219,254,0.1) 50%, transparent 70%)",
        }}
      />

      {/* Decorative Dot Matrix on Left & Right Edges */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-4 gap-2.5 opacity-30 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-4 gap-2.5 opacity-30 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      <div className="w-full max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section: Centered on Mobile, Row on Desktop */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Small Orange Label */}
            <div className="inline-flex items-center gap-1.5 text-orange-500 text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-2 sm:mb-2.5">
              <span className="text-orange-500">⚡</span>
              <span>{t("UNSERE PROJEKTE", "OUR WORK")}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0B132B] tracking-tight leading-[1.15]">
              {t("Einige unserer neuesten Projekte", "Some of Our Latest Projects")}
            </h2>

            {/* Subtext Below Headline */}
            <p className="text-slate-500 text-sm sm:text-base font-normal mt-2 leading-relaxed">
              {t(
                "Echte Projekte. Echte Ergebnisse. Entwickelt mit modernen Lösungen.",
                "Real projects. Real results. Crafted with modern solutions."
              )}
            </p>
          </div>

          {/* View All Projects Pill Button */}
          <div className="flex justify-center sm:justify-end shrink-0">
            <button
              onClick={onViewAllProjects}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 text-xs sm:text-sm font-semibold shadow-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
            >
              <span>{t("Alle Projekte ansehen", "View All Projects")}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Projects Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6">
          {projects.map((project) => {
            const BadgeIcon = project.badgeIcon;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className={`group bg-white rounded-[5px] overflow-hidden border ${project.highlightBorder} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col cursor-pointer`}
              >
                {/* Image Preview Container with Floating Category Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Top-Left Category Badge (Frosted Glass Pill) */}
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-[5px] bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold shadow-sm">
                    <BadgeIcon className="w-3.5 h-3.5" />
                    <span>{project.badgeText}</span>
                  </div>
                </div>

                {/* Card Body: Title, Subtitle, Arrow Button, and Tag Pills */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                  {/* Title, Subtitle & Arrow Circle Button */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0B132B] group-hover:text-blue-600 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-normal">
                        {t(project.categoryDe, project.categoryEn)}
                      </p>
                    </div>

                    {/* Circular Arrow Button */}
                    <div className="w-9 h-9 rounded-full bg-blue-50/80 border border-blue-100/80 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0 shadow-2xs">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom Tag Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${tag.color}`}
                      >
                        {t(tag.de, tag.en)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
