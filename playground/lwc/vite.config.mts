import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

export default defineConfig({
  mode: "development",
  plugins: [lwc()],
  esbuild: {},
  test: {
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: true,
      name: "chromium", // browser name is required
      testerHtmlPath: "./index.html",
    },
  },
});
