import { LightningElement } from "lwc";

export default class App extends LightningElement {
	get forecast() {
		return {
			columns: ["Quota", "Closed", "Worst Case", "Expected Case", "Best Case"],
			rows: [
				[
					{
						value: 426099,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
					{
						value: 0,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
					{
						value: 300000,
						max: 426099,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
					{
						value: 390000,
						max: 426099,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
					{
						value: 915000,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
				],
			],
		};
	}

	get renewals() {
		return {
			columns: [
				"Open Renewals",
				"Worst Case",
				"Expected Case",
				"Base Case",
				"Forecasted Renewals",
			],
			rows: [
				[
					{
						value: 556912,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
					{
						value: 450000,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
					{
						value: 530512,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
					{
						value: 530512,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
					{
						value: 94,
						formatStyle: "percent-fixed",
					},
				],
			],
		};
	}

	get top5Renewals() {
		return {
			columns: ["Name", "CRM Score", "Owner", "Split Amount", "Renewal ARR"],
			rows: [
				[
					{
						value: "Acme",
					},
					{
						value: 100,
					},
					{
						value: "Jane Doe",
					},
					{
						value: 495000,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
					{
						value: 495000,
						formatStyle: "currency",
						currencyCode: "USD",
						maximumFractionDigits: 0,
					},
				],
			],
		};
	}
}
