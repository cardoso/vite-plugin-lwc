import { defineBuildConfig } from "unbuild";

export default defineBuildConfig([{
  entries: ["src/index"],
  externals: ["vite", "rollup"],
  clean: true,
  sourcemap: true,
  declaration: "compatible",
}]);
