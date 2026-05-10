"use client"
import React from "react";
import FAQSection from "../components/FAQSection";
import TeamSection from "../components/TeamSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useHrefTo } from "../Use-href-hook";
import WhatsAppFloatingButton from "../components/FloatingButtonWhatsApp";
import ColumnPosts from "../components/MitrevDesignBlog";
import TailWindTestimonial from "../components/MitrevDesignTestimonials";
import WorkWithUs from "../components/SubscriptionSection/SubscriptionElement";
import Newsletter from "../components/Newsletter";
import LandingPageSection from "../components/LandingPageSection";
import { trackEvent } from "@/lib/analytics";
import Lenis from "lenis";
import SmoothScroll from "../components/SmoothScroll";
import HighlightProjects from "../components/HighligtsProjects";
import {projects} from "@/data/highlightedprojects";
import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';
import AuditSignup from "../components/AuditSignup";


export default function Page() {
const hrefTo = useHrefTo();

  return (
    <main className="relative min-h-[100svh] md:min-h-screen bg-[#070815] text-zinc-100">
       <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-[-180px] h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[120px]" />
    </div>
      <SmoothScroll/>
      <Header/>
      <Hero />
      <HighlightProjects projects={projects}/>
      <WorkWithUs/>
      <LandingPageSection/>
      <Services />
      <ProjectsSection/>
      <Approach/>
      <FAQSection/>
      <TeamSection/>
      <TailWindTestimonial/>
      <CTASection/>
      <ColumnPosts/>
      <AuditSignup/>
      <Footer/> 
      <WhatsAppFloatingButton
       phone="4915753137292"
      message="Hello, I would like to get info about website services"/>
     
    </main>
  );
}



function Hero() {
  const t = useTranslations('hero');
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:pt-36 md:pb-16 pt-[6rem]">
        <div className="flex flex-col items-center text-center md:text-left md:items-start md:justify-center h-full">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t('badge')}
          </p>

         <h1 className="text-4xl font-black tracking-tight md:text-5xl">
           {t('headline')}{" "} <br />
           <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-300 bg-clip-text font-black text-transparent">
           {t('headline_colored')}
           </span>{" "}
         </h1>

          <p className="mt-4 max-w-xl text-zinc-300/90 md:text-lg">
            {t('subheadline')}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book-a-call"
               onClick={() => trackEvent('hero_cta_click', { event_label: 'get_free_estimate' })} /* for tracking events on google analytics */
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-center text-sm font-black text-white shadow-sm hover:opacity-95
              transition-all duration-300 ease-out
               hover:from-fuchsia-600 hover:to-indigo-600
               hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
               hover:-translate-y-[1px]
               active:translate-y-0"
            >
              {t('cta_primary')}
            </a>
          <a
            href="#projects-1"
             onClick={() => trackEvent('hero_cta_click', { event_label: 'view_work' })} /* tracking events on google analytics */
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
            {t('cta_secondary')}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-zinc-300">
            <Pill>Next.js</Pill>
            <Pill>React</Pill>
            <Pill>Tailwind</Pill>
            <Pill>Bootstrap</Pill>
            <Pill>Custom code</Pill>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/0" />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-sm">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0b1f]/70 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{t('snapshot_title')}</p>
                  <p className="mt-1 text-xs text-zinc-300">{t('snapshot_subtitle')}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                   {t('snapshot_days')}
                </span>
              </div>

               <div className="mt-5 grid gap-3">
                <CardLine label={t('snapshot_item1')} value={t('snapshot_item1_desc')} />
                <CardLine label={t('snapshot_item2')} value={t('snapshot_item2_desc')} />
                <CardLine label={t('snapshot_item3')} value={t('snapshot_item3_desc')} />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-medium">{t('quick_start')}</p>
                <p className="mt-1 text-xs text-zinc-300">
                  {t('quick_start_desc')}
                </p>
                <a
                  href="mailto:mitrevdaro@gmail.com" target="blank"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-xs font-black text-white hover:opacity-95
                  transition-all duration-300 ease-out
                   hover:from-fuchsia-600 hover:to-indigo-600
                   hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
                   hover:-translate-y-[1px]
                   active:translate-y-0"
                >
                  {t('message_us')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#070815]" />
    </section>
  );
}



function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{children}</span>;
}

function CardLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-xs text-zinc-300">{label}</span>
      <span className="text-xs font-medium text-white">{value}</span>
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-medium text-zinc-300">{label}</span>
      <input
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-[#070815] px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-fuchsia-500/30"
      />
    </label>
  );
}

function TextArea({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-medium text-zinc-300">{label}</span>
      <textarea
        placeholder={placeholder}
        className="min-h-[110px] resize-none rounded-xl border border-white/10 bg-[#070815] px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-fuchsia-500/30"
      />
    </label>
  );
}


