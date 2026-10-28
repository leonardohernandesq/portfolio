"use client";

import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects } from "@/data/content";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Projects() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const distance = () => track.current!.scrollWidth - window.innerWidth;
        const scrollTrigger = {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
        };

        const horizontal = gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: { ...scrollTrigger, pin: true, anticipatePin: 1 },
        });

        gsap.to(".projects-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger,
        });

        gsap.utils.toArray<HTMLElement>(".project-parallax").forEach((el) => {
          gsap.fromTo(
            el,
            { xPercent: -15 },
            {
              xPercent: 15,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest(".project-media"),
                containerAnimation: horizontal,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
          gsap.from(card, {
            y: 80,
            autoAlpha: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="projects"
      className="relative overflow-hidden py-32 lg:flex lg:h-svh lg:flex-col lg:py-0 lg:pt-24"
    >
      <div className="flex items-end justify-between px-4 md:px-10">
        <div>
          <SectionLabel index="04">Projetos</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-tight">
            Trabalhos selecionados
          </h2>
        </div>
        <span className="hidden font-display text-sm text-muted lg:block">
          {String(projects.length).padStart(2, "0")} projetos
        </span>
      </div>

      <div
        ref={track}
        className="mt-16 flex flex-col gap-20 px-4 md:px-10 lg:mt-6 lg:flex-1 lg:flex-row lg:items-center lg:gap-[6vw] lg:pl-[22vw] lg:pr-[10vw]"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}

        <a
          href="https://github.com/leonardohernandesq"
          target="_blank"
          rel="noreferrer"
          className="group flex aspect-square w-full shrink-0 flex-col items-center justify-center gap-4 rounded-full border border-paper/15 transition-colors duration-700 hover:border-accent hover:bg-accent hover:text-ink lg:w-[22vw]"
        >
          <FiArrowUpRight className="size-12 transition-transform duration-700 ease-expo group-hover:rotate-45" />
          <span className="font-display text-lg uppercase tracking-widest">
            Mais no GitHub
          </span>
        </a>
      </div>

      <div className="mx-10 mb-10 hidden h-px bg-paper/10 lg:block">
        <div className="projects-progress h-full origin-left scale-x-0 bg-accent" />
      </div>
    </section>
  );
}
