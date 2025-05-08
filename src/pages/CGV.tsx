
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CGV = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        Conditions Générales de Vente
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
        
        <h2 className="text-2xl font-bold mb-4">1. Présentation</h2>
        <p>
          S&S Society (ci-après "le Vendeur"), représentée par Stephan CANGY, SIRET 92840534900012, dont le siège social est situé au 58 avenue d'Evian, 74200 Thonon-les-bains, commercialise des formations et du coaching en ligne (ci-après "les Services").
        </p>
        <p>
          Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les ventes de Services par le Vendeur à l'acheteur (ci-après "le Client"). Le Client déclare avoir pris connaissance et accepté les présentes CGV avant de passer commande.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Services et tarifs</h2>
        <p>
          Les Services et tarifs proposés par le Vendeur sont ceux qui figurent sur le site internet au moment de la commande. Les prix sont indiqués en euros TTC. Le Vendeur se réserve le droit de modifier ses prix à tout moment, étant entendu que les Services seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Commandes</h2>
        <p>
          Le Client confirme sa commande en cliquant sur le bouton "Acheter" ou équivalent. Cette action constitue une signature électronique qui a la même valeur qu'une signature manuscrite et vaut preuve de l'intégralité de la commande et de l'exigibilité des sommes dues en exécution de ladite commande.
        </p>
        <p>
          Le Vendeur se réserve le droit de refuser toute commande pour des motifs légitimes, notamment en cas d'indisponibilité des Services, de suspicion de fraude, etc.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Modalités de paiement</h2>
        <p>
          Les paiements sont effectués via la plateforme sécurisée Stripe. Les données bancaires du Client ne sont pas conservées par le Vendeur.
        </p>
        <p>
          Le paiement du prix s'effectue comptant au jour de la commande. La commande du Client ne sera considérée comme définitive qu'après réception du paiement intégral du prix par le Vendeur.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Livraison des Services</h2>
        <p>
          Après validation du paiement, le Client recevra un e-mail de confirmation contenant les informations nécessaires pour accéder aux Services commandés.
        </p>
        <p>
          Pour les formations en ligne, l'accès sera disponible immédiatement ou conformément aux dates spécifiées lors de l'achat.
        </p>
        <p>
          Pour le coaching, les sessions seront planifiées en accord avec le Client selon les disponibilités indiquées.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Droit de rétractation</h2>
        <p>
          Conformément aux dispositions légales en vigueur, le Client dispose d'un délai de quatorze (14) jours à compter de la date d'achat pour exercer son droit de rétractation sans avoir à motiver sa décision ni à supporter d'autres coûts.
        </p>
        <p>
          Pour les Services dont l'exécution commence avant la fin du délai de rétractation avec l'accord exprès du Client, ce dernier renonce expressément à son droit de rétractation conformément à l'article L221-28 du Code de la consommation.
        </p>
        <p>
          Pour exercer son droit de rétractation, le Client doit notifier sa décision par e-mail à contact@stephancangy.com ou par courrier à l'adresse du siège social.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Responsabilité et garantie</h2>
        <p>
          Le Vendeur s'engage à apporter tous les soins nécessaires à la fourniture d'un service de qualité. Cependant, il ne saurait être tenu pour responsable de l'inexécution du contrat conclu en cas de force majeure, de perturbation ou grève totale ou partielle notamment des services de télécommunications.
        </p>
        <p>
          Les résultats des formations et du coaching dépendent également de l'implication du Client. Le Vendeur ne garantit pas de résultats spécifiques.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">8. Propriété intellectuelle</h2>
        <p>
          Tous les éléments du site et des Services (textes, images, vidéos, etc.) sont la propriété exclusive du Vendeur et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
        </p>
        <p>
          L'achat d'une formation ou d'un programme de coaching ne confère au Client qu'un droit d'utilisation personnelle et non-exclusive des contenus. Toute reproduction, distribution ou modification est strictement interdite.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">9. Protection des données personnelles</h2>
        <p>
          Les données personnelles collectées lors de la commande sont nécessaires au traitement de celle-ci et sont traitées conformément à notre politique de confidentialité, disponible sur notre site.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">10. Réclamations et médiation</h2>
        <p>
          Toute réclamation doit être adressée par e-mail à contact@stephancangy.com ou par courrier à l'adresse du siège social.
        </p>
        <p>
          En cas de litige, le Client peut recourir gratuitement au service de médiation de la consommation. Le médiateur tentera en toute indépendance de rapprocher les parties en vue d'aboutir à une solution amiable.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">11. Droit applicable et juridiction compétente</h2>
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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

export default CGV;
