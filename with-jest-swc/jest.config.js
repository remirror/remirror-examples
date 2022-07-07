/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // https://swc.rs/docs/usage/jest
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },

  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["jest-remirror/environment"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",
};

module.exports = config;
