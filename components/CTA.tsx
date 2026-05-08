"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef } from "react";
import {
  easeOutExpo,
  letterReveal,
  popIn,
  slideInLeft,
  staggerFast,
  staggerHard,
  viewportLoose,
  viewportOnce,
} from "@/lib/motion";

const headline1 = "PRONTA PARA SUA";
const headline2 = "TRANSFORMAÇÃO?";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blob1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const blob2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const dotY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      id="contato"
      className="py-28 lg:py-36 text-center relative overflow-hidden bg-aqua"
    >
      {/* dotted pattern with parallax */}
      <motion.div
        style={{ y: dotY }}
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0A0F12 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </motion.div>

      {/* accent blobs */}
      <motion.div
        style={{ y: blob1 }}
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-bone/20 blur-3xl"
      />
      <motion.div
        style={{ y: blob2 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-ink/10 blur-3xl"
      />

      <div className="w-[min(1280px,92vw)] mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportLoose}
          variants={staggerHard}
          className="text-center"
        >
          <motion.div
            variants={slideInLeft}
            className="inline-flex items-center gap-2.5 text-xs tracking-[.22em] uppercase text-ink font-bold mb-6 mx-auto"
          >
            <span className="w-7 h-px bg-ink" aria-hidden />
            Vagas limitadas
            <span className="w-7 h-px bg-ink" aria-hidden />
          </motion.div>

          {/* Letter-reveal headline */}
          <h2 className="font-display text-[clamp(48px,7vw,108px)] uppercase leading-[0.92] text-ink text-balance">
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={staggerFast}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="inline-block"
              >
                {headline1.split("").map((c, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    custom={i}
                    variants={letterReveal}
                    className="inline-block"
                  >
                    {c === " " ? "\u00A0" : c}
                  </motion.span>
                ))}
              </motion.span>
            </span>
            <span className="block overflow-hidden italic">
              <motion.span
                variants={staggerFast}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="inline-block"
              >
                {headline2.split("").map((c, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    custom={headline1.length + i}
                    variants={letterReveal}
                    className="inline-block"
                  >
                    {c === " " ? "\u00A0" : c}
                  </motion.span>
                ))}
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.8, duration: 0.9, ease: easeOutExpo }}
            className="max-w-[560px] mx-auto mt-8 mb-10 text-ink/80 text-[17px] leading-[1.7]"
          >
            Agende uma conversa sem compromisso. Vamos entender seu momento e
            desenhar o caminho certo para o seu objetivo.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerFast}
            transition={{ delayChildren: 1 }}
            className="flex gap-3 flex-wrap justify-center"
          >
            <motion.a
              variants={popIn}
              href="#"
              data-hover
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-ink text-bone text-sm font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(10,15,18,0.4)]"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              variants={popIn}
              href="#planos"
              data-hover
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-semibold uppercase tracking-wider hover:bg-ink hover:text-bone transition-all"
            >
              Ver planos
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
