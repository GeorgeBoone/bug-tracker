import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Ticket } from './ticket.model';
import { DateUtils } from 'ng-jhipster';
@Injectable()
export class TicketService {

    private resourceUrl = 'api/tickets';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(ticket: Ticket): Observable<Ticket> {
        let copy: Ticket = Object.assign({}, ticket);
        copy.dueDate = this.dateUtils
            .convertLocalDateToServer(ticket.dueDate);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(ticket: Ticket): Observable<Ticket> {
        let copy: Ticket = Object.assign({}, ticket);
        copy.dueDate = this.dateUtils
            .convertLocalDateToServer(ticket.dueDate);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Ticket> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            let jsonResponse = res.json();
            jsonResponse.dueDate = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.dueDate);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }


    private convertResponse(res: any): any {
        let jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].dueDate = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].dueDate);
        }
        res._body = jsonResponse;
        return res;
    }

    private createRequestOption(req?: any): BaseRequestOptions {
        let options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            let params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);

            options.search = params;
        }
        return options;
    }
}
