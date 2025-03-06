import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

const deps = ["lwc", "@lwc/engine-dom", "@lwc/synthetic-shadow", "@lwc/shared"];

export default defineConfig({
  plugins: [
    lwc(),
  ],
  root: import.meta.dirname,
  optimizeDeps: {
    exclude: deps,
  },
  build: {
    modulePreload: false,
    minify: false,
    target: "esnext",
  },
  test: {
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: true,
      testerHtmlPath: "./index.html",
      headless: true,
      instances: [
        {
          browser: "chromium",

        }
      ]
    },
  },
});
