import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

export default defineConfig({
  mode: "development",
  plugins: [
    lwc({
      disableSyntheticShadowSupport: true,
    }),
  ],
  build: {
    minify: false,
    target: "esnext",
  },
  test: {
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: true,
      name: "chromium", // browser name is required
      testerHtmlPath: "./index.html",
    },
  },
});
