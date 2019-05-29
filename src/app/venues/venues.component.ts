import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GeoBox} from "./geobox.model";
import { environment } from '../../environments/environment';
import {Venue} from "./venue.model";

@Injectable()
  export class VenueComponent {
    constructor(private httpClient: HttpClient){
      this.venueList = [];
    }
    venueList:Venue[];

    get_venues(){
      let promise = new Promise((resolve, reject) => {
        this.httpClient.get<Venue[]>(environment.venueUrl + 'venues')
        .toPromise()
        .then(
          res => {
            this.venueList = res;
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
      });
    return promise;
  }

    get_venues_geo(body : GeoBox){
        return this.httpClient.post(environment.venueUrl + 'venues/geo', body);
    }
  }
