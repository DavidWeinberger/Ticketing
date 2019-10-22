import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITickets, Tickets } from 'app/shared/model/tickets.model';
import { TicketsService } from './tickets.service';

enum Types {
  Stehplatz,
  Vip_Stehplatz,
  Sitzplatz
}
export namespace types {
  export function values() {
    return Object.keys(Types).filter(type => isNaN(<any>type) && type !== 'values');
  }
}

@Component({
  selector: 'jhi-tickets-update',
  templateUrl: './tickets-update.component.html'
})
export class TicketsUpdateComponent implements OnInit {
  typesEnum = types;
  Enum = Types;
  isSaving: boolean;
  items;
  isSeatTicket: boolean;

  editForm = this.fb.group({
    id: [],
    type: [],
    price: [null, [Validators.required, Validators.min(0)]],
    place: [],
    amount: []
  });

  constructor(protected ticketsService: TicketsService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ tickets }) => {
      this.updateForm(tickets);
    });
  }

  updateForm(tickets: ITickets) {
    this.items = Types[tickets.type];
    this.editForm.patchValue({
      id: tickets.id,
      type: tickets.type,
      price: tickets.price,
      place: tickets.place,
      amount: tickets.amount
    });
  }

  previousState() {
    window.history.back();
  }

  changedSelection() {
    if (this.items === Types[Types.Sitzplatz]) {
      this.isSeatTicket = true;
    } else {
      this.isSeatTicket = false;
    }
  }

  save() {
    this.isSaving = true;
    console.log('saving');
    const tickets = this.createFromForm();
    if (tickets.id !== undefined) {
      this.subscribeToSaveResponse(this.ticketsService.update(tickets));
    } else {
      // console.log(this.items.equals(Types.Sitzplatz.toString()));
      console.log(this.items + '=' + Types[Types.Sitzplatz]);
      if (this.items === Types[Types.Sitzplatz]) {
        console.log('found');
        const amount = tickets.amount;
        tickets.amount = 1;
      }
      this.subscribeToSaveResponse(this.ticketsService.create(tickets));
    }
  }

  private createFromForm(): ITickets {
    return {
      ...new Tickets(),
      id: this.editForm.get(['id']).value,
      type: Number(Types[this.items]),
      price: this.editForm.get(['price']).value,
      place: this.editForm.get(['place']).value,
      amount: this.editForm.get(['amount']).value
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
