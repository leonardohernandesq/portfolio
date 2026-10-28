'use client';

import { Canvas } from '@react-three/fiber';
import '@/lib/three';
import { Blob } from './Blob';
import { Particles } from './Particles';

type HeroSceneProps = {
  active: boolean;
  eventSource: React.RefObject<HTMLElement | null>;
};

export default function HeroScene({ active, eventSource }: HeroSceneProps) {
  return (
    <Canvas
      eventSource={eventSource as React.RefObject<HTMLElement>}
      eventPrefix="client"
      frameloop={active ? 'always' : 'never'}
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Blob />
      <Particles />
    </Canvas>
  );
}
