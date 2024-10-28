import patch from "./patch.js";
import lwc, { type ViteLwcOptions } from "./lwc.js";

// https://vitejs.dev/config
export default (options?: ViteLwcOptions) => [
	patch({
		"vite:css": {
			transform: undefined,
		},
		"vite:css-post": {
			transform: undefined,
		},
	}),
	lwc(options),
];
