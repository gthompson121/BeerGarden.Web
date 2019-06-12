import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment'

// Google Maps
import { AgmCoreModule } from '@agm/core';

import {VenueComponent } from './venues/venues.component'
import { TwilightService } from './Twilight/twilight.service'
import { GetDayNamePipe  } from './venues/pipes/day.pipe';
import { GetDistancePipe } from './venues/pipes/distance.pipe'

@NgModule({
  declarations: [
    AppComponent,
    GetDayNamePipe,
    GetDistancePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapKey
    })
  ],
  providers: [VenueComponent, TwilightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
