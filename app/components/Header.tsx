
 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const hrefTo = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className="
        fixed w-full
        bg-[#070815]/60
        backdrop-blur-xl
        border-b border-white/10 z-50
      "
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        {/* Logo should go home */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-sm">
            M
          </span>
          <span>MitrevDesign</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <Link className="hover:text-violet-500 transition-colors duration-300" href={hrefTo("services")}>
            Services
          </Link>

          <Link className="hover:text-violet-500 transition-colors duration-300" href={hrefTo("projects-1")}>
            Projects
          </Link>

          <Link className="hover:text-violet-500 transition-colors duration-300" href={hrefTo("approach")}>
            About
          </Link>

          <Link className="hover:text-violet-500 transition-colors duration-300" href={hrefTo("team")}>
            Team
          </Link>

          <Link className="hover:text-violet-500 transition-colors duration-300" href={hrefTo("faq")}>
            FAQ
          </Link>

          <Link className="hover:text-violet-500 transition-colors duration-300" href={hrefTo("book-a-call")}>
            Contact
          </Link>
        </nav>

        <Link
          href={hrefTo("book-a-call")}
          className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95
          transition-all duration-300 ease-out
          hover:from-fuchsia-600 hover:to-indigo-600
          hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
          hover:-translate-y-[1px]
          active:translate-y-0"
        >
          Get a quote
        </Link>
      </div>
    </header>
  );
}
