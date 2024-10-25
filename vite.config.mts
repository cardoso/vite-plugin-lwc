import { defineConfig, type Plugin } from "vite";

import lwc, { type RollupLwcOptions } from "@lwc/rollup-plugin";
import path from "node:path";

function patchPlugins(options: Record<string, Partial<Plugin>>): Plugin {
	return {
		name: "patch-plugins",
		enforce: "pre",
		configResolved(config) {
			for (const [name, overrides] of Object.entries(options)) {
				const plugin = config.plugins.find((plugin) => plugin.name === name);
				if (plugin) {
					Object.assign(plugin, overrides);
				}
			}
		},
	};
}

function viteLwcPlugin(options?: RollupLwcOptions): Plugin {
	const rollupPlugin = lwc(options);

	return {
		name: "vite-plugin-lwc",
		enforce: "post",
		buildStart(options) {
			// @ts-expect-error - `buildStart` is optional
			return rollupPlugin.buildStart.call(this, options);
		},
		resolveId(source, importer, options) {
			if (options.isEntry) {
				return;
			}
			// @ts-expect-error - `resolveId` is optional
			return rollupPlugin.resolveId.call(this, source, importer, options);
		},
		load(id) {
			if (id === path.resolve(__dirname, "index.html")) {
				return;
			}

			// @ts-expect-error - `load` is optional
			return rollupPlugin.load.call(this, id);
		},
		transform(code, id) {
			if (id === "@lwc/resources/empty_css.css") {
				return 'export default "";';
			}

			// @ts-expect-error - `transform` is optional
			return rollupPlugin.transform.call(this, code, id);
		},
	};
}

// https://vitejs.dev/config
export default defineConfig({
	plugins: [
		patchPlugins({
			"vite:css": {
				transform: undefined,
			},
			"vite:css-post": {
				transform: undefined,
			},
		}),
		viteLwcPlugin({
			rootDir: "src",
			modules: [
				{
					dir: "modules",
				},
			],
			include: ["src/**/*"],
		}),
	],
});
