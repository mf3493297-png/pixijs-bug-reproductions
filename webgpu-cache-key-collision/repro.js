import { PipelineSystem } from 'pixi.js';

const pipeline = new PipelineSystem({});
const buffer = {};
const geometry = {
    _layoutKey: 7,
    buffers: [buffer],
    attributes: {
        aPosition: {
            buffer,
            offset: 0,
            format: 'float32x2',
            stride: 8,
            instance: false,
        },
    },
};
const proceduralProgram = { _attributeLocationsKey: undefined, attributeData: {} };
const positionProgram = {
    _attributeLocationsKey: undefined,
    attributeData: { aPosition: { location: 0 } },
};

// Pipeline creation computes and caches layouts before geometry binding.
const proceduralLayouts = pipeline._createVertexBufferLayouts(geometry, proceduralProgram);
const positionLayouts = pipeline._createVertexBufferLayouts(geometry, positionProgram);
const positionNames = pipeline.getBufferNamesToBind(geometry, positionProgram);
const observed = {
    proceduralProgramKey: proceduralProgram._attributeLocationsKey,
    positionProgramKey: positionProgram._attributeLocationsKey,
    proceduralLayouts,
    positionLayouts,
    positionNames: { ...positionNames },
    sameLayouts: proceduralLayouts === positionLayouts,
};
const reproduced = proceduralProgram._attributeLocationsKey === positionProgram._attributeLocationsKey
    && proceduralLayouts.length === 0
    && positionLayouts.length === 0
    && proceduralLayouts === positionLayouts
    && Object.keys(positionNames).length === 0;

document.querySelector('#result').textContent = `${reproduced ? 'REPRODUCED' : 'NOT REPRODUCED'}: ${JSON.stringify(observed)}`;
