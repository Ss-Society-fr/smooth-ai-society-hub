
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Questions fréquentes</h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto my-4"></div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <dl className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <dt className="text-lg font-semibold text-gray-900">
                Faut-il être un expert pour commencer ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Non, notre programme est spécialement conçu pour les débutants. Vous apprendrez comment identifier votre niche, structurer votre offre et acquérir l'expertise nécessaire à l'aide de l'IA.
              </dd>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <dt className="text-lg font-semibold text-gray-900">
                Combien de temps faut-il pour lancer son activité ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Avec notre méthode, vous pouvez avoir une offre prête et les bases de votre business en place en 2 à 4 semaines, selon votre rythme et votre disponibilité.
              </dd>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <dt className="text-lg font-semibold text-gray-900">
                Quels outils d'IA sont recommandés ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Nous recommandons principalement ChatGPT et Claude, mais la formation est applicable avec n'importe quel outil d'IA générative moderne. Tous les prompts fournis sont adaptables.
              </dd>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <dt className="text-lg font-semibold text-gray-900">
                Comment accéder à la formation ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Après votre achat, vous recevrez immédiatement un email avec vos identifiants de connexion à l'espace membre où vous pourrez accéder à l'ensemble du contenu et des ressources.
              </dd>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <dt className="text-lg font-semibold text-gray-900">
                Y a-t-il un support en cas de questions ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Oui, vous bénéficiez d'un accès à notre communauté privée où vous pouvez poser vos questions et obtenir de l'aide auprès de notre équipe et des autres membres.
              </dd>
            </div>
          </dl>
          
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-6 text-lg"
            >
              Je m'inscris à la formation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
