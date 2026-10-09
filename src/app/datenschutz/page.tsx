// TODO: Dieser Entwurf dient als Struktur-Vorlage und muss zwingend vor Live-Nutzung von einem Fachanwalt für IT-Recht geprüft und durch die realen Firmendaten vervollständigt werden.
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import DatenschutzClient from "./DatenschutzClient";

export const metadata: Metadata = {
  title: {
    absolute: "Datenschutzerklärung | Nexa Solutions",
  },
  description:
    "Datenschutzerklärung der Nexa Solutions: Transparente Informationen zur Verarbeitung personenbezogener Daten, Cookies und Nutzerrechten nach DSGVO.",
  alternates: {
    canonical: `${SITE_URL}/datenschutz`,
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

export default function DatenschutzPage() {
  return <DatenschutzClient />;
}