function Services() {
  const t = useTranslations('Services')
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-4 py-8 md:py-16 text-center md:text-left"
    >
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium text-zinc-300">{t('service_span')}</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
          {t('service_title')}
        </h2>
        <p className="mt-4 text-sm text-zinc-300/90 md:text-base">
         {t('service_subtitle')}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 text-center md:text-left">
        <div className="rounded-sm border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-center md:justify-start gap-3">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-icon lucide-code relative -top-[1px]"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
          <h3 className="text-lg font-black">{t("custom_title")}
          </h3>
          </div>
          <p className="mt-2 text-sm text-zinc-300/90">
            {t("custom_subtitle")}
          </p>
        </div>

        <div className="rounded-sm border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-center md:justify-start gap-3">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid-icon lucide-layout-grid relative -top-[1px]"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
          <h3 className="text-lg font-black">{t('webflow_title')}</h3>
          </div>
          <p className="mt-2 text-sm text-zinc-300/90">
            {t('webflow_subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  tag: string;
  image: string;
  href: string;
};

function ProjectCard({ title, description, tag, image, href }: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full w-full flex-col relative overflow-hidden rounded-sm border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5">
        <div className="mb-2 text-xs uppercase tracking-wide text-white/50">
          {tag}
        </div>
        <h3 className="text-lg font-black tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-white/60">{description}</p>
      </div>
    </a>
  );
}


function ProjectsSection() {
  const locale = useLocale();
  const t = useTranslations("SelectedProjects")
  return (
    <section className="mt-16 md:mb-6 md:mt-16 max-w-6xl mx-auto px-5  " id="projects-1">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-black tracking-tight">{t('selected_title')}</h2>
        <p className="mt-2 max-w-xl mx-auto text-white/60 text-center md:text-left md:mx-0">
           {t('selected_subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 text-center md:text-left gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title={t('selected_project_title1')}
          description={t('selected_project_desc1')}
          tag="Express, Node.js"
          image="/Projects-Images/Cinemax-Screenshot.png"
          href="https://cinemax.mitrevdarko.dev"
        />
        <ProjectCard
          title={t('selected_project_title2')}
          description={t('selected_project_desc2')}
          tag="Node.js"
          image="/Projects-Images/skycast.png"
          href="https://skycast.mitrevdarko.dev"
        />
        <ProjectCard
          title={t('selected_project_title3')}
          description={t('selected_project_desc3')}
          tag="Custom Code"
          image="/Projects-Images/Nuvlo-Screenshot.png"
          href="https://nuvlo.mitrevdarko.dev/"
        />
      </div>
      <div className="justify-center flex mt-10">
      <a
        href={`/${locale}/work`}
        className="
         md:mt-4 mt-2 mb-8 md:mb-4 inline-flex items-center justify-center 
        rounded-sm border border-white/10
        bg-white/5 px-6 py-3 text-sm font-black text-white
        transition-colors hover:bg-white/10
         "
      >
  {t('selected_button')}
</a>
</div>
    </section>
  );
}


function Approach() {
  const t = useTranslations('Approach')
  return (
    <section id="approach" className="mx-auto max-w-6xl px-6 py-24 md:pt-32 md:pb-24 text-center md:text-left relative overflow-hidden" >
      <div className="pointer-events-none absolute inset-0 -z-10"/>
       <div className="absolute right-[20%] top-[20%] h-[420px] w-[420px]  rounded-full
      bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-medium text-zinc-300">{t('approach_span')}</p>

          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
            {t('approach_title1')} <span className="bg-gradient-to-r from-fuchsia-300/80 to-indigo-300/80 bg-clip-text text-transparent">  {t('approach_title_span')} </span> {t('approach_title2')}
          </h2>

          <p className="mt-4 max-w-xl text-sm text-zinc-300/90 md:text-base">
            {t('approach_desc')}
          </p>

          <div className="mt-10 space-y-6 text-left">
            <ApproachItem
              title={t('approach_item_title1')}
              text={t('approach_item_text1')}
            />
            <ApproachItem
              title={t('approach_item_title2')}
              text={t('approach_item_text2')}
            />
            <ApproachItem
              title={t('approach_item_title3')}
              text={t('approach_item_text3')}
            />
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/0" />

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0b1f]/70 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{t('snapshot_title')}</p>
                  <p className="mt-1 text-xs text-zinc-300">{t('snapshot_subtitle')}</p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  {t('snapshot_days')}
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                <CardLine label={t('card_label1')} value={t('card_value1')} />
                <CardLine label={t('card_label2')} value={t('card_value2')} />
                <CardLine label={t('card_label3')} value={t('card_value3')} />
                <CardLine label={t('card_label4')} value={t('card_value4')} />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-medium">{t('card_title1')}</p>
                <p className="mt-1 text-xs text-zinc-300">
                  {t('card_title2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApproachItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 h-5 w-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-zinc-300/90">{text}</p>
      </div>
    </div>
  );
}



