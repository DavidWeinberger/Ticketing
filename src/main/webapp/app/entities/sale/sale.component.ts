import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ISale } from 'app/shared/model/sale.model';
import { AccountService } from 'app/core';
import { SaleService } from './sale.service';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { SERVER_API_URL } from 'app/app.constants';
import { NotificationService } from 'app/shared/notification.service';

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
  sektors: string[] = [];

  constructor(
    protected saleService: SaleService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService,
    protected ticketsService: TicketsService,
    protected notificationService: NotificationService
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
          this.tickets.forEach(x => {
            if (!this.sektors.includes(x.place)) {
              this.sektors.push(x.place);
            }
          });
          // console.log(this.sektors);
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
    this.notificationService.listen().subscribe(data => {
      // console.log(data);
    });
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
