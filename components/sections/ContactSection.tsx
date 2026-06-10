"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, Loader2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/ui/MagneticButton";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "abdurezak@email.com", href: "mailto:abdurezak@email.com" },
  { icon: Phone, label: "Phone", value: "+251 91 234 5678", href: "tel:+251912345678" },
  { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", href: "#" },
];

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/abdurezak" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/abdurezak" },
  { icon: Send, label: "Telegram", href: "https://t.me/abdurezak" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-all duration-200 focus:border-primary/60 focus:bg-white/[0.06] focus:shadow-lg focus:shadow-primary/5 font-body";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build Something"
          highlight="Together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold font-display text-white mb-6">
              Let&apos;s start a conversation
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you have a project that needs to be built from scratch, an existing system
              that needs improvement, or you just want to explore collaboration opportunities —
              my inbox is always open.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-mono uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-600 font-mono uppercase tracking-wider mb-4">Connect</p>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Status badge */}
            <div className="mt-8 flex items-center gap-2 px-4 py-3 rounded-2xl glass border border-green-400/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-green-400">Available for freelance projects</span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong border border-white/10 rounded-3xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-500 font-mono uppercase tracking-wider block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-mono uppercase tracking-wider block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-mono uppercase tracking-wider block mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-mono uppercase tracking-wider block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === "success"
                    ? "bg-green-500/20 border border-green-500/40 text-green-400"
                    : "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                }`}
              >
                {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                {status === "success" && <CheckCircle size={16} />}
                {status === "idle" && <Send size={16} />}
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
