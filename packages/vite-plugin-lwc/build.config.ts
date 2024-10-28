import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	entries: ["src/index"],
	externals: ["vite"],
	clean: true,
	sourcemap: true,
	declaration: "compatible",
	rollup: {
		emitCJS: true,
		inlineDependencies: true,
	},
});
