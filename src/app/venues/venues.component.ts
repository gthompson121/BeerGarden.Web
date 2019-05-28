import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GeoBox} from "./geobox.model";

@Injectable()
  export class VenueComponent {
    constructor(private httpClient: HttpClient){}

    get_venues(){
        return this.httpClient.get('http://localhost:3000/venues');
    }

    get_venues_geo(body : GeoBox){
        return this.httpClient.post('http://localhost:3000/venues/geo', body);
    }
  }
