import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GeoBox} from "./geobox.model";
import { environment } from '../../environments/environment';
import {Venue} from "./venue.model";
import { NearPosition } from './near_position.model'

@Injectable()
  export class VenueComponent {
    constructor(private httpClient: HttpClient){
      this.venueList = [];
      this.isDistanceSet = false;
    }
    venueList:Venue[];
    isDistanceSet: boolean;

    get_venues(){
      let promise = new Promise((resolve, reject) => {
        this.httpClient.get<Venue[]>(environment.venueUrl + 'venues')
        .toPromise()
        .then(
          res => {
            if(!this.isDistanceSet)
            {
              this.venueList = res;
            }
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
      });
    return promise;
  }

  get_near_venues(p: NearPosition){
      let promise = new Promise((resolve, reject) => {
        this.httpClient.post<Venue[]>(environment.venueUrl + 'venues/near', p)
        .toPromise()
        .then(
          res => {
            this.venueList = res;
            this.isDistanceSet = true;
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

    get_venues_near(body){
      return this.httpClient.post(environment.venueUrl + 'venues/near', body);
  }
  }
