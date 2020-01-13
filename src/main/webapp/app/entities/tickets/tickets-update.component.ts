import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITickets, Tickets } from 'app/shared/model/tickets.model';
import { TicketsService } from './tickets.service';
import { reflectIdentifierOfDeclaration } from '@angular/compiler-cli/src/ngtsc/reflection';

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
    price: [null, [Validators.required, Validators.min(0)]],
    place: [],
    type: [],
    amount: [],
    rows: [],
    seats: [],
    state: []
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
      price: tickets.price,
      place: tickets.place,
      type: tickets.type,
      amount: tickets.amount,
      rows: tickets.sectorRows,
      seats: tickets.seats,
      state: tickets.state
    });
  }

  previousState() {
    window.history.back();
  }

  async save() {
    this.isSaving = true;
    // console.log('saving');
    const tickets = this.createFromForm();
    if (tickets.id !== undefined) {
      this.subscribeToSaveResponse(this.ticketsService.update(tickets));
    } else {
      // console.log(this.items + '=' + Types[Types.Sitzplatz]);
      this.subscribeToSaveResponse(this.ticketsService.create(tickets));
    }
  }

  private createFromForm(): ITickets {
    return {
      ...new Tickets(),
      id: this.editForm.get(['id']).value,
      price: this.editForm.get(['price']).value,
      place: this.editForm.get(['place']).value,
      type: Number(Types[this.items]),
      amount: this.editForm.get(['amount']).value,
      sectorRows: this.editForm.get(['rows']).value,
      seats: this.editForm.get(['seats']).value,
      state: this.editForm.get(['state']).value
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

  changedSelection() {
    if (this.items === Types[Types.Sitzplatz]) {
      this.isSeatTicket = true;
    } else {
      this.isSeatTicket = false;
    }
  }
}
