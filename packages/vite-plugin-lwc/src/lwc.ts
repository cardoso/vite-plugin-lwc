import { createFilter, type Plugin } from "vite";
import lwc, { type RollupLwcOptions } from "@lwc/rollup-plugin";
import type { RollupError } from "rollup";
import {} from "@rollup/pluginutils";
import path from "node:path";

export type Command = "build" | "serve";

export type ViteLwcOptions = RollupLwcOptions;

function createRollupPlugin(options: ViteLwcOptions) {
  const rollupPlugin = lwc(options);

  return {
    buildStart: getHook(rollupPlugin, "buildStart"),
    resolveId: getHook(rollupPlugin, "resolveId"),
    load: getHook(rollupPlugin, "load"),
    transform: getHook(rollupPlugin, "transform"),
  };
}

export default function lwcVite(config: ViteLwcOptions): Plugin {
  config.rootDir = config.rootDir ?? ".";

  const rollupPlugin = createRollupPlugin(config);
  const ssrPlugin = createRollupPlugin({ ...config, targetSSR: true });

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
        return rollupPlugin.buildStart.call(this, options);
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
        path.extname(source) !== "" &&
        !source.startsWith(".")
      ) {
        return path.join(process.cwd(), source);
      }

      try {
        return options.ssr
          ? ssrPlugin.resolveId.call(this, source, importer, options)
          : rollupPlugin.resolveId.call(this, source, importer, options);
      } catch (e) {
        this.error(getError(e, source));
      }
    },
    load(id, options) {
      if (!filter(id)) {
        return;
      }

      try {
        return options?.ssr
          ? ssrPlugin.load.call(this, id, options)
          : rollupPlugin.load.call(this, id, options);
      } catch (e) {
        this.error(getError(e, id));
      }
    },
    transform(code, id, options) {
      if (!filter(id)) {
        return;
      }

      try {
        return options?.ssr
          ? ssrPlugin.transform.call(this, code, id, options)
          : rollupPlugin.transform.call(this, code, id, options);
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
): RollupError | string {
  if (typeof error === "string") {
    return error;
  }

  if (typeof error !== "object" || error === null) {
    return String(error);
  }

  const rollupError: RollupError = {
    message: "An unknown error occurred.",
  };

  addErrorCode(error, rollupError);
  addErrorMessage(error, rollupError);
  addErrorLocation(error, rollupError, src);
  addErrorId(id, rollupError);

  return rollupError;
}

function addErrorCode(error: object, rollupError: RollupError) {
  if ("code" in error && typeof error.code === "number") {
    rollupError.pluginCode = error.code;
  }
}

function addErrorMessage(error: object, rollupError: RollupError) {
  if ("message" in error && typeof error.message === "string") {
    rollupError.message = error.message;
  }
}

function addErrorLocation(
  error: object,
  rollupError: RollupError,
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

function addErrorId(id: string | undefined, rollupError: RollupError) {
  if (typeof id === "string") {
    rollupError.id = `@${id}`;
  }
}
