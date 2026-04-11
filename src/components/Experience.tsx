"use client";
import { siteData } from "@/data/siteData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-bg-primary relative overflow-hidden">
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent-cyan" />
          <span className="text-accent-cyan text-xs font-mono tracking-widest uppercase">Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-slate-500 mb-16 max-w-md text-[15px]">
          A timeline of my professional journey and learning milestones.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-1/2" />

          <div className="space-y-12">
            {siteData.experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent-blue border-2 border-bg-primary md:-translate-x-1/2 -translate-x-1/2 mt-1 z-10 shadow-glow-blue" />

                  {/* Spacer for desktop centering */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 flex-1 glass rounded-2xl border border-white/5 p-6 hover:border-accent-blue/30 transition-all duration-300 group ${
                      isLeft ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-mono mb-4">
                      <Briefcase size={10} />
                      {exp.year}
                    </div>

                    <h3 className="text-white font-bold text-lg mb-0.5 group-hover:text-accent-blue transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-accent-blue text-sm font-medium mb-3">{exp.company}</div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map(t => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-xs font-mono glass border border-white/10 text-slate-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
