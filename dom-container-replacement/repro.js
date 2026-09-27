import { Application, DOMContainer } from 'pixi.js';

const result = document.querySelector('#result');
const mode = new URLSearchParams(location.search).get('mode') || 'replace-after-render';
const app = new Application();
await app.init({ preference: 'webgl', width: 64, height: 64 });
document.body.appendChild(app.canvas);

const first = document.createElement('input');
first.id = 'first';
const second = document.createElement('input');
second.id = 'second';
const container = new DOMContainer({ element: first });
app.stage.addChild(container);

const render = async () =>
{
    app.renderer.render(app.stage);
    await new Promise((resolve) => requestAnimationFrame(resolve));
};

if (mode === 'replace-before-render') container.element = second;
await render();
const firstAttachedBefore = first.isConnected;

if (mode !== 'replace-before-render')
{
    container.element = second;
    await render();
}

if (mode === 'remove-after-replace')
{
    app.stage.removeChild(container);
    await render();
}
else if (mode === 'destroy-after-replace')
{
    container.destroy();
}

const observed = {
    mode,
    firstAttachedBefore,
    firstAttachedAfter: first.isConnected,
    secondAttachedAfter: second.isConnected,
    attachedInputs: [...document.querySelectorAll('input')].map((element) => element.id),
};

const reproduced = mode === 'replace-after-render'
    ? observed.attachedInputs.join() === 'first,second'
    : mode === 'destroy-after-replace'
        ? observed.attachedInputs.join() === 'first'
        : false;
result.textContent = `${reproduced ? 'REPRODUCED' : 'CONTROL'}: ${JSON.stringify(observed)}`;
