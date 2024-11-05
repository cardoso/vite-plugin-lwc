import { renderComponent } from "lwc";
import App from "c/app";

/**
 * @param {string} url
 * @param {string | undefined} ssrManifest
 * @returns {Promise<{ html?: string, head?: string }>}
 */
export async function render(url, ssrManifest) {
  if (ssrManifest) {
    console.log("SSR Manifest:", ssrManifest);
  }
  const { searchParams } = new URL(url, "http://localhost");
  const props = searchParams.entries();
  const html = await renderComponent("c-app", App, Object.fromEntries(props));
  return { html };
}
