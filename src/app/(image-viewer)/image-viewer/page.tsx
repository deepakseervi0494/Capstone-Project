"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ImageViewerPage({ 
  searchParams 
}: { 
  searchParams: { 
    imagePath?: string, 
    fallbackImage?: string,
    isDummy?: string 
  } 
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isDummyImage, setIsDummyImage] = useState(false);

  // Default fallback image (you can replace this with your preferred image path)
  const defaultFallbackImage = "/boy.png";

  useEffect(() => {
    // Determine which image to show
    if (searchParams.imagePath) {
      setImageUrl(searchParams.imagePath);
      setIsDummyImage(searchParams.isDummy === 'true');
    } else if (searchParams.fallbackImage) {
      // Use the provided fallback image
      setImageUrl(searchParams.fallbackImage);
      setIsDummyImage(true);
    } else if (defaultFallbackImage) {
      // Use the default fallback image
      setImageUrl(defaultFallbackImage);
      setIsDummyImage(true);
    }
  }, [searchParams]);

  const handleDownload = async () => {
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = isDummyImage 
        ? 'generated-image.png' 
        : `generated-image-${new Date().toISOString()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download image');
    }
  };

  if (!imageUrl) {
    return <div>No image found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
      <div className="relative max-w-full max-h-[70vh] w-auto h-auto">
        <Image 
          src={imageUrl} 
          alt="Generated Image" 
          layout="responsive"
          width={500}
          height={500}
          className="rounded-lg shadow-lg object-contain"
        />
      </div>

      {isDummyImage && (
        <div className="text-center text-yellow-600">
          <p>Image generation failed. Showing fallback image.</p>
        </div>
      )}

      <Button 
        onClick={handleDownload} 
        className="flex items-center gap-2"
      >
        <Download className="w-5 h-5" />
        Download Image
      </Button>
    </div>
  );
}