
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Zap, Brain, Target, BarChart3 } from "lucide-react";

const Index = () => {
  const features = [
    {
      name: "Parcours guidé",
      description: "Un onboarding rassurant pour débutants avec toutes les étapes nécessaires",
      icon: Target,
    },
    {
      name: "Prompts IA prêts à l'emploi",
      description: "Des instructions optimisées pour générer rapidement du contenu de qualité",
      icon: Brain,
    },
    {
      name: "Templates et scripts",
      description: "Des modèles prêts à l'emploi pour emails, pages de vente et contenus marketing",
      icon: Zap,
    },
    {
      name: "Communauté d'entrepreneurs",
      description: "Échangez avec d'autres entrepreneurs ambitieux et motivés",
      icon: BarChart3,
    },
  ];

  const benefits = [
    "Créer ton business sans compétence technique",
    "Générer du contenu à haute valeur ajoutée avec l'IA",
    "Mettre en place ton système de vente automatisé",
    "Attirer tes premiers clients qualifiés",
    "Développer une source de revenu en ligne",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl md:flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
                <span className="block">Club Business pour</span>
                <span className="block bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
                  Entrepreneurs Ambitieux
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto md:mx-0 text-lg sm:text-xl text-gray-600">
                Créer, vendre, automatiser ton business en ligne grâce à l'IA. 
                Un plan d'action concret. Zéro blabla, 100% résultats.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/offres/coaching-ia">
                  <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shadow-lg flex items-center gap-2">
                    Démarrer maintenant
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to="/a-propos">
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 font-medium">
                    Découvrir notre mission
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:flex-1 md:ml-10 mt-10 md:mt-0 relative">
              <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
                {/* Placeholder for hero image - would be replaced with an actual image */}
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-brand-blue-light to-brand-pink-light rounded-lg h-80 flex items-center justify-center text-white font-bold text-xl">
                  Deviens indépendant grâce à ton business en ligne
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Tout ce qu'il te faut pour réussir
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Notre club business te donne tous les outils et ressources pour créer 
              et développer ton activité en ligne.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Value Proposition */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">
                Tu n'as pas besoin d'un MBA, juste d'un bon plan et des bons outils
              </h2>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-blue flex-shrink-0" />
                    <p className="ml-3 text-lg text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/offres/coaching-ia">
                  <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark text-white">
                    Découvrir notre offre phare
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Sarah M.</h3>
                    <p className="text-sm text-gray-500">Coach nutrition, membre depuis 6 mois</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">
                  "J'étais complètement perdue avant de rejoindre le Smart & Smooth Society. 
                  Grâce à leur approche concrète et leurs outils, j'ai pu créer mon programme de coaching 
                  en nutrition et attirer mes premiers clients en moins de deux mois. 
                  Ce qui m'a le plus aidé, c'est leur système étape par étape et les prompts IA qui m'ont fait gagner un temps fou !"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Prêt à créer ta liberté financière ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Rejoins notre club business et accède à toutes nos ressources dès aujourd'hui.
          </p>
          <div className="mt-10">
            <Link to="/offres/coaching-ia">
              <Button size="lg" className="bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold px-8">
                Je me lance maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
