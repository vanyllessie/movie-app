import { Component, Input } from '@angular/core';
import { Store } from '../../cd-store/store.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent{

  @Input() movie: any;
  @Input() canvasGrid: any;
  @Input() indexAlbum: number;


  constructor(public store:Store) {

  }

  canvasId(id: number): number{
    return (id - 6 * Math.floor( id/6 )) + 1;
  }

  isMosaic(id: number): boolean{
    return id % this.canvasGrid != 0 ? id % this.canvasGrid % 2 == 0 : false;
  }

  toogleComments(movie: any){
    movie.isActive = !movie.isActive;
    let domAlbum = document.getElementById('movie-' + movie.id).querySelector(".movie__content");
    domAlbum.scrollTop = domAlbum.scrollTop > 0 ? 0 : 470;
  }


}
