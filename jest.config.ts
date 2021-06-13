// jest.config.ts
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  setupFiles: ["./jest.setup.js"],
};

export default config;
