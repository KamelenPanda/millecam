import type { Metadata } from "next";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Cookiebeleid — Millecam",
  description: "Welke cookies deze website gebruikt (bijna geen).",
};

function H2({ children }: { children: string }) {
  return <h2 className="mt-10 font-serif text-xl font-semibold text-ink">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink/75">{children}</p>;
}

export default function CookiebeleidPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <Eyebrow>Juridisch</Eyebrow>
        <h1 className="font-serif text-4xl font-bold text-ink">Cookiebeleid</h1>
        <p className="mt-4 text-sm text-muted">Laatst bijgewerkt: [datum invullen]</p>

        <P>
          Deze website plaatst geen trackingcookies en toont daarom geen cookie-toestemming die
          echt iets te kiezen geeft — er is simpelweg niets niet-noodzakelijks om toestemming
          voor te vragen.
        </P>

        <H2>Wat we wél gebruiken: Vercel Analytics</H2>
        <P>
          Voor anonieme, geaggregeerde bezoekstatistieken (zoals aantal paginaweergaven) gebruiken
          we Vercel Analytics. Deze dienst is cookieless: er wordt geen cookie geplaatst, geen
          IP-adres opgeslagen, en geen bezoeker individueel herkenbaar gevolgd. Omdat er geen
          persoonsgegevens verwerkt worden, is hiervoor geen toestemming vereist onder de
          ePrivacy-richtlijn of de AVG.
        </P>

        <H2>Strikt noodzakelijke cookies</H2>
        <P>
          Deze website gebruikt op dit moment geen enkele cookie — ook geen functionele of
          noodzakelijke. Mocht dat in de toekomst veranderen (bijvoorbeeld bij een
          inlogfunctionaliteit), dan werken we dit cookiebeleid bij en, indien nodig, ook de
          toestemmingsmelding op de site.
        </P>

        <H2>Wijzigingen</H2>
        <P>
          Voegen we later een dienst toe die wél cookies plaatst (bijvoorbeeld voor marketing of
          gerichte advertenties), dan passen we dit beleid aan en vragen we, waar wettelijk
          vereist, expliciet je toestemming voordat die cookies geplaatst worden.
        </P>

        <H2>Vragen</H2>
        <P>
          Vragen over dit cookiebeleid? Mail naar{" "}
          <a className="text-terracotta hover:underline" href="mailto:privacy@millecam.be">privacy@millecam.be</a>. Zie ook ons{" "}
          <a className="text-terracotta hover:underline" href="/privacybeleid">privacybeleid</a> voor hoe we omgaan met gegevens uit het contactformulier.
        </P>
      </div>
    </Section>
  );
}
