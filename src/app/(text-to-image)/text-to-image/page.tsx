"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PromptInput from "@/components/ui/prompt-input";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function TextToImagePage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Path to your fallback image
  const fallbackImagePath = "/boy.png";

  const handlePrompt = async (prompt: string) => {
    setIsLoading(true); 

    try {
      const response = await fetch(
        `https://9b9d-34-124-176-57.ngrok-free.app/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: prompt }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.output_path) {
          // Redirect to image viewer with the generated image path
          router.push(
            `/image-viewer?imagePath=${encodeURIComponent(data.output_path)}`
          );
        } else {
          // If no output path, redirect to image viewer with fallback image
          redirectToFallbackImage(prompt);
        }
      } else {
        // If response is not OK, redirect to image viewer with fallback image
        redirectToFallbackImage(prompt);
      }
    } catch (error) {
      console.error("Failed to generate image:", error);
      // In case of any error, redirect to image viewer with fallback image
      redirectToFallbackImage(prompt);
    } finally {
      setIsLoading(false);
    }
  };

  const redirectToFallbackImage = (prompt: string) => {
    router.push(
      `/image-viewer?fallbackImage=${encodeURIComponent(fallbackImagePath)}&isDummy=true`
    );
  };

  return (
    <div className="py-8 space-y-6 flex flex-col items-center justify-center w-full">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-black to-slate-400 text-transparent bg-clip-text">
        <span className="bg-purple-300 text-black rounded-md">
          Text to Image
        </span>{" "}
        <span className="text-blue bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text">
          Generation
        </span>
      </h1>

      <p className="text-sm">
        Generate high-quality images based on textual prompts...
      </p>

      <PromptInput onSubmit={handlePrompt}></PromptInput>

      {isLoading && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="bg-black text-white">Generating image...</p>
        </motion.div>
      )}

      <Button
        variant="default"
        className="bg-white border-2 border-stone-950 text-black hover:text-white"
        onClick={() => router.push('/')}
      >
        Back to Home
      </Button>
    </div>
  );
}