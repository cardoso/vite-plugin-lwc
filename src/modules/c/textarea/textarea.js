import { api, LightningElement } from "lwc";

export default class Textarea extends LightningElement {
	@api label;
	@api required = false;
	@api placeholder;
}
