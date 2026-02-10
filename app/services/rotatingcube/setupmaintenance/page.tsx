

import RotatingCubeExpandedPages from "@/app/Animations/SetupMaintenancePages";
import FAQSetupMaintenance from "@/app/components/FAQSetupMaintenance";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import RotatingCubePagesTextDescription from "@/app/components/SubscriptionSection/SetupMaintenanceTextDescription";
import Link from "next/link";



export default function SetupMaintenancePage() {
  return (
    <main>
        <Header/>
      <section className="pt-32 lg:pt-20 pb-16 relative overflow-hidden text-center lg:text-left">
         <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        {/*} <div className="pointer-events-none absolute top-40 right-[-180px] h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-[120px]" />
         
         {/* <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[120px]" /> }*/}
        <div className="mx-auto max-w-7xl px-4 md:px-10 ">
          <div className="grid items-center align-center grid-cols-1 gap-10 lg:grid-cols-2">
            {/* LEFT: copy */}
            <div >
              <p className="text-sm text-zinc-400">Service</p>

              <h1 className="mt-3 text-4xl text-white font-bold tracking-tight md:text-5xl">
                Built & Supported
              </h1>

              <p className="mt-4 max-w-xl text-zinc-400 mx-auto">
                We build your site and stay with you — maintenance and improvements included.
              </p>

              <div className="mt-8 flex flex-wrap lg:justify-start justify-center gap-3">
                <Link
                  href="https://buy.stripe.com/eVq00lalddZzfWi3p61ck0b" target="_blank"
                  className="rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                Start  setup
                </Link>

                  <a
                  href="https://smilo-care.mitrevdarko.dev" target="_blank"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-200 hover:border-white/25"
                >
                  View a real example
                </a>

               
              </div>

              <div className="mt-6 flex  flex-wrap lg:justify-start justify-center  gap-2 text-xs text-zinc-400">
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Typical timeline: 2–4 weeks
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Delivery: Initial setup – ongoing support
                </span>
              </div>
                <div className="pt-4" >
               <span className="rounded-full text-[10px] text-zinc-400 border border-white/10 px-3 ">
                Cancel anytime • Refund if not a good fit
              </span>
              </div>
            </div>

            {/* RIGHT: 3D */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl   p-4">
                <RotatingCubeExpandedPages  className="w-full h-[320px] md:h-[450px]"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RotatingCubePagesTextDescription/>
      <FAQSetupMaintenance/>
      <Footer/>

     
    </main>
  );
}