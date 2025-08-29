"use client";

import React, { Suspense, useEffect, useState, useRef } from "react";

const SimpleComputers = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="mb-4">
              <svg
                className="w-32 h-32 mx-auto text-blue-400 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-2 bg-blue-400 rounded-full mx-auto animate-pulse"></div>
              <div className="w-12 h-2 bg-purple-400 rounded-full mx-auto animate-pulse delay-100"></div>
              <div className="w-20 h-2 bg-violet-400 rounded-full mx-auto animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleComputers;
