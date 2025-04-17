
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Download, Users, FileText, PlayCircle, CheckCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Bienvenue dans votre espace membre</h1>
        <p className="text-gray-600 mt-2">
          Voici votre tableau de bord personnel pour accéder à votre formation et vos ressources.
        </p>
      </div>

      {/* Progress section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Votre parcours</CardTitle>
          <CardDescription>Continuez votre formation là où vous l'avez laissée</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium">Progression globale</div>
              <div className="text-sm font-medium">35%</div>
            </div>
            <Progress value={35} className="h-2" />
          </div>
          
          <Link to="/membre/formation">
            <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white flex items-center gap-2">
              <PlayCircle className="h-4 w-4" />
              Continuer la formation
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand-blue" />
              Modules de formation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Accédez à tous les modules de votre formation.</p>
            <Link to="/membre/formation">
              <Button variant="outline" className="w-full">Voir les modules</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-brand-blue" />
              Ressources et outils
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Téléchargez tous les modèles, scripts et outils.</p>
            <Link to="/membre/ressources">
              <Button variant="outline" className="w-full">Accéder aux ressources</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-blue" />
              Communauté
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Rejoignez la communauté d'entrepreneurs.</p>
            <Link to="/membre/communaute">
              <Button variant="outline" className="w-full">Rejoindre la discussion</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Latest resources */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ressources populaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          {
            title: "Guide de démarrage rapide",
            type: "PDF",
            icon: FileText,
            description: "Les premières étapes pour commencer votre business de coaching."
          },
          {
            title: "50 prompts IA pour coachs",
            type: "Notion",
            icon: FileText,
            description: "Collection de prompts optimisés pour créer du contenu de coaching."
          },
          {
            title: "Modèle de pitch client",
            type: "Google Docs",
            icon: FileText,
            description: "Template pour présenter votre offre de coaching de manière impactante."
          },
          {
            title: "Checklist de lancement",
            type: "Excel",
            icon: CheckCircle,
            description: "Étapes à suivre pour lancer votre offre de coaching avec succès."
          }
        ].map((resource, index) => (
          <Card key={index} className="flex">
            <div className="bg-gray-50 flex items-center justify-center p-4">
              <resource.icon className="h-8 w-8 text-brand-blue" />
            </div>
            <div className="p-4 flex-1">
              <h3 className="font-semibold text-gray-900">{resource.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{resource.type}</p>
              <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
              <Button variant="ghost" size="sm" className="mt-2 text-brand-blue hover:text-brand-blue-dark hover:bg-brand-blue/10">
                Télécharger
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Need help */}
      <Card className="bg-gray-50 border-none">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Besoin d'aide ?</h3>
              <p className="text-gray-600 mt-1">
                Nous sommes là pour vous aider à réussir. N'hésitez pas à nous contacter.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline">Consulter la FAQ</Button>
              <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white">Contacter le support</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
