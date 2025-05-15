import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";
import React from "react";
import {Toaster} from '@/components/ui/sonner';

interface DashBoardLayoutProps {
  children: React.ReactNode;
}
const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (

    <div className="mx-auto">
      <Navbar></Navbar>
      <main className=" pt-20 flex flex-col items-center justify-end">
        {children}
      </main>
    </div>
  );
};
export default DashBoardLayout;
