import Link from "next/link";

import Header from "../components/Header";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";



const PROJECTS = [
  {
    title: "Omnifood",
    description: "Order your food with simple click",
    tag: "Concept Project",
    image: "/Projects-Images/Omnifood-Project-2.png",
    href: "https://omnifood.mitrevdarko.dev",
  },
  {
    title: "Fitness Landing Page",
    description: "Interactive personal trainer portfolio",
    tag: "Client Project",
    image: "/Projects-Images/MikeXForce-Project.png",
    href: "https://mikexforce.mitrevdarko.dev",
  },
  {
    title: "Music Band Website",
    description: "Client website for a live band",
    tag: "Client Project",
    image: "/Projects-Images/Classico-Band-Project.png",
    href: "https://classico-band.mitrevdarko.dev",
  },

   {
    title: "Texas Steakhouse",
    description: "Bold - smoky steakhouse concept",
    tag: "Concept Project",
    image: "/Projects-Images/Texas-Project.png",
    href: "https://texas-steakhouse.mitrevdarko.dev",
  },

   {
    title: "Siayvo",
    description: "Website concept for a glamour beauty studio",
    tag: "Concept Project",
    image: "/Projects-Images/Siayvo-Project-2.png",
    href: "https://siayvo.mitrevdarko.dev",
  },

   {
    title: "Aegis Security",
    description: "High-end website concept for security firm.",
    tag: "Concept Project",
    image: "/Projects-Images/Aegis-Project.png",
    href: "https://aegis-sicherheit.mitrevdarko.dev/",
  },
  // add more here...
];

export default function WorkPage() {
  return (
    <>
      <Header />
    <main className="mx-auto bg-[#070815] max-w-[1120px] px-6 py-20" id="projects"> 
      <div className="mb-10">
        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ← Back
        </Link>

        <h1 className="mt-4 text-3xl font-medium  tracking-tight text-white">
          Selected Projects
        </h1>
        <p className="mt-2 max-w-xl text-white/60">
          A broader selection of projects, templates, and concepts.
        </p>
      </div>

      {/* Denser grid than homepage */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20"
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

     <CTASection/>
     <Footer  workHref="#projects" />

      </> 
  );
}

