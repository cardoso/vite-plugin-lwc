import { LightningElement, api } from "lwc";

export default class HelloWorld extends LightningElement {
  @api msg = "Hello, World!!";

  count = 2;

  handleClick() {
    this.count += 1;
  }
}

if (import.meta.hot) {
  const { swapComponent, isComponentConstructor } = await import('lwc');
  import.meta.hot.accept(jsModule => {
    if (jsModule && isComponentConstructor(jsModule.default)) {
      try {
        if (!swapComponent(HelloWorld, jsModule.default)) {
          import.meta.hot?.invalidate();
        }
      } catch (err) {
        const message = String(err);
        import.meta.hot?.invalidate(message)
      }
    }
  })
}
