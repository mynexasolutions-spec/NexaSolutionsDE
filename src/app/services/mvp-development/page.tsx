import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import MvpDevelopmentClient from "./MvpDevelopmentClient";

export const metadata: Metadata = {
  title: "MVP Development in 4-6 Weeks | Rapid Startup Prototyping | Nexa Solutions",
  description:
    "Launch your Minimum Viable Product (MVP) in 4-6 weeks with Nexa Solutions. High-performance Next.js, React Native, Supabase, and AI workflow automation. Transparent fixed pricing, investor-ready code, and 100% IP ownership.",
  alternates: {
    canonical: `${SITE_URL}/services/mvp-development`,
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
    title: "MVP Development Services in 4-6 Weeks | Nexa Solutions",
    description:
      "Turn your vision into a live, scalable product in weeks. We engineer high-performance web & mobile MVPs with modern tech stacks, rock-solid security, and scalable databases.",
    url: `${SITE_URL}/services/mvp-development`,
    siteName: "Nexa Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MVP Development Services - Nexa Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development in 4-6 Weeks | Nexa Solutions",
    description:
      "Rapid, scalable MVP engineering for founders and corporate innovators. Launch in 4-6 weeks with zero tech debt.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function MvpDevelopmentPage() {
  const canonicalUrl = `${SITE_URL}/services/mvp-development`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MVP Development - Rapid Prototyping & Software Engineering",
    serviceType: "MVP Development & Startup Prototyping",
    provider: {
      "@type": "Organization",
      name: "Nexa Solutions",
      url: SITE_URL,
    },
    areaServed: ["DE", "AT", "CH", "US", "GB", "IN"],
    description:
      "Full-cycle Minimum Viable Product (MVP) development for startups and enterprise innovators in 4-6 weeks with Next.js, React Native, and Supabase.",
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
        name: "MVP Development",
        item: canonicalUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can we launch our MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our sprint framework delivers an investor-ready, production MVP in 4 to 6 weeks, from initial wireframing to live cloud deployment.",
        },
      },
      {
        "@type": "Question",
        name: "Can the MVP codebase scale after raising funding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Unlike fragile no-code prototypes, we write clean TypeScript code with Next.js, PostgreSQL/Supabase, and modular API architecture that easily scales to hundreds of thousands of users.",
        },
      },
      {
        "@type": "Question",
        name: "Who owns the intellectual property (IP) and code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You retain 100% ownership of all deliverables, repositories, design files, and database schemas upon project completion.",
        },
      },
      {
        "@type": "Question",
        name: "How do you prevent scope creep during development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We run a strict Week-1 scoping workshop defining your North Star metric and Core User Journey. Nice-to-have features are prioritized in an Phase 2 backlog.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <MvpDevelopmentClient />
    </>
  );
}
