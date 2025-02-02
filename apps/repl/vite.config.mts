import type { UserConfig } from "vite";
import replace from "@rollup/plugin-replace";
export default {
  plugins: [],
  dev: {
    sourcemap: true,
  },

  worker: {
    format: "es",
    plugins: () => [
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": JSON.stringify("production"),
        },
      }),
    ],
  },
} satisfies UserConfig;
