// @ts-check
import { renderComponent } from "@lwc/ssr-runtime";
import Main, { tagName } from "./main.js";

/**
 * @param {string} url
 * @param {string | undefined} ssrManifest
 * @returns {Promise<{ html?: string, head?: string }>}
 */
export default async function render(url, ssrManifest) {
  const html = await renderComponent(
    tagName,
    // @ts-expect-error ssr runtimee
    Main,
    { path: url, ssrManifest },
  );
  return { html };
}
