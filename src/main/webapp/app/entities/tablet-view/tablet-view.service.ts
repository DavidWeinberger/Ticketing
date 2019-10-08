import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITabletView } from 'app/shared/model/tablet-view.model';

type EntityResponseType = HttpResponse<ITabletView>;
type EntityArrayResponseType = HttpResponse<ITabletView[]>;

@Injectable({ providedIn: 'root' })
export class TabletViewService {
  public resourceUrl = SERVER_API_URL + 'api/tablet-views';

  constructor(protected http: HttpClient) {}

  create(tabletView: ITabletView): Observable<EntityResponseType> {
    return this.http.post<ITabletView>(this.resourceUrl, tabletView, { observe: 'response' });
  }

  update(tabletView: ITabletView): Observable<EntityResponseType> {
    return this.http.put<ITabletView>(this.resourceUrl, tabletView, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITabletView>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITabletView[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
