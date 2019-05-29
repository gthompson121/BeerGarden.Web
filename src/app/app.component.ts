/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { VenueComponent } from './venues/venues.component'
import {Venue} from "./venues/venue.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BeerGarden-WebApp';
  mapLat: number = 55.9533;
  mapLng: number = -3.1883;
  zoom: number = 15;
  venueList: Venue[] = [];
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
          this.mapLat = position.coords.latitude;
          this.mapLng = position.coords.longitude;
          this.zoom = 15;
          this.yourPosition.lat = position.coords.latitude;
          this.yourPosition.lat = position.coords.longitude;
        });
      }
    }

    constructor(private venueService : VenueComponent){
      this.venueService.get_venues().subscribe((res : Venue[])=>{
        console.log('get_venues');
        this.venueList = res;
      });
      }

      selectMarker(event) {
        if(this.selectedVenue != null)
        {
          this.selectedVenue.isSelected = false;
        }
        for(let v of this.venueList){
          if(v.Geo.Lat == event.latitude && v.Geo.lon == event.longitude)
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
          return '../assets/marker-blue.gif';
        } 
        else
        {
          return "";
        }
      }

      getDay(day: number)
      {
          switch(day)
          {
              case 0:{return "Monday"}
              case 1:{return "Tuesday"}
              case 2:{return "Wednesday"}
              case 3:{return "Thursday"}
              case 4:{return "Friday"}
              case 5:{return "Saturday"}
              case 6:{return "Sunday"}
              default: {return ""};
          }
      }
}
