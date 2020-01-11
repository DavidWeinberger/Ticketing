import { Component, Input, OnInit } from '@angular/core';
import { Tickets } from 'app/shared/model/tickets.model';
import { AccountService } from 'app/core';
import { CartService } from 'app/entities/cart';
import { Cart } from 'app/shared/model/cart.model';
import { TicketsService } from 'app/entities/tickets';

enum Types {
  Stehplatz,
  Vip_Stehplatz,
  Sitzplatz
}

@Component({
  selector: 'jhi-ticket-gui',
  templateUrl: './ticket-gui.component.html',
  styleUrls: ['./ticket-gui.component.scss']
})
export class TicketGuiComponent implements OnInit {
  @Input() ticket: Tickets;
  @Input() isCart: Boolean;
  isReserved = false;
  cart: Cart = new Cart();
  account: Promise<Account>;
  userId: number;

  constructor(private accountService: AccountService, private cartService: CartService, private ticketService: TicketsService) {}

  ngOnInit() {}

  selectType(type: number) {
    return Types[type];
  }

  reserve() {
    this.isReserved = true;
    this.account = this.accountService.identity().then();
    this.account.then(x => {
      this.userId = Number(x.id);
      this.cart.userId = this.userId;
      this.cart.ticketId = this.ticket.id;
      this.cartService.create(this.cart).subscribe();
    });
    this.ticket.state = 1;
    this.ticketService.update(this.ticket).subscribe();
  }
}
