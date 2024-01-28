import useLoaderStore from "@/stores/loader";
import React from "react";

const Loading = () => {
  const [loading] = useLoaderStore((state) => [state.loading]);
  return (
    <div
      className="flex justify-center items-center text-7xl h-[100vh] w-[100vw] fixed top-0 left-0 bg-[#000000] text-[#f4f8fb]"
      style={{ zIndex: "9999" }}
    >
      Loading {loading} %
    </div>
  );
};

export default Loading;
