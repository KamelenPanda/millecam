import type { Metadata } from "next";
import Section from "@/components/Section";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "Cookie Policy | Millecam",
  description: "Which cookies and similar technologies millecam.be uses (currently none).",
};

function H2({ children }: { children: string }) {
  return <h2 className="mt-10 font-serif text-xl font-semibold text-ink">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink/75">{children}</p>;
}
function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <PillarGlyph className="mt-1 h-3.5 w-2.5 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

const A = "text-prussian hover:underline";

export default function CookiePolicyPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Cookie Policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 8 September 2026</p>

        <P>
          Millecam wants to be transparent about the technology used on this website. Below we
          explain which cookies and similar technologies are used.
        </P>

        <H2>1. What are cookies?</H2>
        <P>
          Cookies are small files that a website can store on your device through your browser.
          They can be used, among other things, to make a website function correctly, remember
          preferences, collect usage statistics, or track visitors across websites.
        </P>
        <P>
          Not every website functionality for which data is processed, however, makes use of
          cookies.
        </P>

        <H2>2. Does millecam.be use cookies?</H2>
        <P>At present, millecam.be does not place any cookies on your device.</P>
        <P>We do not use:</P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>advertising cookies;</LI>
          <LI>marketing cookies;</LI>
          <LI>tracking cookies;</LI>
          <LI>social media cookies;</LI>
          <LI>cookies for behavioural profiling.</LI>
        </ul>
        <P>
          For this reason, we currently do not display a cookie banner requesting consent for
          non-essential cookies.
        </P>

        <H2>3. Vercel Web Analytics</H2>
        <P>
          We use Vercel Web Analytics to obtain aggregated statistics about the use of our
          website.
        </P>
        <P>
          Vercel Web Analytics operates without cookies and is designed not to track visitors
          across different websites or days.
        </P>
        <P>
          Depending on the website visit, analytics data may consist of information such as:
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>page visited;</LI>
          <LI>time of the visit;</LI>
          <LI>referring website;</LI>
          <LI>country or region;</LI>
          <LI>browser and version;</LI>
          <LI>operating system;</LI>
          <LI>device type.</LI>
        </ul>
        <P>
          Vercel uses a technical hash derived from the incoming request to determine unique
          visitors. This identifier is temporary and is reset daily. According to Vercel, the IP
          address is not stored as part of the analytics data point.
        </P>
        <P>
          We use these statistics solely to gain insight into the use and performance of our
          website.
        </P>

        <H2>4. Technically necessary processing</H2>
        <P>
          Even when a website does not place cookies, technical data traffic still takes place
          between your browser and the infrastructure needed to deliver the website.
        </P>
        <P>
          Our website is hosted via Vercel. In doing so, technical data such as IP addresses and
          request information may be processed for the delivery and security of the website and
          for technical logging.
        </P>
        <P>This is separate from placing cookies on your device.</P>
        <P>
          More information about this processing can be found in our{" "}
          <a className={A} href="/en/privacy-policy">
            privacy policy
          </a>
          .
        </P>

        <H2>5. Contact form</H2>
        <P>The contact form does not make use of marketing or tracking cookies.</P>
        <P>
          When you submit the form yourself, the data you enter is processed to deliver your
          message to Millecam. For this, we use Resend as a technical service provider.
        </P>
        <P>
          This concerns the processing of data that you actively provide to us and is separate
          from cookies.
        </P>

        <H2>6. No marketing tracking</H2>
        <P>
          Millecam currently does not use tracking technology for targeted advertising,
          remarketing, or building marketing profiles of website visitors.
        </P>
        <P>
          If we add technology in the future that requires prior consent, we will not activate it
          before the required consent has been obtained. We will amend this cookie policy and,
          where necessary, the website&apos;s functionality accordingly.
        </P>

        <H2>7. Changes</H2>
        <P>
          Technology and our website may change. We may therefore update this cookie policy when
          we introduce new features, service providers or technologies.
        </P>
        <P>
          The date at the top of this page indicates when this policy was last updated.
        </P>

        <H2>8. Questions</H2>
        <P>
          Do you have questions about the use of cookies or other technologies on our website?
        </P>
        <P>Contact us at:</P>
        <P>
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
        </P>
        <P>
          More information about how Millecam processes personal data can be found in our{" "}
          <a className={A} href="/en/privacy-policy">
            privacy policy
          </a>
          .
        </P>
      </div>
    </Section>
  );
}
