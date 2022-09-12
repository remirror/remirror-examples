/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // Required for jest-remirror custom jest matchers like `expect(...).toEqualRemirrorDocument(...)`
  setupFilesAfterEnv: ["./test/jest-setup.mjs"],

  testEnvironment: "jsdom",

  extensionsToTreatAsEsm: [".ts", ".tsx"],

  // https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
  preset: "ts-jest/presets/default-esm",

  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};

module.exports = config;
