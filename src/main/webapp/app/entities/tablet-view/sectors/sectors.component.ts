import { Component, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { JhiAlertService } from 'ng-jhipster';

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

  constructor(protected jhiAlertService: JhiAlertService, protected ticketsService: TicketsService) {}

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
}
