'use client';

import { useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { gsap, SplitText, useGSAP } from '@/lib/gsap';
import { socials } from '@/data/content';
import { Footer } from './Footer';
import { Magnetic } from '@/components/ui/Magnetic';
import { SectionLabel } from '@/components/ui/SectionLabel';

const whatsapp = socials.find((social) => social.label === 'WhatsApp')!;

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create('.contact-title', { type: 'chars', mask: 'chars' });
      gsap.from(split.chars, {
        yPercent: 110,
        rotate: 8,
        duration: 1.4,
        ease: 'expo.out',
        stagger: 0.03,
        scrollTrigger: { trigger: '.contact-title', start: 'top 80%' },
      });

      gsap.fromTo(
        '.contact-glow',
        { scale: 0.3, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'center center', scrub: true },
        },
      );

      gsap.from('.contact-cta', {
        scale: 0,
        rotate: -90,
        duration: 1.4,
        ease: 'elastic.out(1, 0.6)',
        scrollTrigger: { trigger: '.contact-cta', start: 'top 90%' },
      });

      gsap.from('.contact-social', {
        y: 30,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-socials', start: 'top 95%' },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="contact"
      className="relative flex min-h-svh flex-col justify-between gap-20 overflow-hidden px-4 pb-8 pt-32 md:px-10 md:pt-36"
    >
      <div className="contact-glow pointer-events-none absolute -bottom-1/2 left-1/2 aspect-square w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(241,143,1,0.22),transparent_60%)]" />

      <div className="relative">
        <SectionLabel index="05">Contato</SectionLabel>
        <h2 className="contact-title mt-10 font-display text-[16vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[12vw]">
          <span className="block">Vamos</span>
          <span className="block text-accent">conversar?</span>
        </h2>
      </div>

      <div className="relative grid items-end gap-12 md:grid-cols-2">
        <p className="max-w-md text-lg leading-relaxed text-muted">
          Procurando alguém para tirar uma ideia do papel ou reforçar o seu time? Estou em Lisboa, aberto a novos
          desafios e respondo rápido.
        </p>
        <div className="flex md:justify-end">
          <Magnetic strength={0.3}>
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="contact-cta group flex size-44 flex-col items-center justify-center gap-2 rounded-full bg-accent font-display text-lg font-bold uppercase tracking-wide text-ink md:size-56"
            >
              <FiArrowUpRight className="size-8 transition-transform duration-700 ease-expo group-hover:rotate-45" />
              Fale comigo
            </a>
          </Magnetic>
        </div>
      </div>

      <ul className="contact-socials relative flex flex-col border-t border-paper/10 md:flex-row">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label} className="contact-social flex-1 border-b border-paper/10 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between py-6 font-display text-2xl uppercase tracking-tight"
            >
              <span className="flex items-center gap-4">
                <Icon className="text-muted transition-colors duration-500 group-hover:text-accent" size={20} />
                <span className="relative overflow-hidden">
                  <span className="block transition-transform duration-500 ease-expo group-hover:-translate-y-full">
                    {label}
                  </span>
                  <span className="absolute inset-0 block translate-y-full text-accent transition-transform duration-500 ease-expo group-hover:translate-y-0">
                    {label}
                  </span>
                </span>
              </span>
              <FiArrowUpRight className="transition-transform duration-500 ease-expo group-hover:rotate-45" />
            </a>
          </li>
        ))}
      </ul>

      <Footer />
    </section>
  );
}
