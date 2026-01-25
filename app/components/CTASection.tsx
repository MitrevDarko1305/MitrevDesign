
"use client";


import type { FormEvent } from "react";

export default function CTASection() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: wire this to your API route / email / CRM.
    // Example:
    // const formData = new FormData(e.currentTarget);
    // fetch("/api/lead", { method: "POST", body: formData });

    alert("Submitted (wire to /api/lead or your provider).");
  }

  return (
    <section id="book-a-call" className="relative bg-slate-950 py-12 md:py-36 overflow-hidden">
      {/* ambient section glow */}
      <div
    className="
      absolute right-[42%] top-[25%]
      h-[380px] w-[200px]
      rounded-full
      bg-gradient-to-br from-fuchsia-500/25 to-indigo-500/25
      blur-3xl
      z-10
    "
  />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-6">
            <p className="text-xs font-medium text-zinc-300 text-center md:text-left">
              Let&apos;s work together
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] md:leading-tight text-white text-center md:text-left">
              Websites{" "}
              <span className="bg-gradient-to-r from-fuchsia-300/80 to-indigo-300/80 bg-clip-text text-transparent">
                built
              </span>{" "}
              to <span>convert</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 text-center md:text-left">
              A short call to clarify scope, timing, and next steps.
            </p>

            <div className="mt-10 space-y-6">
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
                text="Webflow or custom code builds that are simple to update."
              />
            </div>
          </div>

          {/* RIGHT COLUMN — SNAPSHOT FORM */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* outer soft frame */}
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/0" />

              {/* outer card */}
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
                {/* inner card */}
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0b1f]/70 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Request a call
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                      30 min
                    </span>
                  </div>

                  <form onSubmit={onSubmit} className="mt-5 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                <label className="text-[11px] text-white/45">Name</label>
                <input
                  name="name"                // 👈 REQUIRED
                  required
                  placeholder="Your name"
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/20"
                />
              </div>

               <div>
                  <label className="text-[11px] text-white/45">Email</label>
                 <input
                   name="email"               // 👈 REQUIRED
                   required
                   type="email"
                   placeholder="you@company.com"
                   className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/20"
                  />
                </div>
              </div>


                    <div className="grid gap-3 sm:grid-cols-2">
                     <select
                      name="projectType"          // 👈 REQUIRED
                      defaultValue="website"
                      className="mt-1 w-full appearance-none cursor-pointer rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm text-white outline-none focus:border-white/20"
                    >
                      <option value="website">Website</option>
                      <option value="landing">Landing page</option>
                    </select>


                      <select
                      name="timeline"             // 👈 REQUIRED
                      defaultValue="2-4w"
                      className="mt-1 w-full appearance-none cursor-pointer rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm text-white outline-none focus:border-white/20"
                    >
                     <option value="asap">ASAP</option>
                      <option value="2-4w">2–4 weeks</option>
                      <option value="1-2m">1–2 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    </div>

                    <div>
                      <label className="text-[11px] text-white/45">
                        Short note (optional)
                      </label>
                      <input
                        name="note"
                        placeholder="What do you need help with?"
                        className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/20"
                      />
                    </div>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="submit"
                        className="flex-1 rounded-2xl text-center border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                      >
                        Send request
                      </button>

                      <a
                        href="https://calendly.com/mitrevdarko/30min" target="blank"
                        className="flex-1 rounded-2xl  px-4 py-3 text-center text-sm font-semibold text-white
                         transition bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-sm transition-all duration-300 ease-out
    hover:from-fuchsia-600 hover:to-indigo-600
    hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
    hover:-translate-y-[1px]
    active:translate-y-0"
                      >
                        Book a call
                      </a>
                    </div>

                    <p className="text-center text-xs text-white/40">
                      Just a conversation
                    </p>
                  </form>
                </div>
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
