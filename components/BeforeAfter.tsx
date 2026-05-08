"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Images } from "lucide-react";
import {
  cardIn,
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerHard,
  viewportLoose,
  viewportOnce,
} from "@/lib/motion";

const cases = [
  {
    src: "/antes-depois-1.png",
    alt: "Comparativo de evolução — aluna acompanhada pela Sabrina de Souza",
    date: "Out. 2024",
    note: "Registro enviado pela aluna durante o acompanhamento.",
  },
  {
    src: "/antes-depois-2.png",
    alt: "Evolução corporal — resultado com treino e método consistente",
    date: "Mar. 2026",
    note: "Transformação com treino progressivo e rotina sustentável.",
  },
] as const;

export default function BeforeAfter() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const blobX = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={ref}
      id="transformacoes"
      className="py-28 lg:py-36 relative bg-smoke overflow-hidden"
    >
      <motion.div
        style={{ y: blobY }}
        className="absolute top-20 -right-32 w-[480px] h-[480px] rounded-full bg-aquaSoft/35 blur-[110px] pointer-events-none"
      />
      <motion.div
        style={{ x: blobX }}
        className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-aqua/12 blur-[100px] pointer-events-none"
      />
      <div
        className="absolute inset-0 opacity-[0.055] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3A464D 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="w-[min(1320px,94vw)] mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportLoose}
          variants={staggerHard}
          className="text-center max-w-[820px] mx-auto mb-14 lg:mb-16"
        >
          <motion.div
            variants={slideInLeft}
            className="inline-flex items-center gap-2.5 text-xs tracking-[.22em] uppercase text-aquaDeep font-bold mb-6 px-3 py-1.5 rounded-full bg-bone border border-aqua/30"
          >
            <Images className="w-4 h-4 text-aquaDeep" aria-hidden />
            Antes e depois
          </motion.div>
          <motion.h2
            variants={slideInRight}
            className="font-display text-[clamp(36px,5vw,64px)] uppercase leading-[0.95] text-ink"
          >
            RESULTADOS QUE AS
            <br />
            <span className="hl-chip">ALUNAS VIVERAM</span>
            <br />
            <span className="text-aquaDeep">NO MÉTODO SABRINA.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[17px] text-graphite leading-[1.75] mt-7"
          >
            Cada corpo responde no seu ritmo — mas a combinação de treino
            planejado, orientação próxima e consistência no dia a dia gera mudanças
            que aparecem no espelho. Abaixo, registros reais de quem aplicou o
            método com disciplina (imagens cedidas pelas alunas).
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerHard}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {cases.map((item, i) => (
            <motion.article
              key={item.src}
              custom={i}
              variants={cardIn}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              data-hover
              className="group relative rounded-[28px] border border-ash bg-bone shadow-[0_24px_50px_-28px_rgba(10,15,18,0.18)] overflow-hidden"
            >
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full bg-smoke">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 94vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/5 pointer-events-none rounded-[28px]" />
              </div>
              <div className="px-5 py-5 lg:px-6 lg:py-6 border-t border-ash/80">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-[.2em] text-aquaDeep font-bold">
                    Evolução documentada
                  </span>
                  <span className="text-[11px] uppercase tracking-[.15em] text-graphite font-semibold bg-aquaIce px-3 py-1 rounded-full border border-aqua/25">
                    {item.date}
                  </span>
                </div>
                <p className="text-[14px] text-graphite leading-relaxed mt-3">
                  {item.note}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.35, duration: 0.75 }}
          className="text-center text-sm text-slate mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          Resultados individuais variam conforme biotipo, adesão ao programa e
          estilo de vida. Não se trata de promessa milagrosa — é método, ajuste
          constante e compromisso de ambos os lados.
        </motion.p>
      </div>
    </section>
  );
}
