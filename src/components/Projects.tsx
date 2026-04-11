"use client";
import { useState } from "react";
import { siteData } from "@/data/siteData";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent-purple" />
          <span className="text-accent-purple text-xs font-mono tracking-widest uppercase">Portfolio</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Selected <span className="gradient-text-2">Work</span>
            </h2>
            <p className="text-slate-500 text-[15px] max-w-md">
              A curated selection of projects showcasing my full-stack capabilities.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteData.projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden cursor-default ${
                hovered === project.id
                  ? "border-white/20 shadow-2xl scale-[1.01]"
                  : "border-white/5 hover:border-white/15"
              }`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-500 ${hovered === project.id ? "opacity-100" : "opacity-60"}`} />
              <div className="absolute inset-0 bg-bg-card/80 backdrop-blur-sm" />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
                style={{
                  background: `linear-gradient(to right, transparent, ${project.accent}60, transparent)`,
                  opacity: hovered === project.id ? 1 : 0,
                }}
              />

              <div className="relative p-7">
                {/* Project number & links */}
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-4xl font-bold text-white/5">
                    0{project.id}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-4">
                  <div className="text-xs font-mono text-slate-500 mb-1">{project.subtitle}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors flex items-center gap-2">
                    {project.name}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                    />
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-white/10 text-slate-400 glass"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects link */}
        {/* <div className="mt-12 text-center">
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-400 text-sm font-medium hover:text-white hover:border-accent-purple/40 transition-all duration-300"
          >
            <Github size={16} />
            View more on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div> */}
      </div>
    </section>
  );
}
