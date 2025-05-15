// components/HomePage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const HomePage = () => {
  return (
    <div className="p-8 space-y-6 ">
      <Card className="max-w-full mx-auto shadow-sm bg-transparent text-2xl">
        <CardHeader>
          <CardTitle className="text-black"><span className= "text-green-500">Welcome</span> to the AI Image Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700">
            Generate stunning <span className=" bg-black text-white px-2 rounded-lg">images from text</span> prompts or Explore our <span className="bg-black text-white px-2 rounded-lg">3D model Generation</span> tools.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/text-to-image">
              <Button variant="link" className="border-2 hover:border-slate-950">Text to Image</Button>
             

            </Link>
            <Link href="/image-to-3d">
              <Button variant="secondary" className="bg-stone-950 text-white hover:border-white hover:bg-gradient-to-r from-purple-600 to-pink-600  border-2">Image to 3D</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
