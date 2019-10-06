import { Route } from '@angular/router';

import { SaleComponent } from './sale.component';

export const saleRoute: Route = {
  path: 'sale',
  component: SaleComponent,
  data: {
    pageTitle: 'Sale'
  }
};
