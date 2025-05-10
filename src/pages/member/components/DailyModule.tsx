
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Video } from "lucide-react";
import { DayData } from "../data/programData";
import AIGenerator from "./AIGenerator";
import { cn } from "@/lib/utils";

interface DailyModuleProps {
  day: DayData;
  dayNumber: string;
  weekType: "week1" | "week2";
}

const DailyModule = ({ day, dayNumber, weekType }: DailyModuleProps) => {
  return (
    <Card className={cn(
      "shadow-sm border-l-4",
      weekType === "week1" ? "border-l-brand-blue" : "border-l-brand-pink"
    )}>
      <CardHeader className={cn(
        "pb-2",
        day.isCompleted ? "bg-green-50" : "bg-white"
      )}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={cn(
              "h-8 w-8 rounded-full flex items-center justify-center mr-3 text-white font-medium",
              weekType === "week1" ? "bg-brand-blue" : "bg-brand-pink" 
            )}>
              {dayNumber}
            </div>
            <CardTitle className="text-lg">{day.title}</CardTitle>
          </div>
          {day.isCompleted && (
            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Complété
            </div>
          )}
        </div>
        <p className="text-gray-600 text-sm mt-1">{day.subtitle}</p>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mt-1">
              <CheckCircle2 className={cn(
                "h-5 w-5 mr-2",
                day.isCompleted ? "text-green-500" : "text-gray-300"
              )} />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Objectif du jour</h4>
              <p className="text-gray-600 text-sm">{day.objective}</p>
            </div>
          </div>

          {day.steps && (
            <div className="border-t border-gray-100 pt-4 mt-4">
              <h4 className="font-medium text-gray-900 mb-3">Tes étapes aujourd'hui :</h4>
              <ul className="space-y-2">
                {day.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-gray-300" />
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {day.generators && day.generators.length > 0 && (
            <Accordion type="single" collapsible className="border-t border-gray-100 pt-4">
              {day.generators.map((generator, index) => (
                <AccordionItem key={index} value={`generator-${index}`} className="border-b-0">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <div className="flex items-center">
                      <div className={cn(
                        "h-6 w-6 rounded-full flex items-center justify-center mr-2 text-white text-xs",
                        weekType === "week1" ? "bg-brand-blue" : "bg-brand-pink"
                      )}>
                        {index + 1}
                      </div>
                      <span className="font-medium">{generator.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    {generator.videoUrl && (
                      <div className="mb-4 flex items-center text-sm text-gray-600">
                        <Video className="h-4 w-4 mr-2 text-brand-blue" />
                        <span>Regarde la vidéo explicative avant de générer</span>
                      </div>
                    )}
                    <AIGenerator 
                      title={generator.title}
                      placeholder={generator.placeholder}
                      instructions={generator.instructions}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyModule;
