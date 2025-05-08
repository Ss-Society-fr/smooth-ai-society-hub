
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToMainContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-100 overflow-hidden pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-brand-blue/10 text-brand-blue">
            Formation + Communauté + Outils
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            <span className="block">Créer ton business de coaching</span>
            <span className="block mt-2 bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
              avec l'IA
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Créer, vendre et automatiser ton business de coaching en ligne grâce à l'IA. 
            Un plan d'action concret en <span className="font-bold">14 jours</span>. Zéro blabla, 100% résultats.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-6 text-lg"
              onClick={scrollToMainContent}
            >
              Découvrir la formation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 font-semibold px-8 py-6 text-lg"
            >
              Voir le programme complet
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700">
              <span className="text-green-500 font-medium mr-2">✓</span>
              <span className="text-sm">Satisfait ou remboursé pendant 14 jours, sans condition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
