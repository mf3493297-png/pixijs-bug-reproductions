import { parseKTX } from '../node_modules/pixi.js/lib/compressed-textures/ktx/parseKTX.mjs';
const result = document.querySelector('#result');
try {
  const input = await fetch('../fixtures/valid-3x3-two-level.ktx').then(r => r.arrayBuffer());
  parseKTX(input, ['rgba8unorm-srgb']);
  result.textContent = 'NOT REPRODUCED: parseKTX returned';
} catch (error) {
  result.textContent = error instanceof RangeError ? `REPRODUCED: ${error}` : `UNEXPECTED: ${error}`;
}
