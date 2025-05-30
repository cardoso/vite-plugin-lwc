import { LightningElement, api } from "lwc";

export default class HelloWorld extends LightningElement {
  @api msg = "Hello, World!!";

  count = 4;

  handleClick() {
    this.count += 2;
  }
}
