import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { solutionsData, getSolutionBySlug } from "@/data/solutions";
import SolutionDetailClient from "./SolutionDetailClient";

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
    .filter((rel): rel is NonNullable<typeof rel> => Boolean(rel));

  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <SolutionDetailClient
        solution={solution}
        relatedSolutions={relatedSolutions}
      />
    </>
  );
}
