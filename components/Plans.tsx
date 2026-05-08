"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import {
  cardIn,
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerHard,
  viewportLoose,
  viewportOnce,
} from "@/lib/motion";

type Plan = {
  name: string;
  tag: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Essencial",
    tag: "Começando",
    price: "197",
    period: "/mês",
    desc: "Para quem está começando e quer estrutura sem complicação.",
    features: [
      "Treino personalizado mensal",
      "Avaliação inicial completa",
      "Suporte por WhatsApp",
      "Ajustes a cada 30 dias",
    ],
    cta: "Quero o Essencial",
  },
  {
    name: "Premium",
    tag: "Mais escolhido",
    price: "347",
    period: "/mês",
    desc: "Acompanhamento próximo com ajustes constantes para resultado real.",
    features: [
      "Tudo do Essencial",
      "Treino atualizado a cada 15 dias",
      "Plano alimentar com nutricionista parceira",
      "Calls quinzenais de acompanhamento",
      "Material exclusivo de mobilidade",
    ],
    featured: true,
    cta: "Quero o Premium",
  },
  {
    name: "Black",
    tag: "Acompanhamento total",
    price: "697",
    period: "/mês",
    desc: "Experiência completa com presencial, online e suporte VIP.",
    features: [
      "Tudo do Premium",
      "2 sessões presenciais por semana",
      "Suporte VIP 7 dias por semana",
      "Reavaliação física mensal",
      "Acesso ao grupo exclusivo de alunas",
    ],
    cta: "Quero o Black",
  },
];

export default function Plans() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blob = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={ref}
      id="planos"
      className="py-28 lg:py-36 relative overflow-hidden bg-gradient-to-b from-aquaDeep via-aquaDark to-ink2 text-bone"
    >
      <motion.div
        style={{ y: blob }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-aqua/25 blur-[120px] pointer-events-none"
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-ink/40 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-aquaNeon/10 blur-[100px] pointer-events-none" />

      <div className="w-[min(1320px,94vw)] mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportLoose}
          variants={staggerHard}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 text-xs tracking-[.22em] uppercase text-aquaNeon font-bold mb-6 px-3 py-1.5 rounded-full bg-bone/10 border border-aqua/35"
          >
            <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
            Planos & Investimento
          </motion.div>
          <motion.h2
            variants={slideInLeft}
            className="font-display text-[clamp(40px,5.5vw,72px)] uppercase leading-[0.95] text-bone text-balance"
          >
            ESCOLHA O PLANO
            <br />
            QUE <span className="hl-chip-deep">COMBINA</span>{" "}
            <span className="text-aquaNeon">COM VOCÊ</span>
          </motion.h2>
          <motion.p
            variants={slideInRight}
            className="max-w-[560px] mx-auto mt-6 text-bone/75 text-base leading-[1.7]"
          >
            Três níveis de acompanhamento pensados para diferentes momentos.
            Você pode mudar de plano sempre que quiser.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerHard}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardIn}
              whileHover={{ y: plan.featured ? -22 : -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              data-hover
              className={`plan-card relative flex flex-col p-8 lg:p-10 rounded-3xl border ${
                plan.featured
                  ? "featured aqua-gradient text-bone border-aquaDeep shadow-[0_30px_60px_-15px_rgba(27,159,181,0.5)] lg:-translate-y-4 scale-[1.02]"
                  : "bg-bone text-ink border-ash hover:shadow-[0_30px_60px_-20px_rgba(27,159,181,0.3)]"
              } transition-[box-shadow,border-color] duration-500`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink text-aquaNeon text-[10px] uppercase tracking-[.18em] font-bold shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  {plan.tag}
                </div>
              )}

              {!plan.featured && (
                <div className="text-[10px] uppercase tracking-[.18em] font-bold text-aquaDeep">
                  {plan.tag}
                </div>
              )}

              <h3
                className={`font-display text-5xl uppercase mt-3 ${
                  plan.featured ? "text-bone" : "text-ink"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`text-sm mt-3 leading-relaxed ${
                  plan.featured ? "text-bone/85" : "text-slate"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-7 mb-7 flex items-baseline gap-1">
                <span
                  className={`text-2xl font-medium ${
                    plan.featured ? "text-aquaNeon" : "text-aquaDeep"
                  }`}
                >
                  R$
                </span>
                <span className="font-display text-7xl leading-none">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.featured ? "text-bone/70" : "text-slate"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <div
                className={`h-px w-full ${
                  plan.featured ? "bg-bone/20" : "bg-aqua/20"
                }`}
              />

              <ul className="my-7 space-y-3.5 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-[14.5px] ${
                      plan.featured ? "text-bone/90" : "text-graphite"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                        plan.featured ? "bg-aquaNeon" : "bg-aqua/20"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.featured ? "text-ink" : "text-aquaDeep"
                        }`}
                        strokeWidth={3}
                      />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`group/btn inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${
                  plan.featured
                    ? "bg-bone text-ink hover:bg-aquaNeon"
                    : "bg-ink text-bone hover:bg-aqua hover:text-ink"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-sm text-bone/55 mt-10"
        >
          Todos os planos incluem suporte humanizado e cancelamento livre a
          qualquer momento.
        </motion.p>
      </div>
    </section>
  );
}
