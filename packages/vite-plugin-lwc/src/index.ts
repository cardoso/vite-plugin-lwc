import patch from "./patch.ts";
import lwc from "./lwc.ts";
import alias from "./alias.ts";
import type { Plugin } from "vite";
import hmr from "./hmr.ts";
import type { ViteLwcOptions } from "./types.ts";
import { normalizeOptions } from "./options.ts";

export default (options: ViteLwcOptions = {}): Plugin[] => {
  options = normalizeOptions(options);
  return [
  patch({
    "vite:css": (p) => {
      p.transform = undefined;
    },
    "vite:css-post": (p) => {
      p.transform = undefined;
    },
  }),
  alias(),
  {
    ...lwc(options),
    apply: "build",
  },
  {
    ...lwc(options),
    enforce: "post",
    apply: "serve",
  },
  hmr()
]
};
