"use client";
import { siteData } from "@/data/siteData";
import { Code2, Layers, Zap } from "lucide-react";

const icons = [<Code2 size={20} />, <Layers size={20} />, <Zap size={20} />];

export default function About() {
  return (
    <section id="about" className="py-28 bg-bg-secondary relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent-blue" />
          <span className="text-accent-blue text-xs font-mono tracking-widest uppercase">About Me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Who I <span className="gradient-text">Am</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <div className="space-y-5">
              {siteData.about.bio.map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-[15px]">
                  {para}
                </p>
              ))}
            </div>

            {/* Stack chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["MERN Stack", "Laravel", "Vue.js", "REST APIs", "Docker", "Git"].map(skill => (
                <span
                  key={skill}
                  className="tech-tag px-3 py-1.5 rounded-lg glass border border-white/10 text-slate-400 text-xs font-mono cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats + cards */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {siteData.about.highlights.map(({ label, value }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-5 border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
                >
                  <div className="text-3xl font-extrabold gradient-text group-hover:scale-105 transition-transform origin-left">
                    {value}
                  </div>
                  <div className="text-slate-500 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Feature cards */}
            {[
              {
                icon: icons[0],
                title: "Clean Code",
                desc: "I write readable, maintainable code following best practices and design patterns.",
                color: "blue",
              },
              {
                icon: icons[1],
                title: "Full-Stack Thinking",
                desc: "From DB schema to pixel-perfect UI - I handle the complete product lifecycle.",
                color: "purple",
              },
              {
                icon: icons[2],
                title: "Performance First",
                desc: "Optimized builds, lazy loading, and efficient queries - speed matters.",
                color: "cyan",
              },
            ].map(({ icon, title, desc, color }) => (
              <div
                key={title}
                className="glass rounded-xl p-4 border border-white/5 hover:border-white/15 transition-all duration-300 flex gap-4 items-start group"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    color === "blue"   ? "bg-accent-blue/10 text-accent-blue"     :
                    color === "purple" ? "bg-accent-purple/10 text-accent-purple" :
                                        "bg-accent-cyan/10 text-accent-cyan"
                  } group-hover:scale-110 transition-transform`}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
