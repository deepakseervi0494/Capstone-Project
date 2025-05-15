'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from 'next/link'
interface AuthLayout {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayout) => {
  const pathname = usePathname();
  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-screen-2xl px-5">
        <nav className="flex justify-between items-center">
          <Image src="/12-removebg-preview.png" alt="Logo" width={80} height={56} className="relative translate-x-10"></Image>
          <div className="flex items-center gap-2">
            <Button variant={"secondary"} className="bg-black text-white hover:bg-white hover:text-black"><Link href={pathname==='/sign-in'?'sign-up':'sign-in'}>{pathname ==='/sign-in'?'Sign Up':'Log-In'}</Link></Button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center">{children}</div>
      </div>
    </main>
  );
};
export default AuthLayout;
