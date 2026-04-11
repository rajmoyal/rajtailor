"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteData } from "@/data/siteData";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "Laravel + Vue.js Dev",
  "UI Craftsman",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">

      {/* Background grid */}
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-100" />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">

        {/* Text side */}
        <div className={`flex-1 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow mb-8 text-xs font-medium text-accent-blue">
            <Sparkles size={12} className="animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Raj Tailor</span>
          </h1>

          {/* Typewriter role */}
          <div className="h-10 mb-6 flex items-center">
            <span className="text-xl md:text-2xl font-mono text-slate-400">
              &lt;
              <span className="text-accent-cyan">{displayed}</span>
              <span className="animate-pulse text-accent-blue">|</span>
              /&gt;
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10"
            style={{ transitionDelay: "300ms" }}
          >
            {siteData.tagline}. Specializing in{" "}
            <span className="text-accent-blue font-medium">MERN Stack</span> and{" "}
            <span className="text-accent-purple font-medium">Laravel + Vue.js</span> to
            turn ideas into production-ready applications.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:shadow-glow-blue hover:scale-105 transition-all duration-300"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:border-accent-blue/50 hover:bg-accent-blue/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              // { href: siteData.github,   icon: <Github size={18} />,   label: "GitHub"   },
              { href: siteData.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn" },
              { href: `mailto:${siteData.email}`, icon: <Mail size={18} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-blue hover:border-accent-blue/40 hover:bg-accent-blue/10 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar side */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-accent-blue/30 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute inset-4 rounded-full border border-dashed border-accent-purple/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />

            {/* Glow bg */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 blur-xl" />

            {/* Avatar container */}
            <div className="absolute inset-8 rounded-full glass border-glow flex items-center justify-center animate-float overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Raj Tailor"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              {/* <div className="text-center">
                <div className="text-6xl font-extrabold gradient-text leading-none">RT</div>
                <div className="text-xs text-slate-500 font-mono mt-2 tracking-widest">DEV</div>
              </div> */}
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-4 px-3 py-1.5 rounded-lg glass border border-accent-blue/30 text-xs font-mono text-accent-blue animate-float" style={{ animationDelay: "1s" }}>
              React ⚛️
            </div>
            <div className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg glass border border-accent-purple/30 text-xs font-mono text-accent-purple animate-float" style={{ animationDelay: "2s" }}>
              Laravel 🔴
            </div>
            <div className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg glass border border-accent-cyan/30 text-xs font-mono text-accent-cyan animate-float" style={{ animationDelay: "0.5s" }}>
              Node.js 🟢
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-accent-blue transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
