import { LightningElement } from "lwc";

export default class App extends LightningElement {

}

if (import.meta.hot) {
  const { swapComponent, isComponentConstructor } = await import('lwc');
  import.meta.hot.accept(jsModule => {
    if (jsModule && isComponentConstructor(jsModule.default)) {
      try {
        if (!swapComponent(App, jsModule.default)) {
          import.meta.hot?.invalidate();
        }
      } catch (err) {
        const message = String(err);
        import.meta.hot?.invalidate(message)
      }
    }
  })
}
