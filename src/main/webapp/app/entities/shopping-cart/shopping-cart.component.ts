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
  carts: ICart[];
  eventSubscriber: Subscription;
  account: Promise<Account> = null;
  userId = 0;
  price = 0;

  constructor(
    protected cartService: CartService,
    protected ticketService: TicketsService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService,
    protected notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.refreshCart();
    // this.notificationService.connect();
    const listener = this.notificationService.createListener();
    this.notificationService.receive(listener).subscribe(msg => {
      // console.log('Cart');
      if (msg !== undefined) {
        const parts = msg.toString().split('|');
        if (parts.length > 1) {
          const chunks = parts[1].split(':');
          if (this.userId.toString() === chunks[1]) {
            // console.log('User found');
            this.refreshCart();
          }
        } else {
          this.refreshCart();
        }
      }
    });
    /*this.notificationService.receive().subscribe(msg => {
      if (msg !== undefined) {
        const parts = msg.toString().split('|');
        if (parts.length > 1) {
          const chunks = parts[1].split(':');
          if (this.userId.toString() === chunks[1]) {
            // console.log('User found');
            this.refreshCart();
          }
        } else {
          this.refreshCart();
        }
      }
    });*/
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
      // console.log(ticket.type);
      this.cartService.deleteByTicketId(ticket.id).subscribe();
      ticket.state = 2;
      this.ticketService.update(ticket).subscribe();
      // console.log(this.tickets);
    });
    // else {
    //         this.tickets.filter( x => x.id === ticket.id).forEach( y => {
    //           count++;
    //         });
    //         this.tickets = this.tickets.filter( x => x.id !== ticket.id);
    //         ticket.seats += count;
    //         console.log(ticket.seats);
    //         await this.cartService.deleteByTicketId(ticket.id).subscribe();
    //         await this.ticketService.update(ticket).subscribe();
    //       }
    // });
  }

  cancel() {
    this.tickets.forEach(ticket => {
      this.cartService.deleteByTicketId(ticket.id).subscribe();
      ticket.state = 0;
      this.ticketService.update(ticket).subscribe();
    });
  }
}
