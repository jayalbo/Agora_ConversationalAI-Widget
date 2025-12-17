"use client";

import { useState, useEffect } from "react";
import { ProductImages } from "./ProductImages";
import { ProductReviews } from "./ProductReviews";
import { AIAssistant } from "./AIAssistant";
import { AgoraBranding } from "./AgoraBranding";

const fetchProduct = async (productId: string) => {
  const res = await fetch(`/api/product?productId=${productId}`);
  return res.json();
};

const fetchAllProducts = async () => {
  // In production, this would be a separate API endpoint
  // For simplicity, we'll fetch each product we know exists
  const productIds = ['1', '2', '3'];
  const products = await Promise.all(
    productIds.map(id => fetchProduct(id))
  );
  return products.map(p => ({ id: p.id, name: p.name, price: p.price, image: p.images[0] }));
};

export function ProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>('1');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  // Load all products for selector
  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
      });
  }, []);

  // Load selected product
  useEffect(() => {
    setIsLoading(true);
    fetchProduct(selectedProductId)
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [selectedProductId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-xl font-medium text-gray-700">Loading product...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <div className="text-xl font-medium text-red-600">Error loading product</div>
          <p className="text-gray-500 mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Agora Branding Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <AgoraBranding variant="header" />
            <div className="text-xs text-gray-500">
              E-commerce Demo
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Selector */}
        {products.length > 0 && (
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <label htmlFor="product-select" className="block text-sm font-semibold text-gray-900 mb-1">
                  Choose a product to explore
                </label>
                <p className="text-xs text-gray-500">Switch between products to see how Katya helps with each one</p>
              </div>
              <select
                id="product-select"
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="px-5 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white font-medium text-gray-900 transition-all hover:border-gray-300"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} - ${p.price}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Product Header */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {product.rating}
              </span>
              <span className="text-sm text-gray-500">
                ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
            {product.inStock && (
              <span className="px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold border border-emerald-200">
                ✓ In Stock
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="text-5xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-2xl text-gray-400 line-through">
              ${product.originalPrice}
            </span>
            <span className="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-semibold border border-red-200">
              Save {product.discount}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <ProductImages images={product.images} />

          {/* Product Details */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Details</h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h3>
              <dl className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-gray-100 last:border-0">
                    <dt className="font-semibold text-gray-900 sm:w-48 flex-shrink-0">{key}:</dt>
                    <dd className="text-gray-600 flex-1">{value as string}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <ProductReviews reviews={product.reviews} rating={product.rating} />

        {/* AI Assistant */}
        <AIAssistant product={product} />

        {/* Agora Branding Footer */}
        <div className="mt-12 mb-8">
          <AgoraBranding variant="footer" />
        </div>
      </div>
    </div>
  );
}
