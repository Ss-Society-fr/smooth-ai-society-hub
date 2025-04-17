
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Notre manifeste</span>
              <span className="block mt-2 bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
                Smart & Smooth Society
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Une communauté d'entrepreneurs qui veulent créer leur liberté financière
              sans compromis, sans bullshit, simplement avec les bons outils et la bonne méthode.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Image placeholder */}
            <div className="lg:order-2 mt-10 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-gradient-to-br from-brand-blue-light to-brand-pink-light h-96 flex items-center justify-center text-white font-bold text-2xl">
                Notre vision
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900">
                Pourquoi on a créé Smart & Smooth Society
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  On a constaté que trop d'entrepreneurs sont perdus dans la masse d'informations
                  contradictoires disponibles en ligne. Ils se retrouvent submergés, frustrés, et
                  finalement abandonnent leurs projets.
                </p>
                <p>
                  Notre mission est simple : transformer des idées en business rentables, sans
                  détours inutiles, avec une approche pragmatique où l'IA est un levier d'accélération
                  et non une fin en soi.
                </p>
                <p>
                  Smart & Smooth Society est né de cette volonté de débarrasser l'entrepreneuriat
                  en ligne du jargon compliqué et des fausses promesses, pour le rendre accessible à tous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Nos valeurs
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Ces principes guident tout ce que nous faisons et enseignons.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Simplicité efficace</h3>
              <p className="mt-2 text-gray-600">
                Nous éliminons tout ce qui est superflu pour nous concentrer sur les actions 
                qui produisent des résultats concrets et mesurables.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Accessibilité</h3>
              <p className="mt-2 text-gray-600">
                La richesse des connaissances doit être disponible pour tous, pas seulement pour ceux 
                qui peuvent investir des milliers d'euros ou des années d'apprentissage.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Innovation pragmatique</h3>
              <p className="mt-2 text-gray-600">
                Nous exploitons l'IA et les nouvelles technologies non pas pour la gloire, mais pour 
                gagner du temps, améliorer la qualité et se concentrer sur ce qui compte vraiment.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Autonomie</h3>
              <p className="mt-2 text-gray-600">
                Notre objectif est de vous rendre complètement autonome, avec les compétences et outils 
                nécessaires pour ne plus dépendre de quiconque pour réussir.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                5
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Communauté</h3>
              <p className="mt-2 text-gray-600">
                Nous croyons au pouvoir de l'entraide entre entrepreneurs partageant les mêmes valeurs 
                et ambitions, sans compétition toxique ni ego mal placé.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4">
                6
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Résultats concrets</h3>
              <p className="mt-2 text-gray-600">
                Les belles théories ne paient pas les factures. Nous nous engageons à fournir des outils 
                et méthodes qui produisent des résultats tangibles et mesurables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Founder Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden bg-gradient-to-br from-brand-blue to-brand-pink h-72 w-72 mx-auto flex items-center justify-center text-white font-bold text-2xl">
                Photo fondateur
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold text-gray-900">
                À propos du fondateur
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Smart & Smooth Society a été fondé par [Nom du Fondateur], entrepreneur passionné 
                qui a accompagné plus de 200 entrepreneurs dans la création de leur business en ligne.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Après avoir constaté que la majorité des formations disponibles étaient soit trop 
                théoriques, soit inaccessibles pour les débutants, il a décidé de créer un programme 
                qui répond vraiment aux besoins des entrepreneurs modernes.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                "J'ai créé Smart & Smooth Society avec une conviction : tout le monde mérite d'avoir 
                les outils pour créer sa liberté financière, sans devoir passer par des années d'études 
                ou dépenser une fortune en formations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Rejoins notre mission
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Découvre comment nos programmes peuvent t'aider à créer un business en ligne rentable et aligné avec tes valeurs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/offres/coaching-ia">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 flex items-center gap-2">
                Découvrir le coaching IA
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/offres/formation-ia">
              <Button size="lg" className="bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold px-6 flex items-center gap-2">
                Explorer la formation premium
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
