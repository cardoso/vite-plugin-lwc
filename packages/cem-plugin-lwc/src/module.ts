import path from "node:path";
export function getTagName(filename: string) {
  const [namespace, name] = path.dirname(filename).split(path.sep).slice(-2);
  return `${namespace}-${name}`;
}
