"use client";
import { useState, useEffect } from "react";
import { siteData } from "@/data/siteData";
import { Download, Menu, X } from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map(n => document.getElementById(n.toLowerCase()));
      let current = "";
      sections.forEach(s => {
        if (s && window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xs font-bold text-white shadow-glow-blue">
            RT
          </span>
          <span className="font-semibold text-white group-hover:text-accent-blue transition-colors">
            Raj Tailor
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === item.toLowerCase()
                    ? "text-accent-blue bg-accent-blue/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {/* <div className="hidden md:flex items-center gap-3">
          <a
            href={siteData.resume}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-accent-blue/40 text-accent-blue text-sm font-medium hover:bg-accent-blue/10 transition-all duration-200 group"
          >
            <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            Resume
          </a>
        </div> */}

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-bg-secondary/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {item}
            </a>
          ))}
          {/* <a
            href={siteData.resume}
            download
            className="mt-2 flex items-center gap-2 px-4 py-3 rounded-lg border border-accent-blue/40 text-accent-blue text-sm font-medium"
          >
            <Download size={14} /> Download Resume
          </a> */}
        </div>
      </div>
    </header>
  );
}
