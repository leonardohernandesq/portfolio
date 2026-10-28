'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, SplitText, useGSAP } from '@/lib/gsap';

export function RevealHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    SplitText.create(ref.current, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          rotate: 3,
          duration: 1.3,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        }),
    });
  });

  return (
    <h2 ref={ref} className={className}>
      {children}
    </h2>
  );
}
