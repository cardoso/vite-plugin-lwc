import { renderComponent } from "lwc";
import App from "c/app";

export function render() {
  const html = renderComponent("c-app", App, {
    greeting: "Server",
  });
  return html;
}
