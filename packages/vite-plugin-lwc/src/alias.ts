import type { Plugin } from "vite";

const alias = [
  {
    find: /^(.*)\.html$/,
    replacement: "$1.html?import",
  },
];

export default function lwcAliasPlugin(): Plugin {
  return {
    name: "lwc:alias",
    enforce: "pre",
    apply: "build",
    config() {
      return {
        resolve: {
          alias,
        },
      };
    },
  };
}
