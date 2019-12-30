import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TicketingProjectSharedModule } from 'app/shared';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

@NgModule({
  imports: [TicketingProjectSharedModule /*, RouterModule.forChild(ENTITY_STATES)*/],
  declarations: [],
  entryComponents: [],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketingProjectTicketGuiModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
