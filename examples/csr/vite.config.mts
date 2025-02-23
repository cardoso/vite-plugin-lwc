import type { UserConfig } from "vite";
import lwc from "vite-plugin-lwc";

export default {
  plugins: [lwc({
    disableSyntheticShadowSupport: true,
  })],
} satisfies UserConfig;
