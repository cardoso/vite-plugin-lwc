// @ts-check

import { hydrateComponent } from "lwc";
import Main, { tagName } from "./main.mjs";

const element = document.body.getElementsByTagName(tagName).item(0);

if (element) {
  hydrateComponent(element, Main, {
    path: window.location.pathname,
  });
}
