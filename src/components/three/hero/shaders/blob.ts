import { noise } from './noise';

export const blobVertexShader = `
uniform float uTime;
uniform float uDistort;
uniform vec2 uMouse;
varying float vNoise;
varying vec3 vNormal;
varying vec3 vView;

${noise}

void main() {
  vec3 offset = vec3(uMouse * 0.6, uTime * 0.18);
  float n = snoise(normal * 1.1 + offset);
  float detail = snoise(normal * 3.2 - uTime * 0.35) * 0.18;
  float displacement = (n + detail) * uDistort;

  vec3 pos = position + normal * displacement;
  vNoise = n;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mvPosition.xyz);
  gl_Position = projectionMatrix * mvPosition;
}
`;

export const blobFragmentShader = `
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uTime;
varying float vNoise;
varying vec3 vNormal;
varying vec3 vView;

void main() {
  float fresnel = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.2);
  float bands = sin(vNoise * 9.0 + uTime * 0.8) * 0.5 + 0.5;

  vec3 color = mix(uColorA, uColorB, smoothstep(-0.5, 0.9, vNoise));
  color = mix(color, uColorC, fresnel * 0.9);
  color += uColorB * bands * 0.08;

  gl_FragColor = vec4(color, 1.0);
}
`;
