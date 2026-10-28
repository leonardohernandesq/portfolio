import * as THREE from 'three';

THREE.setConsoleFunction((type, message, ...params) => {
  if (type === 'warn' && String(message).startsWith('THREE.Clock:')) return;
  (console[type as 'log' | 'warn' | 'error'] ?? console.log)(message, ...params);
});
