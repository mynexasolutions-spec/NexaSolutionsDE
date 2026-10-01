"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Globe, Smartphone, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServicesSectionProps {
  onSelectService: (serviceKey: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const { t } = useLanguage();

  const services = [
    {
      id: "web-dev",
      href: "/services/web-development",
      badgeIcon: Globe,
      iconColor: "text-blue-600",
      checkBg: "bg-blue-600",
      buttonGradient: "from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-blue-500/25",
      hoverColor: "hover:text-blue-600",
      title: t("Website-Entwicklung", "Website Development"),
      description: t(
        "Moderne, schnelle und SEO-freundliche Websites, die Ihre Marke stärken und Besucher in Kunden verwandeln.",
        "Modern, fast and SEO-friendly websites that help you grow your brand and convert visitors into customers."
      ),
      image: "/images/web-dev.png",
      points: [
        t("Business-Websites", "Business Websites"),
        t("E-Commerce-Websites", "Ecommerce Websites"),
        t("Web-Applikationen", "Custom Web Applications"),
        t("SEO & Performance-Optimierung", "SEO & Performance Optimization"),
      ],
    },
    {
      id: "app-dev",
      href: "/services/mobile-app-development",
      badgeIcon: Smartphone,
      iconColor: "text-orange-500",
      checkBg: "bg-orange-500",
      buttonGradient: "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-500/25",
      hoverColor: "hover:text-orange-600",
      title: t("Mobile-App-Entwicklung", "Mobile App Development"),
      description: t(
        "Skalierbare und benutzerfreundliche mobile Apps für Android und iOS, die Ihre Ideen zum Leben erwecken.",
        "Scalable and user-friendly mobile apps for Android and iOS to bring your ideas to life."
      ),
      image: "/images/app-dev.png",
      points: [
        t("Android & iOS Apps", "Android & iOS Apps"),
        t("Cross-Platform-Entwicklung", "Cross-platform Development"),
        t("UI/UX-Design", "UI/UX Design"),
        t("App-Wartung & Support", "App Maintenance & Support"),
      ],
    },
    {
      id: "ai-auto",
      href: "/services/ai-automation",
      badgeIcon: Sparkles,
      iconColor: "text-purple-600",
      checkBg: "bg-purple-600",
      buttonGradient: "from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/25",
      hoverColor: "hover:text-purple-600",
      title: t("KI-Automatisierung & n8n Workflows", "AI Automation & n8n Workflows"),
      description: t(
        "Automatisieren Sie Ihre Geschäftsprozesse mit KI-Agenten und individuellen Workflows, um Zeit zu sparen und manuelle Arbeit zu reduzieren.",
        "Automate your business processes with AI agents and custom workflows to save time and reduce manual work."
      ),
      image: "/images/ai-robot.png",
      points: [
        t("n8n Workflow-Automatisierung", "n8n Workflow Automation"),
        t("KI-Agenten & Chatbots", "AI Agents & Chatbots"),
        t("Geschäftsprozess-Automatisierung", "Business Process Automation"),
        t("Datenanalyse & Insights", "Data Analysis & Insights"),
      ],
    },
  ];

  return (
    <section id="services" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Ambient Decorative Lights & Dots */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-14 right-1/4 w-80 h-80 bg-purple-100/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-16 left-10 w-24 h-24 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-25 pointer-events-none hidden md:block" />

      {/* Decorative Hand-drawn Arrow on the Right */}
      <div className="absolute top-16 right-12 w-20 h-20 text-blue-300/40 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 80" fill="none" className="w-full h-full stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 65 C 35 40, 60 70, 80 25" />
          <path d="M68 22 L 80 25 L 82 37" />
        </svg>
      </div>

      <div className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <span className="text-orange-500 font-bold">⚡</span>
            <span>{t("UNSERE LEISTUNGEN", "OUR SERVICES")}</span>
          </div>

          {/* Heading with Modern Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-[1.36] mb-4" style={{ lineHeight: "1.15" }}>
            {t("Digitale Komplettlösungen für", "Full Stack Digital Solutions for")}{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t("moderne Unternehmen", "Modern Businesses")}
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-[17px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t(
              "Von der Idee bis zur Umsetzung bieten wir End-to-End-Lösungen für Aufbau, Automatisierung und Skalierung Ihres Unternehmens.",
              "From idea to implementation, we provide end-to-end solutions to help you build, automate and scale your business."
            )}
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="max-w-[1420px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.badgeIcon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-[5px] overflow-hidden border border-slate-200/80 shadow-[0_8px_25px_-12px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between max-w-lg mx-auto md:max-w-none w-full"
              >
                {/* Visual Top Preview (Compact Height Aspect Ratio) */}
                <div className="relative aspect-[16.5/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Service Badge */}
                  <div className="absolute top-3.5 left-3.5 w-9 h-9 rounded-[5px] bg-white/95 backdrop-blur-md shadow-sm border border-slate-200/80 flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Card Body (Compact Spacing & Typography) */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className={`text-lg sm:text-[22px] font-bold text-slate-900 mb-3 ${service.hoverColor} transition-colors`}>
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Bullet Points (Compact Gap) */}
                    <div className="space-y-3.5 mb-5">
                      {service.points.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-[14px] text-slate-700 font-medium">
                          <div className={`w-3.5 h-3.5 rounded-full ${service.checkBg} text-white flex items-center justify-center shrink-0 shadow-2xs`}>
                            <Check className="w-2 h-2 stroke-[3]" />
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Pill Button + View Page Link */}
                  <div className="flex items-center justify-between gap-2.5 pt-3.5 border-t border-slate-100">
                    <button
                      onClick={() => onSelectService(service.id)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-[5px] bg-gradient-to-r ${service.buttonGradient} text-white text-xs sm:text-[13px] font-bold shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer`}
                    >
                      <span>{t("Mehr erfahren", "Learn More")}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-1 text-xs sm:text-[13px] font-semibold text-slate-700 ${service.hoverColor} transition-colors group/link`}
                    >
                      <span>{t("Seite ansehen", "View Page")}</span>
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
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
