# vite-plugin-lwc [![npm](https://img.shields.io/npm/v/vite-plugin-lwc.svg)](https://npmjs.com/package/vite-plugin-lwc) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/cardoso/vite-plugin-lwc-example?file=src%2Fmodules%2Fc%2Fapp%2Fapp.html)


Unofficial Vite plugin for LWC projects.

```js
// vite.config.js
import { defineConfig } from "vite";
import lwc from "vite-plugin-lwc";

// https://vitejs.dev/config
export default defineConfig({
	plugins: [
		lwc(),
	],
});
```

## Options

See [@lwc/rollup-plugin](https://github.com/salesforce/lwc/tree/master/packages/%40lwc/rollup-plugin#options).
