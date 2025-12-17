"use client";

import { useState } from 'react';

interface ProductImagesProps {
  images: string[];
}

export function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
      <div className="relative aspect-square mb-6 bg-gray-50 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="w-full h-full object-contain transition-opacity duration-300"
        />
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === idx 
                ? 'border-blue-600 ring-4 ring-blue-100 shadow-md scale-105' 
                : 'border-gray-200 hover:border-gray-400 hover:shadow-sm'
            }`}
          >
            <img
              src={img}
              alt={`Product view ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

