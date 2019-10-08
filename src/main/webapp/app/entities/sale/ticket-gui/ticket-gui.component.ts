import { Component, Input, OnInit } from '@angular/core';
import { Tickets } from 'app/shared/model/tickets.model';

@Component({
  selector: 'jhi-ticket-gui',
  templateUrl: './ticket-gui.component.html',
  styleUrls: ['./ticket-gui.component.scss']
})
export class TicketGuiComponent implements OnInit {
  @Input() ticket: Tickets;

  constructor() {}

  ngOnInit() {
    console.log(this.ticket);
  }
}
