// TODO: Dieser Entwurf dient als Struktur-Vorlage und muss zwingend vor Live-Nutzung von einem Fachanwalt für IT-Recht geprüft und durch die realen Firmendaten vervollständigt werden.
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | Nexa Solutions",
  description: "Impressum und rechtliche Angaben der Nexa Solutions.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ImpressumPage() {
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
              <li className="text-slate-900 font-medium">Impressum</li>
            </ol>
          </nav>
        </div>

        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
              <div>
                <strong>Hinweis für den Website-Inhaber:</strong> Diese Seite ist aktuell auf <code>noindex</code> gesetzt und nicht in der Sitemap enthalten. Bitte ersetzen Sie alle <code>TODO</code>-Platzhalter durch Ihre offiziellen Unternehmensdaten und lassen Sie die Angaben durch einen Rechtsanwalt prüfen, bevor die Seite indexiert und im Footer verlinkt wird.
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-[900] text-[#0F172A] tracking-tight mb-8">
              Impressum
            </h1>

            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Angaben gemäß § 5 TMG / § 5 DDG</h2>
                <p className="font-semibold text-slate-800">
                  TODO: [Vollständiger Firmenname & Rechtsform, z. B. Nexa Solutions GmbH / Einzelunternehmen]
                </p>
                <p>TODO: [Straße und Hausnummer]</p>
                <p>TODO: [PLZ und Ort, z. B. Frankfurt am Main]</p>
                <p>TODO: [Land, z. B. Deutschland]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Vertreten durch</h2>
                <p>TODO: [Vorname Nachname des Vertretungsberechtigten / Geschäftsführers]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Kontakt</h2>
                <p>Telefon: TODO: [Telefonnummer eintragen]</p>
                <p>E-Mail: contact@nexa-solutions.de</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Registereintrag</h2>
                <p>Eintragung im Handelsregister (falls eingetragen):</p>
                <p>Registergericht: TODO: [z. B. Amtsgericht Frankfurt am Main]</p>
                <p>Registernummer: TODO: [z. B. HRB XXXXX]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Umsatzsteuer-Identifikationsnummer</h2>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p>TODO: [USt-IdNr. eintragen, z. B. DE XXXXXXXXX]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                <p>TODO: [Name und Anschrift des inhaltlich Verantwortlichen]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  .<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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
