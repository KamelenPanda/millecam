import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationSupport from "@/components/illustrations/IllustrationSupport";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "DPO-as-a-Service | Externe DPO in België | Millecam",
  description:
    "Een erkend, extern Data Protection Officer op maandelijkse basis: voor organisaties die een DPO nodig hebben, geen fulltime rol.",
};

const VOORWIE = [
  {
    titel: "Een wettelijke DPO-verplichting",
    tekst: "Overheidsinstanties, organisaties met grootschalige verwerking, of verwerking van bijzondere categorieën persoonsgegevens, moeten een DPO aanstellen.",
  },
  {
    titel: "Een 'toevallige' interne DPO",
    tekst: "Iemand in het team kreeg de DPO-rol erbij zonder de tijd, onafhankelijkheid of achtergrond om ze volwaardig op te nemen.",
  },
  {
    titel: "Nood aan een erkend aanspreekpunt",
    tekst: "Klanten, medewerkers of de toezichthouder verwachten een duidelijk, extern herkenbaar contactpunt voor privacyvragen.",
  },
];

const DELIVERABLES = [
  "Aanstelling als extern DPO, inclusief aanmelding bij de Gegevensbeschermingsautoriteit",
  "Vast, periodiek overlegmoment met de organisatie",
  "Advies bij nieuwe verwerkingen en DPIA's",
  "Aanspreekpunt voor de toezichthouder en voor betrokkenen (bv. bij een verzoek tot inzage)",
  "Opvolging van meldingsplichten bij datalekken",
  "Jaarlijkse rapportage aan de directie over de stand van zaken",
];

const STAPPEN = [
  { naam: "Kennismaking & scoping", tekst: "Welke verwerkingen, risico's en verwachtingen spelen er." },
  { naam: "Overname van de DPO-rol", tekst: "Formele aanstelling en aanmelding bij de toezichthouder." },
  { naam: "Doorlopende begeleiding", tekst: "Vast ritme van overleg, advies en rapportage." },
];

export default function DpoAsAServicePage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">DPO-as-a-Service</span>: een externe DPO, geen fulltime rol
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              De AVG verplicht in een aantal gevallen een Data Protection Officer, maar die rol vult zelden
              een volledige werkweek. DPO-as-a-Service geeft een erkend extern aanspreekpunt, op
              maandelijkse basis, zonder aanwerving.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Bespreek DPO-as-a-Service</Button>
              <Button href="/gdpr" variant="secondary">Meer over GDPR/AVG</Button>
            </div>
          </div>
          <IllustrationSupport className="hidden h-28 w-28 shrink-0 md:block" />
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
          Robin neemt de wettelijke DPO-rol op als erkend Data Protection Officer (DPI-gecertificeerd,
          sinds februari 2025): toezicht op naleving, advies bij verwerkingen en DPIA&apos;s, en
          aanspreekpunt voor zowel de toezichthouder als betrokkenen, op een vast, voorspelbaar ritme.
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
              Een DPO-functie die effectief werkt (niet enkel een naam op een AVG-register), zonder de
              kost en het risico van een verkeerde interne aanwerving.
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
            Bespreek DPO-as-a-Service
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
