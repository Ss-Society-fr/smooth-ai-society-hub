
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre email et votre mot de passe",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", formData);
      toast({
        title: "Connexion réussie",
        description: "Bienvenue dans votre espace membre"
      });
      setIsSubmitting(false);
      // Redirect to member dashboard
      navigate("/membre/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="block">
            <span className="font-bold text-2xl bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
              Smart & Smooth Society
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Connectez-vous à votre compte
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Accédez à votre espace membre pour suivre votre formation
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="flex justify-between items-center text-sm font-medium text-gray-700 mb-1">
              <span>Mot de passe</span>
              <Link to="/mot-de-passe-oublie" className="font-medium text-brand-blue hover:text-brand-blue-dark text-sm">
                Mot de passe oublié ?
              </Link>
            </label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, rememberMe: checked === true }))
              }
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
              Se souvenir de moi
            </label>
          </div>
          
          <div>
            <Button
              type="submit"
              className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Connexion en cours..." : "Se connecter"}
            </Button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Pas encore membre ?{" "}
            <Link to="/offres/coaching-ia" className="font-medium text-brand-blue hover:text-brand-blue-dark">
              Découvrez nos offres
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
