import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { TicketingProjectSharedModule } from 'app/shared';
import {
  TicketsComponent,
  TicketsDetailComponent,
  TicketsUpdateComponent,
  TicketsDeletePopupComponent,
  TicketsDeleteDialogComponent,
  ticketsRoute,
  ticketsPopupRoute
} from './';

const ENTITY_STATES = [...ticketsRoute, ...ticketsPopupRoute];

@NgModule({
  imports: [TicketingProjectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TicketsComponent,
    TicketsDetailComponent,
    TicketsUpdateComponent,
    TicketsDeleteDialogComponent,
    TicketsDeletePopupComponent
  ],
  entryComponents: [TicketsComponent, TicketsUpdateComponent, TicketsDeleteDialogComponent, TicketsDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectTicketsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
