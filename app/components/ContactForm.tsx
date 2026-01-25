"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot (spam protection)
    if (fd.get("company")) return;

    const payload = Object.fromEntries(fd.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      form.reset();
      alert("Sent!");
    } else {
      const data: { error?: string } = await res.json().catch(() => ({}));
      alert(data.error || "Something went wrong.");
    }
  }

  return (
    <form className="mt-5 space-y-3" onSubmit={onSubmit}>
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="text-[11px] text-white/45">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/20"
          />
        </div>

        <div>
          <label className="text-[11px] text-white/45">Email</label>
          <input
            name="email"
            required
            type="email"
            placeholder="you@company.com"
            className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/20"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <select
          name="projectType"
          defaultValue="website"
          className="mt-1 w-full appearance-none cursor-pointer rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm text-white outline-none focus:border-white/20"
        >
          <option value="website">Website</option>
          <option value="landing">Landing page</option>
        </select>

        <select
          name="timeline"
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
        <label className="text-[11px] text-white/45">Short note (optional)</label>
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
          href="https://calendly.com/mitrevdarko/30min"
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-sm transition-all duration-300 ease-out hover:from-fuchsia-600 hover:to-indigo-600 hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)] hover:-translate-y-[1px] active:translate-y-0"
        >
          Book a call
        </a>
      </div>

      <p className="text-center text-xs text-white/40">Just a conversation</p>
    </form>
  );
}
