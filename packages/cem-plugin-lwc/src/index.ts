import type { Plugin } from "@custom-elements-manifest/analyzer";
import { getTagName } from "./module.ts";
import { isClassDeclaration, isJavaScriptExport } from "./manifest.ts";

function apiDecorator(): Plugin {
  return {
    name: "cem-plugin-lwc:api-decorator",
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

      if (!ts.isPropertyDeclaration(node)) {
        return;
      }

      const defaultExport = moduleDoc.exports
        .filter(isJavaScriptExport)
        .find(({ name }) => name === "default");

      if (!defaultExport) {
        return;
      }

      const declaration = moduleDoc.declarations
        .filter(isClassDeclaration)
        .find(({ name }) => name === defaultExport.declaration.name);

      if (!declaration) {
        return;
      }

      if (!declaration.members) {
        return;
      }

      const member = declaration.members.find(
        ({ name }) => name === node.name.getText(),
      );

      if (!member) {
        return;
      }

      const isPublic = ts
        .getDecorators(node)
        ?.find(({ expression }) => expression.getText() === "api");

      if (member.privacy) {
        throw new Error(`Member already has a privacy: ${member.privacy}`);
      }

      if (isPublic) {
        member.privacy = "public";
        if ("attributes" in declaration) {
          declaration.attributes?.push({
            name: member.name,
          });
        } else {
          Object.assign(declaration, {
            attributes: [
              {
                name: member.name,
              },
            ],
          });
        }
      }
    },
  };
}

function tagNames(): Plugin {
  return {
    name: "cem-plugin-lwc:tag-names",
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

export default function cemLwcPlugin() {
  return [tagNames(), apiDecorator()];
}
