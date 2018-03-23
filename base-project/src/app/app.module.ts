import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShortenPipe } from './shorten.pipe';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,   
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
