import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Cookie Policy | Millecam",
  description: "Which cookies this website uses (almost none).",
};

function H2({ children }: { children: string }) {
  return <h2 className="mt-10 font-serif text-xl font-semibold text-ink">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink/75">{children}</p>;
}

export default function CookiePolicyPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Cookie Policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 2 September 2026</p>

        <P>
          This website doesn&apos;t place any tracking cookies, and therefore doesn&apos;t show a cookie
          consent choice that actually offers anything to decide. There is simply nothing non-essential
          to ask consent for.
        </P>

        <H2>What we do use: Vercel Analytics</H2>
        <P>
          For anonymous, aggregated visitor statistics (such as the number of page views), we use
          Vercel Analytics. This service is cookieless: no cookie is placed, no IP address is stored,
          and no visitor is tracked in an individually identifiable way. Because no personal data is
          processed, no consent is required for this under the ePrivacy Directive or the GDPR.
        </P>

        <H2>Strictly necessary cookies</H2>
        <P>
          This website currently doesn&apos;t use any cookies at all, not even functional or necessary
          ones. Should that change in the future (for example with a login feature), we&apos;ll update
          this cookie policy and, if necessary, the consent notice on the site.
        </P>

        <H2>Changes</H2>
        <P>
          If we later add a service that does place cookies (for example for marketing or targeted
          advertising), we&apos;ll amend this policy and, where legally required, ask for your explicit
          consent before those cookies are placed.
        </P>

        <H2>Questions</H2>
        <P>
          Questions about this cookie policy? Email{" "}
          <a className="text-terracotta hover:underline" href="mailto:privacy@millecam.be">privacy@millecam.be</a>. See
          also our{" "}
          <a className="text-terracotta hover:underline" href="/en/privacy-policy">Privacy Policy</a> for how we handle
          data from the contact form.
        </P>
      </div>
    </Section>
  );
}
