// TODO: Dieser AGB-Entwurf dient als unverbindliche Struktur-Vorlage und muss zwingend vor Live-Nutzung von einem Fachanwalt für IT-Recht an die genauen Geschäftsbedingungen und Haftungsvorgaben angepasst werden.
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import AgbClient from "./AgbClient";

export const metadata: Metadata = {
  title: {
    absolute: "Allgemeine Geschäftsbedingungen | Nexa Solutions",
  },
  description:
    "Allgemeine Geschäftsbedingungen (AGB) der Nexa Solutions für professionelle Software-, Webentwicklungs- und Automatisierungsleistungen im Überblick.",
  alternates: {
    canonical: `${SITE_URL}/agb`,
  },
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
  return <AgbClient />;
}
