import type { FilterPattern } from "vite";
import type { RollupLwcOptions } from "@lwc/rollup-plugin";

export interface ViteLwcOptions extends RollupLwcOptions {
  include?: FilterPattern;
  exclude?: FilterPattern;
}
