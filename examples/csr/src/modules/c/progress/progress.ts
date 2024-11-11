import { api, LightningElement } from "lwc";

export default class Progress extends LightningElement {
	/**
	 * The minimum value of the progress bar.
	 * @type {number}
	 */
	@api min = 0;
	/**
	 * The maximum value of the progress bar.
	 * @type {number}
	 */
	@api max = 100;
	/**
	 * The current value of the progress bar.
	 * @type {number}
	 */
	@api value = 50;

	/**
	 * The size of the progress bar. Possible values are small, medium, and large.
	 * @type {string}
	 */
	@api size = "small";

	/**
	 * The percentage of the progress bar.
	 * @type {number}
	 */
	get percentage() {
		return ((this.value - this.min) / (this.max - this.min)) * 100;
	}

	/**
	 * The style of the progress bar.
	 * @type {string}
	 */
	get valueStyle() {
		return `width:${this.percentage}%;`;
	}

	/**
	 * The title of the progress bar.
	 * @type {string}
	 */
	get title() {
		return new Intl.NumberFormat("en-US", {
			style: "percent",
			maximumFractionDigits: 0,
		}).format(this.percentage / 100);
	}

	get computedClass() {
		return `slds-progress-bar slds-progress-bar_${this.size}`;
	}
}
