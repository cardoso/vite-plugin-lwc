import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

// https://vitejs.dev/config
export default defineConfig({
	plugins: [
		lwc(),
	],
});
