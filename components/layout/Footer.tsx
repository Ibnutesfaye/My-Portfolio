"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Send } from "lucide-react";
import { NAV_ITEMS } from "@/data";

const SOCIALS = [
  { icon: Github, href: "https://github.com/abdurezak", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/abdurezak", label: "LinkedIn" },
  { icon: Send, href: "https://t.me/abdurezak", label: "Telegram" },
  { icon: Mail, href: "mailto:abdurezak@email.com", label: "Email" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg border border-primary/60 flex items-center justify-center">
                <span className="text-sm font-bold gradient-text font-display">A</span>
              </div>
              <span className="font-bold text-white font-display">Abdurezak</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer & AI Engineer building intelligent software systems
              and beautiful digital experiences.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:abdurezak@email.com"
                  className="text-gray-500 text-sm hover:text-primary transition-colors font-mono"
                >
                  abdurezak@email.com
                </a>
              </li>
              <li className="text-gray-500 text-sm">
                📍 Addis Ababa, Ethiopia
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to Work
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} Abdurezak. Built with Next.js & ❤️
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
