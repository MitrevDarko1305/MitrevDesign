
// components/blog/BlogArticle.tsx

export default function SetupMaintenanceTextDescription() {
  return (
    <article className=" text-[17px] bg-[#0b0615] leading-tight lg:text-start text-center  px-0  pt-8 pb-24 md:pb-20 md:pt-4 px-0 ">
    <div className="max-w-7xl md:px-10 px-4 mx-auto">
      <div className=" max-w-3xl mx-auto lg:mx-0  space-y-16 leading-relaxed  text-[17px]">
      {/* Section 1 */}
      <section className="space-y-4 ">
        <header className="text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-white mb-6">Managed Website System</h1>
        </header>
        <div className="space-y-1">
          <h2 className="text-md font-bold text-white  lg:text-left text-center">
          A fully built, hosted, and maintained website — designed for long-term performance and growth.
          </h2>
      <div className=" text-md space-y-1">
        <p className="leading-normal text-[15px]  text-zinc-400">
       Instead of a large upfront investment, you join a structured monthly plan where everything is handled for you: design, development, hosting, updates, and ongoing improvements.
        </p>

        <p className="pt-6 md:pt-6 text-[15.5px] font-bold text-white ">
          Every partnership begins with a short consultation to define:
        </p>

        <ul className="space-y-1 pl-5 text-zinc-400 text-[15px] leading-tight list-none lg:list-disc">
          <li className="">What are you trying to achieve with the website</li>
          <li className="">How it should look feel and function</li>
          <li className="">What setup will scale best long-term</li>
        </ul>

       <p className="text-[15px] text-zinc-400 pt-6"> Each Setup & Maintenance project is adapted per business. Structure, design, and features are tailored to your content, goals, and workflow — and we continuously maintain the system as your needs evolve.</p>

        <p className="text-[15px] text-zinc-400">
          Once live, we stay involved — handling updates, fixes, and improvements to ensure the website keeps performing and scaling without requiring internal management.
        </p>
        <div className="flex gap-2">
        <p className="mt-6 text-sm  text-zinc-200 border border-zinc-700 rounded-full py-1 px-3 inline-block">
         Setup from €599 
        </p>
        <p className="mt-6 text-sm  text-zinc-200 border border-zinc-700 rounded-full py-1 px-3 inline-block">
          •  12-month minimum commitment
        </p>
        </div>
         <p className="mt-2 text-sm  text-zinc-200 border border-zinc-700 rounded-full py-1 px-3 inline-block">
          Monthly subscription starts at 49€/month after setup
        </p>
        
        </div>
        </div>
      </section>

      
      </div>
      </div>
    </article>
  );
}