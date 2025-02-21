import { createFilter, type Plugin, type Rollup } from "vite";
import lwc, { type RollupLwcOptions } from "@lwc/rollup-plugin";
import path from "node:path";

export type ViteLwcOptions = RollupLwcOptions;

function createRollupPlugin(options: RollupLwcOptions) {
  const plugin = lwc(options);

  return {
    version: plugin.version,
    buildStart: getHook(plugin, "buildStart"),
    resolveId: getHook(plugin, "resolveId"),
    load: getHook(plugin, "load"),
    transform: getHook(plugin, "transform"),
  };
}

export default function lwcVite(config: ViteLwcOptions): Plugin {
  config.rootDir ??= ".";
  const csr = createRollupPlugin(config);
  const ssr = createRollupPlugin({ ...config, targetSSR: true });

  const filter = createFilter(config.include, [
    "**/vite/**",
    "**/@vitest/**",
    "**/.vite/**",
    "index.html",
    "/__vitest_test__/**",
    ...(config.exclude
      ? Array.isArray(config.exclude)
        ? config.exclude
        : [config.exclude]
      : []),
  ]);

  return {
    name: "lwc:vite-plugin",
    buildStart(options) {
      try {
        csr.buildStart.call(this, options);
        ssr.buildStart.call(this, options);
      } catch (e) {
        this.error(getError(e));
      }
    },
    resolveId(source, importer, options) {
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
        const id = (options.ssr ? ssr : csr).resolveId.call(
          this,
          source,
          importer,
          options,
        );

        if (!id) {
          return;
        }

        return {
          id,
          meta: { lwc: true },
        };
      } catch (e) {
        this.error(getError(e, source));
      }
    },
    load(id, options) {
      if (!filter(id)) {
        return;
      }

      try {
        return (options?.ssr ? ssr : csr).load.call(this, id, options);
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
          id,
          options,
        );
      } catch (e) {
        this.error(getError(e, id, code));
      }
    },
  };
}

function getHook<T, K extends keyof T>(rollupPlugin: T, hookName: K) {
  const hook = rollupPlugin[hookName];

  if (typeof hook === "undefined") {
    throw new Error(
      `The hook "${String(hookName)}" is not supported by the LWC plugin.`,
    );
  }

  if (typeof hook !== "function") {
    throw new Error(`The hook "${String(hookName)}" is not a function.`);
  }

  return hook;
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
