import { Moment } from 'moment';

export interface ICart {
  id?: number;
  ticketId?: number;
  userId?: number;
  time?: Moment;
  jHI_USERId?: number;
  tICKETSId?: number;
}

export class Cart implements ICart {
  constructor(
    public id?: number,
    public ticketId?: number,
    public userId?: number,
    public time?: Moment,
    public jHI_USERId?: number,
    public tICKETSId?: number
  ) {}
}
