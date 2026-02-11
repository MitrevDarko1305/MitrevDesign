"use client"

import Link from "next/link"

export default function LandingPageMockup() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* Hero */}
      <div className=" mx-auto min-w-0 overflow-hidden max-w-6xl text-center md:text-left px-8 py-4 sm:py-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-4xl">
            Focused landing page
            <br className="hidden sm:block" />
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            A fast, conversion-focused landing page to launch, test, and capture leads — without committing to a full website system.
          </p>

          <div className="mt-10 justify-center md:justify-start flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://buy.stripe.com/14A6oJ8d59Jj7pMf7O1ck0d" target="_blank"
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-center text-sm font-medium text-white shadow-sm hover:opacity-95
              transition-all duration-300 ease-out
              hover:from-fuchsia-600 hover:to-indigo-600
              hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
              hover:-translate-y-[1px]
              active:translate-y-0"
            >
              Start your landing page
            </Link>

            <Link
              href="https://omnifood.mitrevdarko.dev" target="_blank"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              View Demo
            </Link>
          </div>
          <p className="mt-4 text-zinc-400 text-sm">After checkout, you’ll receive a confirmation email and we’ll schedule a short consultation to get started.</p>
           <p className="mt-4  text-[13px] text-zinc-200 border border-zinc-700 rounded-full py-1 px-3 inline-block">Complete landing page project – 599€</p>
        </div>

        {/* Mockup */}
        <div className="mt-0   grid place-items-center lg:mt-0">
          <img
            src="/Projects-Images/MitrevDesign-Mockup.png"
            alt="Landing page preview"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Floating card */}
      <div className="relative z-10 text-center md:text-left mx-auto -mt-24 max-w-6xl bg-[#0a0a0f] px-6 pb-16 sm: -mt-24
  ">
        <div className="rounded-3xl border border-white/10  p-6 md:p-8 shadow-2xl bg-[#14141f]
  ">
          <h2 className="text-2xl text-center md:text-left font-semibold tracking-tight text-white">
            What's included 
          </h2>

         
          <p className="mt-4 max-w-2xl text-white/70">
             – A streamlined landing page, built with efficiency and structured to grow when needed.
          </p>
          <p className="mt-1 max-w-2xl text-white/70">
          – Clear layout designed to guide visitors without unnecessary complexity.
          </p>
          <p className="mt-1 max-w-2xl text-white/70">
          – Clean, maintainable code delivered without wasted time or overhead.
          </p>
          <p className="mt-1 max-w-2xl text-white/70">
          – Optimized for speed, responsiveness, and reliability.
          </p>
        </div>
      </div>
    </section>
  )
}
