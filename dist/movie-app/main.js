(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"canvas\">\n  <div class=\"canvas__content\" [ngStyle]=\"{'width.px': canvasWidth}\">\n      <app-controls></app-controls>\n      <app-movie *ngFor=\"let movie of products.albums; let i = index\" [movie]=\"movie\" [canvasGrid]=\"canvasGrid\" [indexAlbum]=\"i + 1\"></app-movie>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".canvas {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  top: 0;\n  left: 0;\n  overflow: scroll; }\n  .canvas .canvas__content {\n    margin: auto; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cd_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cd-store/store.service */ "./src/app/cd-store/store.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(store, products) {
        this.store = store;
        this.products = products;
        store.update();
        this.products.albums = this.store.albums;
        this.canvasGrid = Math.ceil(Math.sqrt(this.store.albums.length));
        this.canvasWidth = 340 * this.canvasGrid;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.centerAlbum(Math.ceil(this.products.albums.length / 2));
    };
    AppComponent.prototype.centerAlbum = function (albumIndex) {
        var domAlbum, domCanvas, coordY, coordX;
        domAlbum = document.querySelector('#movie-' + albumIndex);
        coordY = 0;
        if (domAlbum.classList.contains('movie--mosaic')) {
            coordY = domAlbum.offsetTop + domAlbum.offsetHeight * .30 - ((window.innerHeight - domAlbum.offsetHeight) / 2);
        }
        else {
            coordY = domAlbum.offsetTop - ((window.innerHeight - domAlbum.offsetHeight) / 2);
        }
        coordX = (domAlbum.offsetWidth + 60) * (albumIndex % this.canvasGrid - 1) - ((window.innerWidth - domAlbum.offsetWidth) / 2);
        domCanvas = document.querySelector('.canvas');
        domCanvas.scrollTop = coordY;
        domCanvas.scrollLeft = coordX;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_cd_store_store_service__WEBPACK_IMPORTED_MODULE_1__["Store"], _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cd_store_cd_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cd-store/cd-store.module */ "./src/app/cd-store/cd-store.module.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/controls/controls.component */ "./src/app/components/controls/controls.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"],
                _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_5__["ControlsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _cd_store_cd_store_module__WEBPACK_IMPORTED_MODULE_3__["CdStoreModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cd-store/cd-store.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cd-store/cd-store.module.ts ***!
  \*********************************************/
/*! exports provided: CdStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdStoreModule", function() { return CdStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.service */ "./src/app/cd-store/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CdStoreModule = /** @class */ (function () {
    function CdStoreModule() {
    }
    CdStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [],
            providers: [
                _store_service__WEBPACK_IMPORTED_MODULE_2__["Store"]
            ],
            exports: []
        })
    ], CdStoreModule);
    return CdStoreModule;
}());



/***/ }),

/***/ "./src/app/cd-store/model/filter.model.ts":
/*!************************************************!*\
  !*** ./src/app/cd-store/model/filter.model.ts ***!
  \************************************************/
/*! exports provided: FilterByStars, FilterByComments, FilterByAvailability, FilterContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByStars", function() { return FilterByStars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByComments", function() { return FilterByComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByAvailability", function() { return FilterByAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterContext", function() { return FilterContext; });
var FilterByStars = /** @class */ (function () {
    function FilterByStars() {
    }
    FilterByStars.prototype.filter = function (albums, order, filterSize) {
        return albums.sort(function (a, b) {
            if (a.stars < b.stars) {
                return order * 1;
            }
            if (a.stars > b.stars) {
                return order * -1;
            }
            return 0;
        }).slice(0, filterSize || albums.length);
    };
    return FilterByStars;
}());

var FilterByComments = /** @class */ (function () {
    function FilterByComments() {
    }
    FilterByComments.prototype.filter = function (albums, order, filterSize) {
        return albums.sort(function (a, b) {
            if (a.comments.length < b.comments.length) {
                return order * 1;
            }
            if (a.comments.length > b.comments.length) {
                return order * -1;
            }
            return 0;
        }).slice(0, filterSize || albums.length);
    };
    return FilterByComments;
}());

var FilterByAvailability = /** @class */ (function () {
    function FilterByAvailability() {
    }
    FilterByAvailability.prototype.filter = function (albums, order, filterSize) {
        return albums.filter(function (album) {
            return album.isAvailable;
        });
    };
    return FilterByAvailability;
}());

