import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  preset: "ts-jest",
  resolver: "ts-jest-resolver",
  coverageDirectory: "../coverage",
  collectCoverageFrom: [
    "**/*.ts",
    "!database/index.ts",
    "!index.ts",
    "!game/model/*.ts",
    "!server/startServer.ts",
  ],
  ...createDefaultPreset(),
};

export default jestConfig;
