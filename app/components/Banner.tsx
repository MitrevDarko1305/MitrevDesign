"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const t = useTranslations("Banner");
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-[60] flex items-center justify-center gap-3 px-4 py-6 bg-[#0a0b1f] border-b border-fuchsia-500/20 flex-wrap">
      <span className="bg-fuchsia-500/15 text-fuchsia-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-fuchsia-500/20 whitespace-nowrap">
        {t("badge")}
      </span>
      <p className="text-white/80 text-sm text-center">
        {t("text")}{" "}
        <span className="text-white font-semibold">{t("highlight")}</span>
      </p>
      <a
        href="https://calendly.com/mitrevdarko/30min"
        target="_blank"
        rel="noopener noreferrer"
       className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white text-xs font-black px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
      >
     {t("cta")}
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute cursor-pointer top-6 md:top-8 right-6 lg:right-8 md:right-8 text-white/40 hover:text-white/70 transition-colors text-lg leading-none"
      >
        <X size={14} />
      </button>
    </div>
  );
}