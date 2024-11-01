import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

const alias = {
  build: [
    {
      find: /^(.*)\.html$/,
      replacement: "$1.html?import",
    },
  ],
  serve: [],
};

// https://vitejs.dev/config
export default defineConfig((config) => ({
  appType: "spa",
  resolve: {
    alias: alias[config.command],
  },
  build: {
    copyPublicDir: true,
    cssMinify: false,
    cssCodeSplit: false,
    assetsDir: "",
    manifest: true,
    minify: false,
    target: "esnext",
    modulePreload: false,
    rollupOptions: {
      treeshake: false,
      logLevel: "debug",
      shimMissingExports: true,
      input: ["src/main.js"],
      output: {
        dir: "dist",
        format: "esm",
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
        chunkFileNames: "[name][extname]",
        inlineDynamicImports: true,
      },
    },
    outDir: "dist",
  },
  plugins: [
    lwc({
      rootDir: ".",
      exclude: ["**/vite/**"],
      sourcemap: "inline",
      command: config.command,
    }),
  ],
}));
