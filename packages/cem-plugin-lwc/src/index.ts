import type { Plugin } from "@custom-elements-manifest/analyzer";
import { getTagName } from "./module.ts";
import { isJavaScriptExport } from "./manifest.ts";

export default function cemLwcPlugin(): Plugin {
  return {
    name: "cem-plugin-lwc",
    analyzePhase({ moduleDoc, node, ts }) {
      if (!moduleDoc.path) {
        return;
      }

      if (!moduleDoc.exports) {
        return;
      }

      if (!moduleDoc.declarations) {
        return;
      }

      if (!ts.isClassDeclaration(node)) {
        return;
      }

      const defaultExport = moduleDoc.exports
        .filter(isJavaScriptExport)
        .find(({ name }) => name === "default");

      if (!defaultExport) {
        return;
      }

      const declaration = moduleDoc.declarations.find(
        ({ name }) => name === defaultExport.declaration.name,
      );

      if (!declaration) {
        return;
      }

      const tagName = getTagName(moduleDoc.path);

      if ("tagName" in declaration) {
        throw new Error(
          `Declaration already has a tagName: ${declaration.tagName}`,
        );
      }

      Object.assign(declaration, { tagName });
    },
  };
}
