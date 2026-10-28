"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { markLoaded } from "@/lib/loader";

export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
      document.documentElement.style.overflow = "hidden";

      const progress = { value: 0 };

      gsap
        .timeline({ delay: 0.1 })
        .to(progress, {
          value: 100,
          duration: 1.1,
          ease: "power3.inOut",
          onUpdate: () => {
            if (count.current)
              count.current.textContent = String(
                Math.round(progress.value),
              ).padStart(3, "0");
          },
        })
        .to(
          ".preloader-bar",
          { scaleX: 1, duration: 1.1, ease: "power3.inOut" },
          "<",
        )
        .to(".preloader-content", {
          yPercent: -60,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.in",
          stagger: 0.05,
        })
        .add(() => {
          document.documentElement.style.overflow = "";
          markLoaded();
          ScrollTrigger.refresh();
        })
        .to(
          root.current,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.2,
            ease: "expo.inOut",
          },
          "<",
        )
        .set(root.current, { display: "none" });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 z-100 flex flex-col justify-between bg-paper p-4 text-ink md:p-10"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="preloader-content flex justify-between font-display text-xs uppercase tracking-[0.3em]">
        <span>Leonardo Hernandes</span>
        <span>Portfólio</span>
      </div>
      <div className="preloader-content">
        <span
          ref={count}
          className="font-display text-[28vw] leading-[0.8] font-bold tabular-nums md:text-[16vw]"
        >
          000
        </span>
        <div className="mt-6 h-px w-full bg-ink/15">
          <div className="preloader-bar h-full origin-left scale-x-0 bg-accent" />
        </div>
      </div>
    </div>
  );
}
