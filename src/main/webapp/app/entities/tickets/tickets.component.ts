import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITickets } from 'app/shared/model/tickets.model';
import { AccountService } from 'app/core';
import { TicketsService } from './tickets.service';

@Component({
  selector: 'jhi-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent implements OnInit, OnDestroy {
  tickets: ITickets[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected ticketsService: TicketsService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.ticketsService
      .query()
      .pipe(
        filter((res: HttpResponse<ITickets[]>) => res.ok),
        map((res: HttpResponse<ITickets[]>) => res.body)
      )
      .subscribe(
        (res: ITickets[]) => {
          this.tickets = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInTickets();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ITickets) {
    return item.id;
  }

  registerChangeInTickets() {
    this.eventSubscriber = this.eventManager.subscribe('ticketsListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
