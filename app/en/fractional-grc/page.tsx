import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationClock from "@/components/illustrations/IllustrationClock";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "Fractional GRC consultant in Belgium | Millecam",
  description:
    "External GRC capacity at a day rate, ongoing or periodic. Compliance support without hiring anyone.",
};

const VOORWIE = [
  {
    titel: "Between two phases",
    tekst: "Just certified or implemented, and looking for someone to keep the programme alive until the next step.",
  },
  {
    titel: "Periodic spikes in capacity needs",
    tekst: "The compliance programme is running, but around audits, new suppliers or incidents, workload temporarily exceeds what the internal team can handle.",
  },
  {
    titel: "Testing before you hire",
    tekst: "Uncertainty about whether an internal GRC role is needed, and a wish to find out first without immediately taking someone on permanently.",
  },
];

const DELIVERABLES = [
  "Fixed, scheduled availability, agreed at whatever pace fits",
  "Follow-up on the compliance programme between larger tracks",
  "Ad-hoc advice on new processing activities, suppliers or incidents",
  "Periodic reporting to management on the state of affairs",
  "Flexibility to scale up or down as needs change",
];

const STAPPEN = [
  { naam: "Scoping the need", tekst: "Which tasks, at what pace, are needed." },
  { naam: "Agreeing a fixed rhythm", tekst: "A concrete, predictable commitment, not loose ad-hoc billing." },
  { naam: "Ongoing engagement", tekst: "With room to adjust as the situation evolves." },
];

export default function FractionalGrcPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">Fractional GRC</span>: capacity without hiring
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              External GRC capacity at a day rate, deployed occasionally or structurally: for organisations
              that need compliance support without the cost and risk of a permanent hire.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact" variant="primary">Discuss fractional GRC support</Button>
              <Button href="/en/services" variant="secondary">View all services</Button>
            </div>
          </div>
          <IllustrationClock className="hidden h-28 w-28 shrink-0 md:block" />
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
          Fixed, scheduled availability at whatever pace fits (for example a number of days per month),
          deployable across the full spectrum: from policy work and audit preparation to ad-hoc questions
          that come up along the way.
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
          More about the approach
        </Link>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Result</h2>
            <p className="mt-4 text-ink/70">
              Compliance capacity that moves with what the organisation actually needs at any given moment,
              without the rigidity of a permanent hire.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Why Millecam</h2>
            <p className="mt-4 text-ink/70">
              One fixed point of contact, not a rotating team. Direct contact with whoever does the work:
              no junior consultant, no escalation chain.{" "}
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
            Discuss fractional GRC support
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
