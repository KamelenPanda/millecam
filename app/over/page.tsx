import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "Over | Millecam",
  description: "Millecam is het onafhankelijke GRC-adviesbureau van Robin Millecam.",
};

export default function OverPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Over Millecam</h1>

      <div className="mt-8 max-w-2xl space-y-6 text-ink/80">
        <p>
          Achter Millecam staat één naam: Robin Millecam. Geen toeval: Millecam is niet enkel de
          merknaam, het is ook gewoon wie er aan de andere kant van de lijn zit. Eén vast
          aanspreekpunt in plaats van een wisselend team, voor organisaties die
          compliance-expertise nodig hebben zonder een interne rol te creëren.
        </p>
        <p>
          Jarenlange ervaring met NIS2-scoping, CyFun-gapanalyses, ISO 27001-documentatie en
          AVG-vraagstukken bij KMO&apos;s in uiteenlopende sectoren, van bouw en transport tot voeding
          en tech. Erkend Data Protection Officer (DPI-gecertificeerd, februari 2025).
        </p>
        <div>
          <PillarGlyph className="h-5 w-4" />
          <p className="mt-3 font-serif text-xl italic text-terracotta">
            Compliance hoort geen doel op zich te zijn. Het is een middel om aantoonbaar in controle te
            zijn: naar een toezichthouder, een klant, of jezelf. Vandaar de belofte: Govern with
            confidence.
          </p>
        </div>
      </div>

      <div className="mt-14 max-w-2xl">
        <h2 className="font-serif text-lg font-semibold text-ink">Credentials</h2>
        <div className="mt-4 border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-serif text-lg font-semibold text-ink">
              Erkend Data Protection Officer
            </p>
            <p className="whitespace-nowrap text-xs text-muted">Sinds februari 2025</p>
          </div>
          <p className="mt-1 text-sm text-ink/70">
            Data Protection Institute (DPI): certificaat geldig 3 jaar, verlengbaar.
          </p>
        </div>
      </div>

      <Button href="/contact" variant="primary" className="mt-10">
        Robin rechtstreeks spreken? Plan een kennismaking.
      </Button>

      {/*
        Redactienotitie: bewust geen naam van de vorige werkgever vermeld — generiek
        gehouden uit professionele koerantie tijdens de overgang. Pas gerust aan.
      */}
    </Section>
  );
}
