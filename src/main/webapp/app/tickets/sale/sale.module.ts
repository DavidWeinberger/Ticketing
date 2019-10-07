import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SaleComponent, saleRoute } from './';

@NgModule({
  imports: [RouterModule.forRoot([saleRoute])],
  declarations: [SaleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SaleModule {}
