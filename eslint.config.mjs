// @ts-check
import globals from 'globals/globals.json' with { type: "json" };
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
        projectService: {
          defaultProject: 'tsconfig.lint.json',
          allowDefaultProject: ['eslint.config.mjs', 'build.config.ts', 'vitest.workspace.ts'],
        },
        tsconfigRootDir: import.meta.dirname,

      },
      globals: {
        ...globals.node,
        ...globals.browser,
      }
    },
  },
);
