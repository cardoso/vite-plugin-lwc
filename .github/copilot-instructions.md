# Vite Plugin LWC - GitHub Copilot Instructions

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This repository contains a Vite plugin for Lightning Web Components (LWC) along with scaffolding tools, examples, and supporting packages. It's a monorepo using pnpm workspaces with TypeScript throughout.

## Working Effectively

### Initial Setup and Dependencies
- Install pnpm globally if not available: `npm install -g pnpm`
- Install all dependencies: `pnpm install --frozen-lockfile` -- takes 1.5 minutes. NEVER CANCEL. Set timeout to 3+ minutes.
- Install Playwright browsers for testing: `pnpm exec playwright install chromium` -- takes 2-5 minutes. NEVER CANCEL. Set timeout to 10+ minutes.
  - **NOTE**: Playwright installation may fail due to network/firewall limitations. If it fails, tests will not run but build/dev still works.

### Build and Development Commands
- Build all packages and examples: `pnpm build` -- takes 20 seconds. NEVER CANCEL. Set timeout to 2+ minutes.
- Run typecheck across all packages: `pnpm typecheck` -- takes 14 seconds. NEVER CANCEL. Set timeout to 1+ minute.
- Run linting: `pnpm lint` -- takes 9 seconds. NEVER CANCEL. Set timeout to 1+ minute.
- Run tests: `pnpm test` -- requires Playwright browsers. NEVER CANCEL. Set timeout to 5+ minutes.
- Build individual packages: `pnpm -r run build` or `cd packages/<package-name> && pnpm build`
- Package development mode: `cd packages/<package-name> && pnpm dev` (uses unbuild --stub for hot reload)
- Version bumping: `pnpm bump` (uses changesets for version management)

### Development Servers
- Run CSR example: `pnpm example:csr` -- starts on http://localhost:5173 in ~500ms
- Run CSR with Base Components example: `pnpm example:csr-with-base-components` 
- Run SSR example: `pnpm example:ssr` -- starts server on http://localhost:5173
- Run playground for testing: `cd playground/lwc && pnpm dev`

## Validation

### Always Validate Changes With These Steps
1. **Build validation**: Run `pnpm build` to ensure all packages build successfully
2. **Type validation**: Run `pnpm typecheck` to catch TypeScript errors  
3. **Lint validation**: Run `pnpm lint` to ensure code style compliance
4. **Example validation**: Start at least one example server and verify it loads:
   - `pnpm example:csr` then visit http://localhost:5173
   - Verify the LWC components render correctly
5. **Scaffolding validation**: Test the create-lwc tool:
   - `cd /tmp && npx create-lwc test-project --template lwc` -- takes <1 second
   - `cd test-project && npm install` -- takes ~3 seconds for scaffolded projects  
   - `npm run dev` -- verify the generated project starts correctly on http://localhost:5173

### Manual Testing Scenarios
- **Plugin functionality**: Create or modify LWC components in examples and verify they compile and render
- **Build output**: Check that `dist/` folders are created in packages after `pnpm build`
- **Template generation**: Use create-lwc to scaffold new projects and verify they work
- **SSR functionality**: Test the SSR example and verify server-side rendering works

### CI Pipeline Requirements
Always run these commands before committing (matches .github/workflows/cr.yml):
1. `pnpm install --frozen-lockfile`
2. `pnpm build`
3. `pnpm typecheck`
4. `pnpm lint`
5. `pnpm exec playwright install chromium` (may fail, that's OK)
6. `pnpm test` (may fail if Playwright installation failed)

## Repository Structure

### Key Packages (packages/)
- **vite-plugin-lwc/**: Main Vite plugin for LWC support
  - Built with unbuild, exports TypeScript types
  - Entry point: `src/index.ts`
  - Build output: `dist/index.mjs` and `dist/index.d.ts`
- **create-lwc/**: CLI tool for scaffolding LWC projects  
  - Binary: `dist/index.mjs`
  - Templates: `template-lwc/`
  - Usage: `npx create-lwc <project-name>`
- **cem-plugin-lwc/**: Custom Elements Manifest plugin for LWC
- **components/**: Shared component library

### Examples (examples/)
- **csr/**: Client-side rendering example - basic LWC setup
- **csr-with-base-components/**: CSR with Lightning Base Components  
- **ssr/**: Server-side rendering example with Node.js server

### Playground (playground/)
- **lwc/**: Test environment with Vitest + Playwright browser testing
  - Contains actual browser-based tests in `__tests__/lwc.spec.ts`
  - Used for testing plugin functionality

### Build Configuration
- **unbuild**: Used for building packages (not examples)
- **Vite**: Used for examples and playground
- **TypeScript**: All packages use TypeScript with shared tsconfig.base.json
- **ESLint**: Flat config in eslint.config.mjs

## Common Issues and Troubleshooting

### Playwright Installation Failures
- Playwright browser download may fail due to network/firewall restrictions
- If `pnpm exec playwright install chromium` fails, tests cannot run but development continues
- Document this as a known limitation when it occurs

### Build Failures
- If unbuild fails, check TypeScript errors first with `pnpm typecheck`
- Ensure all dependencies are installed with `pnpm install --frozen-lockfile`
- Clean build: remove `dist/` folders and run `pnpm build` again

### Development Server Issues  
- Examples run on port 5173 by default
- If port is busy, Vite will automatically use next available port
- SSR example uses Node.js server, CSR examples use Vite dev server

## Frequent File Locations

### When modifying the main plugin:
- Source: `packages/vite-plugin-lwc/src/`
- Config: `packages/vite-plugin-lwc/build.config.ts`
- Always test with playground: `cd playground/lwc && pnpm dev`

### When modifying create-lwc:
- Source: `packages/create-lwc/src/`  
- Templates: `packages/create-lwc/template-*/`
- Test by creating new project: `npx create-lwc test-project`

### When working on examples:
- Each example has its own `vite.config.ts`
- Examples use workspace version of vite-plugin-lwc
- Always test example servers after changes

### Configuration Files to Check:
- Root: `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`
- CI: `.github/workflows/cr.yml` 
- Linting: `eslint.config.mjs`
- Testing: `vitest.workspace.ts`
- Changesets: `.changeset/config.json` (for version management)
- Package builds: `packages/*/build.config.ts` (unbuild configuration)

## Development Workflow

1. **Setup**: `pnpm install --frozen-lockfile` (1.5 min)
2. **Build**: `pnpm build` (20 sec) 
3. **Develop**: Start relevant example or playground
4. **Test changes**: Run validation steps above
5. **Pre-commit**: `pnpm lint` and `pnpm typecheck`

## Quick Command Reference

```bash
# Full development setup
pnpm install --frozen-lockfile     # 1.5 min
pnpm build                         # 20 sec
pnpm typecheck                     # 14 sec  
pnpm lint                          # 9 sec

# Run examples
pnpm example:csr                   # CSR example on :5173
pnpm example:csr-with-base-components  # With Lightning Base Components
pnpm example:ssr                   # SSR example on :5173

# Create new LWC project
npx create-lwc my-project --template lwc

# Package development
cd packages/vite-plugin-lwc && pnpm dev    # Hot reload development
cd packages/create-lwc && pnpm dev         # Hot reload development
```

Always build and test your changes with real examples before considering them complete.