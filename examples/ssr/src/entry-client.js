import { hydrateComponent } from "lwc";
import App from "c/app";

const container = document.querySelector("#app");
hydrateComponent(container.firstElementChild, App, {
  greeting: "Client",
});
