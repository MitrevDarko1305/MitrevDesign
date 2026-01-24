"use client";

import { useEffect } from "react";

type VideoModalProps = {
  open: boolean;
  title?: string;
  videoUrl: string; // must be an embed URL
  onClose: () => void;
};

export default function VideoModal({
  open,
  title = "Overview",
  videoUrl,
  onClose,
}: VideoModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* overlay */}
      <button
        aria-label="Close video"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* modal */}
      <div className="relative mx-auto mt-16 w-[min(980px,92vw)] pb-10">
        {/* subtle glow */}
        <div className="pointer-events-none absolute right-[12%] top-[10%] -z-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-fuchsia-500/25 to-indigo-500/25 blur-3xl" />

        {/* double-frame */}
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/0" />

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0b1f]/70 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="mt-1 text-xs text-white/45">
                  Press Esc or click outside to close
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10 transition"
              >
                Close
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={videoUrl}
                  title={title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-white/40">
              60 seconds. High-level overview.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
