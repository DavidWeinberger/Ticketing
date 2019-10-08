import { Component, OnInit } from '@angular/core';
import { Cart, ICart } from 'app/shared/model/cart.model';
import { CartService } from 'app/entities/cart';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ITickets } from 'app/shared/model/tickets.model';
import { TicketsService } from 'app/entities/tickets';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { AccountService } from 'app/core';

@Component({
  selector: 'jhi-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  private tickets: ITickets[] = [];
  private carts: ICart[];
  eventSubscriber: Subscription;
  private account: Promise<Account>;
  private userId = 0;

  constructor(
    private cartService: CartService,
    private ticketService: TicketsService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}
  ngOnInit() {
    this.refreshCart();
    this.registerChangeInCarts();
  }

  public async refreshCart() {
    this.cartService
      .query()
      .pipe(
        filter((res: HttpResponse<ICart[]>) => res.ok),
        map((res: HttpResponse<ICart[]>) => res.body)
      )
      .subscribe(
        (res: ICart[]) => {
          this.carts = res;
          this.account = this.accountService.identity().then();
          this.account.then(x => {
            this.userId = Number(x.id);
            this.carts = this.carts.filter(data => data.userId === this.userId);
            this.carts.forEach(y => {
              this.ticketService.find(y.ticketId).subscribe(ticket => {
                this.tickets.push(ticket.body);
              });
            });
          });
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  registerChangeInCarts() {
    this.eventSubscriber = this.eventManager.subscribe('cartListModification', response => this.refreshCart());
  }

  private onError(message: string) {
    console.log('Error');
  }
}
