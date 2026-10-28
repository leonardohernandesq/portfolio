"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats } from "@/data/content";

const GlobeScene = dynamic(() => import("@/components/three/globe/GlobeScene"), { ssr: false });

export function About() {
  const root = useRef<HTMLElement>(null);
  const globeBox = useRef<HTMLDivElement>(null);
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const el = globeBox.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShowGlobe(true);
        observer.disconnect();
      },
      { rootMargin: "0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const split = SplitText.create(".about-lead", {
        type: "words",
        aria: "none",
      });
      gsap.from(split.words, {
        color: "#6e6e72",
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-lead",
          start: "top 80%",
          end: "bottom 45%",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".about-image",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "expo.inOut",
          scrollTrigger: { trigger: ".about-image", start: "top 80%" },
        },
      );

      gsap.from(".about-p", {
        y: 40,
        autoAlpha: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-body", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".about-stat-value").forEach((el) => {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: Number(el.dataset.value),
          duration: 2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value));
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="about"
      className="relative px-4 py-32 md:px-10 md:py-36"
    >
      <SectionLabel index="01">Sobre mim</SectionLabel>

      <p className="about-lead mt-12 max-w-6xl font-display text-[clamp(2rem,5.4vw,5.5rem)] font-medium leading-[1.05] tracking-tight">
        Não escrevo apenas código. Crio experiências digitais{" "}
        <span className="text-accent">
          que as pessoas sentem vontade de usar.
        </span>
      </p>

      <div className="about-body mt-24 grid gap-12 md:mt-32 md:grid-cols-12 md:items-center md:gap-10">
        <div
          ref={globeBox}
          className="about-image relative aspect-square w-full overflow-hidden rounded-2xl border border-paper/10 bg-[radial-gradient(circle_at_50%_35%,rgba(241,143,1,0.12),transparent_65%)] md:col-span-5"
          role="img"
          aria-label="Globo 3D interativo com as tecnologias que utilizo"
        >
          {showGlobe && <GlobeScene />}
        </div>

        <div className="flex flex-col gap-12 md:col-span-6 md:col-start-7">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <p className="about-p">
              Sou o Leonardo, tenho 27 anos e atualmente estou morando em
              Lisboa. A tecnologia sempre me fascinou: a ideia de que algumas
              linhas de código podem mudar a forma como as pessoas vivem o dia a
              dia é o que me faz{" "}
              <strong className="font-medium text-paper">
                abrir o editor com vontade todos os dias
              </strong>
              .
            </p>
            <p className="about-p">
              Essa curiosidade virou carreira. Me formei em{" "}
              <strong className="font-medium text-paper">
                Análise e Desenvolvimento de Sistemas
              </strong>
              , comecei numa agência de publicidade e, de lá para cá, cruzei o
              oceano para construir produtos digitais no Brasil e em Portugal.
            </p>
            <p className="about-p">
              Sou movido por aprender: passo horas explorando novas ferramentas,
              arquitetura e boas práticas, e{" "}
              <strong className="font-medium text-paper">
                adoro dividir o que aprendo com o time
              </strong>
              . Para mim, um bom software é aquele que funciona bem hoje e
              continua fácil de evoluir amanhã.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-6 border-t border-paper/10 pt-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-5xl font-bold md:text-6xl">
                  <span className="about-stat-value" data-value={stat.value}>
                    0
                  </span>
                  <span className="text-accent">{stat.suffix}</span>
                </dd>
                <dt className="mt-2 text-sm text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
