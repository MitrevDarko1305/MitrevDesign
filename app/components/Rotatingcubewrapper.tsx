"use client";
import dynamic from 'next/dynamic';

const RotatingCubeHero = dynamic(
  () => import('@/app/Animations/RotatingCubePages'),
  { ssr: false }
);

export default function RotatingCubeWrapper({ className }: { className?: string }) {
  return <RotatingCubeHero className={className} />;
}