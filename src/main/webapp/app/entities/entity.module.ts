import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'tickets',
        loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketingProjectTicketsModule)
      },
      {
        path: 'sale',
        loadChildren: () => import('./sale/sale.module').then(m => m.TicketingProjectSaleModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.TicketingProjectCartModule)
      },
      {
        path: 'tablet-view',
        loadChildren: () => import('./tablet-view/tablet-view.module').then(m => m.TicketingProjectTabletViewModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectEntityModule {}
