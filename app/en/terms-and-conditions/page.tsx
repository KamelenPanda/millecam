import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms & Conditions | Millecam",
  description: "The terms that apply to engagements with Millecam.",
};

function H2({ n, children }: { n: string; children: string }) {
  return (
    <h2 className="mt-10 font-serif text-xl font-semibold text-ink">
      <span className="text-terracotta">{n}. </span>
      {children}
    </h2>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink/75">{children}</p>;
}

export default function TermsPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 2 September 2026</p>

        <P>
          These terms apply to every quotation and agreement between Millecam (Robin Millecam, sole
          proprietorship, Sinte Annalaan 34, 9300 Aalst, Belgium, VAT BE 1026.876.048, hereinafter
          &quot;Millecam&quot;) and a client, unless agreed otherwise in writing.
        </P>

        <H2 n="1">Scope</H2>
        <P>
          These terms and conditions apply to all Millecam services, including GAP analyses,
          implementation tracks, DPO-as-a-Service, tabletop exercises and fractional GRC support. Any
          deviating terms proposed by the client do not apply unless Millecam accepts them in writing.
        </P>

        <H2 n="2">Formation of the agreement</H2>
        <P>
          A quotation from Millecam is non-binding and valid for 30 days, unless stated otherwise. The
          agreement is formed upon written confirmation by the client (including by email), or by the
          actual commencement of the work.
        </P>

        <H2 n="3">Performance of the engagement</H2>
        <P>
          Millecam performs the engagement to the best of its ability, on a best-efforts basis (not an
          obligation of result), unless expressly agreed otherwise. The client provides, in a timely
          manner, the information, documents and access reasonably needed for performance. Delays
          resulting from the client&apos;s late cooperation cannot be attributed to Millecam.
        </P>

        <H2 n="4">Price and payment</H2>
        <P>
          Prices are stated exclusive of VAT, unless indicated otherwise. Invoices are payable within
          30 days of the invoice date. In the event of late payment, interest of 1% per month is due by
          operation of law and without prior notice of default, plus a fixed compensation of 10% of the
          invoice amount (with a minimum of &euro;75).
        </P>

        <H2 n="5">Duration and termination</H2>
        <P>
          An engagement runs for the duration set out in the quotation or agreement. For ongoing
          services (such as DPO-as-a-Service or fractional support), a notice period of 30 days applies,
          unless agreed otherwise. Either party may terminate the agreement with immediate effect in the
          event of a serious breach by the other party that is not remedied within 14 days of written
          notice of default.
        </P>

        <H2 n="6">Liability</H2>
        <P>
          Millecam&apos;s liability for damage arising from the performance of an engagement is limited
          to the amount invoiced for that engagement, and in any case to the amount paid out under
          Millecam&apos;s professional liability insurance. Millecam is not liable for indirect damage
          (such as loss of profit or reputational damage). This limitation does not apply in case of
          intent or gross negligence on the part of Millecam.
        </P>

        <H2 n="7">Intellectual property</H2>
        <P>
          Reports, templates, methodologies and other works that Millecam develops in the context of an
          engagement remain the property of Millecam, unless agreed otherwise in writing. The client
          receives a right of use for its own internal purposes. Millecam&apos;s underlying
          methodologies and generic templates may also be reused with other clients.
        </P>

        <H2 n="8">Confidentiality</H2>
        <P>
          Both parties treat all confidential information they receive from each other with the
          necessary care, and use it solely in the context of the engagement. This obligation remains in
          effect after the engagement ends.
        </P>

        <H2 n="9">Processing of personal data</H2>
        <P>
          For the processing of personal data in the context of an engagement (and, where applicable, a
          data processing agreement), Millecam refers to the{" "}
          <a className="text-terracotta hover:underline" href="/en/privacy-policy">Privacy Policy</a>.
        </P>

        <H2 n="10">Force majeure</H2>
        <P>
          Neither party is liable for a failure resulting from force majeure: a circumstance beyond its
          reasonable control that temporarily or permanently prevents the performance of the engagement.
        </P>

        <H2 n="11">Amendment of these terms</H2>
        <P>
          Millecam may amend these terms and conditions. The version applicable at the time the
          agreement was concluded remains in effect for that agreement, unless the parties agree
          otherwise.
        </P>

        <H2 n="12">Governing law and jurisdiction</H2>
        <P>
          Belgian law applies to every agreement with Millecam. Disputes are submitted to the competent
          court of Millecam&apos;s registered seat, without prejudice to Millecam&apos;s right to bring a
          dispute before the court of the client&apos;s place of residence or establishment.
        </P>

        <P>
          Questions about these terms? Email{" "}
          <a className="text-terracotta hover:underline" href="mailto:info@millecam.be">info@millecam.be</a>.
        </P>
      </div>
    </Section>
  );
}
