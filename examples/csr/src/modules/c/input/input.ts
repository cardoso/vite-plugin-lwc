import { api, LightningElement } from "lwc";

export default class Input extends LightningElement {
  @api label = "";
  @api required = false;
  @api placeholder = "";
}
