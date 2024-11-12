import type { UserConfig } from "vite";
import lwc from "vite-plugin-lwc";
import cem from "vite-plugin-cem";
import lwcPlugin from "cem-plugin-lwc";

export default {
  plugins: [
    lwc(),
    cem({
      files: ["./src/modules/**/*.ts"],
      plugins: [...lwcPlugin()],
    }),
  ],
} satisfies UserConfig;
