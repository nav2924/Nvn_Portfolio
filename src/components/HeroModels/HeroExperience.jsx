import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "../../../public/models/Room";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width : 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width : 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 25 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={5} />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={4}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group scale={isMobile ? 0.6 : isTablet ? 0.8 : 1} rotation={[0, -Math.PI / 4, 0]}>
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
