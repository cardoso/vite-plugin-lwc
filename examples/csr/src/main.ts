import { createElement } from "lwc";
import App from "c/app";

document.body.querySelector("c-app")?.remove();

const elm = createElement("c-app", { is: App });
document.body.appendChild(elm);
