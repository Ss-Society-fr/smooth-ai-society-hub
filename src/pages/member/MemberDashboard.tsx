
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import MemberLayout from "./MemberLayout";
import DashboardHeader from "./components/DashboardHeader";
import DailyModule from "./components/DailyModule";
import { dailyData, Week } from "./data/programData";

const MemberDashboard = () => {
  const [activeWeek, setActiveWeek] = useState<Week>("week1");
  const [progress, setProgress] = useState(0);
  
  // Calculate progress based on completed items (demo functionality)
  React.useEffect(() => {
    // In a real app, this would be fetched from a database
    const completedDays = Object.values(dailyData).filter(day => day.isCompleted).length;
    const totalDays = Object.values(dailyData).length;
    const calculatedProgress = (completedDays / totalDays) * 100;
    setProgress(calculatedProgress);
  }, []);

  return (
    <MemberLayout>
      <div className="p-4 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Retour au site</span>
          </Link>
          <div className="flex items-center">
            <BookOpen className="h-5 w-5 text-brand-blue mr-2" />
            <span className="text-sm font-medium">Progression totale: {Math.round(progress)}%</span>
          </div>
        </div>

        <DashboardHeader 
          title="Coaching IA - Espace Membre" 
          subtitle="Créer ton business de coaching avec l'IA en 14 jours" 
          progress={progress} 
        />
        
        <Tabs defaultValue="week1" className="mt-8">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger 
              value="week1" 
              onClick={() => setActiveWeek("week1")}
              className="data-[state=active]:bg-brand-blue data-[state=active]:text-white"
            >
              Semaine 1: Fondations & Design
            </TabsTrigger>
            <TabsTrigger 
              value="week2" 
              onClick={() => setActiveWeek("week2")}
              className="data-[state=active]:bg-brand-pink data-[state=active]:text-white"
            >
              Semaine 2: Création & Lancement
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="week1" className="space-y-8">
            {Object.entries(dailyData)
              .filter(([key]) => key.includes("day") && parseInt(key.replace("day", "")) <= 7)
              .map(([key, day]) => (
                <DailyModule 
                  key={key} 
                  day={day} 
                  dayNumber={key.replace("day", "")} 
                  weekType="week1" 
                />
              ))}
          </TabsContent>
          
          <TabsContent value="week2" className="space-y-8">
            {Object.entries(dailyData)
              .filter(([key]) => key.includes("day") && parseInt(key.replace("day", "")) > 7)
              .map(([key, day]) => (
                <DailyModule 
                  key={key} 
                  day={day} 
                  dayNumber={key.replace("day", "")} 
                  weekType="week2" 
                />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </MemberLayout>
  );
};

export default MemberDashboard;
