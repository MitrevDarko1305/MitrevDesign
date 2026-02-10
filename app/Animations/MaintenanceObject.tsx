"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Line, Text } from "@react-three/drei";
import * as THREE from "three";

type Vec3 = [number, number, number];

export default function MaintenanceObject(
  {
  position = [-0.9, -0.6, 0.5],
}: {
  position?: Vec3;
}
) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [2.4, 1.8, 2.6], fov: 50 }}>
        <ambientLight intensity={0.45} />
        <directionalLight intensity={0.9} position={[5, 5, 5]} />

        <MaintenanceScene   position={position}/>

        <Environment preset="forest" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

function MaintenanceScene({ position }: { position: Vec3 }) {
  const coreRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);
  const toolRef = useRef<THREE.Mesh>(null!);
/*  const ringRef = useRef<THREE.Mesh>(null!); */

  const radius = 1;

  const ringPoints = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 100;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Core: stable, slow rotation (reads as “reliability”)
    coreRef.current.rotation.y = t * 0.20;
    coreRef.current.rotation.x = t * 0.08;

    // Orbit: tool rotates around core (maintenance cycle)
    orbitRef.current.rotation.y = t * 0.2;

    // Tool: self-rotate + slight wobble
    toolRef.current.rotation.y = t * 0.2;
    toolRef.current.rotation.z = -t * 0.1;

   
  });
 

  return (
    <group  position={position}>
      {/* Core object */}
      <mesh ref={coreRef} >
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.55}
          roughness={0.22}
        />
      </mesh>


      {/* Orbiting tool */}
      <group ref={orbitRef} >
        <group position={[radius, 0.10, 0]}>
          <mesh ref={toolRef}>
           {/*   <cylinderGeometry args={[0.18, 0.20, 0.10, 6]} /> */}
             <meshStandardMaterial
          color="#f9f8fb"
          metalness={0.55}
          roughness={0.22}
        />
          </mesh>
         
        </group>
      </group>
    </group>
  );
  }
