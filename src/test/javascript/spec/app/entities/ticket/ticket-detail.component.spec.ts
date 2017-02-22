import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { TicketDetailComponent } from '../../../../../../main/webapp/app/entities/ticket/ticket-detail.component';
import { TicketService } from '../../../../../../main/webapp/app/entities/ticket/ticket.service';
import { Ticket } from '../../../../../../main/webapp/app/entities/ticket/ticket.model';

describe('Component Tests', () => {

    describe('Ticket Management Detail Component', () => {
        let comp: TicketDetailComponent;
        let fixture: ComponentFixture<TicketDetailComponent>;
        let service: TicketService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TicketDetailComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    TicketService
                ]
            }).overrideComponent(TicketDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TicketDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TicketService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Ticket(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.ticket).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
