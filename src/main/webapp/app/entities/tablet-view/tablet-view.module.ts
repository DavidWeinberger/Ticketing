import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { TicketingProjectSharedModule } from 'app/shared';
import { TabletViewComponent, tabletViewRoute } from './';

const ENTITY_STATES = [...tabletViewRoute];

@NgModule({
  imports: [TicketingProjectSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [TabletViewComponent],
  entryComponents: [TabletViewComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectTabletViewModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
