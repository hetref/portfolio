import useLoaderStore from "@/stores/loader";
import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

const ModelLoader = () => {
  const { progress } = useProgress();

  const [loading, setIsLoading, setLoadingState] = useLoaderStore((state) => [
    state.loading,
    state.setIsLoading,
    state.setLoadingState,
  ]);

  // if (progress === 100 && progress) {
  //   setIsLoading(progress);
  // }

  useEffect(() => {
    setIsLoading(Math.floor(progress));
    console.log(progress);
    console.log(loading);

    progress == 100 && setLoadingState(false);
  }, [setIsLoading, loading, progress, setLoadingState]);

  return (
    <Html
      as="div"
      center
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   flexDirection: "column",
      // }}
      className="flex justify-center items-center flex-col"
    >
      {/* <span className="canvas-loader"></span> */}
      {/* <p
        style={{
          fontSize: 14,
          color: "#ffffff",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p> */}
    </Html>
  );
};

export default ModelLoader;
