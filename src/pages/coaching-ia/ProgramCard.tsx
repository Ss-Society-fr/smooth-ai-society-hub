
import React from "react";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProgramDayProps {
  day: string;
  title: string;
  description: string;
  isWeekTwo?: boolean;
}

const ProgramCard = ({ day, title, description, isWeekTwo = false }: ProgramDayProps) => {
  return (
    <Card className={`border-t-4 ${isWeekTwo ? "border-brand-pink" : "border-brand-blue"}`}>
      <CardContent className="pt-6">
        <div className="flex items-center mb-3">
          <Calendar className={`h-5 w-5 ${isWeekTwo ? "text-brand-pink" : "text-brand-blue"} mr-2`} />
          <span className={`font-semibold ${isWeekTwo ? "text-brand-pink" : "text-brand-blue"}`}>{day}</span>
        </div>
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
