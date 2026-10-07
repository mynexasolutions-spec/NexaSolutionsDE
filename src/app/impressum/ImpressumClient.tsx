"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpressumClient() {
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
                {t("Impressum", "Legal Notice / Impressum")}
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
                  "Diese Seite ist aktuell auf noindex gesetzt und nicht in der Sitemap enthalten. Bitte ersetzen Sie alle TODO-Platzhalter durch Ihre offiziellen Unternehmensdaten und lassen Sie die Angaben durch einen Rechtsanwalt prüfen, bevor die Seite indexiert und im Footer verlinkt wird.",
                  "This legal notice template is currently set to noindex and excluded from the sitemap. Please replace all TODO placeholders with verified German commercial credentials and have them reviewed by legal counsel prior to indexation."
                )}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-[900] text-[#0F172A] tracking-tight mb-8">
              {t("Impressum", "Legal Notice (Impressum)")}
            </h1>

            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("Angaben gemäß § 5 TMG / § 5 DDG", "Information pursuant to § 5 DDG / TMG")}
                </h2>
                <p className="font-semibold text-slate-800">
                  TODO: [Vollständiger Firmenname & Rechtsform, z. B. Nexa Solutions GmbH / Einzelunternehmen]
                </p>
                <p>TODO: [Straße und Hausnummer / Street Address]</p>
                <p>TODO: [PLZ und Ort, z. B. Frankfurt am Main / Postal Code & City]</p>
                <p>TODO: [Land, z. B. Deutschland / Country]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("Vertreten durch", "Represented by")}
                </h2>
                <p>TODO: [Vorname Nachname des Vertretungsberechtigten / Managing Director]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("Kontakt", "Contact")}
                </h2>
                <p>{t("Telefon:", "Phone:")} TODO: [Telefonnummer eintragen]</p>
                <p>{t("E-Mail:", "Email:")} contact@nexa-solutions.de</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("Registereintrag", "Commercial Register")}
                </h2>
                <p>{t("Eintragung im Handelsregister (falls eingetragen):", "Commercial register entry (if registered):")}</p>
                <p>{t("Registergericht:", "Register court:")} TODO: [Amtsgericht Frankfurt am Main]</p>
                <p>{t("Registernummer:", "Registration number:")} TODO: [HRB XXXXX]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("Umsatzsteuer-Identifikationsnummer", "VAT Identification Number")}
                </h2>
                <p>{t("Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:", "VAT ID pursuant to § 27 a of the German VAT Act:")}</p>
                <p>TODO: [USt-IdNr. eintragen, z. B. DE XXXXXXXXX]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("EU-Streitschlichtung", "EU Dispute Resolution")}
                </h2>
                <p>
                  {t(
                    "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.",
                    "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/."
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
