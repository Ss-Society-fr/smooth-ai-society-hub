
import React from "react";

const FAQSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Questions fréquentes</h2>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <dl className="space-y-8">
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Faut-il être un expert pour commencer ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Non, notre programme est spécialement conçu pour les débutants. Vous apprendrez comment identifier votre niche, structurer votre offre et acquérir l'expertise nécessaire à l'aide de l'IA.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Combien de temps faut-il pour lancer son activité ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Avec notre méthode, vous pouvez avoir une offre prête et les bases de votre business en place en 2 à 4 semaines, selon votre rythme et votre disponibilité.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Quels outils d'IA sont recommandés ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Nous recommandons principalement ChatGPT et Claude, mais la formation est applicable avec n'importe quel outil d'IA générative moderne. Tous les prompts fournis sont adaptables.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Comment accéder à la formation ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Après votre achat, vous recevrez immédiatement un email avec vos identifiants de connexion à l'espace membre où vous pourrez accéder à l'ensemble du contenu et des ressources.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Y a-t-il un support en cas de questions ?
              </dt>
              <dd className="mt-2 text-gray-600">
                Oui, vous bénéficiez d'un accès à notre communauté privée où vous pouvez poser vos questions et obtenir de l'aide auprès de notre équipe et des autres membres.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
