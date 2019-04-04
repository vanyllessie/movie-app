import { Album } from "./album.model";

export interface Filter{
  filter(album: Album[], order: number, filterSize?: number): Album[];
}

export class FilterByStars implements Filter{
  filter(albums: Album[], order: number, filterSize?: number): Album[] {
    return albums.sort((a, b) => {
      if (a.stars < b.stars) {
        return order*1;
      }
      if (a.stars > b.stars) {
        return order*-1;
      }
      return 0;
    }).slice(0, filterSize || albums.length);
  }

}

export class FilterByComments implements Filter{
  filter(albums: Album[], order: number, filterSize?: number): Album[] {
    return albums.sort((a, b) => {
      if (a.comments.length < b.comments.length) {
        return order*1;
      }
      if (a.comments.length > b.comments.length) {
        return order*-1;
      }
      return 0;
    }).slice(0, filterSize || albums.length);
  }

}

export class FilterByAvailability implements Filter{
  filter(albums: Album[], order: number, filterSize?: number): Album[] {
    return albums.filter( album =>{
      return album.isAvailable;
    })
  }

}

export class FilterContext{
  filterType: Filter;
  setFilterType(filterType: Filter){
    this.filterType = filterType;
  }
  filter(albums: Album[], order: number, filterSize?: number): Album[] {
    return this.filterType.filter(albums, order, filterSize);
  }
}
