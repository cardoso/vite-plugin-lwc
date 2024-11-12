import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index"],
  externals: ["@custom-elements-manifest/analyzer", "custom-elements-manifest"],
  clean: true,
  sourcemap: true,
  declaration: "compatible",
  rollup: {
    inlineDependencies: true,
  },
});
