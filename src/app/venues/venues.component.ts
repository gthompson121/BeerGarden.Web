import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GeoBox} from "./geobox.model";
import { environment } from '../../environments/environment';

@Injectable()
  export class VenueComponent {
    constructor(private httpClient: HttpClient){}

    get_venues(){
        return this.httpClient.get(environment.venueUrl + 'venues');
    }

    get_venues_geo(body : GeoBox){
        return this.httpClient.post(environment.venueUrl + 'venues/geo', body);
    }
  }
