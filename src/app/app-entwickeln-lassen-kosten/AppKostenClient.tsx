"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Smartphone, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function AppKostenClient() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Navigation Bar */}
        <div className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
            <ol className="flex items-center gap-1.5 sm:gap-2">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li className="text-slate-900 font-medium">
                {t("App Entwicklung Kosten", "App Development Costs")}
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-200/80 bg-sky-50/90 text-sky-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Smartphone className="w-3.5 h-3.5 text-sky-600" />
              <span>{t("Mobile App Budget-Leitfaden 2026", "Mobile App Budget Guide 2026")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-[1.12] mb-6">
              {t(
                "App Entwicklung Kosten: Was kostet es, eine App entwickeln zu lassen?",
                "App Development Costs: How Much Does It Cost to Build a Mobile App?"
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              {t(
                "Von der ersten Idee bis zur weltweiten Veröffentlichung im Apple App Store und Google Play Store: Die Kosten einer App-Entwicklung hängen von Plattformwahl, Funktionsumfang und Backend-Architektur ab. Mit modernen Cross-Platform-Technologien wie React Native sparen Unternehmen heute bis zu 50% der Entwicklungskosten, ohne Abstriche bei nativer Performance oder Benutzererlebnis zu machen. In diesem Leitfaden erfahren Sie alles über Richtwerte, Kostentreiber, Zeitpläne und laufende Betriebskosten.",
                "From initial concept to publication on the Apple App Store and Google Play Store: Mobile app development costs depend on platform selection, feature complexity, and backend infrastructure. Using cross-platform frameworks like React Native, companies save up to 50% in development costs without sacrificing native performance. In this guide, explore budgeting tiers, cost drivers, timelines, and ongoing operating fees."
              )}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t("App-Projekt unverbindlich anfragen", "Request App Proposal")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/mobile-app-development"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[5px] bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-semibold text-sm transition-all shadow-xs"
              >
                <span>{t("Mobile App Services ansehen", "View Mobile App Services")}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section: Kostenfaktoren */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl space-y-12">
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t("Die 5 wichtigsten Einflussfaktoren auf die App-Kosten", "The 5 Core Factors Driving App Development Costs")}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  {t(
                    "Eine App ist ein komplexes Softwareprodukt. Um Ihr Budget optimal zu nutzen, sollten Sie die wichtigsten Kostentreiber kennen:",
                    "A mobile app is a complex software product. Understanding key cost drivers enables smart budget allocation and faster ROI:"
                  )}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("1. Native vs. Cross-Platform", "1. Native vs. Cross-Platform Architecture")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Wer Swift (iOS) und Kotlin (Android) getrennt entwickeln lässt, zahlt fast das Doppelte. Mit React Native schreiben wir einen gemeinsamen Quellcode für beide Plattformen – das spart bis zu 50% Budget und halbiert spätere Wartungskosten.",
                      "Developing separately in Swift (iOS) and Kotlin (Android) roughly doubles development spend. With React Native, we engineer a unified codebase for both platforms—saving up to 50% in initial build costs and halving future maintenance."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("2. Funktionskomplexität", "2. Feature Complexity")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Einfache Apps mit statischer Informationsanzeige sind zügig umgesetzt. Features wie Push-Notifications, In-App-Subscriptions, Kamera-Scanning, Bluetooth oder Kartenintegration erfordern tiefere Hardware-Anbindung.",
                      "Simple apps displaying structured content can be built rapidly. Advanced features like push notification engines, in-app subscriptions, Bluetooth beacons, barcode scanning, or live geolocation require in-depth native modules."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("3. Backend & Cloud-Infrastruktur", "3. Backend & Cloud Infrastructure")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Die meisten Apps benötigen ein sicheres Backend zur Nutzerauthentifizierung, Datenbankverwaltung und Echtzeit-Synchronisation. Wir nutzen skalierbare Stacks wie Supabase und PostgreSQL auf deutschen Servern.",
                      "Apps require resilient backends for authentication, relational storage, and real-time syncing. We deploy scalable architectures like PostgreSQL and Supabase on ISO 27001-certified European cloud servers."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {t("4. App Store Review & Guidelines", "4. App Store Review & Store Readiness")}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Apple und Google stellen strenge Anforderungen an Datenschutz, In-App-Bezahlmodelle und Stabilität. Wir gewährleisten die 100%ige Store-Approval-Garantie durch striktes Einhalten der Guidelines.",
                      "Apple and Google enforce strict security, data privacy, and billing guidelines. We guarantee 100% store approval through rigorous compliance reviews before submission."
                    )}
                  </p>
                </div>
              </div>
            </article>

            {/* Preisspannen-Kategorien (TODO Placeholders for Owner) */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t("Typische Projektgrößen mobiler Apps", "Typical Mobile App Project Scopes")}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {t(
                  "Abhängig von Reifegrad und Zielgruppe unterscheiden wir drei gängige Entwicklungskategorien:",
                  "Depending on product maturity and target audience, projects typically fall into three tiers:"
                )}
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {t("Minimum Viable Product (MVP) / Prototyp", "Minimum Viable Product (MVP) / Prototype")}
                    </h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80">
                      {t("[PREIS HIER EINTRAGEN: MVP ab X.XXX €]", "[ENTER PRICE HERE: MVP from $X,XXX]")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {t(
                      "Fokus auf das Kern-Feature zur schnellen Validierung am Markt und für Investoren-Pitches. Schnelle Realisierung in 4 bis 6 Wochen.",
                      "Focus on core problem validation and investor pitching. Shipped rapidly within 4 to 6 weeks."
                    )}
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• {t("React Native für iOS & Android", "React Native for iOS & Android")}</li>
                    <li>• {t("Authentifizierung & Basis-Backend", "Secure Auth & foundational backend")}</li>
                    <li>• {t("TestFlight & Google Play Closed Track", "TestFlight & Google Play internal testing tracks")}</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border-2 border-sky-300 bg-sky-50/20">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {t("Vollwertige B2B- oder B2C-Unternehmens-App", "Full-Featured B2B or B2C Enterprise App")}
                    </h3>
                    <span className="text-sm font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-md border border-sky-300">
                      {t("[PREIS HIER EINTRAGEN: Business-App ab XX.XXX €]", "[ENTER PRICE HERE: Business App from $XX,XXX]")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {t(
                      "Der Standard für Startups und mittelständische Unternehmen mit Kundenportal, Push-Nachrichten, Profilen und Zahlungsabwicklung.",
                      "The standard for growing companies: client portal, notification triggers, user profiles, and payment checkouts."
                    )}
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• {t("Individuelles UI/UX-Design & flüssige 60-FPS-Animationen", "Custom UI/UX with smooth 60 FPS animations")}</li>
                    <li>• {t("Offline-First-Architektur & Push-Notification-Service", "Offline-first sync & push notification infrastructure")}</li>
                    <li>• {t("Kompletter Store-Release für Apple & Google Play", "Full store release management for Apple & Google")}</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {t("Komplexe Enterprise- & Plattform-App", "Complex Enterprise & Multi-Tenant App")}
                    </h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80">
                      {t("[PREIS HIER EINTRAGEN: Enterprise ab XX.XXX €]", "[ENTER PRICE HERE: Enterprise from $XX,XXX]")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {t(
                      "Skalierbare Multi-Tenant-Applikationen mit tiefen ERP-/CRM-Schnittstellen, rollenbasierter Rechtestruktur und Offline-Datensynchronisation.",
                      "Scalable multi-tenant architectures featuring deep ERP/CRM integrations, role-based access control, and real-time offline sync."
                    )}
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• {t("ISO-27001-konforme Backend-Infrastruktur in Deutschland", "ISO 27001-compliant European backend hosting")}</li>
                    <li>• {t("Dedizierte Sicherheitsaudits & Penetration-Testing", "Dedicated security reviews & penetration tests")}</li>
                    <li>• {t("Service-Level-Agreements (SLA) & 24/7 Monitoring", "Service Level Agreements (SLA) & continuous monitoring")}</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Kostenübersicht nach App-Typ */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs overflow-hidden">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t(
                  "Übersicht: Was kostet eine App-Entwicklung nach Kategorie?",
                  "Overview: Mobile App Development Costs by Category"
                )}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {t(
                  "Die folgende Vergleichstabelle gibt Ihnen eine transparente Orientierung über typische Entwicklungszeiten, Zielsysteme und Budgets für die mobile App-Programmierung:",
                  "The following overview provides structured orientation on typical delivery timelines, target ecosystems, and budget baselines:"
                )}
              </p>

              <div className="overflow-x-auto -mx-6 sm:mx-0">
                <table className="w-full text-left text-sm border-collapse min-w-[620px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-800 text-xs uppercase tracking-wider font-bold">
                      <th className="py-3.5 px-4">{t("Kategorie", "Category")}</th>
                      <th className="py-3.5 px-4">{t("Entwicklungszeit", "Timeline")}</th>
                      <th className="py-3.5 px-4">{t("Technologie", "Tech Stack")}</th>
                      <th className="py-3.5 px-4">{t("Budgetrahmen (Festpreis)", "Budget (Fixed Price)")}</th>
                      <th className="py-3.5 px-4">{t("Laufende Wartung", "Monthly Maintenance")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        {t("MVP / Prototyp", "MVP / Prototype")}
                        <span className="block text-xs font-normal text-slate-500">{t("Marktvalidierung, 1 Kernfunktion", "Market validation, 1 core feature")}</span>
                      </td>
                      <td className="py-4 px-4">{t("4 – 6 Wochen", "4 – 6 Weeks")}</td>
                      <td className="py-4 px-4">React Native, Supabase</td>
                      <td className="py-4 px-4 font-bold text-orange-600">
                        {t("[PREIS HIER EINTRAGEN: MVP ab X.XXX €]", "[ENTER PRICE HERE: MVP from $X,XXX]")}
                      </td>
                      <td className="py-4 px-4 text-xs text-slate-500">
                        {t("[WARTUNGSKOSTEN HIER EINTRAGEN]", "[ENTER MAINTENANCE HERE]")}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors bg-sky-50/30">
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        {t("Business-App (B2B/B2C)", "Business App (B2B/B2C)")}
                        <span className="block text-xs font-normal text-slate-500">{t("User-Accounts, Push, Payment, Sync", "User accounts, push, payment, sync")}</span>
                      </td>
                      <td className="py-4 px-4">{t("2 – 3 Monate", "2 – 3 Months")}</td>
                      <td className="py-4 px-4">React Native, PostgreSQL, Node/Next</td>
                      <td className="py-4 px-4 font-bold text-sky-700">
                        {t("[PREIS HIER EINTRAGEN: Business-App ab XX.XXX €]", "[ENTER PRICE HERE: Business App from $XX,XXX]")}
                      </td>
                      <td className="py-4 px-4 text-xs text-slate-500">
                        {t("[WARTUNGSKOSTEN HIER EINTRAGEN]", "[ENTER MAINTENANCE HERE]")}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        {t("Enterprise-Plattform", "Enterprise Platform")}
                        <span className="block text-xs font-normal text-slate-500">{t("Multi-Tenant, ERP/CRM, Offline-First", "Multi-tenant, ERP/CRM, offline-first")}</span>
                      </td>
                      <td className="py-4 px-4">{t("3 – 6 Monate", "3 – 6 Months")}</td>
                      <td className="py-4 px-4">Custom Stack, ISO-27001 Cloud, SLA</td>
                      <td className="py-4 px-4 font-bold text-slate-900">
                        {t("[PREIS HIER EINTRAGEN: Enterprise ab XX.XXX €]", "[ENTER PRICE HERE: Enterprise from $XX,XXX]")}
                      </td>
                      <td className="py-4 px-4 text-xs text-slate-500">
                        {t("[WARTUNGSKOSTEN HIER EINTRAGEN]", "[ENTER MAINTENANCE HERE]")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Laufende Kosten */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t(
                  "Laufende Kosten einer App: Store-Gebühren, Hosting & Updates",
                  "Ongoing App Operating Costs: Store Fees, Hosting & Updates"
                )}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {t(
                  "Neben den einmaligen Entwicklungskosten fallen im laufenden Betrieb wiederkehrende Gebühren an, die in jeder professionellen Budgetplanung berücksichtigt werden sollten:",
                  "Beyond initial engineering spend, mobile applications require recurring operational fees that must be budgeted:"
                )}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {t("Apple Developer Program", "Apple Developer Program")}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-2">99 USD / Jahr</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Obligatorisch für die Bereitstellung im weltweiten Apple App Store sowie für TestFlight-Beta-Distribution.",
                      "Mandatory subscription for distribution across Apple's worldwide App Store and TestFlight beta tracks."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {t("Google Play Developer Console", "Google Play Developer Console")}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-2">{t("25 USD einmalig", "$25 one-time fee")}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Einmalige Gebühr zur Erstellung Ihres offiziellen Entwicklerkontos im Google Play Store.",
                      "One-off registration fee to set up your official organization publisher profile on Google Play."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {t("Cloud-Backend & Datenbank", "Cloud Backend & Database")}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-2">{t("ab ca. 25 € / Monat", "from approx. €25 / month")}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Serverlose Datenbanken (PostgreSQL/Supabase) und Cloud-Speicher skalieren nutzungsbasiert nach aktiven Nutzern und Datenvolumen.",
                      "Serverless databases (PostgreSQL/Supabase) scale flexibly based on monthly active users and bandwidth consumption."
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {t("Wartung & OS-Kompatibilität", "Maintenance & OS Compatibility")}
                  </h3>
                  <div className="text-xs font-semibold text-orange-600 mb-2">{t("[WARTUNGSKOSTEN HIER EINTRAGEN]", "[ENTER MAINTENANCE HERE]")}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(
                      "Regelmäßige Updates für neue iOS- und Android-Jahresversionen, Sicherheits-Patches von Drittbibliotheken und Bugfixing.",
                      "Continuous updates ensuring compatibility with annual iOS/Android OS upgrades, library security patches, and issue resolution."
                    )}
                  </p>
                </div>
              </div>
            </article>

            {/* Projektphasen */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {t("Projektphasen einer erfolgreichen App-Entwicklung", "Milestones of a Successful App Project")}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  {t(
                    "Bei Nexa Solutions entwickeln wir agil in zweiwöchigen Sprints. So haben Sie zu jedem Zeitpunkt volle Transparenz über den Projektfortschritt und testen funktionierende Builds direkt auf Ihrem Smartphone:",
                    "At Nexa Solutions, we develop in agile two-week sprint cycles. You maintain complete milestone visibility and test live interactive builds directly on your smartphone:"
                  )}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {t("Konzeption & User Journey", "Discovery & User Journey Mapping")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t(
                        "Definition aller Kernfunktionen, Bildschirmabläufe und Rollenkonzepte zur Minimierung von Entwicklungsrisiken.",
                        "Definition of core features, screen flows, and permissions to de-risk development."
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {t("Figma UX/UI Design & Prototyping", "Figma UI/UX Design & Prototyping")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t(
                        "Design aller Screens nach Apple Human Interface Guidelines und Google Material Design 3.",
                        "Design of all application screens conforming to Apple Human Interface Guidelines and Google Material Design 3."
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {t("Entwicklung & Sprint-Demos", "Agile Engineering & Sprint Demos")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t(
                        "Programmierung mit React Native, TypeScript und Supabase. Regelmäßige Builds über TestFlight und Google Play Console.",
                        "Built with React Native, TypeScript, and Supabase. Continuous testing via TestFlight and Google Play Console."
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {t("Store-Zulassung & Veröffentlichung", "Store Approval & Release")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t(
                        "Erstellung aller App-Store-Assets, rechtliche Datenschutzprüfung und finale Veröffentlichung im App Store und Play Store.",
                        "Creation of App Store assets, privacy policy verification, and full deployment to the Apple App Store and Google Play Store."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* FAQ Section */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200/80 bg-sky-50/90 text-sky-700 text-xs font-bold tracking-wider uppercase mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
                <span>{t("Häufig gestellte Fragen", "Frequently Asked Questions")}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
                {t(
                  "FAQ: Häufige Fragen zu den App-Entwicklungskosten",
                  "FAQ: Frequent Questions on App Development Costs"
                )}
              </h2>

              <div className="space-y-4">
                <details className="group bg-slate-50 rounded-xl border border-slate-200/80 p-5 shadow-2xs open:border-orange-300 transition-colors">
                  <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between gap-4 text-base sm:text-lg select-none list-none">
                    <span>{t("Was kostet es, eine App entwickeln zu lassen?", "How much does it cost to build a mobile app?")}</span>
                    <span className="text-orange-500 font-bold text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-200">
                    {t(
                      "Die Kosten einer App-Entwicklung hängen stark vom Funktionsumfang, Design und der Plattformstrategie ab. Ein Basis-MVP startet typischerweise bei einem schlanken Festpreis, während mittelgroße Business-Apps oder komplexe Enterprise-Plattformen mit Schnittstellenanbindung umfangreichere Budgets erfordern. Nexa Solutions bietet verbindliche Festpreise nach einer detaillierten Erstanalyse.",
                      "Costs depend heavily on scope, design fidelity, and platform choice. A lean MVP starts at an accessible fixed price, while feature-rich enterprise apps require broader investment. Nexa Solutions provides binding fixed-quote estimates following discovery."
                    )}
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200/80 p-5 shadow-2xs open:border-orange-300 transition-colors">
                  <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between gap-4 text-base sm:text-lg select-none list-none">
                    <span>{t("Warum spart Cross-Platform mit React Native gegenüber nativer Entwicklung Kosten?", "Why does React Native cross-platform reduce costs compared to native?")}</span>
                    <span className="text-orange-500 font-bold text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-200">
                    {t(
                      "Bei nativer Entwicklung müssen zwei separate Codebases in Swift (iOS) und Kotlin (Android) programmiert und doppelt gewartet werden. Mit React Native nutzen wir eine einheitliche Codebase für beide Plattformen. Das spart bis zu 50% der Entwicklungs- und Folgekosten bei 100% nativer Benutzeroberfläche und Performance.",
                      "Native engineering requires writing and maintaining two distinct codebases in Swift (iOS) and Kotlin (Android). React Native utilizes a unified codebase for both platforms, trimming up to 50% of development and maintenance overhead with native 60fps UX."
                    )}
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200/80 p-5 shadow-2xs open:border-orange-300 transition-colors">
                  <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between gap-4 text-base sm:text-lg select-none list-none">
                    <span>{t("Welche laufenden Kosten entstehen nach dem App-Launch?", "What ongoing expenses arise after launching an app?")}</span>
                    <span className="text-orange-500 font-bold text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-200">
                    {t(
                      "Zu den laufenden Kosten gehören die Entwickler-Accounts (Apple Developer Program für 99 USD/Jahr, Google Play Console einmalig 25 USD), Backend- und Cloud-Hosting (z. B. Supabase/PostgreSQL) sowie Wartungsverträge für Sicherheitsupdates und OS-Kompatibilität bei neuen iOS- und Android-Versionen.",
                      "Recurring fees include app store licenses ($99/yr for Apple, $25 one-time for Google Play), database and cloud hosting, plus maintenance retainers for OS compatibility patches."
                    )}
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200/80 p-5 shadow-2xs open:border-orange-300 transition-colors">
                  <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between gap-4 text-base sm:text-lg select-none list-none">
                    <span>{t("Wie lange dauert eine App-Entwicklung von der Idee bis zum Store-Release?", "How long does app development take from concept to store release?")}</span>
                    <span className="text-orange-500 font-bold text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-200">
                    {t(
                      "Ein fokussiertes MVP kann innerhalb von 4 bis 6 Wochen umgesetzt und in TestFlight sowie Google Play Internal Testing bereitgestellt werden. Vollwertige Unternehmens-Apps benötigen im Schnitt 2 bis 3 Monate agiler Entwicklungszeit in zweiwöchigen Sprints.",
                      "A focused MVP ships in 4 to 6 weeks directly to TestFlight and Play Store internal tracks. Complex corporate applications average 2 to 3 months of agile sprint cycles."
                    )}
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200/80 p-5 shadow-2xs open:border-orange-300 transition-colors">
                  <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between gap-4 text-base sm:text-lg select-none list-none">
                    <span>{t("Bietet Nexa Solutions Festpreise für die App-Programmierung an?", "Does Nexa Solutions offer fixed-price contracts for app development?")}</span>
                    <span className="text-orange-500 font-bold text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-200">
                    {t(
                      "Ja. Nach einem initialen Konzeptionsgespräch und Scope-Definition erstellen wir ein verbindliches Festpreisangebot ohne versteckte Nachforderungen oder Budgetrisiken.",
                      "Yes. Following initial requirements scoping, we issue binding fixed-price proposals guaranteeing zero hidden surcharges or budget creep."
                    )}
                  </p>
                </details>
              </div>
            </article>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl text-center mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              {t("Möchten Sie Ihre App-Idee kalkulieren lassen?", "Ready to Budget Your Mobile App Concept?")}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
              {t(
                "Schildern Sie uns Ihre Idee vertraulich. Wir erstellen Ihnen ein transparentes Konzept inklusive Festpreis-Kalkulation.",
                "Share your project outline under NDA. We craft a transparent concept and binding fixed-price estimate within 24 hours."
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>{t("Jetzt App anfragen", "Request App Proposal")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/mvp-development"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                <span>{t("MVP Entwicklung", "MVP Development")}</span>
              </Link>
              <Link
                href="/website-kosten"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                <span>{t("Website Kosten vergleichen", "Compare Website Costs")}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
