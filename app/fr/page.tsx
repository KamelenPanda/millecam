import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import FrameworkList from "@/components/FrameworkList";
import PillarGlyph from "@/components/PillarGlyph";
import HeroWatermark from "@/components/HeroWatermark";
import TornDivider from "@/components/TornDivider";
import SelfAssessment from "@/components/SelfAssessment";
import ScrollTimeline from "@/components/ScrollTimeline";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";
import { selfAssessment as selfAssessmentDict } from "@/lib/content/fr";

export const metadata: Metadata = {
  title: "Millecam : Govern with confidence.",
  description:
    "Une expertise GRC indépendante pour les PME qui ne peuvent pas mettre en place leur conformité en interne, mais doivent pourtant la démontrer. NIS2 · ISO 27001 · CyFun · RGPD.",
};

const DIENSTEN = [
  {
    naam: "Analyse GAP",
    vorm: "Prix fixe, trajet court",
    voorWie: "Les organisations qui veulent savoir où elles en sont par rapport à NIS2, ISO 27001 ou CyFun.",
    watJeKrijgt: "Un rapport avec un score par contrôle, des constats priorisés et un plan d'action concret.",
  },
  {
    naam: "Trajet de mise en œuvre",
    vorm: "Sur base de projet",
    voorWie: "Les organisations qui veulent transformer les constats en conformité démontrable.",
    watJeKrijgt: "Accompagnement sur les politiques, la documentation et les mesures techniques. Vous gardez la main.",
  },
  {
    naam: "DPO-as-a-Service",
    vorm: "Forfait mensuel",
    voorWie: "Les organisations qui ont besoin d'un DPO, pas d'un poste à temps plein.",
    watJeKrijgt: "Un point de contact externe reconnu pour les questions RGPD, les notifications et le suivi.",
  },
  {
    naam: "Tabletop exercises & awareness",
    vorm: "Sur base de projet / événement",
    voorWie: "Les équipes qui veulent transformer la théorie en réflexe.",
    watJeKrijgt: "Des exercices de simulation sur mesure, avec un rapport des enseignements tirés.",
  },
  {
    naam: "Accompagnement GRC fractionné",
    vorm: "Tarif journalier, continu",
    voorWie: "Les organisations qui ont besoin de capacité ponctuellement ou structurellement.",
    watJeKrijgt: "Une disponibilité fiable, au rythme qui vous convient.",
  },
];

const HERKENNING = [
  {
    titel: "NIS2 ou CyFun concerne votre organisation",
    tekst:
      "Vous relevez de la directive NIS2 ou un client/assureur vous demande de démontrer votre conformité, mais vous n'avez pas de responsable conformité en interne.",
  },
  {
    titel: "Vous avez besoin d'un DPO, pas d'un poste à temps plein",
    tekst: "Le RGPD impose un délégué à la protection des données, mais ce rôle ne représente pas une semaine de travail complète.",
  },
  {
    titel: "Un client ou un appel d'offres exige ISO 27001",
    tekst: "La certification est devenue une condition contractuelle, pas une priorité interne.",
  },
];

