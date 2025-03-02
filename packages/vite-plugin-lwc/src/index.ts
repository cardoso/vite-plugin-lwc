import { createFilter, type ConfigEnv, type FilterPattern, type Plugin, type ResolvedConfig, type Rollup, type UserConfig } from "vite";
import lwc, { type RollupLwcOptions } from "@lwc/rollup-plugin";
import path from "node:path";

export interface ViteLwcOptions extends RollupLwcOptions {
  include?: FilterPattern;
  exclude?: FilterPattern;
}

function createRollupPlugin(options: RollupLwcOptions) {
  const plugin = lwc({ ...options, defaultModules: [] } as RollupLwcOptions);

  const buildStart = plugin.buildStart ? 'handler' in plugin.buildStart ? plugin.buildStart.handler : plugin.buildStart : () => { };
  const resolveId = plugin.resolveId ? 'handler' in plugin.resolveId ? plugin.resolveId.handler : plugin.resolveId : () => { };
  const load = plugin.load ? 'handler' in plugin.load ? plugin.load.handler : plugin.load : () => { };
  const transform = plugin.transform ? 'handler' in plugin.transform ? plugin.transform.handler : plugin.transform : () => { };

  return {
    version: plugin.version,
    buildStart,
    resolveId,
    load,
    transform,
  };
}

export default function lwcVite(config: ViteLwcOptions = {}): Plugin {
  config.rootDir ??= ".";
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

  const state = {
    env: {
      command: "build",
      mode: "",
    } as ConfigEnv,
    config: {} as UserConfig,
    resolvedConfig: {} as ResolvedConfig,
  }

  return {
    name: "lwc:vite-plugin",
    // enforce: "post",
    // apply: "serve",
    config: {
      order: "pre",
      handler(config, env) {
        state.env = env;
        state.config = config;
        return {
          optimizeDeps: {
            entries: ["index.html"],
            exclude: ["lwc"],
          },
          resolve: {
            alias: [
              {
                // Find all html imports and add ?import to the end of the import
                find: /^(?!.*index)(.*)\.html$/,
                replacement: "$1.html?import",
              },
            ]
          }
        }
      },
    },
    configResolved(config) {
      state.resolvedConfig = config;

      const cssPlugin = config.plugins.find((p) => p.name === "vite:css");
      if (cssPlugin) {
        cssPlugin.transform = undefined;
      }

      const cssPostPlugin = config.plugins.find((p) => p.name === "vite:css-post");
      if (cssPostPlugin) {
        cssPostPlugin.transform = undefined;
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
    resolveId: {
      order: "post",
      async handler(source, importer, options) {
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
    },

    load: {
     handler(id, options) {
        if (!filter(id)) {
          return;
        }

        try {
          return (options?.ssr ? ssr : csr).load.call(this, id);
        } catch (e) {
          this.error(getError(e, id));
        }
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

  };
}

function getError(
  error: unknown,
  id?: string,
  src?: string,
): Rollup.RollupError | string {
  if (typeof error === "string") {
    return error;
  }

  if (typeof error !== "object" || error === null) {
    return String(error);
  }

  const rollupError: Rollup.RollupError = {
    message: "An unknown error occurred.",
  };

  addErrorCode(error, rollupError);
  addErrorMessage(error, rollupError);
  addErrorLocation(error, rollupError, src);
  addErrorId(id, rollupError);

  return rollupError;
}

function addErrorCode(error: object, rollupError: Rollup.RollupError) {
  if ("code" in error && typeof error.code === "number") {
    rollupError.pluginCode = error.code;
  }
}

function addErrorMessage(error: object, rollupError: Rollup.RollupError) {
  if ("message" in error && typeof error.message === "string") {
    rollupError.message = error.message;
  }
}

function addErrorLocation(
  error: object,
  rollupError: Rollup.RollupError,
  src?: string,
) {
  if ("filename" in error && typeof error.filename === "string") {
    rollupError.loc = {
      file: error.filename,
      line: 1,
      column: 1,
    };
  }

  if (
    "location" in error &&
    typeof error.location === "object" &&
    error.location !== null
  ) {
    rollupError.loc = {
      ...rollupError.loc,
      line:
        "line" in error.location && typeof error.location.line === "number"
          ? error.location.line
          : 1,
      column:
        "column" in error.location && typeof error.location.column === "number"
          ? error.location.column
          : 1,
    };

    if (
      "start" in error.location &&
      typeof error.location.start === "number" &&
      "length" in error.location &&
      typeof error.location.length === "number"
    ) {
      rollupError.frame = src?.substring(
        error.location.start,
        error.location.start + error.location.length,
      );
    }
  }
}

function addErrorId(id: string | undefined, rollupError: Rollup.RollupError) {
  if (typeof id === "string") {
    rollupError.id = id;
  }
}


// export default (options: ViteLwcOptions = {}): Plugin[] => [
//   // patch({
//   //   "vite:css": (p) => {
//   //     p.transform = undefined;
//   //   },
//   //   "vite:css-post": (p) => {
//   //     p.transform = undefined;
//   //   },
//   // }),
//   {
//     ...lwc(options),
//     apply: "build",
//   },
//   {
//     ...lwc(options),
//     enforce: "post",
//     apply: "serve",
//   },
// ];
