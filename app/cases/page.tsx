import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import Reveal from "@/components/Reveal";
import IllustrationIso27001 from "@/components/illustrations/IllustrationIso27001";
import IllustrationCyfun from "@/components/illustrations/IllustrationCyfun";
import IllustrationBuild from "@/components/illustrations/IllustrationBuild";

export const metadata: Metadata = {
  title: "Praktijkvoorbeelden | Millecam",
  description:
    "Geanonimiseerde praktijkvoorbeelden van ISO 27001-, CyberFundamentals- en cybersecurity-governance-trajecten.",
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
    naam: "ISO 27001-certificatietraject",
    sector: "AdTech / SaaS",
    omvang: "±40 medewerkers",
    kader: "ISO/IEC 27001:2022",
    situatie:
      "Een snelgroeiende adtech/SaaS-organisatie kreeg van een grote klant de eis om binnen een beperkte termijn ISO 27001-gecertificeerd te zijn.",
    uitdaging:
      "Er bestond nog geen ISMS, de interne capaciteit was beperkt naast de dagelijkse productontwikkeling, en de deadline lag contractueel vast.",
    aanpak:
      "GAP-analyse, opbouw van scope, risicobeoordeling en verklaring van toepasselijkheid, en beleid en procedures die aansloten bij een snel groeiend software-team in plaats van een generiek sjabloon.",
    geleverd: "Volledige ISMS-opbouw, met begeleiding tot en tijdens de certificeringsaudit.",
    resultaat:
      "Een certificeringsklaar ISMS dat aansloot bij hoe het team daadwerkelijk werkte, in plaats van een opgelegde bureaucratie ernaast.",
    glyph: <IllustrationIso27001 className="h-16 w-16 shrink-0" />,
  },
  {
    naam: "CyberFundamentals GAP-analyse",
    sector: "Accountancy",
    omvang: "11–50 medewerkers",
    kader: "CyberFundamentals (CyFun)",
    situatie:
      "Een boekhoudkantoor wilde weten waar het stond tegenover NIS2-aantoonbaarheid, zonder meteen een zwaar certificeringstraject te starten.",
    uitdaging:
      "Geen interne securityachtergrond, en onduidelijkheid over welk kader — en welk niveau — het meest haalbare startpunt was.",
    aanpak:
      "GAP-analyse tegen het gekozen CyFun-niveau, met remediatiestappen die realistisch waren voor een kantooromgeving zonder eigen IT-team.",
    geleverd: "Een concrete remediatieroadmap.",
    resultaat: "Een helder, uitvoerbaar actieplan in plaats van een lijst met normverwijzingen.",
    glyph: <IllustrationCyfun className="h-16 w-16 shrink-0" />,
  },
  {
    naam: "Cybersecurity governance & policies",
    sector: "Industriële productie",
    omvang: "±50 medewerkers",
    kader: "Cybersecurity governance",
    situatie:
      "Een productiebedrijf met een mix van IT- en OT-systemen wilde zijn cybersecuritybeleid professionaliseren.",
    uitdaging:
      "Technische maatregelen waren deels al aanwezig, maar nergens vertaald naar beleid, procedures of aantoonbare governance.",
    aanpak:
      "Vertaling van bestaande technische controls naar praktisch, gedragen beleid — afgestemd op een productieomgeving, niet op een generiek kantoor-sjabloon.",
    geleverd: "Technische controls vertaald naar praktisch beleid.",
    resultaat: "Beleidsdocumentatie die de praktijk op de productievloer weerspiegelde, geen generieke policy-set.",
    glyph: <IllustrationBuild className="h-16 w-16 shrink-0" />,
  },
];

export default function CasesPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <PillarGlyph className="mb-4 h-6 w-5" />
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          Praktijkvoorbeelden uit <span className="text-terracotta">eerdere trajecten</span>
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Geanonimiseerde voorbeelden van eerdere consultancy-ervaring, niet als rechtstreekse
          Millecam-klantreferenties. Bedrijfsnamen worden bewust niet vermeld.
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

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Situatie</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.situatie}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Uitdaging</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.uitdaging}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Aanpak</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.aanpak}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Wat Millecam leverde</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.geleverd}</p>
                </div>
              </div>

              <div className="mt-6 border-l-2 border-terracotta bg-[#FBF9F4] py-4 pl-5 pr-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Resultaat</p>
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
            Benieuwd wat dit voor jouw organisatie kan betekenen?
          </h2>
          <p className="mt-3 text-sm text-ink/70">
            Een vrijblijvend gesprek van dertig minuten is genoeg om te bepalen of, en hoe, Millecam kan
            helpen.
          </p>
          <Button href="/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Plan een gesprek
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
