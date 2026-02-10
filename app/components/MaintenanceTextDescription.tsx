
// components/blog/BlogArticle.tsx

export default function MaintenanceTextDescription() {
  return (
    <article className=" text-[17px] bg-[#0b0615] leading-tight lg:text-start text-center text-foreground px-0  pt-8 pb-24 md:pb-20 md:pt-4 px-0 ">
    <div className="max-w-7xl md:px-10 px-4 mx-auto">
      <div className=" max-w-3xl mx-auto lg:mx-0  space-y-16 leading-relaxed text-foreground text-[17px]">
      {/* Section 1 */}
      <section className="space-y-4 ">
        <header className="text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-foreground mb-6">Website & Maintenance</h1>
        </header>
        <div className="space-y-1">
          <h2 className="text-md font-bold text-foreground lg:text-left text-center">
          Ongoing website maintenance services
          </h2>
      <div className=" text-md space-y-1">
        <p className="leading-normal text-[15px]  text-foreground/50">
        Your website is continuously maintained to ensure long-term performance, security, and stability. We handle CMS updates, monitoring, optimizations, and improvements on an ongoing basis, keeping everything running smoothly without interruptions or surprises.
        </p>

        <p className="pt-6 md:pt-6  text-[15px] font-bold">
          After you subscribe, we begin with a consultation to understand:
        </p>

        <ul className="space-y-1 pl-5 text-foreground/50 text-[15px] leading-tight list-none lg:list-disc">
          <li className="">Your current website state, goals and ongoing needs</li>
          <li className="">Decide how the site will be maintained, how to function and evolve moving forward</li>
        </ul>

       <p className="text-[15px] text-foreground/50 pt-6"> Each Setup & Maintenance project is adapted per business. Structure, design, and features are tailored to your content, goals, and workflow — and we continuously maintain the system as your needs evolve.</p>

        <p className="text-[15px] text-foreground/50">
          Each Maintenance project is tailored to your business. Updates, structure adjustments, and feature improvements are aligned with your content, workflow, and priorities — and the system is continuously maintained as those needs change.
        </p>
        <p className="mt-6 text-sm  text-foreground/80 border border-foreground/30 rounded-full py-1 px-3 inline-block">
        Monthly maintenance and support from €199 • cancel anytime
        </p>
        
        </div>
        </div>
      </section>

      
      </div>
      </div>
    </article>
  );
}