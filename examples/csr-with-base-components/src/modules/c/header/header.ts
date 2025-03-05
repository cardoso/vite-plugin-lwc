import { LightningElement, api } from "lwc";

export default class Header extends LightningElement {
  @api title = "Title";
  @api subTitle = "Subtitle"
}
