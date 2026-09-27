"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Smartphone, Bot } from "lucide-react";
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
      title: t("Website-Entwicklung", "Website Development"),
      description: t(
        "Moderne, schnelle und SEO-freundliche Websites, die Ihre Marke stärken und Besucher in Kunden verwandeln.",
        "Modern, fast and SEO-friendly websites that help you grow your brand and convert visitors into customers."
      ),
      image: "/images/web-dev.jpg",
      points: [
        t("Business-Websites", "Business Websites"),
        t("E-Commerce-Websites", "Ecommerce Websites"),
        t("Web-Applikationen", "Custom Web Applications"),
        t("SEO & Performance", "SEO & Performance Optimization"),
      ],
    },
    {
      id: "app-dev",
      href: "/services/mobile-app-development",
      badgeIcon: Smartphone,
      title: t("Mobile-App-Entwicklung", "Mobile App Development"),
      description: t(
        "Skalierbare und benutzerfreundliche mobile Apps für Android und iOS, die Ihre Ideen zum Leben erwecken.",
        "Scalable and user-friendly mobile apps for Android and iOS to bring your ideas to life."
      ),
      image: "/images/app-dev.jpg",
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
      badgeIcon: Bot,
      title: t("KI-Automatisierung & n8n Workflows", "AI Automation & n8n Workflows"),
      description: t(
        "Automatisieren Sie Ihre Geschäftsprozesse mit KI-Agenten und individuellen Workflows, um Zeit zu sparen und manuelle Arbeit zu reduzieren.",
        "Automate your business processes with AI agents and custom workflows to save time and reduce manual work."
      ),
      image: "/images/ai-robot.jpg",
      points: [
        t("n8n Workflow-Automatisierung", "n8n Workflow Automation"),
        t("KI-Agenten & Chatbots", "AI Agents & Chatbots"),
        t("Geschäftsprozess-Automatisierung", "Business Process Automation"),
        t("Datenanalyse & Insights", "Data Analysis & Insights"),
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
              <span className="text-orange-500">⚡</span>
              <span>{t("UNSERE LEISTUNGEN", "OUR SERVICES")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
              {t(
                "Digitale Komplettlösungen für moderne Unternehmen",
                "Full Stack Digital Solutions for Modern Businesses"
              )}
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md lg:text-right">
            {t(
              "Von der Idee bis zur Umsetzung bieten wir End-to-End-Lösungen für Aufbau, Automatisierung und Skalierung Ihres Unternehmens.",
              "From idea to implementation, we provide end-to-end solutions to help you build, automate and scale your business."
            )}
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.badgeIcon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col"
              >
                {/* Visual Top Preview */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />

                  {/* Floating Service Badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-orange-600">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2.5 mb-8">
                      {service.points.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors cursor-pointer"
                    >
                      <span>{t("Mehr erfahren", "Learn More")}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <span className="text-slate-200">|</span>
                    <Link
                      href={service.href}
                      className="text-xs font-semibold text-slate-500 hover:text-orange-600 transition-colors"
                    >
                      {t("Seite ansehen →", "View Page →")}
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
