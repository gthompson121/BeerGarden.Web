import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment'

// Google Maps
import { AgmCoreModule } from '@agm/core';

import {VenueComponent } from './venues/venues.component'
import { GetDayNamePipe  } from './venues/day.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GetDayNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapKey
    })
  ],
  providers: [VenueComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
