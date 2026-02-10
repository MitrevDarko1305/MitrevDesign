"use client";

import { useEffect, useState } from "react";
import RotatingCubeExpanded from "./SetupMaintenance";


type Vec3 = [number, number, number];

export default function ResponsiveRotatingCubeExpanded() {
  const [position, setPosition] = useState<Vec3>([-1, -0.7, 0.5]);

  useEffect(() => {
    // match Tailwind md breakpoint
    const mq = window.matchMedia("(max-width: 767px)");
    

    const update = () => {
      setPosition(mq.matches ? [0, -0.5, 0] : [-1, -0.7, 0.5]);
    };

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return <RotatingCubeExpanded position={position} />;
}
