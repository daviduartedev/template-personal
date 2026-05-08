"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  cardIn,
  fadeUp,
  revealLeft,
  slideInLeft,
  slideInRight,
  staggerHard,
  viewportLoose,
  viewportOnce,
} from "@/lib/motion";

const bullets = [
  "Acompanhamento online e presencial individualizado",
  "Planejamento adaptado à sua rotina e ao seu corpo",
  "Foco em resultado consistente, sem sofrimento",
  "Suporte semanal e ajustes constantes no programa",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const blobX = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={ref}
      id="sobre"
      className="pt-12 pb-20 max-md:pt-10 max-md:pb-16 lg:py-36 relative bg-bone overflow-hidden"
    >
      {/* Parallax decorative blobs */}
      <motion.div
        style={{ x: blobX }}
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-aquaSoft/30 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ x: useTransform(blobX, (v) => -v) }}
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-ash/40 blur-[100px] pointer-events-none"
      />

      <div className="w-[min(1320px,94vw)] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center relative max-lg:gap-12">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealLeft}
          style={{ y: imgY }}
          className="relative h-[600px] rounded-3xl overflow-hidden group"
        >
          <div className="absolute inset-0 ring-4 ring-aqua/0 group-hover:ring-aqua/40 transition-all duration-500 rounded-3xl pointer-events-none z-20" />

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-6 left-6 z-10 bg-aqua text-ink px-4 py-2 rounded-full text-[11px] tracking-[.2em] uppercase font-bold"
          >
            Sobre mim
          </motion.span>

          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80&auto=format&fit=crop"
            alt="Sabrina treinando"
            fill
            className="object-cover transition-transform duration-[1.6s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-aquaDark/80 via-aquaDeep/20 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="absolute bottom-6 left-6 right-6 text-bone z-10"
          >
            <div className="font-display text-4xl uppercase leading-none">
              Sabrina
              <br />
              <span className="text-aquaNeon">de Souza</span>
            </div>
            <div className="text-xs uppercase tracking-[.2em] mt-3 opacity-90">
              Personal Trainer · CREF
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportLoose}
          variants={staggerHard}
          className="max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center"
        >
          <motion.div
            variants={slideInRight}
            className="inline-flex items-center gap-2.5 text-xs tracking-[.22em] uppercase text-aquaDeep font-bold mb-6 px-3 py-1.5 rounded-full bg-aquaIce border border-aqua/30 max-lg:mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-aqua" />
            Quem é a Sabrina
          </motion.div>

          <motion.h2
            variants={slideInRight}
            className="font-display text-[clamp(40px,5.5vw,72px)] uppercase leading-[0.95] text-ink max-lg:text-balance"
          >
            MAIS QUE TREINO,
            <br />
            <span className="hl-chip">UMA JORNADA</span> DE
            <br />
            <span className="text-aquaDeep">CUIDADO REAL.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[17px] text-graphite leading-[1.75] mt-7 max-w-2xl max-lg:mx-auto"
          >
            Personal trainer especialista em emagrecimento, ajudo mulheres a
            saírem do ciclo de dietas restritivas e treinos que não funcionam —
            guiando cada uma a um corpo mais forte, leve e duradouro.
          </motion.p>

          <motion.ul
            variants={staggerHard}
            className="grid gap-3.5 mt-9 max-lg:max-w-lg max-lg:mx-auto max-lg:w-full"
          >
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                custom={i}
                variants={slideInLeft}
                className="flex items-start gap-3.5 text-[15px] text-graphite max-lg:justify-center max-lg:text-left"
              >
                <span className="w-6 h-6 rounded-full bg-aqua flex items-center justify-center mt-0.5 shrink-0 shadow-[0_4px_12px_-2px_rgba(63,194,214,0.5)]">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-ink"
                  >
                    <path d="M1 5l3 3 5-7" />
                  </svg>
                </span>
                {b}
              </motion.li>
            ))}
          </motion.ul>

          {/* Inline mini-cards: years, focus areas */}
          <motion.div
            variants={staggerHard}
            className="mt-10 grid grid-cols-2 gap-4 max-w-md max-lg:mx-auto"
          >
            {[
              { n: "6+", l: "Anos de experiência" },
              { n: "100%", l: "Personalizado" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                custom={i}
                variants={cardIn}
                className="p-4 rounded-2xl bg-bone border border-aqua/20"
              >
                <div className="font-display text-3xl text-aquaDeep leading-none">
                  {s.n}
                </div>
                <div className="text-[11px] uppercase tracking-[.18em] text-graphite font-bold mt-2">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
