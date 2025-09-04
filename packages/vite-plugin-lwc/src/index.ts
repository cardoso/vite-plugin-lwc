import path from "node:path";
import type { StringFilter, ObjectHook, TransformResult, TransformPluginContext } from "rollup";
import patch from "./patch.ts";
import lwc from "./lwc.ts";
import alias from "./alias.ts";
import type { Plugin } from "vite";
import hmr from "./hmr.ts";
import type { ViteLwcOptions } from "./types.ts";
import { normalizeOptions } from "./options.ts";
import { IMPLICIT_DEFAULT_CSS_PATH, IMPLICIT_DEFAULT_HTML_PATH } from "./constants.ts";

type TransformOverride = ObjectHook<(this: TransformPluginContext, code: string, id: string, options?: {
  ssr?: boolean;
}) => Promise<TransformResult> | TransformResult, {
  handler(code: string, id: string, options: {
    ssr?: boolean | undefined;
  }): undefined,
  filter?: {
    id?: StringFilter;
    code?: StringFilter;
  };
}>

function transformOverride(
  transform: TransformOverride | null | undefined,
  viteOptions: ViteLwcOptions
): TransformOverride {
  // TODO: add support for `npm` modules. Currently relies on `dir|dirs` config
  const moduleDirs = viteOptions.modules?.reduce<string[]>((acc, item) => {
    const _item = (item as { dir?: string, dirs?: string })
    if (_item.dir) {
      acc.push(_item.dir)
    }
    if (_item.dirs) {
      acc.push(..._item.dirs)
    }

    return acc
  }, []) || []

  return {
    ...transform,
    handler(code: string, id: string, options: {
      ssr?: boolean | undefined;
    } | undefined) {
      if (isLwcCss(id, moduleDirs)) {
        /**
         * These imports are handled by the LWC engine and
         * should be ignored by `vite:css`/`vite:css-post`.
         */
        return null
      } else {
        return transform?.handler?.call(this, code, id, options)
      }
    },
  }
}

/**
 * Simple "is LWC" check. Based on LWC module dir|dirs config passed
 * to the plugin.
 *
 * @param {string} id - Id path to check
 * @param {string[]} moduleDirs - list of module directories (from dir|dirs config)
 * @returns {boolean}
 */
const isInModuleDirs = (id: string, moduleDirs: string[]) => {
  const normalizeId = path.normalize(id)

  // loop until a match is found (or fail through all matches)
  for (const moduleDir of moduleDirs) {
    // removes the `./` from the prefix so the full path of id matches
    const normalizeDir = path.normalize(moduleDir)
    const dirPath = normalizeDir.replace('./', '/')

    if (normalizeId.includes(dirPath)) {
      return true
    }
  }

  return false
}

const isLwcCss = (id: string, moduleDirs: string[]) => {
  // should handle '@lwc/resources/empty_html.css' & '@lwc/resources/empty_css.css'
  if (
    isInModuleDirs(id, moduleDirs) ||
    id.startsWith('c/') ||
    id.includes(IMPLICIT_DEFAULT_HTML_PATH) ||
    id.includes(IMPLICIT_DEFAULT_CSS_PATH)
  ) {
    return true
  }

  // continue with standard Vite CSS processing
  return false
}


export default (options: ViteLwcOptions = {}): Plugin[] => {
  options = normalizeOptions(options);
  return [
    patch({
      "vite:css": (p) => {
        p.transform = transformOverride(
          p.transform,
          options
        );
      },
      "vite:css-post": (p) => {
        p.transform = transformOverride(
          p.transform,
          options
        );
      },
    }),
    alias(),
    {
      ...lwc(options),
      apply: "build",
    },
    {
      ...lwc(options),
      enforce: "post",
      apply: "serve",
    },
    hmr()
  ]
};
