import "@lwc/synthetic-shadow";
import { createElement } from "lwc";
import Main from "c/main";

const elm = createElement("c-main", { is: Main });
document.body.appendChild(elm);
