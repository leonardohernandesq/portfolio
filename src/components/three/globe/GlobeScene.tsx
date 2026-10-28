'use client';

import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import '@/lib/three';
import { drag } from './drag';
import { Globe } from './Globe';

export default function GlobeScene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    Object.assign(drag, { active: true, lastX: e.clientX, lastY: e.clientY });
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag;
    if (!d.active) return;
    d.vx = (e.clientX - d.lastX) * 0.004;
    d.vy = (e.clientY - d.lastY) * 0.004;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
  };
  const onPointerUp = () => {
    drag.active = false;
  };

  return (
    <div
      ref={wrapper}
      className="relative size-full touch-pan-y"
      data-cursor="Arraste"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <Canvas frameloop={visible ? 'always' : 'never'} dpr={[1, 2]} camera={{ position: [0, 0, 6.6], fov: 40 }}>
        <Globe onHover={setActive} />
      </Canvas>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 text-center font-display text-xs uppercase tracking-[0.3em]">
        <span className={active ? 'text-accent' : 'text-muted'}>{active ?? 'Arraste para girar'}</span>
      </div>
    </div>
  );
}
