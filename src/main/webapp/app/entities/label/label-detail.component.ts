import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Label } from './label.model';
import { LabelService } from './label.service';

@Component({
    selector: 'jhi-label-detail',
    templateUrl: './label-detail.component.html'
})
export class LabelDetailComponent implements OnInit, OnDestroy {

    label: Label;
    private subscription: any;

    constructor(
        private labelService: LabelService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.labelService.find(id).subscribe(label => {
            this.label = label;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
