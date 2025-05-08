
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const PricingCard = () => {
  const benefits = [
    "Un business model complet, clé en main, pour ton activité de coaching",
    "Des templates pour créer ton offre de coaching en moins de 24h",
    "Un système pour attirer tes premiers clients sans expertise marketing",
    "Des scripts d'emails pour convertir tes prospects automatiquement",
    "Des prompts IA spécialement conçus pour les coachs débutants",
    "Un accès à notre communauté d'entrepreneurs ambitieux"
  ];

  return (
    <div className="mt-12 lg:mt-0 lg:col-span-5 lg:col-start-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-900">Créer ton business de coaching avec l'IA</h3>
          
          <div className="mt-4 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight text-gray-900">297€</span>
            <span className="ml-1 text-xl font-semibold text-gray-500">TTC</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">Paiement unique, accès à vie</p>

          <Button 
            size="lg"
            className="mt-8 w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3"
          >
            S'inscrire maintenant
          </Button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Satisfait ou remboursé pendant 14 jours
          </p>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900">Ce que tu obtiens :</h4>
            <ul className="mt-4 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue flex-shrink-0" />
                  <span className="ml-3 text-sm text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/offres/formation-ia" className="text-sm font-medium text-brand-blue hover:text-brand-blue-dark">
          Découvrir notre offre premium →
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
