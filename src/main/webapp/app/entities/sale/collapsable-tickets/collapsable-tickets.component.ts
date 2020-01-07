import { Component, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { JhiAlertService } from 'ng-jhipster';
import { NotificationService } from 'app/shared/notification.service';
import { AccountService } from 'app/core';
import { Cart } from 'app/shared/model/cart.model';
import { CartService } from 'app/entities/cart';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

enum Types {
  Stehplatz,
  Vip_Stehplatz,
  Sitzplatz
}

@Component({
  selector: 'jhi-collapsable-tickets',
  templateUrl: './collapsable-tickets.component.html',
  styleUrls: ['./collapsable-tickets.component.scss']
})
export class CollapsableTicketsComponent implements OnInit {
  @Input() sektor: String;
  tickets: ITickets[] = [];
  opened = false;
  protected bulkTicket = false;
  private account: Promise<Account>;
  private userId: number;
  private cart: Cart = new Cart();
  activeSector: number;
  private closeResult: string;

  constructor(
    protected ticketsService: TicketsService,
    protected jhiAlertService: JhiAlertService,
    protected notificationService: NotificationService,
    protected accountService: AccountService,
    protected cartService: CartService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadAll();
    this.notificationService.listen().subscribe(data => {
      this.loadAll();
    });
  }

  selectType(type: number) {
    return Types[type];
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
            if (res.filter(ticket => ticket.place === this.sektor && ticket.type === 0).length > 0) {
              console.log('Bulkticket');
              this.bulkTicket = true;
              this.tickets = res.filter(ticket => ticket.place === this.sektor && ticket.type === 0);
              if (this.tickets[0].amount === 0 || this.tickets[0].amount - this.tickets[0].state <= 0) {
                this.tickets = [];
              }
            } else if (res.filter(ticket => ticket.place === this.sektor && ticket.type === 1).length > 0) {
              console.log('Bulkticket');
              this.bulkTicket = true;
              this.tickets = res.filter(ticket => ticket.place === this.sektor && ticket.type === 1);
              if (this.tickets[0].amount === 0) {
                this.tickets = [];
              }
            } else {
              this.tickets = res.filter(ticket => ticket.place === this.sektor && ticket.state === 0);
            }
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  private onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  open(content, sector) {
    this.activeSector = sector;

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openTickets() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }

  reserveBulck() {
    this.account = this.accountService.identity().then();
    this.account.then(x => {
      this.userId = Number(x.id);
      this.cart.userId = this.userId;
      this.cart.ticketId = this.tickets[0].id;
      this.cartService.create(this.cart).subscribe();
    });
    this.tickets[0].state += 1;
    this.ticketsService.update(this.tickets[0]).subscribe();
  }
}
