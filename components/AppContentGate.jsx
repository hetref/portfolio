"use client";

import useLoaderStore from "@/stores/loader";

const AppContentGate = ({ children }) => {
  const [loadingState] = useLoaderStore((state) => [state.loadingState]);

  // Render children but keep them visually hidden until loadingState is false
  return (
    <div style={{ visibility: loadingState ? "hidden" : "visible" }}>
      {children}
    </div>
  );
};

export default AppContentGate;


