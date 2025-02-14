import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { Cart } from 'app/shared/model/cart.model';
import { JhiAlertService } from 'ng-jhipster';
import { NotificationService } from 'app/shared/notification.service';
import { AccountService } from 'app/core';
import { CartService } from 'app/entities/cart';

enum Types {
  Stehplatz,
  Vip_Stehplatz,
  Sitzplatz
}

@Component({
  selector: 'jhi-displaysector',
  templateUrl: './displaysector.component.html',
  styleUrls: ['./displaysector.component.scss']
})
export class DisplaysectorComponent implements OnInit {
  @Input() sector: String;
  @Input() height = '20';
  @Input() rotation = '0';
  @Input() sidePlace = false;
  @Input() bulkTickets = false;
  @ViewChild('one', { static: false }) d1: ElementRef;
  tickets: ITickets[] = [];
  ticketIds: number[] = [];
  rows = 0;
  seats = 0;
  space = 5;
  sideSpacing = 0;
  topSpacing = 0;
  moveUp = 0;
  rowArr: number[] = [];
  seatArr: number[] = [];
  account: Promise<Account>;
  cart: Cart = new Cart();
  userId: number;

  constructor(
    protected ticketsService: TicketsService,
    protected jhiAlertService: JhiAlertService,
    protected notificationService: NotificationService,
    protected accountService: AccountService,
    protected cartService: CartService
  ) {
    this.loadAll();
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
          if (res.length > 0) {
            if (res.find(x => x.type === 2 && x.place === this.sector.toString())) {
              this.tickets = res;
              // console.log(this.sector.toString());
              // console.log(this.tickets);
              this.tickets = this.tickets.filter(x => x.place === this.sector.toString());
              // console.log(this.tickets);
              this.rows = Math.max.apply(Math, this.tickets.map(o => o.sectorRows));
              this.seats = Math.max.apply(Math, this.tickets.map(o => o.seats));
              this.calculateSpace();
              this.rowArr = new Array(this.rows);
              this.seatArr = new Array(this.seats);
            } else {
              this.tickets = res.filter(x => x.state === 0 && x.place === this.sector.toString());
            }
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    if (this.userId) {
      this.cartService.findCartsByUserId(this.userId).subscribe( x => x.body.forEach(y => this.ticketIds.push(y.ticketId)));
    }
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  ngOnInit(): void {
    this.account = this.accountService.identity().then();
    this.account.then(x => {
      this.userId = Number(x.id);
      this.loadAll();
    });
    const listener = this.notificationService.createListener();
    this.notificationService.receive(listener).subscribe(msg => {
      this.loadAll();
    });
  }

  getState(row, seat) {
    seat++;
    row = this.rows - row;
    const ticket = this.tickets.find(x => x.sectorRows === row && x.seats === seat);
    if (ticket.state === null || ticket.state == null || ticket.state === undefined) {
      ticket.state = 0;
    }
    if (this.ticketIds.find(x => x === ticket.id)) {
      return -1;
    }
    return ticket.state;
  }

  getColor(state) {
    switch (state) {
      case -1:
        return 'gold';
      case 0:
        return 'green';
      case 1:
        return 'darkgrey';
      case 2:
        return 'darkgrey';
    }
  }

  calculateSpace() {
    if (!this.bulkTickets && this.tickets.length > 0) {
      let actHeight;
      let actWidth;
      if (this.sidePlace) {
        actHeight = this.d1.nativeElement.offsetWidth;
        actWidth = this.d1.nativeElement.offsetHeight;
      } else {
        actHeight = this.d1.nativeElement.offsetHeight;
        actWidth = this.d1.nativeElement.offsetWidth;
      }
      if (actWidth / this.seats < actHeight / this.rows) {
        this.space = actWidth / (this.seats * 1.125);
      } else {
        this.space = actHeight / (this.rows * 1.5);
      }
      let usedSpace = this.space * this.rows;
      this.topSpacing = (actHeight - usedSpace) / this.rows;
      usedSpace = this.space * this.seats;
      this.sideSpacing = (actWidth - usedSpace) / this.seats;
    }
  }

  selectType(type: number) {
    if (Types[Types.Vip_Stehplatz] === Types[type]) {
      return 'Vip-Stehplatz';
    }
    return Types[type];
  }

  reserveBulk() {
    const tempTickets = this.tickets.shift();
    this.account = this.accountService.identity().then();
    this.account.then(x => {
      this.userId = Number(x.id);
      this.cart.userId = this.userId;
      this.cart.ticketId = tempTickets.id;
      this.cartService.create(this.cart).subscribe();
    });
    tempTickets.state = 1;
    this.ticketsService.update(tempTickets).subscribe();
  }
}
