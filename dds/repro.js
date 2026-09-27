import { parseDDS } from '../node_modules/pixi.js/lib/compressed-textures/dds/parseDDS.mjs';
const expected = {
  'r8-4x4-two-mips.dds': 'throws',
  'rg8-4x4-two-mips.dds': 'throws',
  'r16-4x4-two-mips.dds': 'throws',
  'r8-4x4-one-mip.dds': 'succeeds',
  'rgba8-4x4-two-mips-control.dds': 'succeeds',
};
const observed = {};
for (const file of Object.keys(expected)) {
  try {
    const data = await fetch(`../fixtures/${file}`).then(r => r.arrayBuffer());
    parseDDS(data, ['r8unorm', 'rg8unorm', 'r16uint', 'rgba8unorm']);
    observed[file] = 'succeeds';
  } catch (error) { observed[file] = error instanceof RangeError ? 'throws' : String(error); }
}
const passed = Object.keys(expected).every(file => observed[file] === expected[file]);
document.querySelector('#result').textContent = `${passed ? 'REPRODUCED' : 'NOT REPRODUCED'}: ${JSON.stringify(observed)}`;
