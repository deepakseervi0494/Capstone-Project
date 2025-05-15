"use client";

import { SettingsIcon, Box, Mail, Users, Image } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";

const routes = [
  { label: "Home", href: "/", Icon: GoHome, activeIcon: GoHomeFill },
  {
    label: "Text to Image",
    href: "/text-to-image",
    Icon: Image,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Image to 3D",
    href: "/image-to-3d",
    Icon: Box,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    Icon: Mail,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "About",
    href: "/about",
    Icon: Users,
    activeIcon: GoCheckCircleFill,
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const isActive = pathname === item.href;
        const Icon = isActive ? item.activeIcon : item.Icon;

        return (
          <Link href={item.href} key={item.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-600 ml-5 mr-2",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-700" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navigation;