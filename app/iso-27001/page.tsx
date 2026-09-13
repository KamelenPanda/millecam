import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationIso27001 from "@/components/illustrations/IllustrationIso27001";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "ISO 27001-consultant voor KMO's in België | Millecam",
  description:
    "ISO/IEC 27001:2022-implementatie van GAP-analyse tot certificeringsaudit. Millecam begeleidt Belgische KMO's stap voor stap naar een werkend ISMS.",
};

const VOORWIE = [
  {
    titel: "Klant of aanbesteding vraagt het",
    tekst: "ISO 27001 is een contractvoorwaarde geworden bij een klant, verzekeraar of aanbesteding — niet (enkel) een interne prioriteit.",
  },
  {
    titel: "Groeiend team, groeiend risico",
    tekst: "Informatiebeveiliging draaide op ad-hoc afspraken en losse documenten. Dat schaalt niet meer mee met de organisatie.",
  },
  {
    titel: "Wél de wil, niet de tijd",
    tekst: "Je weet wat een ISMS moet zijn, maar niemand in het team heeft de bandbreedte om het van scratch op te bouwen.",
  },
];

const DELIVERABLES = [
  "GAP-analyse tegen ISO/IEC 27001:2022, gescoord per control",
  "Scope-definitie van het ISMS (informatiebeveiligingsmanagementsysteem)",
  "Risicobeoordeling en risicobehandelplan",
  "Verklaring van toepasselijkheid (Statement of Applicability)",
  "Beleidsdocumenten en procedures, afgestemd op hoe de organisatie echt werkt",
  "Beveiligingsdoelstellingen die aansluiten bij de bedrijfsvoering",
  "Verzamelen en structureren van bewijsvoering (evidence)",
  "Voorbereiding interne audit",
  "Voorbereiding directiebeoordeling (management review)",
  "Begeleiding tijdens de certificeringsaudit",
  "Remediatie van bevindingen uit audit of interne review",
];

const STAPPEN = [
  { naam: "GAP-analyse", tekst: "Waar sta je vandaag tegenover ISO/IEC 27001:2022, met een concreet stappenplan als resultaat." },
  { naam: "Implementatie", tekst: "ISMS-scope, risicobeoordeling, SoA, beleid en procedures — opgebouwd, niet enkel geschreven." },
  { naam: "Certificering", tekst: "Interne audit, directiebeoordeling en begeleiding tot en tijdens de certificeringsaudit." },
];

export default function Iso27001Page() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">ISO 27001</span>: een ISMS dat écht werkt, niet enkel op
              papier
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              De internationale norm voor informatiebeveiliging. Vaak een contractvoorwaarde bij klanten of
              aanbestedingen — en een goede reden om beveiliging structureel te organiseren in plaats van
              ad hoc.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Bespreek je ISO 27001-traject</Button>
              <Button href="/gap-analyse" variant="secondary">Start met een GAP-analyse</Button>
            </div>
          </div>
          <IllustrationIso27001 className="hidden h-28 w-28 shrink-0 md:block" />
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
          Een GAP-analyse brengt in kaart waar je vandaag staat tegenover ISO/IEC 27001:2022 — per control,
          niet in vage algemeenheden. Van daaruit wordt het ISMS opgebouwd: scope, risicobeoordeling,
          verklaring van toepasselijkheid, beleid en procedures die passen bij hoe de organisatie echt
          werkt. Millecam begeleidt ook de laatste fase: interne audit, directiebeoordeling en de
          certificeringsaudit zelf.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Hoe een ISO 27001-traject verloopt</h2>
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
              Een ISMS dat een auditor kan doorlichten zonder verrassingen: bewijsvoering die klopt,
              beleid dat effectief gevolgd wordt, en een certificaat dat aantoont wat er ook echt gebeurt —
              niet enkel wat er op papier staat.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Waarom Millecam</h2>
            <p className="mt-4 text-ink/70">
              Eén vast aanspreekpunt, geen wisselend team. Rechtstreeks contact met wie het werk uitvoert —
              pragmatische implementatie in plaats van louter theoretisch advies.{" "}
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
            Bespreek je ISO 27001-traject
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
