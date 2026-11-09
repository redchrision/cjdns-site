import { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  en: {
    nav: {
      skip: 'Skip to content',
      menu: 'Menu',
      consulting: 'Consulting',
      research: 'Research partnerships',
      credentials: 'R&D credentials',
      contact: 'Contact',
    },
    meta: {
      home: {
        title: 'CJDNS SASU — Consulting & Research',
        desc: 'Independent consulting and research.',
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
      eyebrow: 'Consulting & research partnerships',
      title: 'Confidence through comprehension.',
      lead: 'CJDNS is an independent R&D and consulting company. We translate technical uncertainty into decision-quality information.',
      ctaConsulting: 'Consulting',
      ctaResearch: 'Publicly funded research',
      badges: ['FP7', 'Horizon 2020', 'Horizon Europe', 'CIR-eligible R&D'],
    },
    consulting: {
      eyebrow: 'Consulting',
      title: 'Achieve clarity.',
      lead: 'Our consultancy brings decades of industry experience to help you navigate the subtle realities that aren\'t captured in documentation, ' +
        'best practices, or the training data behind today\'s AI tools. ' +
        'We understand the value of time, and know how to communicate complex technical issues directly to C-suite executives, boards, investors, ' +
        'and engineering teams. We embed with development teams and project managers to guide architecture and reduce risk around critical path milestones.',
      areas: [
        {
          name: "Feasibility",
          lede: "When building something that has never been built before, a critical early objective is to establish that a product meeting its requirements can be delivered within the available time and budget.",
          body: [
            "Many challenges have multiple possible approaches, making the engineering effort, schedule, and cost of reaching a proof of concept difficult to estimate accurately.",
            "We frequently work on projects with uncertain feasibility.",
            "Our approach integrates feasibility activities into the overall project plan, resequencing work to retire the highest risks as early as practical.",
          ],
        },
        {
          name: "Software architecture",
          lede: "Software architecture is critical to both efficient delivery and long-term maintainability.",
          body: [
            "We work with project managers and senior developers to define architectures and engineering processes",
            "that reduce technical risk while balancing initial investment against long-term maintainability.",
          ],
        },
        {
          name: "Protocol design",
          lede: "Wherever software systems communicate, protocols are needed.",
          body: [
            "Whether in inter-process communication, distributed systems, client-server architectures, federation, or peer-to-peer networks, the fundamental design considerations remain largely the same.",
            "Good protocols balance security, efficiency, simplicity, and long-term interoperability.",
            "We have extensive protocol design experience, beginning with the open-source peer-to-peer routing protocol that is our namesake.",
          ],
        },
        {
          name: "Information security",
          lede: "Information security is often burdened by superstition, folklore, and checkbox-driven thinking. In reality, effective security is simply another application of rigorous risk analysis.",
          body: [
            "The appropriate risk model for most information security analyses is similar to that of physical security. It considers threat actor profiles, attacker capabilities and resources, attacker incentives, potential impact on the defender, and the relevant attack surface.",
            "AI has recently begun providing powerful new analysis tools to attackers and defenders alike. But even this rapidly evolving ecosystem can still be modeled and reasoned about.",
          ],
        },
        {
          name: "Technical due diligence",
          lede: "It's not enough to know what an asset is today.",
          body: [
            "You need to know how that asset performs across the range of credible future scenarios.",
            "Just as your legal team identifies risks and obligations in contracts, we identify risks and opportunities in technology assets.",
          ],
        },
        {
          name: "Risk analysis",
          lede: "Our clients are typically decision makers who already think in terms of risk and opportunity, so we often find these concepts provide a good common language between us.",
          body: [
            "For clients who want additional structure, we go further into practical decision modeling and probabilistic forecasts.",
            "The level of formalization is always adapted to the goal. When helping decision makers become familiar with the landscape of credible outcomes, we don't present a formal model; instead, we draw a map.",
          ],
        },
        {
          name: "Open source ecosystems",
          lede: "Open source ecosystem management is a special case of brand development. While we are not specialists in branding, we do have extensive experience in building and interfacing with open source ecosystems.",
          body: [
            "Even for companies which genuinely share open source values, good planning is still necessary to avoid being forced into business decisions that damage long-term credibility.",
            "Companies which succeed in open source ecosystems are those that are able to reliably maintain transparency, candor, and predictable behavior.",
            "Open source ecosystems are even tolerant of profit-focused companies, as long as they are able to set expectations and keep their word.",
          ],
        },
        {
          name: "Applied AI",
          lede: "One of the fastest-growing opportunities for value creation today is the application of modern AI technologies.",
          body: [
            "We do not specialize in fundamental AI research.",
            "We adapt existing base models using fine-tuning, prompt design, and system integration to meet project requirements.",
          ],
        },
      ],
      exploreLabel: 'Areas of expertise',
      prev: 'Previous',
      next: 'Next',
      pitch: 'Book a confidential 15-minute call to discuss your objectives and whether we\'re the right fit.',
      book: 'Book a 15-minute call',
      orWrite: 'or write to',
      bookMailSubject: '15-minute introductory call',
    },
    research: {
      eyebrow: 'Publicly funded research partnerships',
      title: 'A research partner that talks theory and practice.',
      lead: 'Over ten years of experience managing French and European publicly funded research — FP7, Horizon 2020, Horizon Europe. We support consortia through the whole cycle, from the grant application to the final deliverable.',
      items: [
        {
          name: 'Architecture & feasibility validation',
          text: 'Research consortia assemble field specialists, but it\'s important to make sure the pieces fit. Before the work begins, we provide advice on architecture, exploitation feasibility, and risks to help projects start off on the right foot.',
        },
        {
          name: 'Integration of deliverable components',
          text: 'During the project, we provide specific expertise in the integration of results and the research-to-industrial pipeline: We have experience producing demos, proof of concept, MVP, software products, and open source projects.',
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
      pitch: 'If you\'re looking for the partner with integration, industrialization, and delivery expertise, send us an email about your project.',
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
      text: 'Tell us the problem and we\'ll take it from there',
      copy: 'Copy address',
      copied: 'Copied ✓',
      email: 'hello@cjdns.fr',
      preferCall: 'Ready to launch your consulting mission? Book a confidential 15-minute call →',
    },
    footer: {
      legal: 'CJDNS SASU — Consulting and research',
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
            'Contact: hello@cjdns.fr',
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
            'If you write to hello@cjdns.fr, your message and address are used solely to answer you. You may request access to, correction of, or deletion of your data at the same address, and you may lodge a complaint with the CNIL (www.cnil.fr).',
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
        title: 'CJDNS SASU — Conseil & recherche',
        desc: 'Conseil et recherche indépendants.',
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
      eyebrow: 'Conseil & partenariats de recherche',
      title: 'La confiance par la compréhension.',
      lead: 'CJDNS est une société indépendante de R&D et de conseil. Nous transformons l’incertitude technique en informations sur lesquelles fonder vos décisions.',
      ctaConsulting: 'Conseil',
      ctaResearch: 'Recherche sur fonds publics',
      badges: ['FP7', 'Horizon 2020', 'Horizon Europe', 'R&D éligible au CIR'],
    },
    consulting: {
      eyebrow: 'Conseil',
      title: 'Gagnez en clarté.',
      lead: 'Notre activité de conseil met des décennies d’expérience industrielle à votre service, pour vous aider à naviguer dans les réalités subtiles que l’on ne trouve ni dans la documentation, ni dans les bonnes pratiques, ni dans les données d’entraînement des outils d’IA actuels. Nous connaissons la valeur du temps, et nous savons exposer des questions techniques complexes directement aux dirigeants, aux conseils d’administration, aux investisseurs et aux équipes d’ingénierie. Nous nous intégrons aux équipes de développement et aux chefs de projet pour orienter l’architecture et réduire les risques autour des jalons du chemin critique.',
      areas: [
        {
          name: 'Faisabilité',
          lede: 'Lorsqu’on construit quelque chose qui n’a jamais été construit, un objectif essentiel, dès le départ, est d’établir qu’un produit répondant aux exigences peut être livré dans les délais et le budget disponibles.',
          body: [
            'De nombreux défis admettent plusieurs approches possibles, ce qui rend difficile l’estimation précise de l’effort d’ingénierie, du calendrier et du coût nécessaires pour atteindre une preuve de concept.',
            'Nous travaillons fréquemment sur des projets dont la faisabilité est incertaine.',
            'Notre approche intègre les activités de faisabilité au plan global du projet, en réordonnant les travaux pour lever les risques les plus importants le plus tôt possible.',
          ],
        },
        {
          name: 'Architecture logicielle',
          lede: 'L’architecture logicielle est déterminante, à la fois pour l’efficacité de la livraison et pour la maintenabilité à long terme.',
          body: [
            'Nous travaillons avec les chefs de projet et les développeurs seniors pour définir des architectures et des processus d’ingénierie qui réduisent le risque technique, tout en arbitrant entre l’investissement initial et la maintenabilité à long terme.',
          ],
        },
        {
          name: 'Conception de protocoles',
          lede: 'Partout où des systèmes logiciels communiquent, il faut des protocoles.',
          body: [
            'Qu’il s’agisse de communication inter-processus, de systèmes distribués, d’architectures client-serveur, de fédération ou de réseaux pair-à-pair, les considérations fondamentales de conception restent largement les mêmes.',
            'Un bon protocole équilibre sécurité, efficacité, simplicité et interopérabilité à long terme.',
            'Nous avons une vaste expérience de la conception de protocoles, à commencer par le protocole de routage pair-à-pair open source dont nous portons le nom.',
          ],
        },
        {
          name: 'Sécurité informatique',
          lede: 'La sécurité informatique est souvent encombrée de superstitions, de folklore et de raisonnements par cases à cocher. En réalité, une sécurité efficace n’est qu’une application parmi d’autres d’une analyse de risques rigoureuse.',
          body: [
            'Le modèle de risque adapté à la plupart des analyses de sécurité informatique est proche de celui de la sécurité physique. Il prend en compte les profils des acteurs de la menace, les capacités et les ressources des attaquants, leurs motivations, l’impact potentiel pour le défenseur et la surface d’attaque concernée.',
            'L’IA a récemment commencé à offrir de nouveaux outils d’analyse puissants, aux attaquants comme aux défenseurs. Mais même cet écosystème en évolution rapide peut encore être modélisé et analysé avec rigueur.',
          ],
        },
        {
          name: 'Due diligence technique',
          lede: 'Il ne suffit pas de savoir ce qu’est un actif aujourd’hui.',
          body: [
            'Vous devez savoir comment cet actif se comporte dans l’ensemble des scénarios futurs crédibles.',
            'De la même manière que votre équipe juridique identifie les risques et les obligations dans les contrats, nous identifions les risques et les opportunités dans les actifs technologiques.',
          ],
        },
        {
          name: 'Analyse de risques',
          lede: 'Nos clients sont généralement des décideurs qui raisonnent déjà en termes de risques et d’opportunités ; ces notions constituent souvent un bon langage commun entre nous.',
          body: [
            'Pour les clients qui souhaitent davantage de structure, nous allons plus loin, avec une modélisation pratique de la décision et des prévisions probabilistes.',
            'Le niveau de formalisation est toujours adapté à l’objectif. Lorsqu’il s’agit d’aider des décideurs à se familiariser avec le paysage des issues crédibles, nous ne présentons pas de modèle formel : nous dessinons une carte.',
          ],
        },
        {
          name: 'Écosystèmes open source',
          lede: 'La gestion d’un écosystème open source est un cas particulier du développement de marque. Sans être spécialistes de l’image de marque, nous avons une longue expérience de la construction d’écosystèmes open source et des relations avec eux.',
          body: [
            'Même pour les entreprises qui partagent sincèrement les valeurs de l’open source, une bonne planification reste nécessaire pour ne pas être contraintes à des décisions commerciales qui nuisent à leur crédibilité à long terme.',
            'Les entreprises qui réussissent dans les écosystèmes open source sont celles qui savent faire preuve, de manière constante, de transparence, de franchise et d’un comportement prévisible.',
            'Les écosystèmes open source tolèrent même les entreprises tournées vers le profit, pourvu qu’elles sachent fixer les attentes et tenir parole.',
          ],
        },
        {
          name: 'IA appliquée',
          lede: 'L’une des sources de création de valeur qui croissent le plus vite aujourd’hui est l’application des technologies modernes d’IA.',
          body: [
            'Nous ne sommes pas spécialisés dans la recherche fondamentale en IA.',
            'Nous adaptons des modèles de base existants par fine-tuning, conception de prompts et intégration système, afin de répondre aux exigences du projet.',
          ],
        },
      ],
      exploreLabel: 'Domaines d’expertise',
      prev: 'Précédent',
      next: 'Suivant',
      pitch: 'Réservez un appel confidentiel de 15 minutes pour échanger sur vos objectifs et voir si nous sommes le bon partenaire.',
      book: 'Réserver un appel de 15 minutes',
      orWrite: 'ou écrivez à',
      bookMailSubject: 'Appel de présentation — 15 minutes',
    },
    research: {
      eyebrow: 'Partenariats de recherche sur fonds publics',
      title: 'Un partenaire de recherche qui parle théorie et pratique.',
      lead: 'Plus de dix ans d’expérience dans la gestion de projets de recherche financés par des fonds publics français et européens — FP7, Horizon 2020, Horizon Europe. Nous accompagnons les consortiums sur tout le cycle, de la demande de financement au livrable final.',
      items: [
        {
          name: 'Validation d’architecture & de faisabilité',
          text: 'Un consortium de recherche réunit des spécialistes de leur domaine, mais il est essentiel de s’assurer que les pièces s’assemblent. Avant le début des travaux, nous conseillons sur l’architecture, la faisabilité de l’exploitation et les risques, pour que le projet parte sur de bonnes bases.',
        },
        {
          name: 'Intégration des composants livrables',
          text: 'Pendant le projet, nous apportons une expertise spécifique de l’intégration des résultats et du passage de la recherche à l’industrie : nous avons l’expérience des démonstrateurs, preuves de concept, MVP, produits logiciels et projets open source.',
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
      pitch: 'Vous cherchez un partenaire doté d’une expertise en intégration, en industrialisation et en livraison ? Écrivez-nous au sujet de votre projet.',
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
      text: 'Exposez-nous le problème, nous nous occupons du reste.',
      copy: 'Copier l’adresse',
      copied: 'Copié ✓',
      preferCall: 'Prêt à lancer votre mission de conseil ? Réservez un appel confidentiel de 15 minutes →',
      email: 'hello@cjdns.fr',
    },
    footer: {
      legal: 'CJDNS SASU — Conseil et recherche',
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
            'Contact : hello@cjdns.fr',
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
            'Si vous écrivez à hello@cjdns.fr, votre message et votre adresse ne sont utilisés que pour vous répondre. Vous pouvez demander l’accès, la rectification ou la suppression de vos données à cette même adresse, et introduire une réclamation auprès de la CNIL (www.cnil.fr).',
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
