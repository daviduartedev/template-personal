"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  easeOutExpo,
  fadeUp,
  letterReveal,
  popIn,
  slideInTop,
  springSnappy,
  staggerFast,
} from "@/lib/motion";

const headline = ["TRANSFORME", "SEU CORPO,"];
const headlineAccent = ["RENOVE SUA"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  /* Scroll-driven parallax — coluna da foto */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /* Mouse parallax — só widgets CREF & resultado real */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const chipFloatA = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const chipFloatB = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = stageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative min-h-0 lg:min-h-[100svh] flex flex-col justify-start lg:justify-between gap-5 lg:gap-0 pt-28 pb-6 lg:pb-0 overflow-hidden hero-gradient"
    >
      {/* Subtle dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3A464D 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated decorative blobs */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: easeOutExpo, delay: 0.4 }}
        className="absolute -top-40 -right-32 w-[700px] h-[700px] rounded-full bg-aqua/25 blur-[140px] pointer-events-none animate-blob"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: easeOutExpo, delay: 0.8 }}
        className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-aquaSoft/40 blur-[140px] pointer-events-none"
      />

      {/* Vertical side text - left edge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: easeOutExpo, delay: 1.2 }}
        className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 vertical-text text-[10px] tracking-[0.5em] uppercase text-graphite/50 font-medium z-10"
      >
        Sabrina De Souza
      </motion.div>

      {/* Vertical side text - right edge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: easeOutExpo, delay: 1.2 }}
        className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 vertical-text text-[10px] tracking-[0.5em] uppercase text-graphite/50 font-medium z-10"
      >
        Personal Trainer · CREF
      </motion.div>

      {/* MAIN STAGE */}
      <div
        ref={stageRef}
        className="w-[min(1380px,94vw)] mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-5 lg:gap-4 items-center relative z-10 lg:flex-1 max-lg:flex-none"
      >
        {/* LEFT — Headline + copy */}
        <div className="relative z-20 lg:pr-2 max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
          {/* Top tag */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideInTop}
            className="inline-flex items-center gap-2 text-[11px] tracking-[.22em] uppercase text-graphite font-bold mb-7 px-3.5 py-1.5 rounded-full bg-bone border border-ash max-lg:mx-auto"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-aqua" />
            </span>
            Personal Online & Presencial
          </motion.div>

          {/* Headline with letter reveal + parallax */}
          <motion.h1
            style={{ y: headlineY }}
            className="font-hero font-extrabold tracking-tight text-[clamp(46px,6.5vw,96px)] uppercase text-ink leading-[0.95]"
          >
            {headline.map((line, lineIdx) => (
              <span
                key={`h-${lineIdx}`}
                className="block overflow-hidden pb-1"
              >
                <motion.span
                  variants={staggerFast}
                  initial="hidden"
                  animate="show"
                  className="inline-block"
                >
                  {line.split("").map((char, i) => (
                    <motion.span
                      key={`${lineIdx}-${i}`}
                      custom={lineIdx * 9 + i}
                      variants={letterReveal}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            ))}
            {headlineAccent.map((line, lineIdx) => (
              <span
                key={`ha-${lineIdx}`}
                className="block overflow-hidden pb-1"
              >
                <motion.span
                  variants={staggerFast}
                  initial="hidden"
                  animate="show"
                  className="inline-block text-graphite"
                >
                  {line.split("").map((char, i) => (
                    <motion.span
                      key={`a-${lineIdx}-${i}`}
                      custom={20 + lineIdx * 9 + i}
                      variants={letterReveal}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden mt-1">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.95,
                  ease: easeOutExpo,
                  delay: 1.4,
                }}
                className="inline-block"
              >
                <span className="hl-chip">AUTOESTIMA.</span>
              </motion.span>
            </span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            transition={{ delay: 1.7 }}
            className="text-[15px] lg:text-base text-graphite max-w-[480px] mt-7 mb-8 leading-relaxed max-lg:mx-auto"
          >
            Método exclusivo de emagrecimento, sem efeito sanfona. Treinos
            personalizados, acompanhamento próximo e resultados que ficam.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerFast}
            transition={{ delayChildren: 1.9 }}
            className="flex gap-3 flex-wrap items-center max-lg:justify-center"
          >
            <motion.a
              variants={popIn}
              href="#contato"
              data-hover
              className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-bone text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-aquaDeep shadow-[0_15px_35px_-10px_rgba(10,15,18,0.4)] overflow-hidden"
            >
              <span className="relative z-10">Começar agora</span>
              <span className="relative z-10 w-9 h-9 rounded-full bg-aqua text-ink flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.a>
            <motion.a
              variants={popIn}
              href="#metodo"
              data-hover
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-bone border border-ash text-graphite text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-bone hover:border-ink transition-all"
            >
              <Play className="w-3 h-3 fill-current" />
              Como funciona
            </motion.a>
          </motion.div>

          {/* Inline mini-stats below CTAs */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerFast}
            transition={{ delayChildren: 2.2 }}
            className="mt-10 flex items-center gap-8 flex-wrap max-lg:justify-center"
          >
            {[
              { n: "500+", l: "Alunas" },
              { n: "6+", l: "Anos de XP" },
              { n: "98%", l: "Satisfação" },
            ].map((s) => (
              <motion.div
                key={s.l}
                variants={popIn}
                className="flex items-baseline gap-2"
              >
                <span className="font-display text-3xl text-aquaDeep leading-none">
                  {s.n}
                </span>
                <span className="text-[10px] uppercase tracking-[.2em] text-graphite/70 font-medium">
                  {s.l}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo stage */}
        <motion.div
          style={{ y: photoY, opacity }}
          className="relative h-[min(42svh,400px)] sm:h-[min(44svh,420px)] lg:h-[80svh] lg:min-h-[640px] min-h-0 self-center lg:self-end flex items-end justify-center max-lg:mt-1"
        >
          {/* Aqua rounded panel behind the photo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ ...springSnappy, delay: 0.5 }}
            className="absolute bottom-0 right-0 w-[88%] h-[78%] rounded-t-[40%] aqua-gradient shadow-[0_-30px_80px_-20px_rgba(27,159,181,0.4)]"
          />

          {/* Dotted spinning ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: easeOutExpo }}
            className="absolute bottom-[5%] right-[2%] w-[78%] aspect-square rounded-full border border-dashed border-bone/30 animate-spin60"
          />

          {/* Solid spinning ring (counter direction) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 1, delay: 1, ease: easeOutExpo },
              scale: { duration: 1, delay: 1, ease: easeOutExpo },
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            }}
            className="absolute bottom-[8%] right-[5%] w-[68%] aspect-square rounded-full border-2 border-aquaNeon/20"
          />

          {/* The portrait — parallax só no scroll (scale); sem drift ao mover o mouse */}
          <motion.div
            style={{ scale: photoScale }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.6, ease: easeOutExpo }}
            className="relative w-full h-full z-10"
          >
            <Image
              src="/sabrina-hd.png"
              alt="Sabrina de Souza — Personal Trainer"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 50vw"
              className="object-contain object-[center_82%] lg:object-bottom drop-shadow-[0_30px_50px_rgba(10,15,18,0.35)]"
            />
          </motion.div>

          {/* FLOATING CHIPS around the photo */}
          {/* Mid-left chip — CREF */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ ...springSnappy, delay: 1.4 }}
            style={{ x: chipFloatB, y: chipFloatA }}
            className="absolute top-[42%] left-[-3%] lg:left-[-6%] z-30"
          >
            <div className="px-4 py-3 rounded-2xl bg-ink text-bone shadow-[0_18px_45px_-12px_rgba(10,15,18,0.55)] flex items-center gap-3 border border-bone/20">
              <div className="w-10 h-10 rounded-xl bg-aquaNeon/25 flex items-center justify-center shrink-0">
                <Sparkles className="w-[18px] h-[18px] text-aquaNeon" />
              </div>
              <div>
                <div className="font-display text-xl text-aquaNeon leading-none tracking-tight">
                  CREF
                </div>
                <div className="text-[10px] uppercase tracking-[.2em] text-bone font-semibold mt-1">
                  Profissional
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom-left chip — Result card */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...springSnappy, delay: 1.8 }}
            style={{ y: chipFloatA }}
            className="absolute bottom-[14%] left-[-2%] lg:left-[-4%] z-30 max-w-[210px]"
          >
            <div className="px-4 py-3.5 rounded-2xl bg-ink/95 text-bone shadow-[0_20px_45px_-12px_rgba(10,15,18,0.5)] border border-aqua/35 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[.22em] font-bold mb-2 text-aquaNeon">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                Resultado real
              </div>
              <div className="font-display text-[1.65rem] leading-none text-bone tracking-tight">
                -8kg em 12 semanas
              </div>
              <div className="text-[11px] mt-2 leading-snug text-bone/85 font-medium">
                Média das alunas no método.
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
