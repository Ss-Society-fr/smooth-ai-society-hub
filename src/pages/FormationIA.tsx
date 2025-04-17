
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, X } from "lucide-react";

const FormationIA = () => {
  const premiumBenefits = [
    "Formation complète sur la création de formations en ligne avec l'IA",
    "Accès à notre programme de coaching sur le business de coaching",
    "Plus de 100 templates et prompts IA spécifiques aux formations en ligne",
    "Accès prioritaire à notre communauté d'entrepreneurs",
    "Sessions de questions/réponses mensuelles en direct",
    "Audit personnalisé de votre première formation en ligne"
  ];

  const comparisonFeatures = [
    {
      name: "Accès à la formation de base",
      coaching: true,
      premium: true,
    },
    {
      name: "Communauté d'entrepreneurs",
      coaching: true,
      premium: true,
    },
    {
      name: "Prompts IA pour le coaching",
      coaching: true,
      premium: true,
    },
    {
      name: "Formation sur les formations en ligne",
      coaching: false,
      premium: true,
    },
    {
      name: "Templates pour formations en ligne",
      coaching: false,
      premium: true,
    },
    {
      name: "Sessions de Q&R en direct",
      coaching: false,
      premium: true,
    },
    {
      name: "Audit personnalisé",
      coaching: false,
      premium: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white overflow-hidden pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand-pink/10 px-4 py-1 text-sm font-medium text-brand-pink mb-4">
              Notre offre premium
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              <span className="block">Créer ta formation en ligne</span>
              <span className="block mt-2 bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
                avec l'IA
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Créer, vendre, automatiser ta formation en ligne grâce à l'IA. 
              Un plan d'action concret. Zéro blabla, 100% résultats.
            </p>
            <div className="flex justify-center mt-8">
              <span className="inline-flex items-center rounded-full bg-brand-pink/10 px-4 py-1 text-sm font-medium text-brand-pink">
                Formation complète + Coaching + Audit personnalisé
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Offer */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Notre offre tout-en-un pour les entrepreneurs ambitieux
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Cette offre premium combine notre formation sur le coaching et notre expertise sur la création de formations en ligne,
              pour vous permettre de développer un business complet et évolutif.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="mt-12 max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-brand-pink">
              <div className="bg-brand-pink text-white py-2 text-center">
                <p className="font-medium">Offre la plus populaire</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">Créer ta formation en ligne avec l'IA</h3>
                
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">497€</span>
                  <span className="ml-1 text-xl font-semibold text-gray-500">TTC</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">Paiement unique, accès à vie</p>

                <Button 
                  size="lg"
                  className="mt-8 w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold py-3"
                >
                  S'inscrire maintenant
                </Button>

                <p className="mt-4 text-sm text-center text-gray-600">
                  Satisfait ou remboursé pendant 14 jours
                </p>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900">Ce que tu obtiens :</h4>
                  <ul className="mt-4 space-y-3">
                    {premiumBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-pink flex-shrink-0" />
                        <span className="ml-3 text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Comparez nos offres
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Choisissez l'offre qui correspond le mieux à vos ambitions et votre projet.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <div className="min-w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Fonctionnalités
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                      Business de Coaching
                      <div className="text-brand-blue mt-1">297€</div>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                      Formation en ligne Premium
                      <div className="text-brand-pink mt-1">497€</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                        {feature.name}
                      </td>
                      <td className="px-3 py-4 text-center">
                        {feature.coaching ? (
                          <CheckCircle2 className="h-5 w-5 text-brand-blue mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-3 py-4 text-center">
                        {feature.premium ? (
                          <CheckCircle2 className="h-5 w-5 text-brand-pink mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/offres/coaching-ia">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                Voir l'offre coaching
              </Button>
            </Link>
            <Button className="bg-brand-pink hover:bg-brand-pink-dark text-white">
              Choisir l'offre premium
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Ce que disent nos clients
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Découvrez les témoignages d'entrepreneurs qui ont déjà suivi notre formation premium.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Grâce à cette formation, j'ai pu créer ma première formation en ligne qui a généré 10 000€ en 3 mois. Les prompts IA et les templates m'ont fait gagner des semaines de travail."
              </p>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">Thomas P.</h3>
                  <p className="text-sm text-gray-500">Coach en développement personnel</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">
                "La valeur de cette formation est incroyable. L'audit personnalisé m'a permis d'améliorer significativement mon offre et ma conversion a doublé après avoir appliqué les conseils reçus."
              </p>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">Marie L.</h3>
                  <p className="text-sm text-gray-500">Coach en nutrition et bien-être</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Je partais de zéro et j'avais peur de me lancer. Avec cette formation, j'ai pu structurer mon expertise et la transformer en formation en ligne qui me rapporte maintenant un revenu passif mensuel."
              </p>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">Julie D.</h3>
                  <p className="text-sm text-gray-500">Coach business pour créateurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Prêt à passer au niveau supérieur ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Rejoins maintenant notre programme premium et transforme ton expertise en une formation en ligne lucrative.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold px-8 py-6 text-lg">
              Je choisis l'offre premium
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

export default FormationIA;
