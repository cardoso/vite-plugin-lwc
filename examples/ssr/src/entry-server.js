// @ts-check
import { renderComponent } from "lwc";
import Main, { tagName } from "./main.mjs";

/**
 * @param {string} url
 * @param {string | undefined} ssrManifest
 * @returns {Promise<{ html?: string, head?: string }>}
 */
export async function render(url, ssrManifest) {
  const html = await renderComponent(
    tagName,
    // @ts-expect-error missing [SYMBOL_GENERATE_MARKUP]
    Main,
    { path: url, ssrManifest },
  );
  return { html };
}
