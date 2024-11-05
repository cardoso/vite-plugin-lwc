// @ts-check
import fs from "node:fs/promises";
import express from "express";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";
const ssrManifest = isProduction
  ? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8")
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
/**
 * @type {import("vite").ViteDevServer | undefined}
 */
let vite;
if (isProduction) {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
} else {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",

    base,
  });
  app.use(vite.middlewares);
}

// Serve HTML
app.use("*all", async (req, res) => {
  try {
    const url = req.originalUrl;

    /** @type {string} */
    let template;
    /** @type {import("./src/entry-server").render} */
    let render;
    if (isProduction) {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    } else {
      // Always read fresh template in development
      if (!vite) {
        throw new Error("Vite should be defined in development");
      }

      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
    }

    const rendered = await render(url, ssrManifest);

    const html = template
      .replace("<!--app-head-->", rendered.head ?? "")
      .replace("<!--app-html-->", rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    if (e instanceof Error) {
      vite?.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    } else {
      res.status(500).end(e);
    }
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
