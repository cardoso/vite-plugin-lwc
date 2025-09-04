import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

const deps = ["lwc", "@lwc/engine-dom", "@lwc/synthetic-shadow", "@lwc/shared"];

import LWC_CONFIG from './lwc.config.json'

export default defineConfig({
  plugins: [
    lwc({
      modules: LWC_CONFIG.modules
    }),
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
