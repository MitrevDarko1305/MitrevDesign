"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Linkedin, Instagram, Github } from "lucide-react";
import VideoModal from "../components/VideoModal";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
};

const TEAM: TeamMember[] = [
  {
    name: "Darko Mitrev",
    role: "Founder - Design & Development",
    image: "/Projects-Images/Darko-team.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/darko-mitrev/",
      instagram: "https://www.instagram.com/mitrevdesign/",
      github: "https://github.com/MitrevDarko1305",
    },
  },
  {
    name: "Mike Tretyak",
    role: "Social Media Expert",
    image: "/Projects-Images/Mike-team.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/mykhailo-tretiak-0b903a319//",
      instagram: "https://www.instagram.com/miketretiakowski/",
    },
  },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function TeamSection() {
  const [openVideo, setOpenVideo] = useState(false);

  // IMPORTANT: use EMBED URL (not watch?v=)
  const overviewEmbedUrl =
    "https://www.youtube.com/embed/ey_-989yq6Y?autoplay=1&mute=1&rel=0";

  return (
    <section id="team" className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center md:text-left">
      <div className="mb-10 max-w-xxl">
        <p className="text-xs font-medium text-zinc-300">Team</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Small team. Full focus 
        </h2>
        <p className="mt-3 text-sm text-zinc-300/90 md:text-base">
          You’ll work directly with the people designing and building your
          website — no layers, no handoffs
        </p>
      </div>

      <div className="mx-auto grid max-w-[660px] gap-6 md:grid-cols-2 place-items-center">
        {TEAM.map((m) => (
          <div
            key={m.name}
            className="group max-w-[310px] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="aspect-[1/1] overflow-hidden">
              <img
                src={m.image}
                alt={m.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="p-5">
              <p className="text-lg font-medium">{m.name}</p>
              <p className="mt-1 text-sm text-zinc-300">{m.role}</p>

              {m.socials && (
                <div className="mt-4 flex items-center gap-2">
                  {m.socials.linkedin && (
                    <SocialIcon
                      href={m.socials.linkedin}
                      label={`${m.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </SocialIcon>
                  )}
                  {m.socials.instagram && (
                    <SocialIcon
                      href={m.socials.instagram}
                      label={`${m.name} on Instagram`}
                    >
                      <Instagram className="h-4 w-4" />
                    </SocialIcon>
                  )}
                  {m.socials.github && (
                    <SocialIcon
                      href={m.socials.github}
                      label={`${m.name} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </SocialIcon>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Optional video link (discrete) */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center justify-between  ">
        <p className="text-sm text-zinc-300">Prefer a quick introduction?</p>

        <button
          type="button"
          onClick={() => setOpenVideo(true)}
          className="mt-0 inline-flex text-sm font-medium text-violet-400 cursor-pointer hover:text-violet-300 transition-colors"
        >
          Watch a 60-second overview →
        </button>
      </div>

      {/* Modal (render once) */}
      <VideoModal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        title="Quick overview"
        videoUrl={overviewEmbedUrl}
      />
    </section>
  );
}




/* "use client";

import { Linkedin, Instagram, Github } from "lucide-react";

import VideoModal from "../components/VideoModal";



type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
};

const TEAM: TeamMember[] = [
  {
    name: "Darko Mitrev",
    role: "Founder - Design & Development",
    image: "/Projects-Images/Darko-team.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/darko-mitrev/",
      instagram: "https://www.instagram.com/mitrevdesign/",
      github: "https://github.com/MitrevDarko1305",
    },
  },
  {
    name: "Mike Tretyak",
    role: "Social Media Expert",
    image: "/Projects-Images/Mike-team.jpg",
    socials: {
       linkedin: "https://www.linkedin.com/in/mykhailo-tretiak-0b903a319//",
       instagram: "https://www.instagram.com/miketretiakowski/",
    },
  },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-[660px] max-w-3xl px-6 py-20">
      <div className="mb-10 max-w-xl">
        <p className="text-xs font-medium text-zinc-300">Team</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Small team Full focus.
        </h2>
        <p className="mt-3 text-sm text-zinc-300/90 md:text-base">
          You’ll work directly with the people designing and building your website — no layers, no handoffs.
        </p>
      </div>

      <div className="grid gap-6 mx-auto max-w-[660px] md:grid-cols-2">
        {TEAM.map((m) => (
          <div
            key={m.name}
            className="group max-w-[310px] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className=" aspect-[1/1]  overflow-hidden">
              <img
                src={m.image}
                alt={m.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="p-5">
              <p className="text-lg font-medium">{m.name}</p>
              <p className="mt-1 text-sm text-zinc-300">{m.role}</p>

              {m.socials && (
                <div className="mt-4 flex items-center gap-2">
                  {m.socials.linkedin && (
                    <SocialIcon href={m.socials.linkedin} label={`${m.name} on LinkedIn`}>
                      <Linkedin className="h-4 w-4" />
                    </SocialIcon>
                  )}
                  {m.socials.instagram && (
                    <SocialIcon href={m.socials.instagram} label={`${m.name} on Instagram`}>
                      <Instagram className="h-4 w-4" />
                    </SocialIcon>
                  )}
                  {m.socials.github && (
                    <SocialIcon href={m.socials.github} label={`${m.name} on GitHub`}>
                      <Github className="h-4 w-4" />
                    </SocialIcon>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm text-zinc-300">Prefer a quick introduction?</p>
        <a
          href="#intro-video"
          className="mt-2 inline-flex text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
        >
          Watch a 60-second overview →
        </a>
      </div>
    </section>
  );
}
  */




