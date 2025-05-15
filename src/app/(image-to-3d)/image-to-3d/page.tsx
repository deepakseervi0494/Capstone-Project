"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Camera, Upload, FileText } from "lucide-react";
import { useRouter } from 'next/navigation';

interface FileWithPreview extends File {
  preview: string;
}

const ColorfulText: React.FC<{ children: string }> = ({ children }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-gradient-x">
      {children}
    </span>
  );
};

const FaceModelUploader: React.FC = () => {
  const router = useRouter();
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [processingStatus, setProcessingStatus] = useState<
    "idle" | "uploading" | "processing" | "complete"
  >("idle");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0] as FileWithPreview;
    uploadedFile.preview = URL.createObjectURL(uploadedFile);
    setFile(uploadedFile);
    setProcessingStatus("uploading");

    // Simulated upload and processing
    setTimeout(() => {
      setProcessingStatus("processing");
      setTimeout(() => {
        setProcessingStatus("complete");
      }, 2000);
    }, 1000);
  }, []);

  const handleModelGeneration = () => {
    // In a real app, you'd upload the file to a backend and get the model URL
    const simulatedModelUrl = '/Output.obj';
    router.push(`/model-viewer?url=${encodeURIComponent(simulatedModelUrl)}`);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const renderDropzoneContent = () => {
    if (file) {
      return (
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src={file.preview}
            alt="Uploaded"
            className="max-w-full max-h-64 object-contain rounded-lg shadow-md"
          />
          {processingStatus === "uploading" && (
            <div className="text-blue-500 flex items-center space-x-2">
              <Upload className="animate-pulse" />
              <ColorfulText>Uploading Image...</ColorfulText>
            </div>
          )}
          {processingStatus === "processing" && (
            <div className="text-green-500 flex items-center space-x-2">
              <FileText className="animate-pulse" />
              <ColorfulText>Processing 3D Model...</ColorfulText>
            </div>
          )}
          {processingStatus === "complete" && (
            <>
              <div className="text-green-600 flex items-center space-x-2 mb-4">
                <Camera />
                <ColorfulText>3D Model Generated Successfully!</ColorfulText>
              </div>
              <button 
                onClick={handleModelGeneration}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all"
              >
                View 3D Model
              </button>
            </>
          )}
        </div>
      );
    }

    return (
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-10 text-center cursor-pointer 
          transition-all duration-300
          ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
          }
        `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-4">
          <Camera className="w-16 h-16 text-gray-500" />
          <p className="text-gray-600">
            {isDragActive
              ? "Drop your image here"
              : "Drag & drop an image, or click to select file"}
          </p>
          <p className="text-xs text-gray-400">
            Supported formats: JPG, PNG (Max 5MB)
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full  flex items-center justify-center ">
        <div className="w-full mx-20  bg-white rounded-2xl shadow-2xl p-8 flex items-center justify-center flex-col space-y-5">
          <h1 className="text-5xl  font-bold bg-gradient-to-r from-black to-slate-400 text-transparent bg-clip-text ">
            <span className="bg-purple-300 text-black rounded-md">
              Image to 3D
            </span>{" "}
            <span className="text-blue bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text">
              <ColorfulText>Face Model</ColorfulText>
            </span>
          </h1>

          {renderDropzoneContent()}
        </div>
      </div>
    </>
  );
};

export default FaceModelUploader;