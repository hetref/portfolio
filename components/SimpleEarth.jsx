"use client";

import React, { useEffect, useState } from "react";

const SimpleEarth = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-green-800">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-green-500 animate-pulse shadow-2xl">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-400 via-blue-500 to-green-600 opacity-80">
                <div className="absolute top-8 left-8 w-8 h-8 bg-green-600 rounded-full opacity-60"></div>
                <div className="absolute top-16 right-12 w-6 h-6 bg-yellow-600 rounded-full opacity-60"></div>
                <div className="absolute bottom-12 left-16 w-12 h-12 bg-green-500 rounded-full opacity-60"></div>
                <div className="absolute bottom-8 right-8 w-4 h-4 bg-green-700 rounded-full opacity-60"></div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleEarth;
