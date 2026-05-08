"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerHard,
  viewportOnce,
} from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-ink text-bone overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-aquaDeep/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-aqua/15 blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #5EE3F0 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="w-[min(1320px,94vw)] mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerHard}
          className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 items-start pb-12 border-b border-bone/10"
        >
          <motion.div variants={slideInLeft}>
            <div className="relative w-20 h-20 -ml-2">
              <Image
                src="/nl4QZrRnCu23Sg18__1_-removebg-preview.png"
                alt="Sabrina de Souza"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="font-display text-2xl uppercase mt-3">
              Sabrina <span className="text-aqua">de Souza</span>
            </div>
            <p className="text-sm text-bone/60 mt-3 max-w-[320px] leading-relaxed">
              Personal Trainer especialista em emagrecimento sem efeito sanfona.
              Acompanhamento online e presencial.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="text-[11px] uppercase tracking-[.2em] text-aqua font-bold mb-4">
              Navegação
            </div>
            <motion.ul
              variants={staggerHard}
              className="space-y-2.5 text-sm text-bone/70"
            >
              {[
                { href: "#sobre", label: "Sobre" },
                { href: "#metodo", label: "Método" },
                { href: "#transformacoes", label: "Antes e depois" },
                { href: "#planos", label: "Planos" },
                { href: "#depoimentos", label: "Resultados" },
              ].map((l, i) => (
                <motion.li key={l.href} custom={i} variants={slideInLeft}>
                  <a
                    href={l.href}
                    className="hover:text-aqua transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-aqua transition-all group-hover:w-3" />
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={slideInRight}>
            <div className="text-[11px] uppercase tracking-[.2em] text-aqua font-bold mb-4">
              Contato
            </div>
            <motion.div variants={staggerHard} className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: MessageCircle, label: "WhatsApp" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }, i) => (
                <motion.a
                  key={label}
                  custom={i}
                  variants={slideInRight}
                  href="#"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="w-11 h-11 rounded-full bg-bone/5 border border-bone/15 flex items-center justify-center hover:bg-aqua hover:border-aqua hover:text-ink transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
            <p className="text-xs text-aqua/80 mt-5 font-medium">
              @sabrinadesouza.personal
            </p>
            <p className="text-xs text-bone/50 mt-1">
              contato@sabrinadesouza.com
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-3 mt-8"
        >
          <p className="text-bone/40 text-[12px]">
            © 2026 Sabrina de Souza · Todos os direitos reservados.
          </p>
          <p className="text-bone/40 text-[12px]">
            Personal Trainer · CREF Ativo
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
