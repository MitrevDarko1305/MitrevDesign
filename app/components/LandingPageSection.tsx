"use client"
import Link from "next/link"
import { trackEvent } from "@/lib/analytics"
import { useTranslations } from "next-intl"

export default function LandingPageMockup() {
  const t = useTranslations('LandingPage')
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* Hero */}
      <div className=" mx-auto min-w-0 overflow-hidden max-w-6xl text-center md:text-left px-8 py-4 sm:py-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-4xl">
            {t('landingtitle')}
            <br className="hidden sm:block" />
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
           {t('landingdescription1')}
          </p>

          <div className="mt-10 justify-center md:justify-start flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://buy.stripe.com/14A6oJ8d59Jj7pMf7O1ck0d" target="_blank"
              onClick={() => trackEvent('landing_page_cta_click', { event_label: 'start_your_landing_page' })} /* tracking events google analytics for the button  */
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-center text-sm font-black text-white shadow-sm hover:opacity-95
              transition-all duration-300 ease-out
              hover:from-fuchsia-600 hover:to-indigo-600
              hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
              hover:-translate-y-[1px]
              active:translate-y-0"
            >
              {t('landingbutton1')}
            </Link>

            <Link
              href="https://mike-athletics.mitrevdarko.dev" target="_blank"
              onClick={() => trackEvent('landing_page_cta_click', { event_label: 'view_demo' })} /* tracking events for the button in analytics  */
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              {t('landingbutton2')}
            </Link>
          </div>
          <p className="mt-4 text-zinc-400 text-sm">{t('landingdescription2')}</p>
           <p className="mt-4  text-[13px] text-zinc-200 border border-zinc-700 rounded-full py-1 px-3 inline-block">{t('landingprice')}</p>
        </div>

        {/* Mockup */}
        <div className="mt-0   grid place-items-center lg:mt-0">
          <img
            src="/Projects-Images/MitrevDesign-Mockup.png"
            alt="Landing page preview"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Floating card */}
      <div className="relative z-10 text-center md:text-left mx-auto -mt-24 max-w-6xl bg-[#0a0a0f] px-6 pb-16 sm: -mt-24
  ">
        <div className="rounded-sm border border-white/10  p-6 md:p-8 shadow-2xl bg-[#14141f]
  ">
          <h2 className="text-2xl text-center md:text-left font-black tracking-tight text-white">
            {t('floatingcardtitle')} 
          </h2>

         
          <p className="mt-4 max-w-2xl text-white/70">
             {t('floating_desc1')}
          </p>
          <p className="mt-1 max-w-2xl text-white/70">
          {t('floating_desc2')}
          </p>
          <p className="mt-1 max-w-2xl text-white/70">
          {t('floating_desc3')}
          </p>
          <p className="mt-1 max-w-2xl text-white/70">
          {t('floating_desc4')}
          </p>
        </div>
      </div>
    </section>
  )
}
