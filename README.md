# Vite Plugin LWC

[![npm](https://img.shields.io/npm/v/vite-plugin-lwc.svg)](https://www.npmjs.com/package/vite-plugin-lwc)
![NPM Downloads](https://img.shields.io/npm/d18m/vite-plugin-lwc)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cardoso/vite-plugin-lwc/cr.yml)](https://github.com/cardoso/vite-plugin-lwc/actions/workflows/cr.yml)

## Examples
| Link | Description | Playground |
| ---- | ----------- | ---------- |
| [CSR](examples/csr) | Client-side rendering | [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/cardoso/vite-plugin-lwc/tree/main/examples/csr?file=src%2Fmodules%2Fc%2Fapp%2Fapp.html) |
| [CSR + Base Components](examples/csr-with-base-components) | Lightning Base Components | [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/cardoso/vite-plugin-lwc/tree/main/examples/csr-with-base-components?file=src%2Fmodules%2Fc%2Fapp%2Fapp.html) |
| [SSR](examples/ssr) | Server-side rendering | [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/cardoso/vite-plugin-lwc/tree/main/examples/ssr?file=src%2Fmodules%2Fc%2Fapp%2Fapp.html) |

## Installation

```bash
npm install vite-plugin-lwc
```

## Usage

Add the plugin to your `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import lwc from 'vite-plugin-lwc';

export default defineConfig({
  plugins: [lwc()],
});
```

## Packages

| Package                                       | Version (click for changelogs)                                                                                                 |
| --------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [vite-plugin-lwc](packages/vite-plugin-lwc) | [![vite-plugin-lwc version](https://img.shields.io/npm/v/vite-plugin-lwc.svg?label=%20)](packages/vite-plugin-lwc/CHANGELOG.md) |

## License

[MIT](LICENSE).
