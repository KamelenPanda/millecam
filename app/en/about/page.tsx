import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Millecam",
  description: "Millecam is the independent GRC advisory firm of Robin Millecam.",
};

export default function OverPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="grid gap-10 md:grid-cols-[1.3fr_0.9fr] md:items-start md:gap-14">
        <div className="order-2 md:order-1">
          <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">About Millecam</h1>

          <Reveal className="mt-8 max-w-2xl space-y-6 text-ink/80">
            <p>
              Behind Millecam stands one name: Robin Millecam. That&apos;s no coincidence — Millecam
              isn&apos;t just the brand name, it&apos;s also simply who&apos;s on the other end of the
              line. One fixed point of contact instead of a rotating team, for organisations that need
              compliance expertise without creating an internal role.
            </p>
            <p>
              Years of experience with NIS2 scoping, CyFun GAP analyses, ISO 27001 documentation and
              GDPR questions at SMEs across a wide range of sectors, from construction and transport to
              food and tech. Certified Data Protection Officer (DPI-certified, February 2025).
            </p>
            <div>
              <PillarGlyph className="h-5 w-4" />
              <p className="mt-3 font-serif text-xl italic text-terracotta">
                Compliance shouldn&apos;t be a goal in itself. It&apos;s a means to being demonstrably in
                control: to a regulator, a client, or yourself. Hence the promise: Govern with
                confidence.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="order-1 mx-auto w-full max-w-xs md:order-2 md:max-w-none">
          <div className="bg-white p-3 shadow-[0_28px_70px_rgba(33,29,24,0.14)]">
            <Image
              src="/images/robin.jpg"
              alt="Robin Millecam"
              width={900}
              height={1125}
              className="w-full"
              sizes="(min-width: 768px) 30vw, 320px"
            />
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14 max-w-2xl">
        <h2 className="font-serif text-lg font-semibold text-ink">Credentials</h2>
        <div className="mt-4 border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-serif text-lg font-semibold text-ink">
              Certified Data Protection Officer
            </p>
            <p className="whitespace-nowrap text-xs text-muted">Since February 2025</p>
          </div>
          <p className="mt-1 text-sm text-ink/70">
            Data Protection Institute (DPI): certificate valid for 3 years, renewable.
          </p>
        </div>
      </Reveal>

      <Button href="/en/contact" variant="primary" className="mt-10">
        Want to speak with Robin directly? Book an introduction call.
      </Button>
    </Section>
  );
}
