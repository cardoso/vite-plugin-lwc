import type { UserConfig } from "vite";
import lwc from "vite-plugin-lwc";

export default {
  plugins: [lwc({
    disableSyntheticShadowSupport: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any],
} satisfies UserConfig;
