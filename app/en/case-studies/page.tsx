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
  title: "Case Studies | Millecam",
  description:
    "Anonymised case studies of ISO 27001, CyberFundamentals and cybersecurity governance tracks.",
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
    naam: "ISO 27001 certification track",
    sector: "AdTech / SaaS",
    omvang: "±40 employees",
    kader: "ISO/IEC 27001:2022",
    situatie:
      "A fast-growing adtech/SaaS organisation was required by a major client to become ISO 27001 certified within a limited timeframe.",
    uitdaging:
      "No ISMS existed yet, internal capacity was limited alongside day-to-day product development, and the deadline was contractually fixed.",
    aanpak:
      "A GAP analysis, scope definition, risk assessment and statement of applicability, and policies and procedures aligned with a fast-growing software team rather than a generic template.",
    geleverd: "Full ISMS build-up, with guidance up to and during the certification audit.",
    resultaat:
      "A certification-ready ISMS that matched how the team actually worked, rather than bureaucracy imposed on top.",
    glyph: <IllustrationIso27001 className="h-16 w-16 shrink-0" />,
  },
  {
    naam: "CyberFundamentals GAP analysis",
    sector: "Accountancy",
    omvang: "11–50 employees",
    kader: "CyberFundamentals (CyFun)",
    situatie:
      "An accounting firm wanted to know where it stood on demonstrating NIS2 compliance, without immediately starting a heavy certification track.",
    uitdaging:
      "No internal security background, and no clarity on which framework — and which level — was the most realistic starting point.",
    aanpak:
      "A GAP analysis against the chosen CyFun level, with remediation steps that were realistic for an office environment without its own IT team.",
    geleverd: "A concrete remediation roadmap.",
    resultaat: "A clear, actionable plan instead of a list of standard references.",
    glyph: <IllustrationCyfun className="h-16 w-16 shrink-0" />,
  },
  {
    naam: "Cybersecurity governance & policies",
    sector: "Manufacturing",
    omvang: "±50 employees",
    kader: "Cybersecurity governance",
    situatie:
      "A manufacturing company with a mix of IT and OT systems wanted to professionalise its cybersecurity policy.",
    uitdaging:
      "Technical measures were partly already in place, but nowhere translated into policy, procedures or demonstrable governance.",
    aanpak:
      "Translation of existing technical controls into practical, supported policy — tailored to a production environment, not a generic office template.",
    geleverd: "Technical controls translated into practical policy.",
    resultaat: "Policy documentation that reflected practice on the shop floor, not a generic policy set.",
    glyph: <IllustrationBuild className="h-16 w-16 shrink-0" />,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <PillarGlyph className="mb-4 h-6 w-5" />
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          Case studies from <span className="text-terracotta">previous engagements</span>
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Anonymised examples of previous consultancy experience, not presented as direct Millecam
          client references. Company names are deliberately not mentioned.
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
                <CaseJourney stages={["Situation", "Challenge", "Approach", "Result"]} />
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Situation</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.situatie}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Challenge</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.uitdaging}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Approach</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.aanpak}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">What Millecam delivered</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.geleverd}</p>
                </div>
              </div>

              <div className="mt-6 border-l-2 border-terracotta bg-[#FBF9F4] py-4 pl-5 pr-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Result</p>
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
            Curious what this could mean for your organisation?
          </h2>
          <p className="mt-3 text-sm text-ink/70">
            A no-obligation thirty-minute conversation is enough to determine whether, and how,
            Millecam can help.
          </p>
          <Button href="/en/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Schedule a conversation
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
