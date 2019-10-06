export interface ITickets {
  id?: number;
  ticketType?: string;
  price?: number;
  amount?: number;
  place?: string;
}

export class Tickets implements ITickets {
  constructor(public id?: number, public ticketType?: string, public price?: number, public amount?: number, public place?: string) {}
}
