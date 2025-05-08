
import React from "react";
import { CheckCircle2 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      name: "Module 1 : Créer ton offre de coaching",
      description: "Définir ton positionnement, ton offre et ta promesse client sans te disperser."
    },
    {
      name: "Module 2 : Structurer ton parcours client",
      description: "Construire un parcours efficace qui garantit des résultats à tes clients."
    },
    {
      name: "Module 3 : Automatiser avec l'IA",
      description: "Utiliser l'IA pour créer du contenu, analyser les besoins et suivre tes clients."
    },
    {
      name: "Module 4 : Attirer tes premiers clients",
      description: "Déployer une stratégie d'acquisition simple et efficace, sans technique complexe."
    },
    {
      name: "Module 5 : Développer et faire évoluer",
      description: "Scalabiliser ton business de coaching et augmenter ton impact et tes revenus."
    }
  ];

  return (
    <div className="lg:col-span-7">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ce que tu vas apprendre
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Cette formation complète t'accompagne pas à pas pour créer ton activité de coaching 
        en utilisant l'intelligence artificielle comme levier de productivité et de qualité.
      </p>

      <div className="space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue text-white">
              <span className="font-semibold">{index + 1}</span>
            </div>
            <div className="ml-16">
              <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Bonus inclus
        </h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-brand-blue" />
              </div>
              <div className="ml-3">
                <h4 className="text-base font-medium text-gray-900">Bibliothèque de prompts IA</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Plus de 50 prompts optimisés pour générer du contenu de coaching de qualité.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-brand-blue" />
              </div>
              <div className="ml-3">
                <h4 className="text-base font-medium text-gray-900">Templates de suivi client</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Des modèles Notion et Excel pour gérer efficacement ton activité et tes clients.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-brand-blue" />
              </div>
              <div className="ml-3">
                <h4 className="text-base font-medium text-gray-900">Accès à la communauté</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Rejoins notre groupe privé d'entrepreneurs et obtiens du feedback sur ton activité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
