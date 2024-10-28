import type { Plugin } from "vite";
import lwc, { type RollupLwcOptions } from "@lwc/rollup-plugin";

export type ViteLwcOptions = RollupLwcOptions;

export default function viteLwc(options?: ViteLwcOptions): Plugin {
	const rollupPlugin = lwc(options);

	const buildStartHook = getHook(rollupPlugin, "buildStart");
	const resolveIdHook = getHook(rollupPlugin, "resolveId");
	const loadHook = getHook(rollupPlugin, "load");
	const transformHook = getHook(rollupPlugin, "transform");

	return {
		name: "vite-plugin-lwc",
		enforce: "post",
		buildStart(options) {
			try {
				return buildStartHook.call(this, options);
			} catch (e) {
				console.error(e);
			}
		},
		resolveId(source, importer, options) {
			try {
				return resolveIdHook.call(rollupPlugin, source, importer, options);
			} catch (e) {
				console.error(e);
			}
		},
		load(id) {
			try {
				return loadHook.call(this, id);
			} catch (e) {
				console.error(e);
			}
		},
		transform(code, id) {
			if (id === "@lwc/resources/empty_css.css") {
				return 'export default "";';
			}

			try {
				return transformHook.call(this, code, id);
			} catch (e) {
				console.error(e);
			}
		},
	};
}

function getHook<T, K extends string & keyof T>(rollupPlugin: T, hookName: K) {
	const hook = rollupPlugin[hookName];

	if (typeof hook === "undefined") {
		throw new Error(
			`The hook "${hookName}" is not supported by the LWC plugin.`,
		);
	}

	if (typeof hook !== "function") {
		throw new Error(`The hook "${hookName}" is not a function.`);
	}

	return hook;
}
