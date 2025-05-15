import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/ui/navigation";
export const Sidebar = () => {
  return (
    <aside className="min-h-screen w-full bg-neutral-300">
      <Link href="/">
        <div className="flex items-center  justify-center relative">
          <Image
            src="/12-removebg-preview.png"
            alt="Logo"
            width={150}
            height={10}
            className="p-0 m-0 flex items-center justify-center border-black border-2 rounded-full"
          ></Image>
        </div>
      </Link>
      <Separator className="my-4 mx-2"></Separator>
      <div className="w-full  text-xl">
        <Navigation></Navigation>
      </div>
    </aside>
  );
};
