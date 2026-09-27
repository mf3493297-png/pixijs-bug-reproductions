import { Assets } from 'pixi.js';

await Assets.init();
const mode = new URLSearchParams(location.search).get('mode') || 'race';
const url = `./bunny.png?${mode}`;
let first;
let second;

if (mode === 'race')
{
    const firstLoad = Assets.load(url);
    await Promise.resolve();
    const unload = Assets.unload(url);
    const secondLoad = Assets.load(url);
    [first, second] = await Promise.all([firstLoad, secondLoad]);
    await unload;
}
else if (mode === 'load-only')
{
    second = await Assets.load(url);
}
else
{
    first = await Assets.load(url);
    await Assets.unload(url);
    second = await Assets.load(url);
}

const observed = {
    mode,
    firstDestroyed: first?.destroyed ?? null,
    secondDestroyed: second.destroyed,
    secondSourceNull: second.source === null,
    cachePresent: Assets.cache.has(url),
    cacheIsSecond: Assets.get(url) === second,
    sameInstance: first ? first === second : null,
};
const reproduced = mode === 'race'
    ? observed.sameInstance && observed.secondDestroyed && observed.secondSourceNull
        && observed.cachePresent && observed.cacheIsSecond
    : !observed.secondDestroyed && !observed.secondSourceNull && observed.cacheIsSecond;

document.querySelector('#result').textContent = `${reproduced ? (mode === 'race' ? 'REPRODUCED' : 'CONTROL') : 'FAILED'}: ${JSON.stringify(observed)}`;
