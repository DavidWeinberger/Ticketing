import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TabletView } from 'app/shared/model/tablet-view.model';
import { TabletViewService } from './tablet-view.service';
import { TabletViewComponent } from './tablet-view.component';
import { ITabletView } from 'app/shared/model/tablet-view.model';

@Injectable({ providedIn: 'root' })
export class TabletViewResolve implements Resolve<ITabletView> {
  constructor(private service: TabletViewService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITabletView> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<TabletView>) => response.ok),
        map((tabletView: HttpResponse<TabletView>) => tabletView.body)
      );
    }
    return of(new TabletView());
  }
}

export const tabletViewRoute: Routes = [
  {
    path: '',
    component: TabletViewComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'ticketingProjectApp.tabletView.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
