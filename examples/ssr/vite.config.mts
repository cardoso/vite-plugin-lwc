import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

export default defineConfig({
  plugins: [lwc()],
  ssr: {
    noExternal: ["@lwc/ssr-runtime"],
  },
});
