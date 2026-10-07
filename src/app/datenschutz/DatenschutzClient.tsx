"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function DatenschutzClient() {
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
                {t("Datenschutz", "Privacy Policy")}
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
                  "Diese Seite ist aktuell auf noindex gesetzt und nicht in der Sitemap enthalten. Bitte vervollständigen Sie alle TODO-Felder und lassen Sie die Erklärung juristisch abnehmen.",
                  "This privacy statement template is currently set to noindex and excluded from sitemap.xml. Please complete all TODO fields and have it reviewed by legal counsel."
                )}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-[900] text-[#0F172A] tracking-tight mb-8">
              {t("Datenschutzerklärung", "Privacy Policy (DSGVO / GDPR)")}
            </h1>

            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("1. Datenschutz auf einen Blick", "1. Privacy Overview")}
                </h2>
                <h3 className="font-semibold text-slate-800 mt-2">
                  {t("Allgemeine Hinweise", "General Information")}
                </h3>
                <p>
                  {t(
                    "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
                    "The following notes provide an overview of what happens to your personal data when you visit this website. Personal data refers to any data that can identify you personally."
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("2. Verantwortliche Stelle", "2. Data Controller")}
                </h2>
                <p className="font-semibold text-slate-800">
                  TODO: [Vollständiger Firmenname & Rechtsform eintragen / Company Name]
                </p>
                <p>TODO: [Straße und Hausnummer / Street Address]</p>
                <p>TODO: [PLZ und Ort / City & Postal Code]</p>
                <p>TODO: [Land / Country]</p>
                <p>{t("E-Mail:", "Email:")} contact@nexa-solutions.de</p>
                <p>{t("Telefon:", "Phone:")} TODO: [Telefonnummer eintragen]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("3. Hosting & Cloud-Infrastruktur", "3. Hosting & Cloud Infrastructure")}
                </h2>
                <p>
                  {t(
                    "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:",
                    "We host the components of our web application with the following provider:"
                  )}
                </p>
                <p className="font-medium text-slate-800">
                  TODO: [Hosting-Anbieter eintragen, z. B. Hetzner Online GmbH / Vercel Inc. mit Servern in Frankfurt am Main]
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {t(
                    "Mit dem Anbieter wurde ein Vertrag über Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO geschlossen.",
                    "A Data Processing Agreement (DPA) pursuant to Art. 28 GDPR has been concluded with the provider."
                  )}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {t("4. Ihre Rechte", "4. Your Rights under GDPR")}
                </h2>
                <p>
                  {t(
                    "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten (Art. 15 DSGVO) sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten (Art. 16, 17 DSGVO).",
                    "You have the right at any time to receive free information about the origin, recipient, and purpose of your stored personal data (Art. 15 GDPR), as well as a right to correction, restriction, or deletion of this data (Art. 16, 17 GDPR)."
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
