import { Component, OnInit } from '@angular/core';
import { Cart, ICart } from 'app/shared/model/cart.model';
import { CartService } from 'app/entities/cart';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: Cart;
  private carts: ICart[];
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService
      .query()
      .pipe(
        filter((res: HttpResponse<ICart[]>) => res.ok),
        map((res: HttpResponse<ICart[]>) => res.body)
      )
      .subscribe(
        (res: ICart[]) => {
          this.carts = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  private onError(message: string) {
    console.log('Error');
  }
}
