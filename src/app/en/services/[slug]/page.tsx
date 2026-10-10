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
  return servicesData.map((s) => ({ slug: s.slugEn }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slugEn === slug);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/en/services/${service.slugEn}`;
  const germanUrl = `${SITE_URL}/de/services/${service.slugDe}`;
  const ogImage = service.heroImage ? `${SITE_URL}${service.heroImage}` : DEFAULT_OG_IMAGE;

  return {
    title: { absolute: service.seoTitleEn },
    description: service.metaDescriptionEn,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        "de-DE": germanUrl,
        "x-default": germanUrl,
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
      title: service.seoTitleEn,
      description: service.metaDescriptionEn,
      url: canonicalUrl,
      siteName: "Nexa Solutions",
      locale: "en_US",
      alternateLocale: ["de_DE"],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${service.titleEn} - Nexa Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitleEn,
      description: service.metaDescriptionEn,
      images: [ogImage],
    },
  };
}

export default async function EnglishServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slugEn === slug);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/en/services/${service.slugEn}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1En,
    serviceType: service.titleEn,
    provider: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: SITE_URL,
    },
    areaServed: ["DE", "AT", "CH", "US", "GB"],
    description: service.metaDescriptionEn,
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
        name: service.titleEn,
        item: canonicalUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqEn.map((faq) => ({
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
      <ServiceDetailView service={service} locale="en" />
    </>
  );
}
