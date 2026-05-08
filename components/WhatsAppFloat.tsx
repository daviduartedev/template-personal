"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { easeOutExpo, springSnappy } from "@/lib/motion";

const PHONE = "5500000000000";
const MESSAGE =
  "Olá Sabrina! Vim pelo site e quero saber mais sobre o acompanhamento.";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 80 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ ...springSnappy, delay: 1.6 }}
      className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-50"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        data-hover
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group flex items-center"
      >
        {/* Tooltip card — slides in from the right when hovered */}
        <motion.span
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : 16,
            pointerEvents: hovered ? "auto" : "none",
          }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          className="hidden md:flex absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-ink text-bone text-xs font-semibold uppercase tracking-wider whitespace-nowrap shadow-[0_15px_35px_-10px_rgba(10,15,18,0.4)]"
        >
          Fale comigo
          <span className="text-[#25D366]">●</span>
          {/* Arrow pointer */}
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-ink" />
        </motion.span>

        {/* Pulse rings — soft outward animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping"
          style={{ animationDelay: "0.6s" }}
        />

        {/* Main button */}
        <motion.span
          whileHover={{ scale: 1.08, rotate: 6 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
          className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_15px_35px_-8px_rgba(37,211,102,0.6),0_4px_12px_-2px_rgba(10,15,18,0.25)] border-2 border-white/20"
        >
          <WhatsAppIcon className="w-7 h-7 lg:w-8 lg:h-8" />

          {/* Notification dot */}
          <span className="absolute top-0 right-0 flex w-3.5 h-3.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full w-3.5 h-3.5 bg-aqua border-2 border-white" />
          </span>
        </motion.span>
      </a>
    </motion.div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
