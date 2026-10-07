// TODO: Dieser Entwurf dient als Struktur-Vorlage und muss zwingend vor Live-Nutzung von einem Fachanwalt für IT-Recht geprüft und durch die realen Firmendaten vervollständigt werden.
import type { Metadata } from "next";
import DatenschutzClient from "./DatenschutzClient";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Nexa Solutions",
  description: "Datenschutzerklärung der Nexa Solutions nach DSGVO.",
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
