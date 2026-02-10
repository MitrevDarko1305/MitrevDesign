"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What happens after i start the maintenance  subscription?",
    answer:
      "After you subscribe, we review your site and align on ongoing goals, priorities and maintenance needs.",
  },
  {
    question: "Is there a long-term commitment?",
    answer:
      "No, maintenance is billed monthly and can be cancelled at any time.There are no long-term contracts, or hidden obligations.",
  },
  {
    question: "What it is included in monthly maintenance?",
    answer:
      "Maintenance includes updates, fixes and improvements to ensure your website stays fast, secure and up to date.Everything is handled on your behalf, without the need for internal technical management",
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
