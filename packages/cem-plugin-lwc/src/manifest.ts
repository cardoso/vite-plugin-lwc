import type * as c from "custom-elements-manifest";

export function isClassDeclaration(n: c.Declaration) {
  return n.kind === "class";
}

export function isClassField(n: c.ClassMember) {
  return n.kind === "field";
}

export function isJavaScriptExport(n: c.Export) {
  return n.kind === "js";
}
