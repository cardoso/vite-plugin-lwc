import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "playground/*/vite.config.ts",
  "packages/cem-plugin-lwc",
]);
