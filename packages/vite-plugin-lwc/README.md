# vite-plugin-lwc [![npm](https://img.shields.io/npm/v/vite-plugin-lwc.svg)](https://npmjs.com/package/vite-plugin-lwc)

Unofficial Vite plugin for LWC projects.

```js
// vite.config.js
import { defineConfig } from 'vite'
import lwc from 'vite-plugin-lwc'

export default defineConfig({
  plugins: [
    lwc({
      rootDir: ".",
	  exclude: ["**/vite/**"],
    })
  ],
})
```

## Options

See [@lwc/rollup-plugin](https://github.com/salesforce/lwc/tree/master/packages/%40lwc/rollup-plugin#options).