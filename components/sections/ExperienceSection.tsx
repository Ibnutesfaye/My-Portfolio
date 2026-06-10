"use client";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="My Journey"
          title="Experience &"
          highlight="Timeline"
          description="From zero to building full-stack applications and AI systems — the journey that shaped who I am as a developer."
        />

        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0, 0, 1] }}
              className="relative flex gap-8 pb-12 last:pb-0"
            >
              {/* Vertical line */}
              {i < EXPERIENCES.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                  className="absolute left-[27px] top-14 bottom-0 w-px origin-top"
                  style={{ background: `linear-gradient(to bottom, ${exp.color}40, transparent)` }}
                />
              )}

              {/* Icon */}
              <div className="relative flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 rounded-2xl glass border flex items-center justify-center text-2xl shadow-lg relative z-10"
                  style={{ borderColor: exp.color + "40", boxShadow: `0 0 20px ${exp.color}20` }}
                >
                  {exp.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full"
                    style={{ color: exp.color, background: exp.color + "15", border: `1px solid ${exp.color}30` }}
                  >
                    {exp.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-2">{exp.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
