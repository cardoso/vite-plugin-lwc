import { LightningElement, api } from "lwc";
import template1 from "./template-1.html";
import template2 from "./template-2.html";

export default class DynamicTemplate extends LightningElement {
  @api alternate = false;

  render() {
    return this.alternate ? template2 : template1;
  }
}
