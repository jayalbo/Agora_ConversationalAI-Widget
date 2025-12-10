"use client";

import { useState } from "react";
import { ChatInterface } from "./ChatInterface";

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  reviews: any[];
}

interface AIAssistantProps {
  product: Product;
}

export function AIAssistant({ product }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button - Hidden when chat is open */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition hover:scale-110 z-50 flex items-center justify-center group"
          aria-label="Open AI Voice Assistant"
          title="Talk to AI Assistant"
        >
          {/* Microphone icon with sound waves */}
          <div className="relative">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            {/* Animated sound waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-8 h-8 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              <div
                className="absolute w-10 h-10 border-2 border-white rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-ping"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </button>
      )}

      {/* Chat Interface Modal */}
      {isOpen && (
        <ChatInterface product={product} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
