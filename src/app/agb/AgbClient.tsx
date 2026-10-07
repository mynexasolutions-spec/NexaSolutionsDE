"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function AgbClient() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
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
                {t("AGB", "Terms of Service (AGB)")}
              </li>
            </ol>
          </nav>
        </div>

        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
              <div>
                <strong>{t("Hinweis für den Website-Inhaber:", "Notice for Website Owner:")}</strong>{" "}
                {t(
                  "Diese Seite ist aktuell auf noindex gesetzt und nicht in der Sitemap enthalten. Bitte lassen Sie die Klauseln juristisch auf Ihre spezifischen B2B-Vertragsmodelle anpassen.",
                  "This terms of service template is currently set to noindex and excluded from the sitemap. Please have these clauses tailored to your specific commercial B2B contract models by legal counsel."
                )}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-[900] text-[#0F172A] tracking-tight mb-8">
              {t("Allgemeine Geschäftsbedingungen (AGB)", "General Terms & Conditions (B2B)")}
            </h1>

            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("§ 1 Geltungsbereich und Vertragspartner", "§ 1 Scope & Contracting Parties")}
                </h2>
                <p>
                  {t(
                    "(1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über Dienstleistungen und Werkleistungen im Bereich Webentwicklung, App-Entwicklung, Individualsoftware und Prozessautomatisierung zwischen TODO: [Vollständiger Firmenname & Rechtsform, Anschrift] und dem Auftraggeber.",
                    "(1) These General Terms and Conditions govern all contracts for development services in the areas of web development, mobile applications, custom software, and process automation between TODO: [Company Name, Legal Form, Address] and the client."
                  )}
                </p>
                <p className="mt-2">
                  {t(
                    "(2) Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne des § 14 BGB, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen.",
                    "(2) These terms apply exclusively to commercial business entities (B2B) within the meaning of § 14 BGB and legal entities under public law."
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("§ 2 Vertragsschluss und Leistungsumfang", "§ 2 Contract Conclusion & Scope of Work")}
                </h2>
                <p>
                  {t(
                    "(1) Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich bezeichnet sind. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung zustande.",
                    "(1) Project estimates are subject to confirmation unless explicitly specified as binding. A formal engagement takes effect upon written order confirmation."
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("§ 3 Gerichtsstand", "§ 3 Jurisdiction & Applicable Law")}
                </h2>
                <p>
                  {t(
                    "Ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Geschäftssitz des Auftragnehmers (TODO: [z. B. Frankfurt am Main]). Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
                    "Exclusive place of jurisdiction for all disputes arising from this contract is the registered office of the contractor (TODO: [e.g. Frankfurt am Main, Germany]). The laws of the Federal Republic of Germany apply."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
