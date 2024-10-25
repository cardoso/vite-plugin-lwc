import { api, LightningElement } from "lwc";

export default class Progress extends LightningElement {
    @api min = 0;
    @api max = 100;
    @api value = 50;

    get percentage() {
        return (this.value - this.min) / (this.max - this.min) * 100;
    }

    get valueStyle() {
        return `width:${this.percentage}%;`;
    }

    get title() {
        return new Intl.NumberFormat('en-US', {
            style: 'percent',
            maximumFractionDigits: 0
        }).format(this.percentage / 100)
    }
}