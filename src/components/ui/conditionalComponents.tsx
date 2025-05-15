"use client";

import React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { App } from "@/components/ui/Particles-background";
import { usePathname } from "next/navigation";

export function ConditionalComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route
  const isSignInPage = pathname === "/sign-in"; // Check if it's the /sign-in page
  const isSignUpPage = pathname === "/sign-up"; 
  return (
    <>
      {!isSignInPage && !isSignUpPage && (
        <>
          <App />
          <div className="lg:w-[254px] fixed left-0 top-0 lg-block h-full">
            <Sidebar />
          </div>
        </>
      )}
      {/* Dynamically adjust padding based on the presence of the sidebar */}
      <div className={!isSignInPage && !isSignUpPage ? "lg:pl-[254px] w-full" : "w-full"}>
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </div>
    </>
  );
}
