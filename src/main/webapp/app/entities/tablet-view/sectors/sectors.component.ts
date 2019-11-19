import { Component, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { JhiAlertService } from 'ng-jhipster';
import { AccountService } from 'app/core';
import { CartService } from 'app/entities/cart';
import { Cart } from 'app/shared/model/cart.model';

@Component({
  selector: 'jhi-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {
  @Input() sector: String;
  private tickets: ITickets[];
  private rows: number;
  private seats: number;
  private rowArr: number[];
  private seatArr: number[];
  private cart: Cart = new Cart();
  private account: Promise<Account>;
  private userId: number;
  private ticket: ITickets;

  constructor(
    private accountService: AccountService,
    private cartService: CartService,
    protected jhiAlertService: JhiAlertService,
    protected ticketsService: TicketsService
  ) {}

  ngOnInit() {
    this.ticketsService
      .query()
      .pipe(
        filter((res: HttpResponse<ITickets[]>) => res.ok),
        map((res: HttpResponse<ITickets[]>) => res.body)
      )
      .subscribe(
        (res: ITickets[]) => {
          this.tickets = res;
          this.tickets = this.tickets.filter(x => x.place === this.sector);
          this.rows = Math.max.apply(Math, this.tickets.map(o => o.rows));
          this.seats = Math.max.apply(Math, this.tickets.map(o => o.seats));
          this.rowArr = new Array(this.rows);
          this.seatArr = new Array(this.seats);
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  getState(row, seat) {
    seat++;
    row = this.rows - row;
    const ticket = this.tickets.find(x => x.rows === row && x.seats === seat);
    // console.log(ticket);
    if (ticket.state === null || ticket.state == null || ticket.state === undefined) {
      console.log('i am here');
      ticket.state = 0;
    }
    return ticket.state;
  }

  dotClick(row, seat) {
    seat++;
    row = this.rows - row;
    console.log(row + '______----______' + seat);
    this.tickets.find(x => x.rows === row && x.seats === seat).state = 1;
    this.ticket = this.tickets.find(x => x.rows === row && x.seats === seat);
    this.reserve();
  }

  reserve() {
    this.account = this.accountService.identity().then();
    this.account.then(x => {
      this.userId = Number(x.id);
      this.cart.userId = this.userId;
      this.cart.ticketId = this.ticket.id;
      this.cartService.create(this.cart).subscribe();
    });
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
}
