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

## Reproductions

### `parseKTX`: valid uncompressed KTX1 with mipmaps

`ktx/repro.js` parses `fixtures/valid-3x3-two-level.ktx`: RGBA8, 3×3, two mip levels. The second level is 1×1 (4 bytes), but `parseKTX` calculates a 4×4 uncompressed level (64 bytes). Constructing its `Uint8Array` throws `RangeError: Invalid typed array length: 64`.

`fixtures/control-3x3-one-level.ktx` is the equivalent one-level control fixture.

### `AccessibilitySystem`: observer survives destruction

`accessibility/repro.js` initializes `AccessibilitySystem` while the renderer canvas is detached, destroys the system, then appends the retained canvas. The attachment `MutationObserver` survives destruction. Its callback accesses the destroyed system and throws `TypeError` while reading `ensureAttached`.

### `parseDDS`: uncompressed mipmaps use a hard-coded four bytes per pixel

`dds/repro.js` compares valid DX10 DDS files. One-level `R8_UNORM` and two-level `R8G8B8A8_UNORM` controls parse successfully. Two-level `R8_UNORM`, `R8G8_UNORM`, and `R16_UNORM` files throw `RangeError` because the parser calculates every uncompressed level as four bytes per pixel.

## Expected result

All three pages begin with `REPRODUCED:`. They were verified together in headed Camoufox. No PixiJS source is modified.
