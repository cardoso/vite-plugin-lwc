import type { UserConfig } from "vite";
import lwc from "vite-plugin-lwc";

export default {
  build: {
    copyPublicDir: true,
    assetsDir: "",
    rollupOptions: {
      input: ["src/main.js"],
      preserveEntrySignatures: "strict",
      output: {
        entryFileNames: "[name].js",
        preserveModules: true,
      },
    },
  },
  plugins: [lwc()],
} satisfies UserConfig;
