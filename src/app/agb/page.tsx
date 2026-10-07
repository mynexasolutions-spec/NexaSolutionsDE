// TODO: Dieser AGB-Entwurf dient als unverbindliche Struktur-Vorlage und muss zwingend vor Live-Nutzung von einem Fachanwalt für IT-Recht an die genauen Geschäftsbedingungen und Haftungsvorgaben angepasst werden.
import type { Metadata } from "next";
import AgbClient from "./AgbClient";

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
  return <AgbClient />;
}
