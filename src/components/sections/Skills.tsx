"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { skills } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealHeading } from "@/components/ui/RevealHeading";

function MarqueeRow({ outline = false }: { outline?: boolean }) {
  const items = [...skills, ...skills];
  return (
    <div className="marquee flex overflow-hidden whitespace-nowrap py-2">
      <div className="marquee-inner flex shrink-0">
        {items.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className={`flex items-center font-display text-[11vw] font-bold uppercase leading-none tracking-tighter md:text-[8vw] ${outline ? "text-outline" : ""}`}
          >
            {skill.name}
            <span className="mx-[3vw] text-[4vw] text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function trackGlow(e: MouseEvent<HTMLLIElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export function Skills() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".marquee-inner");
      const tweens = rows.map((row, i) =>
        i % 2 === 0
          ? gsap.to(row, {
              xPercent: -50,
              duration: 45,
              ease: "none",
              repeat: -1,
            })
          : gsap.fromTo(
              row,
              { xPercent: -50 },
              { xPercent: 0, duration: 45, ease: "none", repeat: -1 },
            ),
      );

      const marquees = root.current!.querySelectorAll(".marquee");
      const setSkew = gsap.quickSetter(marquees, "skewX", "deg");
      const clampSkew = gsap.utils.clamp(-12, 12);
      const proxy = { skew: 0 };

      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const boost = 1 + Math.min(Math.abs(velocity) / 200, 8);
          tweens.forEach((tween) => {
            tween.timeScale(boost);
            gsap.to(tween, {
              timeScale: 1,
              duration: 1.4,
              ease: "power2.out",
              overwrite: true,
            });
          });

          const skew = clampSkew(velocity / -250);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.9,
              ease: "power3",
              overwrite: true,
              onUpdate: () => setSkew(proxy.skew),
            });
          }
        },
      });

      gsap.from(".skill-card", {
        y: 80,
        rotateX: -50,
        autoAlpha: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: { each: 0.06, grid: "auto", from: "start" },
        scrollTrigger: { trigger: ".skill-grid", start: "top 85%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="skills"
      className="relative overflow-hidden py-32 md:py-36"
    >
      <div className="flex flex-col gap-10 px-4 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <SectionLabel index="02">Skills</SectionLabel>
          <RevealHeading className="mt-8 max-w-3xl font-display text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight">
            Ferramentas que uso para dar vida às ideias
          </RevealHeading>
        </div>
      </div>

      <div className="mt-20 -rotate-2 md:mt-28">
        <MarqueeRow />
        <MarqueeRow outline />
      </div>

      <ul className="skill-grid mt-20 grid grid-cols-2 gap-3 px-4 perspective-[900px] sm:grid-cols-3 md:mt-28 md:grid-cols-4 md:px-10 lg:grid-cols-6">
        {skills.map((skill) => (
          <li
            key={skill.name}
            onMouseMove={trackGlow}
            className="skill-card group relative flex aspect-5/4 flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-paper/10 bg-paper/2 transition-colors duration-500 hover:border-accent/40"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(220px_circle_at_var(--x)_var(--y),rgba(241,143,1,0.18),transparent_70%)]" />
            <Image
              src={skill.icon}
              alt=""
              width={56}
              height={56}
              className="relative size-12 object-contain grayscale transition duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:grayscale-0 md:size-14"
            />
            <span className="relative font-display text-sm uppercase tracking-widest text-muted transition-colors duration-500 group-hover:text-paper">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
