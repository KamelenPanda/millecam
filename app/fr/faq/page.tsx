import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "FAQ | Millecam",
  description: "Réponses aux questions fréquentes sur NIS2, ISO 27001, CyFun, RGPD et la collaboration avec Millecam.",
};

const FAQS = [
  {
    vraag: "Quelle est la différence entre NIS2, ISO 27001, CyFun et RGPD ?",
    antwoord:
      "NIS2 est une directive européenne, une obligation légale pour certains secteurs et certaines tailles d'organisation. ISO 27001 est une norme internationale, volontaire mais souvent exigée contractuellement par des clients ou des appels d'offres. CyFun est un référentiel belge d'auto-évaluation du Centre pour la Cybersécurité Belgique, une alternative plus accessible pour démontrer la conformité NIS2. Le RGPD est la législation européenne sur la vie privée, applicable à pratiquement toute organisation qui traite des données à caractère personnel. Ils se recoupent en partie, par exemple sur les contrôles de sécurité de l'information, mais chacun a un objectif différent.",
  },
  {
    vraag: "Mon entreprise relève-t-elle de NIS2 ?",
    antwoord:
      "Cela dépend de votre secteur et de votre taille : les organisations moyennes et grandes dans des secteurs désignés (comme l'énergie, le transport, l'infrastructure numérique et la santé) relèvent généralement de la directive. Une courte vérification de portée lors d'un premier entretien clarifie rapidement votre situation.",
  },
  {
    vraag: "Combien de temps dure une analyse GAP ?",
    antwoord:
      "Généralement quelques semaines, selon la taille de l'organisation et le référentiel choisi. La revue documentaire et les entretiens occupent la majeure partie du temps ; la rapidité avec laquelle la documentation et les accès sont disponibles influence également le calendrier.",
  },
  {
    vraag: "Millecam peut-il agir en tant que notre DPO externe ?",
    antwoord:
      "Oui. Robin est délégué à la protection des données certifié DPI et assume ce rôle en externe via le DPO-as-a-Service, sur une base mensuelle.",
  },
  {
    vraag: "Millecam travaille-t-il uniquement avec des PME ?",
    antwoord:
      "L'accent est mis sur les PME, car elles disposent rarement d'un responsable conformité en interne tout en devant répondre aux mêmes exigences que les grandes organisations. Les trajets plus importants sont négociables, sur demande.",
  },
  {
    vraag: "Combien coûte un trajet avec Millecam ?",
    antwoord:
      "Cela dépend du service : une analyse GAP a un prix fixe, un trajet de mise en œuvre est estimé par projet, et le DPO-as-a-Service ou l'accompagnement fractionné fonctionnent sur une base mensuelle ou journalière. Un chiffre concret ne suit qu'après un court entretien d'intake.",
  },
  {
    vraag: "Un premier entretien est-il sans engagement ?",
    antwoord:
      "Oui. Une introduction d'environ trente minutes est gratuite et sans engagement, et sert à déterminer si, et comment, Millecam peut vous aider.",
  },
  {
    vraag: "Collaborez-vous avec d'autres partenaires IT ou sécurité ?",
    antwoord:
      "Oui. Le conseil GRC est souvent distinct de la mise en œuvre technique. Millecam travaille aux côtés des partenaires IT existants d'un client lorsque c'est utile, ou oriente vers d'autres experts si nécessaire.",
  },
];

export default function FAQPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Questions fréquentes</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Vous ne trouvez pas votre question ? Posez-la directement via le formulaire de contact.
      </p>

      <div className="mt-10 max-w-2xl divide-y divide-line border-t border-line">
        {FAQS.map((f) => (
          <details key={f.vraag} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg font-semibold text-ink">
              {f.vraag}
              <span className="mt-1 shrink-0 text-2xl font-normal leading-none text-terracotta transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">{f.antwoord}</p>
          </details>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-md pt-14 text-center">
        <PillarGlyph className="mx-auto h-6 w-5" />
        <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Une autre question ?</h2>
        <p className="mt-3 text-sm text-ink/70">
          Un court entretien répond souvent à plus de questions qu&apos;une liste.
        </p>
        <Button href="/fr/contact" variant="primary" className="mx-auto mt-6 w-fit">
          Planifier un appel
        </Button>
      </div>
    </Section>
  );
}
