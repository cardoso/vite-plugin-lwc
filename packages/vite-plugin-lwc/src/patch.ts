import type { Plugin } from "vite";

export default function patchPlugins(
	options: Record<string, Partial<Plugin>>,
): Plugin {
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
