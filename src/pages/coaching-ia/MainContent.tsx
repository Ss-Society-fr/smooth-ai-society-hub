
import React from "react";
import FeaturesSection from "./FeaturesSection";
import PricingCard from "./PricingCard";

const MainContent = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <FeaturesSection />
          <PricingCard />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
