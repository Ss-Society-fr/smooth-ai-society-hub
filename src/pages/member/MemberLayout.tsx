
import React, { ReactNode } from "react";
import MemberSidebar from "./components/MemberSidebar";

interface MemberLayoutProps {
  children: ReactNode;
}

const MemberLayout = ({ children }: MemberLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <MemberSidebar />
      <div className="flex-1 overflow-auto">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MemberLayout;
