"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      image: "/images/aura-masale.jpg",
    },
    {
      id: "meagle360",
      title: "Meagle360 HRMS",
      categoryDe: "SaaS-Plattform",
      categoryEn: "SaaS Platform",
      image: "/images/meagle-laptop.jpg",
    },
    {
      id: "taibeena",
      title: "Taibeena",
      categoryDe: "E-Commerce Website",
      categoryEn: "Ecommerce Website",
      image: "/images/taibeena.jpg",
    },
    {
      id: "easyway-germany",
      title: "EasywayGermany",
      categoryDe: "Bildungsberatung",
      categoryEn: "Education Consultancy",
      image: "/images/easyway-germany.jpg",
    },
  ];

  return (
    <section id="work" className="py-20 md:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and View All Projects Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-orange-600 text-xs font-bold tracking-wider uppercase mb-2.5">
              <span className="text-orange-500">⚡</span>
              <span>{t("UNSERE PROJEKTE", "OUR WORK")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              {t("Einige unserer neuesten Projekte", "Some of Our Latest Projects")}
            </h2>
          </div>

          <button
            onClick={onViewAllProjects}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
          >
            <span>{t("Alle Projekte ansehen", "View All Projects")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Bottom Meta */}
              <div className="p-4 flex items-center justify-between border-t border-slate-100 bg-white">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t(project.categoryDe, project.categoryEn)}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full border border-blue-200/80 bg-blue-50/50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
