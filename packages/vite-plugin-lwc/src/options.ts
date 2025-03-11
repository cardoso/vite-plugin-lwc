import type { ViteLwcOptions } from "./types";


export function normalizeOptions(rawConfig: ViteLwcOptions): ViteLwcOptions {
  const config = rawConfig;
  config.rootDir ??= ".";
  config.defaultModules ??= [];
  return config;
}
