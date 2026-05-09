"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";


export default function FAQSection() {
  const t = useTranslations('FAQ');
  const faqKeys = ['faq_1', 'faq_2', 'faq_3', 'faq_4', 'faq_5', 'faq_6', 'faq_7'];
  const faqs = faqKeys.map((key) => ({
    question: t(`${key}`),
    answer: t(`${key}_answer`)
  }));
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 pt-2 pb-10 md:py-10">
      <div className="mb-10 text-center">
        <p className="text-xs font-medium text-zinc-400">{t('faq_span')}</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
          {t('faq_title')}
        </h2>
        <p className="mt-3 text-sm text-zinc-400">
          {t('faq_desc')}
        </p>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left cursor-pointer md:rounded-sm rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-black text-white ">{faq.question}</span>
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
          {t('faq_span2')}
        </p>
        <a
          href="mailto:mitrevdaro@gmail.com"
          className="mt-2 inline-block text-sm font-medium text-violet-400 hover:text-violet-300 transition"
        >
          {t('faq_button')}
        </a>
      </div>
    </section>
  );
}
