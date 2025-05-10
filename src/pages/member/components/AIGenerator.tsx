
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AIGeneratorProps {
  title: string;
  placeholder: string;
  instructions?: string;
}

const AIGenerator = ({ title, placeholder, instructions }: AIGeneratorProps) => {
  const [userInput, setUserInput] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!userInput) {
      toast({
        title: "Champ requis",
        description: "Merci de remplir le champ avant de générer du contenu.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call to AI service
    setTimeout(() => {
      // This is placeholder text - in a real app you would connect to ChatGPT or another AI service
      setGeneratedText(
        `Voici une réponse générée pour "${title}" basée sur votre saisie:\n\n` +
        `Analyse de votre entrée: "${userInput.substring(0, 50)}..."\n\n` +
        `1. Point clé identifié: Le contenu que vous avez fourni montre une forte orientation vers [sujet principal].\n` +
        `2. Recommandation principale: Considérez de développer davantage [aspect spécifique] de votre approche.\n` +
        `3. Prochaines étapes: Établissez un plan d'action en 3 points pour implémenter ces idées dans votre coaching.\n\n` +
        `Cette réponse est générée à titre d'exemple. Dans la version finale, l'IA analysera spécifiquement votre texte et fournira des conseils personnalisés pour développer votre business de coaching.`
      );
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
    toast({
      title: "Copié !",
      description: "Le texte a été copié dans le presse-papier."
    });
  };

  return (
    <div className="space-y-4">
      {instructions && (
        <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-700 border border-gray-200">
          {instructions}
        </div>
      )}
      
      <div>
        <Textarea
          placeholder={placeholder}
          className="min-h-[120px] text-sm"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
      
      <div className="flex justify-end">
        <Button 
          onClick={handleGenerate} 
          className="bg-brand-blue hover:bg-brand-blue-dark text-white"
          disabled={isLoading}
        >
          {isLoading ? "Génération en cours..." : "Générer"}
        </Button>
      </div>
      
      {generatedText && (
        <div className="mt-4 border border-gray-200 rounded-md bg-white p-4 relative">
          <div className="absolute top-2 right-2">
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={copyToClipboard} 
              className="h-8 w-8 p-0"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-sm whitespace-pre-line pt-2">
            {generatedText}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIGenerator;
