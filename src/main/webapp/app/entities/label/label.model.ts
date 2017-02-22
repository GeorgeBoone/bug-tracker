import { Ticket } from '../ticket';
export class Label {
    constructor(
        public id?: number,
        public label?: string,
        public ticket?: Ticket,
    ) { }
}
