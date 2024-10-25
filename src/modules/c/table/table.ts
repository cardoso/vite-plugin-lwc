import { api, LightningElement } from 'lwc';

export default class extends LightningElement {
    @api columns = [
        'Quota',
        'Closed',
        'Worst Case',
        'Expected Case',
        'Best Case'
    ];

    @api rows = [
        [
            {
                value: 426099
            },
            {
                value: 0
            },
            {
                value: 300000,
                max: 426099
            },
            {
                value: 390000,
                max: 426099
            },
            {
                value: 915000,
            }
        ]
    ]

    get _rows() {
        return this.rows.map((row, index) => ({
            key: index,
            cells: row.map((cell, index) => ({
                key: index,
                ...cell
            }))
        }));
    }
}