import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

const deps = ["lwc", "@lwc/engine-dom", "@lwc/synthetic-shadow", "@lwc/shared"];

export default defineConfig({
  plugins: [
    lwc({
      rootDir: import.meta.dirname
    })
  ],
  optimizeDeps: {
    exclude: deps,
  },
  build: {
    modulePreload: false,
    minify: false,
    target: "esnext",
  },
  test: {
    root: import.meta.dirname,
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: true,
      name: "chromium", // browser name is required
      testerHtmlPath: "./index.html",
      headless: true,
    },
  },
});
