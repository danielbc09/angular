import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShortenPipe } from './shorten.pipe';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
