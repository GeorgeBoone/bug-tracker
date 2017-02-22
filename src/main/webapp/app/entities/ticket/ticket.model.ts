import { Project } from '../project';
import { User } from '../../shared';
import { Label } from '../label';
export class Ticket {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public dueDate?: any,
        public done?: boolean,
        public project?: Project,
        public assignedTo?: User,
        public label?: Label,
    ) { }
}
