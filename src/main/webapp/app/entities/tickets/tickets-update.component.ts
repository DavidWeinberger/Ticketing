import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITickets, Tickets } from 'app/shared/model/tickets.model';
import { TicketsService } from './tickets.service';

@Component({
  selector: 'jhi-tickets-update',
  templateUrl: './tickets-update.component.html'
})
export class TicketsUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    ticketType: [null, [Validators.required]],
    price: [null, [Validators.required, Validators.min(0)]],
    amount: [null, [Validators.required, Validators.min(0)]],
    place: [null, [Validators.required]]
  });

  constructor(protected ticketsService: TicketsService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ tickets }) => {
      this.updateForm(tickets);
    });
  }

  updateForm(tickets: ITickets) {
    this.editForm.patchValue({
      id: tickets.id,
      ticketType: tickets.ticketType,
      price: tickets.price,
      amount: tickets.amount,
      place: tickets.place
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const tickets = this.createFromForm();
    if (tickets.id !== undefined) {
      this.subscribeToSaveResponse(this.ticketsService.update(tickets));
    } else {
      this.subscribeToSaveResponse(this.ticketsService.create(tickets));
    }
  }

  private createFromForm(): ITickets {
    return {
      ...new Tickets(),
      id: this.editForm.get(['id']).value,
      ticketType: this.editForm.get(['ticketType']).value,
      price: this.editForm.get(['price']).value,
      amount: this.editForm.get(['amount']).value,
      place: this.editForm.get(['place']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITickets>>) {
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
