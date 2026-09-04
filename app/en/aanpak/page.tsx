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
  title: "Approach | Millecam",
  description: "How an engagement with Millecam unfolds: GAP analysis, implementation, support.",
};

const STAPPEN = [
  {
    nummer: "1",
    naam: "GAP analysis",
    tekst:
      "Document review, interviews with responsible staff, and two-dimensional scoring (documentation and implementation) per control. Result: a clear picture, not a jargon-filled report.",
    illustratie: <IllustrationGap className="hidden h-20 w-20 shrink-0 sm:block" />,
  },
  {
    nummer: "2",
    naam: "Implementation",
    tekst:
      "Findings translated into a concrete action plan: policy, procedures, technical measures. Millecam coordinates, you keep oversight: no black-box process.",
    illustratie: <IllustrationBuild className="hidden h-20 w-20 shrink-0 sm:block" />,
  },
  {
    nummer: "3",
    naam: "Support",
    tekst:
      "Compliance doesn't stop at a signature. Through DPO-as-a-Service or fractional support, you keep a fixed point of contact, without hiring anyone.",
    illustratie: <IllustrationSupport className="hidden h-20 w-20 shrink-0 sm:block" />,
  },
];

const PRINCIPES = [
  "One fixed point of contact: no rotating consultants",
  "Concrete reporting: not eighty pages of compliance jargon",
  "A realistic pace, matched to what an SME can handle, not a corporate playbook",
  "Framework-independent advice: the framework follows the situation, not the other way around",
];

export default function AanpakPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <PillarGlyph className="mb-4 h-6 w-5" />
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          How an engagement with <span className="text-terracotta">Millecam</span> unfolds
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          No generic off-the-shelf methodology. Every engagement starts with the same question: where do
          you stand today, and what&apos;s realistically achievable with the resources you have.
        </p>
      </Section>

      <Section className="bg-white pt-0">
        <ScrollTimelineVertical stappen={STAPPEN} />
      </Section>

      <Section dark>
        <h2 className="font-serif text-3xl font-semibold">What to expect from Millecam</h2>
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
            Curious what that looks like for your organisation?
          </h2>
          <Button href="/en/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Book a call
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
