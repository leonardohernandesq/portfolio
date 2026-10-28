'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { drag } from './drag';
import { dotPositions, gridGeometry, RADIUS } from './geometry';
import { Icons } from './Icons';

export function Globe({ onHover }: { onHover: (name: string | null) => void }) {
  const globe = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const g = globe.current;
    const d = drag;
    if (!g) return;
    const step = Math.min(delta * 60, 2);
    const lerp = THREE.MathUtils.lerp;

    if (!d.active) {
      d.vx = lerp(d.vx, 0.004, 0.03);
      d.vy = lerp(d.vy, 0, 0.06);
      g.rotation.x = lerp(g.rotation.x, -state.pointer.y * 0.3, 0.03);
    }
    g.rotation.y += d.vx * step;
    g.rotation.x = THREE.MathUtils.clamp(g.rotation.x + d.vy * step, -0.7, 0.7);

    if (ring.current) ring.current.rotation.z += delta * 0.5;
  });

  return (
    <>
      <group ref={globe}>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[dotPositions, 3]} />
          </bufferGeometry>
          <pointsMaterial size={0.022} color="#f3f1ec" transparent opacity={0.35} sizeAttenuation depthWrite={false} />
        </points>
        <lineSegments geometry={gridGeometry}>
          <lineBasicMaterial color="#f3f1ec" transparent opacity={0.09} depthWrite={false} />
        </lineSegments>
        <mesh>
          <sphereGeometry args={[RADIUS * 0.95, 48, 32]} />
          <meshBasicMaterial color="#0b0b0c" transparent opacity={0.55} />
        </mesh>
        <Icons onHover={onHover} />
      </group>

      <group rotation={[Math.PI / 2 - 0.45, 0.3, 0]}>
        <group ref={ring}>
          <mesh>
            <torusGeometry args={[RADIUS * 1.22, 0.005, 8, 128]} />
            <meshBasicMaterial color="#f18f01" transparent opacity={0.7} />
          </mesh>
          <mesh position={[RADIUS * 1.22, 0, 0]}>
            <sphereGeometry args={[0.045, 16, 12]} />
            <meshBasicMaterial color="#f18f01" />
          </mesh>
        </group>
      </group>
    </>
  );
}
