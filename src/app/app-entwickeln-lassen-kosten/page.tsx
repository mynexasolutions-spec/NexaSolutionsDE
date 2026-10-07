import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Smartphone,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Code2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "App entwickeln lassen Kosten 2026: Was kostet eine App? | Nexa Solutions",
  description:
    "Was kostet eine mobile App für iOS & Android? Alle Kostenfaktoren, Native vs. Cross-Platform, Phasen und Festpreis-Kalkulation im Überblick. Informieren!",
  path: "/app-entwickeln-lassen-kosten",
});

export default function AppKostenPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "App entwickeln lassen Kosten 2026: Was kostet eine App?",
    description:
      "Transparenter Kostenleitfaden für mobile App-Entwicklung in Deutschland: Native vs. Cross-Platform, Projektphasen und Festpreise.",
    url: `${SITE_URL}/app-entwickeln-lassen-kosten`,
    publisher: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "App Kosten",
        item: `${SITE_URL}/app-entwickeln-lassen-kosten`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      <JsonLd data={[pageJsonLd, breadcrumbJsonLd]} />
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
              <li className="text-slate-900 font-medium">App Entwicklung Kosten</li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-200/80 bg-sky-50/90 text-sky-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Smartphone className="w-3.5 h-3.5 text-sky-600" />
              <span>Mobile App Budget-Leitfaden 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-[1.12] mb-6">
              Was kostet es, eine App entwickeln zu lassen?
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Von der ersten Idee bis zur weltweiten Veröffentlichung im Apple App Store und Google Play Store: Die Kosten einer App-Entwicklung hängen von Plattformwahl, Funktionsumfang und Backend-Architektur ab. Mit modernen Cross-Platform-Technologien wie React Native sparen Unternehmen heute bis zu 50% der Entwicklungskosten, ohne Abstriche bei nativer Performance oder Benutzererlebnis zu machen.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>App-Projekt unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/mobile-app-development"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[5px] bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-semibold text-sm transition-all shadow-xs"
              >
                <span>Mobile App Services ansehen</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section: Kostenfaktoren */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl space-y-12">
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Die 5 wichtigsten Einflussfaktoren auf die App-Kosten
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Eine App ist ein komplexes Softwareprodukt. Um Ihr Budget optimal zu nutzen, sollten Sie die wichtigsten Kostentreiber kennen:
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">1. Native vs. Cross-Platform</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Wer Swift (iOS) und Kotlin (Android) getrennt entwickeln lässt, zahlt fast das Doppelte. Mit React Native schreiben wir einen gemeinsamen Quellcode für beide Plattformen – das spart bis zu 50% Budget und halbiert spätere Wartungskosten.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">2. Funktionskomplexität</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Einfache Apps mit statischer Informationsanzeige sind zügig umgesetzt. Features wie Push-Notifications, In-App-Subscriptions, Kamera-Scanning, Bluetooth oder Kartenintegration erfordern tiefere Hardware-Anbindung.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">3. Backend & Cloud-Infrastruktur</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Die meisten Apps benötigen ein sicheres Backend zur Nutzerauthentifizierung, Datenbankverwaltung und Echtzeit-Synchronisation. Wir nutzen skalierbare Stacks wie Supabase und PostgreSQL auf deutschen Servern.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">4. App Store Review & Guidelines</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Apple und Google stellen strenge Anforderungen an Datenschutz, In-App-Bezahlmodelle und Stabilität. Wir gewährleisten die 100%ige Store-Approval-Garantie durch striktes Einhalten der Guidelines.
                  </p>
                </div>
              </div>
            </article>

            {/* Preisspannen-Kategorien (TODO Placeholders for Owner) */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Typische Projektgrößen mobiler Apps
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Abhängig von Reifegrad und Zielgruppe unterscheiden wir drei gängige Entwicklungskategorien:
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Minimum Viable Product (MVP) / Prototyp</h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80">
                      TODO: Preisspannen vom Inhaber
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Fokus auf das Kern-Feature zur schnellen Validierung am Markt und für Investoren-Pitches. Schnelle Realisierung in 4 bis 6 Wochen.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• React Native für iOS & Android</li>
                    <li>• Authentifizierung & Basis-Backend</li>
                    <li>• TestFlight & Google Play Closed Track</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border-2 border-sky-300 bg-sky-50/20">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Vollwertige B2B- oder B2C-Unternehmens-App</h3>
                    <span className="text-sm font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-md border border-sky-300">
                      TODO: Preisspannen vom Inhaber
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Der Standard für Startups und mittelständische Unternehmen mit Kundenportal, Push-Nachrichten, Profilen und Zahlungsabwicklung.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• Individuelles UI/UX-Design & flüssige 60-FPS-Animationen</li>
                    <li>• Offline-First-Architektur & Push-Notification-Service</li>
                    <li>• Kompletter Store-Release für Apple & Google Play</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Komplexe Enterprise- & Plattform-App</h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80">
                      TODO: Preisspannen vom Inhaber
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Skalierbare Multi-Tenant-Applikationen mit tiefen ERP-/CRM-Schnittstellen, rollenbasierter Rechtestruktur und Offline-Datensynchronisation.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• ISO-27001-konforme Backend-Infrastruktur in Deutschland</li>
                    <li>• Dedizierte Sicherheitsaudits & Penetration-Testing</li>
                    <li>• Service-Level-Agreements (SLA) & 24/7 Monitoring</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Projektphasen */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Projektphasen einer erfolgreichen App-Entwicklung
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Bei Nexa Solutions entwickeln wir agil in zweiwöchigen Sprints. So haben Sie zu jedem Zeitpunkt volle Transparenz über den Projektfortschritt und testen funktionierende Builds direkt auf Ihrem Smartphone:
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Konzeption & User Journey</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Definition aller Kernfunktionen, Bildschirmabläufe und Rollenkonzepte zur Minimierung von Entwicklungsrisiken.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Figma UX/UI Design & Prototyping</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Design aller Screens nach Apple Human Interface Guidelines und Google Material Design 3.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Entwicklung & Sprint-Demos</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Programmierung mit React Native, TypeScript und Supabase. Regelmäßige Builds über TestFlight und Google Play Console.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Store-Zulassung & Veröffentlichung</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Erstellung aller App-Store-Assets, rechtliche Datenschutzprüfung und finale Veröffentlichung im App Store und Play Store.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl text-center mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Möchten Sie Ihre App-Idee kalkulieren lassen?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Schildern Sie uns Ihre Idee vertraulich. Wir erstellen Ihnen ein transparentes Konzept inklusive Festpreis-Kalkulation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>Jetzt App anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/website-kosten"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                <span>Website Kosten vergleichen</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
