import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FrameworkChecker from "@/components/FrameworkChecker";
import { frameworkChecker as dict } from "@/lib/content/en";

export const metadata: Metadata = {
  title: "Which framework is relevant? | Millecam",
  description: "Four short questions for a first indication of which of NIS2, ISO 27001, CyFun and GDPR are relevant for your organisation.",
};

export default function FrameworkCheckPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Which framework is relevant for you?</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Four short questions for a first indication across NIS2, ISO 27001, CyFun and GDPR together. No
        registration, no obligations. Mainly curious about NIS2?{" "}
        <Link href="/en/nis2-check" className="text-terracotta hover:underline">
          Take the focused NIS2 check
        </Link>
        .
      </p>
      <div className="mt-12 max-w-2xl">
        <FrameworkChecker locale="en" dict={dict} />
      </div>
    </Section>
  );
}
