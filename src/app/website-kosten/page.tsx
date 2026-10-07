import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  DollarSign,
  ShieldCheck,
  Code2,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Kosten 2026: Was kostet eine Website? | Nexa Solutions",
  description:
    "Was kostet eine moderne Website? Alle Kostenfaktoren, Phasen, Festpreis-Kalkulation und Einsparpotenziale im transparenten Überblick. Jetzt informieren!",
  path: "/website-kosten",
});

export default function WebsiteKostenPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Website Kosten 2026: Was kostet eine Website?",
    description:
      "Transparenter Leitfaden zu Kostenfaktoren, Projektphasen und Festpreis-Kalkulationen für professionelle Unternehmens-Websites.",
    url: `${SITE_URL}/website-kosten`,
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
        name: "Website Kosten",
        item: `${SITE_URL}/website-kosten`,
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
              <li className="text-slate-900 font-medium">Website Kosten</li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Transparenz & Planungssicherheit</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-[1.12] mb-6">
              Was kostet eine professionelle Website in Deutschland?
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Die Preisspanne für Websites reicht im Internet von wenigen hundert Euro für Baukasten-Vorlagen bis hin zu sechsstelligen Budgets für maßgeschneiderte Enterprise-Plattformen. In diesem Leitfaden erfahren Sie ehrlich und transparent, aus welchen Faktoren sich die Entwicklungskosten zusammensetzen, wo typische Kostenfallen lauern und wie ein verlässliches Festpreisangebot entsteht.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Kostenloses Angebot anfordern</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/web-development"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[5px] bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-semibold text-sm transition-all shadow-xs"
              >
                <span>Zu unseren Web-Services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section 1: Die wichtigsten Kostenfaktoren */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl space-y-12">
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Die 6 zentralen Kostenfaktoren einer Website
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Eine Website ist längst keine digitale Visitenkarte mehr, sondern der primäre Vertriebs- und Repräsentationskanal Ihres Unternehmens. Die Kosten hängen maßgeblich vom gewünschten Grad an Individualisierung und technischer Leistungsfähigkeit ab.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">1. Umfang & Seitenstruktur</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ein fokussierter Onepager erfordert naturgemäß weniger Konzeptions- und Programmieraufwand als eine mehrsprachige Corporate Website mit 30 Unterseiten, Leistungsbeschreibungen, Blog und Case Studies.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">2. Individuelles UI/UX-Design</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Fertige Templates sind günstig, sehen aber austauschbar aus und bremsen die Ladezeit aus. Maßgeschneiderte Figma-Designs spiegeln Ihre Corporate Identity 1:1 wider und sind auf maximale Conversion optimiert.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">3. Technologie-Stack</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Moderne Frameworks wie Next.js und React bieten überlegene Ladezeiten, perfekte Core Web Vitals und höchste Sicherheit vor Hackern – im Gegensatz zu wartungsintensiven WordPress-Installationen mit Dutzenden Plugins.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">4. Schnittstellen & Funktionen</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Spezifische Erweiterungen wie ein [Terminbuchungssystem](/loesungen/terminbuchungssystem-entwickeln-lassen), ein [Kundenportal](/loesungen/crm-system-entwickeln-lassen) oder Zahlungsschnittstellen mit Stripe erfordern Backend-Architektur.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">5. DSGVO & BFSG-Barrierefreiheit</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Rechtssichere Umsetzung ohne unautorisierte Tracking-Skripte, lokale Schriftarten, Cookie-Consent und Einhaltung des Barrierefreiheitsstärkungsgesetzes (BFSG ab Mitte 2025).
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-base mb-2">6. Hosting & laufende Pflege</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hosting auf ISO-27001-zertifizierten deutschen Servern (z. B. Frankfurt am Main), SSL-Zertifikate, tägliche Backups und kontinuierlicher technischer Support nach dem Launch.
                  </p>
                </div>
              </div>
            </article>

            {/* Preisspannen-Kategorien (TODO Placeholders for Owner) */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Typische Website-Kategorien im Überblick
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Um Ihnen eine Orientierung zu bieten, unterscheiden wir drei typische Projektgrößen. Alle Projekte werden bei Nexa Solutions transparent auf Festpreisbasis kalkuliert.
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Kompakte Business Website (Onepager / bis 5 Seiten)</h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80">
                      TODO: Preisspannen vom Inhaber
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Ideal für lokale Dienstleister, Gründer und Berater, die einen professionellen, schnellen Webauftritt mit Kontaktformular und Top-Mobiloptimierung benötigen.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• Individuelles Responsive Design in Figma</li>
                    <li>• Next.js Performance & perfekte Core Web Vitals</li>
                    <li>• DSGVO-konforme Basiseinrichtung & lokales Font-Hosting</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border-2 border-orange-300 bg-orange-50/20">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Umfassende Corporate Website (10 bis 25 Seiten)</h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-md border border-orange-300">
                      TODO: Preisspannen vom Inhaber
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Der Standard für etablierte B2B-Unternehmen, Handwerksbetriebe und Agenturen mit mehreren Leistungsbereichen, Karriereportal, Fallstudien und Lead-Generierung.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• Detaillierte Keyword- und Informationsarchitektur</li>
                    <li>• Headless CMS zur eigenständigen Inhaltspflege</li>
                    <li>• Integration von Lead-Pipelines und [n8n-Workflows](/services/ai-automation)</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Individuelle Web-Applikation / Kundenportal</h3>
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-200/80">
                      TODO: Preisspannen vom Inhaber
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Komplexe Softwarelösungen mit Benutzer-Authentifizierung, Kundenbereich, Datenbankanbindung und individueller Geschäftslogik.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• Eigene Datenbankarchitektur (PostgreSQL / Supabase)</li>
                    <li>• Rollen- und Rechtemanagement</li>
                    <li>• Nahtlose ERP- und Zahlungsanbindung</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Projektphasen */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Der Ablauf Ihres Projekts bei Nexa Solutions
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Transparenz ist unser oberstes Gebot. Jedes Projekt durchläuft einen klar definierten Prozess, der sicherstellt, dass Zeitplan und Budget strikt eingehalten werden:
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Erstgespräch & Scope-Definition</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Wir analysieren Ihre Ziele, Zielgruppe und Wettbewerber. Auf dieser Basis erstellen wir ein verbindliches Festpreisangebot ohne versteckte Zusatzkosten.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">UI/UX-Design & Wireframing</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Wir gestalten interaktive Klick-Dummies in Figma. Sie sehen und testen das Design auf Smartphone und Desktop, bevor die erste Zeile Code geschrieben wird.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Agile Entwicklung & Integration</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Umsetzung mit modernstem Next.js, React und TypeScript. Sie erhalten regelmäßige Preview-Links zur kontinuierlichen Abstimmung.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Quality Assurance & Go-Live</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Ausführliche Tests aller Formulare, Mobilgeräte, Browser und Ladezeiten. Reibungsloser Domain-Umzug und Übergabe an Ihre Redakteure.
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
              Möchten Sie eine genaue Kosteneinschätzung für Ihr Projekt?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Teilen Sie uns kurz Ihre Anforderungen mit. Wir erstellen Ihnen innerhalb von 24 Stunden eine individuelle, transparente Kostenschätzung.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>Jetzt unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/app-entwickeln-lassen-kosten"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                <span>App Entwicklung Kosten</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
