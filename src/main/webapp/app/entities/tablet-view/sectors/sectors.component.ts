import { Component, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { JhiAlertService } from 'ng-jhipster';
import { AccountService } from 'app/core';
import { CartService } from 'app/entities/cart';
import { Cart } from 'app/shared/model/cart.model';
import { NotificationService } from 'app/shared/notification.service';

@Component({
  selector: 'jhi-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {
  @Input() sector: String;
  protected tickets: ITickets[] = [];
  private rows: number;
  private seats: number;
  rowArr: number[];
  seatArr: number[];
  allSeats: number[];
  private cart: Cart = new Cart();
  private account: Promise<Account>;
  private userId: number;
  private ticket: ITickets;
  private paging = false;
  private page = 0;
  private sides = 0;

  constructor(
    private accountService: AccountService,
    private cartService: CartService,
    protected jhiAlertService: JhiAlertService,
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
          this.tickets = this.tickets.filter(x => x.place === this.sector.toString());
          console.log(this.tickets);
          this.rows = Math.max.apply(Math, this.tickets.map(o => o.rows));
          this.seats = Math.max.apply(Math, this.tickets.map(o => o.seats));
          console.log(this.rows);
          this.rowArr = new Array(this.rows);
          this.seatArr = new Array(this.seats).fill(1, 0, this.seats);
          if (this.seatArr.length > 10) {
            this.sides = this.seatArr.length / 10;
            // if (this.seatArr.length % 10 !== 0) {
            // this.sides++;
            // }
            this.paging = true;
            if (this.page === this.sides) {
              this.seatArr = this.seatArr.slice(0 + 10 * this.page);
            } else {
              this.seatArr = this.seatArr.slice(0 + 10 * this.page, 10 + 10 * this.page);
            }
            console.log(this.seatArr);
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.account = this.accountService.identity().then();
    this.account.then(x => {
      this.userId = Number(x.id);
    });
    this.loadAll();
    this.notificationService.listen().subscribe(data => {
      if (data !== undefined) {
        const parts = data.toString().split('|');
        console.log(parts);
        if (parts.length > 1) {
          const chunks = parts[2].split(':');
          if (this.sector === chunks[1]) {
            this.loadAll();
          }
        } else {
          this.loadAll();
        }
      }
    });
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  getState(row, seat) {
    seat++;
    row = this.rows - row;
    const ticket = this.tickets.find(x => x.rows === row && x.seats === seat);
    if (ticket !== undefined) {
      if (ticket.state === null || ticket.state == null || ticket.state === undefined) {
        // console.log('i am here');
        ticket.state = 0;
      }
      return ticket.state;
    }
    return 0;
  }

  dotClick(row, seat) {
    seat++;
    row = this.rows - row;
    this.ticket = this.tickets.find(x => x.rows === row && x.seats === seat);
    console.log(this.userId);
    if (this.ticket.state === 0) {
      this.reserve();
    } else if (this.ticket.state === 1) {
      this.cartService.findCartsByUserId(this.userId).subscribe(data => {
        console.log(data);
        data.body.forEach(carts => {
          if (this.ticket.id === carts.ticketId) {
            console.log('found');
            this.ticketsService
              .find(carts.ticketId)
              .toPromise()
              .then(_ticket => {
                console.log('got ticket');
                console.log(_ticket);
                this.remove(_ticket.body);
              });
          }
        });
      });
    }
  }

  public remove(ticket: ITickets) {
    this.cartService.deleteByTicketId(ticket.id).subscribe();
    ticket.state = 0;
    this.ticketsService.update(ticket).subscribe();
  }

  reserve() {
    this.cart.userId = this.userId;
    this.cart.ticketId = this.ticket.id;
    this.cartService.create(this.cart).subscribe();
    this.ticket.state = 1;
    this.ticketsService.update(this.ticket).subscribe();
  }
  getColor(state) {
    switch (state) {
      case 0:
        return 'green';
      case 1:
        return 'gold';
      case 2:
        return 'darkgrey';
    }
  }

  nextPage() {
    if (this.paging) {
      this.page++;
      this.loadAll();
    }
  }

  backPage() {
    if (this.paging) {
      this.page--;
      this.loadAll();
    }
  }
}
