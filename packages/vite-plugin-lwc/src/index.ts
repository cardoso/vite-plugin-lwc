import patch from "./patch.ts";
import lwc, { type ViteLwcOptions } from "./lwc.ts";
import alias from "./alias.ts";
import type { Plugin } from "vite";

export default (options: ViteLwcOptions = {}): Plugin[] => [
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
    enforce: "pre",
    apply: "build",
  },
  {
    ...lwc(options),
    enforce: "post",
    apply: "serve",
  },
];
