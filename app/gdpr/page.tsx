import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationGdpr from "@/components/illustrations/IllustrationGdpr";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "GDPR-consultant (AVG) voor KMO's in België | Millecam",
  description:
    "GDPR/AVG GAP-analyse, verwerkingsregister, DPIA's en datalekprocedures. Praktisch opgezet, niet enkel een privacyverklaring op de website.",
};

const VOORWIE = [
  {
    titel: "Geen verwerkingsregister of DPIA-proces",
    tekst: "De organisatie verwerkt persoonsgegevens, maar heeft geen actueel verwerkingsregister en geen proces om nieuwe verwerkingen te beoordelen.",
  },
  {
    titel: "DPO-verplichting, geen interne kandidaat",
    tekst: "Een wettelijke DPO-verplichting geldt, maar niemand in het team heeft de tijd, onafhankelijkheid of achtergrond om die rol op te nemen.",
  },
  {
    titel: "Na een incident structureel orde willen",
    tekst: "Een klacht, datalek of audit heeft blootgelegd dat privacy tot nu toe ad hoc werd aangepakt.",
  },
];

const DELIVERABLES = [
  "GAP-analyse tegen de AVG-verplichtingen",
  "Verwerkingsregister, opgebouwd en onderhoudbaar",
  "Werkproces en sjabloon voor DPIA's (gegevensbeschermingseffectbeoordelingen)",
  "Procedure voor het melden van datalekken binnen de wettelijke termijn van 72 uur",
  "Review of opmaak van verwerkersovereenkomsten met leveranciers",
  "Privacybeleid en -verklaringen op maat, geen boilerplate",
  "Bewustmaking van het team over de belangrijkste verplichtingen",
];

const STAPPEN = [
  { naam: "GAP-analyse", tekst: <>Waar sta je vandaag tegenover de AVG-verplichtingen.</> },
  { naam: "Opbouw", tekst: <>Verwerkingsregister, DPIA-proces en procedures op orde.</> },
  {
    naam: "Doorlopende ondersteuning",
    tekst: (
      <>
        Via{" "}
        <Link href="/dpo-as-a-service" className="text-terracotta hover:underline">
          DPO-as-a-Service
        </Link>{" "}
        blijft er een vast aanspreekpunt.
      </>
    ),
  },
];

export default function GdprPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">GDPR / AVG</span>: van privacyverklaring naar werkend
              programma
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              GDPR (AVG) is Europese privacywetgeving, van toepassing op vrijwel elke organisatie die
              persoonsgegevens verwerkt, maar een privacyverklaring op de website is niet hetzelfde als een
              werkend privacyprogramma.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Bespreek je AVG-traject</Button>
              <Button href="/dpo-as-a-service" variant="secondary">Ontdek DPO-as-a-Service</Button>
            </div>
          </div>
          <IllustrationGdpr className="hidden h-28 w-28 shrink-0 md:block" />
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
          Een GAP-analyse tegen de AVG-verplichtingen, gevolgd door de opbouw van een verwerkingsregister,
          een werkbaar DPIA-proces, en het reviewen of opstellen van verwerkersovereenkomsten: met aandacht
          voor wat praktisch haalbaar is voor een KMO, niet een compliance-programma van een multinational.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Hoe een AVG-traject verloopt</h2>
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
              Een privacyprogramma dat standhoudt bij een klacht, audit of datalek, niet enkel een
              documentenmap die nooit geraadpleegd wordt.
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
            Bespreek je AVG-traject
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
