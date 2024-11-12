import type { Plugin } from "@custom-elements-manifest/analyzer";

import { getTagName } from "./module.ts";
export default function cemLwcPlugin(): Plugin {
  return {
    name: "cem-plugin-lwc",
    analyzePhase({ moduleDoc }) {
      if (!moduleDoc.path) {
        return;
      }

      const tagName = getTagName(moduleDoc.path);

      moduleDoc.declarations = moduleDoc.declarations?.map((declaration) => {
        return {
          ...declaration,
          tagName,
        };
      });
    },
  };
}
