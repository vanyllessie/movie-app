import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CdStoreModule } from './cd-store/cd-store.module';
import { MovieComponent } from './components/movie/movie.component';
import { ControlsComponent } from './components/controls/controls.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    CdStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
