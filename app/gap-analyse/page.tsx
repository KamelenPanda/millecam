import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationGap from "@/components/illustrations/IllustrationGap";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "GAP-analyse compliance | NIS2, ISO 27001, CyFun | Millecam",
  description:
    "Een vaste-prijs GAP-analyse tegen NIS2, ISO 27001, CyberFundamentals of AVG: helder zicht op waar je staat, vóór je investeert in implementatie.",
};

const VOORWIE = [
  {
    titel: "Eerst zicht, dan investeren",
    tekst: "Je wil weten hoe groot de kloof is voor je een implementatietraject start.",
  },
  {
    titel: "Twijfel over het juiste kader",
    tekst: "NIS2, ISO 27001 of CyberFundamentals — welk kader past, en op welk niveau, is nog niet duidelijk.",
  },
  {
    titel: "Een bestaand programma laten toetsen",
    tekst: "Er loopt al een compliance-inspanning, maar niemand heeft objectief laten nakijken of ze volstaat.",
  },
];

const DELIVERABLES = [
  "GAP-rapport met scoring per control (documentatie én implementatie)",
  "Prioritering van bevindingen: kritiek, belangrijk, en nice-to-have",
  "Concreet stappenplan met een realistische inschatting van de inspanning",
  "Onderbouwd advies over het meest geschikte kader of niveau, indien nog niet gekozen",
  "Toelichting van de resultaten aan de directie of het verantwoordelijke team",
];

const STAPPEN = [
  { naam: "Intake & kaderkeuze", tekst: "Welk kader (of welk niveau) relevant is voor deze organisatie." },
  { naam: "Documentenreview & interviews", tekst: "Hier zit het merendeel van de doorlooptijd in." },
  { naam: "Rapport & stappenplan", tekst: "De bevindingen, geprioriteerd en concreet." },
];

export default function GapAnalysePage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">GAP-analyse</span>: weten waar je staat, voor je investeert
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              Een vaste-prijs, kort traject dat in kaart brengt waar je organisatie vandaag staat tegenover
              een gekozen kader — NIS2, ISO 27001, CyberFundamentals of de AVG — voor er geïnvesteerd wordt
              in een volledig implementatietraject.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Start met een GAP-analyse</Button>
              <Button href="/nis2-check" variant="secondary">Niet zeker welk kader?</Button>
            </div>
          </div>
          <IllustrationGap className="hidden h-28 w-28 shrink-0 md:block" />
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
          Documentenreview, interviews met verantwoordelijken, en een tweedimensionale scoring —
          documentatie én effectieve implementatie — per control van het gekozen kader. Het resultaat is
          een helder beeld, geen jargon-rapport.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Hoe een GAP-analyse verloopt</h2>
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
              Een onderbouwde basis om te beslissen — verder investeren, en waarin precies, in plaats van
              te gokken.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Waarom Millecam</h2>
            <p className="mt-4 text-ink/70">
              Eén vast aanspreekpunt, geen wisselend team. Rechtstreeks contact met wie het werk uitvoert —
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
            Start met een GAP-analyse
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
