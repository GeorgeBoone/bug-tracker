import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BugTrackerProjectModule } from './project/project.module';
import { BugTrackerLabelModule } from './label/label.module';
import { BugTrackerTicketModule } from './ticket/ticket.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BugTrackerProjectModule,
        BugTrackerLabelModule,
        BugTrackerTicketModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BugTrackerEntityModule {}
