import { setFeatureFlag, hydrateComponent, createElement } from "lwc";
import { createMount } from "./main.mjs";

const mount = createMount({ setFeatureFlag, hydrateComponent, createElement });

mount();
