import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { App } from "@/components/ui/Particles-background";
import { Sidebar } from "@/components/ui/sidebar";
import React from "react";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}
const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div className="mx-auto h-full">
      <main className="h-full py-2 px-4 flex flex-col items-center justify-end">
        {children}
      </main>
    </div>
  );
};
export default DashBoardLayout;
