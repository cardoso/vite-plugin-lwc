import type { Plugin } from "vite";

export default function patchPlugins(
	patches: Record<string, (plugin: Plugin) => void>,
): Plugin {
	return {
		name: "patch-plugins",
		enforce: "pre",
		configResolved(config) {
			for (const [name, patch] of Object.entries(patches)) {
				const plugin = config.plugins.find((plugin) => plugin.name === name);
				if (!plugin) {
					throw new Error(`Could not find plugin "${name}" to patch.`);
				}
				patch(plugin);
			}
		},
	};
}
