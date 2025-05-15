'use client'
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ModelViewerProps {
  modelUrl: string;
}

const Model: React.FC<{ url: string }> = ({ url }) => {
  const obj = useLoader(OBJLoader, url);

  return <primitive object={obj} scale={1} />;
};

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl }) => {
  const downloadModel = () => {
    const link = document.createElement('a');
    link.href = modelUrl;
    link.download = '3d_face_model.obj';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          Your 3D Face Model
        </h1>
        
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <FileText className="w-24 h-24 text-gray-500" />
                <p className="ml-4 text-xl text-gray-600">Loading 3D Model...</p>
              </div>
            }>
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Model url={modelUrl} />
                <OrbitControls />
              </Canvas>
            </Suspense>
          </div>

          <Button 
            onClick={downloadModel} 
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
          >
            <Download className="mr-2" /> Download OBJ File
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;