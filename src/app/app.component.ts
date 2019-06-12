/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { VenueComponent } from './venues/venues.component'
import {Venue} from "./venues/venue.model";
import { TwilightService } from './Twilight/twilight.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beer Garden Edinburgh';
  mapLat: number = 55.9533;
  mapLng: number = -3.1883;
  zoom: number = 15;
  selectedVenue: Venue;
  map: google.maps.Map;
  yourPosition: {lat:number, lon:number};

  ngOnInit() {
    this.setCurrentLocation();
  }

  mapReady(readyMap:google.maps.Map){
    this.map = readyMap;
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          //south: 55.79841400847045, west: , north: 56.182472371206984, east: -2.625171043457044
          // Outwith Edinburgh so do not go to position
          if(position.coords.latitude > 55.79841400847045 && position.coords.latitude < 56.182472371206984
            && position.coords.longitude > -2.625171043457044 && position.coords.longitude < -3.807574607910169)
            {
              this.mapLat = position.coords.latitude;
              this.mapLng = position.coords.longitude;
              this.zoom = 15;
              this.yourPosition = { lat: position.coords.latitude, lon: position.coords.longitude };
              this.venueService.get_near_venues({lng: this.yourPosition.lon, lat: this.yourPosition.lat, count: 113});
            }
        });
      }
    }

    constructor(public venueService : VenueComponent, public twilightService : TwilightService){
        venueService.get_venues();
        twilightService.get_twilight();
      }

      selectMarker(event, venueId) {
        if(this.selectedVenue != null)
        {
          this.selectedVenue.isSelected = false;
        }
        for(let v of this.venueService.venueList){
          if(v._id == venueId)
          {
            this.selectedVenue = v;
            this.selectedVenue.isSelected = true;
            break;
          }
        };
        this.map.panTo({ lat: event.latitude, lng: event.longitude });
      }

      markerIconUrl(isSelected: boolean) {
        if(isSelected)
        {
          return 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_yellow+.png';
        } 
        else
        {
          return "";
        }
      }

      getUserMarkerIcon(){
          return "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_black.png"
      }
}
