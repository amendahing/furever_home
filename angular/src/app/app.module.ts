import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { NewComponent } from './new/new.component';
import { AllComponent } from './all/all.component';
import { RandomComponent } from './random/random.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    AllComponent,
    RandomComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyComDx4blD1hD6FgUej0R-NfXNJMiDWAx4'
    }),
    JsonpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
