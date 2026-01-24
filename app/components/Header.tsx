
 export default function Header() {
  return (
    <header className="
    fixed  w-full
    bg-[#070815]/60
    backdrop-blur-xl
    border-b border-white/10 z-50
  ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-sm">
            M
          </span>
          <span>MitrevDesign</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a className="hover:text-violet-500  transition-colors duration-300" href="#services">
            Services
          </a>
          <a className="hover:text-violet-500 transition-colors duration-300" href="#work">
            Projects
          </a>
          <a className="hover:text-violet-500  transition-colors duration-300 " href="#process">
            About
          </a>
          <a className="hover:text-violet-500 transition-colors duration-300" href="#pricing">
            Team 
          </a>
          <a className="hover:text-violet-500 transition-colors duration-300" href="#faq">
            FAQ
          </a>
          <a className="hover:text-violet-500 transition-colors duration-300" href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95
          transition-all duration-300 ease-out
    hover:from-fuchsia-600 hover:to-indigo-600
    hover:shadow-[0_10px_30px_rgba(168,85,247,0.20)]
    hover:-translate-y-[1px]
    active:translate-y-0"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}