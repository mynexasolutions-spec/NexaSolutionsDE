import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Layers,
  Clock,
  Users,
  Calendar,
  MessageSquare,
  Cpu,
  UtensilsCrossed,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { solutionsData } from "@/data/solutions";

export const metadata: Metadata = pageMetadata({
  title: "Digitale Lösungen & Individualsoftware | Nexa Solutions",
  description:
    "Maßgeschneiderte Softwarelösungen für Unternehmen: Zeiterfassung, CRM, Terminbuchung, KI-Chatbots, n8n-Workflows und Gastro-Systeme. Jetzt entdecken!",
  path: "/loesungen",
});

const iconsMap: Record<string, any> = {
  "zeiterfassung-software": Clock,
  "crm-system-entwickeln-lassen": Users,
  "terminbuchungssystem-entwickeln-lassen": Calendar,
  "ki-chatbot-fuer-unternehmen": MessageSquare,
  "n8n-agentur-deutschland": Cpu,
  "restaurant-software-qr-menue": UtensilsCrossed,
};

export default function SolutionsIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Digitale Lösungen & Individualsoftware",
    description:
      "Übersicht unserer maßgeschneiderten Unternehmenslösungen für Web, Apps und KI-Automatisierung.",
    url: `${SITE_URL}/loesungen`,
    provider: {
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
        name: "Lösungen",
        item: `${SITE_URL}/loesungen`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      <JsonLd data={[collectionJsonLd, breadcrumbJsonLd]} />
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
              <li className="text-slate-900 font-medium">Lösungen</li>
            </ol>
          </nav>
        </div>

        {/* Header Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Praxiserprobte Systemlösungen</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-[1.1] mb-5">
              Maßgeschneiderte digitale Lösungen für Ihr Unternehmen
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Von DSGVO-konformer Zeiterfassung über individuelle CRM-Systeme bis hin zu autonomen KI-Agenten: Wir entwickeln skalierbare Software, die exakt zu Ihren operativen Prozessen passt.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {solutionsData.map((sol) => {
              const IconComponent = iconsMap[sol.slug] || Layers;
              return (
                <div
                  key={sol.slug}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-orange-200/90 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 border border-orange-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                        {sol.badge}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {sol.h1}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {sol.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/loesungen/${sol.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <span>Lösung entdecken</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Sie benötigen eine spezifische Sonderlösung?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Wir konzipieren und entwickeln auch hochspezialisierte Fachanwendungen, Schnittstellen und SaaS-Portale. Sprechen Sie mit unseren Architekten.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>Projekt anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all"
              >
                <span>Alle Services</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
