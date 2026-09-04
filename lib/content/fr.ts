import type {
  NavDict,
  FooterDict,
  CookieBannerDict,
  ContactFormDict,
  Nis2CheckerDict,
  SelfAssessmentDict,
} from "./types";

export const nav: NavDict = {
  links: [
    { href: "/fr/diensten", label: "Services" },
    { href: "/fr/aanpak", label: "Approche" },
    { href: "/fr/nis2-check", label: "Vérification NIS2" },
    { href: "/fr/veelgestelde-vragen", label: "FAQ" },
    { href: "/fr/over", label: "À propos" },
    { href: "/fr/contact", label: "Contact" },
  ],
  cta: "Planifier un appel",
  homeAriaLabel: "Page d'accueil Millecam",
  menuOpen: "Ouvrir le menu",
  menuClose: "Fermer le menu",
};

export const footer: FooterDict = {
  servicesHeading: "Services",
  frameworks: ["NIS2", "ISO 27001", "CyFun", "RGPD"],
  faqLink: "Questions fréquentes",
  nis2CheckLink: "Vérification NIS2",
  contactHeading: "Contact",
  rights: "Millecam",
  linkedinPerson: "LinkedIn : Robin Millecam",
  linkedinCompany: "LinkedIn : Millecam",
  privacy: "Politique de confidentialité",
  cookies: "Politique de cookies",
  terms: "Conditions générales",
  vatLabel: "TVA",
};

export const cookieBanner: CookieBannerDict = {
  title: "Ce site reste simple",
  body: "Millecam n'utilise aucun cookie de suivi. Pour des statistiques de visite anonymes, nous utilisons Vercel Analytics, qui ne place aucun cookie et ne collecte aucune donnée personnelle.",
  accept: "Compris",
  moreInfo: "En savoir plus",
};

export const contactForm: ContactFormDict = {
  subjects: ["Analyse GAP", "Accompagnement DPO", "Trajet ISO 27001", "Exercice sur table (tabletop)", "Autre question"],
  labels: {
    name: "Nom",
    company: "Entreprise",
    email: "Adresse e-mail",
    phone: "Numéro de téléphone",
    subject: "Sujet",
    message: "Message",
  },
  validation: {
    name: "Veuillez indiquer votre nom.",
    email: "Veuillez indiquer une adresse e-mail valide, par exemple nom@entreprise.be.",
    message: "Veuillez indiquer un message.",
  },
  submit: "Envoyer le message",
  sending: "Envoi en cours...",
  sentTitle: "Message envoyé.",
  sentSub: "Vous recevrez une réponse sous 24 heures.",
  error: "Une erreur s'est produite. Réessayez, ou écrivez-nous directement à info@millecam.be.",
};

export const nis2Checker: Nis2CheckerDict = {
  sectoren: [
    "Énergie, eau ou gestion des déchets",
    "Transport ou logistique",
    "Secteur bancaire ou infrastructure financière",
    "Soins de santé",
    "Infrastructure numérique (cloud, hébergement, centres de données)",
    "Services informatiques fournis à d'autres entreprises",
    "Administration publique",
    "Industrie alimentaire",
    "Autre / aucun de ces secteurs",
  ],
  groottes: [
    "Moins de 50 employés et moins de 10 millions d'euros de chiffre d'affaires",
    "De 50 à 249 employés, ou de 10 à 50 millions d'euros de chiffre d'affaires",
    "250 employés ou plus, ou plus de 50 millions d'euros de chiffre d'affaires",
  ],
  aantoonbaarheid: ["Oui", "Non", "Pas sûr(e)"],
  vragen: [
    "Dans quel secteur votre organisation est-elle active ?",
    "Combien d'employés (ou quel chiffre d'affaires annuel) compte votre organisation ?",
    "Un client, un assureur ou une autorité publique vous demande-t-il déjà de démontrer vos mesures de cybersécurité ?",
  ],
  questionOf: "Question {step} sur {total}",
  previous: "Question précédente",
  possiblePath: "Trajet possible",
  disclaimer:
    "Ceci est une première indication basée sur trois questions, et non une réponse juridiquement contraignante. Une analyse GAP apporte la certitude.",
  ctaPrimary: "Planifier une analyse GAP",
  restart: "Recommencer",
  verdicts: {
    inSectorAndGroot: {
      titel: "Probablement soumis à NIS2",
      tekst:
        "Selon votre secteur et votre taille, vous êtes probablement soumis à NIS2. Cela exige de démontrer formellement vos mesures de cybersécurité : une analyse GAP détermine précisément ce qui reste à faire.",
      tijdlijn: [
        { periode: "Mois 1", activiteit: "Analyse GAP" },
        { periode: "Mois 2 à 4", activiteit: "Mise en œuvre" },
        { periode: "En continu", activiteit: "Accompagnement" },
      ],
    },
    inSectorNotGroot: {
      titel: "Probablement pas (encore) soumis à NIS2 en raison de votre taille",
      tekst:
        "Pour la plupart des organisations de votre secteur, un seuil de taille s'applique, même si des exceptions existent pour les services critiques. CyFun constitue souvent une base accessible pour tout de même pouvoir démontrer votre conformité.",
      tijdlijn: [
        { periode: "Mois 1", activiteit: "Auto-évaluation CyFun" },
        { periode: "Mois 2", activiteit: "Mise en œuvre légère" },
        { periode: "Chaque année", activiteit: "Réévaluation" },
      ],
    },
    notInSectorButAsked: {
      titel: "Pas nécessairement soumis à NIS2, mais un point à clarifier",
      tekst:
        "NIS2 ne semble pas s'appliquer directement, mais la demande de votre client ou assureur oriente plutôt vers ISO 27001 ou CyFun. Une analyse GAP permet de déterminer le cadre le plus adapté.",
      tijdlijn: [
        { periode: "Mois 1", activiteit: "Analyse GAP (ISO 27001/CyFun)" },
        { periode: "Mois 2 à 3", activiteit: "Mise en place de la démontrabilité" },
        { periode: "En continu", activiteit: "Maintien" },
      ],
    },
    fallback: {
      titel: "Probablement pas soumis à NIS2",
      tekst:
        "D'après vos réponses, NIS2 ne semble pas s'appliquer pour l'instant. Cela peut changer avec la croissance de votre organisation. Le RGPD reste en tout cas d'application, quel que soit le secteur ou la taille.",
      tijdlijn: [
        { periode: "Maintenant", activiteit: "Le RGPD reste d'application" },
        { periode: "En cas de croissance", activiteit: "Réévaluer NIS2" },
      ],
    },
  },
};

export const selfAssessment: SelfAssessmentDict = {
  domains: ["Gouvernance", "Contrôle d'accès", "Réponse aux incidents", "Gestion des fournisseurs"],
  averageLabel: "score moyen / 5",
  helper:
    "Ajustez les scores pour voir comment la moyenne évolue : c'est ainsi que fonctionne le scoring dans chaque analyse GAP, avec votre propre situation plutôt que cet exemple.",
};
