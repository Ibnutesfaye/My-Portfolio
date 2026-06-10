"use client";

const ITEMS = [
  "Full Stack Development",
  "AI Engineering",
  "React & Next.js",
  "Python & Django",
  "Machine Learning",
  "Network Engineering",
  "UI/UX Design",
  "API Architecture",
  "Docker & DevOps",
  "PostgreSQL",
];

export default function MarqueeBanner() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-white/5 py-4 bg-white/[0.02]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center mx-8 text-sm text-gray-500 font-mono tracking-wide">
            <span className="w-1 h-1 rounded-full bg-primary mr-4 inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
