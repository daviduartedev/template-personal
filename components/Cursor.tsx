"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
    };
    window.addEventListener("mousemove", move);

    let raf = 0;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    const enter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hover]")) setHover(true);
    };
    const leave = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hover]")) setHover(false);
    };
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="hidden md:block fixed top-0 left-0 z-[999] pointer-events-none rounded-full border-2 border-aqua mix-blend-difference transition-[width,height,background,opacity] duration-300"
      style={{
        width: hover ? 48 : 20,
        height: hover ? 48 : 20,
        opacity: visible ? 1 : 0,
        background: hover ? "rgba(63,194,214,0.2)" : "transparent",
      }}
    />
  );
}
