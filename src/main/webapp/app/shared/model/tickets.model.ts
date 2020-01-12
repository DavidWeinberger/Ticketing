export interface ITickets {
  id?: number;
  price?: number;
  place?: string;
  type?: number;
  amount?: number;
  sectorRows?: number;
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
    public sectorRows?: number,
    public seats?: number,
    public state?: number
  ) {}
}
