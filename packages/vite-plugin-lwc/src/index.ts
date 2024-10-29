import patch from "./patch.js";
import lwc, { type ViteLwcOptions } from "./lwc.js";

export default (options?: ViteLwcOptions) => [
	patch({
		"vite:css": (p) => {
			p.transform = undefined;
		},
		"vite:css-post": (p) => {
			p.transform = undefined;
		},
	}),
	lwc(options),
];
