import { hydrateComponent } from "lwc";
import App from "c/app";

const container = document.querySelector("#app");

if (!container) {
  throw new Error("No container element found");
}

if (!container.firstElementChild) {
  throw new Error("No child element found in container");
}

hydrateComponent(container.firstElementChild, App, {
  greeting: "Client",
});
