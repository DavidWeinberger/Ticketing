import { Component, Input, OnInit } from '@angular/core';
import { Cart, ICart } from 'app/shared/model/cart.model';
import { CartService } from 'app/entities/cart';
import { delay, filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { AccountService } from 'app/core';
import { NotificationService } from 'app/shared/notification.service';

@Component({
  selector: 'jhi-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() tablet = false;
  tickets: ITickets[] = [];
  protected carts: ICart[];
  eventSubscriber: Subscription;
  protected account: Promise<Account> = null;
  protected userId = 0;
  protected price = 0;
  constructor(
    protected cartService: CartService,
    protected ticketService: TicketsService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService,
    protected notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.refreshCart();
    this.notificationService.listen().subscribe(data => {
      if (data !== undefined) {
        const parts = data.toString().split('|');
        // console.log(parts);
        if (parts.length > 1) {
          const chunks = parts[1].split(':');
          if (this.userId.toString() === chunks[1]) {
            // console.log('User found');
            this.refreshCart();
          }
        } else {
          this.refreshCart();
        }
        // this.refreshCart();
      }
    });
  }

  public refreshCart() {
    const _tickets: ITickets[] = [];
    this.cartService
      .query()
      .pipe(
        filter((res: HttpResponse<ICart[]>) => res.ok),
        map((res: HttpResponse<ICart[]>) => res.body)
      )
      .subscribe(
        (res: ICart[]) => {
          this.carts = res;
          if (this.account === null) {
            this.account = this.accountService.identity().then();
          }
          this.account.then(x => {
            if (this.userId === 0) {
              this.userId = Number(x.id);
            }
            this.price = 0;
            this.carts = this.carts.filter(data => data.userId === this.userId);
            this.carts.forEach(y => {
              this.ticketService.find(y.ticketId).subscribe(ticket => {
                _tickets.push(ticket.body);
                this.price += ticket.body.price;
              });
            });
            this.tickets = _tickets;
          });
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  public remove(ticket: ITickets) {
    this.cartService.deleteByTicketId(ticket.id).subscribe();
    if (ticket.type !== 2) {
      ticket.state -= 1;
    } else {
      ticket.state = 0;
    }
    this.ticketService.update(ticket).subscribe();
  }

  private onError(message: string) {
    console.log('Error');
  }

  buy() {
    this.tickets.forEach(ticket => {
      console.log(ticket.type);
      if (ticket.type === 2) {
        this.cartService.deleteByTicketId(ticket.id).subscribe();
        ticket.state = 2;
      } else {
        ticket.seats += 1;
        console.log(ticket.seats);
        this.cartService.deleteByTicketId(ticket.id).subscribe();
        this.ticketService.update(ticket).subscribe();
        return;
      }
      this.ticketService.update(ticket).subscribe();
    });
  }

  cancle() {
    this.tickets.forEach(ticket => {
      this.cartService.deleteByTicketId(ticket.id).subscribe();
      ticket.state = 0;
      this.ticketService.update(ticket).subscribe();
    });
  }
}
