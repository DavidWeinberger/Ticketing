import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TicketingProjectSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { TicketingProjectSaleModule } from 'app/entities/sale/sale.module';

@NgModule({
  imports: [TicketingProjectSharedModule, RouterModule.forChild([HOME_ROUTE]), TicketingProjectSaleModule],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectHomeModule {}
