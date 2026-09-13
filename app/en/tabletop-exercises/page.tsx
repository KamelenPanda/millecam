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
  title: "Tabletop exercise & incident response drill | Millecam",
  description:
    "Interactive scenario exercises that test whether your incident response plan holds up in practice — not just on paper.",
};

const VOORWIE = [
  {
    titel: "A plan that's never been tested",
    tekst: "An incident response plan exists, but no one knows how the team would actually respond to a concrete scenario.",
  },
  {
    titel: "Demonstrability requires it",
    tekst: "NIS2 or ISO 27001 require evidence that procedures are actually rehearsed, not just documented.",
  },
  {
    titel: "Turning theory into reflex",
    tekst: "The team knows the policy, but has never had to decide under time pressure who does what.",
  },
];

const DELIVERABLES = [
  "A tailored scenario, matched to sector and risk profile",
  "A guided session (half a day to a full day, depending on scope)",
  "Observation of decision-making, communication and escalation paths during the exercise",
  "A report with concrete lessons learned and action points",
  "Recommendations for updating the incident response plan",
];

const STAPPEN = [
  { naam: "Scenario design", tekst: "A realistic scenario, tailored to the organisation." },
  { naam: "Guided session", tekst: "The team works through the scenario under guidance." },
  { naam: "Reporting & follow-up", tekst: "Lessons learned, action points, and where needed, an updated plan." },
];

export default function TabletopExercisesPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">Tabletop exercises</span>: theory turned into reflex
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              Interactive scenario exercises that walk a team through a simulated incident, to test
              whether procedures hold up in practice — before a real incident, not after.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact" variant="primary">Schedule a tabletop exercise</Button>
              <Button href="/en/services" variant="secondary">View all services</Button>
            </div>
          </div>
          <IllustrationDialogue className="hidden h-28 w-28 shrink-0 md:block" />
        </div>
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Who is this relevant for?</h2>
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
        <h2 className="font-serif text-3xl font-semibold text-ink">What Millecam does</h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          A tailored scenario — for example ransomware, a data breach, or an outage at a critical
          supplier — matched to the organisation&apos;s sector and risks, followed by a guided session in
          which decision-making and communication are tested under realistic pressure.
        </p>
      </Section>

      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">What you actually get</h2>
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
        <h2 className="font-serif text-3xl font-semibold text-ink">How this works in practice</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STAPPEN.map((s, i) => (
            <div key={s.naam} className="border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
              <p className="text-xs font-medium text-muted">Step {i + 1}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{s.naam}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.tekst}</p>
            </div>
          ))}
        </div>
        <Link href="/en/approach" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          More about our approach
        </Link>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Result</h2>
            <p className="mt-4 text-ink/70">
              A team that knows what to do before an incident occurs, with a response that&apos;s been
              tested — not just written.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Why Millecam</h2>
            <p className="mt-4 text-ink/70">
              One fixed point of contact, no rotating team. Direct contact with whoever does the work.{" "}
              <Link href="/en/about#credentials" className="text-terracotta hover:underline">
                More about Robin
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Ready to get started?</h2>
          <p className="mt-3 text-sm text-ink/70">
            A no-obligation thirty-minute conversation is enough to determine whether, and how, Millecam
            can help.
          </p>
          <Button href="/en/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Schedule a tabletop exercise
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
