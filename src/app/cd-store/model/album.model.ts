import {Comment} from "./comment.model";
import { Sale } from "./sale.model";
import { Purchase } from "./purchase.model";

export class Album{
  public id: number;
  public title: string;
  public director: string;
  public country: string;
  public year: number;
  public label: string;
  public comments?: Comment[];
  public isAvailable?: boolean;
  public purchases?: Purchase[];
  public sales?: Sale[];
  public stars?: number;
  constructor(album){
    this.id = album.id;
    this.title = album.title;
    this.director = album.director;
    this.country = album.country;
    this.year = album.year;
    this.label = album.label;
    this.comments = [];
  }
}
