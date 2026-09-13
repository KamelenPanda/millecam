import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import Reveal from "@/components/Reveal";
import CaseJourney from "@/components/CaseJourney";
import IllustrationIso27001 from "@/components/illustrations/IllustrationIso27001";
import IllustrationCyfun from "@/components/illustrations/IllustrationCyfun";
import IllustrationBuild from "@/components/illustrations/IllustrationBuild";

export const metadata: Metadata = {
  title: "Études de cas | Millecam",
  description:
    "Études de cas anonymisées de trajets ISO 27001, CyberFundamentals et gouvernance de la cybersécurité.",
};

type Case = {
  naam: string;
  sector: string;
  omvang: string;
  kader: string;
  situatie: string;
  uitdaging: string;
  aanpak: string;
  geleverd: string;
  resultaat: string;
  glyph: React.ReactNode;
};

const CASES: Case[] = [
  {
    naam: "Trajet de certification ISO 27001",
    sector: "AdTech / SaaS",
    omvang: "±40 employés",
    kader: "ISO/IEC 27001:2022",
    situatie:
      "Une organisation adtech/SaaS en forte croissance a reçu d'un client majeur l'exigence d'obtenir la certification ISO 27001 dans un délai limité.",
    uitdaging:
      "Aucun SMSI n'existait encore, la capacité interne était limitée en parallèle du développement produit quotidien, et l'échéance était fixée contractuellement.",
    aanpak:
      "Une analyse GAP, la définition du périmètre, une évaluation des risques et une déclaration d'applicabilité, ainsi que des politiques et procédures adaptées à une équipe logicielle en forte croissance plutôt qu'à un modèle générique.",
    geleverd: "Mise en place complète du SMSI, avec accompagnement jusqu'à et pendant l'audit de certification.",
    resultaat:
      "Un SMSI prêt pour la certification, en phase avec la façon dont l'équipe travaillait réellement, plutôt qu'une bureaucratie imposée en parallèle.",
    glyph: <IllustrationIso27001 className="h-16 w-16 shrink-0" />,
  },
  {
    naam: "Analyse GAP CyberFundamentals",
    sector: "Comptabilité",
    omvang: "11 à 50 employés",
    kader: "CyberFundamentals (CyFun)",
    situatie:
      "Un cabinet comptable souhaitait savoir où il en était en matière de démonstration de conformité NIS2, sans se lancer d'emblée dans un lourd trajet de certification.",
    uitdaging:
      "Aucune expertise interne en sécurité, et une incertitude sur le référentiel — et le niveau — constituant le point de départ le plus réaliste.",
    aanpak:
      "Une analyse GAP par rapport au niveau CyFun retenu, avec des mesures de remédiation réalistes pour un environnement de bureau sans équipe IT propre.",
    geleverd: "Une feuille de route de remédiation concrète.",
    resultaat: "Un plan d'action clair et réalisable plutôt qu'une liste de références normatives.",
    glyph: <IllustrationCyfun className="h-16 w-16 shrink-0" />,
  },
  {
    naam: "Gouvernance et politiques de cybersécurité",
    sector: "Production industrielle",
    omvang: "±50 employés",
    kader: "Gouvernance de la cybersécurité",
    situatie:
      "Une entreprise de production industrielle, avec un environnement mêlant systèmes IT et OT, souhaitait professionnaliser sa politique de cybersécurité.",
    uitdaging:
      "Des mesures techniques étaient partiellement déjà en place, mais nulle part traduites en politiques, procédures ou gouvernance démontrable.",
    aanpak:
      "Traduction des contrôles techniques existants en politiques pratiques et partagées par les équipes — adaptées à un environnement de production, et non à un modèle de bureau générique.",
    geleverd: "Contrôles techniques traduits en politiques pratiques.",
    resultaat: "Une documentation de politique reflétant la réalité de l'atelier de production, et non un ensemble de politiques générique.",
    glyph: <IllustrationBuild className="h-16 w-16 shrink-0" />,
  },
];

export default function EtudesDeCasPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <PillarGlyph className="mb-4 h-6 w-5" />
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          Études de cas issues de <span className="text-terracotta">trajets précédents</span>
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Des exemples anonymisés d&apos;expériences de conseil antérieures, qui ne constituent pas
          des références clients directes de Millecam. Les noms des entreprises ne sont volontairement
          pas mentionnés.
        </p>
      </Section>

      <Section className="bg-white pt-6">
        <div className="space-y-16">
          {CASES.map((c) => (
            <Reveal key={c.naam} className="border-t border-line pt-10 first:border-t-0 first:pt-0">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {c.glyph}
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-ink">{c.naam}</h2>
                    <p className="mt-1 text-sm text-muted">
                      {c.sector} · {c.omvang} · {c.kader}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 hidden max-w-xl md:block">
                <CaseJourney stages={["Situation", "Défi", "Approche", "Résultat"]} />
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Situation</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.situatie}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Défi</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.uitdaging}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Approche</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.aanpak}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Ce que Millecam a livré</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.geleverd}</p>
                </div>
              </div>

              <div className="mt-6 border-l-2 border-terracotta bg-[#FBF9F4] py-4 pl-5 pr-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Résultat</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{c.resultaat}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">
            Vous vous demandez ce que cela peut signifier pour votre organisation ?
          </h2>
          <p className="mt-3 text-sm text-ink/70">
            Un entretien de trente minutes, sans engagement, suffit pour déterminer si, et comment,
            Millecam peut vous aider.
          </p>
          <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Planifier un entretien
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
