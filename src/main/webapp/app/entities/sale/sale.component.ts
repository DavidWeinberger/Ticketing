import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ISale } from 'app/shared/model/sale.model';
import { AccountService } from 'app/core';
import { SaleService } from './sale.service';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';

@Component({
  selector: 'jhi-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.scss']
})
export class SaleComponent implements OnInit, OnDestroy {
  sales: ISale[];
  tickets: ITickets[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected saleService: SaleService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService,
    protected ticketsService: TicketsService
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
    this.registerChangeInSales();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ISale) {
    return item.id;
  }

  registerChangeInSales() {
    this.eventSubscriber = this.eventManager.subscribe('saleListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
