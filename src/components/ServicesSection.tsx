"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  Sparkles,
  Users,
  Coins,
  ShoppingCart,
  GraduationCap,
  Music2,
  Megaphone,
  BarChart3,
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
import { useLanguage } from "@/context/LanguageContext";

interface ServicesSectionProps {
  onSelectService?: (serviceKey: string) => void;
  onOpenContact?: (serviceName?: string) => void;
}

export default function ServicesSection({
  onSelectService,
  onOpenContact,
}: ServicesSectionProps) {
  const { t } = useLanguage();

  // 1. Original 3 Flagship Services with Full Showcase & Dedicated Page Links
  const mainServices = [
    {
      id: "web-dev",
      href: "/services/web-development",
      badgeIcon: Globe,
      iconColor: "text-blue-600",
      checkBg: "bg-blue-600",
      buttonGradient:
        "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-500/25",
      hoverColor: "hover:text-blue-600",
      title: t("Website-Entwicklung", "Website Development"),
      description: t(
        "Moderne, schnelle und SEO-freundliche Websites, die Ihre Marke stärken und Besucher in Kunden verwandeln.",
        "Modern, fast and SEO-friendly websites that help you grow your brand and convert visitors into customers."
      ),
      image: "/images/web-dev.png",
      imageAlt: t(
        "Website Development Services - Business Website erstellen lassen mit Next.js",
        "Website Development Services - Custom coded business websites with Next.js"
      ),
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
      buttonGradient:
        "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-500/25",
      hoverColor: "hover:text-orange-600",
      title: t("Mobile-App-Entwicklung", "Mobile App Development"),
      description: t(
        "Skalierbare und benutzerfreundliche mobile Apps für Android und iOS, die Ihre Ideen zum Leben erwecken.",
        "Scalable and user-friendly mobile apps for Android and iOS to bring your ideas to life."
      ),
      image: "/images/app-dev.png",
      imageAlt: t(
        "Mobile Application Development - Custom iOS & Android App entwickeln lassen",
        "Mobile Application Development - Custom iOS and Android apps with React Native"
      ),
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
      buttonGradient:
        "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-500/25",
      hoverColor: "hover:text-purple-600",
      title: t("KI-Automatisierung & n8n Workflows", "AI Automation & n8n Workflows"),
      description: t(
        "Automatisieren Sie Ihre Geschäftsprozesse mit KI-Agenten und individuellen Workflows, um Zeit zu sparen und manuelle Arbeit zu reduzieren.",
        "Automate your business processes with AI agents and custom workflows to save time and reduce manual work."
      ),
      image: "/images/ai-robot.png",
      imageAlt: t(
        "KI Automatisierung & n8n Workflows für Unternehmen - Prozessautomatisierung",
        "AI Automation & n8n Workflows for Businesses - Process Automation"
      ),
      points: [
        t("n8n Workflow-Automatisierung", "n8n Workflow Automation"),
        t("KI-Agenten & Chatbots", "AI Agents & Chatbots"),
        t("Geschäftsprozess-Automatisierung", "Business Process Automation"),
        t("Datenanalyse & Insights", "Data Analysis & Insights"),
      ],
    },
  ];

  // 2. Comprehensive 20 Specialized Digital Solutions Grid (Exact reference layout)
  const specializedServices = [
    // ROW 1
    {
      id: "employee-tracking",
      icon: Users,
      iconColor: "text-[#2563EB]",
      iconContainerBg: "bg-[#DBEAFE]/80 text-[#2563EB]",
      cardBg: "bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white",
      borderColor: "border-[#BFDBFE]/70",
      hoverBorder: "hover:border-[#3B82F6]/60 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.15)]",
      watermarkColor: "text-[#3B82F6]",
      title: t("Mitarbeiter- & Zeiterfassung", "Employee & Attendance Tracking"),
      description: t(
        "Vollständige HR-, Anwesenheits-, Urlaubs- und Leistungsüberwachungslösungen.",
        "Complete HR, attendance, leave management and performance tracking solutions."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <circle cx="60" cy="32" r="15" />
          <path d="M36 78 C36 58, 84 58, 84 78 Z" />
          <circle cx="28" cy="40" r="11" opacity="0.6" />
          <path d="M10 78 C10 63, 46 63, 46 78 Z" opacity="0.6" />
          <circle cx="92" cy="40" r="11" opacity="0.6" />
          <path d="M74 78 C74 63, 110 63, 110 78 Z" opacity="0.6" />
        </svg>
      ),
    },
    {
      id: "custom-financial",
      icon: Coins,
      iconColor: "text-[#EA580C]",
      iconContainerBg: "bg-[#FFEDD5]/80 text-[#EA580C]",
      cardBg: "bg-gradient-to-br from-[#FFF7ED] via-[#FAFAF9] to-white",
      borderColor: "border-[#FED7AA]/70",
      hoverBorder: "hover:border-[#EA580C]/60 hover:shadow-[0_12px_30px_-10px_rgba(234,88,12,0.15)]",
      watermarkColor: "text-[#F97316]",
      title: t("Individuelle Finanzsysteme", "Custom Financial Systems"),
      description: t(
        "Buchhaltungs-, Abrechnungs-, Gehalts- und Unternehmensverwaltungslösungen für Ihre Anforderungen.",
        "Accounting, invoicing, payroll and business management solutions tailored to your needs."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <path d="M25 15 L70 15 L95 40 L95 85 L25 85 Z" opacity="0.45" />
          <path d="M70 15 L70 40 L95 40 Z" opacity="0.75" />
          <rect x="35" y="48" width="50" height="4" rx="2" opacity="0.8" />
          <rect x="35" y="58" width="36" height="4" rx="2" opacity="0.8" />
          <path d="M38 76 L52 64 L65 72 L82 56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
        </svg>
      ),
    },
    {
      id: "ecommerce-stores",
      icon: ShoppingCart,
      iconColor: "text-[#7C3AED]",
      iconContainerBg: "bg-[#EDE9FE]/80 text-[#7C3AED]",
      cardBg: "bg-gradient-to-br from-[#F5F3FF] via-[#FAF5FF] to-white",
      borderColor: "border-[#DDD6FE]/70",
      hoverBorder: "hover:border-[#7C3AED]/60 hover:shadow-[0_12px_30px_-10px_rgba(124,58,237,0.15)]",
      watermarkColor: "text-[#8B5CF6]",
      title: t("E-Commerce-Shops", "E-commerce Stores"),
      description: t(
        "Erstellen Sie Onlineshops mit sicheren Zahlungen, Produktverwaltung und optimalem Einkaufserlebnis.",
        "Create online stores with secure payments, product management and a smooth shopping experience."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <path d="M20 28 L100 28 L94 48 C94 53, 86 53, 86 48 C86 53, 78 53, 78 48 C78 53, 70 53, 70 48 C70 53, 62 53, 62 48 C62 53, 54 53, 54 48 C54 53, 46 53, 46 48 C46 53, 38 53, 38 48 C38 53, 30 53, 30 48 C30 53, 26 53, 26 48 Z" opacity="0.5" />
          <rect x="30" y="48" width="60" height="34" rx="2" opacity="0.35" />
          <rect x="42" y="58" width="16" height="24" rx="2" opacity="0.75" />
          <rect x="64" y="58" width="16" height="14" rx="2" opacity="0.75" />
        </svg>
      ),
    },
    {
      id: "coaching-portfolio",
      icon: GraduationCap,
      iconColor: "text-[#059669]",
      iconContainerBg: "bg-[#D1FAE5]/80 text-[#059669]",
      cardBg: "bg-gradient-to-br from-[#ECFDF5] via-[#F0FDF4] to-white",
      borderColor: "border-[#A7F3D0]/70",
      hoverBorder: "hover:border-[#059669]/60 hover:shadow-[0_12px_30px_-10px_rgba(5,150,105,0.15)]",
      watermarkColor: "text-[#10B981]",
      title: t("Coaching- & Künstler-Portfolios", "Coaching & Artist Portfolios"),
      description: t(
        "Portfolio-Websites für Coaches, Trainer, Künstler und Kreative zur Präsentation ihrer Arbeiten und Events.",
        "Portfolio websites for coaches, trainers, artists and creators to showcase their work and events."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <path d="M60 18 C35 18, 18 35, 18 58 C18 78, 38 86, 52 86 C64 86, 70 78, 80 78 C88 78, 98 84, 104 74 C110 64, 102 52, 102 46 C102 30, 84 18, 60 18 Z" opacity="0.4" />
          <circle cx="86" cy="62" r="6" fill="white" opacity="0.9" />
          <circle cx="40" cy="38" r="5" opacity="0.8" />
          <circle cx="58" cy="32" r="5" opacity="0.8" />
          <circle cx="76" cy="38" r="5" opacity="0.8" />
          <circle cx="34" cy="56" r="5" opacity="0.8" />
        </svg>
      ),
    },

    // ROW 2
    {
      id: "web-dev",
      icon: Globe,
      iconColor: "text-[#E11D48]",
      iconContainerBg: "bg-[#FFE4E6]/80 text-[#E11D48]",
      cardBg: "bg-gradient-to-br from-[#FFF1F2] via-[#FFF5F5] to-white",
      borderColor: "border-[#FECDD3]/70",
      hoverBorder: "hover:border-[#E11D48]/60 hover:shadow-[0_12px_30px_-10px_rgba(225,29,72,0.15)]",
      watermarkColor: "text-[#F43F5E]",
      title: t("Professionelles Webdesign", "Professional Web Design"),
      description: t(
        "Moderne, responsive und SEO-freundliche Websites für Unternehmen, Marken und Experten.",
        "Modern, responsive and SEO-friendly websites for businesses, brands and professionals."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="18" y="20" width="84" height="62" rx="7" opacity="0.4" />
          <rect x="18" y="20" width="84" height="15" rx="7" opacity="0.75" />
          <circle cx="28" cy="28" r="2.5" fill="white" />
          <circle cx="36" cy="28" r="2.5" fill="white" />
          <circle cx="44" cy="28" r="2.5" fill="white" />
          <rect x="28" y="44" width="30" height="28" rx="3" opacity="0.7" />
          <rect x="64" y="44" width="28" height="6" rx="2" opacity="0.7" />
          <rect x="64" y="54" width="28" height="6" rx="2" opacity="0.7" />
          <rect x="64" y="64" width="18" height="6" rx="2" opacity="0.7" />
        </svg>
      ),
    },
    {
      id: "musician-websites",
      icon: Music2,
      iconColor: "text-[#4F46E5]",
      iconContainerBg: "bg-[#E0E7FF]/80 text-[#4F46E5]",
      cardBg: "bg-gradient-to-br from-[#EEF2FF] via-[#F8F9FF] to-white",
      borderColor: "border-[#C7D2FE]/70",
      hoverBorder: "hover:border-[#4F46E5]/60 hover:shadow-[0_12px_30px_-10px_rgba(79,70,229,0.15)]",
      watermarkColor: "text-[#6366F1]",
      title: t("Websites für Musiker", "Websites for Musicians"),
      description: t(
        "Websites für Alben, Konzerte, Ticketverkauf und Fan-Engagement für Künstler und Bands.",
        "Albums, concerts, tickets and fan engagement websites for artists and bands."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <path d="M42 30 L85 20 L85 64 C81 60, 73 59, 68 62 C61 66, 61 74, 68 78 C75 82, 85 79, 85 71 L85 30 L48 39 L48 70 C44 66, 36 65, 31 68 C24 72, 24 80, 31 84 C38 88, 48 85, 48 77 L48 30 Z" opacity="0.5" />
        </svg>
      ),
    },
    {
      id: "marketing-campaigns",
      icon: Megaphone,
      iconColor: "text-[#EA580C]",
      iconContainerBg: "bg-[#FFEDD5]/80 text-[#EA580C]",
      cardBg: "bg-gradient-to-br from-[#FFF7ED] via-[#FAFAF9] to-white",
      borderColor: "border-[#FED7AA]/70",
      hoverBorder: "hover:border-[#EA580C]/60 hover:shadow-[0_12px_30px_-10px_rgba(234,88,12,0.15)]",
      watermarkColor: "text-[#F97316]",
      title: t("Marketing-Kampagnen", "Marketing Campaigns"),
      description: t(
        "Kreative digitale Marketingkampagnen, um die richtige Zielgruppe zu erreichen und Ihre Marke zu stärken.",
        "Creative digital marketing campaigns to help you reach the right audience and grow your brand."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="25" y="58" width="14" height="26" rx="4" opacity="0.45" />
          <rect x="45" y="44" width="14" height="40" rx="4" opacity="0.6" />
          <rect x="65" y="32" width="14" height="52" rx="4" opacity="0.75" />
          <rect x="85" y="18" width="14" height="66" rx="4" opacity="0.9" />
        </svg>
      ),
    },
    {
      id: "performance-optimization",
      icon: BarChart3,
      iconColor: "text-[#0284C7]",
      iconContainerBg: "bg-[#E0F2FE]/80 text-[#0284C7]",
      cardBg: "bg-gradient-to-br from-[#F0F9FF] via-[#F8FCFF] to-white",
      borderColor: "border-[#BAE6FD]/70",
      hoverBorder: "hover:border-[#0284C7]/60 hover:shadow-[0_12px_30px_-10px_rgba(2,132,199,0.15)]",
      watermarkColor: "text-[#0284C7]",
      title: t("Performance-Optimierung", "Performance Optimization"),
      description: t(
        "Optimieren Sie Website- und Anwendungsgeschwindigkeit für besseres SEO und höhere Conversion-Raten.",
        "Optimize website and application performance for better speed, SEO and higher conversions."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <path d="M26 68 A 42 42 0 1 1 94 68" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.4" />
          <circle cx="60" cy="62" r="7" opacity="0.8" />
          <path d="M60 62 L82 40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
        </svg>
      ),
    },

    // ROW 3
    {
      id: "llm-integration",
      icon: Brain,
      iconColor: "text-[#059669]",
      iconContainerBg: "bg-[#D1FAE5]/80 text-[#059669]",
      cardBg: "bg-gradient-to-br from-[#ECFDF5] via-[#F0FDF4] to-white",
      borderColor: "border-[#A7F3D0]/70",
      hoverBorder: "hover:border-[#059669]/60 hover:shadow-[0_12px_30px_-10px_rgba(5,150,105,0.15)]",
      watermarkColor: "text-[#10B981]",
      title: t("LLM-Integration", "LLM Integration"),
      description: t(
        "Integrieren Sie moderne KI-Modelle wie ChatGPT, RAG-Systeme und generative KI in Ihre Business-Apps.",
        "Integrate advanced AI models like ChatGPT, RAG systems and generative AI into your business applications."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="58" y="14" width="4" height="12" rx="2" opacity="0.8" />
          <circle cx="60" cy="12" r="4" opacity="0.9" />
          <rect x="28" y="26" width="64" height="52" rx="16" opacity="0.45" />
          <rect x="20" y="44" width="8" height="16" rx="4" opacity="0.6" />
          <rect x="92" y="44" width="8" height="16" rx="4" opacity="0.6" />
          <circle cx="46" cy="48" r="6" fill="white" opacity="0.95" />
          <circle cx="74" cy="48" r="6" fill="white" opacity="0.95" />
          <rect x="46" y="64" width="28" height="5" rx="2.5" opacity="0.75" />
        </svg>
      ),
    },
    {
      id: "ai-for-businesses",
      icon: Sparkles,
      iconColor: "text-[#DB2777]",
      iconContainerBg: "bg-[#FCE7F3]/80 text-[#DB2777]",
      cardBg: "bg-gradient-to-br from-[#FDF2F8] via-[#FDF5F9] to-white",
      borderColor: "border-[#FBCFE8]/70",
      hoverBorder: "hover:border-[#DB2777]/60 hover:shadow-[0_12px_30px_-10px_rgba(219,39,119,0.15)]",
      watermarkColor: "text-[#EC4899]",
      title: t("KI für Unternehmen", "AI for Businesses"),
      description: t(
        "Maßgeschneiderte KI-Lösungen zur Automatisierung von Aufgaben, Produktivitätssteigerung und Erschließung neuer Chancen.",
        "Custom AI solutions to automate tasks, improve productivity and unlock new opportunities."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <path d="M68 20 C68 34, 82 48, 96 48 C82 48, 68 62, 68 76 C68 62, 54 48, 40 48 C54 48, 68 34, 68 20 Z" opacity="0.55" />
          <path d="M36 60 C36 66, 42 72, 48 72 C42 72, 36 78, 36 84 C36 78, 30 72, 24 72 C30 72, 36 66, 36 60 Z" opacity="0.4" />
        </svg>
      ),
    },
    {
      id: "restaurant-systems",
      icon: UtensilsCrossed,
      iconColor: "text-[#7C3AED]",
      iconContainerBg: "bg-[#EDE9FE]/80 text-[#7C3AED]",
      cardBg: "bg-gradient-to-br from-[#F5F3FF] via-[#FAF5FF] to-white",
      borderColor: "border-[#DDD6FE]/70",
      hoverBorder: "hover:border-[#7C3AED]/60 hover:shadow-[0_12px_30px_-10px_rgba(124,58,237,0.15)]",
      watermarkColor: "text-[#8B5CF6]",
      title: t("Restaurant-Systeme", "Restaurant Systems"),
      description: t(
        "Komplette Restaurantverwaltungssysteme mit Bestellungen, Abrechnung, QR-Menüs und Küchendisplay.",
        "Complete restaurant management systems with ordering, billing, QR menus and kitchen display."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <circle cx="60" cy="30" r="5" opacity="0.8" />
          <path d="M22 68 C22 42, 40 34, 60 34 C80 34, 98 42, 98 68 Z" opacity="0.45" />
          <rect x="15" y="70" width="90" height="7" rx="3.5" opacity="0.75" />
        </svg>
      ),
    },
    {
      id: "business-mgmt",
      icon: Settings,
      iconColor: "text-[#D97706]",
      iconContainerBg: "bg-[#FEF3C7]/80 text-[#D97706]",
      cardBg: "bg-gradient-to-br from-[#FFFBEB] via-[#FFFCF3] to-white",
      borderColor: "border-[#FDE68A]/70",
      hoverBorder: "hover:border-[#D97706]/60 hover:shadow-[0_12px_30px_-10px_rgba(217,119,6,0.15)]",
      watermarkColor: "text-[#F59E0B]",
      title: t("Business-Management-Systeme", "Business Management Systems"),
      description: t(
        "Kunden-, Projekt-, Aufgaben- und Workflow-Verwaltungssysteme zur Optimierung Ihrer Betriebsabläufe.",
        "Client, project, task and workflow management systems to streamline your operations."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="20" y="24" width="80" height="56" rx="8" opacity="0.4" />
          <circle cx="34" cy="38" r="5" opacity="0.8" />
          <rect x="44" y="36" width="46" height="5" rx="2.5" opacity="0.8" />
          <rect x="30" y="50" width="60" height="6" rx="3" opacity="0.65" />
          <rect x="30" y="62" width="44" height="6" rx="3" opacity="0.65" />
        </svg>
      ),
    },

    // ROW 4
    {
      id: "automation-business",
      icon: Cog,
      iconColor: "text-[#2563EB]",
      iconContainerBg: "bg-[#DBEAFE]/80 text-[#2563EB]",
      cardBg: "bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white",
      borderColor: "border-[#BFDBFE]/70",
      hoverBorder: "hover:border-[#3B82F6]/60 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.15)]",
      watermarkColor: "text-[#3B82F6]",
      title: t("Automatisierung für Unternehmen", "Automation for Businesses"),
      description: t(
        "Automatisieren Sie wiederkehrende Aufgaben, Workflows und Datenprozesse zur Zeitersparnis.",
        "Automate repetitive tasks, workflows and data processes to save time and reduce manual effort."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <circle cx="35" cy="50" r="10" opacity="0.6" />
          <circle cx="85" cy="30" r="10" opacity="0.6" />
          <circle cx="85" cy="70" r="10" opacity="0.6" />
          <line x1="35" y1="50" x2="85" y2="30" stroke="currentColor" strokeWidth="4" opacity="0.4" />
          <line x1="35" y1="50" x2="85" y2="70" stroke="currentColor" strokeWidth="4" opacity="0.4" />
        </svg>
      ),
    },
    {
      id: "ai-auto",
      icon: Bot,
      iconColor: "text-[#8B5CF6]",
      iconContainerBg: "bg-[#EDE9FE]/80 text-[#8B5CF6]",
      cardBg: "bg-gradient-to-br from-[#F5F3FF] via-[#FAF5FF] to-white",
      borderColor: "border-[#DDD6FE]/70",
      hoverBorder: "hover:border-[#8B5CF6]/60 hover:shadow-[0_12px_30px_-10px_rgba(139,92,246,0.15)]",
      watermarkColor: "text-[#8B5CF6]",
      title: t("KI-Automatisierung", "AI Automation"),
      description: t(
        "Erstellen Sie KI-Agenten und Chatbots zur Bearbeitung von Kundenanfragen, Berichten und Geschäftsabläufen.",
        "Build AI agents and chatbots that handle customer queries, reports and business workflows."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <path d="M22 26 L98 26 C103 26, 106 30, 106 35 L106 65 C106 70, 103 74, 98 74 L42 74 L24 88 L24 74 L22 74 C17 74, 14 70, 14 65 L14 35 C14 30, 17 26, 22 26 Z" opacity="0.45" />
          <rect x="30" y="42" width="56" height="5" rx="2.5" fill="white" opacity="0.9" />
          <rect x="30" y="53" width="38" height="5" rx="2.5" fill="white" opacity="0.9" />
        </svg>
      ),
    },
    {
      id: "crm-systems",
      icon: UserCheck,
      iconColor: "text-[#DB2777]",
      iconContainerBg: "bg-[#FCE7F3]/80 text-[#DB2777]",
      cardBg: "bg-gradient-to-br from-[#FDF2F8] via-[#FDF5F9] to-white",
      borderColor: "border-[#FBCFE8]/70",
      hoverBorder: "hover:border-[#DB2777]/60 hover:shadow-[0_12px_30px_-10px_rgba(219,39,119,0.15)]",
      watermarkColor: "text-[#EC4899]",
      title: t("CRM-Systeme", "CRM Systems"),
      description: t(
        "Verwalten Sie Leads, Kunden und Kommunikation mit einem leistungsstarken und intuitiven CRM.",
        "Manage leads, customers and communication with a powerful and easy-to-use CRM."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="20" y="24" width="80" height="54" rx="8" opacity="0.4" />
          <circle cx="38" cy="46" r="8" opacity="0.75" />
          <path d="M26 66 C26 56, 50 56, 50 66 Z" opacity="0.75" />
          <rect x="62" y="44" width="30" height="14" rx="4" opacity="0.75" />
          <text x="66" y="54" fontSize="8" fontWeight="bold" fill="white" fontFamily="sans-serif">CRM</text>
        </svg>
      ),
    },
    {
      id: "appointment-booking",
      icon: CalendarDays,
      iconColor: "text-[#0D9488]",
      iconContainerBg: "bg-[#CCFBF1]/80 text-[#0D9488]",
      cardBg: "bg-gradient-to-br from-[#F0FDFA] via-[#F5FCFA] to-white",
      borderColor: "border-[#99F6E4]/70",
      hoverBorder: "hover:border-[#0D9488]/60 hover:shadow-[0_12px_30px_-10px_rgba(13,148,136,0.15)]",
      watermarkColor: "text-[#0D9488]",
      title: t("Terminbuchungssysteme", "Appointment Booking Systems"),
      description: t(
        "Online-Buchungssysteme für Beratungen, Dienstleistungen und Events mit automatisierten Erinnerungen.",
        "Online booking systems for consultations, services and events with automated reminders."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="24" y="26" width="72" height="58" rx="8" opacity="0.45" />
          <rect x="24" y="26" width="72" height="14" rx="8" opacity="0.8" />
          <rect x="36" y="18" width="6" height="14" rx="3" opacity="0.9" />
          <rect x="78" y="18" width="6" height="14" rx="3" opacity="0.9" />
          <circle cx="42" cy="52" r="3.5" fill="white" opacity="0.9" />
          <circle cx="60" cy="52" r="3.5" fill="white" opacity="0.9" />
          <circle cx="78" cy="52" r="3.5" fill="white" opacity="0.9" />
          <circle cx="42" cy="68" r="3.5" fill="white" opacity="0.9" />
          <circle cx="60" cy="68" r="3.5" fill="white" opacity="0.9" />
          <circle cx="78" cy="68" r="3.5" fill="white" opacity="0.9" />
        </svg>
      ),
    },

    // ROW 5
    {
      id: "invoicing-accounting",
      icon: Receipt,
      iconColor: "text-[#EA580C]",
      iconContainerBg: "bg-[#FFEDD5]/80 text-[#EA580C]",
      cardBg: "bg-gradient-to-br from-[#FFF7ED] via-[#FAFAF9] to-white",
      borderColor: "border-[#FED7AA]/70",
      hoverBorder: "hover:border-[#EA580C]/60 hover:shadow-[0_12px_30px_-10px_rgba(234,88,12,0.15)]",
      watermarkColor: "text-[#F97316]",
      title: t("Rechnungswesen & Buchhaltung", "Invoicing & Accounting"),
      description: t(
        "Verwalten Sie Rechnungen, Ausgaben, Zahlungen und Finanzberichte mit Leichtigkeit.",
        "Manage invoices, expenses, payments and financial reports with ease."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="28" y="18" width="64" height="66" rx="6" opacity="0.45" />
          <rect x="36" y="28" width="30" height="8" rx="2" opacity="0.8" />
          <line x1="36" y1="46" x2="84" y2="46" stroke="currentColor" strokeWidth="3" opacity="0.65" />
          <line x1="36" y1="56" x2="84" y2="56" stroke="currentColor" strokeWidth="3" opacity="0.65" />
          <line x1="36" y1="66" x2="65" y2="66" stroke="currentColor" strokeWidth="3" opacity="0.65" />
        </svg>
      ),
    },
    {
      id: "inventory-warehouse",
      icon: Package,
      iconColor: "text-[#2563EB]",
      iconContainerBg: "bg-[#DBEAFE]/80 text-[#2563EB]",
      cardBg: "bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white",
      borderColor: "border-[#BFDBFE]/70",
      hoverBorder: "hover:border-[#3B82F6]/60 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.15)]",
      watermarkColor: "text-[#3B82F6]",
      title: t("Warenwirtschaft & Lagerverwaltung", "Inventory & Warehouse Management"),
      description: t(
        "Bestände verfolgen, Lagerstandorte verwalten und Lagerprozesse in Echtzeit automatisieren.",
        "Track stock, manage warehouses and automate inventory operations in real time."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="25" y="46" width="32" height="24" rx="3" opacity="0.6" />
          <rect x="63" y="46" width="32" height="24" rx="3" opacity="0.6" />
          <rect x="44" y="22" width="32" height="24" rx="3" opacity="0.75" />
          <rect x="18" y="72" width="84" height="6" rx="2" opacity="0.4" />
        </svg>
      ),
    },
    {
      id: "smart-chatbots",
      icon: MessageSquare,
      iconColor: "text-[#059669]",
      iconContainerBg: "bg-[#D1FAE5]/80 text-[#059669]",
      cardBg: "bg-gradient-to-br from-[#ECFDF5] via-[#F0FDF4] to-white",
      borderColor: "border-[#A7F3D0]/70",
      hoverBorder: "hover:border-[#059669]/60 hover:shadow-[0_12px_30px_-10px_rgba(5,150,105,0.15)]",
      watermarkColor: "text-[#10B981]",
      title: t("Smarte Chatbots", "Smart Chatbots"),
      description: t(
        "KI-gestützte Chatbots zur Kundenbetreuung, Beantwortung von Fragen und Terminbuchung.",
        "AI-powered chatbots to assist your customers, answer questions and book appointments."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="20" y="22" width="80" height="58" rx="8" opacity="0.4" />
          <circle cx="34" cy="36" r="6" opacity="0.75" />
          <rect x="46" y="32" width="40" height="8" rx="4" opacity="0.7" />
          <rect x="30" y="48" width="48" height="12" rx="6" opacity="0.6" />
          <rect x="52" y="64" width="38" height="10" rx="5" opacity="0.8" />
        </svg>
      ),
    },
    {
      id: "digital-transformation",
      icon: Rocket,
      iconColor: "text-[#7C3AED]",
      iconContainerBg: "bg-[#EDE9FE]/80 text-[#7C3AED]",
      cardBg: "bg-gradient-to-br from-[#F5F3FF] via-[#FAF5FF] to-white",
      borderColor: "border-[#DDD6FE]/70",
      hoverBorder: "hover:border-[#7C3AED]/60 hover:shadow-[0_12px_30px_-10px_rgba(124,58,237,0.15)]",
      watermarkColor: "text-[#8B5CF6]",
      title: t("Digitalisierung & Transformation", "Digitalization & Transformation"),
      description: t(
        "Ganzheitliche digitale Lösungen zur Modernisierung Ihres Unternehmens und für zukünftiges Wachstum.",
        "End-to-end digital solutions to modernize your business and scale for the future."
      ),
      watermark: (
        <svg viewBox="0 0 120 100" fill="currentColor" className="w-full h-full">
          <rect x="20" y="66" width="18" height="18" rx="3" opacity="0.35" />
          <rect x="40" y="52" width="18" height="32" rx="3" opacity="0.5" />
          <rect x="60" y="38" width="18" height="46" rx="3" opacity="0.65" />
          <rect x="80" y="24" width="18" height="60" rx="3" opacity="0.85" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-100"
    >
      {/* Background Soft Aura Orbs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-b from-blue-100/40 via-purple-100/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute top-20 left-0 w-[450px] h-[450px] bg-gradient-to-b from-blue-100/35 via-cyan-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3" />

      {/* Decorative Dots Pattern */}
      <div className="absolute left-6 sm:left-12 lg:left-20 top-12 sm:top-16 pointer-events-none hidden sm:block -z-10">
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400/35" />
          ))}
        </div>
      </div>
      <div className="absolute right-6 sm:right-14 lg:right-24 top-14 sm:top-20 pointer-events-none hidden md:block -z-10">
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400/30" />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* ========================================================================= */}
        {/* PART 1: TOP SECTION HEADER & 3 CORE FLAGSHIP SERVICES                     */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>{t("UNSERE LEISTUNGEN", "OUR SERVICES")}</span>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-slate-900 tracking-tight leading-[1.08] sm:leading-[1.15] mb-4 text-center">
            {t("Digitale Komplettlösungen für ", "Full Stack Digital Solutions for ")}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t("moderne Unternehmen", "Modern Businesses")}
            </span>
          </h2>

          <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed font-normal max-w-2xl text-center">
            {t(
              "Von der Idee bis zur Umsetzung bieten wir End-to-End-Lösungen für Aufbau, Automatisierung und Skalierung Ihres Unternehmens.",
              "From idea to implementation, we provide end-to-end solutions to help you build, automate and scale your business."
            )}
          </p>
        </div>

        {/* 3 Main Service Cards Grid with Image Previews & Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-24">
          {mainServices.map((service) => {
            const Icon = service.badgeIcon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-[5px] overflow-hidden border border-slate-200/80 shadow-[0_8px_25px_-12px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between max-w-lg mx-auto md:max-w-none w-full hover:-translate-y-1"
              >
                {/* Visual Top Preview */}
                <div className="relative aspect-[16.5/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Service Badge */}
                  <div className="absolute top-3.5 left-3.5 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-slate-200/80 flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3
                      className={`text-[19px] sm:text-[22px] font-bold text-slate-900 mb-2.5 ${service.hoverColor} transition-colors`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 mb-6">
                      {service.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-base sm:text-lg text-slate-700 font-medium"
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded-full ${service.checkBg} text-white flex items-center justify-center shrink-0 shadow-2xs`}
                          >
                            <Check className="w-2 h-2 stroke-[3]" />
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action: Full-Width Modern Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[5px] bg-gradient-to-r ${service.buttonGradient} text-white text-sm sm:text-[15px] font-bold shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-300 group/link`}
                    >
                      <span>{t("Mehr lesen", "Read More")}</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* PART 2: 20 COMPREHENSIVE DIGITAL SOLUTIONS (Matching User Screenshot)    */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-slate-100 pt-12">
          {/* Sub-Header matching reference design */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>{t("SPEZIALISIERTE LÖSUNGEN", "OUR SERVICES")}</span>
            </div>

            <h3 className="text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-[900] text-slate-900 tracking-tight leading-[1.12] mb-4 text-center">
              {t("Ganzheitliche digitale Lösungen, um ", "Comprehensive Digital Solutions to ")}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t("Ihr Unternehmen wachsen zu lassen", "Grow Your Business")}
              </span>
            </h3>

            <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed font-normal max-w-2xl text-center">
              {t(
                "Von Website-Ideen bis hin zu vollständigen digitalen Systemen bieten wir End-to-End-Lösungen, die genau auf Ihre Geschäftsanforderungen zugeschnitten sind.",
                "From website ideas to full-scale digital systems, we provide end-to-end solutions tailored to your business needs."
              )}
            </p>
          </div>

          {/* 20 Services Grid (4 Columns x 5 Rows) with Home Page Sizing & Responsive Font Sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {specializedServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group relative overflow-hidden rounded-[5px] p-6 sm:p-7 flex flex-col justify-start border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${service.cardBg} ${service.borderColor} ${service.hoverBorder} min-h-[220px] sm:min-h-[240px]`}
                >
                  {/* Background Watermark Graphic in Upper Right */}
                  <div
                    className={`absolute top-2 right-2 sm:top-2 sm:right-2 w-28 h-28 sm:w-28 sm:h-28 pointer-events-none transition-all duration-500 group-hover:scale-105 group-hover:opacity-45 opacity-25 ${service.watermarkColor}`}
                  >
                    {service.watermark}
                  </div>

                  {/* Top Rounded Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover:scale-110 ${service.iconContainerBg}`}
                  >
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Content Block with Home Page Typography & Font Sizes */}
                  <div className="relative z-10 mt-5 sm:mt-6 flex-1 flex flex-col justify-start">
                    <h4 className="text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors mb-2 sm:mb-2.5">
                      {service.title}
                    </h4>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
