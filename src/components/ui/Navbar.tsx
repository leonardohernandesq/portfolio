"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { onLoaded } from "@/lib/loader";
import { navLinks, socials } from "@/data/content";
import { RollLink } from "./RollLink";

export function Navbar() {
  const root = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);
  const menuTl = useRef<gsap.core.Timeline>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    (_, contextSafe) => {
      gsap.set(header.current, { yPercent: -100 });
      const off = onLoaded(
        contextSafe!(() =>
          gsap.to(header.current, {
            yPercent: 0,
            duration: 1.2,
            ease: "expo.out",
            delay: 0.7,
          }),
        ),
      );

      let hidden = false;
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const shouldHide = self.direction === 1 && self.scroll() > 200;
          if (shouldHide === hidden) return;
          hidden = shouldHide;
          gsap.to(header.current, {
            yPercent: shouldHide ? -100 : 0,
            duration: 0.6,
            ease: "power3.out",
          });
        },
      });

      menuTl.current = gsap
        .timeline({ paused: true })
        .set(".mobile-menu", { display: "flex" })
        .fromTo(
          ".mobile-menu",
          { clipPath: "circle(0% at 100% 0%)" },
          {
            clipPath: "circle(150% at 100% 0%)",
            duration: 1,
            ease: "expo.inOut",
          },
        )
        .from(
          ".mobile-link",
          { yPercent: 120, duration: 0.8, stagger: 0.06, ease: "expo.out" },
          "-=0.45",
        )
        .from(
          ".mobile-social",
          { autoAlpha: 0, y: 20, duration: 0.5, stagger: 0.05 },
          "-=0.5",
        );

      return () => off();
    },
    { scope: root },
  );

  useGSAP(
    () => {
      const tl = menuTl.current;
      if (!tl) return;
      if (open) tl.timeScale(1).play();
      else tl.timeScale(1.8).reverse();
    },
    { dependencies: [open] },
  );

  return (
    <div ref={root}>
      <header
        ref={header}
        className="fixed inset-x-0 top-0 z-50 mix-blend-difference"
      >
        <nav className="flex items-center justify-between px-4 py-6 text-paper md:px-10">
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight"
            onClick={() => setOpen(false)}
          >
            LH<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-10 font-display text-sm uppercase tracking-widest md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <RollLink href={link.href}>{link.label}</RollLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-7 bg-paper transition-transform duration-500 ease-expo ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-7 bg-paper transition-transform duration-500 ease-expo ${open ? "translate-y-[-3.5px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      <div className="mobile-menu fixed inset-0 z-40 hidden flex-col justify-between bg-paper px-4 pb-10 pt-28 text-ink md:hidden">
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <li key={link.href} className="overflow-hidden">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-link flex items-baseline gap-4 font-display text-[11vw] font-bold uppercase tracking-tight"
              >
                <span className="font-sans text-sm font-normal text-ink/50">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 text-sm uppercase tracking-widest">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="mobile-social"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
