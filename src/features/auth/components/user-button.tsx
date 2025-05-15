"use client";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useLogout } from "../api/use-logout";
import { useCurrent } from "../api/use-current";
import { Loader, LogOut } from "lucide-react";

export const UserButton = () => {
  const { data: user, isLoading } = useCurrent();
  const {mutate:logout}=useLogout();
  if (isLoading) {
    return (
      <div className="size-10 rounded-full flex items-center justify-center">
        <Loader className="size-5 animate-spin text-muted-foreground"></Loader>
      </div>
    );
  }
  if (!user) {
    return null;
  }
  const { name, email } = user;
  const avatarFallback = name ? name.charAt(0) : email.charAt(0) ?? "U";
//   const {mutate:logout}=useLogout();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="m-0 outline-none">
        <Avatar className="size-12 hover:opacity-70 transition border border-neutral-300 rounded-full flex items-center justify-center cursor-context-menu">
          <AvatarFallback className="bg-neutral-500 font-medium text-white text-xl flex items-center justify-center rounded-full w-full h-full hover:scale-110 hover:text-black hover:cursor-pointer">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="left" sideOffset={10} className="border-y border-neutral-500 rounded-md w-60 text-white">
        <div className="flex flex-col items-center justify-center gap-2 px-2 pt-2">
        <Avatar className="size-[46px] border border-neutral-300 rounded-full flex items-center justify-center cursor-context-menu">
          <AvatarFallback className="bg-neutral-500 font-medium text-white flex items-center justify-center rounded-full w-full h-full text-xl">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        </div>
        <div className="flex flex-col items-center justify-center text-black">
            <p>
            {name.toLocaleLowerCase() || 'user'}
            </p>
            <p className="text-xs font-medium text-neutral-500">
                {email}
            </p>
        </div>
        <Separator className="mx-3"></Separator>
        <DropdownMenuItem  onClick={()=>logout()} className="flex items-center outline-none justify-center text-red-600 p-1 cursor-pointer hover:text-red-300 rounded-md z-10">
            <LogOut ></LogOut>Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
