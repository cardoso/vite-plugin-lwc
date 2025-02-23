import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index"],
  clean: true,
  sourcemap: true,
  declaration: "compatible",
  rollup: {
    inlineDependencies: true,
  },
});
