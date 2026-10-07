// TODO: Dieser AGB-Entwurf dient als unverbindliche Struktur-Vorlage und muss zwingend vor Live-Nutzung von einem Fachanwalt für IT-Recht an die genauen Geschäftsbedingungen und Haftungsvorgaben angepasst werden.
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB) | Nexa Solutions",
  description: "Allgemeine Geschäftsbedingungen der Nexa Solutions für Software- und Webentwicklung.",
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

export default function AgbPage() {
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
              <li className="text-slate-900 font-medium">AGB</li>
            </ol>
          </nav>
        </div>

        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
              <div>
                <strong>Hinweis für den Website-Inhaber:</strong> Diese Seite ist aktuell auf <code>noindex</code> gesetzt und nicht in der Sitemap enthalten. Bitte lassen Sie die Klauseln juristisch auf Ihre spezifischen B2B-Vertragsmodelle anpassen.
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-[900] text-[#0F172A] tracking-tight mb-8">
              Allgemeine Geschäftsbedingungen (AGB)
            </h1>

            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">§ 1 Geltungsbereich und Vertragspartner</h2>
                <p>
                  (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge über Dienstleistungen und Werkleistungen im Bereich Webentwicklung, App-Entwicklung, Individualsoftware und Prozessautomatisierung zwischen TODO: [Vollständiger Firmenname & Rechtsform, Anschrift] (nachfolgend „Auftragnehmer“) und dem Auftraggeber (nachfolgend „Kunde“).
                </p>
                <p className="mt-2">
                  (2) Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne des § 14 BGB, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">§ 2 Vertragsschluss und Leistungsumfang</h2>
                <p>
                  (1) Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich bezeichnet sind. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung oder den Beginn der Leistungserbringung zustande.
                </p>
                <p className="mt-2">
                  (2) Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot, Leistungsverzeichnis oder Pflichtenheft. Nachträgliche Änderungswünsche (Change Requests) bedürfen einer gesonderten Vereinbarung.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">§ 3 Mitwirkungspflichten des Kunden</h2>
                <p>
                  (1) Der Kunde stellt dem Auftragnehmer rechtzeitig alle für die Durchführung des Projekts erforderlichen Informationen, Daten, Texte, Zugangsdaten und Medien zur Verfügung.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">§ 4 Vergütung und Zahlungsbedingungen</h2>
                <p>
                  (1) Alle Preise verstehen sich in Euro zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.
                </p>
                <p className="mt-2">
                  (2) Sofern nicht anders vereinbart, erfolgen Zahlungen nach vereinbarten Projektmeilensteinen. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">§ 5 Abnahme bei Werkleistungen</h2>
                <p>
                  (1) Nach Fertigstellung und Bereitstellung der Software oder Website ist der Kunde verpflichtet, das Werk innerhalb von 14 Werktagen abzunehmen, sofern keine wesentlichen Mängel vorliegen.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">§ 6 Nutzungsrechte</h2>
                <p>
                  (1) Der Auftragnehmer räumt dem Kunden mit vollständiger Bezahlung der geschuldeten Vergütung die vertraglich vereinbarten Nutzungsrechte am erstellten Werk ein.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">§ 7 Haftung</h2>
                <p>
                  (1) Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), beschränkt auf den vertragstypischen, vorhersehbaren Schaden.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">§ 8 Schlussbestimmungen</h2>
                <p>
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
                </p>
                <p className="mt-2">
                  (2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist TODO: [Gerichtsstand eintragen, z. B. Frankfurt am Main].
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
