"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";
import { heroState } from "@/lib/heroState";
import { onLoaded } from "@/lib/loader";
import { socials } from "@/data/content";
import { Magnetic } from "@/components/ui/Magnetic";

const HeroScene = dynamic(() => import("@/components/three/hero/HeroScene"), { ssr: false });

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(true);

  useGSAP(
    (_, contextSafe) => {
      heroState.intro = 0;
      gsap.set(".hero-fade", { autoAlpha: 0, y: 24 });

      const play = contextSafe!(() => {
        const split = SplitText.create(".hero-title", {
          type: "chars",
          mask: "chars",
        });
        gsap
          .timeline()
          .to(
            heroState,
            { intro: 1, duration: 2.4, ease: "elastic.out(1, 0.55)" },
            0,
          )
          .from(
            split.chars,
            { yPercent: 115, duration: 1.4, ease: "expo.out", stagger: 0.04 },
            0.25,
          )
          .to(
            ".hero-fade",
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.1,
            },
            0.9,
          );
      });
      const off = onLoaded(play);

      const scrub = {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };
      gsap.to(".hero-title-wrap", {
        yPercent: -35,
        ease: "none",
        scrollTrigger: scrub,
      });
      gsap.to(".hero-ui", {
        yPercent: -20,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: { ...scrub, end: "60% top" },
      });

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          heroState.scroll = self.progress;
        },
        onLeave: () => setActive(false),
        onEnterBack: () => setActive(true),
      });

      return () => off();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="home"
      className="relative h-svh min-h-155 w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <HeroScene active={active} eventSource={root} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-ink)_90%)]" />

      <div className="hero-title-wrap pointer-events-none absolute inset-0 flex items-center px-4 mix-blend-difference md:px-10">
        <h1 className="hero-title w-full font-display text-[14.5vw] font-bold uppercase leading-[0.82] tracking-tighter text-paper md:text-[13.5vw]">
          <span className="block">Leonardo</span>
          <span className="block text-right">Hernandes</span>
        </h1>
      </div>

      <div className="hero-ui relative flex h-full flex-col justify-between px-4 pb-8 pt-28 md:px-10 md:pb-10">
        <div className="hero-fade flex justify-between font-display text-xs uppercase tracking-[0.3em] text-muted">
          <span>Frontend Developer</span>
          <span className="hidden md:block">Lisboa, Portugal</span>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="hero-fade max-w-sm text-balance text-lg leading-relaxed text-muted">
            Desenvolvedor front-end com{" "}
            <span className="text-paper">6+ anos de experiência</span> criando
            interfaces rápidas, acessíveis e cheias de personalidade.
          </p>

          <div className="hero-fade flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-14 items-center justify-center rounded-full border border-paper/20 backdrop-blur-sm transition-colors duration-500 hover:border-accent hover:bg-accent hover:text-ink"
                >
                  <Icon size={20} />
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="hero-fade hidden items-center gap-4 font-display text-xs uppercase tracking-[0.3em] text-muted md:flex">
            Scroll
            <span className="relative block h-12 w-px overflow-hidden bg-paper/15">
              <span className="absolute inset-x-0 top-0 block h-1/2 animate-scroll-line bg-accent" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
