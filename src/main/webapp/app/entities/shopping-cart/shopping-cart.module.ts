import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TicketingProjectSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { SaleComponent, saleRoute } from 'app/entities/sale';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

// const ENTITY_STATES = [...];

@NgModule({
  imports: [TicketingProjectSharedModule /*, RouterModule.forChild(ENTITY_STATES)*/],
  declarations: [SaleComponent],
  entryComponents: [SaleComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectShoppingCartModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
