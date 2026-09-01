import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Millecam",
  description: "Plan een vrijblijvend gesprek met Millecam.",
};

export default function ContactPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
        Klaar voor een vrijblijvend gesprek?
      </h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Stuur een bericht of plan direct een moment in de agenda — binnen de 24 uur reactie.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_320px]">
        <ContactForm />

        <div className="space-y-6 text-sm text-ink/70">
          <div>
            <p className="font-semibold text-ink">E-mail</p>
            <p>info@millecam.be</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Adres</p>
            <p>Sinte Annalaan 34, 9300 Aalst</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Telefoon</p>
            <p>[in te vullen]</p>
          </div>
          <div>
            <p className="font-semibold text-ink">LinkedIn</p>
            <p>[in te vullen]</p>
          </div>
          {/* Optioneel: agenda-link (bv. Calendly) hier toevoegen zodra beschikbaar */}
        </div>
      </div>
    </Section>
  );
}
