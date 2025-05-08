
import React from "react";
import HeroSection from "./coaching-ia/HeroSection";
import MainContent from "./coaching-ia/MainContent";
import ProgramSection from "./coaching-ia/ProgramSection";
import FAQSection from "./coaching-ia/FAQSection";
import CTASection from "./coaching-ia/CTASection";
import TestimonialsSection from "./coaching-ia/TestimonialsSection";
import BenefitsSection from "./coaching-ia/BenefitsSection";

const CoachingIA = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BenefitsSection />
      <MainContent />
      <ProgramSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default CoachingIA;
