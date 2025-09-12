"use client";

import React, { useEffect, useState } from "react";

const SimpleComputersFallback = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      {/* Main content */}
      <div className="text-center text-white z-10">
        <div className="text-8xl mb-6 animate-bounce">💻</div>
        <div className="text-2xl font-bold mb-2">Interactive 3D Model</div>
        <div className="text-lg opacity-75">
          {isMobile ? "Tap to interact" : "Click and drag to rotate"}
        </div>
        <div className="mt-4 text-sm opacity-50">
          Loading 3D content...
        </div>
      </div>
    </div>
  );
};

export default SimpleComputersFallback;
