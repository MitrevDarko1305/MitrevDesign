'use client'
import SmoothScroll from "./SmoothScroll";
import { useTranslations } from "next-intl";
// components/blog/BlogArticle.tsx

export default function MaintenanceTextDescription() {
  const t = useTranslations('Maintenance_Page')
  return (
    <> 
    <SmoothScroll/>
    <article className=" text-[17px] bg-[#0b0615] leading-tight lg:text-start text-center  px-0  pt-8 pb-24 md:pb-20 md:pt-4 px-0 ">
    <div className="max-w-7xl md:px-10 px-4 mx-auto">
      <div className=" max-w-3xl mx-auto lg:mx-0  space-y-16 leading-relaxed  text-[17px]">
      {/* Section 1 */}
      <section className="space-y-4 ">
        <header className="text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-white mb-6">{t('maintenance_title1')}</h1>
        </header>
        <div className="space-y-1">
          <h2 className="text-md font-bold text-white lg:text-left text-center">
          {t('maintenance_title2')}
          </h2>
      <div className=" text-md space-y-1">
        <p className="leading-normal text-[15px]  text-zinc-400">
       {t('maintenance_desc1')}
        </p>

        <p className="pt-6 md:pt-6 text-white  text-[15px] font-bold">
         {t('maintenance_desc2')}
        </p>

        <ul className="space-y-1 pl-5 text-zinc-400 text-[15px] leading-tight list-none lg:list-disc">
          <li className="">{t('maintenance_list_item1')}</li>
          <li className="">{t('maintenance_list_item2')}</li>
        </ul>

       <p className="text-[15px] text-zinc-400 pt-6">{t('maintenance_desc3')}</p>
        <p className="text-[15px] text-zinc-400 "> {t('maintenance_desc4')} </p>
        <p className="mt-6 text-sm  text-zinc-200 border border-zinc-700 rounded-full py-1 px-3 inline-block">
        {t('maintenance_price')}
        </p>
        
        </div>
        </div>
      </section>

      
      </div>
      </div>
    </article>
    </>
  );
}