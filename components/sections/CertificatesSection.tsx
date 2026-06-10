"use client";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { CERTIFICATES } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[200px] bg-accent/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Certifications"
          title="Credentials &"
          highlight="Achievements"
          description="Continuous learning backed by recognized credentials from world-leading institutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass border border-white/8 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Image area */}
              <div className="h-36 bg-gradient-to-br from-primary/20 via-secondary/10 to-background flex items-center justify-center relative overflow-hidden">
                <span className="text-5xl">{cert.badge}</span>
                <Award size={20} className="absolute top-3 right-3 text-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="text-sm font-bold font-display text-white mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-primary mb-1">{cert.organization}</p>
                <p className="text-xs text-gray-600 mb-4 font-mono">{cert.date}</p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors"
                >
                  <ExternalLink size={12} />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
