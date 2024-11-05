/// <reference types="vite/client" />

import "lwc";
import "@lwc/engine-server";
declare module "lwc" {
  export { renderComponent } from "@lwc/engine-server";
}
