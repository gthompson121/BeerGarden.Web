import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Google Maps
import { AgmCoreModule } from '@agm/core';

import {VenueComponent } from './venues/venues.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJmmsErvjDcYDTY9lYLp0Xk4dxcPtHziY'
    })
  ],
  providers: [VenueComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
