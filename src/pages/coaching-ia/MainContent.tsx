
import React from "react";
import FeaturesSection from "./FeaturesSection";
import PricingCard from "./PricingCard";

const MainContent = () => {
  return (
    <section id="main-content" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Une formation complète pour lancer ton activité de coaching
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto my-4"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Cette formation t'accompagne pas à pas pour créer, vendre et automatiser ton business de coaching en utilisant l'intelligence artificielle comme levier de productivité.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <FeaturesSection />
          <PricingCard />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
