import { Component, OnInit } from '@angular/core';
import { AgmMap } from '@agm/core/directives/map'
import { MarkerManager } from '@agm/core/services/managers/marker-manager'
import { VenueComponent } from './venues/venues.component'
import {Venue} from "./venues/venue.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BeerGarden-WebApp';
  lat: number = 55.9533;
  lng: number = -3.1883;
  zoom: number = 15;
  venueList: Venue[] = [];
  selectedVenue: Venue;

  ngOnInit() {
    this.setCurrentLocation();
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.zoom = 15;
        });
      }
    }

    constructor(private venueService : VenueComponent){
      this.venueService.get_venues().subscribe((res : Venue[])=>{
        console.log('get_venues');
        this.venueList = res;
        console.log(this.venueList);
      });
      }

      selectMarker(event) {
        this.selectedVenue = {
          _id : event._id,
          Name: event.Name,
          Geo:{
            lon: event.lon,
            Lat: event.Lat
          }
        };
      }

}
