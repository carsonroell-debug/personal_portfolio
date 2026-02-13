/**
 * Tech Stack Marquee - Infinite scrolling badges at bottom of Hero
 * Uses Framer Motion, brutalist styling
 */

import { motion } from "framer-motion";

const TECH_ITEMS = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Drizzle", color: "#F5835B" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Vercel", color: "#000000" },
];

function TechItem({ name, color }: { name: string; color: string }) {
  return (
    <div className="shrink-0 brutalist-border brutalist-shadow bg-card px-6 py-3 flex items-center gap-3 font-mono font-semibold">
      <span className="w-3 h-3 shrink-0 brutalist-border" style={{ backgroundColor: color }} />
      <span className="text-foreground">{name}</span>
    </div>
  );
}

export function TechStackMarquee() {
  const duplicated = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="absolute bottom-0 left-0 right-0 py-8 overflow-hidden border-t-4 border-border">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: [0, -960] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((item, i) => (
          <TechItem key={`${item.name}-${i}`} name={item.name} color={item.color} />
        ))}
      </motion.div>
    </div>
  );
}
