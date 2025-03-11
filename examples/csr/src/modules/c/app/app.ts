import { LightningElement } from "lwc";

export default class App extends LightningElement {
  connectedCallback(): void {
    console.log("App component connected");
  }
}
