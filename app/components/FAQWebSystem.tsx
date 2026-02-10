"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  
  {
    question: "What happens when i purchase the website system setup?",
    answer:
      "After purchasing, we schedule a consultation to define your goals, structure and best long-term approach.Once aligned, we design and built the full website system and prepare it for hand-off.",
  },
  {
    question: "Is this a one-time built or a subscription?",
    answer:
      "This is a one-time build with a full hand-off.There is no ongoing subscription required, unless you choose optional maintenance later.",
  },
  {
    question: "Can i manage and update the website myself?",
    answer:
      "Yes. The system is built with CMS content blocks, to easily update and expand your site, We also  going to provide documentation files to help you manage it.",
  },
  {
    question: "What if i need help after hand-off?",
    answer:
      "Ongoing support and maitntenance can be added later if needed.You are never locked in, but support is avaliable when required",
  },
  
];

export default function FAQWebSystem() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 pt-2 pb-10 md:py-20">
      <div className="mb-10 text-center">
        <p className="text-xs font-medium text-zinc-400">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold text-white tracking-tight md:text-4xl">
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
                <span className="font-medium text-zinc-400">{faq.question}</span>
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
                 "mt-3 text-sm text-zinc-400 leading-relaxed",
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