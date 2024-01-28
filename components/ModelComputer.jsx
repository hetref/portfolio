import { useGLTF } from "@react-three/drei";

const ModelComputer = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

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
        scale={isMobile ? 0.7 : 0.8}
        position={isMobile ? [0, -3, -2.2] : [0, -3, 0]}
        rotation={[-0.01, -0.8, -0.2]}
      />
    </mesh>
  );
};

export default ModelComputer;
