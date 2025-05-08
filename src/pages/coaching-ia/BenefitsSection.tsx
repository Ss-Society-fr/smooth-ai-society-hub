
import React from "react";
import { CheckCircle2 } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Méthode éprouvée",
      description: "Une méthodologie simple et éprouvée pour créer une offre de coaching rentable en 14 jours"
    },
    {
      title: "Outils IA optimisés",
      description: "Des prompts IA spécialisés pour t'aider à créer ton contenu et tes stratégies plus rapidement"
    },
    {
      title: "Support communautaire",
      description: "Une communauté active de coachs pour t'entourer et recevoir du feedback constructif"
    },
    {
      title: "Templates clés en main",
      description: "Des modèles prêts à l'emploi pour ton offre, ta page de vente, tes emails et tes scripts"
    }
  ];
  
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-brand-blue/10 p-3 rounded-full mb-4">
                <CheckCircle2 className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
