/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // Required for jest-remirror custom jest matchers like `expect(...).toEqualRemirrorDocument(...)`
  setupFilesAfterEnv: ["jest-remirror/environment", "<rootDir>/jest-setup.js"],

  testEnvironment: "jsdom",

  extensionsToTreatAsEsm: [".ts", ".tsx"],

  // https://swc.rs/docs/usage/jest
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};

module.exports = config;
