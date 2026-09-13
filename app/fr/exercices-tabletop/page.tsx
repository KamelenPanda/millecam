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
  title: "Exercice tabletop & simulation de réponse aux incidents | Millecam",
  description:
    "Des exercices de simulation interactifs qui testent si votre plan de réponse aux incidents tient la route en pratique — pas seulement sur papier.",
};

const VOORWIE = [
  {
    titel: "Un plan qui n'a jamais été testé",
    tekst: "Il existe un plan de réponse aux incidents, mais personne ne sait comment l'équipe réagirait réellement face à un scénario concret.",
  },
  {
    titel: "La démonstrabilité l'exige",
    tekst: "NIS2 ou ISO 27001 exigent la preuve que les procédures sont aussi mises en pratique, pas seulement documentées.",
  },
  {
    titel: "Transformer la théorie en réflexe",
    tekst: "L'équipe connaît la politique, mais n'a encore jamais dû décider, sous la pression du temps, qui fait quoi.",
  },
];

const DELIVERABLES = [
  "Un scénario sur mesure, adapté au secteur et au profil de risque",
  "Une séance encadrée (d'une demi-journée à une journée complète, selon la portée)",
  "Observation de la prise de décision, de la communication et des voies d'escalade pendant l'exercice",
  "Un rapport avec des enseignements concrets et des actions à mener",
  "Des recommandations pour adapter le plan de réponse aux incidents",
];

const STAPPEN = [
  { naam: "Conception du scénario", tekst: "Un scénario réaliste, adapté à l'organisation." },
  { naam: "Séance encadrée", tekst: "L'équipe traverse le scénario sous encadrement." },
  { naam: "Rapport & suivi", tekst: "Enseignements, actions à mener et, si nécessaire, un plan actualisé." },
];

export default function ExercicesTabletopPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">Exercice tabletop</span> : la théorie transformée en
              réflexe
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              Des exercices de simulation interactifs qui font traverser à une équipe un incident simulé,
              pour tester si les procédures tiennent la route en pratique — avant un incident réel, pas
              après.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/fr/contact" variant="primary">Planifier un exercice tabletop</Button>
              <Button href="/fr/services" variant="secondary">Voir tous les services</Button>
            </div>
          </div>
          <IllustrationDialogue className="hidden h-28 w-28 shrink-0 md:block" />
        </div>
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Pour qui est-ce pertinent ?</h2>
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Ce que fait Millecam</h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          Un scénario sur mesure — par exemple un ransomware, une fuite de données, ou une panne chez un
          fournisseur critique — adapté au secteur et aux risques de l&apos;organisation, suivi
          d&apos;une séance encadrée durant laquelle la prise de décision et la communication sont
          testées sous une pression réaliste.
        </p>
      </Section>

      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">Ce que vous obtenez concrètement</h2>
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Comment cela se déroule dans la pratique</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STAPPEN.map((s, i) => (
            <div key={s.naam} className="border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
              <p className="text-xs font-medium text-muted">Étape {i + 1}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{s.naam}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.tekst}</p>
            </div>
          ))}
        </div>
        <Link href="/fr/approche" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          En savoir plus sur l&apos;approche
        </Link>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Résultat</h2>
            <p className="mt-4 text-ink/70">
              Une équipe qui sait quoi faire avant qu&apos;un incident ne survienne, avec une réponse
              testée — pas seulement rédigée.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Pourquoi Millecam</h2>
            <p className="mt-4 text-ink/70">
              Un seul point de contact fixe, pas d&apos;équipe qui change. Un contact direct avec la
              personne qui effectue le travail.{" "}
              <Link href="/fr/a-propos#credentials" className="text-terracotta hover:underline">
                En savoir plus sur Robin
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Prêt(e) à démarrer ?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Un entretien de trente minutes, sans engagement, suffit pour déterminer si, et comment,
            Millecam peut vous aider.
          </p>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Planifier un exercice tabletop
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
