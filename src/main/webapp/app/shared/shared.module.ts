import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TicketingProjectSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TicketingProjectSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TicketingProjectSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectSharedModule {
  static forRoot() {
    return {
      ngModule: TicketingProjectSharedModule
    };
  }
}
