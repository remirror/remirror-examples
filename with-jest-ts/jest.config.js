// jest.config.ts
import { createDefaultPreset } from "ts-jest";

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // Required for jest-remirror custom jest matchers like `expect(...).toEqualRemirrorDocument(...)`
  setupFilesAfterEnv: ["./test/jest-setup.mjs"],

  testEnvironment: "jsdom",

  extensionsToTreatAsEsm: [".ts", ".tsx"],

  transform: {
    ...createDefaultPreset().transform,
    // [...]
  },
};

export default config;
