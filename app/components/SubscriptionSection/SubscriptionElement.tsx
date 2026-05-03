// app/components/WorkWithUs.tsx
import Link from "next/link";
import RotatingCube from "@/app/Animations/RotatingCube";
import SetupMaintenance from "@/app/Animations/SetupMaintenance";
import Maintenance from "@/app/Animations/MaintenanceObject";
import ResponsiveRotatingCube from "@/app/Animations/ResponsiveRotatingCube";
import ResponsiveRotatingCubeExpanded from "@/app/Animations/ResponsiveRotatingCubeExpanded";
import ResponsiveMaintenanceObject from "@/app/Animations/ResponsiveMaintenanceObject";
import { trackEvent } from "@/lib/analytics";
import { useTranslations } from "next-intl";


export default function WorkWithUs() {
  const t = useTranslations('WorkwithUs');
  return (
    <section className="pt-10 md:pt-8 ">
      <h1 className="text-sm md:text-sm text-center md:text-left md:mb-8 mb-4 font-bold text-white/45  tracking-tight max-w-6xl mx-auto  md:pl-4 pl-4">{t('span_quote1')}<br />{t('span_quote2')}</h1>
        <p className="text-2xl md:text-4xl text-center md:text-left font-black mb-0 tracking-tight max-w-6xl mx-auto md:pl-4 pl-10">{t('work_title')}</p>
    <div className="grid grid-cols-1  lg:pl-16 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto  gap-y-10 pt-8 pb-20   [@media(min-width:995px)_and_(max-width:1250px)]:pl-0">
      {/* Web System */}
      <div className="relative min-h-[320px] px-0 md:px-4 overflow-hidden">
        <div className="absolute  inset-0 pointer-events-none">
          <ResponsiveRotatingCube/>
        </div>

         
        <div className="relative z-10 h-full flex flex-col justify-between items-center text-center md:items-start md:text-left py-0">
          <div>
            <h3 className="text-xl font-black">{t('service_title1')} </h3>
            <p className="mt-2 text-sm text-white/45  max-w-[28ch]">
              {t('service_title1_desc')}  <br /> {t('service_title1_desc2')}
            </p>
          </div>
          <Link href="/services/rotatingcube" className="text-zinc-100/40 text-sm  hover:text-zinc-300/90"
           onClick={() => trackEvent('how_we_work_together', { event_label: 'website_system' })}/* tracking events for the button, google analytics  */>
            {t('service_button')}
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
            <h3 className="text-xl font-black">{t('service_title2')}</h3>
            <p className="mt-2 text-sm text-white/45 max-w-[28ch]">
              {t('service_title2_desc')}
            </p>
          </div>
          <Link
            href="/services/rotatingcube/setupmaintenance"
            className="text-zinc-100 text-sm hover:text-zinc-300/90"
           onClick={() => trackEvent('how_we_work_together', { event_label: 'build_and_support'})}/* tracking events for the button, google analytics  */>
            {t('service_button')}
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
            <h3 className="text-xl font-black">{t('service_title3')}</h3>
            <p className="mt-2 text-sm text-white/45 max-w-[28ch]">
              {t('service_title3_desc')}
            </p>
          </div>
          <Link
            href="/services/rotatingcube/maintenance"
            className="text-zinc-100/40 text-sm hover:text-zinc-300/90"
           onClick={() => trackEvent('how_we_work_together', { event_label: 'maintenance' })}/* tracking events for the button, google analytics  */>
            {t('service_button')}
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

  