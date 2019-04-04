import { Component, AfterViewInit } from '@angular/core';
import { Store } from './cd-store/store.service'
import { ProductsService } from './services/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  canvasWidth: number;
  canvasGrid: number;
  canvasId: number

  constructor(public store:Store, public products:ProductsService){
    store.update();
    this.products.albums = this.store.albums;
    this.canvasGrid = Math.ceil(Math.sqrt(this.store.albums.length));
    this.canvasWidth = 340 * this.canvasGrid;
  }

  ngAfterViewInit(): void {
    this.centerAlbum(Math.ceil(this.products.albums.length / 2));
  }

  centerAlbum(albumIndex: number): void{
    let domAlbum, domCanvas, coordY, coordX
    domAlbum= document.querySelector('#movie-' + albumIndex);
    coordY = 0;
    if (domAlbum.classList.contains('movie--mosaic')) {
      coordY = domAlbum.offsetTop + domAlbum.offsetHeight * .30 -  ((window.innerHeight - domAlbum.offsetHeight) / 2);
    }
    else{
      coordY = domAlbum.offsetTop -  ((window.innerHeight - domAlbum.offsetHeight) / 2);
    }
    coordX = (domAlbum.offsetWidth + 60) * (albumIndex % this.canvasGrid - 1) - ((window.innerWidth - domAlbum.offsetWidth) / 2);
    domCanvas = document.querySelector('.canvas');
    domCanvas.scrollTop = coordY;
    domCanvas.scrollLeft = coordX;
  }
}
