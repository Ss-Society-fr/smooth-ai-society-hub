
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const CoachingIA = () => {
  const benefits = [
    "Un business model complet, clé en main, pour ton activité de coaching",
    "Des templates pour créer ton offre de coaching en moins de 24h",
    "Un système pour attirer tes premiers clients sans expertise marketing",
    "Des scripts d'emails pour convertir tes prospects automatiquement",
    "Des prompts IA spécialement conçus pour les coachs débutants",
    "Un accès à notre communauté d'entrepreneurs ambitieux"
  ];

  const features = [
    {
      name: "Module 1 : Créer ton offre de coaching",
      description: "Définir ton positionnement, ton offre et ta promesse client sans te disperser."
    },
    {
      name: "Module 2 : Structurer ton parcours client",
      description: "Construire un parcours efficace qui garantit des résultats à tes clients."
    },
    {
      name: "Module 3 : Automatiser avec l'IA",
      description: "Utiliser l'IA pour créer du contenu, analyser les besoins et suivre tes clients."
    },
    {
      name: "Module 4 : Attirer tes premiers clients",
      description: "Déployer une stratégie d'acquisition simple et efficace, sans technique complexe."
    },
    {
      name: "Module 5 : Développer et faire évoluer",
      description: "Scalabiliser ton business de coaching et augmenter ton impact et tes revenus."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
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

      {/* Main Content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left side - Description */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-gray-900">
                Ce que tu vas apprendre
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Cette formation complète t'accompagne pas à pas pour créer ton activité de coaching 
                en utilisant l'intelligence artificielle comme levier de productivité et de qualité.
              </p>

              <div className="mt-12 space-y-10">
                {features.map((feature, index) => (
                  <div key={index} className="relative">
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue text-white">
                      <span className="font-semibold">{index + 1}</span>
                    </div>
                    <div className="ml-16">
                      <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                      <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900">
                  Bonus inclus
                </h3>
                <div className="mt-6 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Bibliothèque de prompts IA</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Plus de 50 prompts optimisés pour générer du contenu de coaching de qualité.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Templates de suivi client</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Des modèles Notion et Excel pour gérer efficacement ton activité et tes clients.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Accès à la communauté</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Rejoins notre groupe privé d'entrepreneurs et obtiens du feedback sur ton activité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Pricing Card */}
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
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

      {/* CTA Section */}
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
    </div>
  );
};

export default CoachingIA;
