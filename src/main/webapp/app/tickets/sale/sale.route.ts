import { Route } from '@angular/router';

import { SaleComponent } from './';

export const saleRoute: Route = {
  path: 'sale',
  component: SaleComponent,
  data: {
    pageTitle: 'Sale'
  }
};
