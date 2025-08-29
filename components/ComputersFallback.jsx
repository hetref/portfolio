"use client";

import React from "react";

const ComputersFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center text-white">
        <div className="mb-4">
          <svg
            className="w-24 h-24 mx-auto text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
        <p className="text-sm opacity-75">Interactive 3D Experience</p>
      </div>
    </div>
  );
};

export default ComputersFallback;
