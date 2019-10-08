import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { ICart, Cart } from 'app/shared/model/cart.model';
import { CartService } from './cart.service';
import { IJHI_USER } from 'app/shared/model/jhi-user.model';
import { JHI_USERService } from 'app/entities/jhi-user';
import { ITICKETS } from 'app/shared/model/tickets.model';
import { TICKETSService } from 'app/entities/tickets';

@Component({
  selector: 'jhi-cart-update',
  templateUrl: './cart-update.component.html'
})
export class CartUpdateComponent implements OnInit {
  isSaving: boolean;

  jhi_users: IJHI_USER[];

  tickets: ITICKETS[];

  editForm = this.fb.group({
    id: [],
    ticketId: [null, [Validators.required]],
    userId: [null, [Validators.required]],
    time: [null, [Validators.required]],
    jHI_USERId: [],
    tICKETSId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected cartService: CartService,
    protected jHI_USERService: JHI_USERService,
    protected tICKETSService: TICKETSService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ cart }) => {
      this.updateForm(cart);
    });
    this.jHI_USERService
      .query({ filter: 'cart-is-null' })
      .pipe(
        filter((mayBeOk: HttpResponse<IJHI_USER[]>) => mayBeOk.ok),
        map((response: HttpResponse<IJHI_USER[]>) => response.body)
      )
      .subscribe(
        (res: IJHI_USER[]) => {
          if (!this.editForm.get('jHI_USERId').value) {
            this.jhi_users = res;
          } else {
            this.jHI_USERService
              .find(this.editForm.get('jHI_USERId').value)
              .pipe(
                filter((subResMayBeOk: HttpResponse<IJHI_USER>) => subResMayBeOk.ok),
                map((subResponse: HttpResponse<IJHI_USER>) => subResponse.body)
              )
              .subscribe(
                (subRes: IJHI_USER) => (this.jhi_users = [subRes].concat(res)),
                (subRes: HttpErrorResponse) => this.onError(subRes.message)
              );
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    this.tICKETSService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ITICKETS[]>) => mayBeOk.ok),
        map((response: HttpResponse<ITICKETS[]>) => response.body)
      )
      .subscribe((res: ITICKETS[]) => (this.tickets = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(cart: ICart) {
    this.editForm.patchValue({
      id: cart.id,
      ticketId: cart.ticketId,
      userId: cart.userId,
      time: cart.time != null ? cart.time.format(DATE_TIME_FORMAT) : null,
      jHI_USERId: cart.jHI_USERId,
      tICKETSId: cart.tICKETSId
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
      userId: this.editForm.get(['userId']).value,
      time: this.editForm.get(['time']).value != null ? moment(this.editForm.get(['time']).value, DATE_TIME_FORMAT) : undefined,
      jHI_USERId: this.editForm.get(['jHI_USERId']).value,
      tICKETSId: this.editForm.get(['tICKETSId']).value
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
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackJHI_USERById(index: number, item: IJHI_USER) {
    return item.id;
  }

  trackTICKETSById(index: number, item: ITICKETS) {
    return item.id;
  }
}
