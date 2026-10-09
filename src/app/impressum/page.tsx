// TODO: Dieser Entwurf dient als Struktur-Vorlage und muss zwingend vor Live-Nutzung von einem Fachanwalt für IT-Recht geprüft und durch die realen Firmendaten vervollständigt werden.
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import ImpressumClient from "./ImpressumClient";

export const metadata: Metadata = {
  title: {
    absolute: "Impressum | Nexa Solutions",
  },
  description:
    "Impressum und rechtliche Anbieterkennzeichnung der Nexa Solutions gemäß § 5 DDG. Alle Kontaktdaten und Unternehmensangaben im offiziellen Überblick.",
  alternates: {
    canonical: `${SITE_URL}/impressum`,
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

export default function ImpressumPage() {
  return <ImpressumClient />;
}
