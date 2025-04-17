
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="block">
              <span className="font-bold text-xl bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
                Smart & Smooth Society
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Club Business pour Entrepreneurs Ambitieux. Créez votre business de coaching ou de formation en ligne grâce à l'IA.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Nos offres</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link to="/offres/coaching-ia" className="text-sm text-gray-600 hover:text-brand-blue">
                  Coaching avec l'IA
                </Link>
              </li>
              <li>
                <Link to="/offres/formation-ia" className="text-sm text-gray-600 hover:text-brand-blue">
                  Formation en ligne avec l'IA
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Ressources</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-brand-blue">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-brand-blue">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sm text-gray-600 hover:text-brand-blue">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Légal</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-sm text-gray-600 hover:text-brand-blue">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-sm text-gray-600 hover:text-brand-blue">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-sm text-gray-600 hover:text-brand-blue">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Smart & Smooth Society. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
