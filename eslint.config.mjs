import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import gitignore from "eslint-config-flat-gitignore";

/** @type {import('eslint').Linter.Config[]} */
export default [
  gitignore(),
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
