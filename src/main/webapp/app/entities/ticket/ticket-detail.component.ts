import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from './ticket.model';
import { TicketService } from './ticket.service';

@Component({
    selector: 'jhi-ticket-detail',
    templateUrl: './ticket-detail.component.html'
})
export class TicketDetailComponent implements OnInit, OnDestroy {

    ticket: Ticket;
    private subscription: any;

    constructor(
        private ticketService: TicketService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.ticketService.find(id).subscribe(ticket => {
            this.ticket = ticket;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
