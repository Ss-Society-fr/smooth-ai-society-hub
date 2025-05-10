
import React from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen, Calendar, CheckCircle2, MessageSquare } from "lucide-react";

const MemberSidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <Link to="/membre/dashboard" className="block">
            <span className="font-bold text-xl bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
              S&S Society
            </span>
          </Link>
        </div>
        
        <div className="px-3 py-4 flex flex-col flex-1">
          <nav className="space-y-1">
            <Link to="/membre/dashboard" className="flex items-center px-3 py-2 text-sm rounded-md bg-brand-blue/10 text-brand-blue font-medium">
              <Home className="mr-3 h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/membre/dashboard" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <BookOpen className="mr-3 h-5 w-5" />
              <span>Programme</span>
            </Link>
            <Link to="/membre/dashboard" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <Calendar className="mr-3 h-5 w-5" />
              <span>Planning</span>
            </Link>
            <Link to="/membre/dashboard" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <CheckCircle2 className="mr-3 h-5 w-5" />
              <span>Checklist</span>
            </Link>
            <Link to="/membre/dashboard" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <MessageSquare className="mr-3 h-5 w-5" />
              <span>Support</span>
            </Link>
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-brand-blue rounded-full flex items-center justify-center text-white font-medium">
              U
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Utilisateur</p>
              <Link to="/" className="text-xs text-gray-500 hover:text-brand-blue">
                Déconnexion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberSidebar;
