"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  projectVideo?: string,
  projectImage: string;
  projectTitle: string;
  projectYear: string;
  projectDescription: string;
  projectTags: string[];
  projectUrl?: string
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function HighlightProjects({ projects = [] }: ProjectsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

    return (
  <section id="projects" className="md:py-20 bg-black overflow-hidden">
    
    {/* Header */}
    <div className="w-full pl-12 mx-auto px-6 md:mb-4 mb-8 flex items-end justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-wide text-white">Project Highlights</h2>
        <p className="text-white/50 mt-2 text-[14px]">Scroll to explore our work →</p>
      </div>
      <div className="flex gap-2 hidden md:flex">
       <button onClick={() => scroll(-1)} disabled={!canScrollLeft}
         className="w-9 h-9 rounded-full cursor-pointer border border-black/20 dark:border-white/20 flex items-center justify-center text-black dark:text-white disabled:opacity-20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
         <ChevronLeft size={18} />
       </button>
       <button onClick={() => scroll(1)} disabled={!canScrollRight}
        className="w-9 h-9 cursor-pointer rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center text-black dark:text-white disabled:opacity-20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
        <ChevronRight size={18} />
        </button>
      </div>
    </div>

    {/* Scroll track */}
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto pb-8 px-10 snap-x snap-mandatory scrollbar-hide"
      style={{ 
       scrollBehavior: "smooth"
      }}
    >
      {projects.map((project, index) => (
        <div key={index} className="snap-start shrink-0 w-[320px] md:w-[500px] lg:w-[500] mt-4">
          
          {/* Media */}
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
          <div className="w-full overflow-hidden pl-6 md:pl-0">
            {project.projectVideo ? (
              <video src={project.projectVideo} autoPlay loop muted playsInline className="w-full h-full object-cover block"/>
            ) : (
              <img src={project.projectImage} alt={project.projectTitle} className="w-full h-full object-cover block"/>
            )}
          </div>
          </a>

          {/* Info */}
          <div className="mt-8">
            <div className="flex items-center align-center mx-auto pl-12 justify-start gap-8 mb-1">
              <h3 className="text-white  font-bold text-lg">{project.projectTitle}</h3>
              <span className="text-purple-400 ml-9 text-sm">{project.projectYear}</span>
            </div>
            <p className="text-white/50 text-[12px] mb-2 pl-12">{project.projectDescription}</p>
            <div className="flex gap-2 flex-wrap pl-12">
              {project.projectTags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-black dark:bg-transparent dark:text-purple-400 text-[#f5f5f5] rounded-full text-xs border border-[#4F8EF7]/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>

  </section>
  );
}