import { Component, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { Cart } from 'app/shared/model/cart.model';
import { JhiAlertService } from 'ng-jhipster';
import { NotificationService } from 'app/shared/notification.service';

@Component({
  selector: 'jhi-displaysector',
  templateUrl: './displaysector.component.html',
  styleUrls: ['./displaysector.component.scss']
})
export class DisplaysectorComponent implements OnInit {
  @Input() sector: String;
  protected tickets: ITickets[] = [];
  private rows = 0;
  private seats = 0;
  rowArr: number[];
  seatArr: number[];

  constructor(
    protected ticketsService: TicketsService,
    protected jhiAlertService: JhiAlertService,
    protected notificationService: NotificationService
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
          this.tickets = res;
          console.log(this.sector.toString());
          console.log(this.tickets);
          this.tickets = this.tickets.filter(x => x.place === this.sector.toString());
          console.log(this.tickets);
          this.rows = Math.max.apply(Math, this.tickets.map(o => o.rows));
          this.seats = Math.max.apply(Math, this.tickets.map(o => o.seats));
          console.log(this.rows);
          console.log(this.seats);
          this.rowArr = new Array(this.rows);
          this.seatArr = new Array(this.seats);
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  ngOnInit(): void {
    this.notificationService.listen().subscribe(data => {
      this.loadAll();
    });
  }

  getState(row, seat) {
    seat++;
    row = this.rows - row;
    const ticket = this.tickets.find(x => x.rows === row && x.seats === seat);
    // console.log(ticket);
    if (ticket.state === null || ticket.state == null || ticket.state === undefined) {
      // console.log('i am here');
      ticket.state = 0;
    }
    return ticket.state;
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
