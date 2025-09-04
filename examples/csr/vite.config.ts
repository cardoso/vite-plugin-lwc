import type { UserConfig } from "vite";
import lwc from "vite-plugin-lwc";

import LWC_CONFIG from './lwc.config.json'

export default {
  plugins: [lwc({
    modules: LWC_CONFIG.modules,
    disableSyntheticShadowSupport: true,
  })],
} satisfies UserConfig;
