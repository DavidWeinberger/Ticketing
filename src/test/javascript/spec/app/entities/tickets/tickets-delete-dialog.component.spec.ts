/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { TicketingProjectTestModule } from '../../../test.module';
import { TicketsDeleteDialogComponent } from 'app/entities/tickets/tickets-delete-dialog.component';
import { TicketsService } from 'app/entities/tickets/tickets.service';

describe('Component Tests', () => {
  describe('Tickets Management Delete Component', () => {
    let comp: TicketsDeleteDialogComponent;
    let fixture: ComponentFixture<TicketsDeleteDialogComponent>;
    let service: TicketsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TicketingProjectTestModule],
        declarations: [TicketsDeleteDialogComponent]
      })
        .overrideTemplate(TicketsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TicketsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TicketsService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
