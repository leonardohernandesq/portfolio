'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { heroState } from '@/lib/heroState';
import { blobFragmentShader, blobVertexShader } from './shaders/blob';

export function Blob() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDistort: { value: 0.32 },
      uMouse: { value: new THREE.Vector2() },
      uColorA: { value: new THREE.Color('#101a26') },
      uColorB: { value: new THREE.Color('#f18f01') },
      uColorC: { value: new THREE.Color('#ffe3bd') },
    }),
    [],
  );

  useFrame((state, delta) => {
    const m = mesh.current;
    const u = material.current?.uniforms;
    if (!m || !u) return;

    u.uTime.value += delta;
    (u.uMouse.value as THREE.Vector2).lerp(state.pointer, 0.04);
    u.uDistort.value = THREE.MathUtils.lerp(u.uDistort.value, 0.32 + heroState.scroll * 0.55, 0.08);

    const responsive = Math.min(1, state.viewport.width / 6.5);
    m.scale.setScalar(Math.max(heroState.intro, 0.0001) * responsive * (1 + heroState.scroll * 0.5));
    m.position.y = THREE.MathUtils.lerp(m.position.y, -heroState.scroll * 1.2, 0.1);

    m.rotation.y += delta * 0.12;
    m.rotation.x = THREE.MathUtils.lerp(m.rotation.x, state.pointer.y * 0.35, 0.04);
    m.rotation.z = THREE.MathUtils.lerp(m.rotation.z, -state.pointer.x * 0.35, 0.04);
  });

  return (
    <mesh ref={mesh} scale={0}>
      <icosahedronGeometry args={[1.5, 96]} />
      <shaderMaterial ref={material} uniforms={uniforms} vertexShader={blobVertexShader} fragmentShader={blobFragmentShader} />
    </mesh>
  );
}
