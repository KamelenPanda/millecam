import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationNis2 from "@/components/illustrations/IllustrationNis2";
import IllustrationIso27001 from "@/components/illustrations/IllustrationIso27001";
import IllustrationCyfun from "@/components/illustrations/IllustrationCyfun";
import IllustrationGdpr from "@/components/illustrations/IllustrationGdpr";

export const metadata: Metadata = {
  title: "Diensten | Millecam",
  description: "GAP-analyse, implementatietrajecten, DPO-as-a-Service, tabletop exercises en fractional GRC-ondersteuning.",
};

const DIENSTEN = [
  {
    naam: "GAP-analyse",
    vorm: "Vaste prijs, kort traject",
    voorWie: "Organisaties die willen weten waar ze staan t.o.v. NIS2, ISO 27001 of CyFun.",
    watJeKrijgt: "Rapport met scoring per control, geprioriteerde bevindingen en een concreet stappenplan.",
  },
  {
    naam: "Implementatietraject",
    vorm: "Projectbasis",
    voorWie: "Organisaties die van bevindingen naar aantoonbare compliance willen.",
    watJeKrijgt: "Begeleiding bij beleid, documentatie en technische maatregelen. Jij houdt de regie.",
  },
  {
    naam: "DPO-as-a-Service",
    vorm: "Maandelijkse retainer",
    voorWie: "Organisaties die een DPO nodig hebben, geen fulltime rol.",
    watJeKrijgt: "Erkend extern aanspreekpunt voor AVG-vraagstukken, meldingen en toezicht op verwerkingen.",
  },
  {
    naam: "Tabletop exercises & awareness",
    vorm: "Projectbasis / event",
    voorWie: "Teams die theorie willen omzetten in reflex: vóór een incident, niet erna.",
    watJeKrijgt: "Interactieve scenario-oefeningen op maat, met een concrete rapportage van leerpunten.",
  },
  {
    naam: "Fractional GRC-ondersteuning",
    vorm: "Dagprijs, doorlopend",
    voorWie: "Organisaties die af en toe (of structureel) compliance-capaciteit nodig hebben zonder aan te werven.",
    watJeKrijgt: "Vaste beschikbaarheid, op het ritme dat past.",
  },
];

const FRAMEWORKS = [
  {
    naam: "NIS2",
    tekst: "Europese cybersecurity-richtlijn voor essentiële en belangrijke entiteiten, relevant vanaf een bepaalde omvang of sector.",
    glyph: <IllustrationNis2 className="h-10 w-10 shrink-0" />,
  },
  {
    naam: "ISO 27001",
    tekst: "Internationale norm voor informatiebeveiliging. Vaak een contractvoorwaarde bij klanten of aanbestedingen.",
    glyph: <IllustrationIso27001 className="h-10 w-10 shrink-0" />,
  },
  {
    naam: "CyFun",
    tekst: "Het Belgische CyberFundamentals-kader van het Centre for Cybersecurity Belgium: een toegankelijk alternatief voor NIS2-aantoonbaarheid.",
    glyph: <IllustrationCyfun className="h-10 w-10 shrink-0" />,
  },
  {
    naam: "GDPR / AVG",
    tekst: "Europese privacywetgeving, van toepassing op vrijwel elke organisatie die persoonsgegevens verwerkt.",
    glyph: <IllustrationGdpr className="h-10 w-10 shrink-0" />,
  },
];

export default function DienstenPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          Van een eerste GAP-analyse tot doorlopende ondersteuning
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Een aanbod dat meegroeit met wat je nodig hebt, niet met wat een pakket toevallig bevat.
        </p>
      </Section>

      <Section className="bg-white pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {DIENSTEN.map((d) => (
            <ServiceCard key={d.naam} {...d} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">Waarin Millecam gespecialiseerd is</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {FRAMEWORKS.map((f) => (
            <div
              key={f.naam}
              className="flex items-start gap-5 border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]"
            >
              {f.glyph}
              <div>
                <p className="font-serif text-lg font-semibold text-ink">{f.naam}</p>
                <p className="mt-1 text-sm text-ink/70">{f.tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-md pt-14 text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Niet zeker welke dienst past?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Plan een vrijblijvend gesprek. Binnen dertig minuten weet je welke aanpak bij jouw situatie
            past.
          </p>
          <Button href="/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Plan een vrijblijvend gesprek
          </Button>
        </div>
      </Section>
    </>
  );
}
