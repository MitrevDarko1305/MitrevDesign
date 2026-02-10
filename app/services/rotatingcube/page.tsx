
import  RotatingCubeHero  from "@/app/Animations/RotatingCubePages";
import FAQWebSystem from "@/app/components/FAQWebSystem";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import WebSystemTextDescription from "@/app/components/SubscriptionSection/WebSystemTextDescription";

import Link from "next/link";

export default function WebsiteSystemPage() {
  return (
    <main>
        <Header/>
      <section className="pt-38 lg:pt-20 pb-12 relative overflow-hidden text-center lg:text-left">
         <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      
        <div className="mx-auto max-w-7xl px-4 md:px-10 ">
          <div className="grid items-center align-center grid-cols-1 gap-10 lg:grid-cols-2">
            {/* LEFT: copy */}
            <div >
              <p className="text-sm text-zinc-400">Service</p>

              <h1 className="mt-3  text-4xl font-bold tracking-tight md:text-5xl">
                Website system
              </h1>

              <p className="mt-4 max-w-xl text-zinc-300 mx-auto">
                CMS-powered foundation — fast, scalable, and ready to customize
                as your business grows.
              </p>

              <div className="mt-8 flex flex-wrap lg:justify-start justify-center gap-3">
                <Link
                  href="https://buy.stripe.com/5kQ3cx50TbRr11obVC1ck0a" target="_blank"
                  className="rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                  Purchase CMS system
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
                  Delivery: One time build & hand-off
                </span>
              </div>
            </div>

            {/* RIGHT: 3D */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl   p-4">
                <RotatingCubeHero className="w-full h-[320px] md:h-[420px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WebSystemTextDescription/>
      <FAQWebSystem/>
      <Footer/>

      {/* Next sections */}
      <section id="included" className="pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          {/* what’s included grid etc */}
        </div>
      </section>
    </main>
  );
}
