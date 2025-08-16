import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

export default defineConfig({
  plugins: [
    lwc({
      disableSyntheticShadowSupport: true
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any
  ]
});
