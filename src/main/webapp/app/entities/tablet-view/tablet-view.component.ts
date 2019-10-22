import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITabletView } from 'app/shared/model/tablet-view.model';
import { AccountService } from 'app/core';
import { TabletViewService } from './tablet-view.service';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';

@Component({
  selector: 'jhi-tablet-view',
  templateUrl: './tablet-view.component.html',
  styleUrls: ['tablet-view.scss']
})
export class TabletViewComponent implements OnInit, OnDestroy {
  private seats: { id: string; ticket: ITickets[] }[];
  tabletViews: ITabletView[];
  currentAccount: any;
  eventSubscriber: Subscription;
  private tickets: ITickets[];

  constructor(
    protected tabletViewService: TabletViewService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService,
    protected ticketsService: TicketsService
  ) {}

  loadAll() {
    this.tabletViewService
      .query()
      .pipe(
        filter((res: HttpResponse<ITabletView[]>) => res.ok),
        map((res: HttpResponse<ITabletView[]>) => res.body)
      )
      .subscribe(
        (res: ITabletView[]) => {
          this.tabletViews = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    // this.ticketsService
    //   .query()
    //   .pipe(
    //     filter((res: HttpResponse<ITickets[]>) => res.ok),
    //     map((res: HttpResponse<ITickets[]>) => res.body)
    //   )
    //   .subscribe(
    //     (res: ITickets[]) => {
    //       this.tickets = res;
    //       console.log(this.tickets);
    //     },
    //     (res: HttpErrorResponse) => this.onError(res.message)
    //   );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInTabletViews();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ITabletView) {
    return item.id;
  }

  registerChangeInTabletViews() {
    this.eventSubscriber = this.eventManager.subscribe('tabletViewListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
