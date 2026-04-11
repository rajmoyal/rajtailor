import { siteData } from "@/data/siteData";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xs font-bold text-white">
                RT
              </span>
              <span className="font-bold text-white">Raj Tailor</span>
            </div>
            <p className="text-slate-600 text-xs font-mono">Full-Stack Developer · Jaipur, India</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-600 hover:text-accent-blue text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              // { href: siteData.github,               icon: <Github size={16} />,   label: "GitHub"   },
              { href: siteData.linkedin,             icon: <Linkedin size={16} />, label: "LinkedIn" },
              { href: `mailto:${siteData.email}`,   icon: <Mail size={16} />,     label: "Email"    },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-500 hover:text-accent-blue hover:border-accent-blue/30 transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-700 text-xs font-mono flex items-center justify-center gap-1.5">
            &copy; {new Date().getFullYear()} Raj Tailor · Built with
            <Heart size={10} className="text-red-500 fill-red-500" />
            in India
          </p>
        </div>
      </div>
    </footer>
  );
}
