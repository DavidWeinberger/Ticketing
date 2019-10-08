/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TicketingProjectTestModule } from '../../../test.module';
import { TabletViewComponent } from 'app/entities/tablet-view/tablet-view.component';
import { TabletViewService } from 'app/entities/tablet-view/tablet-view.service';
import { TabletView } from 'app/shared/model/tablet-view.model';

describe('Component Tests', () => {
  describe('TabletView Management Component', () => {
    let comp: TabletViewComponent;
    let fixture: ComponentFixture<TabletViewComponent>;
    let service: TabletViewService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TicketingProjectTestModule],
        declarations: [TabletViewComponent],
        providers: []
      })
        .overrideTemplate(TabletViewComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TabletViewComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TabletViewService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new TabletView(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.tabletViews[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
