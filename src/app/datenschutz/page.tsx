// TODO: Dieser Entwurf dient als Struktur-Vorlage und muss zwingend vor Live-Nutzung von einem Fachanwalt für IT-Recht geprüft und durch die realen Firmendaten vervollständigt werden.
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Nexa Solutions",
  description: "Datenschutzerklärung der Nexa Solutions nach DSGVO.",
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

export default function DatenschutzPage() {
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
              <li className="text-slate-900 font-medium">Datenschutz</li>
            </ol>
          </nav>
        </div>

        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
              <div>
                <strong>Hinweis für den Website-Inhaber:</strong> Diese Seite ist aktuell auf <code>noindex</code> gesetzt und nicht in der Sitemap enthalten. Bitte vervollständigen Sie alle <code>TODO</code>-Felder und lassen Sie die Erklärung juristisch abnehmen.
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-[900] text-[#0F172A] tracking-tight mb-8">
              Datenschutzerklärung
            </h1>

            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-semibold text-slate-800 mt-2">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">2. Verantwortliche Stelle</h2>
                <p className="font-semibold text-slate-800">
                  TODO: [Vollständiger Firmenname & Rechtsform eintragen]
                </p>
                <p>TODO: [Straße und Hausnummer]</p>
                <p>TODO: [PLZ und Ort]</p>
                <p>TODO: [Land]</p>
                <p>E-Mail: contact@nexa-solutions.de</p>
                <p>Telefon: TODO: [Telefonnummer eintragen]</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">3. Hosting</h2>
                <p>
                  Wir hosten die Inhalte unserer Website auf Servern innerhalb der Europäischen Union (Rechenzentrum Frankfurt am Main). Die Bereitstellung erfolgt über moderne Cloud-Infrastruktur mit ISO-27001-Zertifizierung. Mit dem Hosting-Anbieter wurde ein Vertrag über Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO geschlossen.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">4. Datenerfassung auf dieser Website</h2>
                <h3 className="font-semibold text-slate-800 mt-2">Kontaktformular & Projektanfragen</h3>
                <p>
                  Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mt-2">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                </p>

                <h3 className="font-semibold text-slate-800 mt-4">Server-Log-Dateien</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                </p>

                <h3 className="font-semibold text-slate-800 mt-4">Cookies & Local Storage</h3>
                <p>
                  Unsere Internetseiten verwenden Cookies und lokale Speichertechnologien. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen (z. B. Speicherung der Sprachauswahl oder Cookie-Einwilligung).
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">5. Ihre Rechte als betroffene Person</h2>
                <p>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
                <p className="mt-2">
                  Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
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
