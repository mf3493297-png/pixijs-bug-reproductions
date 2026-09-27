// node_modules/pixi.js/lib/compressed-textures/ktx2/const.mjs
var INTERNAL_FORMAT_TO_TEXTURE_FORMATS = {
  [
    33776
    /* COMPRESSED_RGB_S3TC_DXT1_EXT */
  ]: "bc1-rgba-unorm",
  // TODO: ???
  [
    33777
    /* COMPRESSED_RGBA_S3TC_DXT1_EXT */
  ]: "bc1-rgba-unorm",
  [
    33778
    /* COMPRESSED_RGBA_S3TC_DXT3_EXT */
  ]: "bc2-rgba-unorm",
  [
    33779
    /* COMPRESSED_RGBA_S3TC_DXT5_EXT */
  ]: "bc3-rgba-unorm",
  [
    35916
    /* COMPRESSED_SRGB_S3TC_DXT1_EXT */
  ]: "bc1-rgba-unorm-srgb",
  // TODO: ???
  [
    35917
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT */
  ]: "bc1-rgba-unorm-srgb",
  [
    35918
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT */
  ]: "bc2-rgba-unorm-srgb",
  [
    35919
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT */
  ]: "bc3-rgba-unorm-srgb",
  [
    36283
    /* COMPRESSED_RED_RGTC1_EXT */
  ]: "bc4-r-unorm",
  [
    36284
    /* COMPRESSED_SIGNED_RED_RGTC1_EXT */
  ]: "bc4-r-snorm",
  [
    36285
    /* COMPRESSED_RED_GREEN_RGTC2_EXT */
  ]: "bc5-rg-unorm",
  [
    36286
    /* COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT */
  ]: "bc5-rg-snorm",
  [
    37488
    /* COMPRESSED_R11_EAC */
  ]: "eac-r11unorm",
  // [GL_INTERNAL_FORMAT.COMPRESSED_SIGNED_R11_EAC]: 'eac-r11snorm',
  [
    37490
    /* COMPRESSED_RG11_EAC */
  ]: "eac-rg11snorm",
  // [GL_INTERNAL_FORMAT.COMPRESSED_SIGNED_RG11_EAC]: 'eac-rg11unorm',
  [
    37492
    /* COMPRESSED_RGB8_ETC2 */
  ]: "etc2-rgb8unorm",
  [
    37496
    /* COMPRESSED_RGBA8_ETC2_EAC */
  ]: "etc2-rgba8unorm",
  [
    37493
    /* COMPRESSED_SRGB8_ETC2 */
  ]: "etc2-rgb8unorm-srgb",
  [
    37497
    /* COMPRESSED_SRGB8_ALPHA8_ETC2_EAC */
  ]: "etc2-rgba8unorm-srgb",
  [
    37494
    /* COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: "etc2-rgb8a1unorm",
  [
    37495
    /* COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: "etc2-rgb8a1unorm-srgb",
  [
    37808
    /* COMPRESSED_RGBA_ASTC_4x4_KHR */
  ]: "astc-4x4-unorm",
  [
    37840
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR */
  ]: "astc-4x4-unorm-srgb",
  [
    37809
    /* COMPRESSED_RGBA_ASTC_5x4_KHR */
  ]: "astc-5x4-unorm",
  [
    37841
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR */
  ]: "astc-5x4-unorm-srgb",
  [
    37810
    /* COMPRESSED_RGBA_ASTC_5x5_KHR */
  ]: "astc-5x5-unorm",
  [
    37842
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR */
  ]: "astc-5x5-unorm-srgb",
  [
    37811
    /* COMPRESSED_RGBA_ASTC_6x5_KHR */
  ]: "astc-6x5-unorm",
  [
    37843
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR */
  ]: "astc-6x5-unorm-srgb",
  [
    37812
    /* COMPRESSED_RGBA_ASTC_6x6_KHR */
  ]: "astc-6x6-unorm",
  [
    37844
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR */
  ]: "astc-6x6-unorm-srgb",
  [
    37813
    /* COMPRESSED_RGBA_ASTC_8x5_KHR */
  ]: "astc-8x5-unorm",
  [
    37845
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR */
  ]: "astc-8x5-unorm-srgb",
  [
    37814
    /* COMPRESSED_RGBA_ASTC_8x6_KHR */
  ]: "astc-8x6-unorm",
  [
    37846
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR */
  ]: "astc-8x6-unorm-srgb",
  [
    37815
    /* COMPRESSED_RGBA_ASTC_8x8_KHR */
  ]: "astc-8x8-unorm",
  [
    37847
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR */
  ]: "astc-8x8-unorm-srgb",
  [
    37816
    /* COMPRESSED_RGBA_ASTC_10x5_KHR */
  ]: "astc-10x5-unorm",
  [
    37848
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR */
  ]: "astc-10x5-unorm-srgb",
  [
    37817
    /* COMPRESSED_RGBA_ASTC_10x6_KHR */
  ]: "astc-10x6-unorm",
  [
    37849
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR */
  ]: "astc-10x6-unorm-srgb",
  [
    37818
    /* COMPRESSED_RGBA_ASTC_10x8_KHR */
  ]: "astc-10x8-unorm",
  [
    37850
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR */
  ]: "astc-10x8-unorm-srgb",
  [
    37819
    /* COMPRESSED_RGBA_ASTC_10x10_KHR */
  ]: "astc-10x10-unorm",
  [
    37851
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR */
  ]: "astc-10x10-unorm-srgb",
  [
    37820
    /* COMPRESSED_RGBA_ASTC_12x10_KHR */
  ]: "astc-12x10-unorm",
  [
    37852
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR */
  ]: "astc-12x10-unorm-srgb",
  [
    37821
    /* COMPRESSED_RGBA_ASTC_12x12_KHR */
  ]: "astc-12x12-unorm",
  [
    37853
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR */
  ]: "astc-12x12-unorm-srgb",
  [
    36492
    /* COMPRESSED_RGBA_BPTC_UNORM_EXT */
  ]: "bc7-rgba-unorm",
  [
    36493
    /* COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT */
  ]: "bc7-rgba-unorm-srgb",
  [
    36494
    /* COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT */
  ]: "bc6h-rgb-float",
  [
    36495
    /* COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT */
  ]: "bc6h-rgb-ufloat",
  [
    35907
    /* SRGB8_ALPHA8 */
  ]: "rgba8unorm-srgb",
  [
    36759
    /* RGBA8_SNORM */
  ]: "rgba8snorm",
  [
    36220
    /* RGBA8UI */
  ]: "rgba8uint",
  [
    36238
    /* RGBA8I */
  ]: "rgba8sint",
  [
    6408
    /* RGBA */
  ]: "rgba8unorm"
  // [GL_INTERNAL_FORMAT.RGBA8]: 'bgra8unorm'
};
var FILE_IDENTIFIER = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10];
var FIELDS = {
  FILE_IDENTIFIER: 0,
  ENDIANNESS: 12,
  GL_TYPE: 16,
  GL_TYPE_SIZE: 20,
  GL_FORMAT: 24,
  GL_INTERNAL_FORMAT: 28,
  GL_BASE_INTERNAL_FORMAT: 32,
  PIXEL_WIDTH: 36,
  PIXEL_HEIGHT: 40,
  PIXEL_DEPTH: 44,
  NUMBER_OF_ARRAY_ELEMENTS: 48,
  NUMBER_OF_FACES: 52,
  NUMBER_OF_MIPMAP_LEVELS: 56,
  BYTES_OF_KEY_VALUE_DATA: 60
};
var FILE_HEADER_SIZE = 64;
var ENDIANNESS = 67305985;
var TYPES_TO_BYTES_PER_COMPONENT = {
  [
    5121
    /* UNSIGNED_BYTE */
  ]: 1,
  [
    5123
    /* UNSIGNED_SHORT */
  ]: 2,
  [
    5124
    /* INT */
  ]: 4,
  [
    5125
    /* UNSIGNED_INT */
  ]: 4,
  [
    5126
    /* FLOAT */
  ]: 4,
  [
    36193
    /* HALF_FLOAT */
  ]: 8
};
var FORMATS_TO_COMPONENTS = {
  [
    6408
    /* RGBA */
  ]: 4,
  [
    6407
    /* RGB */
  ]: 3,
  [
    33319
    /* RG */
  ]: 2,
  [
    6403
    /* RED */
  ]: 1,
  [
    6409
    /* LUMINANCE */
  ]: 1,
  [
    6410
    /* LUMINANCE_ALPHA */
  ]: 2,
  [
    6406
    /* ALPHA */
  ]: 1
};
var TYPES_TO_BYTES_PER_PIXEL = {
  [
    32819
    /* UNSIGNED_SHORT_4_4_4_4 */
  ]: 2,
  [
    32820
    /* UNSIGNED_SHORT_5_5_5_1 */
  ]: 2,
  [
    33635
    /* UNSIGNED_SHORT_5_6_5 */
  ]: 2
};
var INTERNAL_FORMAT_TO_BYTES_PER_PIXEL = {
  [
    33776
    /* COMPRESSED_RGB_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    33777
    /* COMPRESSED_RGBA_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    33778
    /* COMPRESSED_RGBA_S3TC_DXT3_EXT */
  ]: 1,
  [
    33779
    /* COMPRESSED_RGBA_S3TC_DXT5_EXT */
  ]: 1,
  [
    35916
    /* COMPRESSED_SRGB_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    35917
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    35918
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT */
  ]: 1,
  [
    35919
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT */
  ]: 1,
  [
    36283
    /* COMPRESSED_RED_RGTC1_EXT */
  ]: 0.5,
  [
    36284
    /* COMPRESSED_SIGNED_RED_RGTC1_EXT */
  ]: 0.5,
  [
    36285
    /* COMPRESSED_RED_GREEN_RGTC2_EXT */
  ]: 1,
  [
    36286
    /* COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT */
  ]: 1,
  [
    37488
    /* COMPRESSED_R11_EAC */
  ]: 0.5,
  [
    37489
    /* COMPRESSED_SIGNED_R11_EAC */
  ]: 0.5,
  [
    37490
    /* COMPRESSED_RG11_EAC */
  ]: 1,
  [
    37491
    /* COMPRESSED_SIGNED_RG11_EAC */
  ]: 1,
  [
    37492
    /* COMPRESSED_RGB8_ETC2 */
  ]: 0.5,
  [
    37496
    /* COMPRESSED_RGBA8_ETC2_EAC */
  ]: 1,
  [
    37493
    /* COMPRESSED_SRGB8_ETC2 */
  ]: 0.5,
  [
    37497
    /* COMPRESSED_SRGB8_ALPHA8_ETC2_EAC */
  ]: 1,
  [
    37494
    /* COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: 0.5,
  [
    37495
    /* COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: 0.5,
  [
    37808
    /* COMPRESSED_RGBA_ASTC_4x4_KHR */
  ]: 1,
  [
    37840
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR */
  ]: 1,
  [
    37809
    /* COMPRESSED_RGBA_ASTC_5x4_KHR */
  ]: 0.8,
  [
    37841
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR */
  ]: 0.8,
  [
    37810
    /* COMPRESSED_RGBA_ASTC_5x5_KHR */
  ]: 0.64,
  [
    37842
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR */
  ]: 0.64,
  [
    37811
    /* COMPRESSED_RGBA_ASTC_6x5_KHR */
  ]: 0.53375,
  [
    37843
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR */
  ]: 0.53375,
  [
    37812
    /* COMPRESSED_RGBA_ASTC_6x6_KHR */
  ]: 0.445,
  [
    37844
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR */
  ]: 0.445,
  [
    37813
    /* COMPRESSED_RGBA_ASTC_8x5_KHR */
  ]: 0.4,
  [
    37845
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR */
  ]: 0.4,
  [
    37814
    /* COMPRESSED_RGBA_ASTC_8x6_KHR */
  ]: 0.33375,
  [
    37846
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR */
  ]: 0.33375,
  [
    37815
    /* COMPRESSED_RGBA_ASTC_8x8_KHR */
  ]: 0.25,
  [
    37847
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR */
  ]: 0.25,
  [
    37816
    /* COMPRESSED_RGBA_ASTC_10x5_KHR */
  ]: 0.32,
  [
    37848
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR */
  ]: 0.32,
  [
    37817
    /* COMPRESSED_RGBA_ASTC_10x6_KHR */
  ]: 0.26625,
  [
    37849
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR */
  ]: 0.26625,
  [
    37818
    /* COMPRESSED_RGBA_ASTC_10x8_KHR */
  ]: 0.2,
  [
    37850
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR */
  ]: 0.2,
  [
    37819
    /* COMPRESSED_RGBA_ASTC_10x10_KHR */
  ]: 0.16,
  [
    37851
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR */
  ]: 0.16,
  [
    37820
    /* COMPRESSED_RGBA_ASTC_12x10_KHR */
  ]: 0.13375,
  [
    37852
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR */
  ]: 0.13375,
  [
    37821
    /* COMPRESSED_RGBA_ASTC_12x12_KHR */
  ]: 0.11125,
  [
    37853
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR */
  ]: 0.11125,
  [
    36492
    /* COMPRESSED_RGBA_BPTC_UNORM_EXT */
  ]: 1,
  [
    36493
    /* COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT */
  ]: 1,
  [
    36494
    /* COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT */
  ]: 1,
  [
    36495
    /* COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT */
  ]: 1
};
var KTX = {
  FILE_HEADER_SIZE,
  FILE_IDENTIFIER,
  FORMATS_TO_COMPONENTS,
  INTERNAL_FORMAT_TO_BYTES_PER_PIXEL,
  INTERNAL_FORMAT_TO_TEXTURE_FORMATS,
  FIELDS,
  TYPES_TO_BYTES_PER_COMPONENT,
  TYPES_TO_BYTES_PER_PIXEL,
  ENDIANNESS
};

