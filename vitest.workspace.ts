import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "playground/*/vite.config.mts",
  "packages/cem-plugin-lwc",
]);
