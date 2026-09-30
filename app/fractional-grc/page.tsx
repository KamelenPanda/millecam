import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationClock from "@/components/illustrations/IllustrationClock";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Fractional GRC-consultant in België | Millecam",
  description:
    "Externe GRC-capaciteit op dagprijs, doorlopend of periodiek. Compliance-ondersteuning zonder iemand aan te werven.",
};

const VOORWIE = [
  {
    titel: "Tussen twee fases in",
    tekst: "Net gecertificeerd of geïmplementeerd, en op zoek naar iemand die het programma levend houdt tot de volgende stap.",
  },
  {
    titel: "Periodieke pieken in nood aan capaciteit",
    tekst: "Het compliance-programma loopt, maar rond audits, nieuwe leveranciers of incidenten ontstaat tijdelijk meer werk dan het interne team aankan.",
  },
  {
    titel: "Testen voor je aanwerft",
    tekst: "Twijfel of een interne GRC-rol nodig is, en de wens om dat eerst te ondervinden zonder meteen iemand vast aan te nemen.",
  },
];

const DELIVERABLES = [
  "Vaste, geplande beschikbaarheid, afgesproken op het ritme dat past",
  "Opvolging van het compliance-programma tussen grotere trajecten in",
  "Ad-hoc advies bij nieuwe verwerkingen, leveranciers of incidenten",
  "Periodieke rapportage aan de directie over de stand van zaken",
  "Flexibiliteit om op of af te schalen naarmate de behoefte verandert",
];

const STAPPEN = [
  { naam: "Scoping van de behoefte", tekst: "Welke taken, op welk ritme, zijn er nodig." },
  { naam: "Vast ritme afspreken", tekst: "Een concrete, voorspelbare inzet, geen losse ad-hoc facturatie." },
  { naam: "Doorlopende inzet", tekst: "Met ruimte om bij te sturen naarmate de situatie evolueert." },
];

export default function FractionalGrcPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">Fractional GRC</span>: capaciteit zonder aanwerving
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              Externe GRC-capaciteit op dagprijs, af en toe of structureel ingezet: voor organisaties die
              compliance-ondersteuning nodig hebben zonder de kost en het risico van een vaste aanwerving.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Bespreek fractional GRC-ondersteuning</Button>
              <Button href="/diensten" variant="secondary">Bekijk alle diensten</Button>
            </div>
          </div>
          <IllustrationClock className="hidden h-28 w-28 shrink-0 md:block" />
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
          Vaste, geplande beschikbaarheid op het ritme dat past (bijvoorbeeld een aantal dagen per maand),
          inzetbaar over het volledige spectrum: van beleidswerk en auditvoorbereiding tot ad-hoc vragen die
          zich tussendoor aandienen.
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
              Compliance-capaciteit die meebeweegt met wat de organisatie op elk moment echt nodig heeft,
              zonder de starheid van een vaste aanwerving.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Waarom Millecam</h2>
            <p className="mt-4 text-ink/70">
              Eén vast aanspreekpunt, geen wisselend team. Rechtstreeks contact met wie het werk uitvoert:
              geen junior-consultant, geen escalatieketen.{" "}
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
            Bespreek fractional GRC-ondersteuning
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
