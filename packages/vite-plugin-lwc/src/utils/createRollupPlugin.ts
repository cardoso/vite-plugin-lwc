import lwcRollupPlugin, { type RollupLwcOptions } from "@lwc/rollup-plugin/dist/index.js";
import type { Rollup } from "vite";

export function createRollupPlugin(options: RollupLwcOptions) {
  const plugin = buildLwcPluginHandlers(options);

  return {
    name: plugin.name,
    version: plugin.version,
    async buildStart(this, options) {
      return await plugin.buildStart?.call(this, options);
    },
    async resolveId(this, source, importer, options) {
      return await plugin.resolveId?.call(this, source, importer, options);
    },
    async load(this, id) {
      return await plugin.load?.call(this, id);
    },
    async transform(this, code, id) {
      return await plugin.transform?.call(this, code, id);
    },
  } as const satisfies Rollup.Plugin;
}

function buildLwcPluginHandlers(options: RollupLwcOptions) {
  const plugin = lwcRollupPlugin(options);

  return {
    ...plugin,
    buildStart: plugin.buildStart ? 'handler' in plugin.buildStart ? plugin.buildStart.handler : plugin.buildStart : undefined,
    resolveId: plugin.resolveId ? 'handler' in plugin.resolveId ? plugin.resolveId.handler : plugin.resolveId : undefined,
    load: plugin.load ? 'handler' in plugin.load ? plugin.load.handler : plugin.load : undefined,
    transform: plugin.transform ? 'handler' in plugin.transform ? plugin.transform.handler : plugin.transform : undefined
  }
}

