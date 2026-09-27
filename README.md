# PixiJS 8.21.0: minimal bug reproductions

Tested against npm `pixi.js@8.21.0`, matching PixiJS source commit `27071aa0096d8749bfdb189857c58178c30cd153`.

## Run

Requirements: Node.js, npm, Firefox/Camoufox.

```sh
npm ci
npm start
```

Open:

- <http://127.0.0.1:4173/ktx/>
- <http://127.0.0.1:4173/dds/>
- <http://127.0.0.1:4173/accessibility/>
- <http://127.0.0.1:4173/canvas-observer/>
- <http://127.0.0.1:4173/dom-container-replacement/>
- <http://127.0.0.1:4173/webgpu-cache-key-collision/>
- <http://127.0.0.1:4173/asset-load-unload-race/>

## Reproductions

### `parseKTX`: valid uncompressed KTX1 with mipmaps

`ktx/repro.js` parses `fixtures/valid-3x3-two-level.ktx`: RGBA8, 3×3, two mip levels. The second level is 1×1 (4 bytes), but `parseKTX` calculates a 4×4 uncompressed level (64 bytes). Constructing its `Uint8Array` throws `RangeError: Invalid typed array length: 64`.

`fixtures/control-3x3-one-level.ktx` is the equivalent one-level control fixture.

### `AccessibilitySystem`: observer survives destruction

`accessibility/repro.js` initializes `AccessibilitySystem` while the renderer canvas is detached, destroys the system, then appends the retained canvas. The attachment `MutationObserver` survives destruction. Its callback accesses the destroyed system and throws `TypeError` while reading `ensureAttached`.

### `parseDDS`: uncompressed mipmaps use a hard-coded four bytes per pixel

`dds/repro.js` compares valid DX10 DDS files. One-level `R8_UNORM` and two-level `R8G8B8A8_UNORM` controls parse successfully. Two-level `R8_UNORM`, `R8G8_UNORM`, and `R16_UNORM` files throw `RangeError` because the parser calculates every uncompressed level as four bytes per pixel.

### `CanvasObserver`: fallback ticker listener survives destruction

`canvas-observer/repro.js` removes `ResizeObserver` to select the documented ticker fallback, then compares `Ticker.shared.count` before creation, after destruction, and after ten create/destroy cycles. Every destroyed observer leaves one listener behind because `_tickerAttached` is never set to `true` when the listener is added.

### `DOMContainer`: replacing a rendered element leaves the old element attached

`dom-container-replacement/repro.js` renders element A, assigns element B through the documented `element` setter, and renders again. Both elements remain attached. Destroying the container removes B but leaves A orphaned. Query parameters provide controls for replacement before first render and removal through the stage.

### WebGPU attribute-layout cache collision

`webgpu-cache-key-collision/repro.js` follows pipeline creation order for two valid programs on the same geometry: a procedural program without vertex attributes, then a program using `aPosition` at location 0. Both receive attribute key 1 because `createIdFromString` looks up strings globally while allocating IDs per group. The second program reuses the first program's empty vertex-layout and binding-name cache entries.

### Assets load/unload race returns and caches a destroyed texture

`asset-load-unload-race/repro.js` starts a real PNG load, overlaps `Assets.unload()` with a second `Assets.load()` for the same URL, and shows that both callers resolve to one texture that unload immediately destroys. The global cache still points to that destroyed texture. Query parameters provide load-only and sequential unload/reload controls.

## Expected result

All seven pages were verified in headed Camoufox. No PixiJS source is modified.
