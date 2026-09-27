"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamSection() {
  const { t } = useLanguage();

  const team = [
    {
      name: "Talal Mando",
      roleDe: "Gründer & CEO",
      roleEn: "Founder & CEO",
      initials: "TM",
      gradient: "from-orange-500 to-amber-400",
      bioDe: "Visionäre Führungskraft für die digitale Transformation von Unternehmen.",
      bioEn: "Visionary leader driving digital transformation for businesses across industries.",
      linkedin: "#",
    },
    {
      name: "Ahmed Raza",
      roleDe: "Leitender Entwickler",
      roleEn: "Lead Developer",
      initials: "AR",
      gradient: "from-blue-500 to-cyan-400",
      bioDe: "Full-Stack-Architekt spezialisiert auf hochskalierbare Web- und Mobilanwendungen.",
      bioEn: "Full-stack architect specializing in scalable web and mobile applications.",
      linkedin: "#",
    },
    {
      name: "Sara Khan",
      roleDe: "UI/UX Designerin",
      roleEn: "UI/UX Designer",
      initials: "SK",
      gradient: "from-purple-500 to-pink-400",
      bioDe: "Entwirft intuitive, ästhetische Nutzeroberflächen mit erstklassiger Usability.",
      bioEn: "Creating intuitive, beautiful interfaces that users love to interact with.",
      linkedin: "#",
    },
    {
      name: "Mohd Faisal",
      roleDe: "KI-Ingenieur",
      roleEn: "AI Engineer",
      initials: "MF",
      gradient: "from-emerald-500 to-teal-400",
      bioDe: "Entwicklung intelligenter Automatisierungslösungen und maßgeschneiderter KI-Modelle.",
      bioEn: "Building intelligent automation solutions and custom AI integrations.",
      linkedin: "#",
    },
  ];

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold tracking-wider uppercase mb-3">
            {t("UNSER TEAM", "OUR TEAM")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t("Die Köpfe hinter Nexa", "Meet the Minds Behind Nexa")}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {t(
              "Ein leidenschaftliches Team aus Entwicklern, Designern und Strategen, das außergewöhnliche digitale Produkte schafft.",
              "A passionate team of developers, designers and strategists dedicated to building exceptional digital products."
            )}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} text-white font-black text-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rounded-xl transition-all duration-300`}>
                {member.initials}
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-orange-500 tracking-wider uppercase mb-3">
                {t(member.roleDe, member.roleEn)}
              </p>

              {/* Bio */}
              <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                {t(member.bioDe, member.bioEn)}
              </p>

              {/* Social Link */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
                aria-label={`${member.name} LinkedIn`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
