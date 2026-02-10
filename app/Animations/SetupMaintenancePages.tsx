"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Text, Line } from "@react-three/drei";
import * as THREE from "three";

type Props = {
  className?: string;
};

export default function RotatingCubeExpandedPages({ className }: Props) {
  return (
    <div className={className ?? "w-full h-full"}>
      <Canvas camera={{ position: [2.0, 2.0, 2.0], fov: 50 }}>
        <ambientLight intensity={0.45} />
        <directionalLight intensity={0.9} position={[5, 5, 5]} />
        <Scene />
        <Environment preset="forest" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

function Scene() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);
  const satARef = useRef<THREE.Mesh>(null!);
  const satBRef = useRef<THREE.Mesh>(null!);

  // Orbit params
  const radius = 1.3;
  const lineFactor = 0.1; // <--- make smaller = shorter lines

  // Stable vectors (IMPORTANT for <Line /> updates)
  const origin = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  const satA = useMemo(() => new THREE.Vector3(radius, 0.25, 0), [radius]);
  const satB = useMemo(() => new THREE.Vector3(-radius, -0.25, 0), [radius]);

  const lineA = useMemo(
    () => satA.clone().multiplyScalar(lineFactor),
    [satA, lineFactor]
  );
  const lineB = useMemo(
    () => satB.clone().multiplyScalar(lineFactor),
    [satB, lineFactor]
  );

  // Precompute orbit ring points
  const ringPoints = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 96;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Center cube rotation
    cubeRef.current.rotation.x = -t / 6.5;
    cubeRef.current.rotation.y = t / 5.8;

    // Whole orbit rotates (satellites move together)
    orbitRef.current.rotation.y = t * 0.3;

    // Give satellites their own spin so they feel "alive"
    satARef.current.rotation.y = -t * 0.5;
    satARef.current.rotation.x = t * 0.5;

    satBRef.current.rotation.y = t * 1.1;
    satBRef.current.rotation.z = -t * 0.6;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Center cube */}
      <mesh ref={cubeRef}>
        <boxGeometry args={[1.45, 1.45, 1.45]} />
        <meshStandardMaterial color="#fff" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Orbit system */}
      <group ref={orbitRef}>
        {/* Connector lines (shortened) */}
        <Line
          points={[origin, lineA]}
          lineWidth={1}
          color="white"
          transparent
          opacity={0.18}
        />
        <Line
          points={[origin, lineB]}
          lineWidth={1}
          color="white"
          transparent
          opacity={0.18}
        />

        {/* Satellite A */}
        <group position={satA.toArray()}>
          <mesh ref={satARef}>
            <icosahedronGeometry args={[0.15, 0]} />
            <meshStandardMaterial
              color="#f9f8fb"
              metalness={0.35}
              roughness={0.25}
              emissive={new THREE.Color("#f9f8fb")}
              emissiveIntensity={0.25}
            />
          </mesh>
        </group>

        {/* Satellite B */}
        <group position={satB.toArray()}>
          <mesh ref={satBRef}>
            <torusKnotGeometry args={[0.13, 0.04, 15, 6]} />
            <meshStandardMaterial
              color="#8b5cf6"
              metalness={0.45}
              roughness={0.22}
              emissive={new THREE.Color("#8b5cf6")}
              emissiveIntensity={0.22}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}
