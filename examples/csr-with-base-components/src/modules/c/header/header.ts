import { LightningElement, api } from "lwc";

export default class Header extends LightningElement {
  @api title = "Vite + LWC";
  @api subTitle = "csr with base components"
}
