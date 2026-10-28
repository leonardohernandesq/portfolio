"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");

    gsap.set([dot.current, ring.current], { xPercent: -50, yPercent: -50 });
    const dotX = gsap.quickTo(dot.current, "x", {
      duration: 0.15,
      ease: "power3",
    });
    const dotY = gsap.quickTo(dot.current, "y", {
      duration: 0.15,
      ease: "power3",
    });
    const ringX = gsap.quickTo(ring.current, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const ringY = gsap.quickTo(ring.current, "y", {
      duration: 0.6,
      ease: "power3",
    });

    let visible = false;
    const move = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
      if (!visible) {
        visible = true;
        gsap.to([dot.current, ring.current], { autoAlpha: 1, duration: 0.3 });
      }
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "a, button, [data-cursor]",
      );
      const text = target?.dataset.cursor ?? "";
      const size = text ? 96 : target ? 64 : 40;

      gsap.to(ring.current, {
        width: size,
        height: size,
        backgroundColor: text ? "#f18f01" : "rgba(243, 241, 236, 0)",
        borderColor: text ? "#f18f01" : "rgba(243, 241, 236, 0.5)",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(dot.current, { scale: target ? 0 : 1, duration: 0.3 });
      if (label.current) label.current.textContent = text;
      gsap.to(label.current, { autoAlpha: text ? 1 : 0, duration: 0.2 });
    };

    const leave = () => {
      visible = false;
      gsap.to([dot.current, ring.current], { autoAlpha: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  });

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none invisible fixed left-0 top-0 z-90 hidden size-10 items-center justify-center rounded-full border border-paper/50 pointer-fine:flex"
      >
        <span
          ref={label}
          className="invisible font-display text-xs font-bold uppercase tracking-widest text-ink"
        />
      </div>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none invisible fixed left-0 top-0 z-90 hidden size-1.5 rounded-full bg-accent pointer-fine:block"
      />
    </>
  );
}
