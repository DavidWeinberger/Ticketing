export interface ISale {
  id?: number;
}

export class Sale implements ISale {
  constructor(public id?: number) {}
}
