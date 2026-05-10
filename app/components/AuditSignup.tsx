"use client";
import { useState } from "react";

export default function AuditSignup() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, url }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setUrl("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative bg-[#070815] px-6 md:pt-20 pt-12 md:pb-8 pb-6 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold text-fuchsia-300 uppercase tracking-widest mb-6">
          Free Audit
        </span>

        <h2 className="text-3xl font-black tracking-tight text-white mb-4">
          Get a Free Website Audit
        </h2>

        <p className="text-zinc-400 text-sm leading-relaxed max-w-lg mx-auto mb-10">
          We will tell you exactly what is holding your website back — speed, SEO, design, conversions. No pitch, no obligation. Just honest feedback.
        </p>

        {status === "success" ? (
          <div className="rounded-sm border border-fuchsia-500/20 bg-fuchsia-500/10 px-8 py-6">
            <p className="text-white font-semibold text-lg">Request received! 🎉</p>
            <p className="text-zinc-400 text-sm mt-2">We will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-fuchsia-500/50 transition-colors"
              />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yoursite.com"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-fuchsia-500/50 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-fuchsia-600 px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Request free audit →"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
            )}

            <p className="text-zinc-500 text-xs mt-3">
              🔒 We reply within 24 hours. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

