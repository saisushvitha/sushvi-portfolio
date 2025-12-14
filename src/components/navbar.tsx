import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${scrolled
          ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-md"
          : "bg-white shadow-sm"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 text-ink-900 font-extrabold tracking-wide">
          <img src="/logo.png" alt="logo" className="h-10 w-10 rounded-md object-cover" />
          <span>PORTFOLIO</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-ink-500">
          {links.map(l => (
            <li key={l.href}><a className="hover:text-ink-700" href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        {/* Hire Me button */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600"
        >
          Hire Me! <span className="ml-1">»</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <div className="space-y-[5px]">
            <span className={`block h-0.5 w-5 bg-ink-900 transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink-900 transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink-900 transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <ul className="max-w-7xl mx-auto px-4 py-4 grid gap-3 text-ink-700">
            {links.map(l => (
              <li key={l.href}><a className="block py-2" href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-max px-4 py-2 rounded-xl bg-teal-500 text-white font-semibold">Hire Me! »</a>
          </ul>
        </div>
      )}
    </header>
  );
}
