import { Fragment } from "react";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationGap from "@/components/illustrations/IllustrationGap";
import IllustrationBuild from "@/components/illustrations/IllustrationBuild";
import IllustrationSupport from "@/components/illustrations/IllustrationSupport";
import ScrollTimelineVertical from "@/components/ScrollTimelineVertical";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Approche | Millecam",
  description: "Comment se déroule un trajet chez Millecam : analyse GAP, mise en œuvre, accompagnement.",
};

const STAPPEN = [
  {
    nummer: "1",
    naam: "Analyse GAP",
    tekst:
      "Revue documentaire, entretiens avec les responsables et scoring à deux dimensions (documentation et mise en œuvre) par contrôle. Résultat : une image claire, pas un rapport truffé de jargon.",
    illustratie: <IllustrationGap className="hidden h-20 w-20 shrink-0 sm:block" />,
  },
  {
    nummer: "2",
    naam: "Mise en œuvre",
    tekst:
      "Les constats traduits en un plan d'action concret : politiques, procédures, mesures techniques. Millecam coordonne, vous gardez la vue d'ensemble : pas de boîte noire.",
    illustratie: <IllustrationBuild className="hidden h-20 w-20 shrink-0 sm:block" />,
  },
  {
    nummer: "3",
    naam: "Accompagnement",
    tekst:
      "La conformité ne s'arrête pas à une signature. Via le DPO-as-a-Service ou l'accompagnement fractionné, vous gardez un point de contact fixe, sans devoir recruter.",
    illustratie: <IllustrationSupport className="hidden h-20 w-20 shrink-0 sm:block" />,
  },
];

const PRINCIPES = [
  "Un point de contact fixe : pas de consultants qui tournent",
  "Un reporting concret : pas quatre-vingts pages de jargon de conformité",
  "Un rythme réaliste, adapté à ce qu'une PME peut absorber, pas un playbook de grande entreprise",
  "Un conseil indépendant du référentiel : c'est le cadre qui suit la situation, pas l'inverse",
];

export default function AanpakPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <PillarGlyph className="mb-4 h-6 w-5" />
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          Comment se déroule un trajet chez <span className="text-terracotta">Millecam</span>
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Pas de méthodologie générique standardisée. Chaque trajet démarre par la même question : où
          en êtes-vous aujourd&apos;hui, et qu&apos;est-ce qui est réalisable avec les moyens dont vous
          disposez.
        </p>
      </Section>

      <Section className="bg-white pt-0">
        <ScrollTimelineVertical stappen={STAPPEN} />
      </Section>

      <Section dark>
        <h2 className="font-serif text-3xl font-semibold">Ce que vous pouvez attendre de Millecam</h2>
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
        <Reveal className="mx-auto max-w-md pt-14 text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">
            Curieux(se) de voir ce que cela donnerait pour votre organisation ?
          </h2>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Planifier un appel
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
