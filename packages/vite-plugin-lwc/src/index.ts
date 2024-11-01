import patch from "./patch.ts";
import lwc, { type ViteLwcOptions } from "./lwc.ts";

export default (options?: ViteLwcOptions) => [
  patch({
    "vite:css": (p) => {
      p.transform = undefined;
    },
    "vite:css-post": (p) => {
      p.transform = undefined;
    },
  }),
  lwc("serve")(options),
  lwc("build")(options),
];
