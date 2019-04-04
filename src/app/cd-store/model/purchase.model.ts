import {Transaction} from "./transaction.model";

export class Purchase implements Transaction{
  public date;
  public albums;
  constructor(date, albums){
    this.date = date;
    this.albums = albums;
  }
}
