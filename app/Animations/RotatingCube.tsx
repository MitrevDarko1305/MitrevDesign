"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type Vec3 = [number, number, number];

export default function RotatingCube(
  {
  position,
}: {
  position?: Vec3;
}
) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={0.8} position={[5, 5, 5]} />
      

        <Scene position={position} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}


  function Scene({
  position = [-1, -0.7, 0.5],
}: {
  position?: Vec3;
}) {
 
  const cubeGroupRef = useRef<THREE.Group>(null!);
 


  // Make the cube rotate
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    cubeGroupRef.current.rotation.x = t / 5;
    cubeGroupRef.current.rotation.y = t / 7.2;
   
  });

  return (

    <group ref={cubeGroupRef} position={position}>
  {/* Main cube */}
  <mesh>
    <boxGeometry args={[1.2, 1.2, 1.2]} />
    <meshStandardMaterial
      color="#8b5cf6"
      metalness={0.6}
      roughness={0.2}
    />
  </mesh>

  {/* CORE MARKER (attached to cube corner) */}
  <group position={[0.80, 0.80, 0.80]}>

  </group>
</group>
  );
}