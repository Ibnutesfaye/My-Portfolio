"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-primary mb-4 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
        <span className="w-1 h-1 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-4 text-white leading-tight">
        {title}{" "}
        <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className={`text-gray-400 text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
