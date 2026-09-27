import { createUboElementsWGSL, createUboSyncFunctionWGSL, UboSystem, UniformGroup } from 'pixi.js';

const mode = new URLSearchParams(location.search).get('mode') || 'collision';
const one = new UniformGroup({ uValues: { type: 'f32', size: 1, value: 1 } });
const four = new UniformGroup({ uValues: { type: 'f32', size: 4, value: new Float32Array([1, 2, 3, 4]) } });
const ubo = new UboSystem({ createUboElements: createUboElementsWGSL, generateUboSync: createUboSyncFunctionWGSL });
if (mode === 'collision') ubo.getUniformGroupData(one);
const fourData = ubo.getUniformGroupData(four);
ubo.updateUniformGroup(four);
const observed = {
    mode,
    oneSignature: one._signature,
    fourSignature: four._signature,
    layoutSize: fourData.layout.size,
    buffer: Array.from(four.buffer.data).map((value) => Number.isNaN(value) ? 'NaN' : value),
};
const expected = mode === 'collision' ? ['NaN', 0, 0, 0] : [1, 2, 3, 4];
const passed = JSON.stringify(observed.buffer) === JSON.stringify(expected);
document.querySelector('#result').textContent = `${passed ? (mode === 'collision' ? 'REPRODUCED' : 'CONTROL') : 'FAILED'}: ${JSON.stringify(observed)}`;
