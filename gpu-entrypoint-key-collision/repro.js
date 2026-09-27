import { GpuProgram, PipelineSystem, ShaderOverrides } from 'pixi.js';

const source = `
@vertex fn ab() -> @builtin(position) vec4f { return vec4f(0.0); }
@vertex fn a() -> @builtin(position) vec4f { return vec4f(1.0); }
@fragment fn c() -> @location(0) vec4f { return vec4f(0.0); }
@fragment fn bc() -> @location(0) vec4f { return vec4f(1.0); }
`;
const make = (vertexEntry, fragmentEntry) => GpuProgram.from({
    vertex: { source, entryPoint: vertexEntry },
    fragment: { source, entryPoint: fragmentEntry },
});
const first = make('ab', 'c');
const second = make('a', 'bc');
const pipeline = new PipelineSystem({});
const created = [];
pipeline._createPipeline = (_geometry, program) =>
{
    const marker = `${program.vertex.entryPoint}/${program.fragment.entryPoint}`;
    created.push(marker);
    return { marker };
};
const geometry = { _layoutKey: 9, topology: 'triangle-list' };
const state = { data: 0, _blendModeId: 0 };
const overrides = new ShaderOverrides({});
const firstPipeline = pipeline.getPipeline(geometry, first, state, 'triangle-list', overrides);
const secondPipeline = pipeline.getPipeline(geometry, second, state, 'triangle-list', overrides);
const observed = {
    firstKey: first._layoutKey,
    secondKey: second._layoutKey,
    created,
    firstMarker: firstPipeline.marker,
    secondMarker: secondPipeline.marker,
    samePipeline: firstPipeline === secondPipeline,
};
const reproduced = first._layoutKey === second._layoutKey
    && created.join() === 'ab/c'
    && secondPipeline.marker === 'ab/c'
    && firstPipeline === secondPipeline;
document.querySelector('#result').textContent = `${reproduced ? 'REPRODUCED' : 'NOT REPRODUCED'}: ${JSON.stringify(observed)}`;
