export interface ITabletView {
  id?: number;
}

export class TabletView implements ITabletView {
  constructor(public id?: number) {}
}
