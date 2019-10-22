export interface ITickets {
  id?: number;
  price?: number;
  place?: string;
  amount?: number;
  type?: number;
}

export class Tickets implements ITickets {
  constructor(public id?: number, public price?: number, public place?: string, public amount?: number, public type?: number) {}
}
