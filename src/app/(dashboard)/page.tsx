import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { HomePage } from "@/features/dashboard/component/home-page";
import { motion } from "framer-motion";
export default async function Home() {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <>
      <div className=" main flex flex-col min-w-full items-center justify-center">
        <div className=" flex items-center justify-center h-full">
          <div className="text-center rounded-lg bg-opacity-70">
            {/* <h1 className="text-5xl font-bold ">From Textual Threads</h1>
            <h1 className="text-2xl font-bold">to</h1>
            <h1 className="text-5xl font-bold">Dimensional Faces</h1> */}

            <svg
              viewBox="0 0 2000 150"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-text ml-20"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="10%"
                    style={{ stopColor: "#9333cb", stopOpacity: 1 }}
                  />{" "}
                  {/* Purple */}
                  <stop
                    offset="100%"
                    style={{ stopColor: "deeppink", stopOpacity: 1 }}
                  />{" "}
                  {/* Pink */}
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="animated-text text-8xl font-[760] bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-pulse"
                width="500px"
              >
                From Textual Threads to Dimensional Faces
                
              </text>
              
            </svg>

            <p className="text-lg">
              Explore the best features we offer with an amazing visual
              experience.
            </p>
            <HomePage></HomePage>
          </div>
        </div>
      </div>
    </>
  );
}
