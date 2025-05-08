
import React from "react";
import ProgramCard from "./ProgramCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProgramSection = () => {
  const programWeek1 = [
    {
      day: "Jour 1",
      title: "Clarifie ta mission & ce que tu apportes d'unique",
      description: "Identifier ta vraie valeur, tes forces, ton \"why\", ton style de coaching, ta vision."
    },
    {
      day: "Jour 2",
      title: "Trouve ta niche à fort potentiel",
      description: "Croisement entre ta zone d'expertise, une vraie demande, et une différenciation claire."
    },
    {
      day: "Jour 3",
      title: "Crée ton client idéal (avatar + douleur centrale)",
      description: "Focus sur frustrations, désirs profonds, objections et mots exacts de ton audience."
    },
    {
      day: "Jour 4",
      title: "Formule ta promesse de transformation & ton pitch",
      description: "\"J'aide X à passer de A à B grâce à Y\", avec un pitch en 10 secondes et en storytelling."
    },
    {
      day: "Jour 5",
      title: "Choisis le bon format de coaching pour toi",
      description: "1:1, groupe, hybride, durée, fréquence, niveau d'engagement."
    },
    {
      day: "Jour 6",
      title: "Crée ton programme de coaching (étapes + livrables)",
      description: "Structuration du parcours client, étapes de transformation, livrables par étape."
    },
    {
      day: "Jour 7",
      title: "Rédige les scripts de tes sessions de coaching",
      description: "Plan précis pour chaque session : objectifs, déroulé, exercices, résultats attendus."
    }
  ];

  const programWeek2 = [
    {
      day: "Jour 8",
      title: "Conçois tes supports & outils de coaching",
      description: "Workbooks, PDF, templates, tableaux de suivi, formats interactifs."
    },
    {
      day: "Jour 9",
      title: "Crée ton offre irrésistible (packaging + bonus + garantie)",
      description: "Prix, valeur perçue, bonus concrets, garantie rassurante."
    },
    {
      day: "Jour 10",
      title: "Rédige ta page de vente persuasive",
      description: "Structure AIDA ou PAS, storytelling, preuves, appel à l'action puissant."
    },
    {
      day: "Jour 11",
      title: "Crée ton tunnel de conversion simple & efficace",
      description: "Formulaire Calendly, automatisations Stripe + emails, suivi."
    },
    {
      day: "Jour 12",
      title: "Génére du trafic organique avec du contenu stratégique",
      description: "Stratégie de contenu 15min/jour : hook, storytelling, call-to-action."
    },
    {
      day: "Jour 13",
      title: "Close tes premiers clients avec des appels découverte",
      description: "Script IA, réponses aux objections, relances douces."
    },
    {
      day: "Jour 14",
      title: "Lance ton business & planifie la suite (scaling & liberté)",
      description: "Roadmap 90 jours, nouvelles offres, système à automatiser, vision long terme."
    }
  ];

  return (
    <section id="programme" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Programme de la formation : 14 jours pour lancer ton business
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto my-4"></div>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Objectif : Créer, vendre et automatiser un business de coaching en ligne structuré, aligné et rentable, en seulement 14 jours grâce à l'IA.
          </p>
        </div>
        
        {/* Week 1 */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-brand-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">1</div>
            <h3 className="ml-4 text-2xl font-bold text-gray-900">SEMAINE 1 : FONDATIONS SOLIDES & DESIGN DE TON OFFRE</h3>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programWeek1.map((item, index) => (
              <ProgramCard 
                key={index}
                day={item.day}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        
        {/* Week 2 */}
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-brand-pink rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">2</div>
            <h3 className="ml-4 text-2xl font-bold text-gray-900">SEMAINE 2 : CRÉATION, LANCEMENT & AUTOMATISATION</h3>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programWeek2.map((item, index) => (
              <ProgramCard 
                key={index}
                day={item.day}
                title={item.title}
                description={item.description}
                isWeekTwo
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold px-8 py-6 text-lg"
          >
            Je m'inscris maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            Satisfait ou remboursé pendant 14 jours, sans condition
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
