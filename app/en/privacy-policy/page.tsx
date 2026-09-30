import type { Metadata } from "next";
import Section from "@/components/Section";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "Privacy Policy | Millecam",
  description:
    "How Millecam collects, uses, shares and protects personal data across our website, consultancy engagements and client relationships.",
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
function Provider({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <p className="font-serif text-sm font-semibold text-ink">{name}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink/75">{children}</p>
    </div>
  );
}
function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto border border-line">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-[#FBF9F4]">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-serif font-semibold text-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top leading-relaxed text-ink/75">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const A = "text-terracotta hover:underline";

export default function PrivacyPolicyPage() {
  return (
    <Section className="pb-24 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 8 September 2026</p>

        <P>
          At Millecam, information security and privacy go hand in hand with the services we
          offer our clients. That is why we consider it important to explain transparently which
          personal data we process, why we do so, with whom we share data, and what rights you
          have in relation to that processing.
        </P>

        <H2>1. Who is responsible for your personal data?</H2>
        <P>
          <strong className="font-medium text-ink">Millecam</strong> is a sole proprietorship of
          Robin Millecam and acts as <strong className="font-medium text-ink">data controller</strong>{" "}
          for the personal data described in this privacy policy.
        </P>
        <P>
          <strong className="font-medium text-ink">Millecam – Robin Millecam</strong>
          <br />
          Sinte Annalaan 34
          <br />
          9300 Aalst
          <br />
          Belgium
        </P>
        <P>
          Company number / VAT: <strong className="font-medium text-ink">BE 1026.876.048</strong>
        </P>
        <P>
          Email for privacy questions:{" "}
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
        </P>
        <P>
          This privacy policy applies when you visit our website, contact us, request a quote,
          are a client or supplier, or otherwise enter into a business relationship with
          Millecam.
        </P>

        <H2>2. What personal data do we process and why?</H2>
        <P>Which data we process depends on your relationship with Millecam.</P>
        <Table
          headers={["Processing", "Possible personal data", "Purpose", "Legal basis"]}
          rows={[
            [
              "Website and contact requests",
              "Name, company name, email address, phone number, subject and content of your message",
              "Answering questions and following up on requests",
              "Legitimate interest and/or pre-contractual measures",
            ],
            [
              "Quotes and prospect contacts",
              "Name, job title, organisation, business contact details, communications and quote details",
              "Discussing potential collaborations and preparing quotes",
              "Pre-contractual measures and legitimate interest",
            ],
            [
              "Client and contract management",
              "Name, job title, organisation, contact details, contract and project details, and business communications",
              "Performance and management of our services",
              "Performance of the contract and legitimate interest",
            ],
            [
              "Consultancy engagements",
              "Business contact details and other personal data necessary for the engagement",
              "Delivery of GRC, cybersecurity and privacy consultancy",
              "Performance of the contract and, depending on the situation, processing on the client's instructions",
            ],
            [
              "Invoicing and accounting",
              "Name, address, contact details, company details, invoice and payment details",
              "Invoicing, accounting and tax administration",
              "Performance of the contract and legal obligation",
            ],
            [
              "Business communication and meetings",
              "Name, email address, job title, organisation, correspondence and meeting details",
              "Communication, appointments and collaboration",
              "Performance of the contract, pre-contractual measures and legitimate interest",
            ],
            [
              "Website security and technical operation",
              "IP address and technical request and log data where applicable",
              "Keeping the website available and secure, investigating errors and preventing abuse",
              "Legitimate interest",
            ],
            [
              "Website analytics",
              "Anonymised/aggregated usage information such as page views, referrer, country/region, browser, operating system and device type",
              "Gaining insight into the use and performance of our website",
              "Legitimate interest",
            ],
          ]}
        />
        <P>
          We do not knowingly collect more personal data than is necessary for the relevant
          purpose.
        </P>

        <H2>3. Where does your data come from?</H2>
        <P>
          In most cases, we receive personal data directly from you, for example when you:
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>fill in our contact form;</LI>
          <LI>send us an email;</LI>
          <LI>contact us via LinkedIn;</LI>
          <LI>take part in a call or meeting;</LI>
          <LI>request a quote or enter into an agreement.</LI>
        </ul>
        <P>
          In a business context, we may also receive contact details from your employer, client,
          colleague or another business contact person.
        </P>
        <P>
          In addition, we may consult limited business data that is publicly available, for
          example via company websites, professional platforms such as LinkedIn, or public
          company registers.
        </P>

        <H2>4. Consultancy engagements and clients&apos; personal data</H2>
        <P>
          In the course of our consultancy engagements in areas including GDPR, NIS2, ISO 27001
          and CyberFundamentals, we may be given access to information that contains personal
          data.
        </P>
        <P>
          This may, for example, involve data in policy documents, registers, audit evidence,
          risk analyses, incident information, or systems to which a client grants us access.
        </P>
        <P>Our role under the GDPR depends on the specific processing in question.</P>
        <P>
          Where Millecam itself determines the purpose and means of a processing activity, we act
          as <strong className="font-medium text-ink">data controller</strong>.
        </P>
        <P>
          Where we process personal data solely on behalf of, and in accordance with the
          instructions of, a client, we may act as{" "}
          <strong className="font-medium text-ink">processor</strong>. In that case, the
          processing is governed by the applicable agreement and, where required, a data
          processing agreement. The client remains responsible for the information it must
          provide to data subjects in its capacity as data controller.
        </P>
        <P>
          This public privacy policy mainly describes the processing activities for which
          Millecam itself is the data controller.
        </P>

        <H2>5. Who do we share personal data with?</H2>
        <P>We never sell or rent personal data.</P>
        <P>
          To carry out our activities, however, we do use specialised service providers.
          Depending on the processing activity, personal data may be processed by, among others:
        </P>
        <Provider name="Microsoft 365">
          We use Microsoft Outlook for business email, Microsoft Teams for online communication
          and meetings, and OneDrive for storing and managing business documents.
        </Provider>
        <Provider name="Dexxter">
          We use Dexxter for our financial administration, including quotes, invoicing and
          bookkeeping.
        </Provider>
        <Provider name="De Ridder – Arijs Accountancy">
          Our external accountant may be given access to personal data necessary for accounting,
          tax and administrative services.
        </Provider>
        <Provider name="Vercel">
          Our website is hosted via Vercel. In providing and securing the website, technical data
          may be processed.
        </Provider>
        <Provider name="Resend">
          When you use the contact form on our website, Resend is used to technically send the
          message to Millecam.
        </Provider>
        <Provider name="OpenAI and Anthropic">
          In its professional operations, Millecam makes use of AI-assisted services from OpenAI
          and Anthropic. Where these services are used for information that contains personal
          data, this takes place within appropriate contractual and technical safeguards and with
          due regard for data minimisation and confidentiality.
        </Provider>
        <P>
          In addition, we may disclose data to government authorities, supervisory authorities or
          other parties where this is legally required.
        </P>

        <H2>6. AI within our services</H2>
        <P>
          Millecam uses AI as a supporting tool for certain professional activities.
        </P>
        <P>
          In doing so, we apply the principle of{" "}
          <strong className="font-medium text-ink">data minimisation</strong>: personal data and
          confidential client information are only processed by an AI service when this is
          appropriate and necessary for the intended purpose, and where appropriate technical and
          contractual safeguards are in place.
        </P>
        <P>
          AI is used as a support tool and does not simply replace the professional judgement
          expected of Millecam.
        </P>

        <H2>7. Website analytics</H2>
        <P>
          We use <strong className="font-medium text-ink">Vercel Web Analytics</strong> to gain
          insight into the use of our website.
        </P>
        <P>
          Vercel Web Analytics operates without cookies. The analytics service is designed to
          provide aggregated usage statistics without tracking visitors across different websites
          or days.
        </P>
        <P>This allows us to gain insight into, for example:</P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>the number of page views;</LI>
          <LI>pages visited;</LI>
          <LI>referring websites;</LI>
          <LI>country or region;</LI>
          <LI>browser and operating system;</LI>
          <LI>device type.</LI>
        </ul>
        <P>
          We use this information solely to understand and improve the use and performance of our
          website.
        </P>
        <P>
          More information about the use of cookies and similar technologies can be found in our
          separate{" "}
          <a className={A} href="/en/cookie-policy">
            cookie policy
          </a>
          .
        </P>

        <H2>8. International transfers</H2>
        <P>
          Some of the service providers we work with operate internationally. As a result,
          personal data may in certain cases be processed outside the European Economic Area
          (EEA).
        </P>
        <P>
          When personal data is transferred to a country outside the EEA, we ensure that a valid
          legal basis for the transfer exists in accordance with the GDPR, for example:
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>an adequacy decision of the European Commission;</LI>
          <LI>Standard Contractual Clauses (SCCs) of the European Commission; or</LI>
          <LI>another legally recognised safeguard.</LI>
        </ul>
        <P>
          Where necessary, we also assess which additional measures are appropriate for the
          relevant processing.
        </P>

        <H2>9. How long do we keep personal data?</H2>
        <P>
          We do not retain personal data for longer than necessary for the purpose for which it
          was collected, unless a longer retention period is legally required or justified.
        </P>
        <P>As a general rule, we apply the following:</P>
        <Table
          headers={["Data", "Retention period"]}
          rows={[
            [
              "Contact requests that do not lead to a collaboration",
              "A maximum of 2 years after the last relevant contact",
            ],
            [
              "Quotes that do not lead to an engagement",
              "A maximum of 2 years after the last relevant contact, unless a longer period is justified",
            ],
            [
              "Client, contract and project administration",
              "For the duration of the collaboration and thereafter for as long as necessary for contractual or legal obligations and the defence of legal claims",
            ],
            [
              "Invoices and accounting documents",
              "For the applicable statutory retention period",
            ],
            [
              "Business email and correspondence",
              "For as long as necessary for the business relationship, the file, or applicable legal obligations",
            ],
            [
              "Technical website data",
              "No longer than necessary for security, troubleshooting and technical operation",
            ],
          ]}
        />
        <P>
          When data is no longer needed, it is deleted or anonymised where reasonably possible.
        </P>

        <H2>10. How do we secure personal data?</H2>
        <P>
          We take appropriate technical and organisational measures to protect personal data
          against unauthorised access, loss, alteration, disclosure or misuse.
        </P>
        <P>
          The measures are tailored to the nature of the data, the processing activity and the
          associated risks.
        </P>
        <P>
          Where relevant, we apply principles such as access restriction, strong authentication,
          secure communication, careful supplier management, data minimisation and secure
          storage.
        </P>
        <P>However, no information system can guarantee absolute security.</P>

        <H2>11. Automated decision-making and profiling</H2>
        <P>
          Millecam does not make decisions with legal or similarly significant effects on
          individuals that are based solely on automated processing as referred to in Article 22
          of the GDPR.
        </P>
        <P>
          We also do not use personal data for advertising profiling or behaviour-based
          marketing.
        </P>

        <H2>12. Your rights</H2>
        <P>
          Depending on the processing activity and the applicable legal basis, you have, among
          others, the following rights under the GDPR:
        </P>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
          <LI>to obtain access to your personal data;</LI>
          <LI>to have inaccurate or incomplete data corrected;</LI>
          <LI>
            to have your personal data erased where the legal conditions are met (right to
            erasure);
          </LI>
          <LI>to have the processing restricted;</LI>
          <LI>
            to object to certain processing activities, including processing based on legitimate
            interest;
          </LI>
          <LI>
            to withdraw your consent at any time where a processing activity is based on consent;
          </LI>
          <LI>
            to receive personal data in a structured, commonly used and machine-readable format,
            or to have it transferred, in certain cases (right to data portability);
          </LI>
          <LI>to lodge a complaint with a supervisory authority.</LI>
        </ul>
        <P>
          These rights are not absolute. Certain legal obligations or exceptions may mean that we
          cannot fulfil a request, or can only fulfil it in part.
        </P>

        <H2>13. How to exercise your rights</H2>
        <P>Send your request to:</P>
        <P>
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
        </P>
        <P>
          Please provide sufficient information so that we can determine which data your request
          relates to.
        </P>
        <P>
          Where we have reasonable doubts about your identity, we may request additional
          information to prevent personal data from being disclosed to an unauthorised person.
        </P>
        <P>We handle requests within the time limits prescribed by the GDPR.</P>

        <H2>14. Complaints</H2>
        <P>
          Do you have questions or concerns about how we process your personal data? Please
          contact us first, preferably via{" "}
          <a className={A} href="mailto:privacy@millecam.be">
            privacy@millecam.be
          </a>
          , so that we can look into your query.
        </P>
        <P>You also have the right to lodge a complaint with:</P>
        <P>
          <strong className="font-medium text-ink">Belgian Data Protection Authority</strong>
          <br />
          Drukpersstraat 35
          <br />
          1000 Brussels
          <br />
          Belgium
        </P>
        <P>
          <a className={A} href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noreferrer">
            www.gegevensbeschermingsautoriteit.be
          </a>
        </P>

        <H2>15. Changes to this policy</H2>
        <P>
          Our services, systems and legal obligations may change. We may therefore update this
          privacy policy from time to time.
        </P>
        <P>
          The date at the top of this page indicates when the policy was last updated. In the
          event of significant changes, we will provide additional communication where
          appropriate.
        </P>
      </div>
    </Section>
  );
}
