import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { contactForm as contactFormDict } from "@/lib/content/fr";

export const metadata: Metadata = {
  title: "Contact | Millecam",
  description: "Planifiez un entretien sans engagement avec Millecam.",
};

export default function ContactPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
        Prêt(e) pour un entretien sans engagement ?
      </h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Envoyez un message ou planifiez directement un créneau. Vous recevrez une réponse sous 24 heures.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_320px]">
        <ContactForm dict={contactFormDict} />

        <div className="space-y-6 text-sm text-ink/70">
          <div>
            <p className="font-semibold text-ink">E-mail</p>
            <p>info@millecam.be</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Adresse</p>
            <p>Sinte Annalaan 34, 9300 Alost, Belgique</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Téléphone</p>
            <a href="tel:+32472338990" className="hover:text-terracotta hover:underline">+32 472 33 89 90</a>
          </div>
          <div>
            <p className="font-semibold text-ink">LinkedIn</p>
            <a href="https://www.linkedin.com/in/robin-millecam-909156b2/" target="_blank" rel="noreferrer" className="block hover:text-terracotta hover:underline">Robin Millecam</a>
            <a href="https://www.linkedin.com/company/108526083" target="_blank" rel="noreferrer" className="block hover:text-terracotta hover:underline">Millecam</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
