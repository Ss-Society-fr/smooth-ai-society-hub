
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">
          Prêt à créer ton business de coaching ?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
          Commence dès aujourd'hui et rejoins des centaines d'entrepreneurs qui ont déjà transformé leur passion en business rentable.
        </p>
        <div className="mt-10">
          <Button size="lg" className="bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold px-8 py-6 text-lg">
            Je me lance maintenant
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Satisfait ou remboursé pendant 14 jours, sans condition
        </p>
      </div>
    </section>
  );
};

export default CTASection;
