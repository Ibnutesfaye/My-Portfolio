"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Send } from "lucide-react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";

const ROLES = [
  "Full Stack Developer",
  "AI Engineer",
  "Mobile App Developer",
  "UI/UX Designer",
  "Network Engineer",
];

function TypeWriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    const speed = deleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(role.slice(0, text.length + 1));
        if (text.length + 1 === role.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(role.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; color: string;
    }[] = [];

    const COLORS = ["#6366F1", "#8B5CF6", "#06B6D4"];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    let animFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      animFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}

const SOCIALS = [
  { icon: Github, href: "https://github.com/abdurezak", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/abdurezak", label: "LinkedIn" },
  { icon: Send, href: "https://t.me/abdurezak", label: "Telegram" },
  { icon: Mail, href: "mailto:abdurezak@email.com", label: "Email" },
];

const BADGES = [
  { icon: "✅", text: "5+ Projects" },
  { icon: "🤖", text: "AI Enthusiast" },
  { icon: "🌍", text: "Open to Work" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Particles */}
      <ParticleCanvas />

      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[120px] animate-float-delayed" />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[15%] w-16 h-16 border border-primary/20 rounded-xl opacity-40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-[12%] w-10 h-10 border border-accent/20 rounded-full opacity-30"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[8%] w-6 h-6 bg-secondary/20 rounded rotate-45"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-0 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-0 lg:py-32">

          {/* Left content */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-400/20 text-xs text-green-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-gray-400 text-lg mb-3 font-mono"
            >
              Hi there 👋, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold font-display text-white mb-4 leading-none"
            >
              Abdurezak
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold font-display mb-6 h-10"
            >
              <TypeWriter />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-gray-400 leading-relaxed max-w-lg mb-8"
            >
              I build intelligent software systems and beautiful digital experiences
              — from full-stack web apps to AI-powered solutions and enterprise networks.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {BADGES.map((b) => (
                <span
                  key={b.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-300"
                >
                  {b.icon} {b.text}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <MagneticButton
                href="/My-Portfolio/resume.pdf"
                variant="primary"
                className="gap-2 px-6 py-3"
              >
                <Download size={16} />
                Download Resume
              </MagneticButton>
              <MagneticButton
                href="#projects"
                variant="secondary"
                className="gap-2 px-6 py-3"
              >
                View Projects
                <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.7, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center"
          >
            {/* Profile image container */}
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
              />
              {/* Glow rings */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-md animate-glow-pulse" />

              {/* Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40 shadow-2xl shadow-primary/20">
                <Image
                  src="/My-Portfolio/images/profile.jpg"
                  alt="Abdurezak Profile"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating skill chips */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-1/4 glass border border-white/10 rounded-xl px-3 py-2 text-xs text-white shadow-xl"
              >
                ⚛️ React Expert
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-6 bottom-1/4 glass border border-white/10 rounded-xl px-3 py-2 text-xs text-white shadow-xl"
              >
                🤖 AI Engineer
              </motion.div>
              <motion.div
                animate={{ y: [-8, 2, -8] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -top-4 right-1/4 glass border border-white/10 rounded-xl px-3 py-2 text-xs text-white shadow-xl"
              >
                🐍 Python Dev
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 font-mono tracking-wider">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
