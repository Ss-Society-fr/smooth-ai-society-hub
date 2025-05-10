
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  progress: number;
}

const DashboardHeader = ({ title, subtitle, progress }: DashboardHeaderProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 mt-2">{subtitle}</p>
          
          <div className="mt-4">
            <div className="flex items-center mb-1">
              <span className="text-sm font-medium text-gray-700">
                Progression globale
              </span>
              <span className="ml-auto text-sm font-medium text-brand-blue">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
        
        <div className="mt-6 md:mt-0">
          <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white">
            Commencer maintenant
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
