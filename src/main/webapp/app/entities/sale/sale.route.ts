import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Sale } from 'app/shared/model/sale.model';
import { SaleService } from './sale.service';
import { SaleComponent } from './sale.component';
import { ISale } from 'app/shared/model/sale.model';

@Injectable({ providedIn: 'root' })
export class SaleResolve implements Resolve<ISale> {
  constructor(private service: SaleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISale> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Sale>) => response.ok),
        map((sale: HttpResponse<Sale>) => sale.body)
      );
    }
    return of(new Sale());
  }
}

export const saleRoute: Routes = [
  {
    path: '',
    component: SaleComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'ticketingProjectApp.sale.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
