type FooterProps = {
  workHref?: string;
};

export default function Footer( { workHref = "/work" }: FooterProps) {
  const isExternal = workHref.startsWith("http");
  return (
    <footer className="relative overflow-hidden bg-slate-950" id="footer">
      {/* ambient glow (match CTA) */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_60%_30%,rgba(139,92,246,0.14),transparent_60%)]" />

      {/* big background type */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-end">
        <p className="select-none px-6 pb-10 text-[clamp(56px,10vw,140px)] font-semibold leading-[0.9] tracking-tight text-white/8">
          SHAPING
          <br />
          DIGITAL
          <br />
          EXPERIENCES
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        {/* small premium overlay card */}
        <div className="max-w-3xl">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/0" />
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    Designing websites that earn trust
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    Available for new projects.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                

                 <a
                href={workHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-sm
                  transition-all duration-300 ease-out
                  hover:from-fuchsia-600 hover:to-indigo-600
                  hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
                  hover:-translate-y-[1px]
                  active:translate-y-0"
                  >
                 View our work
                </a>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                <span>© {new Date().getFullYear()} MitrevDesign. All rights reserved.</span>
                <span className="text-white/35">Built with Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
