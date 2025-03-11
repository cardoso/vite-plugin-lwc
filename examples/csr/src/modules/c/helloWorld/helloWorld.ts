import { LightningElement, api } from "lwc";

export default class HelloWorld extends LightningElement {
  @api msg = "Hello, World!!";

  count = 1;

  handleClick() {
    this.count += 3;
  }
}

if (import.meta.hot) {
  const { swapComponent, isComponentConstructor } = await import('lwc');
  import.meta.hot.accept(jsModule => {
    if (jsModule) {
      if (jsModule.default) {
        const { default: newComponent } = jsModule;
        if (isComponentConstructor(newComponent)) {
          if (swapComponent(HelloWorld, newComponent)) {
            console.info("Hot update successful");
            return;
          } else {
            console.error("Could not swap component")
          }
        }
      }
    }
  })
}