// node_modules/pixi.js/lib/compressed-textures/ktx/parseKTX.mjs
function parseKTX(arrayBuffer, supportedFormats) {
  const dataView = new DataView(arrayBuffer);
  if (!validate(dataView)) {
    throw new Error("Invalid KTX identifier in header");
  }
  const {
    littleEndian,
    glType,
    glFormat,
    glInternalFormat,
    pixelWidth,
    pixelHeight,
    numberOfMipmapLevels,
    offset
  } = parseKTXHeader(dataView);
  const textureFormat = KTX.INTERNAL_FORMAT_TO_TEXTURE_FORMATS[glInternalFormat];
  if (!textureFormat) {
    throw new Error(`Unknown texture format ${glInternalFormat}`);
  }
  if (!supportedFormats.includes(textureFormat)) {
    throw new Error(`Unsupported texture format: ${textureFormat}, supportedFormats: ${supportedFormats}`);
  }
  const imagePixelByteSize = getImagePixelByteSize(glType, glFormat, glInternalFormat);
  const imageBuffers = getImageBuffers(
    dataView,
    glType,
    imagePixelByteSize,
    pixelWidth,
    pixelHeight,
    offset,
    numberOfMipmapLevels,
    littleEndian
  );
  return {
    format: textureFormat,
    width: pixelWidth,
    height: pixelHeight,
    resource: imageBuffers,
    alphaMode: "no-premultiply-alpha"
  };
}
function getImageBuffers(dataView, glType, imagePixelByteSize, pixelWidth, pixelHeight, offset, numberOfMipmapLevels, littleEndian) {
  const alignedWidth = pixelWidth + 3 & ~3;
  const alignedHeight = pixelHeight + 3 & ~3;
  let imagePixels = pixelWidth * pixelHeight;
  if (glType === 0) {
    imagePixels = alignedWidth * alignedHeight;
  }
  let mipByteSize = imagePixels * imagePixelByteSize;
  let mipWidth = pixelWidth;
  let mipHeight = pixelHeight;
  let alignedMipWidth = alignedWidth;
  let alignedMipHeight = alignedHeight;
  let imageOffset = offset;
  const imageBuffers = new Array(numberOfMipmapLevels);
  for (let mipmapLevel = 0; mipmapLevel < numberOfMipmapLevels; mipmapLevel++) {
    const imageSize = dataView.getUint32(imageOffset, littleEndian);
    let elementOffset = imageOffset + 4;
    imageBuffers[mipmapLevel] = new Uint8Array(dataView.buffer, elementOffset, mipByteSize);
    elementOffset += mipByteSize;
    imageOffset += imageSize + 4;
    imageOffset = imageOffset % 4 !== 0 ? imageOffset + 4 - imageOffset % 4 : imageOffset;
    mipWidth = mipWidth >> 1 || 1;
    mipHeight = mipHeight >> 1 || 1;
    alignedMipWidth = mipWidth + 4 - 1 & ~(4 - 1);
    alignedMipHeight = mipHeight + 4 - 1 & ~(4 - 1);
    mipByteSize = alignedMipWidth * alignedMipHeight * imagePixelByteSize;
  }
  return imageBuffers;
}
function getImagePixelByteSize(glType, glFormat, glInternalFormat) {
  let imagePixelByteSize = KTX.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[glInternalFormat];
  if (glType !== 0) {
    if (KTX.TYPES_TO_BYTES_PER_COMPONENT[glType]) {
      imagePixelByteSize = KTX.TYPES_TO_BYTES_PER_COMPONENT[glType] * KTX.FORMATS_TO_COMPONENTS[glFormat];
    } else {
      imagePixelByteSize = KTX.TYPES_TO_BYTES_PER_PIXEL[glType];
    }
  }
  if (imagePixelByteSize === void 0) {
    throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  }
  return imagePixelByteSize;
}
function parseKTXHeader(dataView) {
  const littleEndian = dataView.getUint32(KTX.FIELDS.ENDIANNESS, true) === KTX.ENDIANNESS;
  const glType = dataView.getUint32(KTX.FIELDS.GL_TYPE, littleEndian);
  const glFormat = dataView.getUint32(KTX.FIELDS.GL_FORMAT, littleEndian);
  const glInternalFormat = dataView.getUint32(KTX.FIELDS.GL_INTERNAL_FORMAT, littleEndian);
  const pixelWidth = dataView.getUint32(KTX.FIELDS.PIXEL_WIDTH, littleEndian);
  const pixelHeight = dataView.getUint32(KTX.FIELDS.PIXEL_HEIGHT, littleEndian) || 1;
  const pixelDepth = dataView.getUint32(KTX.FIELDS.PIXEL_DEPTH, littleEndian) || 1;
  const numberOfArrayElements = dataView.getUint32(KTX.FIELDS.NUMBER_OF_ARRAY_ELEMENTS, littleEndian) || 1;
  const numberOfFaces = dataView.getUint32(KTX.FIELDS.NUMBER_OF_FACES, littleEndian);
  const numberOfMipmapLevels = dataView.getUint32(KTX.FIELDS.NUMBER_OF_MIPMAP_LEVELS, littleEndian);
  const bytesOfKeyValueData = dataView.getUint32(KTX.FIELDS.BYTES_OF_KEY_VALUE_DATA, littleEndian);
  if (pixelHeight === 0 || pixelDepth !== 1) {
    throw new Error("Only 2D textures are supported");
  }
  if (numberOfFaces !== 1) {
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  }
  if (numberOfArrayElements !== 1) {
    throw new Error("WebGL does not support array textures");
  }
  return {
    littleEndian,
    glType,
    glFormat,
    glInternalFormat,
    pixelWidth,
    pixelHeight,
    numberOfMipmapLevels,
    offset: KTX.FILE_HEADER_SIZE + bytesOfKeyValueData
  };
}
function validate(dataView) {
  for (let i = 0; i < KTX.FILE_IDENTIFIER.length; i++) {
    if (dataView.getUint8(i) !== KTX.FILE_IDENTIFIER[i]) {
      return false;
    }
  }
  return true;
}

// ktx/repro.js
var result = document.querySelector("#result");
try {
  const input = await fetch("../fixtures/valid-3x3-two-level.ktx").then((r) => r.arrayBuffer());
  parseKTX(input, ["rgba8unorm-srgb"]);
  result.textContent = "NOT REPRODUCED: parseKTX returned";
} catch (error) {
  result.textContent = error instanceof RangeError ? `REPRODUCED: ${error}` : `UNEXPECTED: ${error}`;
}
