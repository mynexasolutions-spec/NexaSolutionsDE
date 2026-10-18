import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
