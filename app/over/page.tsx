import type { Metadata } from "next";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Over — Millecam",
  description: "Millecam is het onafhankelijke GRC-adviesbureau van Robin.",
};

export default function OverPage() {
  return (
    <Section className="pb-24 pt-16">
      <Eyebrow>Over Millecam</Eyebrow>
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Over Millecam</h1>

      <div className="mt-8 max-w-2xl space-y-6 text-ink/80">
        <p>
          Millecam is het onafhankelijke GRC-adviesbureau van Robin — één vast aanspreekpunt in plaats
          van een wisselend team, voor organisaties die compliance-expertise nodig hebben zonder een
          interne rol te creëren.
        </p>
        <p>
          Jarenlange ervaring met NIS2-scoping, CyFun-gapanalyses, ISO 27001-documentatie en
          AVG-vraagstukken bij KMO&apos;s in uiteenlopende sectoren — van bouw en transport tot voeding
          en tech. Erkend Data Protection Officer (DPI-gecertificeerd, februari 2025).
        </p>
        <p className="font-serif text-xl italic text-terracotta">
          Compliance hoort geen doel op zich te zijn. Het is een middel om aantoonbaar in controle te
          zijn — naar een toezichthouder, een klant, of jezelf. Vandaar de belofte: Govern with
          confidence.
        </p>
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
