import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationDialogue from "@/components/illustrations/IllustrationDialogue";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Tabletop exercise & incident response oefening | Millecam",
  description:
    "Interactieve scenario-oefeningen die testen of jouw incidentresponsplan standhoudt in de praktijk, niet enkel op papier.",
};

const VOORWIE = [
  {
    titel: "Een plan dat nooit getest werd",
    tekst: "Er ligt een incidentresponsplan, maar niemand weet hoe het team écht zou reageren op een concreet scenario.",
  },
  {
    titel: "Aantoonbaarheid vereist het",
    tekst: "NIS2 of ISO 27001 vragen bewijs dat procedures ook geoefend worden, niet enkel gedocumenteerd zijn.",
  },
  {
    titel: "Theorie omzetten in reflex",
    tekst: "Het team kent de policy, maar heeft nog nooit onder tijdsdruk moeten beslissen wie wat doet.",
  },
];

const DELIVERABLES = [
  "Scenario op maat, afgestemd op sector en risicoprofiel",
  "Begeleide sessie (een halve tot volledige dag, afhankelijk van de scope)",
  "Observatie van besluitvorming, communicatie en escalatiepaden tijdens de oefening",
  "Rapportage met concrete leerpunten en actiepunten",
  "Aanbevelingen voor aanpassing van het incidentresponsplan",
];

const STAPPEN = [
  { naam: "Scenario-ontwerp", tekst: "Een realistisch scenario, afgestemd op de organisatie." },
  { naam: "Begeleide sessie", tekst: "Het team doorloopt het scenario onder begeleiding." },
  { naam: "Rapportage & opvolging", tekst: "Leerpunten, actiepunten, en waar nodig een bijgewerkt plan." },
];

export default function TabletopExercisesPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">Tabletop exercises</span>: theorie omgezet in reflex
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              Interactieve scenario-oefeningen die een team door een gesimuleerd incident leiden, om te
              testen of procedures in de praktijk standhouden: vóór een echt incident, niet erna.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Plan een tabletop exercise</Button>
              <Button href="/diensten" variant="secondary">Bekijk alle diensten</Button>
            </div>
          </div>
          <IllustrationDialogue className="hidden h-28 w-28 shrink-0 md:block" />
        </div>
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Voor wie is dit relevant?</h2>
        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x-2 md:divide-terracotta-light"
          itemClassName="md:pl-8 md:first:pl-0"
          items={VOORWIE.map((v) => (
            <Fragment key={v.titel}>
              <h3 className="font-serif text-lg font-semibold text-ink">{v.titel}</h3>
              <p className="mt-3 text-sm text-ink/70">{v.tekst}</p>
            </Fragment>
          ))}
        />
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">Wat Millecam doet</h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          Een scenario op maat (bijvoorbeeld ransomware, een datalek, of uitval bij een kritieke
          leverancier) afgestemd op de sector en de risico&apos;s van de organisatie, gevolgd door een
          begeleide sessie waarin besluitvorming en communicatie onder realistische druk worden getest.
        </p>
      </Section>

      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">Wat je concreet krijgt</h2>
        <RevealGroup
          as="ul"
          itemAs="li"
          className="mt-10 grid gap-4 md:grid-cols-2"
          itemClassName="flex items-start gap-3 text-sm text-paper/80"
          items={DELIVERABLES.map((d) => (
            <Fragment key={d}>
              <PillarGlyph className="mt-1 h-4 w-3 shrink-0" color="#D97A52" />
              <span>{d}</span>
            </Fragment>
          ))}
        />
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Hoe dit in de praktijk verloopt</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STAPPEN.map((s, i) => (
            <div key={s.naam} className="border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
              <p className="text-xs font-medium text-muted">Stap {i + 1}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{s.naam}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.tekst}</p>
            </div>
          ))}
        </div>
        <Link href="/aanpak" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Meer over de aanpak
        </Link>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Resultaat</h2>
            <p className="mt-4 text-ink/70">
              Een team dat weet wat te doen vóór een incident zich voordoet, met een geteste (niet enkel
              geschreven) respons.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Waarom Millecam</h2>
            <p className="mt-4 text-ink/70">
              Eén vast aanspreekpunt, geen wisselend team. Rechtstreeks contact met wie het werk uitvoert.{" "}
              <Link href="/over#credentials" className="text-terracotta hover:underline">
                Meer over Robin
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Klaar om te starten?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Een vrijblijvend gesprek van dertig minuten is genoeg om te bepalen of, en hoe, Millecam kan
            helpen.
          </p>
          <Button href="/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Plan een tabletop exercise
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
