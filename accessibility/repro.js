import { AccessibilitySystem, Application } from 'pixi.js';

const result = document.querySelector('#result');
const errors = [];
window.addEventListener('error', (event) => errors.push(event.message));

const app = new Application();
await app.init({ preference: 'webgl' });
const canvas = app.canvas;
const system = new AccessibilitySystem(app.renderer);
system.init({ accessibilityOptions: { enabledByDefault: true } });
system.destroy();
document.body.appendChild(canvas);
await new Promise((resolve) => setTimeout(resolve, 100));

result.textContent = errors.some((message) => message.includes('ensureAttached'))
    ? `REPRODUCED: ${errors.find((message) => message.includes('ensureAttached'))}`
    : `NOT REPRODUCED: ${JSON.stringify(errors)}`;
app.destroy(false, false);
