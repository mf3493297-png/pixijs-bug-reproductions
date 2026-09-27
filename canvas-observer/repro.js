import { CanvasObserver, Ticker } from 'pixi.js';

const result = document.querySelector('#result');
const original = Object.getOwnPropertyDescriptor(globalThis, 'ResizeObserver');
delete globalThis.ResizeObserver;

try
{
    const baseline = Ticker.shared.count;
    const canvas = document.createElement('canvas');
    const renderer = { canvas, resolution: 1 };
    const make = () => new CanvasObserver({
        renderer,
        domElement: document.createElement('div'),
    });

    const control = make();
    const afterCreate = Ticker.shared.count;
    control.destroy();
    const afterDestroy = Ticker.shared.count;

    for (let i = 0; i < 10; i++) make().destroy();

    const afterTenCycles = Ticker.shared.count;
    const reproduced = afterCreate === baseline + 1
        && afterDestroy === baseline + 1
        && afterTenCycles === baseline + 11;

    result.textContent = `${reproduced ? 'REPRODUCED' : 'NOT REPRODUCED'}: ${JSON.stringify({
        baseline,
        afterCreate,
        afterDestroy,
        afterTenCycles,
    })}`;
}
finally
{
    if (original) Object.defineProperty(globalThis, 'ResizeObserver', original);
}
