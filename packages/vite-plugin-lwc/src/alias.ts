import type { AliasOptions, Plugin } from "vite";

const alias: AliasOptions = [
  {
    // Find all html imports and add ?import to the end of the import
    find: /^(?!.*index)(.*)\.html$/,
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
