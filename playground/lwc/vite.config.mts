import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";
import inspect from "vite-plugin-inspect";

const deps = ["lwc", "@lwc/engine-dom", "@lwc/synthetic-shadow", "@lwc/shared"];

export default defineConfig({
  plugins: [
    lwc(),
    process.env.INSPECT
      ? inspect({
          build: true,
          open: true,
          removeVersionQuery: true,
        })
      : null,
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
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: true,
      name: "chromium", // browser name is required
      testerHtmlPath: "./index.html",
      headless: true,
    },
  },
});
