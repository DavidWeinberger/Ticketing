import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TicketingProjectSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import { ShoppingCartComponent } from 'app/entities/shopping-cart/shopping-cart.component';
import { TicketGuiComponent } from 'app/entities/ticket-gui/ticket-gui.component';
import { SectorsComponent } from 'app/entities/tablet-view/sectors/sectors.component';

@NgModule({
  imports: [TicketingProjectSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective, ShoppingCartComponent, TicketGuiComponent, SectorsComponent],
  entryComponents: [JhiLoginModalComponent],
  exports: [
    TicketingProjectSharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective,
    ShoppingCartComponent,
    TicketGuiComponent,
    SectorsComponent
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
