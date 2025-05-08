
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie L.",
      role: "Coach en développement personnel",
      quote: "Grâce à cette formation, j'ai créé mon offre de coaching en moins de 2 semaines et j'ai signé mes 3 premiers clients dans le mois qui a suivi. L'approche est claire et les outils IA sont un vrai gain de temps !",
      avatar: "M"
    },
    {
      name: "Thomas D.",
      role: "Coach entrepreneurial",
      quote: "J'étais sceptique sur l'utilisation de l'IA pour mon business de coaching, mais cette formation m'a montré comment l'utiliser intelligemment. J'ai désormais une offre de coaching qui me ressemble et qui convertit.",
      avatar: "T"
    },
    {
      name: "Sophie M.",
      role: "Coach de vie",
      quote: "Avant la formation, je passais des heures à essayer de structurer mon offre sans résultat concret. Maintenant, j'ai un programme clair et des clients satisfaits qui me recommandent. Un vrai changement !",
      avatar: "S"
    }
  ];
  
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Ils ont lancé leur business de coaching avec succès
          </h2>
          <div className="w-24 h-1 bg-brand-pink mx-auto my-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4 bg-brand-blue text-white">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    <AvatarImage src="" alt={testimonial.name} />
                  </Avatar>
                  <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
