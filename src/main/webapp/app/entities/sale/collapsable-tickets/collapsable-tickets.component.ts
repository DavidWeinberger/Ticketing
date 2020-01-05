import { Component, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { JhiAlertService } from 'ng-jhipster';
import { NotificationService } from 'app/shared/notification.service';

@Component({
  selector: 'jhi-collapsable-tickets',
  templateUrl: './collapsable-tickets.component.html',
  styleUrls: ['./collapsable-tickets.component.scss']
})
export class CollapsableTicketsComponent implements OnInit {
  @Input() sektor: String;
  tickets: ITickets[] = [];
  opened = false;

  constructor(
    protected ticketsService: TicketsService,
    protected jhiAlertService: JhiAlertService,
    protected notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.loadAll();
    this.notificationService.listen().subscribe(data => {
      this.loadAll();
    });
  }

  loadAll() {
    this.ticketsService
      .query()
      .pipe(
        filter((res: HttpResponse<ITickets[]>) => res.ok),
        map((res: HttpResponse<ITickets[]>) => res.body)
      )
      .subscribe(
        (res: ITickets[]) => {
          this.tickets = res.filter(ticket => ticket.place === this.sektor && ticket.state === 0);
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
}
