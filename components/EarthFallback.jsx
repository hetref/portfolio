"use client";

import React from "react";

const EarthFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-green-800">
      <div className="text-center text-white">
        <div className="mb-4">
          <svg
            className="w-24 h-24 mx-auto text-blue-300 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Contact</h3>
        <p className="text-sm opacity-75">Get in touch with me</p>
      </div>
    </div>
  );
};

export default EarthFallback;
