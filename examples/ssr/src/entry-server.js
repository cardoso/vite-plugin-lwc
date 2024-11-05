import { renderComponent } from "lwc";
import App from "c/app";

/**
 * @param {string} url
 * @returns
 */
export function render(url) {
  const { searchParams } = new URL(url, "http://localhost");
  const props = searchParams.entries();
  const html = renderComponent("c-app", App, Object.fromEntries(props));
  return html;
}
