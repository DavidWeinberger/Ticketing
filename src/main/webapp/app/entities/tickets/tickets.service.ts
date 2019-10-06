import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITickets } from 'app/shared/model/tickets.model';

type EntityResponseType = HttpResponse<ITickets>;
type EntityArrayResponseType = HttpResponse<ITickets[]>;

@Injectable({ providedIn: 'root' })
export class TicketsService {
  public resourceUrl = SERVER_API_URL + 'api/tickets';

  constructor(protected http: HttpClient) {}

  create(tickets: ITickets): Observable<EntityResponseType> {
    return this.http.post<ITickets>(this.resourceUrl, tickets, { observe: 'response' });
  }

  update(tickets: ITickets): Observable<EntityResponseType> {
    return this.http.put<ITickets>(this.resourceUrl, tickets, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITickets>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITickets[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
