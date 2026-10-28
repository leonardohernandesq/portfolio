'use client';

import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { skills } from '@/data/content';
import { BADGE, iconPositions, makeBadge, RADIUS } from './geometry';

const worldPosition = new THREE.Vector3();

export function Icons({ onHover }: { onHover: (name: string | null) => void }) {
  const [textures, setTextures] = useState<THREE.Texture[] | null>(null);
  const sprites = useRef<(THREE.Sprite | null)[]>([]);
  const hovered = useRef(-1);

  useEffect(() => {
    let cancelled = false;
    let loaded: THREE.Texture[] = [];
    Promise.all(skills.map((skill) => makeBadge(skill.icon))).then((result) => {
      loaded = result;
      if (cancelled) result.forEach((texture) => texture.dispose());
      else setTextures(result);
    });
    return () => {
      cancelled = true;
      loaded.forEach((texture) => texture.dispose());
    };
  }, []);

  useFrame(() => {
    sprites.current.forEach((sprite, i) => {
      if (!sprite) return;
      sprite.getWorldPosition(worldPosition);
      const front = THREE.MathUtils.clamp((worldPosition.z + RADIUS) / (RADIUS * 2), 0, 1);
      (sprite.material as THREE.SpriteMaterial).opacity = 0.12 + front * 0.88;
      const target = BADGE * (0.55 + front * 0.45) * (hovered.current === i ? 1.4 : 1);
      const scale = THREE.MathUtils.lerp(sprite.scale.x, target, 0.15);
      sprite.scale.set(scale, scale, 1);
    });
  });

  if (!textures) return null;

  return (
    <>
      {skills.map((skill, i) => (
        <sprite
          key={skill.name}
          ref={(sprite) => {
            sprites.current[i] = sprite;
          }}
          position={iconPositions[i]}
          scale={[BADGE, BADGE, 1]}
          onPointerOver={(e) => {
            e.stopPropagation();
            hovered.current = i;
            onHover(skill.name);
          }}
          onPointerOut={() => {
            if (hovered.current === i) hovered.current = -1;
            onHover(null);
          }}
        >
          <spriteMaterial map={textures[i]} transparent depthWrite={false} />
        </sprite>
      ))}
    </>
  );
}
