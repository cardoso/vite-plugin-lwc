import type { Plugin } from "vite";

import lwc, { type RollupLwcOptions } from "@lwc/rollup-plugin";

export type ViteLwcOptions = RollupLwcOptions;

export default function viteLwc(options?: ViteLwcOptions): Plugin {
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
			try {
				// @ts-expect-error - `load` is optional
				return rollupPlugin.load.call(this, id);
			} catch (e) {
				console.error(e);
			}
		},
		transform(code, id) {
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
