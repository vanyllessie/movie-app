import { BehaviorSubject,Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Purchase } from './model/purchase.model';
import { Sale } from './model/sale.model';
import { Album } from './model/album.model';
import { Comment } from './model/comment.model';
import { FilterContext, FilterByStars, FilterByComments, FilterByAvailability } from './model/filter.model';

@Injectable({
  providedIn: 'root'
})
export class Store {

  public purchases: Purchase[];
  public sales: Sale[];
  public albums: Album[];
  public comments: Comment[];
  public filterContext: FilterContext;

  constructor() {
    this.filterContext = new FilterContext();
  }

  update(){
    this.getAllPurchases();
    this.getAllSales();
    this.getAllAlbums().subscribe(response => {
      this.getAllComments();
      this.albums.map(album => {
        album.comments = this.getCommentsByAlbumId(album.id);
        album.sales = this.getSalesByAlbumLabel(album.label);
        album.purchases = this.getPurchasesByAlbumLabel(album.label);
        album.stars = this.calcAlbumStarsAverage(album);
        album.isAvailable = this.getTotalPurchasesByAlbum(album) > this.getTotalSalesByAlbum(album);
      })
    })
  }

  getAllPurchases(): Purchase[]{
    return this.purchases = [
      {
        "date": "2015-06-12",
        "albums": [
          { "label": "2006-AW-NONONO", "quantity": 40 },
        ]
      },
      {
        "date": "2015-06-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 40 },
          { "label": "2004-U-C", "quantity": 40 },
          { "label": "2001-S-SDL", "quantity": 40 },
          { "label": "2000-BS-OIDIA", "quantity": 40 },
          { "label": "1998-C-B", "quantity": 40 },
          { "label": "1998-M-ROL", "quantity": 40 },
          { "label": "1997-AB-R", "quantity": 40 },
          { "label": "1997-SP-S", "quantity": 40 }
        ]
      },
      {
        "date": "2015-06-12",
        "albums": [
          { "label": "2004-U-C", "quantity": 15 },
          { "label": "1998-M-ROL", "quantity": 60 }
        ]
      },
      {
        "date": "2015-06-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 10 }
        ]
      },
      {
        "date": "2015-06-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 30 },
          { "label": "2004-U-C", "quantity": 50 },
          { "label": "2000-BS-OIDIA", "quantity": 20 }
        ]
      },
      {
        "date": "2015-06-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 80 },
          { "label": "1997-SP-S", "quantity": 45 },
          { "label": "2004-U-C", "quantity": 70 }
        ]
      },
      {
        "date": "2015-06-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 100 },
          { "label": "2001-S-SDL", "quantity": 40 },
          { "label": "2000-BS-OIDIA", "quantity": 25 },
          { "label": "1998-C-B", "quantity": 70 },
          { "label": "1997-AB-R", "quantity": 60 }
        ]
      }
    ]
  }

  getAllAlbums(): Observable<Album[]>{
    let albumSubject = new BehaviorSubject([]);
    this.albums = [
      {
        "id": 1,
        "title": "Amelie",
        "director": "John Marswill",
        "country": "USA",
        "year": 2006,
        "label": "2006-AW-BTB"
      },
      {
        "id": 2,
        "title": "Confessions",
        "director": "Madie Willson",
        "country": "USA",
        "year": 2004,
        "label": "2004-U-C"
      },
      {
        "id": 3,
        "title": "Sons of People",
        "director": "Andres Aguirre",
        "country": "Colombia",
        "year": 2001,
        "label": "2001-S-SDL"
      },
      {
        "id": 4,
        "title": "Los hijos del verano",
        "director": "Eddie Fillbert ",
        "country": "USA",
        "year": 2000,
        "label": "2000-BS-OIDIA"
      },
      {
        "id": 5,
        "title": "Believe",
        "director": "Joe Montana",
        "country": "USA",
        "year": 1998,
        "label": "1998-C-B"
      },
      {
        "id": 6,
        "title": "Ray of Light",
        "director": "Gil Weaber",
        "country": "USA",
        "year": 1998,
        "label": "1998-M-ROL"
      },
      {
        "id": 7,
        "title": "Interstellar",
        "director": "Milk Ewael",
        "country": "UK",
        "year": 1997,
        "label": "1997-SP-S"
      },
      {
        "id": 8,
        "title": "Romanza",
        "director": "Andrea Binotti",
        "country": "Italy",
        "year": 1997,
        "label": "1997-AB-R"
      },
      {
        "id": 9,
        "title": "Fear in feal",
        "director": "Bruno Stevenson",
        "country": "USA",
        "year": 2016,
        "label": "2016-BR-1234"
      },
      {
        "id": 10,
        "title": "All in USA",
        "director": "Rick Madisson",
        "country": "USA",
        "year": 1998,
        "label": "1998-RH-R"
      },
      {
        "id": 11,
        "title": "Im With You",
        "director": "Eva Gillberth",
        "country": "USA",
        "year": 2016,
        "label": "2016-AB-R"
      },
      {
        "id": 12,
        "title": "Concrete",
        "director": "Quentin Tarantino",
        "country": "UK",
        "year": 1990,
        "label": "1990-FF-R"
      },
      {
        "id": 13,
        "title": "Sonic High",
        "director": "Quentin Tarantino",
        "country": "UK",
        "year": 1993,
        "label": "1993-FF-R"
      },
      {
        "id": 14,
        "title": "Wasting Light",
        "director": "Quentin Tarantino",
        "country": "UK",
        "year": 1990,
        "label": "1990-FF-R"
      },
      {
        "id": 15,
        "title": "Skin And Bones",
        "director": "Quentin Tarantino",
        "country": "UK",
        "year": 2010,
        "label": "2010-FF-R"
      },
      {
        "id": 16,
        "title": "Revelations",
        "director": "Guillermo del Toro",
        "country": "USA",
        "year": 1996,
        "label": "1996-AS-I"
      },
      {
        "id": 17,
        "title": "Out of Exile",
        "director": "Guillermo del Toro",
        "country": "USA",
        "year": 1992,
        "label": "1992-AS-I"
      },
      {
        "id": 18,
        "title": "Original Fire",
        "director": "Guillermo del Toro",
        "country": "USA",
        "year": 1999,
        "label": "1999-AS-I"
      },
      {
        "id": 19,
        "title": "Like a Stone",
        "director": "Guillermo del Toro",
        "country": "USA",
        "year": 2002,
        "label": "2002-AS-I"
      },
      {
        "id": 20,
        "title": "Shadows of water",
        "director": "Guillermo del Toro",
        "country": "USA",
        "year": 1991,
        "label": "1991-AS-I"
      },
      {
        "id": 21,
        "title": "Ultramega OK",
        "director": "Soundgarden",
        "country": "USA",
        "year": 1990,
        "label": "1990-SG-R"
      },
      {
        "id": 22,
        "title": "Commentary",
        "director": "Soundgarden",
        "country": "USA",
        "year": 1991,
        "label": "1991-SG-R"
      },
      {
        "id": 23,
        "title": "King Animal",
        "director": "Soundgarden",
        "country": "USA",
        "year": 1992,
        "label": "1992-SG-R"
      },
      {
        "id": 24,
        "title": "Down On",
        "director": "Soundgarden",
        "country": "USA",
        "year": 1995,
        "label": "1995-SG-R"
      },
      {
        "id": 25,
        "title": "Superunknow",
        "director": "Soundgarden",
        "country": "USA",
        "year": 2000,
        "label": "2000-SG-R"
      }
    ]
    albumSubject.next(this.albums);
    return albumSubject.asObservable();
  }

  getAllSales(): Sale []{
    return this.sales = [
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-NONONO", "quantity": 39 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2000-BS-OIDIA", "quantity": 1 },
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 2 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2004-U-C", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-C-B", "quantity": 1 },
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-M-ROL", "quantity": 1 },
          { "label": "2001-S-SDL", "quantity": 1 },
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 },
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-M-ROL", "quantity": 2 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 },
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-C-B", "quantity": 2 },
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 2 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 },
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
       {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 },
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 },
          { "label": "2006-AW-BTB", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 },
          { "label": "2004-U-C", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 },
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-C-B", "quantity": 2 },
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "2004-U-C", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 },
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 },
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "2004-U-C", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 },
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 2 },
          { "label": "2001-S-SDL", "quantity": 1 },
          { "label": "2006-AW-BTB", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 },
          { "label": "2004-U-C", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2004-U-C", "quantity": 1 },
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 },
          { "label": "2006-AW-BTB", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 },
          { "label": "1997-AB-R", "quantity": 2 },
          { "label": "2004-U-C", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 2 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 },
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "2004-U-C", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 },
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 },
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
       {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 3 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2004-U-C", "quantity": 1 },
          { "label": "2001-S-SDL", "quantity": 1 },
          { "label": "2006-AW-BTB", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 },
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 },
          { "label": "1998-C-B", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 },
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      },
       {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-AB-R", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 3 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2006-AW-BTB", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1997-SP-S", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "1998-M-ROL", "quantity": 2 },
          { "label": "2001-S-SDL", "quantity": 1 }
        ]
      },
      {
        "date": "2015-7-12",
        "albums": [
          { "label": "2004-U-C", "quantity": 1 },
          { "label": "2000-BS-OIDIA", "quantity": 1 }
        ]
      }
    ]
  }

  getAllComments(): Comment []{
    return this.comments = [
      {
        "id": 1,
        "comment": "Nullam sit amet lorem nec lectus euismod tempus. In auctor magna felis, sit amet feugiat mi ultricies id. Sed vel volutpat enim. Sed vel dignissim sem.",
        "stars": 4,
        "albumId": 2
      },
      {
        "id": 2,
        "comment": "Nam porttitor velit a metus ultricies sagittis. Integer ut ullamcorper massa, quis finibus lorem. Phasellus at nisi id arcu malesuada lobortis.",
        "stars": 3,
        "albumId": 6
      },
      {
        "id": 3,
        "comment": "Etiam nec lacus in nisl efficitur semper a a quam. Nunc dignissim mauris nisi, sed posuere nisl iaculis et. Sed eget elit tincidunt, hendrerit velit at, pellentesque ex.",
        "stars": 2,
        "albumId": 5
      },
      {
        "id": 4,
        "comment": "Sed imperdiet erat lectus, at eleifend erat auctor quis.",
        "stars": 5,
        "albumId": 3
      },
      {
        "id": 5,
        "comment": "Mauris id ipsum nec justo accumsan placerat sit amet non orci.",
        "stars": 5,
        "albumId": 1
      },
      {
        "id": 6,
        "comment": "Donec et nisi ullamcorper elit ullamcorper tincidunt.",
        "stars": 5,
        "albumId": 6
      },
      {
        "id": 7,
        "comment": "Nullam cursus dui vitae velit pharetra elementum. Praesent quis dictum quam. Maecenas nisl sem, semper sit amet pharetra ac, mattis et nibh.",
        "stars": 4,
        "albumId": 1
      },
      {
        "id": 8,
        "comment": "Aliquam dapibus ipsum vitae faucibus venenatis. Maecenas ac tincidunt velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        "stars": 4,
        "albumId": 3
      },
      {
        "id": 9,
        "comment": "Nulla imperdiet eleifend lectus, id hendrerit massa elementum a.",
        "stars": 2,
        "albumId": 7
      },
      {
        "id": 10,
        "comment": "Nam iaculis non augue vitae ornare.",
        "stars": 4,
        "albumId": 1
      },
      {
        "id": 11,
        "comment": "Suspendisse in blandit metus.",
        "stars": 5,
        "albumId": 2
      },
      {
        "id": 12,
        "comment": "Fusce hendrerit, lorem a interdum placerat, est dui congue leo, eget posuere urna justo in justo. Donec et nisi ullamcorper elit ullamcorper tincidunt.",
        "stars": 2,
        "albumId": 1
      },
      {
        "id": 13,
        "comment": "In sem lorem, consectetur vitae ornare vitae, maximus sed mi. In malesuada risus ac diam auctor suscipit.",
        "stars": 4,
        "albumId": 6
      },
      {
        "id": 14,
        "comment": "Quisque aliquet eleifend risus, gravida dignissim lectus vestibulum consectetur. Proin euismod felis eget odio feugiat, feugiat interdum magna tristique.",
        "stars": 3,
        "albumId": 1
      },
      {
        "id": 15,
        "comment": "Fusce feugiat ex nec est rutrum feugiat. Cras vitae aliquam nisl. Mauris sagittis lorem eget nunc porta rutrum. In porttitor sed est id ultricies.",
        "stars": 4,
        "albumId": 6
      },
      {
        "id": 16,
        "comment": "Pellentesque eget nisi a nibh vulputate rhoncus. Praesent iaculis eros nunc, tincidunt consectetur nibh aliquam consectetur.",
        "stars": 4,
        "albumId": 4
      },
      {
        "id": 17,
        "comment": "Vivamus auctor libero enim, ac tristique orci bibendum vel. Sed congue eleifend est. Fusce tristique varius tincidunt.",
        "stars": 3,
        "albumId": 3
      },
      {
        "id": 18,
        "comment": "Suspendisse potenti.",
        "stars": 5,
        "albumId": 1
      },
      {
        "id": 19,
        "comment": "Mauris dictum, sapien vitae vestibulum varius, risus libero maximus velit, nec dictum arcu lectus et elit. Morbi et quam vitae massa venenatis imperdiet. Donec malesuada molestie commodo. Suspendisse quis tincidunt urna.",
        "stars": 2,
        "albumId": 2
      },
      {
        "id": 20,
        "comment": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "stars": 4,
        "albumId": 3
      },
      {
        "id": 21,
        "comment": "n sem lorem, consectetur vitae ornare vitae, maximus sed mi. In malesuada risus ac diam auctor suscipit.",
        "stars": 5,
        "albumId": 6
      }
    ]
  }

  getTotalSalesByAlbum(album: Album): number{
    return album.sales.reduce((counter, sale) => {
      let localLabel = album.label;
      sale.albums.forEach(album => {
        if (album.label == localLabel) {
            counter += album.quantity;
        }
      })
      return counter;
    }, 0)
  }

  getTotalPurchasesByAlbum(album: Album): number{
    return album.purchases.reduce((counter, purchase) => {
      let localLabel = album.label;
      purchase.albums.forEach(album => {
        if (album.label == localLabel) {
            counter += album.quantity;
        }
      })
      return counter;
    }, 0)
  }

  getSalesByAlbumLabel(albumLabel) : Sale []{
    return this.sales.filter(sale => {
      let flag;
      sale.albums.forEach(album => {
        flag = flag || album.label == albumLabel ;
      })
      return flag;
    })
  }

  getPurchasesByAlbumLabel(albumLabel) : Purchase []{
    return this.purchases.filter(purchase => {
      let flag;
      purchase.albums.forEach(album => {
        flag = flag || album.label == albumLabel ;
      })
      return flag;
    })
  }

  getCommentsByAlbumId(albumId): Comment []{
    return this.comments.filter(comment => {
      return comment.albumId == albumId;
    })
  }

  getBestRankedAlbums(): Album []{
    this.filterContext.setFilterType(new FilterByStars());
    return this.filterContext.filter(this.albums, 1, 10);
  }

  getWorstRankedAlbums(): Album []{
    this.filterContext.setFilterType(new FilterByStars());
    return this.filterContext.filter(this.albums, -1, 10);
  }

  getMostCommentedAlbums(): Album []{
    this.filterContext.setFilterType(new FilterByComments());
    return this.filterContext.filter(this.albums, 1, 10);
  }

  getAvailableAlbums(): Album[]{
    this.filterContext.setFilterType(new FilterByAvailability());
    return this.filterContext.filter(this.albums, 1);
  }

  setAlbumComment(comment: Comment){
    this.comments.push(comment);
  }

  calcAlbumStarsAverage(album: Album): number{
    let average = 0
    album.comments.forEach(comment => {
      average += comment.stars;
    })
    average = average || 0;
    average = average / album.comments.length || 0;
    return parseFloat((average).toString().match(/^-?\d+(?:\.\d{0,1})?/)[0])
  }

}
