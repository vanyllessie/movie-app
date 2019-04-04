import {Transaction} from "./transaction.model";

export class Sale implements Transaction{
  public date;
  public albums;
  constructor(date, albums){
    this.date = date;
    this.albums = albums;
  }
}
