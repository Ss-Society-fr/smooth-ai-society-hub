
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PolitiqueConfidentialite = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        Politique de Confidentialité
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
        
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p>
          S&S Society (ci-après "nous", "notre", "nos") s'engage à protéger et à respecter votre vie privée. Cette politique de confidentialité définit la base sur laquelle toutes les données personnelles que nous collectons auprès de vous, ou que vous nous fournissez, seront traitées par nous.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Collecte d'informations</h2>
        <p>
          Nous pouvons collecter et traiter les données suivantes vous concernant :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Informations que vous nous fournissez en remplissant des formulaires sur notre site</li>
          <li>Informations que vous nous fournissez lorsque vous vous inscrivez à nos services</li>
          <li>Détails de vos visites sur notre site et les ressources auxquelles vous accédez</li>
          <li>Informations que vous nous fournissez lors de correspondances avec nous par téléphone, e-mail ou autre</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Utilisation des informations</h2>
        <p>
          Nous utilisons les informations que nous détenons à votre sujet aux fins suivantes :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Pour vous fournir nos services et traiter vos paiements</li>
          <li>Pour vous envoyer des informations relatives à nos services</li>
          <li>Pour vous envoyer des communications marketing (si vous y avez consenti)</li>
          <li>Pour améliorer nos produits et services</li>
          <li>Pour nous conformer à nos obligations légales et réglementaires</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Conservation des données</h2>
        <p>
          Nous ne conserverons vos données personnelles que pendant la durée nécessaire à l'accomplissement des finalités pour lesquelles elles ont été collectées, y compris pour satisfaire à toute exigence légale, comptable ou de déclaration.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Partage de vos informations personnelles</h2>
        <p>
          Nous pouvons partager vos informations personnelles avec :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Des prestataires de services qui nous aident à exploiter notre site web et nos services (par exemple, Stripe pour le traitement des paiements)</li>
          <li>Des autorités judiciaires ou administratives, si la loi nous y oblige</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Sécurité</h2>
        <p>
          Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles ne soient accidentellement perdues, utilisées, modifiées, divulguées ou consultées sans autorisation.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Droit d'accès à vos données personnelles</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement (droit à l'oubli)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit d'opposition</li>
        </ul>
        <p>
          Pour exercer ces droits, veuillez nous contacter à l'adresse : contact@stephancangy.com
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookies</h2>
        <p>
          Notre site utilise des cookies pour vous distinguer des autres utilisateurs de notre site. Cela nous aide à vous offrir une bonne expérience lorsque vous naviguez sur notre site et nous permet également d'améliorer notre site.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">9. Modification de notre politique de confidentialité</h2>
        <p>
          Nous pouvons modifier cette politique de confidentialité de temps à autre. Toute modification que nous pourrons apporter à notre politique de confidentialité à l'avenir sera publiée sur cette page.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité ou nos pratiques en matière de protection de la vie privée, veuillez nous contacter à l'adresse : contact@stephancangy.com
        </p>
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/">
          <Button className="bg-brand-blue hover:bg-brand-blue-dark">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
