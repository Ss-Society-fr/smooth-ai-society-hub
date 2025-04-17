
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ = () => {
  type FAQItem = {
    question: string;
    answer: string;
    category: string;
  };

  const faqItems: FAQItem[] = [
    {
      category: "Général",
      question: "Qu'est-ce que Smart & Smooth Society ?",
      answer: "Smart & Smooth Society est un club business en ligne pour entrepreneurs ambitieux qui souhaitent créer leur business de coaching ou de formation en ligne grâce à l'IA. Notre objectif est de vous fournir des méthodes concrètes et des outils pratiques pour développer votre activité sans complications inutiles."
    },
    {
      category: "Général",
      question: "À qui s'adressent vos formations ?",
      answer: "Nos formations s'adressent principalement aux débutants motivés qui veulent devenir indépendants financièrement grâce à un business en ligne simple, sans passer des années ni investir des milliers d'euros. Que vous soyez en reconversion, en recherche d'un revenu complémentaire ou que vous souhaitiez créer votre entreprise à temps plein, nos programmes sont adaptés à votre situation."
    },
    {
      category: "Général",
      question: "Ai-je besoin d'être un expert pour suivre vos formations ?",
      answer: "Non, vous n'avez pas besoin d'être un expert. Notre approche est conçue pour vous aider à identifier votre zone d'expertise, à la structurer et à la valoriser, même si vous débutez. Nous vous accompagnons dans la création de votre positionnement et dans l'utilisation de l'IA pour renforcer votre expertise."
    },
    {
      category: "Formation",
      question: "Quelle est la différence entre vos deux offres ?",
      answer: "Notre offre de base 'Créer ton business de coaching avec l'IA' vous guide dans la création et l'automatisation d'un business de coaching en ligne. Notre offre premium 'Créer ta formation en ligne avec l'IA' inclut tout le contenu de l'offre de base, plus une formation complète sur la création de formations en ligne, des templates supplémentaires et un audit personnalisé de votre projet."
    },
    {
      category: "Formation",
      question: "Comment accéder aux contenus après l'achat ?",
      answer: "Après votre achat, vous recevrez immédiatement un email avec vos identifiants pour accéder à notre espace membre. Vous y trouverez l'ensemble des modules de formation, des ressources, des templates et des outils, ainsi qu'un accès à notre communauté privée."
    },
    {
      category: "Formation",
      question: "Les formations sont-elles accessibles à vie ?",
      answer: "Oui, une fois que vous avez acheté une de nos formations, vous y avez accès à vie. Vous pouvez revisiter les modules, télécharger les ressources et consulter les mises à jour que nous apportons régulièrement au contenu sans frais supplémentaires."
    },
    {
      category: "Technique",
      question: "Quels outils d'IA sont recommandés dans vos formations ?",
      answer: "Nous recommandons principalement l'utilisation de ChatGPT et Claude, mais les principes et méthodes que nous enseignons sont applicables avec la plupart des outils d'IA générative modernes. Tous nos prompts et templates sont facilement adaptables selon vos préférences d'outils."
    },
    {
      category: "Technique",
      question: "Ai-je besoin de compétences techniques pour suivre vos formations ?",
      answer: "Non, aucune compétence technique particulière n'est requise. Nos formations sont conçues pour être accessibles aux débutants. Nous vous guidons pas à pas dans l'utilisation des outils et plateformes nécessaires, avec des tutoriels détaillés pour chaque étape."
    },
    {
      category: "Technique",
      question: "Quels logiciels ou plateformes sont nécessaires ?",
      answer: "Pour démarrer, vous aurez principalement besoin d'un compte gratuit ou payant sur une plateforme d'IA comme ChatGPT ou Claude. Nous recommandons également l'utilisation de plateformes comme Notion, Google Docs ou Microsoft Word pour organiser votre contenu. Pour la partie vente, nous suggérons des solutions simples comme Systeme.io, mais toutes les options sont détaillées dans nos formations."
    },
    {
      category: "Paiement",
      question: "Comment fonctionne la garantie satisfait ou remboursé ?",
      answer: "Nous offrons une garantie satisfait ou remboursé de 14 jours à compter de la date d'achat. Si vous n'êtes pas satisfait de nos formations pour quelque raison que ce soit, il vous suffit de nous contacter par email et nous vous rembourserons intégralement, sans poser de questions."
    },
    {
      category: "Paiement",
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Nous acceptons les paiements par carte bancaire (Visa, Mastercard, American Express) et par PayPal. Tous les paiements sont sécurisés et vous recevrez une facture par email après votre achat."
    },
    {
      category: "Support",
      question: "Comment puis-je obtenir de l'aide si j'ai des questions ?",
      answer: "Vous pouvez obtenir de l'aide de plusieurs façons : en posant vos questions dans notre communauté privée où notre équipe et d'autres membres peuvent vous répondre, en nous contactant directement par email à support@ss-society.fr, ou en utilisant le formulaire de contact sur notre site. Nous nous efforçons de répondre à toutes les questions sous 48 heures ouvrées."
    },
    {
      category: "Support",
      question: "Y a-t-il un coaching personnalisé inclus ?",
      answer: "Notre offre premium 'Créer ta formation en ligne avec l'IA' inclut un audit personnalisé de votre projet. Pour un coaching plus approfondi, nous proposons des sessions individuelles en option, dont les détails sont disponibles dans l'espace membre après votre inscription à l'une de nos formations."
    }
  ];

  const categories = Array.from(new Set(faqItems.map(item => item.category)));
  
  const [activeCategory, setActiveCategory] = useState("Général");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const filteredItems = faqItems.filter(item => 
    activeCategory === "Tous" || item.category === activeCategory
  );

  return (
    <div>
      {/* Header */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Questions fréquentes
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Retrouvez les réponses aux questions les plus courantes sur Smart & Smooth Society et nos formations.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory("Tous")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium",
                activeCategory === "Tous"
                  ? "bg-brand-blue text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              Tous
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium",
                  activeCategory === category
                    ? "bg-brand-blue text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          <div className="space-y-6">
            {filteredItems.map((item, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex justify-between items-center w-full p-6 text-left"
                  >
                    <span className="text-lg font-medium text-gray-900">{item.question}</span>
                    <span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-brand-blue" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="mt-4 text-gray-600">
              Contactez-nous directement et notre équipe vous répondra dans les meilleurs délais.
            </p>
            <div className="mt-6">
              <Link to="/contact">
                <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
