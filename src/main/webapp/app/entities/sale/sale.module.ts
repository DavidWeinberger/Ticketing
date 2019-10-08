import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { TicketingProjectSharedModule } from 'app/shared';
import { SaleComponent, saleRoute } from './';
import { TicketGuiComponent } from './ticket-gui/ticket-gui.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const ENTITY_STATES = [...saleRoute];

@NgModule({
  imports: [TicketingProjectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [SaleComponent, TicketGuiComponent, ShoppingCartComponent],
  entryComponents: [SaleComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectSaleModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
