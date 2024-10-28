import { api, LightningElement } from "lwc";

/**
 * @typedef {string} Column
 * @typedef {{ value: number; max?: number; formatStyle?: string; currencyCode?: string;}} Cell
 */

export default class extends LightningElement {
	/**
	 * The columns of the table.
	 * @type {Column[]}
	 */
	@api columns = [];

	/**
	 * The rows of the table.
	 * @type {Cell[][]}
	 */
	@api rows = [];

	get _rows() {
		return this.rows.map((row, index) => ({
			key: index,
			cells: row.map((cell, index) => ({
				key: index,
				...cell,
			})),
		}));
	}

	get _columns() {
		return this.columns.map((column, index) => ({
			key: index,
			label: column,
		}));
	}
}
