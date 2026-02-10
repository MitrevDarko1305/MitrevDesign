"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What happens after i start the subscription?",
    answer:
      "After you subscribe, we schedule a consultation to understand your goals, content, and requirements. From there, we begin setting up and building your website system.",
  },
  {
    question: "Can i cancel the setup after the initial consultation?",
    answer:
      "Yes. After the initial consultation, you can cancel the setup if you change your mind. In that case, a small portion of the setup fee is retained to cover the consultation and planning work, and the remainder is refunded.",
  },
  {
    question: "Do i own the website and content?",
    answer:
      "Yes. You fully own your website and it's content from day one after launch. The web-system is built for long-term independence.",
  },
  {
    question: "What's included in monthly maintenance?",
    answer:
      "Maintenance covers updates,fixes and improvements to ensure your website stays fast, secure, and up to date. We handle everything on your behalf so you can focus on your business.",
  },
   {
    question: "Is hosting included?",
    answer:
      "Hosting is not inlcuded, we help you choose, set up and connect reliable hosting option so you can stay in full control.",
  },
];

export default function FAQSetupMaintenance() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 pt-2 pb-10 md:py-20">
      <div className="mb-10 text-center">
        <p className="text-xs font-medium text-zinc-400">FAQ</p>
        <h2 className="mt-2 text-3xl text-white font-semibold tracking-tight md:text-4xl">
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
                "grid transition-[grid-template-rows] text-zinc-400 duration-500 ease-out",
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
