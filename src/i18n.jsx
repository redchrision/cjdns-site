import { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  en: {
    nav: {
      skip: 'Skip to content',
      menu: 'Menu',
      consulting: 'Consultancy',
      research: 'Research partnerships',
      credentials: 'R&D credentials',
      contact: 'Contact',
    },
    meta: {
      home: {
        title: 'CJDNS SASU — R&D consultancy & research engineering',
        desc: 'Independent R&D consultancy in the Paris area, active in Normandy, working worldwide. Networking, cryptography, Linux kernel, applied AI — and research partnerships under FP7, Horizon 2020 and Horizon Europe. CIR-eligible R&D.',
      },
      legal: {
        title: 'Legal notice — CJDNS SASU',
        desc: 'Legal notice and privacy information for the CJDNS SASU website.',
      },
      notFound: {
        title: 'Page not found — CJDNS SASU',
        desc: 'This page does not exist.',
      },
    },
    hero: {
      eyebrow: 'Consultancy & research partnerships — Paris · Normandy · Worldwide',
      title: 'Engineering, research, and everything between.',
      lead: 'CJDNS is an independent R&D and consultancy company. Businesses bring us technical questions; research consortia bring us projects to validate, integrate and deliver. Either way, you talk directly to the senior engineers doing the work.',
      ctaConsulting: 'Consultancy',
      ctaResearch: 'Research partnerships',
      badges: ['Open source at heart', 'FP7 · Horizon 2020 · Horizon Europe', 'CIR-eligible R&D'],
    },
    consulting: {
      eyebrow: 'Consultancy',
      title: 'Bring us the problem.',
      lead: 'Some business problems have a hard technical core. We give advice you can act on — or build the solution ourselves. The areas where we go deep:',
      areas: [
        'Networking',
        'Cryptography',
        'Information security',
        'Open-source ecosystems',
        'Proof-of-work & cryptocurrency',
        'Smart contracts',
        'Linux kernel development',
        'Applied AI',
      ],
      pitch: 'The first conversation takes fifteen minutes and costs nothing. Bring the problem — we will tell you honestly whether we are the right people to solve it.',
      book: 'Book a 15-minute call',
      orWrite: 'or write to',
      bookMailSubject: '15-minute intro call',
    },
    research: {
      eyebrow: 'Research partnerships',
      title: 'We make funded research projects hold together.',
      lead: 'Over ten years of experience managing French and European publicly funded research — FP7, Horizon 2020, Horizon Europe. We support consortia through the whole cycle, from the grant application to the final deliverable.',
      items: [
        {
          name: 'Architecture & feasibility validation',
          text: 'Research consortia assemble specialists, and someone has to make the pieces fit. Before the work begins, we validate that a proposed architecture can actually be built — on paper first, so the surprises don’t arrive at month eighteen.',
        },
        {
          name: 'Integration of deliverable components',
          text: 'During the project, we build the glue: the integration layer that turns components developed by separate specialist teams into one working, demonstrable system.',
        },
        {
          name: 'Grant application support',
          text: 'From framing a fundable work programme to writing the application itself — we have been on the practitioner side of French and European funding processes for a decade.',
        },
      ],
      selectedTitle: 'Selected projects',
      projects: [
        {
          name: 'LEDGER',
          tag: 'NGI · Horizon 2020',
          text: 'Work funded through LEDGER, the Next Generation Internet venture-builder programme for human-centric decentralised technologies, under Horizon 2020 cascade funding.',
          linkKey: 'ledger',
          linkLabel: 'About the programme',
        },
        {
          name: 'EcoNet Linux',
          tag: 'NGI0 · NLnet',
          text: 'Bringing the EcoNet processor family into mainline Linux and OpenWrt — deliverables contributed upstream to the official Linux kernel. Funded under NGI Zero, the Next Generation Internet programme administered by NLnet.',
          linkKey: 'econet',
          linkLabel: 'Project wiki',
        },
      ],
      pitch: 'Preparing a proposal, or holding a work package that needs senior integration hands? Fifteen minutes is enough to find out if we fit.',
    },
    credentials: {
      eyebrow: 'R&D credentials',
      title: 'Recognised as a research company under French law.',
      items: [
        {
          name: 'JEI — Jeune Entreprise Innovante',
          text: 'CJDNS qualified as a Young Innovative Company from its creation — a status French law reserves for companies substantially devoted to research and development, for the maximum duration the law allows. The R&D character it certified is unchanged, and carries forward in our CIR eligibility today.',
        },
        {
          name: 'CIR — Crédit d’Impôt Recherche',
          text: 'Our research activity qualifies under the French research tax credit framework. For clients, this matters directly: R&D work subcontracted to us can be eligible for their own CIR claim, reducing the net cost of a research mandate by up to 30%.',
        },
        {
          name: 'European public funding',
          text: 'Our research projects are selected and funded through programmes of the European Commission’s Next Generation Internet initiative — independent peer review of the quality and relevance of our R&D.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Write to us.',
      text: 'One address, read directly by engineers — no ticket system, no waiting room. A project you want to discuss, a proposal taking shape, or simply a question you would like an honest opinion on: write to us. We answer every serious message, in English or French.',
      copy: 'Copy address',
      copied: 'Copied ✓',
      email: 'info@cjdns.fr',
      preferCall: 'Prefer to talk? Book a 15-minute call →',
    },
    footer: {
      legal: 'CJDNS SASU — R&D software engineering & consultancy',
      rights: 'SIREN 843 264 235 — Registered in France.',
      legalLink: 'Legal notice & privacy',
      noTracking: 'Private by design — this site runs without cookies or trackers.',
    },
    legalPage: {
      title: 'Legal notice',
      intro: 'Information required under the French law for confidence in the digital economy (LCEN, art. 6-III).',
      sections: [
        {
          h: 'Publisher',
          body: [
            'CJDNS — société par actions simplifiée unipersonnelle (SASU) with a capital of €50, registered with the Nanterre Trade and Companies Register under SIREN 843 264 235.',
            'Registered office: 32 rue de Paris, 92100 Boulogne-Billancourt, France.',
            'Publication director: Caleb James DeLisle, President.',
            'Contact: info@cjdns.fr',
          ],
        },
        {
          h: 'Hosting',
          body: [
            'This website is hosted by OVH SAS, 2 rue Kellermann, 59100 Roubaix, France — www.ovhcloud.com.',
          ],
        },
        {
          h: 'Privacy',
          body: [
            'This website sets no cookies and uses no trackers or third-party analytics. Fonts are served from our own host; no visitor data is transmitted to third parties by this site.',
            'If you write to info@cjdns.fr, your message and address are used solely to answer you. You may request access to, correction of, or deletion of your data at the same address, and you may lodge a complaint with the CNIL (www.cnil.fr).',
          ],
        },
        {
          h: 'Intellectual property',
          body: [
            'Unless stated otherwise, the content of this website is © CJDNS SASU. Open-source work referenced on this site is distributed under its respective free-software licences.',
          ],
        },
      ],
    },
    notFoundPage: {
      title: 'This route does not exist.',
      text: 'No peer answers at this address. The page may have moved, or the link may be mistyped.',
      cta: 'Back to the homepage',
    },
    langLabel: 'FR',
  },

  fr: {
    nav: {
      skip: 'Aller au contenu',
      menu: 'Menu',
      consulting: 'Conseil',
      research: 'Partenariats de recherche',
      credentials: 'Agréments R&D',
      contact: 'Contact',
    },
    meta: {
      home: {
        title: 'CJDNS SASU — Conseil R&D & ingénierie de recherche',
        desc: 'Société indépendante de conseil R&D en région parisienne, active en Normandie, présente à l’international. Réseaux, cryptographie, noyau Linux, IA appliquée — et partenariats de recherche FP7, Horizon 2020, Horizon Europe. R&D éligible au CIR.',
      },
      legal: {
        title: 'Mentions légales — CJDNS SASU',
        desc: 'Mentions légales et informations de confidentialité du site CJDNS SASU.',
      },
      notFound: {
        title: 'Page introuvable — CJDNS SASU',
        desc: 'Cette page n’existe pas.',
      },
    },
    hero: {
      eyebrow: 'Conseil & partenariats de recherche — Paris · Normandie · International',
      title: 'Ingénierie, recherche, et tout ce qu\'il y a entre les deux.',
      lead: 'CJDNS est une société indépendante de R&D et de conseil. Les entreprises nous apportent leurs questions techniques ; les consortiums de recherche nous confient des projets à valider, intégrer et livrer. Dans les deux cas, vous parlez directement aux ingénieurs seniors qui font le travail.',
      ctaConsulting: 'Conseil',
      ctaResearch: 'Partenariats de recherche',
      badges: ['L’open source au cœur', 'FP7 · Horizon 2020 · Horizon Europe', 'R&D éligible au CIR'],
    },
    consulting: {
      eyebrow: 'Conseil',
      title: 'Apportez-nous le problème.',
      lead: 'Certains problèmes d’entreprise ont un cœur technique difficile. Nous donnons des conseils sur lesquels vous pouvez agir — ou construisons la solution nous-mêmes. Nos domaines de prédilection :',
      areas: [
        'Réseaux',
        'Cryptographie',
        'Sécurité informatique',
        'Écosystèmes open source',
        'Preuve de travail & cryptomonnaies',
        'Smart contracts',
        'Développement du noyau Linux',
        'IA appliquée',
      ],
      pitch: 'Le premier échange dure quinze minutes et ne coûte rien. Apportez le problème — nous vous dirons honnêtement si nous sommes les bonnes personnes pour le résoudre.',
      book: 'Réserver un appel de 15 minutes',
      orWrite: 'ou écrivez à',
      bookMailSubject: 'Appel de présentation — 15 minutes',
    },
    research: {
      eyebrow: 'Partenariats de recherche',
      title: 'Nous faisons tenir ensemble les projets de recherche financés.',
      lead: 'Plus de dix ans d’expérience dans la gestion de projets de recherche financés par des fonds publics français et européens — FP7, Horizon 2020, Horizon Europe. Nous accompagnons les consortiums sur tout le cycle, de la demande de financement au livrable final.',
      items: [
        {
          name: 'Validation d’architecture & de faisabilité',
          text: 'Un consortium de recherche assemble des spécialistes, et quelqu’un doit faire tenir les pièces ensemble. Avant le début des travaux, nous validons qu’une architecture proposée peut réellement être construite — sur le papier d’abord, pour que les surprises n’arrivent pas au dix-huitième mois.',
        },
        {
          name: 'Intégration des composants livrables',
          text: 'Pendant le projet, nous construisons le liant : la couche d’intégration qui transforme des composants développés par des équipes spécialistes distinctes en un système unique, fonctionnel et démontrable.',
        },
        {
          name: 'Accompagnement des demandes de financement',
          text: 'Du cadrage d’un programme de travail finançable à la rédaction de la demande elle-même — nous pratiquons les dispositifs de financement français et européens depuis dix ans, côté praticien.',
        },
      ],
      selectedTitle: 'Projets sélectionnés',
      projects: [
        {
          name: 'LEDGER',
          tag: 'NGI · Horizon 2020',
          text: 'Travaux financés via LEDGER, le programme « venture builder » de l’initiative Next Generation Internet pour les technologies décentralisées centrées sur l’humain, en financement en cascade Horizon 2020.',
          linkKey: 'ledger',
          linkLabel: 'À propos du programme',
        },
        {
          name: 'EcoNet Linux',
          tag: 'NGI0 · NLnet',
          text: 'Prise en charge de la famille de processeurs EcoNet dans Linux mainline et OpenWrt — des livrables contribués en amont, dans le noyau Linux officiel. Financé au titre de NGI Zero, le programme Next Generation Internet administré par NLnet.',
          linkKey: 'econet',
          linkLabel: 'Wiki du projet',
        },
      ],
      pitch: 'Vous préparez une proposition, ou portez un work package qui demande des mains seniors pour l’intégration ? Quinze minutes suffisent pour savoir si nous sommes le bon partenaire.',
    },
    credentials: {
      eyebrow: 'Agréments R&D',
      title: 'Une société de recherche reconnue par le droit français.',
      items: [
        {
          name: 'JEI — Jeune Entreprise Innovante',
          text: 'CJDNS a bénéficié du statut de Jeune Entreprise Innovante dès sa création — un statut que le droit français réserve aux sociétés substantiellement consacrées à la recherche et développement, pour toute la durée maximale prévue par la loi. Le caractère R&D qu’il certifiait est inchangé, et se prolonge aujourd’hui dans notre éligibilité au CIR.',
        },
        {
          name: 'CIR — Crédit d’Impôt Recherche',
          text: 'Nos travaux de recherche s’inscrivent dans le cadre du Crédit d’Impôt Recherche. Pour nos clients, l’enjeu est direct : la R&D sous-traitée à CJDNS peut être éligible à leur propre déclaration CIR, réduisant le coût net d’un mandat de recherche jusqu’à 30 %.',
        },
        {
          name: 'Financements publics européens',
          text: 'Nos projets de recherche sont sélectionnés et financés par des programmes de l’initiative Next Generation Internet de la Commission européenne — une évaluation indépendante, par les pairs, de la qualité et de la pertinence de notre R&D.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Écrivez-nous.',
      text: 'Une adresse, lue directement par des ingénieurs — sans système de tickets, sans salle d’attente. Un projet dont vous voulez discuter, une proposition qui prend forme, ou simplement une question sur laquelle vous aimeriez un avis honnête : écrivez-nous. Nous répondons à chaque message sérieux, en français ou en anglais.',
      copy: 'Copier l’adresse',
      copied: 'Copié ✓',
      preferCall: 'Vous préférez en parler ? Réservez un appel de 15 minutes →',
      email: 'info@cjdns.fr',
    },
    footer: {
      legal: 'CJDNS SASU — Ingénierie logicielle R&D & conseil',
      rights: 'SIREN 843 264 235 — Société immatriculée en France.',
      legalLink: 'Mentions légales & confidentialité',
      noTracking: 'Privé par conception — ce site fonctionne sans cookies ni traceurs.',
    },
    legalPage: {
      title: 'Mentions légales',
      intro: 'Informations requises par la loi pour la confiance dans l’économie numérique (LCEN, art. 6-III).',
      sections: [
        {
          h: 'Éditeur',
          body: [
            'CJDNS — société par actions simplifiée unipersonnelle (SASU) au capital de 50 €, immatriculée au RCS de Nanterre sous le SIREN 843 264 235.',
            'Siège social : 32 rue de Paris, 92100 Boulogne-Billancourt, France.',
            'Directeur de la publication : Caleb James DeLisle, Président.',
            'Contact : info@cjdns.fr',
          ],
        },
        {
          h: 'Hébergement',
          body: [
            'Ce site est hébergé par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France — www.ovhcloud.com.',
          ],
        },
        {
          h: 'Confidentialité',
          body: [
            'Ce site ne dépose aucun cookie et n’utilise ni traceur ni outil d’analyse tiers. Les polices sont servies depuis notre propre hébergement ; aucune donnée de visite n’est transmise à des tiers par ce site.',
            'Si vous écrivez à info@cjdns.fr, votre message et votre adresse ne sont utilisés que pour vous répondre. Vous pouvez demander l’accès, la rectification ou la suppression de vos données à cette même adresse, et introduire une réclamation auprès de la CNIL (www.cnil.fr).',
          ],
        },
        {
          h: 'Propriété intellectuelle',
          body: [
            'Sauf mention contraire, le contenu de ce site est © CJDNS SASU. Les travaux open source mentionnés sur ce site sont distribués sous leurs licences libres respectives.',
          ],
        },
      ],
    },
    notFoundPage: {
      title: 'Cette route n’existe pas.',
      text: 'Aucun pair ne répond à cette adresse. La page a peut-être été déplacée, ou le lien comporte une erreur.',
      cta: 'Retour à l’accueil',
    },
    langLabel: 'EN',
  },
};

const LangContext = createContext(null);

function initialLang() {
  try {
    const saved = window.localStorage.getItem('cjdns-lang');
    if (saved === 'en' || saved === 'fr') return saved;
  } catch {
    /* storage unavailable */
  }
  return 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const toggle = useCallback(() => {
    setLang((l) => {
      const next = l === 'en' ? 'fr' : 'en';
      try {
        window.localStorage.setItem('cjdns-lang', next);
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }, []);
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
