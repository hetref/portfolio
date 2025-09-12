"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

const ModelComputer = ({ isMobile = false }) => {
  const [mounted, setMounted] = useState(false);
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server side
  if (!mounted) {
    return null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={10} groundColor="black" />
      <spotLight
        position={[-10, 10, 10]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.8}
        position={isMobile ? [0, -3, 0] : [0, -3, 0]}
        rotation={[-0.01, -0.8, -0.2]}
      />
    </mesh>
  );
};

export default ModelComputer;

// import React from "react";
// import { OrbitControls, Stats, useGLTF } from "@react-three/drei";
// import { Canvas } from '@react-three/fiber'

// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} />;
// }

// const ModelComputer = () => {
//   // const { scene } = useGLTF("/desktop_pc/scene.gltf");
//   useGLTF.preload("/model/myModel.gltf");
//   return (
//     <>
//       <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
//         <group>
//           <Model url="/desktop_pc/scene.gltf" />
//         </group>
//         <OrbitControls autoRotate />
//         <Stats />
//       </Canvas>
//       <span id="info">The desktop pc is selected.</span>
//     </>
//   );
// };

// export default ModelComputer;
