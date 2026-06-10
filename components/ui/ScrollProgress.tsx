"use client";
import { useScrollProgress } from "@/hooks";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  const scaleX = useSpring(progress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4)",
      }}
    />
  );
}
