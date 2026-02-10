// app/components/WorkWithUs.tsx
import Link from "next/link";
import RotatingCube from "@/app/Animations/RotatingCube";
import SetupMaintenance from "@/app/Animations/SetupMaintenance";
import Maintenance from "@/app/Animations/MaintenanceObject";
import ResponsiveRotatingCube from "@/app/Animations/ResponsiveRotatingCube";
import ResponsiveRotatingCubeExpanded from "@/app/Animations/ResponsiveRotatingCubeExpanded";
import ResponsiveMaintenanceObject from "@/app/Animations/ResponsiveMaintenanceObject";



export default function WorkWithUs() {
  return (
    <section className="pt-12 md:pt-18 ">
        <h1 className="text-2xl md:text-4xl text-center md:text-left font-bold mb-0 tracking-tight max-w-6xl mx-auto md:pl-4 pl-10">How we work together</h1>
    <div className="grid grid-cols-1  lg:pl-16 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto  gap-y-10 pt-8 pb-20   [@media(min-width:995px)_and_(max-width:1250px)]:pl-0">
      {/* Web System */}
      <div className="relative min-h-[320px] px-0 md:px-4 overflow-hidden">
        <div className="absolute flex items-center justify-center inset-0 pointer-events-none">
          <ResponsiveRotatingCube/>
        </div>

         
        <div className="relative z-10 h-full flex flex-col justify-between items-center text-center md:items-start md:text-left py-0">
          <div>
            <h3 className="text-xl font-medium">Website system </h3>
            <p className="mt-2 text-sm text-zinc-300/90  max-w-[28ch]">
              CMS powered website <br /> foundation  – ready to customize
            </p>
          </div>
          <Link href="/services/rotatingcube" className="text-zinc-100/40 text-sm  hover:text-zinc-300/90">
            Find out more →
          </Link>
        </div>
      </div>

      {/* Setup + Maintenance */}
      <div className="relative min-h-[320px] px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ResponsiveRotatingCubeExpanded/>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between text-center items-center md:items-start md:text-left py-0">
          <div>
            <h3 className="text-xl font-medium">Built & Support</h3>
            <p className="mt-2 text-sm opacity-70 max-w-[28ch]">
              We built your website system and keep it running flawlessly.
            </p>
          </div>
          <Link
            href="/services/rotatingcube/setupmaintenance"
            className="text-zinc-100 text-sm hover:text-zinc-300/90"
          >
            Find out more →
          </Link>
        </div>
      </div>

      {/* Maintenance */}
      <div className="relative min-h-[320px] overflow-hidden px-4">
        <div className="absolute inset-0 pointer-events-none md:-translate-x-4 lg:translate-x-0">
          <ResponsiveMaintenanceObject />
        </div>
        <div className="relative  z-10 h-full flex flex-col text-center md:text-left items-center md:items-start justify-between py-0">
          <div>
            <h3 className="text-xl font-medium">Maintenance</h3>
            <p className="mt-2 text-sm opacity-70 max-w-[28ch]">
              Ongoing updates, fixes, and improvements.
            </p>
          </div>
          <Link
            href="/services/rotatingcube/maintenance"
            className="text-zinc-100/40 text-sm hover:text-zinc-300/90"
          >
            Find out more →
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

  