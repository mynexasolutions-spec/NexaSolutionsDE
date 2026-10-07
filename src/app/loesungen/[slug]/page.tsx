import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { solutionsData, getSolutionBySlug } from "@/data/solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutionsData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return pageMetadata({
    title: solution.title,
    description: solution.description,
    path: `/loesungen/${solution.slug}`,
  });
}

function renderWithLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  if (!linkRegex.test(text)) return text;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  linkRegex.lastIndex = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    parts.push(
      <Link
        key={match.index}
        href={url}
        className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.h1,
    serviceType: "Individuelle Softwarelösung & Entwicklung",
    provider: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: SITE_URL,
    },
    areaServed: ["DE", "AT", "CH"],
    description: solution.description,
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
      {
        "@type": "ListItem",
        position: 3,
        name: solution.h1,
        item: `${SITE_URL}/loesungen/${solution.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const relatedSolutions = solution.related
    .map((relSlug) => getSolutionBySlug(relSlug))
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFE] text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Navigation Bar */}
        <div className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li>
                <Link href="/loesungen" className="hover:text-orange-600 transition-colors">
                  Lösungen
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li className="text-slate-900 font-medium truncate max-w-xs sm:max-w-md">
                {solution.h1}
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 text-orange-700 text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{solution.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0F172A] tracking-tight leading-[1.12] mb-6">
              {solution.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              {solution.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Kostenlose Erstberatung vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/website-kosten"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[5px] bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-semibold text-sm transition-all shadow-xs"
              >
                <span>Software & Website Kosten</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl space-y-12">
            {solution.sections.map((sec, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs"
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {sec.h2}
                </h2>

                <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  {sec.body.map((para, pIdx) => (
                    <p key={pIdx}>{renderWithLinks(para)}</p>
                  ))}
                </div>

                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
                    {sec.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/90 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Häufig gestellte Fragen</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              FAQ zu {solution.h1}
            </h2>

            <div className="space-y-4">
              {solution.faq.map((item, fIdx) => (
                <details
                  key={fIdx}
                  className="group bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs open:border-orange-300 transition-colors"
                >
                  <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between gap-4 text-base sm:text-lg select-none list-none">
                    <span>{item.q}</span>
                    <span className="text-orange-500 font-bold text-xl group-open:rotate-45 transition-transform shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-100">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-wider uppercase text-orange-400 block mb-2">
                Jetzt unverbindlich anfragen
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Bereit für eine maßgeschneiderte Lösung?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-6">
                Wir beraten Sie persönlich zu Architektur, Zeitplan und Budget. Erhalten Sie eine transparente Einschätzung innerhalb von 24 Stunden.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm shadow-md transition-all"
                >
                  <span>Erstberatung starten</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
                >
                  <span>Unsere Web-Services</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Weitere Lösungen Internal Linking */}
        {relatedSolutions.length > 0 && (
          <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-600" />
                <span>Weitere maßgeschneiderte Lösungen</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedSolutions.map((rel) => {
                  if (!rel) return null;
                  return (
                    <Link
                      key={rel.slug}
                      href={`/loesungen/${rel.slug}`}
                      className="group bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md hover:border-orange-200 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block mb-1">
                          {rel.badge}
                        </span>
                        <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors text-base mb-2">
                          {rel.h1}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                          {rel.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                        <span>Details ansehen</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