const STAPPEN = [
  { naam: "Analyse GAP", tekst: "Où vous en êtes aujourd'hui, par rapport au cadre qui vous concerne." },
  { naam: "Mise en œuvre", tekst: "Les constats traduits en politiques, procédures et mesures techniques." },
  { naam: "Accompagnement", tekst: "Un point de contact fixe qui reste, sans que vous ayez à recruter." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pb-20 pt-14 md:flex md:min-h-[88vh] md:items-center md:pb-24 md:pt-20">
        <HeroWatermark />
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.95fr] md:gap-10">
          <div>
            <h1 className="animate-hero-in font-serif text-6xl font-bold italic leading-[1.05] text-terracotta sm:text-7xl lg:text-[5.5rem]">
              Govern with confidence.
            </h1>
            <p
              className="animate-hero-in mt-7 max-w-lg text-lg text-ink/80"
              style={{ animationDelay: "0.1s" }}
            >
              Une expertise GRC indépendante pour les PME qui ne peuvent pas mettre en place leur
              conformité en interne, mais doivent pourtant la démontrer.
            </p>
            <FrameworkList
              items={["NIS2", "ISO 27001", "CyFun", "RGPD"]}
              className="animate-hero-in mt-8"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="animate-hero-in mt-6 flex flex-wrap gap-3"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/fr/over"
                className="inline-flex items-center border border-white/70 bg-white/40 px-4 py-2 text-xs font-medium text-ink shadow-[0_4px_14px_rgba(33,29,24,0.06)] backdrop-blur-md transition-colors hover:bg-white/60"
              >
                Délégué à la protection des données certifié
              </Link>
              <a
                href="https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=1026876048"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center border border-white/70 bg-white/40 px-4 py-2 text-xs font-medium text-ink shadow-[0_4px_14px_rgba(33,29,24,0.06)] backdrop-blur-md transition-colors hover:bg-white/60"
              >
                Numéro d&apos;entreprise (BCE) BE 1026.876.048
              </a>
            </div>
            <div className="animate-hero-in" style={{ animationDelay: "0.4s" }}>
              <Button href="/fr/contact" variant="primary" className="mt-9">
                Planifier un appel gratuit
              </Button>
            </div>
          </div>

          <div className="animate-hero-in" style={{ animationDelay: "0.25s" }}>
            <div className="bg-white p-6 shadow-[0_28px_70px_rgba(33,29,24,0.14)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                Essayez vous-même
              </p>
              <p className="mt-1 text-sm text-ink/70">
                Voici comment fonctionne le scoring dans une analyse GAP.
              </p>
              <div className="mt-6">
                <SelfAssessment dict={selfAssessmentDict} />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <TornDivider color="#FFFFFF" />

      {/* Probleemherkenning */}
      <Section className="bg-white pt-10">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          La conformité est obligatoire. La construire soi-même ne l&apos;est pas.
        </h2>
        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x-2 md:divide-terracotta-light"
          itemClassName="md:pl-8 md:first:pl-0"
          items={HERKENNING.map((h) => (
            <Fragment key={h.titel}>
              <h3 className="font-serif text-lg font-semibold text-ink">{h.titel}</h3>
              <p className="mt-3 text-sm text-ink/70">{h.tekst}</p>
            </Fragment>
          ))}
        />
        <p className="mt-8 italic text-muted">
          Vous vous reconnaissez dans l&apos;une de ces situations ? C&apos;est exactement pour cela que
          Millecam existe. Vous n&apos;êtes pas sûr(e) que NIS2 vous concerne ?{" "}
          <Link href="/fr/nis2-check" className="not-italic text-terracotta hover:underline">
            Faites la courte vérification NIS2
          </Link>
          .
        </p>
      </Section>

      {/* Diensten teaser */}
      <Section className="bg-white">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          Du premier diagnostic à l&apos;accompagnement continu
        </h2>
        <RevealGroup
          className="mt-10 grid gap-6 md:grid-cols-2"
          items={DIENSTEN.map((d) => (
            <ServiceCard key={d.naam} {...d} />
          ))}
        />
        <Link href="/fr/diensten" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Voir tous les services
        </Link>
      </Section>

      {/* Waarom Millecam */}
      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">Un spécialiste, pas un centre d&apos;appels</h2>
        <RevealGroup
          as="ul"
          itemAs="li"
          className="mt-10 grid gap-6 md:grid-cols-3"
          itemClassName="text-paper/80"
          items={[
            <Fragment key="1">
              <PillarGlyph className="h-5 w-4" color="#D97A52" />
              <p className="mt-3 text-sm">
                Un contact direct avec la personne qui effectue le travail : pas de consultant junior,
                pas de chaîne d&apos;escalade.
              </p>
            </Fragment>,
            <Fragment key="2">
              <PillarGlyph className="h-5 w-4" color="#D97A52" />
              <p className="mt-3 text-sm">
                Délégué à la protection des données certifié (certification DPI). Tous les consultants
                GRC ne peuvent pas assumer ce rôle eux-mêmes.
              </p>
            </Fragment>,
            <Fragment key="3">
              <PillarGlyph className="h-5 w-4" color="#D97A52" />
              <p className="mt-3 text-sm">
                Une approche éprouvée pour les trajets CyFun, ISO 27001 et NIS2, de l&apos;analyse GAP à
                la mise en œuvre complète.
              </p>
            </Fragment>,
          ]}
        />
      </Section>
      <TornDivider color="#FFFFFF" />

      {/* Aanpak teaser + Slot CTA */}
      <Section className="bg-white pt-10">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">Comment se déroule un trajet</h2>
        <ScrollTimeline stappen={STAPPEN} />
        <Link href="/fr/aanpak" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          En savoir plus sur l&apos;approche
        </Link>

        <Reveal className="mx-auto mt-16 max-w-md pt-10 text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Prêt(e) à démarrer ?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Un entretien sans engagement de trente minutes suffit pour savoir si, et comment, Millecam
            peut vous aider.
          </p>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Planifier un appel gratuit
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
