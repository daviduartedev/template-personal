"use client";

import { motion } from "framer-motion";
import { slideInLeft, viewportOnce } from "@/lib/motion";

const items = [
  "EMAGRECIMENTO",
  "HIPERTROFIA",
  "PERFORMANCE",
  "AUTOESTIMA",
  "DISCIPLINA",
  "MÉTODO SABRINA",
];

export default function Marquee() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={slideInLeft}
      className="border-y-2 border-ink bg-ink py-6 overflow-hidden relative"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F6FBFC 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="flex whitespace-nowrap animate-marquee font-display text-4xl md:text-5xl text-bone uppercase relative">
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex items-center gap-16 pr-16 shrink-0">
            {items.map((it, i) => (
              <span
                key={`${k}-${i}`}
                className="flex items-center gap-16 tracking-tight"
              >
                <span className="hover:text-aqua transition-colors cursor-default">
                  {it}
                </span>
                <span className="text-aqua text-3xl">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
