import type { Plugin } from "vite";
import lwc, { type RollupLwcOptions } from "@lwc/rollup-plugin";
import type { RollupError } from "rollup";
export type ViteLwcOptions = RollupLwcOptions;

export default function viteLwc(options: ViteLwcOptions = {}): Plugin {
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
				this.error(getError(e));
			}
		},
		resolveId(source, importer, options) {
			try {
				return resolveIdHook.call(this, source, importer, options);
			} catch (e) {
				this.error(getError(e));
			}
		},
		load(id) {
			try {
				return loadHook.call(this, id);
			} catch (e) {
				this.error(getError(e));
			}
		},
		transform(code, id, options) {
			if (id.endsWith("index.html")) {
				return code;
			}

			try {
				return transformHook.call(this, code, id, options);
			} catch (e) {
				this.error(getError(e, code));
			}
		},
	};
}

function getHook<T, K extends keyof T>(rollupPlugin: T, hookName: K) {
	const hook = rollupPlugin[hookName];

	if (typeof hook === "undefined") {
		throw new Error(
			`The hook "${String(hookName)}" is not supported by the LWC plugin.`,
		);
	}

	if (typeof hook !== "function") {
		throw new Error(`The hook "${String(hookName)}" is not a function.`);
	}

	return hook;
}

function getError(error: unknown, src?: string): RollupError | string {
	if (typeof error === "string") {
		return error;
	}

	if (typeof error !== "object" || error === null) {
		return String(error);
	}

	const rollupError: RollupError = {
		message: "An unknown error occurred.",
	};

	addErrorCode(error, rollupError);
	addErrorMessage(error, rollupError);
	addErrorLocation(error, rollupError, src);

	return rollupError;
}

function addErrorCode(error: object, rollupError: RollupError) {
	if ("code" in error && typeof error.code === "number") {
		rollupError.pluginCode = error.code;
	}
}

function addErrorMessage(error: object, rollupError: RollupError) {
	if ("message" in error && typeof error.message === "string") {
		rollupError.message = error.message;
	}
}

function addErrorLocation(
	error: object,
	rollupError: RollupError,
	src?: string,
) {
	if ("filename" in error && typeof error.filename === "string") {
		rollupError.loc = {
			file: error.filename,
			line: 1,
			column: 1,
		};
	}

	if (
		"location" in error &&
		typeof error.location === "object" &&
		error.location !== null
	) {
		rollupError.loc = {
			...rollupError.loc,
			line:
				"line" in error.location && typeof error.location.line === "number"
					? error.location.line
					: 1,
			column:
				"column" in error.location && typeof error.location.column === "number"
					? error.location.column
					: 1,
		};

		if (
			"start" in error.location &&
			typeof error.location.start === "number" &&
			"length" in error.location &&
			typeof error.location.length === "number"
		) {
			rollupError.frame = src?.substring(
				error.location.start,
				error.location.start + error.location.length,
			);
		}
	}
}
