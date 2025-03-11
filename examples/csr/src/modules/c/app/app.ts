import { LightningElement } from "lwc";

export default class App extends LightningElement {

}

if (import.meta.hot) {
  const { swapComponent, isComponentConstructor } = await import('lwc');
  import.meta.hot.accept(jsModule => {
    if (jsModule) {
      if (jsModule.default) {
        const { default: newComponent } = jsModule;
        if (isComponentConstructor(newComponent)) {
          if (swapComponent(App, newComponent)) {
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
