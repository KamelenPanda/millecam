import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Millecam: Govern with confidence.",
  description:
    "Onafhankelijke GRC-expertise voor KMO's die compliance niet zelf kunnen opbouwen, maar wel moeten aantonen. NIS2 · ISO 27001 · CyFun · GDPR.",
  metadataBase: new URL("https://millecam.be"),
};

// Structured data (schema.org). Only confirmed, real values go in here — a
// placeholder telephone number or a guessed social link would be taken
// literally by search engines, so fields we haven't filled in yet (phone,
// LinkedIn) are left out entirely rather than stubbed.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Millecam",
  description:
    "Onafhankelijk GRC-adviesbureau voor KMO's: NIS2, ISO 27001, CyFun en GDPR.",
  url: "https://millecam.be",
  email: "info@millecam.be",
  vatID: "BE1026876048",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sinte Annalaan 34",
    postalCode: "9300",
    addressLocality: "Aalst",
    addressCountry: "BE",
  },
  founder: {
    "@type": "Person",
    name: "Robin Millecam",
    jobTitle: "GRC Advisor & Data Protection Officer",
  },
  areaServed: "BE",
  knowsAbout: ["NIS2", "ISO 27001", "CyFun", "GDPR"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
