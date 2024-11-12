import type { WorkspaceProjectConfiguration } from "vitest/config";

export default [
  "playground/*/vite.config.mts",
  "packages/cem-plugin-lwc",
] satisfies WorkspaceProjectConfiguration[];
