"use client";

import { Html, useProgress } from "@react-three/drei";
import useLoaderStore from "@/stores/loader";
import { useEffect } from "react";

const Preloader = () => {
  const { progress, active } = useProgress();
  const [loading, setIsLoading, setLoadingState] = useLoaderStore((state) => [
    state.loading,
    state.setIsLoading,
    state.setLoadingState,
  ]);

  useEffect(() => {
    const pct = Number.isFinite(progress) ? Math.floor(progress) : 0;
    setIsLoading(pct);
    setLoadingState(!(progress >= 100));

    if (!(progress >= 100)) {
      try {
        document.documentElement.style.overflow = "hidden";
      } catch {}
    } else {
      try {
        document.documentElement.style.overflow = "";
      } catch {}
    }
  }, [progress, setIsLoading, setLoadingState]);

  // Overlay that sits above the app until loading completes
  return (
    <div
      aria-hidden={progress >= 100 ? "true" : "false"}
      className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000] text-[#f4f8fb] flex items-center justify-center z-[9999]"
      style={{ opacity: progress >= 100 ? 0 : 1, pointerEvents: progress >= 100 ? "none" : "auto", transition: "opacity 400ms ease" }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="w-20 h-20 rounded-full border-4 border-white/20 border-t-white animate-spin" />
        <div className="text-xl font-semibold tracking-wide">
          {Math.floor(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;


