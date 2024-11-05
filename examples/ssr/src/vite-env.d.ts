/// <reference types="vite/client" />

import "lwc";
import "@lwc/ssr-runtime";
declare module "lwc" {
  export { serverSideRenderComponent as renderComponent } from "@lwc/ssr-runtime";
}
