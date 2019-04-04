import { Component, OnInit } from '@angular/core';
import { Store } from '../../cd-store/store.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  filtersVisible: boolean;

  constructor(public store:Store, public products:ProductsService){
    this.filtersVisible = false;
  }

  showAvailable(){
    this.products.albums = this.store.getAvailableAlbums();
  }
  showMostCommented(){
    this.products.albums = this.store.getMostCommentedAlbums();
  }
  showBestRanked(){
    this.products.albums = this.store.getBestRankedAlbums();
  }
  showWorstRanked(){
    this.products.albums = this.store.getWorstRankedAlbums();
  }
  showAll(){
    this.products.albums = this.store.albums;
  }

  toggleFilters(){
    this.filtersVisible = !this.filtersVisible;
  }

  ngOnInit() {
  }

}
