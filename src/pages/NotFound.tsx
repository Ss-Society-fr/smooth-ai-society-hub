
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white py-12">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <div className="mt-4 text-xl font-medium text-gray-600">Page introuvable</div>
        <p className="mt-6 text-base text-gray-500 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-10">
          <Link to="/">
            <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white flex items-center gap-2">
              <ArrowLeft size={16} />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
