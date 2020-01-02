import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { SaleComponent, saleRoute } from './';
import { CommonModule } from '@angular/common';
import { TicketingProjectSharedModule } from 'app/shared';
import { CollapsableTicketsComponent } from './collapsable-tickets/collapsable-tickets.component';

const ENTITY_STATES = [...saleRoute];

@NgModule({
  imports: [RouterModule.forChild(ENTITY_STATES), CommonModule, TicketingProjectSharedModule],
  declarations: [SaleComponent, CollapsableTicketsComponent],
  entryComponents: [],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  exports: [],
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
