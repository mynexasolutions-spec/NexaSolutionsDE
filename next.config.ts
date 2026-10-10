import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/our-work",
        destination: "/projects",
        permanent: true,
      },
      // 16 301 Canonical Redirects for 8 Dedicated Services (DE & EN)
      {
        source: "/services/mitarbeiter-zeiterfassung",
        destination: "/de/services/mitarbeiter-zeiterfassung",
        permanent: true,
      },
      {
        source: "/services/employee-attendance-tracking",
        destination: "/en/services/employee-attendance-tracking",
        permanent: true,
      },
      {
        source: "/services/individuelle-finanzsysteme",
        destination: "/de/services/individuelle-finanzsysteme",
        permanent: true,
      },
      {
        source: "/services/custom-financial-systems",
        destination: "/en/services/custom-financial-systems",
        permanent: true,
      },
      {
        source: "/services/online-shop-entwicklung",
        destination: "/de/services/online-shop-entwicklung",
        permanent: true,
      },
      {
        source: "/services/ecommerce-stores",
        destination: "/en/services/ecommerce-stores",
        permanent: true,
      },
      {
        source: "/services/coaching-kuenstler-portfolios",
        destination: "/de/services/coaching-kuenstler-portfolios",
        permanent: true,
      },
      {
        source: "/services/coaching-artist-portfolios",
        destination: "/en/services/coaching-artist-portfolios",
        permanent: true,
      },
      {
        source: "/services/professionelles-webdesign",
        destination: "/de/services/professionelles-webdesign",
        permanent: true,
      },
      {
        source: "/services/professional-web-design",
        destination: "/en/services/professional-web-design",
        permanent: true,
      },
      {
        source: "/services/websites-fuer-musiker",
        destination: "/de/services/websites-fuer-musiker",
        permanent: true,
      },
      {
        source: "/services/websites-for-musicians",
        destination: "/en/services/websites-for-musicians",
        permanent: true,
      },
      {
        source: "/services/digitale-marketing-kampagnen",
        destination: "/de/services/digitale-marketing-kampagnen",
        permanent: true,
      },
      {
        source: "/services/digital-marketing-campaigns",
        destination: "/en/services/digital-marketing-campaigns",
        permanent: true,
      },
      {
        source: "/services/performance-optimierung",
        destination: "/de/services/performance-optimierung",
        permanent: true,
      },
      {
        source: "/services/performance-optimization",
        destination: "/en/services/performance-optimization",
        permanent: true,
      },
      // 24 301 Canonical Redirects for remaining 12 Dedicated Services (DE & EN)
      {
        source: "/services/llm-integration",
        destination: "/de/services/llm-integration",
        permanent: true,
      },
      {
        source: "/services/ki-fuer-unternehmen",
        destination: "/de/services/ki-fuer-unternehmen",
        permanent: true,
      },
      {
        source: "/services/ai-for-businesses",
        destination: "/en/services/ai-for-businesses",
        permanent: true,
      },
      {
        source: "/services/gastronomie-restaurant-systeme",
        destination: "/de/services/gastronomie-restaurant-systeme",
        permanent: true,
      },
      {
        source: "/services/restaurant-management-systems",
        destination: "/en/services/restaurant-management-systems",
        permanent: true,
      },
      {
        source: "/services/unternehmensverwaltung-systeme",
        destination: "/de/services/unternehmensverwaltung-systeme",
        permanent: true,
      },
      {
        source: "/services/business-management-systems",
        destination: "/en/services/business-management-systems",
        permanent: true,
      },
      {
        source: "/services/geschaeftsprozess-automatisierung",
        destination: "/de/services/geschaeftsprozess-automatisierung",
        permanent: true,
      },
      {
        source: "/services/business-workflow-automation",
        destination: "/en/services/business-workflow-automation",
        permanent: true,
      },
      {
        source: "/services/ki-agenten-automatisierung",
        destination: "/de/services/ki-agenten-automatisierung",
        permanent: true,
      },
      {
        source: "/services/ai-agents-automation",
        destination: "/en/services/ai-agents-automation",
        permanent: true,
      },
      {
        source: "/services/crm-system-entwicklung",
        destination: "/de/services/crm-system-entwicklung",
        permanent: true,
      },
      {
        source: "/services/custom-crm-systems",
        destination: "/en/services/custom-crm-systems",
        permanent: true,
      },
      {
        source: "/services/online-terminbuchungssysteme",
        destination: "/de/services/online-terminbuchungssysteme",
        permanent: true,
      },
      {
        source: "/services/appointment-booking-systems",
        destination: "/en/services/appointment-booking-systems",
        permanent: true,
      },
      {
        source: "/services/rechnungswesen-buchhaltung-software",
        destination: "/de/services/rechnungswesen-buchhaltung-software",
        permanent: true,
      },
      {
        source: "/services/invoicing-accounting-systems",
        destination: "/en/services/invoicing-accounting-systems",
        permanent: true,
      },
      {
        source: "/services/warenwirtschaft-lagerverwaltung",
        destination: "/de/services/warenwirtschaft-lagerverwaltung",
        permanent: true,
      },
      {
        source: "/services/inventory-warehouse-management",
        destination: "/en/services/inventory-warehouse-management",
        permanent: true,
      },
      {
        source: "/services/ki-chatbots-kundenservice",
        destination: "/de/services/ki-chatbots-kundenservice",
        permanent: true,
      },
      {
        source: "/services/smart-ai-chatbots",
        destination: "/en/services/smart-ai-chatbots",
        permanent: true,
      },
      {
        source: "/services/digitale-transformation-beratung",
        destination: "/de/services/digitale-transformation-beratung",
        permanent: true,
      },
      {
        source: "/services/digital-transformation-solutions",
        destination: "/en/services/digital-transformation-solutions",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "nexa-solutions.de",
          },
        ],
        destination: "https://www.nexa-solutions.de/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
