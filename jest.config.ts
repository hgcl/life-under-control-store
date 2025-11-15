import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",

    // Ignore CSS modules
    "(.*).module.css$": "<rootDir>/jest-empty-module.js",
  },
  // Load .env first
  setupFiles: ["<rootDir>/jest.setupEnv.ts"],
  // Then configure testing-library
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
  },
  transformIgnorePatterns: ["/node_modules/"],
};

export default config;
