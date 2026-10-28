export const particleVertexShader = `
attribute float aEnergy;
uniform float uSize;
uniform float uPixelRatio;
varying float vEnergy;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = uSize * uPixelRatio * (1.0 + aEnergy * 1.4) / -mvPosition.z;
  vEnergy = aEnergy;
}
`;

export const particleFragmentShader = `
uniform vec3 uColor;
uniform vec3 uAccent;
varying float vEnergy;

void main() {
  float alpha = smoothstep(0.5, 0.1, length(gl_PointCoord - 0.5));
  vec3 color = mix(uColor, uAccent, vEnergy);
  gl_FragColor = vec4(color, alpha * (0.4 + vEnergy * 0.6));
}
`;
