import * as THREE from 'three';
import { skills } from '@/data/content';

export const RADIUS = 1.6;
export const BADGE = 0.46;

function fibonacciSphere(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - ((i + 0.5) / count) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = i * golden;
    points.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
  }
  return points;
}

export const iconPositions = fibonacciSphere(skills.length, RADIUS * 1.14);
export const dotPositions = new Float32Array(fibonacciSphere(900, RADIUS * 0.985).flatMap((p) => [p.x, p.y, p.z]));

function makeGrid(radius: number) {
  const points: THREE.Vector3[] = [];
  const segments = 96;
  const circle = (fn: (t: number) => THREE.Vector3) => {
    for (let i = 0; i < segments; i++) {
      points.push(fn((i / segments) * Math.PI * 2), fn(((i + 1) / segments) * Math.PI * 2));
    }
  };
  [-60, -30, 0, 30, 60].forEach((degrees) => {
    const lat = THREE.MathUtils.degToRad(degrees);
    const ring = Math.cos(lat) * radius;
    circle((t) => new THREE.Vector3(Math.cos(t) * ring, Math.sin(lat) * radius, Math.sin(t) * ring));
  });
  for (let k = 0; k < 6; k++) {
    const lon = (k / 6) * Math.PI;
    circle((t) => new THREE.Vector3(Math.cos(t) * Math.cos(lon) * radius, Math.sin(t) * radius, Math.cos(t) * Math.sin(lon) * radius));
  }
  return new THREE.BufferGeometry().setFromPoints(points);
}

export const gridGeometry = makeGrid(RADIUS);

export function makeBadge(src: string) {
  return new Promise<THREE.Texture>((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const size = 256;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d')!;

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 6, 0, Math.PI * 2);
      ctx.fillStyle = '#f3f1ec';
      ctx.fill();

      const box = 136;
      const ratio = image.naturalWidth && image.naturalHeight ? image.naturalWidth / image.naturalHeight : 1;
      const width = ratio >= 1 ? box : box * ratio;
      const height = ratio >= 1 ? box / ratio : box;
      ctx.drawImage(image, (size - width) / 2, (size - height) / 2, width, height);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 4;
      resolve(texture);
    };
    image.onerror = reject;
    image.src = src;
  });
}