var FilterContext = /** @class */ (function () {
    function FilterContext() {
    }
    FilterContext.prototype.setFilterType = function (filterType) {
        this.filterType = filterType;
    };
    FilterContext.prototype.filter = function (albums, order, filterSize) {
        return this.filterType.filter(albums, order, filterSize);
    };
    return FilterContext;
}());



/***/ }),

/***/ "./src/app/cd-store/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/cd-store/store.service.ts ***!
  \*******************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/filter.model */ "./src/app/cd-store/model/filter.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Store = /** @class */ (function () {
    function Store() {
        this.filterContext = new _model_filter_model__WEBPACK_IMPORTED_MODULE_2__["FilterContext"]();
    }
    Store.prototype.update = function () {
        var _this = this;
        this.getAllPurchases();
        this.getAllSales();
        this.getAllAlbums().subscribe(function (response) {
            _this.getAllComments();
            _this.albums.map(function (album) {
                album.comments = _this.getCommentsByAlbumId(album.id);
                album.sales = _this.getSalesByAlbumLabel(album.label);
                album.purchases = _this.getPurchasesByAlbumLabel(album.label);
                album.stars = _this.calcAlbumStarsAverage(album);
                album.isAvailable = _this.getTotalPurchasesByAlbum(album) > _this.getTotalSalesByAlbum(album);
            });
        });
    };
    Store.prototype.getAllPurchases = function () {
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
        ];
    };
    Store.prototype.getAllAlbums = function () {
        var albumSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
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
        ];
        albumSubject.next(this.albums);
        return albumSubject.asObservable();
    };
    Store.prototype.getAllSales = function () {
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
        ];
    };
    Store.prototype.getAllComments = function () {
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
        ];
    };
    Store.prototype.getTotalSalesByAlbum = function (album) {
        return album.sales.reduce(function (counter, sale) {
            var localLabel = album.label;
            sale.albums.forEach(function (album) {
                if (album.label == localLabel) {
                    counter += album.quantity;
                }
            });
            return counter;
        }, 0);
    };
    Store.prototype.getTotalPurchasesByAlbum = function (album) {
        return album.purchases.reduce(function (counter, purchase) {
            var localLabel = album.label;
            purchase.albums.forEach(function (album) {
                if (album.label == localLabel) {
                    counter += album.quantity;
                }
            });
            return counter;
        }, 0);
    };
    Store.prototype.getSalesByAlbumLabel = function (albumLabel) {
        return this.sales.filter(function (sale) {
            var flag;
            sale.albums.forEach(function (album) {
                flag = flag || album.label == albumLabel;
            });
            return flag;
        });
    };
    Store.prototype.getPurchasesByAlbumLabel = function (albumLabel) {
        return this.purchases.filter(function (purchase) {
            var flag;
            purchase.albums.forEach(function (album) {
                flag = flag || album.label == albumLabel;
            });
            return flag;
        });
    };
    Store.prototype.getCommentsByAlbumId = function (albumId) {
        return this.comments.filter(function (comment) {
            return comment.albumId == albumId;
        });
    };
    Store.prototype.getBestRankedAlbums = function () {
        this.filterContext.setFilterType(new _model_filter_model__WEBPACK_IMPORTED_MODULE_2__["FilterByStars"]());
        return this.filterContext.filter(this.albums, 1, 10);
    };
    Store.prototype.getWorstRankedAlbums = function () {
        this.filterContext.setFilterType(new _model_filter_model__WEBPACK_IMPORTED_MODULE_2__["FilterByStars"]());
        return this.filterContext.filter(this.albums, -1, 10);
    };
    Store.prototype.getMostCommentedAlbums = function () {
        this.filterContext.setFilterType(new _model_filter_model__WEBPACK_IMPORTED_MODULE_2__["FilterByComments"]());
        return this.filterContext.filter(this.albums, 1, 10);
    };
    Store.prototype.getAvailableAlbums = function () {
        this.filterContext.setFilterType(new _model_filter_model__WEBPACK_IMPORTED_MODULE_2__["FilterByAvailability"]());
        return this.filterContext.filter(this.albums, 1);
    };
    Store.prototype.setAlbumComment = function (comment) {
        this.comments.push(comment);
    };
    Store.prototype.calcAlbumStarsAverage = function (album) {
        var average = 0;
        album.comments.forEach(function (comment) {
            average += comment.stars;
        });
        average = average || 0;
        average = average / album.comments.length || 0;
        return parseFloat((average).toString().match(/^-?\d+(?:\.\d{0,1})?/)[0]);
    };
    Store = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Store);
    return Store;
}());



