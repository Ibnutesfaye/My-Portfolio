"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/data";
import type { SkillCategory } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

const CATEGORIES: { key: SkillCategory | "all"; label: string; icon: string }[] = [
  { key: "all", label: "All", icon: "⚡" },
  { key: "frontend", label: "Frontend", icon: "🌐" },
  { key: "backend", label: "Backend", icon: "🔧" },
  { key: "database", label: "Database", icon: "🗄️" },
  { key: "ai", label: "AI / ML", icon: "🧠" },
  { key: "networking", label: "Networking", icon: "🔌" },
  { key: "tools", label: "Tools", icon: "🛠️" },
];

function SkillBar({ skill, delay = 0 }: { skill: (typeof SKILLS)[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass border border-white/8 rounded-2xl p-4 hover:border-primary/30 transition-all group cursor-default"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-medium text-white">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-primary">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1, ease: [0.25, 0, 0, 1] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: "linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4)",
          }}
        >
          {/* Shimmer */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </motion.div>
      </div>

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ boxShadow: "inset 0 0 20px rgba(99,102,241,0.05)" }}
      />
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Technologies I"
          highlight="Master"
          description="A comprehensive toolkit spanning frontend, backend, AI, and infrastructure — constantly growing."
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass border border-white/10 text-gray-400 hover:text-white hover:border-primary/30"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 0.04} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
