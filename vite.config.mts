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
    extensions: [
      ".mjs",
      ".js",
      ".mts",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".html",
    ],
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
    // lib: {
    //   entry: "src/main.js",
    //   formats: ["es"],
    // },
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
        // sanitizeFileName: (fileName) => fileName.replace(".html", ".js"),
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
    }),
  ],
}));
