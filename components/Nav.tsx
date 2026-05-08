"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

const linksLeft = [
  { href: "#sobre", label: "Sobre" },
  { href: "#metodo", label: "Método" },
];
const linksRight = [
  { href: "#transformacoes", label: "Antes e depois" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Resultados" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
      className="fixed top-5 inset-x-0 z-50 px-4"
    >
      <motion.div
        animate={{
          width: scrolled ? "min(720px,94vw)" : "min(900px,96vw)",
          paddingTop: scrolled ? 6 : 8,
          paddingBottom: scrolled ? 6 : 8,
        }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className={`mx-auto flex items-center justify-between gap-4 px-3 rounded-full border transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? "bg-bone/95 border-ash shadow-[0_10px_30px_-10px_rgba(58,70,77,0.2)] backdrop-blur-xl"
            : "bg-bone/75 border-ash/60 backdrop-blur-md"
        }`}
      >
        <div className="hidden md:flex items-center gap-1 pl-3">
          {linksLeft.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
              whileHover={{ y: -2 }}
              className="px-3 py-1.5 text-sm text-graphite hover:text-aquaDeep transition-colors font-medium"
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
            delay: 0.4,
          }}
          whileHover={{ scale: 1.08, rotate: 6 }}
          className="flex items-center justify-center mx-auto md:mx-0 -my-1"
          aria-label="Sabrina de Souza"
        >
          <div className="relative w-12 h-12">
            <Image
              src="/nl4QZrRnCu23Sg18__1_-removebg-preview.png"
              alt="Sabrina de Souza"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {linksRight.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.6 }}
              whileHover={{ y: -2 }}
              className="px-3 py-1.5 text-sm text-graphite hover:text-aquaDeep transition-colors font-medium"
            >
              {l.label}
            </motion.a>
          ))}
          <motion.a
            href="#contato"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
              delay: 0.8,
            }}
            whileHover={{ y: -2 }}
            className="ml-2 inline-flex items-center gap-1.5 pl-4 pr-3 py-2 rounded-full bg-ink text-bone text-xs font-semibold uppercase tracking-wider hover:bg-aqua hover:text-ink transition-colors"
          >
            Começar
            <span className="w-5 h-5 rounded-full bg-aqua text-ink flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5h6m0 0L5 2m3 3L5 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
