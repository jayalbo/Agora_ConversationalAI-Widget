"use client";

import { useState } from 'react';

interface ProductImagesProps {
  images: string[];
}

export function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <img
        src={images[selectedImage]}
        alt="Product"
        className="w-full h-96 object-contain mb-4 rounded-lg"
      />
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Product view ${idx + 1}`}
            onClick={() => setSelectedImage(idx)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border-2 transition ${
              selectedImage === idx 
                ? 'border-blue-600 ring-2 ring-blue-200' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