/***/ }),

/***/ "./src/app/components/controls/controls.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/controls/controls.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"controls\">\n  <h4 (click)=\"toggleFilters()\">\n    Filters\n    <i class=\"fas fa-filter\"></i>\n  </h4>\n  <ul *ngIf=\"filtersVisible\">\n    <li (click)=\"showAll()\">\n      <span>All Albums </span>\n      <i class=\"fas fa-check-square\"></i>\n    </li>\n    <li (click)=\"showAvailable()\">\n      <span>Available </span>\n      <i class=\"fas fa-check-square\"></i>\n    </li>\n    <li (click)=\"showMostCommented()\">\n      <span>Most Commented </span>\n      <i class=\"fas fa-check-square\"></i>\n    </li>\n    <li (click)=\"showBestRanked()\">\n      <span>Best Ranked </span>\n      <i class=\"fas fa-check-square\"></i>\n    </li>\n    <li (click)=\"showWorstRanked()\">\n      <span>Worst Ranked </span>\n      <i class=\"fas fa-check-square\"></i>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/controls/controls.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/controls/controls.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controls {\n  position: fixed;\n  top: 0;\n  right: 0;\n  background: #7a1c72;\n  border-radius: 0 0 0 35px;\n  width: 200px;\n  z-index: 3;\n  padding: 10px 20px;\n  box-sizing: border-box; }\n  .controls h4 {\n    font-weight: 300;\n    font-size: 14px;\n    font-family: 'Roboto Slab', serif;\n    color: white;\n    text-align: right;\n    border-bottom: 1px solid white;\n    padding: 0px 0px 10px;\n    margin: 0;\n    cursor: pointer; }\n  .controls > ul {\n    padding: 0;\n    list-style: none;\n    color: white; }\n  .controls > ul > li {\n      display: inline-block;\n      cursor: pointer;\n      width: 100%;\n      margin: 5px 0px;\n      text-align: right;\n      box-sizing: border-box;\n      font-size: 16px; }\n  .controls > ul > li > span, .controls > ul > li > i {\n        font-weight: 300;\n        font-size: 14px; }\n  .controls > ul > li > span {\n        font-family: 'Roboto Slab', serif; }\n  .controls > ul > li i {\n        margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/components/controls/controls.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/controls/controls.component.ts ***!
  \***********************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cd_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cd-store/store.service */ "./src/app/cd-store/store.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlsComponent = /** @class */ (function () {
    function ControlsComponent(store, products) {
        this.store = store;
        this.products = products;
        this.filtersVisible = false;
    }
    ControlsComponent.prototype.showAvailable = function () {
        this.products.albums = this.store.getAvailableAlbums();
    };
    ControlsComponent.prototype.showMostCommented = function () {
        this.products.albums = this.store.getMostCommentedAlbums();
    };
    ControlsComponent.prototype.showBestRanked = function () {
        this.products.albums = this.store.getBestRankedAlbums();
    };
    ControlsComponent.prototype.showWorstRanked = function () {
        this.products.albums = this.store.getWorstRankedAlbums();
    };
    ControlsComponent.prototype.showAll = function () {
        this.products.albums = this.store.albums;
    };
    ControlsComponent.prototype.toggleFilters = function () {
        this.filtersVisible = !this.filtersVisible;
    };
    ControlsComponent.prototype.ngOnInit = function () {
    };
    ControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-controls',
            template: __webpack_require__(/*! ./controls.component.html */ "./src/app/components/controls/controls.component.html"),
            styles: [__webpack_require__(/*! ./controls.component.scss */ "./src/app/components/controls/controls.component.scss")]
        }),
        __metadata("design:paramtypes", [_cd_store_store_service__WEBPACK_IMPORTED_MODULE_1__["Store"], _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ControlsComponent);
    return ControlsComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/movie.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{ 'movie movie--color-' + canvasId(indexAlbum) }}\" id=\"{{'movie-' + indexAlbum}}\" [ngClass]=\"[movie.isActive ? 'movie--active' : '' , indexAlbum % this.canvasGrid != 0 && indexAlbum % this.canvasGrid % 2 == 0 ? 'movie--mosaic' : '' ]\" >\n  <div class=\"movie__bg\">\n    <img src='{{\"../../../assets/images/movies/movie-dummy-\" + canvasId(indexAlbum) + \".jpg\"}}'>\n  </div>\n  <div class=\"movie__content\">\n    <header class=\"movie__header\">\n      <span class=\"movie__stars\">\n        <i *ngFor=\"let star of [0,0,0,0,0]; index as i\" [ngClass]=\"store.calcAlbumStarsAverage(movie) > i ? 'fas fa-star': 'far fa-star' \"></i>\n          <span>{{store.calcAlbumStarsAverage(movie)}}</span>\n      </span>\n    </header>\n    <div class=\"movie__body\">\n      <h2 class=\"movie__body__title\">{{movie.title}}</h2>\n      <div class=\"movie__body__metadata\">\n        <p>{{movie.director}}</p>\n        <p>{{movie.year}}</p>\n        <p>{{movie.country}}</p>\n        <p>Sales: {{store.getTotalSalesByAlbum(movie)}}</p>\n        <p>Purchases: {{store.getTotalPurchasesByAlbum(movie)}}</p>\n        <p>In Stock: {{store.getTotalPurchasesByAlbum(movie) - store.getTotalSalesByAlbum(movie)}}</p>\n      </div>\n      <img class=\"movie__body__img\" src='{{\"../../../assets/images/movies/movie-dummy-\" + canvasId(indexAlbum) + \".jpg\"}}'>\n    </div>\n    <div class=\"movie__comments\">\n      <h3 class=\"movie__comments__title\" (click)=\"toogleComments(movie)\">\n        Reviews\n      </h3>\n      <div *ngIf=\"movie.comments.length == 0\" class=\"movie__comments__unique\">\n        <p>Sin comentarios</p>\n      </div>\n      <div *ngFor=\"let comment of movie.comments\" class=\"movie__comments__unique\">\n        <p>Mauris id ipsum nec justo accumsan placerat sit amet non orci.</p>\n        <span class=\"movie__stars\">\n          <i *ngFor=\"let star of [0,0,0,0,0]; index as i\" [ngClass]=\"comment.stars > i ? 'fas fa-star': 'far fa-star' \"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/movie/movie.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/movie.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie {\n  position: relative;\n  height: 470px;\n  width: 280px;\n  display: inline-block;\n  border-radius: 13px;\n  box-shadow: 0px 17px 46px 1px #00000052;\n  margin: 30px;\n  overflow: hidden; }\n  .movie:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: red; }\n  .movie.movie--active .movie__content {\n    overflow: scroll; }\n  .movie.movie--mosaic {\n    -webkit-transform: translateY(30%);\n            transform: translateY(30%); }\n  .movie.movie--color-1 .movie__bg:after {\n    background: linear-gradient(to bottom, #fa6896ba 0%, #fa6896 41%, #fa6896 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b8fa6896', endColorstr='#fa6896',GradientType=0 ); }\n  .movie.movie--color-1 .movie__content .movie__body {\n    background: linear-gradient(to bottom, rgba(250, 104, 150, 0) 0%, #fa6896e0 41%, #fa6896 100%); }\n  .movie.movie--color-2 .movie__bg:after {\n    background: linear-gradient(to bottom, #8b3eaaba 0%, #8b3eaa 41%, #8b3eaa 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b8fa6896', endColorstr='#8b3eaa',GradientType=0 ); }\n  .movie.movie--color-2 .movie__content .movie__body {\n    background: linear-gradient(to bottom, rgba(250, 104, 150, 0) 0%, #8b3eaae0 41%, #8b3eaa 100%); }\n  .movie.movie--color-3 .movie__bg:after {\n    background: linear-gradient(to bottom, #c65bb6ba 0%, #c65bb6 41%, #c65bb6 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b8fa6896', endColorstr='#c65bb6',GradientType=0 ); }\n  .movie.movie--color-3 .movie__content .movie__body {\n    background: linear-gradient(to bottom, rgba(250, 104, 150, 0) 0%, #c65bb6e0 41%, #c65bb6 100%); }\n  .movie.movie--color-4 .movie__bg:after {\n    background: linear-gradient(to bottom, #bc83b3ba 0%, #bc83b3 41%, #bc83b3 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b8fa6896', endColorstr='#bc83b3',GradientType=0 ); }\n  .movie.movie--color-4 .movie__content .movie__body {\n    background: linear-gradient(to bottom, rgba(250, 104, 150, 0) 0%, #bc83b3e0 41%, #bc83b3 100%); }\n  .movie.movie--color-5 .movie__bg:after {\n    background: linear-gradient(to bottom, #9c4969ba 0%, #9c4969 41%, #9c4969 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b8fa6896', endColorstr='#9c4969',GradientType=0 ); }\n  .movie.movie--color-5 .movie__content .movie__body {\n    background: linear-gradient(to bottom, rgba(250, 104, 150, 0) 0%, #9c4969e0 41%, #9c4969 100%); }\n  .movie.movie--color-6 .movie__bg:after {\n    background: linear-gradient(to bottom, #1d2941ba 0%, #1d2941 41%, #1d2941 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b8fa6896', endColorstr='#1d2941',GradientType=0 ); }\n  .movie.movie--color-6 .movie__content .movie__body {\n    background: linear-gradient(to bottom, rgba(250, 104, 150, 0) 0%, #1d2941e0 41%, #1d2941 100%); }\n  .movie .movie__bg {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n  .movie .movie__bg > img {\n      position: absolute;\n      width: 130%;\n      right: 0;\n      top: 0; }\n  .movie .movie__bg:after {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      height: 100%; }\n  .movie .movie__content {\n    overflow: hidden;\n    position: relative;\n    height: 100%; }\n  .movie .movie__content .movie__header {\n      text-align: right;\n      position: absolute;\n      top: 10px;\n      right: 15px; }\n  .movie .movie__content .movie__body {\n      text-align: center;\n      margin: 55px 0 0px; }\n  .movie .movie__content .movie__body .movie__body__title {\n        position: relative;\n        color: #fbfefe;\n        font-family: 'Roboto Condensed', serif;\n        margin: 0;\n        font-size: 24px;\n        line-height: 30px; }\n  .movie .movie__content .movie__body .movie__body__metadata {\n        position: relative;\n        color: white; }\n  .movie .movie__content .movie__body .movie__body__metadata > p {\n          font-family: 'Roboto Condensed', serif;\n          font-weight: 100;\n          font-size: 14px;\n          margin: 0; }\n  .movie .movie__content .movie__body .movie__body__img {\n        position: relative;\n        width: 92%;\n        border-radius: 5px;\n        margin: 30px 0 20px;\n        box-shadow: 0 7px 7px -4px #0000009e; }\n  .movie .movie__content .movie__comments {\n      position: relative;\n      margin: 10px 25px;\n      border-radius: 14px;\n      background-color: #7d1e6e;\n      box-sizing: border-box;\n      padding: 6px 14px; }\n  .movie .movie__content .movie__comments .movie__comments__title {\n        padding: 0 0 6px 0;\n        box-sizing: border-box;\n        margin: 0;\n        border-bottom: 1px solid #e2e2e2;\n        color: #e2e2e2;\n        font-family: 'Roboto Slab', serif;\n        font-weight: 300;\n        text-align: center;\n        font-size: 17px;\n        cursor: pointer; }\n  .movie .movie__content .movie__comments .movie__comments__unique > p {\n        font-size: 12px;\n        color: #e2e2e2;\n        margin: 15px 0 1px; }\n  .movie .movie__stars {\n    z-index: 2;\n    position: relative; }\n  .movie .movie__stars > span {\n      color: white;\n      margin-left: 8px; }\n  .movie .movie__stars > i {\n      color: #ffeb86; }\n"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cd_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cd-store/store.service */ "./src/app/cd-store/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieComponent = /** @class */ (function () {
    function MovieComponent(store) {
        this.store = store;
    }
    MovieComponent.prototype.canvasId = function (id) {
        return (id - 6 * Math.floor(id / 6)) + 1;
    };
    MovieComponent.prototype.isMosaic = function (id) {
        return id % this.canvasGrid != 0 ? id % this.canvasGrid % 2 == 0 : false;
    };
    MovieComponent.prototype.toogleComments = function (movie) {
        movie.isActive = !movie.isActive;
        var domAlbum = document.getElementById('movie-' + movie.id).querySelector(".movie__content");
        domAlbum.scrollTop = domAlbum.scrollTop > 0 ? 0 : 470;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MovieComponent.prototype, "movie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MovieComponent.prototype, "canvasGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MovieComponent.prototype, "indexAlbum", void 0);
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/components/movie/movie.component.scss")]
        }),
        __metadata("design:paramtypes", [_cd_store_store_service__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsService = /** @class */ (function () {
    function ProductsService() {
    }
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/giovannilessie/Documents/workspace/prueba/al/movie-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map