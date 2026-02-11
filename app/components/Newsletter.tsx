"use client";

import { Sparkles } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative grid min-h-screen w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
        {/* Main content */}
        <div className="my-auto text-center">
          {/* Badge */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">
              Website System
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Something Extraordinary
            <br />
            Is Coming Soon
          </h1>

          {/* Description */}
          <p className="mx-auto mb-4 max-w-2xl text-lg text-white/80 md:text-xl">
            We’re building a flexible website system designed for clarity,
            performance, and long-term growth.
          </p>

          <p className="mb-8 text-base font-semibold text-white/90 md:text-lg">
            Join the waitlist for early access
          </p>

          {/* Email form */}
          <form
            className="mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="h-12 flex-1 rounded-md border border-white/20 bg-white/5 px-4 text-white backdrop-blur-sm placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:bg-white/10"
            />
            <button
              type="submit"
              className="h-12 rounded-md bg-white px-8 text-base font-semibold text-neutral-900 transition hover:bg-white/90 hover:shadow-xl"
            >
              Notify Me
            </button>
          </form>

          <p className="mt-6 text-sm text-white/60">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

        {/* Footer */}
        <div className="mb-20 mt-16 space-y-2 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white/80">About</a>
            <a href="#" className="hover:text-white/80">Contact</a>
            <a href="#" className="hover:text-white/80">Privacy</a>
          </div>
          <p className="text-sm font-medium text-white/60">
            © {new Date().getFullYear()} Your Studio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
