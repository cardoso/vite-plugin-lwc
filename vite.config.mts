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

function viteLwc(options?: RollupLwcOptions): Plugin {
	const rollupPlugin = lwc(options);

	return {
		name: "vite-plugin-lwc",
		enforce: "post",
		buildStart(options) {
			try {
				// @ts-expect-error - `buildStart` is optional
				return rollupPlugin.buildStart.call(this, options);
			} catch (e) {
				console.error(e);
			}
		},
		resolveId(source, importer, options) {
			try {
				// @ts-expect-error - `resolveId` is optional
				return rollupPlugin.resolveId.call(this, source, importer, options);
			} catch (e) {
				console.error(e);
			}
		},
		load(id) {
			if (id === path.resolve(__dirname, "index.html")) {
				return;
			}

			try {
				// @ts-expect-error - `load` is optional
				return rollupPlugin.load.call(this, id);
			} catch (e) {
				console.error(e);
			}
		},
		transform(code, id) {
			if (id === path.resolve(__dirname, "index.html")) {
				return;
			}

			if (id === "@lwc/resources/empty_css.css") {
				return 'export default "";';
			}

			try {
				// @ts-expect-error - `transform` is optional
				return rollupPlugin.transform.call(this, code, id);
			} catch (e) {
				console.error(e);
			}
		},
	};
}

// https://vitejs.dev/config
export default defineConfig({
	build: {
		rollupOptions: {
			input: "./src/main.js",
			external: [
				"@lwc/engine-dom",
				"@lwc/shared",
				"@lwc/ssr-runtime",
				"@lwc/synthetic-shadow",
				"@lwc/wire-service",
				"lwc",
			],
		},
		modulePreload: false,
	},
	plugins: [
		patchPlugins({
			"vite:css": {
				transform: undefined,
			},
			"vite:css-post": {
				transform: undefined,
			},
		}),
		viteLwc({
			rootDir: ".",
			modules: [
				{
					dir: "src/modules",
				},
			],

			exclude: ["**/node_modules/**"],
		}),
	],
});
