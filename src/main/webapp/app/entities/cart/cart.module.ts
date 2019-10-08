import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { TicketingProjectSharedModule } from 'app/shared';
import {
  CartComponent,
  CartDetailComponent,
  CartUpdateComponent,
  CartDeletePopupComponent,
  CartDeleteDialogComponent,
  cartRoute,
  cartPopupRoute
} from './';

const ENTITY_STATES = [...cartRoute, ...cartPopupRoute];

@NgModule({
  imports: [TicketingProjectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [CartComponent, CartDetailComponent, CartUpdateComponent, CartDeleteDialogComponent, CartDeletePopupComponent],
  entryComponents: [CartComponent, CartUpdateComponent, CartDeleteDialogComponent, CartDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectCartModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
