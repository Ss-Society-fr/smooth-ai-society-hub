
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Un business model complet, clé en main",
    "Des templates pour créer ton offre en 24h",
    "Un accès à vie à la communauté de coachs",
    "Des mises à jour régulières du contenu",
    "Une garantie satisfait ou remboursé"
  ];
  
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à créer ton business de coaching rentable ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoins des centaines d'entrepreneurs qui ont déjà transformé leur passion en business rentable grâce à notre méthode.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-brand-pink flex-shrink-0 mr-3" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-10 lg:mt-0 bg-white p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Créer ton business de coaching avec l'IA</h3>
              
              <div className="flex items-baseline justify-center mt-4 mb-6">
                <span className="text-5xl font-bold tracking-tight text-gray-900">297€</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">TTC</span>
              </div>
              
              <p className="text-gray-600 mb-8">Paiement unique, accès à vie à la formation et aux mises à jour</p>
              
              <Button 
                size="lg" 
                className="w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold px-8 py-6 text-lg"
              >
                Je m'inscris maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="mt-4 text-sm text-gray-600">
                Satisfait ou remboursé pendant 14 jours, sans condition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
