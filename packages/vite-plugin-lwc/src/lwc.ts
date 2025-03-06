import { createFilter, type FilterPattern, type Plugin } from "vite";
import { type RollupLwcOptions } from "@lwc/rollup-plugin";
import path from "node:path";
import { createRollupPlugin } from "./utils/createRollupPlugin";
import { getError } from "./utils/getError";

export interface ViteLwcOptions extends RollupLwcOptions {
  include?: FilterPattern;
  exclude?: FilterPattern;
}

interface Options extends ViteLwcOptions {
  [key: string]: unknown;
}

export default function lwc(config: ViteLwcOptions): Plugin {
  return createVitePlugin({
    ...config,
    rootDir: config.rootDir ?? '.',
    defaultModules: config.defaultModules ?? []
  })
}

function createVitePlugin(config: Options) {
  const csr = createRollupPlugin(config);
  const ssr = createRollupPlugin({ ...config, targetSSR: true });

  const exclude = [config.exclude].flat().filter(e => e !== undefined && e !== null);

  const filter = createFilter(config.include, [
    "**/vite/**",
    "**/@vitest/**",
    "**/.vite/**",
    "index.html",
    "/__vitest_test__/**",
    ...exclude,
  ]);

  return {
    name: "lwc:vite-plugin",
    config() {
      return {
        define: {
          'process.env.SKIP_LWC_VERSION_MISMATCH_CHECK': 'false',
        },
      }
    },
    async buildStart(options) {
      try {
        await csr.buildStart.call(this, options);
        await ssr.buildStart.call(this, options);
      } catch (e) {
        this.error(getError(e));
      }
    },
    async resolveId(source, importer, options) {
      if (!filter(source)) {
        return;
      }

      if (
        importer &&
        path.extname(importer) === ".html" &&
        path.isAbsolute(importer) &&
        path.extname(source) !== "" &&
        path.isAbsolute(source)
      ) {
        const dir = path.dirname(importer);
        return path.join(dir, source);
      }

      try {
        const id = await (options.ssr ? ssr : csr).resolveId.call(
          this,
          source,
          importer,
          options,
        );

        if (!id) {
          return;
        }

        return id;
      } catch (e) {
        this.error(getError(e, source));
      }
    },
    load(id, options) {
      if (!filter(id)) {
        return;
      }

      try {
        return (options?.ssr ? ssr : csr).load.call(this, id);
      } catch (e) {
        this.error(getError(e, id));
      }
    },
    transform(code, id, options) {
      if (!filter(id)) {
        return;
      }

      try {
        return (options?.ssr ? ssr : csr).transform.call(
          this,
          code,
          id
        );
      } catch (e) {
        this.error(getError(e, id, code));
      }
    },
  } as const satisfies Plugin;
}
