import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/ui/query-provider";
import "./globals.css";
import { ConditionalComponents } from "@/components/ui/conditionalComponents";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Text - 3D",
  icons: {
    icon: '/favicon-32x32.png',
  },
  description:
    "Generate 2D and 3D faces using Diffusers. From textual threads to dimensional faces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        <ConditionalComponents><QueryProvider>{children}</QueryProvider></ConditionalComponents>
      </body>
    </html>
  );
}
