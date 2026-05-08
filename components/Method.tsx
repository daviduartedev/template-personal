"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

const cards = [
  {
    n: "01",
    t: "Avaliação completa",
    d: "Análise corporal, anamnese e definição de metas reais e mensuráveis para a sua fase de vida.",
  },
  {
    n: "02",
    t: "Treino personalizado",
    d: "Programa exclusivo, ajustado a cada semana, respeitando seu nível, tempo e objetivo principal.",
  },
  {
    n: "03",
    t: "Acompanhamento ativo",
    d: "Suporte contínuo no WhatsApp, revisões periódicas e ajuste de carga, volume e estratégia.",
  },
];

function MethodCard({
  n,
  t,
  d,
  i,
}: {
  n: string;
  t: string;
  d: string;
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
    const rx = ((y - 50) / 50) * -4;
    const ry = ((x - 50) / 50) * 4;
    el.style.transform = `translateY(-8px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <motion.div
      ref={ref}
      custom={i}
      variants={cardIn}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-hover
      className="group relative p-10 border border-bone/15 rounded-3xl bg-gradient-to-br from-bone/[0.06] via-aqua/5 to-transparent transition-[transform,border-color,box-shadow] duration-500 hover:border-aqua/50 hover:shadow-[0_30px_60px_-20px_rgba(63,194,214,0.4)] cursor-default overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(63,194,214,0.20), transparent 50%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
        className="font-display text-6xl bg-gradient-to-br from-aquaNeon to-aqua bg-clip-text text-transparent leading-none"
      >
        {n}
      </motion.div>
      <h3 className="font-display text-3xl uppercase mt-6 mb-3 text-bone">
        {t}
      </h3>
      <p className="text-[14.5px] text-bone/70 leading-[1.7]">{d}</p>

      {/* Bottom shimmer */}
      <div
        className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden
      />
    </motion.div>
  );
}

export default function Method() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blob1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const blob2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      id="metodo"
      className="py-28 lg:py-36 bg-ink text-bone relative overflow-hidden"
    >
      {/* Parallax aqua decorative blobs */}
      <motion.div
        style={{ y: blob1 }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-aquaDeep/20 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: blob2 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-aqua/10 blur-[120px] pointer-events-none"
      />

      <div className="w-[min(1320px,94vw)] mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportLoose}
          variants={staggerHard}
          className="flex justify-between items-end gap-10 flex-wrap mb-16"
        >
          <div>
            <motion.div
              variants={slideInLeft}
              className="inline-flex items-center gap-2.5 text-xs tracking-[.22em] uppercase text-aqua font-bold mb-6 px-3 py-1.5 rounded-full bg-aqua/10 border border-aqua/30"
            >
              <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
              Como funciona
            </motion.div>
            <motion.h2
              variants={slideInLeft}
              className="font-display text-[clamp(40px,5.5vw,72px)] uppercase leading-[0.95]"
            >
              O MÉTODO
              <br />
              <span className="bg-gradient-to-r from-aquaNeon via-aqua to-aquaDeep bg-clip-text text-transparent">
                SABRINA
              </span>
            </motion.h2>
          </div>
          <motion.p
            variants={slideInRight}
            className="max-w-[420px] text-bone/70 text-base leading-[1.7]"
          >
            Três pilares simples que eliminam o efeito sanfona e constroem
            resultados que duram. Estratégia, consistência e acompanhamento.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerHard}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-5"
        >
          {cards.map((c, i) => (
            <MethodCard key={c.n} {...c} i={i} />
          ))}
        </motion.div>

        {/* Bottom badge / connector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[.22em] text-bone/50 font-semibold"
        >
          <span className="w-10 h-px bg-aqua/40" />
          Simples · Constante · Consistente
          <span className="w-10 h-px bg-aqua/40" />
        </motion.div>
      </div>
    </section>
  );
}
