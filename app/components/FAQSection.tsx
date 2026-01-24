"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take between 7–14 days depending on scope, content readiness, and feedback speed.",
  },
  {
    question: "Do you build with custom code or Webflow?",
    answer:
      "We choose the right approach per project — custom code for flexibility and performance, Webflow for speed and easy management.",
  },
  {
    question: "Can I update the website myself after launch?",
    answer:
      "Yes. We build sites to be easy to manage, either through Webflow CMS or clean, documented custom code.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "We offer optional post-launch support for updates, improvements, and long-term growth.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20">
      <div className="mb-10 text-center">
        <p className="text-xs font-medium text-zinc-400">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm text-zinc-400">
          Clear answers before we start working together.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-zinc-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>


            <div
                className={[
                "grid transition-[grid-template-rows] duration-500 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                 ].join(" ")}
                >
            <div className="overflow-hidden">
                 <p
                className={[
                 "mt-3 text-sm text-zinc-300 leading-relaxed",
                "transition-opacity duration-500 ease-out",
                isOpen ? "opacity-100" : "opacity-0",
                 ].join(" ")}
                 >
                 {faq.answer}
                </p>
            </div>
        </div>

            </button>
          );
        })}
      </div>

      {/* Discrete email CTA */}
      <div className="mt-10 text-center">
        <p className="text-sm text-zinc-400">
          Still have questions?
        </p>
        <a
          href="mailto:mitrevdaro@gmail.com"
          className="mt-2 inline-block text-sm font-medium text-violet-400 hover:text-violet-300 transition"
        >
          Send a quick email →
        </a>
      </div>
    </section>
  );
}
