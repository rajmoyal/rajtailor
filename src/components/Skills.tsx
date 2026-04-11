"use client";
import { siteData } from "@/data/siteData";

const colorMap: Record<string, string> = {
  blue:   "from-accent-blue/20 to-accent-blue/5 border-accent-blue/20 hover:border-accent-blue/50",
  purple: "from-accent-purple/20 to-accent-purple/5 border-accent-purple/20 hover:border-accent-purple/50",
  cyan:   "from-accent-cyan/20 to-accent-cyan/5 border-accent-cyan/20 hover:border-accent-cyan/50",
};

const tagColorMap: Record<string, string> = {
  blue:   "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  purple: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  cyan:   "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
};

const headingColorMap: Record<string, string> = {
  blue:   "text-accent-blue",
  purple: "text-accent-purple",
  cyan:   "text-accent-cyan",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-bg-primary relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent-blue" />
          <span className="text-accent-blue text-xs font-mono tracking-widest uppercase">Tech Stack</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-slate-500 mb-16 max-w-xl text-[15px]">
          Technologies and tools I use to build modern, scalable applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.skills.map(({ category, icon, color, items }) => (
            <div
              key={category}
              className={`relative rounded-2xl p-6 bg-gradient-to-b ${colorMap[color] || colorMap.blue} border transition-all duration-300 group cursor-default`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{icon}</span>
                <span className={`font-bold text-sm ${headingColorMap[color] || headingColorMap.blue}`}>
                  {category}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className={`tech-tag px-2.5 py-1 rounded-lg border text-xs font-mono ${tagColorMap[color] || tagColorMap.blue}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Corner glow */}
              <div
                className={`absolute bottom-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  color === "blue" ? "bg-accent-blue/20" : color === "purple" ? "bg-accent-purple/20" : "bg-accent-cyan/20"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Also comfortable with */}
        <div className="mt-12 glass rounded-2xl border border-white/5 p-6">
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Also comfortable with</p>
          <div className="flex flex-wrap gap-2">
            {["Sass/SCSS", "Axios", "Redux Toolkit", "Laravel Sanctum", "Eloquent ORM", "Socket.io", "Webpack", "Vite", "PM2", "GitHub Actions"].map(item => (
              <span
                key={item}
                className="tech-tag px-3 py-1.5 rounded-lg glass border border-white/10 text-slate-500 text-xs font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
