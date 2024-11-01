import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

// https://vitejs.dev/config
export default defineConfig((config) => ({
  build: {
    copyPublicDir: true,
    assetsDir: "",
    rollupOptions: {
      input: ["src/main.js"],
      output: {
        entryFileNames: "[name].js",
        compact: true,
      },
    },
  },
  plugins: [
    lwc({
      rootDir: ".",
      exclude: ["**/vite/**"],
      command: config.command,
    }),
  ],
}));
