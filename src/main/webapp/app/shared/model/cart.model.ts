export interface ICart {
  id?: number;
  ticketId?: number;
  userId?: number;
}

export class Cart implements ICart {
  constructor(public id?: number, public ticketId?: number, public userId?: number) {}
}
