import { api, LightningElement } from "lwc";

type FormatStyle = "decimal" | "currency" | "percent" | "percent-fixed";
type CurrencyDisplayAs = "symbol" | "code" | "name";
type SignificantDigits =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21;

/**
 * Displays formatted numbers for decimals, currency, and percentages.
 */
export default class LightningFormattedNumber extends LightningElement {
	/**
	 * The value to be formatted.
	 * @type {number}
	 * @required
	 */
	@api value?: number;

	/**
	 * The number formatting style to use. Possible values are decimal, currency,
	 * percent, and percent-fixed. This value defaults to decimal.
	 * @type {FormatStyle}
	 * @default 'decimal'
	 */
	@api formatStyle: FormatStyle = "decimal";

	/**
	 * Only used if format-style='currency', this attribute determines which currency is
	 * displayed. Possible values are the ISO 4217 currency codes, such as 'USD' for the US dollar.
	 * @type {string}
	 *
	 */
	@api currencyCode?: string;

	/**
	 * Determines how currency is displayed. Possible values are symbol, code, and name. This value defaults to symbol.
	 * @type {CurrencyDisplayAs}
	 * @default 'symbol'
	 */
	@api currencyDisplayAs: CurrencyDisplayAs = "symbol";

	/**
	 * The minimum number of integer digits that are required. Possible values are from 1 to 21.
	 * @type {number}
	 *
	 */
	@api minimumIntegerDigits?: number;

	/**
	 * The minimum number of fraction digits that are required.
	 * @type {number}
	 *
	 */
	@api minimumFractionDigits?: number;

	/**
	 * The maximum number of fraction digits that are allowed.
	 * @type {number}
	 *
	 */
	@api maximumFractionDigits?: number;

	/**
	 * The minimum number of significant digits that are required. Possible values are from 1 to 21.
	 * @type {number}
	 *
	 */
	@api minimumSignificantDigits?: SignificantDigits;

	/**
	 * The maximum number of significant digits that are allowed. Possible values are from 1 to 21.
	 * @type {number}
	 *
	 */
	@api maximumSignificantDigits?: SignificantDigits;

	get formattedNumber(): string {
		if (this.value === undefined) {
			return "";
		}

		return new Intl.NumberFormat("en-US", {
			style:
				this.formatStyle === "percent-fixed" ? "percent" : this.formatStyle,
			currency: this.currencyCode,
			currencyDisplay: this.currencyDisplayAs,
			minimumIntegerDigits: this.minimumIntegerDigits,
			minimumFractionDigits: this.minimumFractionDigits,
			maximumFractionDigits: this.maximumFractionDigits,
			minimumSignificantDigits: this.minimumSignificantDigits,
			maximumSignificantDigits: this.maximumSignificantDigits,
		}).format(
			this.formatStyle === "percent-fixed" ? this.value / 100 : this.value,
		);
	}

	static interopMap = {
		props: {
			formatStyle: "style",
		},
	};
}
