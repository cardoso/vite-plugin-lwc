// @ts-check
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import gitignore from 'eslint-config-flat-gitignore';

export default tseslint.config(
  gitignore(),
  {
    ignores: ['packages/create-lwc/template-*']
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      }
    },
  },
);
