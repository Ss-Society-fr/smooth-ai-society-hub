
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MentionsLegales = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        Mentions Légales
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-4">1. Présentation du site</h2>
        <p>
          Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site les informations suivantes :
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Informations légales :</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Dénomination sociale : S&S Society</li>
          <li>Représentant légal : Stephan CANGY</li>
          <li>Adresse : 58 avenue d'Evian, 74200 Thonon-les-bains</li>
          <li>SIRET : 92840534900012</li>
          <li>Adresse électronique : contact@stephancangy.com</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Hébergeur :</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>LWS</li>
          <li>2 rue jules ferry 88190 Golbey</li>
          <li>RCS Epinal 851 993 683</li>
          <li>APE 6311Z</li>
          <li>SIRET 85199368300016</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Conditions générales d'utilisation du site et des services proposés</h2>
        <p>
          L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, sans préavis. Les utilisateurs du site sont donc invités à les consulter de manière régulière.
        </p>
        <p>
          Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée, qui sera alors annoncée aux utilisateurs dans la mesure du possible.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Description des services fournis</h2>
        <p>
          Le site a pour objet de fournir une information concernant l'ensemble des activités de la société S&S Society, spécialisée dans le coaching et la formation en ligne avec l'aide de l'intelligence artificielle.
        </p>
        <p>
          S&S Society s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Propriété intellectuelle et contrefaçons</h2>
        <p>
          S&S Society est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels, etc.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de S&S Society.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Droit applicable et juridiction compétente</h2>
        <p>
          Tout litige en relation avec l'utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents en France.
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

export default MentionsLegales;
