"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Code2 } from "lucide-react";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "ai", label: "AI / ML" },
  { key: "mobile", label: "Mobile" },
  { key: "design", label: "Design" },
];

const PROJECT_GRADIENTS = [
  "from-indigo-500/20 via-purple-500/10 to-background",
  "from-cyan-500/20 via-blue-500/10 to-background",
  "from-purple-500/20 via-pink-500/10 to-background",
  "from-green-500/20 via-teal-500/10 to-background",
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl glass-strong border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Header gradient */}
        <div className="h-48 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/10 flex items-center justify-center">
          <Code2 size={64} className="text-primary/60" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={16} />
        </button>

        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">{project.category}</span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">{project.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{project.year}</p>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6">{project.longDescription}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-xs glass border border-white/10 text-gray-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-sm text-gray-300 hover:text-white hover:border-primary/40 transition-all"
            >
              <Github size={16} /> View Code
            </a>
            <a
              href={project.demo}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <TiltCard intensity={6} className="group">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="glass border border-white/8 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full"
      >
        {/* Image area */}
        <div className={`relative h-52 bg-gradient-to-br ${PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length]} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 size={56} className="text-primary/30" />
          </div>
          {project.featured && (
            <div className="absolute top-4 left-4 px-2 py-1 rounded-full bg-primary/80 text-[10px] text-white font-mono">
              ✦ Featured
            </div>
          )}
          <div className="absolute top-4 right-4 px-2 py-1 rounded-full glass border border-white/10 text-[10px] text-gray-300 font-mono">
            {project.year}
          </div>

          {/* Hover overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-primary/50 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={project.demo}
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-accent/50 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{project.category}</span>
          <h3 className="text-lg font-bold font-display text-white mt-1 mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/8 text-gray-400">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/8 text-gray-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      <section id="projects" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="My Work"
            title="Projects That"
            highlight="Matter"
            description="Each project represents a unique challenge solved with thoughtful architecture and clean code."
          />

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f.key
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "glass border border-white/10 text-gray-400 hover:text-white hover:border-primary/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filtered.map((project, i) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer"
                >
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
