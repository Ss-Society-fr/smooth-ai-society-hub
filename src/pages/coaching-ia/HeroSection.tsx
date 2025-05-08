
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white overflow-hidden pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            <span className="block">Créer ton business de coaching</span>
            <span className="block mt-2 bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
              avec l'IA
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Créer, vendre, automatiser ton business de coaching en ligne grâce à l'IA. 
            Un plan d'action concret. Zéro blabla, 100% résultats.
          </p>
          <div className="flex justify-center mt-8">
            <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-4 py-1 text-sm font-medium text-brand-blue">
              Formation + Communauté + Outils
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
