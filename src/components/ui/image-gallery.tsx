import React from 'react';

const exampleImages = [
  '../../../Public/logo.svg',
  '../../../Public/logo.svg', 
  '../../../Public/logo.svg',
  '../../../Public/logo.svg',
  '../../../Public/logo.svg',
];

const ImageGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full mx-auto">
      {exampleImages.map((src, index) => (
        <img key={index} src={src} alt={`Example ${index + 1}`} className="rounded-lg object-cover w-full h-48" />
      ))}
    </div>
  );
};

export default ImageGallery;
