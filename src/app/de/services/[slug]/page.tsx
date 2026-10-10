import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { servicesData } from "@/data/servicesData";
import ServiceDetailView from "@/components/ServiceDetailView";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slugDe }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slugDe === slug);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/de/services/${service.slugDe}`;
  const englishUrl = `${SITE_URL}/en/services/${service.slugEn}`;
  const ogImage = service.heroImage ? `${SITE_URL}${service.heroImage}` : DEFAULT_OG_IMAGE;

  return {
    title: { absolute: service.seoTitleDe },
    description: service.metaDescriptionDe,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "de-DE": canonicalUrl,
        en: englishUrl,
        "x-default": canonicalUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: service.seoTitleDe,
      description: service.metaDescriptionDe,
      url: canonicalUrl,
      siteName: "Nexa Solutions",
      locale: "de_DE",
      alternateLocale: ["en_US"],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${service.titleDe} - Nexa Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitleDe,
      description: service.metaDescriptionDe,
      images: [ogImage],
    },
  };
}

export default async function GermanServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slugDe === slug);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/de/services/${service.slugDe}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1De,
    serviceType: service.titleDe,
    provider: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: SITE_URL,
    },
    areaServed: ["DE", "AT", "CH"],
    description: service.metaDescriptionDe,
    url: canonicalUrl,
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
        name: "Services",
        item: `${SITE_URL}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.titleDe,
        item: canonicalUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqDe.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <ServiceDetailView service={service} locale="de" />
    </>
  );
}
