import { api, LightningElement } from "lwc";

type Column = string;
type Cell = {
	value: number;
	max?: number;
	formatStyle?: string;
	currencyCode?: string;
};

export default class extends LightningElement {
	@api columns: Column[] = [];

	@api rows: Cell[][] = [];

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
