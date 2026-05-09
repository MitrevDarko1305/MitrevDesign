"use client"
import Link from "next/link";
import Header from "@/app/components/Header";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import { useTranslations } from "next-intl";


export default function WorkPage() {
  const t = useTranslations('WorkPage')
  const PROJECTS = [
  { title: t('title'), description: t('desc'), tag: t('tag'), image: "/Projects-Images/Omnifood-Project-2.webp", href: "https://omnifood.mitrevdarko.dev" },
  { title: t('fitness_title'), description: t('fitness_desc'), tag: t('fitness_tag'), image: "/Projects-Images/Mike-Project.webp", href: "https://mike-athletics.mitrevdarko.dev" },
  { title: t('music_title'), description: t('music_desc'), tag: t('music_tag'), image: "/Projects-Images/Classico-Band-Project.webp", href: "https://classico-band.mitrevdarko.dev" },
  { title: t('texas_title'), description: t('texas_desc'), tag: t('texas_tag'), image: "/Projects-Images/Texas-Project.webp", href: "https://texas-steakhouse.mitrevdarko.dev" },
  { title: t('siayvo_title'), description: t('siayvo_desc'), tag: t('siayvo_tag'), image: "/Projects-Images/Siayvo-Project-2.webp", href: "https://siayvo.mitrevdarko.dev" },
  { title: t('photography_title'), description: t('photography_desc'), tag: t('photography_tag'), image: "/Projects-Images/Photography-screenshot.png", href: "https://photography.mitrevdarko.dev/" },
 ];
  return (
    <>
      <Header />
    <main className="mx-auto bg-[#070815] lg:max-w-[1320px] md:max-w-[1120] px-6 pt-24 pb-24 md:pb-10 md:pt-24" id="projects"> 
      <div className="mb-6">
        <Link href="/#projects-1" className="text-sm text-white/50 hover:text-white">
         {t('back_button')}
        </Link>

        <h1 className="mt-2 text-3xl font-medium  tracking-tight text-white">
          {t('work_title')}
        </h1>
        <p className="mt-2 max-w-xl text-[14px] text-white/50">
          {t('work_desc')}
        </p>
      </div>

      {/* Denser grid than homepage */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full w-full flex-col overflow-hidden rounded-sm border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-5">
              <div className="mb-2 text-xs uppercase tracking-wide text-white/50">
                {p.tag}
              </div>
              <h3 className="text-lg font-medium tracking-tight text-white">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-white/60">{p.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>

     <CTASection compact/>
     <Footer  workHref="#projects" />

      </> 
  );
}

