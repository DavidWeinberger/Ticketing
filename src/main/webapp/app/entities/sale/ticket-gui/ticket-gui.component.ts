import { Component, Input, OnInit } from '@angular/core';
import { Tickets } from 'app/shared/model/tickets.model';
import { AccountService } from 'app/core';
import { CartService } from 'app/entities/cart';
import { Cart } from 'app/shared/model/cart.model';

@Component({
  selector: 'jhi-ticket-gui',
  templateUrl: './ticket-gui.component.html',
  styleUrls: ['./ticket-gui.component.scss']
})
export class TicketGuiComponent implements OnInit {
  @Input() ticket: Tickets;
  @Input() isCart: Boolean;
  private cart: Cart = new Cart();
  private account: Promise<Account>;
  private userId: number;
  constructor(private accountService: AccountService, private cartService: CartService) {}

  ngOnInit() {}

  reserve() {
    this.account = this.accountService.identity().then();
    this.account.then(x => {
      this.userId = Number(x.id);
      this.cart.userId = this.userId;
      this.cart.ticketId = this.ticket.id;
      this.cartService.create(this.cart).subscribe();
    });
    console.log('create');
  }
}
