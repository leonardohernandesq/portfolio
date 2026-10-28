"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { experiences } from "@/data/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealHeading } from "@/components/ui/RevealHeading";

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".exp-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".exp-list",
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item) => {
        gsap
          .timeline({ scrollTrigger: { trigger: item, start: "top 80%" } })
          .from(item.querySelector(".exp-dot"), {
            scale: 0,
            duration: 0.8,
            ease: "back.out(3)",
          })
          .from(
            item.querySelectorAll(".exp-reveal"),
            {
              y: 50,
              autoAlpha: 0,
              duration: 1,
              stagger: 0.1,
              ease: "power3.out",
            },
            "<0.1",
          );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="experience"
      className="relative px-4 py-32 md:px-10 md:py-36"
    >
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <SectionLabel index="03">Experiência</SectionLabel>
            <RevealHeading className="mt-8 font-display text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-tight">
              Mais de 6 anos entregando produto
            </RevealHeading>
          </div>
        </div>

        <div className="relative md:col-span-8">
          <span aria-hidden className="absolute left-1.75 top-2 bottom-0 w-px bg-paper/10" />
          <span aria-hidden className="exp-line absolute left-1.75 top-2 bottom-0 w-px origin-top bg-accent" />

          <ol className="exp-list relative">
            {experiences.map((exp) => (
              <li
                key={exp.company}
                className="exp-item group relative pb-24 pl-12 last:pb-0 md:pl-20"
              >
                <span className="exp-dot absolute left-0 top-2 size-3.75 rounded-full border-2 border-accent bg-ink transition-colors duration-500 group-hover:bg-accent" />

                <div className="exp-reveal flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-xs uppercase tracking-[0.3em] text-muted">
                  <span>{exp.period}</span>
                  <span className="h-px w-8 bg-paper/20" />
                  <span>{exp.location}</span>
                </div>
                <h3 className="exp-reveal mt-6 font-display text-4xl font-bold tracking-tight transition-colors duration-500 group-hover:text-accent md:text-6xl">
                  {exp.company}
                </h3>
                <p className="exp-reveal mt-2 font-display text-xl text-paper/80">
                  {exp.role}
                </p>
                <p className="exp-reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                  {exp.description}
                </p>
                <ul className="exp-reveal mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-paper/15 px-4 py-1.5 font-display text-xs uppercase tracking-[0.2em] text-paper/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
