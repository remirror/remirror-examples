/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
  preset: "ts-jest/presets/default-esm",

  globals: {
    "ts-jest": {
      useESM: true,
    },
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["jest-remirror/environment"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",
};

module.exports = config;
