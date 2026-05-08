"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";
import {
  cardIn,
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerHard,
  viewportLoose,
  viewportOnce,
} from "@/lib/motion";

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blob1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const blob2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      id="depoimentos"
      className="py-28 lg:py-36 bg-ink2 text-bone relative overflow-hidden"
    >
      <motion.div
        style={{ y: blob1 }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-aqua/20 blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ y: blob2 }}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-aquaSoft/40 blur-[100px] pointer-events-none"
      />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-ash/40 blur-[100px] pointer-events-none" />

      <div className="w-[min(1320px,94vw)] mx-auto relative">
        {/* Section eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportLoose}
          variants={staggerHard}
          className="text-center mb-14"
        >
          <motion.div
            variants={slideInLeft}
            className="inline-flex items-center gap-2.5 text-xs tracking-[.22em] uppercase text-aquaNeon font-bold mb-5 px-3 py-1.5 rounded-full bg-bone/10 border border-aqua/30"
          >
            <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
            Depoimentos reais
          </motion.div>
          <motion.h2
            variants={slideInRight}
            className="font-display text-[clamp(36px,5vw,64px)] uppercase leading-[0.95] text-bone text-balance"
          >
            QUEM TREINA
            <br />
            <span className="text-aquaNeon">RECOMENDA.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={cardIn}
          className="max-w-[920px] mx-auto text-center px-8 lg:px-14 py-14 lg:py-20 border-2 border-aqua/35 rounded-[32px] bg-ink relative shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]"
        >
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={viewportOnce}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
              delay: 0.3,
            }}
            className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full aqua-gradient flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(27,159,181,0.6)]"
          >
            <Quote className="w-6 h-6 text-bone fill-bone" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(24px,3.2vw,40px)] uppercase leading-[1.15] text-bone mt-2"
          >
            &ldquo;Em 6 meses não só transformei meu corpo —
            <br className="hidden md:block" /> mudei minha relação com o{" "}
            <span className="text-aquaNeon">treino e a comida.</span>&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-10 flex items-center justify-center gap-3.5"
          >
            <div className="relative w-[54px] h-[54px] rounded-full overflow-hidden border-2 border-aqua shadow-[0_8px_20px_-5px_rgba(63,194,214,0.5)]">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop"
                alt="Aluna Camila"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="text-[15px] font-semibold text-bone">
                Camila Rocha
              </div>
              <div className="text-[11px] text-aquaNeon tracking-[.15em] uppercase font-bold">
                Aluna · 8 meses
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats row below testimonial */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerHard}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { n: "500+", l: "Alunas" },
            { n: "4.9", l: "Avaliação" },
            { n: "98%", l: "Recomendam" },
            { n: "6+", l: "Anos" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              custom={i}
              variants={fadeUp}
              className="text-center"
            >
              <div className="font-display text-4xl text-bone leading-none">
                {s.n}
              </div>
              <div className="text-[10px] uppercase tracking-[.22em] text-bone/55 font-bold mt-2">
                {s.l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
