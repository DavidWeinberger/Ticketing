import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICart, Cart } from 'app/shared/model/cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'jhi-cart-update',
  templateUrl: './cart-update.component.html'
})
export class CartUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    ticketId: [null, [Validators.required]],
    userId: [null, [Validators.required]]
  });

  constructor(protected cartService: CartService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ cart }) => {
      this.updateForm(cart);
    });
  }

  updateForm(cart: ICart) {
    this.editForm.patchValue({
      id: cart.id,
      ticketId: cart.ticketId,
      userId: cart.userId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const cart = this.createFromForm();
    if (cart.id !== undefined) {
      this.subscribeToSaveResponse(this.cartService.update(cart));
    } else {
      this.subscribeToSaveResponse(this.cartService.create(cart));
    }
  }

  private createFromForm(): ICart {
    return {
      ...new Cart(),
      id: this.editForm.get(['id']).value,
      ticketId: this.editForm.get(['ticketId']).value,
      userId: this.editForm.get(['userId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICart>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
