export interface ITickets {
  id?: number;
  price?: number;
  place?: string;
  type?: number;
  amount?: number;
  rows?: number;
  seats?: number;
  state?: number;
}

export class Tickets implements ITickets {
  constructor(
    public id?: number,
    public price?: number,
    public place?: string,
    public type?: number,
    public amount?: number,
    public rows?: number,
    public seats?: number,
    public state?: number
  ) {}
}
