'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { heroState } from '@/lib/heroState';
import { particleFragmentShader, particleVertexShader } from './shaders/particles';

const PARTICLE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 1100 : 2600;

function makeField(count: number) {
  const home = new Float32Array(count * 3);
  const phase = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    home[i * 3] = (Math.random() * 2 - 1) * 7;
    home[i * 3 + 1] = (Math.random() * 2 - 1) * 4.2;
    home[i * 3 + 2] = -3 + Math.random() * 4.5;
    phase[i] = Math.random() * Math.PI * 2;
  }
  return {
    home,
    phase,
    positions: home.slice(),
    velocities: new Float32Array(count * 3),
    energy: new Float32Array(count),
  };
}

const field = makeField(PARTICLE_COUNT);

export function Particles() {
  const geometry = useRef<THREE.BufferGeometry>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const lastPointer = useRef(new THREE.Vector2());

  const uniforms = useMemo(
    () => ({
      uSize: { value: 14 },
      uPixelRatio: { value: 1 },
      uColor: { value: new THREE.Color('#f3f1ec') },
      uAccent: { value: new THREE.Color('#f18f01') },
    }),
    [],
  );

  useFrame((state, delta) => {
    const g = geometry.current;
    const u = material.current?.uniforms;
    if (!g || !u) return;
    u.uPixelRatio.value = state.viewport.dpr;

    const { home, phase, positions, velocities, energy } = field;
    const camera = state.camera as THREE.PerspectiveCamera;
    const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const aspect = state.size.width / state.size.height;
    const step = Math.min(delta * 60, 2);
    const time = state.clock.elapsedTime;
    const scrollOffset = heroState.scroll * 1.5;

    const pointer = state.pointer;
    const hasPointer = pointer.x !== 0 || pointer.y !== 0;
    const windX = pointer.x - lastPointer.current.x;
    const windY = pointer.y - lastPointer.current.y;
    lastPointer.current.copy(pointer);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const homeX = home[i3];
      const homeY = home[i3 + 1] + Math.sin(time * 0.4 + phase[i]) * 0.12 + scrollOffset;
      let x = positions[i3];
      let y = positions[i3 + 1];

      const depth = camera.position.z - home[i3 + 2];
      const halfH = tanHalf * depth;
      const halfW = halfH * aspect;
      const radius = 0.24 * depth;

      if (hasPointer) {
        const dx = x - pointer.x * halfW;
        const dy = y - pointer.y * halfH;
        const distSq = dx * dx + dy * dy;
        if (distSq < radius * radius) {
          const dist = Math.sqrt(distSq) || 0.0001;
          const falloff = 1 - dist / radius;
          const push = falloff * falloff * 0.05 * depth * step;
          velocities[i3] += (dx / dist) * push + windX * halfW * falloff * 0.25;
          velocities[i3 + 1] += (dy / dist) * push + windY * halfH * falloff * 0.25;
        }
      }

      velocities[i3] += (homeX - x) * 0.012 * step;
      velocities[i3 + 1] += (homeY - y) * 0.012 * step;
      velocities[i3] *= Math.pow(0.9, step);
      velocities[i3 + 1] *= Math.pow(0.9, step);
      x += velocities[i3] * step;
      y += velocities[i3 + 1] * step;
      positions[i3] = x;
      positions[i3 + 1] = y;

      const offset = Math.hypot(x - homeX, y - homeY) / (0.12 * depth);
      energy[i] += (Math.min(offset, 1) - energy[i]) * 0.1;
    }

    g.attributes.position.needsUpdate = true;
    g.attributes.aEnergy.needsUpdate = true;
  });

  return (
    <points frustumCulled={false}>
      <bufferGeometry ref={geometry}>
        <bufferAttribute attach="attributes-position" args={[field.positions, 3]} />
        <bufferAttribute attach="attributes-aEnergy" args={[field.energy, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
