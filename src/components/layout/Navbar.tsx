
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Offres", href: "#", 
      children: [
        { name: "Coaching avec IA", href: "/offres/coaching-ia" },
        { name: "Formation en ligne avec IA", href: "/offres/formation-ia" },
      ]
    },
    { name: "À propos", href: "/a-propos" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="font-bold text-2xl bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
              S&S Society
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => 
            !item.children ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium leading-6 text-gray-900 hover:text-brand-blue transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <div key={item.name} className="relative group">
                <button className="text-sm font-medium leading-6 text-gray-900 hover:text-brand-blue transition-colors flex items-center gap-1">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <Link to="/connexion">
            <Button variant="outline" className="text-sm font-medium">
              Se connecter
            </Button>
          </Link>
          <Link to="/offres/coaching-ia">
            <Button className="text-sm font-medium bg-brand-blue hover:bg-brand-blue-dark">
              S'inscrire
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="fixed inset-0 flex">
              <div className="relative flex w-full max-w-full flex-1 flex-col bg-white">
                <div className="flex items-center justify-between px-6 pb-2 pt-4">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="font-bold text-2xl bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
                      S&S Society
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Fermer le menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root px-6">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => 
                        !item.children ? (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <div key={item.name} className="space-y-2">
                            <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900">
                              {item.name}
                            </div>
                            <div className="pl-4 space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-800 hover:bg-gray-50"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <div className="py-6 space-y-3">
                      <Link
                        to="/connexion"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Se connecter
                      </Link>
                      <Link 
                        to="/offres/coaching-ia" 
                        className="-mx-3 block rounded-lg bg-brand-blue px-3 py-2.5 text-center text-base font-medium text-white hover:bg-brand-blue-dark"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        S'inscrire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
