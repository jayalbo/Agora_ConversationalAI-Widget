"use client";

import { useState, useEffect } from "react";
import { ProductImages } from "./ProductImages";
import { ProductReviews } from "./ProductReviews";
import { AIAssistant } from "./AIAssistant";

const fetchProduct = async () => {
  const res = await fetch("/api/product");
  return res.json();
};

export function ProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    fetchProduct()
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600">Loading product...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-600">Error loading product</div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </span>
              <span className="ml-2 text-gray-600 font-medium">
                {product.rating}
              </span>
              <span className="ml-1 text-gray-500">
                ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
            {product.inStock && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                In Stock
              </span>
            )}
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-2xl text-gray-400 line-through">
              ${product.originalPrice}
            </span>
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-medium">
              Save {product.discount}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <ProductImages images={product.images} />

          {/* Product Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            <h3 className="text-xl font-semibold mb-3">Specifications</h3>
            <dl className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex">
                  <dt className="font-medium text-gray-700 w-48">{key}:</dt>
                  <dd className="text-gray-600">{value as string}</dd>
                </div>
              ))}
            </dl>

            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <ProductReviews reviews={product.reviews} rating={product.rating} />

        {/* AI Assistant */}
        <AIAssistant product={product} />
      </div>
    </div>
  );
}
