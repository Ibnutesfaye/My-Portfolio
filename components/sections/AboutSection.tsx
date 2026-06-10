"use client";
import { motion } from "framer-motion";
import { Code2, Brain, Network, Rocket } from "lucide-react";
import Image from "next/image";
import Counter from "@/components/ui/Counter";
import SectionHeader from "@/components/ui/SectionHeader";
import { STATS } from "@/data";

const PASSIONS = [
  { icon: Code2, title: "Clean Code", desc: "I believe great code is art — readable, efficient, maintainable." },
  { icon: Brain, title: "AI Research", desc: "Exploring the intersection of intelligence and software engineering." },
  { icon: Network, title: "Systems Design", desc: "Architecting scalable, resilient distributed systems." },
  { icon: Rocket, title: "Continuous Growth", desc: "Always learning, building, iterating — never settling." },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="About Me"
          title="The Person Behind"
          highlight="The Code"
          description="A passionate developer from Ethiopia, bridging the gap between cutting-edge technology and real-world impact."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0, 0, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-3xl border border-primary/10" />
              <div className="absolute -inset-2 rounded-2xl border border-primary/15" />

              {/* Image */}
              <div className="w-full h-full rounded-2xl overflow-hidden glass border border-white/10 relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Abdurezak About Profile"
                  fill
                  sizes="(max-width: 768px) 384px, 384px"
                  className="object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-strong border border-white/10 rounded-2xl p-4 shadow-xl"
              >
                <p className="text-2xl font-bold gradient-text font-display">3+</p>
                <p className="text-xs text-gray-400">Years of<br/>Learning</p>
              </motion.div>

              {/* Tech stack badge */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -top-4 -left-4 glass-strong border border-white/10 rounded-xl px-4 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <div>
                    <p className="text-xs font-semibold text-white">25+ Skills</p>
                    <p className="text-[10px] text-gray-500">Mastered</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0, 0, 1] }}
          >
            <div className="space-y-5 mb-8 text-gray-400 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-semibold">Abdurezak</span>, a full-stack developer
                and AI engineer based in Addis Ababa, Ethiopia. My journey began in 2023 when curiosity
                about technology turned into a full-blown passion for building software that solves real problems.
              </p>
              <p>
                From crafting pixel-perfect UIs to architecting distributed backend systems and training
                machine learning models — I operate across the entire technology stack. I have a particular
                fascination with the intersection of{" "}
                <span className="text-primary">artificial intelligence</span> and{" "}
                <span className="text-accent">network infrastructure</span>.
              </p>
              <p>
                My goal is to build products that are not just technically excellent, but genuinely useful
                to people. I&apos;m now expanding my reach internationally, ready to collaborate with teams
                and clients who share a vision for impactful technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass border border-white/8 rounded-2xl p-4"
                >
                  <p className="text-3xl font-bold font-display gradient-text mb-1">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Passions */}
            <div className="grid grid-cols-2 gap-3">
              {PASSIONS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass border border-white/8 rounded-xl p-3 hover:border-primary/30 transition-colors group"
                >
                  <p.icon
                    size={18}
                    className="text-primary mb-2 group-hover:text-accent transition-colors"
                  />
                  <p className="text-xs font-semibold text-white mb-1">{p.title}</p>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
