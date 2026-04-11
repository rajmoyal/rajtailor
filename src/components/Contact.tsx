"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { siteData } from "@/data/siteData";
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [error, setError]   = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const serviceId = process.env.EMAILJS_SERVICE_ID as string;
    const templateId = process.env.EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY as string;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 4000);

    } catch (err) {
      console.error(err);
      setError("Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="py-28 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent-blue" />
          <span className="text-accent-blue text-xs font-mono tracking-widest uppercase">Contact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-slate-500 mb-16 max-w-md text-[15px]">
          Have a project in mind or want to chat? I'm always open to new opportunities and collaborations.
        </p>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: siteData.email,
                href: `mailto:${siteData.email}`,
                color: "blue",
              },
              {
                icon: <Linkedin size={18} />,
                label: "LinkedIn",
                value: "Connect with me",
                href: siteData.linkedin,
                color: "purple",
              },
              // {
              //   icon: <Github size={18} />,
              //   label: "GitHub",
              //   value: "View my repositories",
              //   href: siteData.github,
              //   color: "cyan",
              // },
            ].map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl border border-white/5 p-5 hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
                    color === "blue"   ? "bg-accent-blue/10 text-accent-blue"     :
                    color === "purple" ? "bg-accent-purple/10 text-accent-purple" :
                                        "bg-accent-cyan/10 text-accent-cyan"
                  }`}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">{label}</div>
                  <div className="text-white text-sm font-medium mt-0.5 group-hover:text-accent-blue transition-colors">{value}</div>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass rounded-2xl border border-accent-blue/20 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono font-medium">Available for Work</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Open to freelance projects, full-time roles, and exciting collaborations.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl border border-white/5 p-7">
              <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-white/10 text-white placeholder-slate-600 text-sm outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-white/10 text-white placeholder-slate-600 text-sm outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">Message *</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-white/10 text-white placeholder-slate-600 text-sm outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-mono">{error}</p>
                )}

                <button
                  onClick={handleSubmit}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    sent
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : "bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:shadow-glow-blue hover:scale-[1.01]"
                  }`}
                >
                  {sent ? (
                    <>
                      <CheckCircle size={16} />
                      Message sent! Check your email client.
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
