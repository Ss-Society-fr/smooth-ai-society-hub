export type Week = "week1" | "week2";

export interface Generator {
  title: string;
  placeholder: string;
  instructions?: string;
  videoUrl?: string;
}

export interface DayData {
  title: string;
  subtitle: string;
  objective: string;
  steps?: string[];
  generators?: Generator[];
  isCompleted: boolean;
}

export interface ProgramData {
  [key: string]: DayData;
}

export const dailyData: ProgramData = {
  day1: {
    title: "Jour 1 – Clarifie ta mission & ce que tu apportes d'unique",
    subtitle: "Identifier ta zone de génie, ce qui te rend unique, et la mission qui te fait vibrer.",
    objective: "Identifier ta vraie valeur, tes forces, ton \"why\", ton style de coaching, ta vision.",
    isCompleted: true,
    steps: [
      "Réfléchir à tes expériences passées et tes compétences clés",
      "Identifier tes super-pouvoirs et ce qui te rend unique",
      "Définir ta mission de coach avec un format court et inspirant"
    ],
    generators: [
      {
        title: "Définir ta valeur ajoutée en tant que coach",
        placeholder: "[décris ici en quelques phrases tes expériences, tes compétences, ce que tu aimes faire, et ce que les autres reconnaissent chez toi]",
        instructions: "Ce générateur t'aide à identifier tes super-pouvoirs (soft et hard skills), décrire ce que tu apportes de différent à tes futurs clients, et formuler une phrase qui résume ta mission en tant que coach."
      },
      {
        title: "Clarifier ta mission et tes motivations profondes",
        placeholder: "[décris ici tes raisons personnelles, tes déclics, ton histoire si tu veux]",
        instructions: "Ce générateur t'aide à créer une formulation inspirante et claire de ta mission en coaching, avec trois variantes: une version courte (1 phrase), une version développée (3-4 lignes) et une bio Instagram."
      },
      {
        title: "Identifier ton style unique d'accompagnement",
        placeholder: "[écris ici ton style naturel : plutôt empathique, challengeant, structuré, intuitif…]",
        instructions: "Ce générateur t'aide à nommer ton style de coaching et te donne une phrase d'accroche qui reflète cette vibe, avec 3 hashtags ou slogans pour ton branding."
      }
    ]
  },
  day2: {
    title: "Jour 2 – Trouve ta niche à fort potentiel",
    subtitle: "Identifier un angle de marché où ton expertise rencontre un besoin réel et urgent.",
    objective: "Croisement entre ta zone d'expertise, une vraie demande, et une différenciation claire.",
    isCompleted: true,
    steps: [
      "Croiser ton expertise, ta mission et les besoins du marché",
      "Explorer les douleurs et désirs profonds de ta niche cible",
      "Valider ton positionnement et ta différenciation"
    ],
    generators: [
      {
        title: "Identifier les niches potentielles à partir de mon profil",
        placeholder: "Mes forces / super-pouvoirs : [à compléter]\nMa mission : [à compléter]\nMon style de coaching : [à compléter]",
        instructions: "Ce générateur t'aide à identifier 5 idées de niches de coaching alignées avec ce que tu aimes faire, ce que tu sais bien faire, et ce qui est recherché aujourd'hui."
      },
      {
        title: "Explorer les douleurs et désirs profonds d'un segment de niche",
        placeholder: "Parmi les niches proposées, celle qui m'attire le plus est : [précise ici]",
        instructions: "Ce générateur t'aide à dresser le portrait de ton client idéal dans cette niche, avec ses frustrations, désirs, croyances limitantes et le vocabulaire qu'il utilise."
      },
      {
        title: "Choisir une niche prioritaire avec différenciation claire",
        placeholder: "Je cherche une niche avec un besoin urgent, une cible capable de payer, et un positionnement clair.",
        instructions: "Ce générateur t'aide à valider une seule niche prioritaire pour créer ton programme, avec un positionnement clair et différencié."
      }
    ]
  },
  day3: {
    title: "Jour 3 – Crée ton avatar client + identifie sa douleur centrale",
    subtitle: "Construire un portrait ultra-précis de ton client idéal.",
    objective: "Focus sur frustrations, désirs profonds, objections et mots exacts de ton audience.",
    isCompleted: false,
    steps: [
      "Créer une fiche avatar client complète",
      "Identifier la douleur centrale qui fait bouger cette personne",
      "Reformuler le problème en une transformation claire et désirable"
    ],
    generators: [
      {
        title: "Générer une fiche complète de mon client idéal",
        placeholder: "Niche : [à compléter]\nPromesse / positionnement : [à compléter]\nStyle / mission / valeur apportée : [à compléter depuis Jour 1]",
        instructions: "Ce générateur t'aide à créer une fiche avatar client ultra complète avec nom fictif, contexte, objectifs, freins et comportements."
      },
      {
        title: "Identifier la douleur #1 qui fait bouger cette personne",
        placeholder: "Je veux identifier le problème le plus douloureux et urgent pour mon client idéal.",
        instructions: "Ce générateur t'aide à identifier et décrire précisément la douleur principale de ton client idéal et son impact sur sa vie quotidienne."
      },
      {
        title: "Reformuler le problème en une transformation claire et sexy",
        placeholder: "Voici la douleur principale de mon client idéal : [à copier depuis le prompt précédent]",
        instructions: "Ce générateur t'aide à transformer la douleur en une promesse irrésistible, en définissant la situation de départ et la situation de rêve."
      }
    ]
  },
  day4: {
    title: "Jour 4 – Formule ta promesse de transformation & ton pitch",
    subtitle: "Créer une offre structurée, irrésistible et transformationnelle.",
    objective: "\"J'aide X à passer de A à B grâce à Y\", avec un pitch en 10 secondes et en storytelling.",
    isCompleted: false,
    steps: [
      "Structurer une offre autour du résultat, pas du temps",
      "Ajouter les bénéfices émotionnels et concrets",
      "Positionner ton offre comme une transformation"
    ],
    generators: [
      {
        title: "Créer l'ossature de mon programme de coaching sur-mesure",
        placeholder: "Ma niche : [à compléter]\nMon client idéal : [résumé rapide]\nSa douleur principale : [à copier depuis Jour 3]\nLe résultat qu'il/elle veut obtenir : [résultat clair et désirable]",
        instructions: "Ce générateur t'aide à structurer un programme de coaching en 4 à 8 étapes de transformation logique et progressive."
      },
      {
        title: "Détaille les bénéfices concrets et émotionnels de chaque étape",
        placeholder: "Voici les étapes de mon programme :\n1. [Étape 1]\n2. [Étape 2]\n...",
        instructions: "Ce générateur t'aide à définir pour chaque étape le résultat concret obtenu, le bénéfice émotionnel et une métaphore parlante."
      },
      {
        title: "Présente mon offre comme une solution premium et transformationnelle",
        placeholder: "Je veux formuler une version magnétique de mon offre signature, qui met en avant la transformation.",
        instructions: "Ce générateur t'aide à créer une description qui met en avant la transformation obtenue et la valeur perçue, plutôt que le temps passé."
      }
    ]
  },
  day5: {
    title: "Jour 5 – Choisis le bon format de coaching pour toi",
    subtitle: "Déterminer un prix aligné avec ta valeur et créer des bonus stratégiques.",
    objective: "1:1, groupe, hybride, durée, fréquence, niveau d'engagement.",
    isCompleted: false,
    steps: [
      "Calculer ton prix selon la valeur perçue",
      "Créer 2 à 3 bonus irrésistibles",
      "Formuler une garantie rassurante mais stratégique"
    ],
    generators: [
      {
        title: "Déterminer un tarif cohérent et désirable",
        placeholder: "Transformation proposée : [résultat final du programme]\nDurée : [X semaines / X étapes]\nFormat : [1:1, groupe, hybride, etc.]\nCible : [client idéal]",
        instructions: "Ce générateur t'aide à déterminer un prix juste et stratégique basé sur la valeur du résultat pour le client, ton positionnement et le marché."
      },
      {
        title: "Ajouter des bonus pertinents et différenciants",
        placeholder: "Voici les points forts de mon offre : [résumer en 2 lignes]",
        instructions: "Ce générateur t'aide à créer 2 à 3 bonus qui rassurent, déclenchent l'achat et renforcent l'engagement et les résultats du client."
      },
      {
        title: "Formuler une garantie rassurante mais stratégique",
        placeholder: "Je veux une garantie qui rassure sans me mettre en danger et qui renforce la confiance.",
        instructions: "Ce générateur t'aide à formuler une garantie convaincante pour ton programme, qui te positionne comme pro, éthique, et sûr de ton coaching."
      }
    ]
  },
  day6: {
    title: "Jour 6 – Crée ton programme de coaching (étapes + livrables)",
    subtitle: "Créer une page de vente convaincante et un mini tunnel de conversion.",
    objective: "Structuration du parcours client, étapes de transformation, livrables par étape.",
    isCompleted: false,
    steps: [
      "Écrire une page de vente persuasive (sans être un copywriter)",
      "Mettre en place un tunnel simple mais efficace",
      "Optimiser la clarté et la conversion"
    ],
    generators: [
      {
        title: "Rédige ma page de vente complète, structurée et persuasive",
        placeholder: "Nom du programme : [titre]\nRésultat obtenu : [transformation promise]\nDurée : [X semaines]\nFormat : [1:1, groupe, hybride, etc.]\nÉtapes clés : [liste des 4-8 étapes]\nBonus inclus : [liste des bonus avec valeur estimée]\nGarantie : [type de garantie]\nTarif et modalités de paiement : [prix unique / échelonné / offre de lancement]\nCible : [client idéal] et sa douleur principale : [à copier depuis Jour 3]",
        instructions: "Ce générateur t'aide à créer une page de vente complète avec titre accrocheur, contexte, promesse, description, bonus, garantie et appel à l'action."
      },
      {
        title: "Créer mon mini tunnel de conversion optimisé",
        placeholder: "J'utilise cette plateforme : [Systeme.io / Notion / Canva / autre]",
        instructions: "Ce générateur t'aide à définir les étapes du tunnel (pages, actions), suggérer les bons outils à connecter, et rédiger les emails nécessaires."
      },
      {
        title: "Optimiser les points de friction de ma page de vente",
        placeholder: "Voici la page de vente générée : [copie ou lien texte]",
        instructions: "Ce générateur t'aide à identifier les parties peu claires, proposer des accroches alternatives et suggérer une section FAQ stratégique."
      }
    ]
  },
  day7: {
    title: "Jour 7 – Rédige les scripts de tes sessions de coaching",
    subtitle: "Générer du contenu pertinent pour attirer des prospects.",
    objective: "Plan précis pour chaque session : objectifs, déroulé, exercices, résultats attendus.",
    isCompleted: false,
    steps: [
      "Créer des idées de contenus alignés à ta promesse",
      "Rédiger 3 contenus \"aimants à clients\"",
      "Utiliser les messages privés de façon stratégique"
    ],
    generators: [
      {
        title: "Génère 20 idées de posts ou contenus captivants pour créer de l'intérêt",
        placeholder: "Cible : [client idéal]\nPromesse de transformation : [résultat que ton client obtient]\nDouleurs principales : [3 douleurs identifiées]\nPlateformes sur lesquelles je veux publier : [Instagram / LinkedIn / Facebook / TikTok]",
        instructions: "Ce générateur t'aide à créer 20 idées de contenus pour capter l'attention, éduquer sur la problématique et mettre en avant la transformation."
      },
      {
        title: "Rédige mes 3 premiers contenus pour lancer mon programme",
        placeholder: "Cible : [client idéal]\nPromesse : [résultat]\nTon : [authentique / motivant / professionnel / friendly, etc.]",
        instructions: "Ce générateur t'aide à rédiger 3 contenus: un storytelling personnel, un post éducatif et une annonce douce de ton offre."
      },
      {
        title: "Rédige mes premiers messages DM pour engager la conversation",
        placeholder: "Je veux engager des conversations naturelles avec des personnes de ma cible.",
        instructions: "Ce générateur t'aide à créer des messages d'engagement, des questions qualifiantes et une proposition d'appel naturelle."
      }
    ]
  },
  day8: {
    title: "Jour 8 – Conçois tes supports & outils de coaching",
    subtitle: "Gérer ton appel découverte et transformer l'intérêt en client.",
    objective: "Workbooks, PDF, templates, tableaux de suivi, formats interactifs.",
    isCompleted: false,
    steps: [
      "Préparer ton script d'appel découverte structuré et humain",
      "Gérer les objections comme un pro, sans pression",
      "Envoyer un récap et suivre le prospect"
    ],
    generators: [
      {
        title: "Crée un script d'appel découverte personnalisé",
        placeholder: "Cible : [client idéal]\nPromesse : [transformation promise]\nFormat : [1:1 / groupe / hybride]\nDurée et structure : [X semaines + étapes clés]",
        instructions: "Ce générateur t'aide à créer un script d'appel découverte en 5 parties avec questions puissantes, pour qualifier le prospect sans forcer la vente."
      },
      {
        title: "Anticipe et gère les objections des prospects avec bienveillance",
        placeholder: "Mon offre coûte [prix], et s'adresse à [type de client].",
        instructions: "Ce générateur t'aide à rédiger des réponses alignées à ton ton de voix pour gérer les objections classiques comme \"Je dois réfléchir\" ou \"C'est trop cher\"."
      },
      {
        title: "Crée un message de suivi après l'appel (accepté ou refusé)",
        placeholder: "Je veux des messages pour trois cas de figure : acceptation, hésitation, ou refus.",
        instructions: "Ce générateur t'aide à créer 3 messages adaptés à chaque situation et un message de relance pour les cas sans réponse."
      }
    ]
  },
  day9: {
    title: "Jour 9 – Crée ton offre irrésistible (packaging + bonus + garantie)",
    subtitle: "Structurer l'accueil, poser un cadre pro et maximiser l'engagement.",
    objective: "Prix, valeur perçue, bonus concrets, garantie rassurante.",
    isCompleted: false,
    steps: [
      "Créer ton parcours d'onboarding automatisé et professionnel",
      "Définir ton \"contrat moral\" avec le client",
      "Laisser une super première impression (effet \"wow\")"
    ],
    generators: [
      {
        title: "Crée un parcours d'onboarding clair, fluide et motivant",
        placeholder: "Format : [1:1 / groupe / hybride]\nDurée : [nombre de semaines]\nObjectif final : [transformation promise]",
        instructions: "Ce générateur t'aide à créer un onboarding complet avec message de bienvenue, livret d'accueil, système de réservation et règles du jeu."
      },
      {
        title: "Rédige une charte d'engagement client (humain mais clair)",
        placeholder: "Je veux que mes clients comprennent que leur succès dépend aussi de leur implication.",
        instructions: "Ce générateur t'aide à créer une charte d'engagement qui définit tes engagements, les attentes vis-à-vis du client et les valeurs communes."
      },
      {
        title: "Imagine une séquence de bienvenue qui crée un effet \"wow\"",
        placeholder: "Mon objectif est que le client se dise \"wow, j'ai bien fait de m'inscrire\" dès les premières heures.",
        instructions: "Ce générateur t'aide à créer une séquence inspirante avec message impactant, bonus surprise et action concrète pour démarrer."
      }
    ]
  },
  day10: {
    title: "Jour 10 – Rédige ta page de vente persuasive",
    subtitle: "Créer des bonus pertinents, désirables et complémentaires.",
    objective: "Structure AIDA ou PAS, storytelling, preuves, appel à l'action puissant.",
    isCompleted: false,
    steps: [
      "Identifier les freins à l'achat et les transformer en bonus",
      "Ajouter de la valeur sans alourdir l'expérience",
      "Créer une stratégie de présentation \"effet jackpot\""
    ],
    generators: [
      {
        title: "Génère des idées de bonus pour lever les blocages à l'achat",
        placeholder: "Promesse principale : [résultat final]\nClient idéal : [description du client et de ses doutes]",
        instructions: "Ce générateur t'aide à identifier les principaux freins à l'achat et à créer un bonus pertinent pour chaque frein identifié."
      },
      {
        title: "Crée des bonus à forte valeur perçue mais légers à consommer",
        placeholder: "Je veux des idées de bonus qui donnent une sensation de générosité, sans surcharger mes clients.",
        instructions: "Ce générateur t'aide à créer 5 idées de bonus courts, utiles et actionnables, qui peuvent être livrés facilement (PDF, audio, etc.)."
      },
      {
        title: "Structure une présentation des bonus qui déclenche l'achat",
        placeholder: "Je veux présenter mes bonus de manière irrésistible sur ma page de vente ou en appel.",
        instructions: "Ce générateur t'aide à créer une présentation efficace de tes bonus avec nom accrocheur, description orientée résultat et valeur perçue."
      }
    ]
  },
  day11: {
    title: "Jour 11 – Crée ton tunnel de conversion simple & efficace",
    subtitle: "Mettre en place une stratégie de contenu simple et cohérente.",
    objective: "Formulaire Calendly, automatisations Stripe + emails, suivi.",
    isCompleted: false,
    steps: [
      "Structurer ta ligne éditoriale autour de ta promesse",
      "Générer 14 idées de contenu à publier",
      "Créer un calendrier éditorial actionnable"
    ],
    generators: [
      {
        title: "Crée une ligne éditoriale simple et alignée avec mon programme",
        placeholder: "Mon programme aide [client idéal] à [résultat concret] grâce à [ta méthode / ton approche].",
        instructions: "Ce générateur t'aide à créer une stratégie de contenu cohérente autour de piliers éducatifs, émotionnels et d'autorité."
      },
      {
        title: "Donne-moi 14 idées de contenus pour réseaux sociaux",
        placeholder: "En me basant sur cette promesse : \"[ta promesse de transformation]\"",
        instructions: "Ce générateur t'aide à créer 14 idées de posts avec accroches fortes, contenu de valeur et appels à l'action pertinents."
      },
      {
        title: "Organise un planning de publication simple et efficace",
        placeholder: "Je souhaite publier 3 à 4 fois par semaine, avec du contenu qui me prend max 30 minutes à produire.",
        instructions: "Ce générateur t'aide à organiser un calendrier éditorial équilibré avec recommandations de formats et astuces pour recycler le contenu."
      }
    ]
  },
  day12: {
    title: "Jour 12 – Génére du trafic organique avec du contenu stratégique",
    subtitle: "Déployer une stratégie d'acquisition rapide sans budget pub obligatoire.",
    objective: "Stratégie de contenu 15min/jour : hook, storytelling, call-to-action.",
    isCompleted: false,
    steps: [
      "Choisir ta méthode d'acquisition rapide adaptée à ton style",
      "Lancer une micro-campagne de prospection douce",
      "Proposer une offre \"fast action\" ou \"test VIP\""
    ],
    generators: [
      {
        title: "Propose-moi la meilleure stratégie d'acquisition pour mon profil",
        placeholder: "Mon audience est principalement sur : [Facebook, Instagram, LinkedIn, YouTube, etc.]\nJe suis plus à l'aise avec : [écrit, vidéo, audio, appel direct, etc.]",
        instructions: "Ce générateur t'aide à identifier 2 à 3 méthodes d'acquisition gratuites ou peu coûteuses adaptées à ton profil et faciles à mettre en place."
      },
      {
        title: "Crée une séquence de prospection DM naturelle et engageante",
        placeholder: "Je veux contacter des personnes qui pourraient bénéficier de mon programme de coaching sur [sujet], sans être intrusif.",
        instructions: "Ce générateur t'aide à créer une séquence de 3 messages DM pour établir une connexion, mettre en valeur ton approche et proposer un appel."
      },
      {
        title: "Crée une offre limitée pour générer des ventes rapidement",
        placeholder: "Je souhaite créer une \"mini offre\" ou \"test VIP\" pour mes premiers clients.",
        instructions: "Ce générateur t'aide à créer une offre en édition limitée avec un format simple, un tarif de lancement et un message de lancement impactant."
      }
    ]
  },
  day13: {
    title: "Jour 13 – Close tes premiers clients avec des appels découverte",
    subtitle: "Guider ton prospect vers l'achat grâce à un tunnel de vente fluide.",
    objective: "Script IA, réponses aux objections, relances douces.",
    isCompleted: false,
    steps: [
      "Créer ta mini page de vente magnétique",
      "Créer un tunnel de réservation simple et automatisé",
      "Ajouter un email de suivi pour maximiser la conversion"
    ],
    generators: [
      {
        title: "Rédige une page de vente claire et engageante pour mon programme",
        placeholder: "Nom : [Nom de ton programme]\nPromesse : [Transformation que le client va vivre]\nCible : [Public visé]\nContenu : [Ce que comprend le programme, modules, bonus, durée]\nPrix : [Indique le prix ou les options]",
        instructions: "Ce générateur t'aide à rédiger une page de vente structurée avec accroche, présentation du problème et de l'offre, et appel à l'action clair."
      },
      {
        title: "Crée le système de réservation autour de mon offre",
        placeholder: "Je souhaite créer un tunnel simple où un prospect peut lire ma page de vente, réserver un appel et recevoir une confirmation.",
        instructions: "Ce générateur t'aide à créer un tunnel de vente fluide avec les outils recommandés et un email de confirmation après réservation."
      },
      {
        title: "Crée un email de relance doux pour les prospects hésitants",
        placeholder: "Certaines personnes vont lire la page, mais ne pas réserver tout de suite.",
        instructions: "Ce générateur t'aide à rédiger un email de relance amical qui rappelle la valeur de ton accompagnement et répond à une objection courante."
      }
    ]
  },
  day14: {
    title: "Jour 14 – Lance ton business & planifie la suite (scaling & liberté)",
    subtitle: "Créer ton plan de lancement et structurer ta montée en puissance.",
    objective: "Roadmap 90 jours, nouvelles offres, système à automatiser, vision long terme.",
    isCompleted: false,
    steps: [
      "Préparer ton lancement (simple mais puissant)",
      "Structurer ton calendrier des 90 prochains jours",
      "Préparer un plan de fidélisation / upsell pour tes futurs clients"
    ],
    generators: [
      {
        title: "Aide-moi à créer un plan de lancement sur 5 à 7 jours",
        placeholder: "Mon programme s'appelle : [Nom]\nIl s'adresse à : [Audience cible]\nIl résout : [Problème ou frustration principale]",
        instructions: "Ce générateur t'aide à créer un plan de lancement progressif avec idées de contenus, timing et angle émotionnel pour chaque jour."
      },
      {
        title: "Aide-moi à planifier ma stratégie de croissance sur 90 jours",
        placeholder: "Mon objectif est de lancer et vendre mon programme, signer [x] clients ce trimestre, et consolider ma présence en ligne.",
        instructions: "Ce générateur t'aide à créer une roadmap sur 90 jours avec des priorités claires pour chaque mois (acquisition, fidélisation, optimisation)."
      },
      {
        title: "Propose-moi une stratégie d'upsell ou fidélisation pour mes clients",
        placeholder: "Une fois mes premiers clients servis, je veux leur proposer une continuité et créer une communauté engagée.",
        instructions: "Ce générateur t'aide à créer 2 à 3 idées de fidélisation simples et un plan pour les tester après ton lancement."
      }
    ]
  }
};
