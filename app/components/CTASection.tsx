"use client";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import { trackEvent } from "@/lib/analytics";

interface CTASectionProps {
  compact?: boolean;
}


export default function CTASection({ compact = false }: CTASectionProps) {
  const t = useTranslations('CTA')
  return (
    <section id="book-a-call"  className={`relative bg-slate-950 overflow-hidden ${compact ? 'md:pt-32 md:pb-12' : 'py-30 md:py-36'}`}>
      {/* ambient section glow */}
      <div className="absolute right-[42%] top-[25%] h-[380px] w-[200px] rounded-full bg-gradient-to-br from-fuchsia-500/25 to-indigo-500/25 blur-3xl z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-6">
            {/* ... left content unchanged ... */}
             <p className="text-xs font-medium text-zinc-300 text-center md:text-left">
              {t('cta_span')}
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[1.05] md:leading-tight text-white text-center md:text-left">
              {t('cta_title1')}{" "}
              <span className="bg-gradient-to-r from-fuchsia-300/80 to-indigo-300/80 bg-clip-text text-transparent">
                {t('cta_title_span')}
              </span>{" "}
              <span>{t('cta_title2')}</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 text-center md:text-left">
             {t('cta_desc')}
            </p>
             <div className="mt-10 space-y-6">
              <ApproachItem
                title={t('cta_approach_title1')}
                text={t('cta_approach_text1')}
              />
              <ApproachItem
                title={t('cta_approach_title2')}
                text={t('cta_approach_text2')}
              />
              <ApproachItem
                title={t('cta_approach_title3')}
                text={t('cta_approach_text3')}
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/0" />

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0b1f]/70 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-white">
                        {t('cta_right_span1')}
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                      {t('cta_right_span2')}
                    </span>
                  </div>

                  {/* ✅ THIS IS THE ONLY CHANGE */}
                  <ContactForm />

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
