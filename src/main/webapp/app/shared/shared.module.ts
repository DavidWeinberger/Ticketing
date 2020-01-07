import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TicketingProjectSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import { ShoppingCartComponent } from 'app/entities/shopping-cart/shopping-cart.component';
import { TicketGuiComponent } from 'app/entities/ticket-gui/ticket-gui.component';

@NgModule({
  imports: [TicketingProjectSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective, ShoppingCartComponent, TicketGuiComponent],
  entryComponents: [JhiLoginModalComponent],
  exports: [
    TicketingProjectSharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective,
    ShoppingCartComponent,
    TicketGuiComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectSharedModule {
  static forRoot() {
    return {
      ngModule: TicketingProjectSharedModule
    };
  }
}
