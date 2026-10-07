// TODO: Dieser Entwurf dient als Struktur-Vorlage und muss zwingend vor Live-Nutzung von einem Fachanwalt für IT-Recht geprüft und durch die realen Firmendaten vervollständigt werden.
import type { Metadata } from "next";
import ImpressumClient from "./ImpressumClient";

export const metadata: Metadata = {
  title: "Impressum | Nexa Solutions",
  description: "Impressum und rechtliche Angaben der Nexa Solutions.",
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
