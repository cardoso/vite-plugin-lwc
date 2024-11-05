import { LightningElement } from "lwc";

export default class Counter extends LightningElement {
  counter = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
