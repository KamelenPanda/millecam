import { Fragment } from "react";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import ScrollTimelineVertical from "@/components/ScrollTimelineVertical";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Aanpak | Millecam",
  description: "Van huidige situatie tot aantoonbare compliance: hoe een traject bij Millecam verloopt, stap voor stap.",
};

const STAPPEN = [
  {
    nummer: "1",
    naam: "Begrijpen",
    tekst:
      "Welke verplichtingen gelden, wat de scope is, en welk kader (NIS2, CyFun, ISO 27001 of AVG) voor jouw organisatie relevant is, vóór er iets geïmplementeerd wordt.",
  },
  {
    nummer: "2",
    naam: "Beoordelen",
    tekst:
      "Een GAP-analyse: documentenreview, interviews met verantwoordelijken, en een tweedimensionale scoring (documentatie én implementatie) per control. Resultaat: een helder beeld, geen jargon-rapport.",
  },
  {
    nummer: "3",
    naam: "Bouwen",
    tekst:
      "Bevindingen vertaald naar beleid, procedures en technische maatregelen, met bewijsvoering die overeind blijft. Millecam coördineert, jij houdt overzicht: geen zwarte-doostraject.",
  },
  {
    nummer: "4",
    naam: "Valideren",
    tekst:
      "Interne audit, directiebeoordeling en waar relevant een tabletop-oefening om te toetsen of de maatregelen ook standhouden, met remediatie waar nodig.",
  },
  {
    nummer: "5",
    naam: "Aantonen",
    tekst:
      "Auditklaar wanneer een toezichthouder, klant of certificeringsaudit erom vraagt. Daarna blijft er een vast aanspreekpunt via DPO-as-a-Service of fractional ondersteuning, zonder dat je iemand aanwerft.",
  },
];

const PRINCIPES = [
  "Eén vast aanspreekpunt: geen wisselende consultants",
  "Concrete rapportage: geen tachtig pagina's compliance-jargon",
  "Realistisch tempo, afgestemd op wat een KMO aankan, niet op een corporate draaiboek",
  "Framework-onafhankelijk advies: het kader volgt de situatie, niet omgekeerd",
];

export default function AanpakPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <PillarGlyph className="mb-4 h-6 w-5" />
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          Hoe een traject bij <span className="text-terracotta">Millecam</span> verloopt
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Geen generieke methodiek van de plank. Elk traject start met dezelfde vraag: waar sta je
          vandaag, en wat is realistisch haalbaar met de middelen die je hebt. Vijf stappen van
          huidige situatie naar aantoonbare compliance.
        </p>
      </Section>

      <Section className="bg-white pt-10">
        <ScrollTimelineVertical stappen={STAPPEN} />
      </Section>

      <Section dark>
        <h2 className="font-serif text-3xl font-semibold">Wat je van Millecam mag verwachten</h2>
        <RevealGroup
          as="ul"
          itemAs="li"
          className="mt-8 grid gap-4 md:grid-cols-2"
          itemClassName="flex items-center gap-3 text-sm text-paper/80"
          items={PRINCIPES.map((p) => (
            <Fragment key={p}>
              <PillarGlyph className="h-4 w-3 shrink-0" color="#D97A52" />
              {p}
            </Fragment>
          ))}
        />
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">
            Benieuwd hoe dat er voor jouw organisatie uitziet?
          </h2>
          <Button href="/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Plan een gesprek
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
