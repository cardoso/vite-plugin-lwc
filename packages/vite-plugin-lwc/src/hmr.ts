import type { Plugin } from "vite";


export default function lwcHmrPlugin(): Plugin {

  return {
    name: "lwc:hmr",
    enforce: "post",
    apply: "serve",
    transform(code, id, options) {

      if (options?.ssr) {
        return;
      }

      if (!id) {
        return;
      }

      if (!code.includes("export default __lwc_component_class_internal")) {
        return;
      }

      return code + `
if (import.meta.hot) {
  const { swapComponent, isComponentConstructor } = await import('lwc');
    import.meta.hot.accept((jsModule) => {
    if (!jsModule) {
      import.meta.hot?.invalidate("new module is undefined");
      return;
    }

    if (!isComponentConstructor(jsModule.default)) {
      import.meta.hot?.invalidate("not a component constructor");
      return;
    }

    const success = swapComponent(__lwc_component_class_internal, jsModule.default);

    if (!success) {
      import.meta.hot?.invalidate("swapComponent returned false")
      return;
    }
  })
}`;
    },
  };
}
