import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
 import {SearchService} from './services/search.service';

import { AppComponent } from './app.component';
import {SearchDetailsComponent} from './search-details/search-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchDetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
