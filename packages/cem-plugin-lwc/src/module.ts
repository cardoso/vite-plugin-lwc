import path from "node:path";

export function getTagName(module: string) {
  const [namespace, name] = path.dirname(module).split(path.sep).slice(-2);
  return `${namespace}-${name}`;
}
