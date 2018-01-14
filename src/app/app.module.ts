import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
 import {SearchService} from './services/search.service';
 import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {SearchDetailsComponent} from './search-details/search-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchDetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
