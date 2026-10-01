"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FaqSectionProps {
  onOpenContact?: () => void;
}

export default function FaqSection({ onOpenContact }: FaqSectionProps) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t(
        "Wie setzen sich die Kosten und Projektlaufzeiten zusammen?",
        "How are project costs and delivery timelines calculated?"
      ),
      a: t(
        "Wir arbeiten nach transparenten Festpreisen auf Basis eines vorab definierten Anforderungskatalogs – ohne unerwartete Nachforderungen. Kleinere Webauftritte dauern typischerweise 2 bis 4 Wochen, mobile Apps 4 bis 8 Wochen und umfangreiche Unternehmenssysteme 6 bis 10 Wochen.",
        "We operate on transparent fixed-price quotes based on a clearly defined project scope before work starts — zero surprise surcharges. Modern websites typically take 2 to 4 weeks, mobile applications 4 to 8 weeks, and custom enterprise systems 6 to 10 weeks."
      ),
    },
    {
      q: t(
        "Gehört der Quellcode und die Datenbank nach Projektabschluss mir?",
        "Who owns the source code and databases after completion?"
      ),
      a: t(
        "Ja, zu 100 %. Sie erhalten das uneingeschränkte Eigentumsrecht an allen erstellten Quellcodes, Datenbankstrukturen, Grafik-Assets und Zugängen. Wir binden Sie an keine proprietäre Plattform und erheben keine wiederkehrenden Lizenzgebühren.",
        "Yes, 100%. You receive complete and unencumbered ownership rights to all source code, database architectures, graphic assets, and credentials. There is no vendor lock-in and no recurring platform royalties."
      ),
    },
    {
      q: t(
        "Wie stellen Sie DSGVO-Konformität und Datensicherheit sicher?",
        "How do you ensure GDPR compliance and data privacy?"
      ),
      a: t(
        "Alle von uns gehosteten Systeme liegen in ISO-27001-zertifizierten Rechenzentren in Deutschland (Frankfurt am Main) oder der Europäischen Union. Wir implementieren standardmäßig SSL-Verschlüsselung, Auftragsverarbeitungsverträge (AVV), Cookie-freie Analytics und GoBD-konforme Archivierung.",
        "All systems deployed by us operate on ISO-27001 certified data centers in Germany (Frankfurt) or within the European Union. We enforce SSL encryption, Data Processing Agreements (DPA), cookie-free analytics, and GDPR-compliant storage by default."
      ),
    },
    {
      q: t(
        "Bieten Sie laufende Wartung, Sicherheits-Updates und Support nach dem Launch an?",
        "Do you provide ongoing maintenance, security updates and SLA support after launch?"
      ),
      a: t(
        "Ja. Wir lassen Sie nach dem Go-Live nicht allein. Wir bieten flexible monatliche Betreuungspakete inklusive 24/7 Server-Monitoring, Sicherheits-Patches, kontinuierlichen Backups und garantierten Reaktionszeiten bei technischen Notfällen.",
        "Yes. We support you well after go-live. We offer flexible monthly maintenance packages including 24/7 server health monitoring, security patches, automated off-site backups, and guaranteed SLA response times."
      ),
    },
    {
      q: t(
        "Können Sie bestehende Systeme wie DATEV, ERP oder CRM-Tools anbinden?",
        "Can you integrate with existing tools like DATEV, ERP, CRM or payment gateways?"
      ),
      a: t(
        "Selbstverständlich. Unsere Software-Architektur setzt auf standardisierte REST- und GraphQL-Schnittstellen sowie Webhooks. Wir haben umfangreiche Erfahrung bei der nahtlosen Anbindung von DATEV, Stripe, PayPal, HubSpot, Salesforce, n8n und individuellen REST-APIs.",
        "Absolutely. Our software architecture leverages standardized REST and GraphQL APIs as well as webhooks. We have extensive experience interfacing with DATEV, Stripe, PayPal, HubSpot, Salesforce, n8n, and custom internal APIs."
      ),
    },
    {
      q: t(
        "Sind die entwickelten Websites und Apps barrierefrei nach dem BFSG-Gesetz?",
        "Are your websites and apps compliant with the European Accessibility Act (BFSG)?"
      ),
      a: t(
        "Ja. Ab Juni 2025 gilt in Deutschland und der EU das Barrierefreiheitsstärkungsgesetz (BFSG). Wir bauen Anwendungen nach den internationalen WCAG 2.1 AA Standards mit sauberer semantischer Struktur, Screenreader-Unterstützung und optimalen Kontrasten.",
        "Yes. Starting June 2025, the European Accessibility Act (BFSG in Germany) is legally mandated for consumer and e-commerce services. We build all applications adhering to WCAG 2.1 AA standards with semantic HTML, screen reader support, and compliant contrast ratios."
      ),
    },
  ];

  return (
    <section id="faq" className="py-10 sm:py-12 lg:py-16  bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t("HÄUFIG GESTELLTE FRAGEN", "FREQUENTLY ASKED QUESTIONS")}</span>
          </div>

          <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3 text-center">
            {t("Antworten auf Ihre wichtigsten Fragen", "Clear Answers to Your Key Questions")}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-7 sm:mb-8 font-normal text-center">
            {t(
              "Alles, was Sie über unsere Zusammenarbeit, Kosten, Datenschutz und technische Umsetzung wissen möchten.",
              "Everything you need to know regarding our workflow, fixed pricing, data privacy, and engineering process."
            )}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-[5px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/80 border-orange-300/80 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14px] sm:text-[17px] font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-orange-500 text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[13px] sm:text-[16px]  text-slate-600 leading-relaxed border-t border-slate-100/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Help Box */}
        <div className="p-6 rounded-[5px] bg-blue-50/60 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center  flex-col sm:flex-row gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[16px] sm:text-[22px] font-bold text-slate-900">
                {t("Haben Sie eine spezielle technische Frage?", "Have a specific technical question?")}
              </h4>
              <p className="text-base sm:text-lg text-slate-600">
                {t(
                  "Sprechen Sie direkt mit einem unserer Tech Leads – unverbindlich und kostenlos.",
                  "Speak directly with one of our tech leads — complimentary and without obligation."
                )}
              </p>
            </div>
          </div>

          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shrink-0"
            >
              <span>{t("Frage stellen", "Ask a Question")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
