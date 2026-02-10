"use client"

import React from "react";
import FAQSection from "./components/FAQSection";
import TeamSection from "./components/TeamSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Head from "next/head";
import Header from "./components/Header";
import { useHrefTo } from "./Use-href-hook";
import WhatsAppFloatingButton from "./components/FloatingButtonWhatsApp";

import Link from "next/link";
import { Import } from "lucide-react";
import ContactForm from "./components/ContactForm";
import BlogArticle from "./components/BlogArticleComponent1";
import ColumnPosts from "./components/MitrevDesignBlog";
import TailWindTestimonial from "./components/MitrevDesignTestimonials"









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
     <Header/>
      <Hero />
      <Services />
      <ProjectsSection/>
      <Approach/>
      <FAQSection/>
      <TeamSection/>
      <CTASection/>
      <TailWindTestimonial/>
      <ColumnPosts/>
      <Footer/> 
      <WhatsAppFloatingButton
       phone="4915753137292"
      message="Hello, I would like to get info about website services"/>
    
    </main>
  );
}



function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:pt-36 md:pb-16 pt-[6rem]">
        <div className="flex flex-col items-center text-center md:text-left md:items-start md:justify-center h-full">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for new projects
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Modern websites with {" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
              premium
            </span>{" "}
            feel
          </h1>

          <p className="mt-4 max-w-xl text-zinc-300/90 md:text-lg">
            Custom-built websites for small businesses — designed to attract customers and build trust.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book-a-call"
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-center text-sm font-medium text-white shadow-sm hover:opacity-95
              transition-all duration-300 ease-out
    hover:from-fuchsia-600 hover:to-indigo-600
    hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
    hover:-translate-y-[1px]
    active:translate-y-0"
            >
              Get a free estimate
            </a>
          <a
            href="#projects-1"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
            View work
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
                  <p className="text-sm font-medium">Project snapshot</p>
                  <p className="mt-1 text-xs text-zinc-300">What clients get</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  7–14 days
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                <CardLine label="Custom design" value=" Purpose-built" />
                <CardLine label="Fast & reliable" value="Smooth & dependable" />
                <CardLine label="Easy to grow" value="Designed to scale " />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-medium">Quick start</p>
                <p className="mt-1 text-xs text-zinc-300">
                  Send your idea — we’ll reply with a plan and a price range.
                </p>
                <a
                  href="mailto:mitrevdaro@gmail.com" target="blank"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-xs font-medium text-white hover:opacity-95
                  transition-all duration-300 ease-out
    hover:from-fuchsia-600 hover:to-indigo-600
    hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
    hover:-translate-y-[1px]
    active:translate-y-0"
                >
                  Message us
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
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-4 py-8 md:py-16 text-center md:text-left"
    >
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium text-zinc-300">Services</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Modern web solutions
        </h2>
        <p className="mt-4 text-sm text-zinc-300/90 md:text-base">
          We build custom websites for small businesses using the right approach —
          clean custom code or Webflow — based on your goals and timeline.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 text-center md:text-left">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-center md:justify-start gap-3">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-icon lucide-code relative -top-[1px]"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
          <h3 className="text-lg font-semibold">Website with custom code
          </h3>
          </div>
          <p className="mt-2 text-sm text-zinc-300/90">
            Fully custom-built websites focused on performance, flexibility,
            and long-term reliability.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-center md:justify-start gap-3">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid-icon lucide-layout-grid relative -top-[1px]"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
          <h3 className="text-lg font-semibold">Webflow website</h3>
          </div>
          <p className="mt-2 text-sm text-zinc-300/90">
            Clean, modern Webflow sites that are easy to update and quick to launch.
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
      className="group flex h-full w-full flex-col relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20"
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
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-white/60">{description}</p>
      </div>
    </a>
  );
}



function ProjectsSection() {
  return (
    <section className="mt-16 md:mt-16 max-w-6xl mx-auto px-5  " id="projects-1">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-medium tracking-tight">Selected Projects</h2>
        <p className="mt-2 max-w-xl mx-auto text-white/60 text-center md:text-left md:mx-0">
           Focused selection of recent work.
        </p>
      </div>

      <div className="grid grid-cols-1 text-center md:text-left gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Personal-Trainer Portfolio"
          description="Custom-coded  website focused on performance"
          tag="Custom Code"
          image="/Projects-Images/Mike-Project.png"
          href="https://mike-athletics.mitrevdarko.dev"
        />
        <ProjectCard
          title="Security  Template"
          description="Webflow-powered site with clean interactions."
          tag="Webflow"
          image="/Projects-Images/Securyguard-Project.png"
          href="https://securyguard.webflow.io"
        />
        <ProjectCard
          title="Premium Auto-Motive Website"
          description="Great for car dealerships"
          tag="Custom Code"
          image="/Projects-Images/Quantum.png"
          href="https://quantum.mitrevdarko.dev/"
        />
      </div>
      <div className="justify-center flex mt-10">
      <a
        href="/work"
        className="
         mt-10 inline-flex items-center justify-center 
        rounded-xl border border-white/10
        bg-white/5 px-6 py-3 text-sm font-medium text-white
        transition-colors hover:bg-white/10
         "
      >
  See all work
</a>
</div>
    </section>
  );
}


function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-6xl px-6 py-24 md:py-36 text-center md:text-left relative overflow-hidden" >
      <div className="pointer-events-none absolute inset-0 -z-10"/>
       <div className="absolute right-[20%] top-[20%] h-[420px] w-[420px]  rounded-full
      bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-medium text-zinc-300">Our approach</p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Websites <span className="bg-gradient-to-r from-fuchsia-300/80 to-indigo-300/80 bg-clip-text text-transparent">  built </span> with purpose  and precision
          </h2>

          <p className="mt-4 max-w-xl text-sm text-zinc-300/90 md:text-base">
            We design and build high-performance websites that load fast, scale effortlessly, and stay clear from strategy to launch.
          </p>

          <div className="mt-10 space-y-6 text-left">
            <ApproachItem
              title="Performance first"
              text="Fast load times, clean structure, and reliable foundations."
            />
            <ApproachItem
              title="Built for conversion"
              text="Clear messaging, strong hierarchy, and trust-focused design."
            />
            <ApproachItem
              title="Easy to manage"
              text="Webflow or custom code  builds that are simple to update."
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
                  <p className="text-sm font-medium">Project snapshot</p>
                  <p className="mt-1 text-xs text-zinc-300">What you can expect</p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  7–14 days
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                <CardLine label="Strategy + structure" value="Clear plan" />
                <CardLine label="Design system" value="Consistent UI" />
                <CardLine label="Performance" value="Fast & clean" />
                <CardLine label="Launch support" value="Smooth handoff" />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-medium">Outcome</p>
                <p className="mt-1 text-xs text-zinc-300">
                  A premium site that builds trust and makes it easy for clients to take action.
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



