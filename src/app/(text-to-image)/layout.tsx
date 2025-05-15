import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";
import React from "react";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}
const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div className="mx-auto max-w-screen-2xl h-full">
    <Navbar></Navbar>
    <main className="h-full pt-10 px-6 flex flex-col items-center justify-end">
      {children}
    </main>
  </div>
  );
};
export default DashBoardLayout;
