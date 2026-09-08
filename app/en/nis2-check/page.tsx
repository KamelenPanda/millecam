import type { Metadata } from "next";
import Section from "@/components/Section";
import Nis2Checker from "@/components/Nis2Checker";
import { nis2Checker as nis2CheckerDict } from "@/lib/content/en";

export const metadata: Metadata = {
  title: "NIS2 check | Millecam",
  description: "Three short questions for a first indication of whether your organisation falls under NIS2.",
};

export default function Nis2CheckPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Am I subject to NIS2?</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Three short questions for a first indication. No registration, no obligations.
      </p>
      <div className="mt-12 max-w-2xl">
        <Nis2Checker locale="en" dict={nis2CheckerDict} />
      </div>
    </Section>
  );
}
