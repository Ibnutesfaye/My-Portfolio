"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_ITEMS } from "@/data";
import { useActiveSection, useTheme } from "@/hooks";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((n) => n.href.replace("#", ""));
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 glass-strong border-b border-white/5 shadow-xl shadow-black/20"
            : "py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg border border-primary/60 flex items-center justify-center group-hover:border-primary transition-colors glow-primary">
              <span className="text-sm font-bold gradient-text font-display">A</span>
            </div>
            <span className="font-bold text-white font-display hidden sm:block">
              Abdurezak
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-200 font-medium ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-lg bg-primary/15 border border-primary/25"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="hidden md:flex w-9 h-9 rounded-lg glass border border-white/10 items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <MagneticButton
              href="#contact"
              variant="primary"
              className="hidden md:inline-flex text-xs px-4 py-2"
            >
              Hire Me
            </MagneticButton>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
            className="fixed inset-y-0 right-0 w-72 z-40 glass-strong border-l border-white/5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6 gap-2">
              {NAV_ITEMS.map((item, i) => {
                const id = item.href.replace("#", "");
                return (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(item.href)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active === id
                        ? "text-white bg-primary/15 border border-primary/25"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}

              <div className="mt-auto flex flex-col gap-3">
                <button
                  onClick={toggle}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl glass border border-white/10 text-sm text-gray-400"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
                <MagneticButton href="#contact" variant="primary" className="w-full justify-center">
                  Hire Me
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/60 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
