"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

type RotatingCubeHeroProps = {
  className?: string;
  position?: [number, number, number];
  accentColor?: string;
};

export default function RotatingCubeHero({
  className = "w-full h-[320px] md:h-[420px]",
  position = [0, 0, 0],
  accentColor = "#8b5cf6",
}: RotatingCubeHeroProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [2.6, 1.8, 2.8], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.35} />
        <directionalLight intensity={0.9} position={[6, 6, 6]} />
        <pointLight intensity={0.35} position={[-4, -2, 2]} />

        <Scene position={position} accentColor={accentColor} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

function Scene({
  position,
  accentColor,
}: {
  position: [number, number, number];
  accentColor: string;
}) {
  const group = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // slower + smoother = more premium
    group.current.rotation.x = t / 8.5;
    group.current.rotation.y = t / 10.5;

    // subtle float
    group.current.position.y = position[1] + Math.sin(t * 0.7) * 0.06;
  });

  return (
    <group ref={group} position={position}>
      {/* Main cube */}
      <mesh>
        <boxGeometry args={[1.60, 1.60, 1.60]} />
        <meshStandardMaterial
          color={accentColor}
          metalness={0.75}
          roughness={0.18}
        />
      </mesh>

     
    </group>
  );
}
